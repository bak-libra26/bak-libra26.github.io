---
summary: 이 글에서는 Reactor 체인에서 “어디서, 왜 스레드가 바뀌는지”를 Schedulers, publishOn, subscribeOn 중심으로 정리했습니다.
tags:
  - 자바
  - 네티
  - 네트워크 프레임워크
created_date: 2026-01-25 10:18:21
last_modified_date: 2026-01-25 10:18:21
---

> **이 글에서는 네티(Netty)가 무엇인지, 등장하게된 배경을 중심으로 살펴봅니다.**

## `java.net`: 기본적인 소켓 네트워크 프로그래밍

일반적으로 자바로 TCP/IP 기반 네트워크 프로그래밍을 해야 한다면 서버는 `java.net.ServerSocket`, 클라이언트는 `java.net.Socket`을 사용하는 방식을 먼저 떠올리게 됩니다. **이 방식은 입력과 출력을 `InputStream` / `OutputStream`으로 동기식·블로킹 방식으로 처리**하기 때문에 **연결 수가 많아질수록 쓰레드와 확장성 측면에서 한계가 드러납니다.**

---

### `java.net`:  스트림 기반의 소켓 구조 한눈에 보기

`java.net`은 **소켓을 열고`InputStream` / `OutputStream`을 꺼낸 뒤, 연결마다 하나의 연속적인 바이트 스트림으로 데이터를 주고받는 구조를 사용합니다.**

> **스트림:** 순서가 있는 데이터의 흐름

서버와 클라이언트를 구현한 코드 자체는 조금 다르지만, **둘 다 “스트림에서 읽고, 스트림에 쓰는” 동일한 패턴 위에서 동작**합니다.
아래 코드는 가장 단순한 형태의 TCP/IP 서버 코드로 서버 소켓을 연 후, 클라이언트가 접속할 때마다 새로운 쓰레드를 만들어 해당 연결의 입출력을 전담하게 합니다.

- **`java.net` 을 사용한 TCP/IP 서버 예제**
  ```java
  public class Demo {

      public static void main(String[] args) throws IOException {
        final ServerSocket sc =  new ServerSocket(8080);

        while (true) {
            Socket socket = sc.accept();
            System.out.println("connected from " + socket.getLocalSocketAddress());

            new Thread(() -> {
                try (InputStream is = socket.getInputStream()) {
                    BufferedReader br = new BufferedReader(new InputStreamReader(is));

                    String line = "";
                    while ((line = br.readLine()) != null) {
                        System.out.println("\"" + line + "\" received from " + socket.getLocalSocketAddress());
                    }
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }


            }).start();
        }
      }
  }
  ```

연결을 받아들이는 `accept()` 호출은 새 클라이언트가 올 때까지 블로킹되고, **각 클라이언트 연결을 처리하는 쓰레드 안에서는 `InputStream.read()`와 `OutputStream.write()`가 데이터가 준비될 때까지 블로킹된 채 대기**합니다. 그래서 클라이언트가 많아질수록 이런 쓰레드가 기하급수적으로 늘어나고, 컨텍스트 스위칭과 쓰레드 스택 메모리 사용량도 함께 증가하여, 접속자가 많아질수록 서버의 확장성이 급격히 떨어집니다.

---

## `java.nio`: 논블로킹 네트워크 프로그래밍의 시작

`java.net` 소켓은 스트림 기반 블로킹 I/O라, 많은 연결을 처리할수록 이를 담당하는 쓰레드 수가 기하급수적으로 늘어나는 구조입니다. 이런 한계를 완화하기 위해 **자바 1.4에서 도입된 `java.nio`는 채널(Channel), 버퍼(Buffer), 셀렉터(Selector) 를 중심으로 한 논블로킹 I/O 모델을 제공**합니다.

---

### `java.nio`: 채널(Channel)

`java.net` 가 소켓마다 InputStream, OutputStream을 따로 꺼내서 읽기와 쓰기를 처리했다면, **`java.nio` 는 채널(Channel)이라는 추상화를 통해 양방향 입출력을 한 객체에 모아 처리**합니다.
예를 들어 TCP 클라이언트 소켓은 `SocketChannel`, 서버 소켓은 `ServerSocketChannel`로 표현되며, 이 채널들이 `ByteBuffer`와 같은 버퍼에서 데이터를 읽어 오거나 버퍼에 담긴 데이터를 네트워크로 써 내보내는 방식으로 동작합니다.

