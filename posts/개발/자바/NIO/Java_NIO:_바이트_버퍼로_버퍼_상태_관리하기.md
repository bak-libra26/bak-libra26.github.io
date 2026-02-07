---
summary: 바이트 버퍼(ByteBuffer) 의 position/limit/capacity와 flip/clear/compact 동작을 중심으로, 버퍼가 읽기/쓰기 모드를 어떻게 오가며 데이터를 다루는지 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2026-01-27 21:28:56
last_modified_date: 2026-01-27 21:28:56
visibility: public
---

> 이 글에서는 **Java NIO** 의 **ByteBuffer** 가 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# `java.nio`: 바이트버퍼(`ByteBuffer`)  

바이트 버퍼(`ByteBuffer`)는 `java.nio` 에서 입출력 데이터를 효율적으로 다루기 위한 메모리 버퍼 클래스입니다. 

---

## `ByteBuffer`: 생성 위치에 따른 차이.

바이트 버퍼는 메모리 할당 위치에 따라 `DirectByteBuffer` 와 `HeapByteBuffer` 로 나눌 수 있 두 가지로 나눌 수 있습니다.
`DirectByteBuffer` 는 운영체제의 시스템 메모리에 직접 생성되어 커널 메모리와 직접 데이터를 교환하기 때문에 압도적인 성능적 이점이 존재하나 생성 비용이 높다는 단점이 존재합니다.
반면 `HeapByteBuffer` 는 `JVM(Java Virtual Machine)` 이 관리하는 힙 메모리에 생성되기 때문에 생성이 빠르나 I/O 작업 시 내부 복사 과정이 발생해 느리다는 단점이 존재합니다.

- **`DirectByteBuffer`**: **운영체제 시스템 메모리에 생성**된다.
  1. **`allocateDirect(int capacity)` 로 생성**한다.
  2. 운영체제(`OS; Operating System`)에 시스템 메모리를 할당받아야 한다. 
  2. 데이터 커널 메모리와 직접 데이터 교환하기 때문에 **대용량 파일 또는 네트워크 I/O 가 빠르다.** 
  
- **`HeapByteBuffer`**: **`JVM` 의 힙 메모리에 생성**된다.
  1. **`allocate(int capacity)` 로 생성**한다.
  2. `JVM(Java Virtual Machine)` 가 관리하는 힙 메모리 안 빈공간을 할당받아 생성한다.
  3. 파일 또는 네트워크 I/O 시, **내부 복사 과정이 필요하여 속도가 느리다.**

---
 
## `ByteBuffer`: 생성 방법

바이트버퍼를 생성하는 방식은 크게 3가지로 `allocate(int capacity)`, `allocateDirect(int capacity)`, `wrap(byte[] array)` 가 존재합니다.

---


### allocate(int capatiy)

- **`allocate(int capacity)` 를 통한 바이트 버퍼 생성 예시**
    ```java
    ByteBuffer buffer = ByteBuffer.allocate(1024);
    ```

**`allocate(int capacity)` 는 `JVM` 의 힙 메모리에 바이트 버퍼를 생성**하는 메서드입니다. 

---

### allocateDirect(int capatiy)

- **`allocateDirect(int capacity)` 를 통한 바이트 버퍼 생성 예시**
    ```java
    ByteBuffer buffer = ByteBuffer.allocateDirect(1024);
    ```

**`allocateDirect(int capacity)` 는 운영체제의 시스템 메모리에 바이트 버퍼를 생성**하는 메서드입니다.

---

### wrap(byte[] array)

- **`wrap(byte[] array)` 를 통한 바이트 버퍼 생성 예시**
  ```java
  byte[] bytes = new byte[16];
  ByteBuffer buffer = ByteBuffer.allocateDirect(bytes);
  ```

**`wrap(byte[] array)` 는 이미 존재하는 바이트 배열(`byte[]`) 를 사용하는 바이트 버퍼를 생성**하는 메서드입니다. 
`allocate(int capacity)`, `allocateDirect(int capacity)` 와는 달리 기존에 사용하는 배열로 바이트 버퍼를 사용할 수 있다는 장점이 있습니다.
다만 **기존 바이트 배열의 값이 바뀌면 버퍼 내용도 함께 바뀌므로 주의**해야합니다.

---

#### `wrap(byte[] array)` 주의점

- **`wrap(byte[] array)` 주의점 예제**
  ```java
  public class Demo {
    public static void main(String[] args) {
      byte[] bytes = new byte[8];
      ByteBuffer byteBuffer = ByteBuffer.wrap(bytes);
      System.out.println("(변경 전) 바이트 배열 = " + Arrays.toString(bytes));
      System.out.println("(변경 전) 바이트 버퍼 내부 바이트 배열 = " + Arrays.toString(byteBuffer.array()));
  
      byte[] hello = "hello".getBytes(StandardCharsets.UTF_8);
      for (int i = 0; i < hello.length; i ++) {
        byte val = hello[i];
        bytes[i] = val;
      }
  
      System.out.println("(변경 후) 바이트 배열 = " + Arrays.toString(bytes));
      System.out.println("(변경 후) 바이트 버퍼 내부 바이트 배열 = " + Arrays.toString(byteBuffer.array()));
    }
  }
  ```
  

- **`wrap(byte[] array)` 주의점 예제 로그**
  ```shell
  (변경 전) 바이트 배열 = [0, 0, 0, 0, 0, 0, 0, 0]
  (변경 전) 바이트 버퍼 내부 바이트 배열 = [0, 0, 0, 0, 0, 0, 0, 0]
  (변경 후) 바이트 배열 = [104, 101, 108, 108, 111, 0, 0, 0]
  (변경 후) 바이트 버퍼 내부 바이트 배열 = [104, 101, 108, 108, 111, 0, 0, 0]
  ```
  

---

## `ByteBuffer`: 다뤄보기

**바이트 버퍼**는 단순히 **바이트 배열을 감싼 객체가 아니라, 버퍼 상태(position/limit/capacity)를 함께 관리하는 채널 기반 I/O를 위한 버퍼 추상화**입니다

---

### `ByteBuffer`: `capacity`

**`capacity`** 는 **바이트 버퍼의 내부 바이트 배열의 최대 크기를 의미**합니다. 바이트 배열(`byte[]`) 과 마찬가지로 한 번 정해지면 절대 변하지 않습니다. 
만약 데이터를 더 많이, 더 적게 담고싶다면 새로운 크기의 버퍼를 만들어야합니다.

- **`capacity` 속성**
  ```java
  // 1024바이트(1KB) 크기의 버퍼 생성
  ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
  
  // 생성 시 지정한 크기는 변경할 수 없습니다.
  System.out.println(byteBuffer.capacity()); // 1024
  ```

---

### `ByteBuffer`: `position`

**`position`** 은 **바이트 버퍼가 다루는 바이트 배열에 데이터를 쓰거나 읽을 위치(인덱스)를 의미**합니다.

---

#### `position`: 데이터 쓰기

`ByteBuffer.put(byte b)` 는 바이트 버퍼에 데이터를 쓰는 가장 기본적인 메서드입니다. 
이 메서드가 호출되면 버퍼 내부에서는 다음과 같은 일이 일어납니다.

1. **현재 위치(position)에 기록**: 바이트 버퍼는 현재 `position`이 가리키는 인덱스에 전달받은 `byte b`를 저장합니다.
2. **포지션 자동 이동**: 쓰기 작업을 마친 직후, `position` 값을 자동으로 1 증가시킵니다.

이렇게 바이트 버퍼는 쓰기 작업 후, `position`이 다음 칸을 가리키게 함으로써, 인덱스를 일일이 계산하지 않아도 연속해서 데이터를 채워 넣을 수 있게 해줍니다.

---

#### `position`:  데이터 읽기

`ByteBuffer.get()` 는 바이트 버퍼의 현재 포지션에 해당하는 값을 가져오는 메서드입니다.
이 메서드가 호출되면 버퍼 내부에서는 다음과 같은 일이 일어납니다.

1. **현재 위치(position)에 데이터 읽기**: 바이트 버퍼는 현재 `position` 이 가리키는 인덱스에 존재하는 값을 읽습니다.
2. **포지션 자동 이동**: 읽기 작업을 마친 후, `position` 값을 자동으로 1 증가시킵니다.

이렇게 바이트 버퍼는 읽기 작업 후, `position`이 다음 칸을 가리키게 함으로써, 인덱스를 일일이 계산하지 않아도 연속해서 데이터를 읽을 수 있게 해줍니다.

만약 현재 포지션이 아닌 다른 포지션의 값을 읽고싶다면 `ByteBuffer.get(int position)` 을 사용하면 됩니다. 
이 메서드는 절대 위치 읽기 방식으로 `position` 값을 변경시키지 않고 데이터를 읽어옵니다.


---

### `ByteBuffer`: limit

**`limit`** 은 **읽고 쓸 수 있는 최대치를 의미**합니다. 
바이트 버퍼를 생성한 직후, 바이트 버퍼의 `capacity` 와 `limit` 값은 동일합니다. 

- **`limit` 속성**
  ```java
  // 1024바이트(1KB) 크기의 버퍼 생성
  ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
  
  // 생성 시 지정한 크기는 변경할 수 없습니다.
  System.out.println(byteBuffer.limit()); // 1024
  ```

---

### `ByteBuffer`: `flip()`

- **데이터를 쓰고난 후, 읽으려면?**
  ```java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer byteBuffer = ByteBuffer.allocate(8);
  
  for (int i=0; i < bytes.length; i++) {
      byteBuffer.put(bytes[i]);
  }

  // 이후에는 어떻게 ?
  ```

위와 같이 문자열 "hello" 를 바이트 버퍼에 쓰고 나서 바로 읽으려고 하면, `put()`이 끝난 시점의 `position`은 이미 문자열 끝을 가리키고 있는 상태입니다.
`put()`과 `get()`은 호출될 때마다 `position`을 자동으로 증가시키기 때문에, 데이터를 다 써 놓고 “처음부터 다시 읽고 싶다”라고 할 때 그대로 읽기 시작하면 내가 방금 작성한 데이터를 제대로 읽기 어렵습니다.


데이터를 쓰고 난 후에, 처음부터 쓴 데이터만 깔끔하게 읽으려면 어떻게 하는 게 좋을까요?
**지금까지 기록한 구간을 “읽기 범위”로 딱 잘라두고, 읽기는 항상 0부터 시작하면 가장 편할 것**입니다.
바로 **이 작업을 대신 해 주는 메서드가 `flip()`** 입니다.

- **`flip`: 데이터를 쓰고난 후, 읽어보자.**
  ```java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer byteBuffer = ByteBuffer.allocate(8);
  
  for (int i=0; i < bytes.length; i++) {
      byteBuffer.put(bytes[i]);
  }
  
  System.out.println(byteBuffer); // java.nio.HeapByteBuffer[pos=5 lim=8 cap=8]
  
  byteBuffer.flip(); // positi
  System.out.println(byteBuffer); // java.nio.HeapByteBuffer[pos=0 lim=5 cap=8]
  ```

문자열 "hello"를 다 쓴 상태의 바이트 버퍼가 (position=5, limit=8, capacity=8)이라면, `flip()`을 한 번 호출했을 때 버퍼 상태는 (position=0, limit=5, capacity=8)로 바뀝니다.
이제 0부터 `limit`까지 `get()`으로 읽기만 하면, 방금 쓴 데이터 전체를 처음부터 끝까지 깔끔하게 꺼낼 수 있습니다.

---

### `ByteBuffer`: `clear()` vs `compact()`

`clear()`, `compact()` 는 모두 “버퍼에서 한 번 읽은 뒤, 다시 그 버퍼에 쓰고 싶을 때” 사용하는 메서드입니다.
이전 데이터를 전부 버릴지, 안 읽은 데이터만 살려둘지에 따라 어떤 메서드를 사용할지 결정하시면 됩니다.

