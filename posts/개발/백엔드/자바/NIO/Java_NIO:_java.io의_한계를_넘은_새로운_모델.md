---
summary: java.io의 스트림·블로킹 모델 한계를 짚고, java.nio가 버퍼·채널·셀렉터 조합으로 어떻게 다른 I/O 모델을 제공하는지 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2025-08-23 21:28:56
last_modified_date: 2026-01-25 21:28:56
---


## `java.nio`: java.io의 한계를 넘은 새로운 모델

애플리케이션을 개발하다 보면 파일이나 네트워크를 통해 데이터를 읽고 쓰는 작업을 자주 하게 됩니다. 간단한 유틸리티나 소규모 서비스라면 `java.io`만으로도 충분하지만, 여러 클라이언트와 동시에 통신해야 하는 서버 애플리케이션이나, 대량의 파일 I/O를 처리해야 하는 시스템을 개발해야 하는 경우에는 `java.io`만으로는 한계가 보이기 시작합니다. 이런 상황에서 등장한 것이, `java.io`의 스트림/블로킹 방식과는 다른 새로운 I/O 모델인 `java.nio` 입니다.

---

### 기존 IO(`java.io`) 라이브러리의 한계

`java.io`는 `1.0` 버전부터 제공되던 전통적인 입출력 라이브러리입니다. 데이터는 `InputStream` / `OutputStream`을 통해 **스트림 형태로 한 방향으로 흐르고**, 읽기/쓰기 메서드 호출이 완료될 때까지 해당 스레드는 그대로 블로킹됩니다.

이 구조는 코드가 단순한 대신, 동시성이 중요한 서버 환경에서는 다음과 같은 한계를 드러냅니다.

- **스트림(Stream) 기반**: `InputStream`, `OutputStream`, `Reader`, `Writer` 같은 타입 위주 설계  
- **블로킹 I/O**: `read()`, `write()`가 완료될 때까지 스레드가 멈춰 있음  
- **연결 1개당 스레드 1개에 가깝게 설계되는 경우가 많아**, 연결 수가 많아지면 스레드 수와 컨텍스트 스위치 비용이 함께 폭증

작은 프로그램에는 큰 문제가 아니지만, 많은 소켓 연결을 다루는 서버를 만들기에는 구조적인 제약이 있습니다.

---

### `java.nio`: 버퍼·채널·셀렉터 기반의 새로운 I/O 모델 

이런 한계를 넘기 위해 `1.4` 버전에서 도입된 것이 `java.nio`입니다. 핵심 아이디어는 세 가지입니다.

- 데이터를 스트림 대신 **버퍼(Buffer)** 에 담고  
- 입출력 대상은 **채널(Channel)** 을 통해 다루며  
- 여러 채널의 I/O 이벤트를 **셀렉터(Selector)** 를 통해 한 곳에서 모아서 처리한다 

이를 통해, **적은 수의 스레드만으로도 많은 연결을 관리할 수 있는 기반을 마련**하고, **논블로킹 I/O를 자연스럽게 지원**하게 됩니다.

---

#### `java.nio`: 채널(Channel)

채널(`Channel`)은 기존의 `InputStream` / `OutputStream`을 대체하는 **양방향 I/O 통로**입니다. 

- 대표 구현: `FileChannel`, `SocketChannel`, `ServerSocketChannel` 등  
- 읽기와 쓰기를 모두 지원  
- `configureBlocking(false)`로 논블로킹 모드 설정 가능  

---

#### `java.nio`: 버퍼(Buffer)

**버퍼(`Buffer`)** 는 실제 데이터를 담아 두는 메모리 블록입니다. 가장 많이 쓰이는 타입은 **`ByteBuffer`** 입니다. 

- 주요 속성: `capacity`(최대 용량), `position`(현재 위치), `limit`(읽기/쓰기 한계)  
- 쓰기 모드에서 데이터를 채운 뒤 `flip()`을 호출해 읽기 모드로 전환  
- `clear()` / `compact()` 등으로 다음 I/O를 위한 상태를 조절  

---

#### `java.nio`: 셀렉터(Selector)

**셀렉터(`Selector`)** 는 여러 채널을 등록해 두고, 그 중에서 **“지금 이벤트가 발생한 채널”만 골라서 처리할 수 있게 해주는 멀티플렉서**입니다. 

- 채널을 `OP_ACCEPT`, `OP_READ`, `OP_WRITE` 같은 관심 이벤트와 함께 등록  
- `select()` 호출로 이벤트가 생긴 채널 목록만 가져와 처리  
- **하나의 스레드가 여러 채널의 I/O를 감시·처리**하는 구조를 구현 가능  

***

### `java.nio`: 어떻게 사용할까?

`java.nio` 의 채널(`Channel`), 버퍼(`Buffer`), 셀렉터(`Selector`)를 사용하면 아래와 같이 논블로킹 방식의 서버를 구현할 수 있습니다.

- **`java.nio`를 사용한 서버 구현**
  ```java
  public class NioServerExample {

      public static void main(String[] args) throws IOException {
          // 1. 서버 채널 열고 논블로킹 모드로 전환
          ServerSocketChannel serverChannel = ServerSocketChannel.open();
          serverChannel.configureBlocking(false);
          serverChannel.bind(new InetSocketAddress(8080));

          // 2. 셀렉터 생성 후 서버 채널 등록 (새 연결 수락 이벤트 관심)
          Selector selector = Selector.open();
          serverChannel.register(selector, SelectionKey.OP_ACCEPT);

          ByteBuffer buffer = ByteBuffer.allocate(1024);

          while (true) {
              // 3. 처리할 이벤트가 생길 때까지 블로킹
              selector.select();

              Set<SelectionKey> keys = selector.selectedKeys();
              Iterator<SelectionKey> it = keys.iterator();

              while (it.hasNext()) {
                  SelectionKey key = it.next();
                  it.remove();

                  if (key.isAcceptable()) {
                      // 4. 새 연결 수락
                      SocketChannel client = serverChannel.accept();
                      client.configureBlocking(false);
                      System.out.println("[ACCEPT] " + client.getRemoteAddress());

                      // 이후에는 이 채널의 READ 이벤트만 감시
                      client.register(selector, SelectionKey.OP_READ);

                  } else if (key.isReadable()) {
                      // 5. 기존 연결에서 데이터 읽기
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

위 예제는 `java.nio`의 채널·버퍼·셀렉터를 조합해 서버를 구현한 코드로, `java.io`와 달리 하나의 셀렉터 기반 이벤트 루프가 등록된 채널들 중에서 I/O가 가능한 채널만 골라 순차적으로 조금씩 처리합니다.