채널의 중요한 특징은 **논블로킹 모드를 지원**한다는 점입니다. 채널을 논블로킹으로 설정하면 `read()`를 호출했을 때 데이터가 아직 도착하지 않았다면 바로 0을 반환하고, 준비된 경우에만 실제로 바이트를 읽습니다. 덕분에 **하나의 쓰레드가 여러 채널을 돌면서 “지금 처리할 수 있는 것들만 조금씩 처리하는” 구조**를 만들 수 있게 됩니다. 

- **논블로킹 방식을 지원하는 `java.nio`의 `Channel`**
  ```java
  SocketChannel channel = SocketChannel.open(new InetSocketAddress("localhost", 8080));
  channel.configureBlocking(false); // 논블로킹 모드로 전환
  ```

---

### `java.nio`: 버퍼(ByteBuffer)

`java.net` 에서는 일반적으로 byte[] 배열을 직접 만든 후, `InputStream.read(byte[])`로 데이터를 채운 뒤, 필요한 만큼만 잘라 쓰는 식으로 작업했습니다. **`java.nio`** 는 여기에 한 단계 더 들어가서, **바이트 배열을 `ByteBuffer`라는 객체로 감싸고 `position`, `limit`, `capacity` 같은 메타데이터를 함께 관리**합니다.

`ByteBuffer`는 “얼마나 읽어왔는지”, “어디까지 썼는지”를 명시적으로 관리할 수 있어서, 부분적으로 읽힌 데이터나, 여러 번에 나눠 오는 패킷을 다룰 때 유용합니다. 예를 들어 채널에서 데이터를 읽으면 `position`이 늘어나고, `flip()`을 호출하면 읽기 모드로 전환되어 `position`을 0으로 돌린 뒤 limit까지를 읽을 수 있게 됩니다. 

