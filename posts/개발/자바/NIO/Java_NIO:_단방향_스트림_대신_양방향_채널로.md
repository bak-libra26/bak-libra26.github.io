---
summary: 채널(FileChannel, SocketChannel)을 사용해 파일 I/O와 소켓 I/O를 처리하는 기본 패턴, 스트림 기반 java.io와의 차이를 정리했습니다.
tags:
  - Java
  - JavaNIO
references:
created_date: 2026-02-03 21:28:56
last_modified_date: 2026-02-03 21:28:56
visibility: on-publish
---

> 이 글에서는 JDK 1.4 에 도입된 **java.nio** 의 **채널(`Channel`)** 이 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# `java.nio`: 채널(`Channel`)

채널(`Channel`)은 파일이나 소켓에서 데이터를 읽고 쓰기 위해 사용하는 입·출력 통로입니다
스트림과 달리 채널은 읽고 쓰는 작업을 모두 지원하며, 바이트 버퍼(`ByteBuffer`) 를 통해서만 데이터를 주고받습니다. 

- **스트림(`Stream`) 특징**
  - `java.io` 에서 데이터가 흐르는 단방향 통로
  - 동기 방식만 지원한다.
- **채널(`Channel`) 특징**
  - `java.nio` 에서 데이터가 흐르는 양방향 통로
  - 동기/비동기 방식을 모두 지원한다.

---

> 바이트 버퍼 관련해서 정리한 글을 보고싶으시다면 [보러가기](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%EC%9E%90%EB%B0%94/NIO/Java_NIO:_%EB%B0%94%EC%9D%B4%ED%8A%B8_%EB%B2%84%ED%8D%BC%EB%A1%9C_%EB%B2%84%ED%8D%BC_%EC%83%81%ED%83%9C_%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0) 를 눌러주세요

---

## `Channel`: 여러가지 채널
채널 구현체는 여러 가지가 있는데, 어떤 대상에 I/O 할지에 따라 알맞은 구현체를 선택하면 됩니다. 
파일은 `FileChannel`, TCP 서버는 `ServerSocketChannel`, TCP 클라이언트는 `SocketChannel`, UDP 통신은 `DatagramChannel`을 사용합니다.
상황에 맞게 사용할 채널을 고르고, 그 채널과 `ByteBuffer`를 어떻게 함께 쓰는지만 익히면 됩니다.
제가 자주 사용하는 채널에 대한 정보를 아래에 표로 정리해봤습니다.

| 채널 종류            | 사용하는 상황              |  설명                                          |
|----------------------|------------------------|---------------------------------------------------|
| FileChannel          | 파일 I/O               | 파일에서 데이터를 읽고 쓸 때 사용하는 채널 |
| SocketChannel        | TCP 클라이언트 소켓    | 서버와 TCP 로 데이터를 주고받는 채널 |
| ServerSocketChannel  | TCP 서버 소켓          | 클라이언트의 TCP 연결을 받아들이는 채널 |


---

### `FileChannel`: 파일을 다룰때는 ?

파일을 다룰 때는 `java.nio.channels.FileChannel` 을 사용합니다.

--- 

#### `FileChannel`: 파일을 읽어보자

- `FileChannel`: 파일 읽기 예제
  ```java
  Path path = Paths.get("example.txt");

  // 1. 채널 열기 (읽기 전용)
  try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {

      ByteBuffer buffer = ByteBuffer.allocate(1024);

      // 2. 채널 → 버퍼로 읽기
      int readBytes = channel.read(buffer);
      System.out.println("read bytes = " + readBytes);

      // 3. 읽기 모드로 전환
      buffer.flip();

      byte[] bytes = new byte[buffer.remaining()];
      buffer.get(bytes);

      String content = new String(bytes);
      System.out.println(content);
  }
  ```

  `FileChannel.open(Path path, OpenOption... options)` 을 사용해서 경로(`Path`) 에 해당하는 파일에 채널을 만듭니다. 
  이후 `channel.read(ByteBuffer buffer)` 로 파일 내용을 채널에서 버퍼로 읽어오고, 애플리케이션은 이렇게 채워진 바이트 버퍼를 꺼내서 문자열로 바꾸거나 파싱해서 사용합니다.

  > `FileChannel.open(Path path, OpenOption... options)` 에서 `OpenOption... options` 는 `OpenOption` 을 0개 이상 넘길 수 있는 가변 매개변수를 의미합니다.
  

---

#### `FileChannel`: 파일에 데이터를 써보자.