- 이전 내용 전부 필요 없고, 그냥 처음부터 새로 쓰고 싶다 → clear().
- 아직 안 읽은 데이터는 남겨두고, 그 뒤에 이어서 쓰고 싶다 → compact()

---

#### `clear()`: 처음부터 다시 써볼까 ?

`clear()` 는 메서드 이름 그대로, **“지금 버퍼에 뭐가 있든 다 처리 끝난 걸로 치고, 처음부터 새로 쓸 준비를 하자”** 라는 상황에서 사용하는 메서드입니다.
내부 바이트 배열의 값은 그대로 두고, `position`을 0으로, `limit`을 `capacity`와 같게 바꾸어 전체 구간을 새로 덮어쓸 수 있는 상태로 만들어 줍니다.

- **`clear()` 예제**
  ```java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer buffer = ByteBuffer.allocate(8);
  
  buffer.put(bytes);   // [h][e][l][l][o][_][_][_]
  buffer.flip();       // 읽기 모드 전환
  
  // 데이터 전부 읽기
  while (buffer.hasRemaining()) {
    System.out.print((char) buffer.get());
  }
  System.out.println();                  // hello
  
  System.out.println(buffer);            // pos=5 lim=5 cap=8 (다 읽은 상태)
  
  // 이전 내용은 더 이상 안 중요, 처음부터 새로 쓰고 싶을 때
  buffer.clear();                        // pos=0 lim=8 cap=8
  
  buffer.put("WORLD".getBytes());
  buffer.flip();
  
  while (buffer.hasRemaining()) {
      System.out.print((char) buffer.get()); // WORLD
  }
  ```
  
실제로는 `clear()`가 배열을 0으로 지우지는 않고, **“여기 있는 값 전부 덮어써도 된다”** 고 상태만 초기화한다고 보면 됩니다.
그래서 **이전 데이터에 전혀 미련 없고, 새 데이터를 받을거야** 하는 상황에 사용하는 것이 좋습니다.

---

#### `compact()`: 이어서 써볼까 ?

`compact()` 는 일부 데이터를 읽고 난 후, 아직 안 읽은 데이터는 살려두고 그 뒤에 이어서 써보고 싶을 때 사용하는 메서드입니다.
`position`부터 `limit`까지 남아 있는(안 읽은) 데이터만 버퍼 맨 앞으로 복사하고, 그 바로 뒤에 이어서 `put()` 할 수 있도록 `position`을 옮긴 뒤 `limit`을 `capacity`로 변경합니다.

- **`compact()` 예제**
  ```java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer buffer = ByteBuffer.allocate(8);
  
  buffer.put(bytes);   // [h][e][l][l][o][_][_][_]
  buffer.flip();       // 읽기 모드 전환 (pos=0, lim=5)
  
  // 일부만 읽기
  buffer.get();        // 'h'
  buffer.get();        // 'e'
  // 현재: pos=2, lim=5 (남은 데이터: "llo")
  
  // 안 읽은 데이터는 살려두고 뒤에 이어서 쓰고 싶다
  buffer.compact();    // "llo"를 0~2로 당김 (pos=3, lim=8)
  
  // 뒤에 새 데이터 이어쓰기
  buffer.put("!!".getBytes()); // [l][l][o][!][!][_][_][_]
  buffer.flip();               // 읽기 모드 (pos=0, lim=5)
  
  while (buffer.hasRemaining()) {
    System.out.print((char) buffer.get()); // llo!!
  }
  ```

`compact()`는 배열을 0으로 지우지는 않고, **“앞에서부터 안 읽은 데이터는 살려두고, 그 뒤로는 전부 덮어써도 된다”** 고 버퍼 상태만 재정리한다고 보면 됩니다.
그래서 앞부분은 이미 읽어 처리했고, 남은 데이터에 새 데이터를 이어 붙여서 계속 쓰고 싶은 상황에서 사용하는 것이 좋습니다.