- **`ByteBuffer` 사용 예시**
  ```java
  ByteBuffer buffer = ByteBuffer.allocate(1024);

  int read = channel.read(buffer); // 채널 → 버퍼로 읽기
  if (read > 0) {
      buffer.flip();               // 읽기 모드로 전환
      // buffer에서 데이터 소비...
  
---

### `java.nio`: 셀렉터(Selector)

채널과 버퍼만으로는 “논블로킹 I/O”의 장점을 다 살리기 어렵습니다. **Selector는 하나의 쓰레드가 여러 채널을 동시에 감시하면서, 지금 당장 읽기/쓰기가 가능한 채널만 골라서 처리할 수 있게 해주는 핵심 컴포넌트**입니다.

사용 흐름은 대략 이렇습니다. 먼저 Selector.open()으로 셀렉터를 생성하고, 각 채널을 register()를 통해 셀렉터에 등록합니다. 이후 루프 안에서 select()를 호출하면, 읽기 가능, 쓰기 가능, 연결 완료 같은 이벤트가 발생한 채널이 있을 때까지 블로킹되었다가, 준비된 채널 목록을 돌려줍니다. 애플리케이션 코드는 이 목록을 순회하면서 각 채널에서 read() 또는 write()를 수행하고, 다시 select()를 호출하는 패턴으로 동작합니다.

이 구조 덕분에 **더 이상 “연결 1개당 쓰레드 1개”를 강제하지 않고도, 하나의 이벤트 루프 쓰레드가 수많은 연결을 관리**할 수 있게 됩니다. **네티의 `EventLoop`가 내부적으로 바로 이 셀렉터 기반 이벤트 루프 위에서 동작**하기 때문에, Selector는 네티의 쓰레드 모델을 이해하는 데도 중요한 배경 지식이 됩니다.

- **`Selector` 사용 예시**
  ```java
  Selector selector = Selector.open();
  channel.configureBlocking(false);
  channel.register(selector, SelectionKey.OP_READ);

  while (true) {
      selector.select();                 // 준비된 채널이 생길 때까지 블로킹
      Set<SelectionKey> keys = selector.selectedKeys();
      for (SelectionKey key : keys) {
          if (key.isReadable()) {
              SocketChannel ch = (SocketChannel) key.channel();
              // ch.read(buffer) 등으로 처리
          }
      }
      keys.clear();                      // 다음 루프를 위해 정리
  }
  ```

---

### `java.nio`: 채널 · 버퍼 · 셀렉터를 합친 서버 구조 예시

채널(`Channel`)과 버퍼(`ByteBuffer`), 그리고 셀렉터(`Selector`) 이 세 가지를 합쳐서, 논블로킹 이벤트 루프 구조로 바꿨을 때 어떻게 코드가 달라지는지 예제를 통해 살펴보겠습니다.

- **`java.nio` 를 사용 예시**
  ```java
  public class Demo {
      public static void main(String[] args) throws IOException {
          ServerSocketChannel serverChannel = ServerSocketChannel.open();
          serverChannel.configureBlocking(false);
          serverChannel.bind(new InetSocketAddress(8080));

          Selector selector = Selector.open();
          serverChannel.register(selector, SelectionKey.OP_ACCEPT);

          ByteBuffer buffer = ByteBuffer.allocate(1024);

          while (true) {
              selector.select();

              Set<SelectionKey> keys = selector.selectedKeys();
              Iterator<SelectionKey> it = keys.iterator();

              while (it.hasNext()) {
                  SelectionKey key = it.next();
                  it.remove();

                  if (key.isAcceptable()) {
                      SocketChannel client = serverChannel.accept();
                      client.configureBlocking(false);
                      System.out.println("[ACCEPT] " + client.getRemoteAddress());

                      client.register(selector, SelectionKey.OP_READ);

                  } else if (key.isReadable()) {
                      SocketChannel client = (SocketChannel) key.channel();
                      buffer.clear();
                      int read = client.read(buffer);

                      if (read <= 0) {
                          System.out.println("[CLOSE] " + client.getRemoteAddress());
                          key.cancel();
                          client.close();
                          continue;
                      }

                      buffer.flip();
                      byte[] bytes = new byte[buffer.remaining()];
                      buffer.get(bytes);
                      String line = new String(bytes);

                      System.out.println("[RECV] " + line.trim()
                                        + " from " + client.getRemoteAddress());
                  }
              }
          }
      }
  }
  ```

`java.net`은 연결마다 전용 쓰레드를 두고 블로킹 방식으로 처리했지만, **`java.nio`는 하나 이상의 셀렉터 기반 이벤트 루프가 등록된 채널들 중 “지금 I/O 처리가 가능한 채널”만 골라서 순차적으로 조금씩 처리**한다는 점이 핵심입니다.

---

### `java.nio`: 스레드는 줄었는데, 코드는 더 복잡해졌다

`java.nio` 덕분에 “연결 1개당 쓰레드 1개” 모델에서 벗어나, 적은 수의 쓰레드로 더 많은 연결을 처리할 수 있는 기반은 마련되었습니다. 다만 그만큼 채널·버퍼·셀렉터를 직접 다루는 코드가 필요해지고, 아래와 같은 단점들이 개발자 쪽으로 그대로 이전되었다는 점도 함께 보게 됩니다.

- **`java.nio` 를 통한 네트워크 프로그래밍의 한계**

  1. 채널, 버퍼, 셀렉터를 애플리케이션 코드에서 직접 다뤄야 해서 각 채널의 부분 읽기/부분 쓰기, 버퍼에 남은 데이터, 메시지 경계 상태를 일일이 관리해야 한다.
  2. 여러 연결과 예외 상황(타임아웃, 연결 종료, 동시 이벤트 등)을 처리하기 위해 복잡한 상태 머신과 예외 처리가 `select()` 루프 주변에 쌓이면서, 코드 구조가 빠르게 난해해진다.
  3. 셀렉터 구현이 `OS`마다 달라 `epoll`/`select` 관련 버그나 성능 이슈에 직접 영향을 받고, `direct ByteBuffer` 사용 시 네이티브 메모리와 리소스 해제를 별도로 관리해야 하는 등 플랫폼·메모리 레벨의 디테일까지 신경 써야 한다.
  4. `java.nio`는 저수준 I/O API에 가까워서 TCP 프레이밍, 인코더/디코더, 다단계 핸들러 파이프라인 같은 고수준 구조를 모두 직접 설계·구현해야 하고, 이를 재사용 가능한 프레임워크로 끌어올리기까지의 진입 장벽이 높다.

결국 **`java.nio`** 는 **“성능과 스케일”은 해결**했지만, 그만큼 **“코드 복잡도와 구현 난이도”라는 비용을 개발자에게** 넘겨 주었습니다. 이 시점에서, `java.nio`의 장점을 그대로 살리면서도 저수준 디테일은 감춰 주는 프레임워크가 필요해졌고, 그 역할을 하는 대표적인 도구가 바로 네티(`Netty`)입니다.


---

# Netty: 비동기 이벤트 기반 네트워크 프레임워크

`java.net` 은 단순하지만 쓰레드와 확장성에 한계가 있었고, `java.nio` 는 논블로킹 I/O 로 이 문제를 풀어 주는 대신 채널·버퍼·셀렉터를 직접 다뤄야 하는 복잡함을 가져왔습니다. `네티(Netty)`는 이 두 세계 사이에서, `java.nio` 위에 비동기 이벤트 기반 네트워크 애플리케이션 프레임워크를 올려 놓고 서버·클라이언트를 더 적은 코드로, 더 일관된 모델(EventLoop–Channel–Pipeline–Handler) 위에서 구현할 수 있도록 해 줍니다.




## Netty: 핵심 구조 한 번에 보기

네티에서 서버 측 구성을 이해할 때는 보통 **`EventLoop`, `Channel`, `ChannelPipeline`, `ChannelHandler` 네 가지 요소**로 정리해 볼 수 있습니다.

---

### EventLoop: 네티의 스레드 모델

`java.nio`에서 직접 구현하던 **“Selector + while(select()) 루프”를 네티가 대신 캡슐화해 둔 것이 바로 `EventLoop`** 입니다. 내부적으로는 `java.nio`의 셀렉터 위에서 돌아가는 단일 쓰레드 이벤트 루프로, 하나의 이벤트 루프가 여러 채널의 I/O 이벤트를 처리합니다. 덕분에 **“연결 1개당 쓰레드 1개” 대신, “소수의 이벤트 루프 쓰레드가 많은 연결을 돌려 가며 처리하는 구조”** 를 자연스럽게 사용할 수 있습니다.


---

### Channel: 연결의 단위

**원격 피어와의 네트워크 연결 하나**를 표현하는 객체로, 기존의 `Socket`/`SocketChannel`에 해당합니다.
각 채널은 하나의 이벤트 루프에 배정되고, 그 채널과 관련된 I/O 이벤트는 **항상 같은 쓰레드(`EventLoop`)에서 처리되도록 보장**됩니다.

---


### ChannelPipeline: 이벤트 처리 경로

**해당 채널로 들어오고 나가는 이벤트가 지나가는 처리 파이프라인**입니다.
내부적으로 여러 채널 핸들러를 양방향 연결 리스트 형태로 연결해 두고, 읽기/쓰기 이벤트가 발생했을 때 이 핸들러 체인을 순서대로 통과시키며 처리합니다.

---


### ChannelHandler: 이벤트 처리 로직

**실제 업무 로직을 수행하는 컴포넌트**로, 디코더, 인코더, 비즈니스 로직, 로깅 등 역할별로 잘게 쪼개어 핸들러를 구성합니다.
이들을 파이프라인에 조합해 넣는 방식으로, **TCP 프레이밍부터 메시지 파싱, 응답 생성까지를 모듈화된 형태로 표현**할 수 있습니다.

이 구조 덕분에, **개발자는 더 이상 Selector, ByteBuffer, SelectionKey를 직접 만지지 않고도 “이벤트가 들어왔을 때 어떤 순서로 어떤 핸들러를 태울지” 중심으로 서버·클라이언트를 설계**할 수 있습니다. 


---

이 글에서는 네티(Netty)가 어떤 배경에서 등장했고, 네트워크 프로그래밍을 어떤 모델로 바라보게 만드는지 큰 그림만 살펴보았습니다.