- `FileChannel`: 파일에 데이터 쓰기 예제
  ```java
  Path path = Paths.get("example-write.txt");
  String data = "Hello FileChannel!";

  ByteBuffer buffer = ByteBuffer.wrap(data.getBytes());

  // 1. 채널 열기 (파일 없으면 만들고, 있으면 덮어쓰기)
  try (FileChannel channel = FileChannel.open(
          path,
          StandardOpenOption.CREATE,
          StandardOpenOption.WRITE
  )) {
      // 2. 버퍼 → 채널로 쓰기
      while (buffer.hasRemaining()) {
          channel.write(buffer);
      }
  }
  ```

  파일에 작성할 문자열을 먼저 `ByteBuffer`에 담은 후, `FileChannel`을 열고 `FileChannel.write(ByteBuffer buffer)` 메서드를 통해 버퍼에 있는 데이터를 파일로 흘려보냅니다. 이 과정을 통해 애플리케이션 → 버퍼 → 채널 → 파일 순서로 데이터가 이동하게됩니다.

---

#### 번외) `Files` 를 통해 이 모든 과정을 손쉽게

개인적으로는 파일을 읽거나 파일에 데이터를 쓰는 간단한 작업은 파일 채널(`FileChannel`) 이 아니라 `Files` 에 정의된 `Files.readAllBytes()`, `Files.write()` 과 같은 유틸리티 메서드를 사용합니다. 
`Files` 안에 정의되어있는 유틸리티 메서드들은 내부적으로 `FileChannelImpl` 을 사용해서 이 과정을 쉽게 처리할 수 있도록 도와줍니다.

---

### `ServerSocketChannel`: TCP 서버에는 ?

`ServerSocketChannel`은 TCP 서버를 만들 때 사용하는 채널입니다. `ServerSocketChannel.open()` 으로 채널을 만들고 `bind(int port)` 로 포트를 열어 주면, TCP 서버는 해당 포트로 들어오는 클라이언트 접속을 받을 준비가 됩니다.

별도 설정(`configureBlocking(boolean block)`)을 해주지 않는다면 서버는 동기 방식으로 동작하기 때문에 클라이언트가 접속할 때까지 `accept()` 라인에서 블로킹되어 기다립니다.

연결이 들어오면 `accept()` 가 그 클라이언트와 통신할 `SocketChannel` 하나를 만들어 반환하는데 이후 해당 `SocketChannel` 을 통해 데이터를 주고받게 됩니다.



- `ServerSocketChannel` 사용 예제
  ```java
  public class ServerSocketChannelDemo {
      public static void main( String[] args ) throws IOException {
        try (ServerSocketChannel serverChannel = ServerSocketChannel.open()) {
            serverChannel.bind(new InetSocketAddress(8081));
            System.out.println("listening on port " + 8081);

            try (SocketChannel socketChannel = serverChannel.accept()) {
                System.out.println("connected from " + socketChannel.getRemoteAddress());

                // 연결 후, 진행될 작업들 ..
            }
        }
      }
  }
  ```

  만약 `configureBlocking(false)` 와 셀렉터(`Selector`)를 함께 사용하면 하나의 쓰레드에서 여러 클라이언트 채널을 번갈아가며 처리하는 TCP 서버를 만들 수 있습니다.

---

### `SocketChannel`: TCP 클라이언트에는 ?

`SocketChannel`은 TCP 클라이언트를 만들 때 쓰는 채널로 `SocketChannel.open(new InetSocketAddress("localhost", 8081))` 처럼 서버 주소를 넣어 호출하면 해당 서버로 연결을 시도합니다. 

TCP 서버와 연결된 이후에는 해당 `SocketChannel` 을 통해 데이터를 주고받는데, 이 때 바이트 버퍼(`ByteBuffer`) 의 `read(ByteBuffer buffer)`, `write(ByteBuffer buffer)` 메서드를 사용합니다.

- `SocketChannel` 사용 예제
  ```java
  public class SocketChannelClientDemo {
      public static void main(String[] args) throws IOException {
          InetSocketAddress address = new InetSocketAddress("localhost", 8081);

          try (SocketChannel socketChannel = SocketChannel.open(address)) {
              System.out.println("connected to " + address);

              // 서버로 메시지 보내기
              String message = "Hello from client!";
              ByteBuffer writeBuffer = ByteBuffer.wrap(message.getBytes());
              while (writeBuffer.hasRemaining()) {
                  socketChannel.write(writeBuffer);
              }

              // 에코 응답 읽기
              ByteBuffer readBuffer = ByteBuffer.allocate(1024);
              int read = socketChannel.read(readBuffer);
              if (read > 0) {
                  readBuffer.flip();
                  byte[] bytes = new byte[readBuffer.remaining()];
                  readBuffer.get(bytes);
                  System.out.println("echo from server = " + new String(bytes));
              }
          }
      }
  }
  ```




---


## `Channel`: