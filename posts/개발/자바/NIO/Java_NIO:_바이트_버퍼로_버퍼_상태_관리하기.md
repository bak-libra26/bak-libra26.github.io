---
summary: 바이트 버퍼(ByteBuffer) 의 position/limit/capacity와 flip/clear/compact 동작을 중심으로, 버퍼가 읽기/쓰기 모드를 어떻게 오가며 데이터를 다루는지 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2026-01-25 21:28:56
last_modified_date: 2026-01-25 21:28:56
---




# ByteBuffer: 스트림 대신 버퍼를 쓰는 이유



`java.io`에서 파일이나 소켓 I/O를 할 때는 `InputStream`, `OutputStream`을 사용합니다. 이 스트림을 통해 데이터를 주고받을 때는, 결국 **바이트 배열(`byte[]`)을 직접 만들어서** 그 안에 읽어 오거나 그 배열을 스트림에 흘려보내게 됩니다. 이 방식은 단순하고 직관적이지만, **매번 배열을 새로 만들거나 어디까지 읽었는지·처리했는지 기억에 의존해야 하고, 인덱스를 직접 관리해야 해서 코드가 금방 지저분해집니다.**

`java.nio` 는 이러한 **배열·인덱스 관리 문제를 `ByteBuffer`를 통해 해결**합니다. `ByteBuffer`는 바이트 배열을 객체로 감싸고, `capacity`·`limit`·`position` 같은 **메타데이터를 함께 관리**하면서, **읽기/쓰기 모드를 명시적으로 전환**할 수 있게 도와주는 도구입니다.

`ByteBuffer`는 `java.nio`에서 데이터를 다룰 때 가장 핵심적인 요소라고 할 수 있습니다. 하지만 어렵게 생각할 필요는 없으며 `capacity`, `limit`, `position` 순서로 이해하고 나면 손쉽게 사용할 수 있습니다.

---

## ByteBuffer: 쉽게 이해하기


`ByteBuffer`는 내부 바이트 배열을 그냥 감싸고 있는 것처럼 보이지만, 사실은 이 배열을 다루기 위한 몇 가지 상태 정보를 함께 들고 있는 객체입니다. 이 상태를 나타내는 값이 바로 `capacity`, `limit`, `position` 이라는 메타데이터입니다.
`capacity`는 버퍼 전체 크기, `limit`은 지금 읽거나 쓸 수 있는 최대 지점을 나타내고 `position`은 다음에 읽거나 쓸 위치를 나타냅니다. 이제 이 세 가지가 실제로 어떻게 사용되는지 하나씩 알아보겠습니다.

---

### ByteBuffer: capacity

`capacity`는 이 버퍼가 담을 수 있는 바이트의 **총 크기**를 의미합니다. `ByteBuffer.allocate(n)`은 내부적으로 `new byte[n]`을 준비한다고 생각하면 되고, 이렇게 생성한 바이트 버퍼에는 최대 `n`바이트까지만 데이터를 넣을 수 있습니다. **한 번 정해진 `capacity` 값은 버퍼를 새로 만들지 않는 이상 변경되지 않습니다.**

```java
ByteBuffer buffer = ByteBuffer.allocate(8);
System.out.println("capacity = " + buffer.capacity()); // 8
```  


바이트 배열을 직접 생성할 때 바이트 배열의 크기를 잘 정해야 하듯이 `ByteBuffer` 또한 **`capacity`를 어떻게 잡느냐에 따라 한 번에 처리할 수 있는 데이터의 양과, 버퍼를 다시 만들어야 하는 빈도가 달라집니다.** 실전에서는 프로토콜에서 허용하는 최대 메시지 크기나, 파일을 어느 정도 조각으로 나눠 읽을지 등을 기준으로 적절한 `capacity`를 정하면 됩니다.

---


### ByteBuffer: read / write mode

---

### ByteBuffer: read/write 모드



---

### ByteBuffer: limit

`limit`은 현재 읽기/쓰기의 상한선을 나타냅니다. 쓰기 모드에서는 보통 `capacity`와 같고, 읽기 모드에서는 “여기까지가 유효한 데이터”라는 경계를 의미합니다.

---

### ByteBuffer: position

`position`은 다음에 읽거나 쓸 인덱스를 가리킵니다. 쓰기 모드에서는 write를 할 때마다, 읽기 모드에서는 get을 할 때마다 `position`이 앞으로 한 칸씩 움직입니다.

---


## ByteBuffer: flip으로 쓰기 모드를 읽기 모드로 바꾸기

---

## ByteBuffer: clear와 compact는 언제 써야 할까

---

## ByteBuffer: 예시를 통한 정리

---