---
summary: 이 글에서는 Reactor의 Sinks가 어떤 역할을 하는지, 왜 Processor 대신 등장했는지, 그리고 WebFlux 코드에서 실제로 어떻게 쓰이는지를 개념 위주로 정리합니다.

tags:
  - 리액티브 프로그래밍
  - 웹플럭스
  - 리액터
  - Sinks
created_date: 2026-01-20 15:39:21
last_modified_date: 2026-01-20 15:39:21
---

**`리액티브 스트림즈`/`리액터` 에서 데이터는 `Publisher` 에서 시작해 여러 `Operator`를 거쳐 `Subscriber` 로 흘러갑니다.** 대부분의 애플리케이션 코드는, 스트림 안에서 생성된 데이터가 오퍼레이터를 거쳐 최종 소비 지점까지 흘러가는 일반적인 형태만으로도 충분히 표현할 수 있습니다. 하지만 때로는 **외부 시스템의 이벤트나 레거시 API처럼, 이미 존재하는 소스에서 데이터를 가져오는 대신, 애플리케이션 쪽에서 스트림으로 데이터를 밀어 넣어야 할 때**가 있습니다. 

**리액터에서 이러한 요구를 구현하기 위해 `Processor` 나 `Flux.create`, `Flux.generate` 를 사용했지만, 스펙·동시성·가독성 측면에서 한계가 있었습니다.** 이러한 한계를 극복하기 위해 등장한 것이 바로 **`Sinks`** 입니다.

---

## Processor: Publisher와 Subscriber를 한 몸에 가진 중간 지점

리액티브 스트림즈에서 **`Publisher` 는 “구독자가 요청한 만큼 데이터를 비동기적으로 내보내는 출발점”** 이고, **`Subscriber` 는 그 데이터를 소비하는 쪽**입니다. 일반적인 플로우에서는 `Publisher → (여러 Operator) → Subscriber`만 있어도 충분하지만, **현실에서는 한쪽에서 값을 받아 다른 쪽으로 다시 흘려보내야 하는 중간 지점이 필요해지는 경우가 있습니다.**

이럴 때 사용하는 것이 `Processor` 입니다. `Processor` 는 위로는 `Subscriber`, 아래로는 `Publisher` 처럼 동작하므로, 한 객체 안에서 두 쪽의 규약을 모두 지켜야 합니다. 즉 다음과 같은 책임을 동시에 가집니다.

- upstream에서 들어오는 `onNext` / `onError` / `onComplete` 를 **올바른 순서로 처리**하고,
- downstream의 `request(n)` / `cancel()`을 고려해 **backpressure를 적절히 중계**하며,
- **여러 구독자가 붙었을 때 각자의 요청량을 조합**해 **upstream에 얼마나 요청할지 결정**하고,
- **스레드가 여러 개일 때 `onNext` / `onComplete` 호출을 직렬화해서 스펙 위반이 일어나지 않도록 보장**해야 합니다.

여기에 애플리케이션 코드에서 `Processor` 를 “외부 이벤트 입구”처럼 쓰기 위해 `onNext` 를 직접 호출하기 시작하면, 완료된 후에 다시 `onNext` 를 보내거나, 여러 스레드에서 동시에 `onNext` 를 날려 스펙·동시성 위반이 일어나기 매우 쉬운 구조가 됩니다. 이런 이유로 `Processor` 계열을 `deprecated` 하고, **중간 변환은 오퍼레이터가, 외부에서 값을 주입하는 역할은 `Sinks` 가 맡도록 책임을 분리**하는 방향으로 바꾸었습니다.

---

## Sinks: 외부에서 값을 넣는 전용 입구

위에서 본 것처럼 `Processor` 는 중간 변환 + 외부 이벤트 입구 역할을 한 번에 떠안으면서, `Subscriber` 와 `Publisher` 규약까지 모두 지켜야 하는 부담이 있었습니다. 리액터는 이러한 부담을 덜기 위해 이 복잡한 역할을 쪼개서, **중간 변환은 기존 오퍼레이터 체인으로만 표현**하고, **외부에서 값을 주입하는 책임은 Sinks라는 전용 컴포넌트로 분리**했습니다.


> [리액터 공식 문서](https://projectreactor.io/docs/core/release/reference/coreFeatures/sinks.html)
> **In Reactor, a sink is a class that allows safe manual triggering of signals in a standalone fashion, creating a Publisher-like structure capable of dealing with multiple Subscriber (with the exception of unicast() flavors).**


리액터 공식 문서에서는 **`Sinks` 를 “신호를 안전하게 수동 트리거할 수 있게 해 주는 클래스이며, 그 결과로 Publisher와 비슷한 구조를 만들어 준다”고 설명합니다.** 또한 `tryEmitNext`, `tryEmitError`, `tryEmitComplete` 같은 메서드로 값을 넣고, `asFlux()` / `asMono()`로 꺼내 일반 Flux/Mono처럼 사용할 수 있는 구조입니다. 따라서 **바깥 코드에서 직접 값을 집어넣어도 되는 대상은 Sinks 뿐이고, 나머지 Flux/Mono 는 subscribe와 오퍼레이터로만 다룬다는 사용 규칙이 생겼다고 볼 수 있을 것 같습니다.**

---

## Sinks: 어떻게 만들고, 어떻게 쓸까

일반적으로 `Sinks`를 사용하는 기본 패턴은 아래와 같습니다.

- **`Sinks` 기본 패턴**
  
  1. 적절한 종류의 **`Sinks`를 하나 만든다.**
  2. 외부 코드에서 **`tryEmit*` 메서드로 값을 넣는다.**

      1. **`tryEmitNext(T value)`:** 다음 값 방출 시도
      2. **`tryEmitError(Throwable error)`:** 에러 방출 시도
      3. **`tryEmitComplete()`:** 완료 신호 방출 시도
      4. **`Sinks.EmitResult`:** **`tryEmit*` 결과, 실패 여부 검칙, 로그/재시도/드롭 정책 적용**

  3. 나머지 코드는 **`asFlux()` / `asMono()`로 노출된 `Flux`/`Mono` 를 바라본다.**

일반적으로는 위와 같은 패턴으로 `Sinks`를 사용하고, 이후에는 **상황에 맞는 `Sinks` 타입(`one`, `empty`, `many().unicast/multicast/replay`)만 골라 쓰면 됩니다.** `Processor`에서는 여러 스레드에서 들어오는 onNext 호출을 직접 직렬화해 줘야 했다면, **`Sinks`는 내부 구현에서 이런 직렬화·스레드 안전성을 최대한 대신 보장해 주기 때문에, 바깥에서는 `tryEmit*` 메서드를 중심으로 더 단순한 규칙만 지키면 됩니다.**

---

### Sinks.one()

`Sinks.one()`은 단 한 번의 값 또는 완료/에러만 발행하는 `Sinks`입니다. **비동기 작업 결과를 나중에 한 번만 채워야 하는 `Mono`를 만들 때 유용합니다.**

```java
Sinks.One<Result> sink = Sinks.one();a
Mono<Result> mono = sink.asMono();

// 어딘가에서 비동기 작업이 끝났을 때
sink.tryEmitValue(result);   // 또는 sink.tryEmitError(error), sink.tryEmitEmpty()
```

---

### Sinks.empty()

`Sinks.empty()`는 값 없이 완료/에러만 발행해야 할 때 사용합니다. **“결과 값은 없고, 성공/실패 여부만 알리면 되는” 비동기 작업을 Mono로 노출할 때 쓸 수 있습니다.**

```java
Sinks.Empty<Void> sink = Sinks.empty();
Mono<Void> completion = sink.asMono();

// 작업이 끝났을 때
sink.tryEmitComplete();  
```



---

### Sinks.many().unicast()

`Sinks.many().unicast()` 자체는 아직 `Sinks.Many` 인스턴스가 아니고, `onBackpressureBuffer(...)` 같은 팩토리 메서드를 한 번 더 호출해야 실제로 사용할 수 있는 `Unicast Sink`가 만들어집니다. 이 **`Unicast Sink`는 구독자가 딱 한 명만 붙을 수 있으며, 내부 큐를 사용해 다운스트림에 요청이 없을 때도 데이터를 버퍼링할 수 있어서, 단일 소비자용 작업 큐처럼 쓸 수 있습니다.**

```java
Sinks.Many<String> sink =
    Sinks.many().unicast().onBackpressureBuffer();

Flux<String> flux = sink.asFlux();  // 한 구독자만 허용
```

---

### Sinks.many().multicast()

**`Sinks.many().multicast().onBackpressureBuffer()`** 는 **여러 구독자에게 동시에 브로드캐스트하는 핫 스트림**을 만듭니다. **새로 구독하는 쪽은 구독 시점 이후에 emit되는 값만 받습니다.**


```java
Sinks.Many<Notification> sink =
    Sinks.many().multicast().onBackpressureBuffer();

Flux<Notification> notifications = sink.asFlux();  // 여러 구독자에게 브로드캐스트
```

WebFlux SSE/WebSocket 알림처럼, “여러 클라이언트가 같은 실시간 이벤트를 받아야 하는 경우”에 가장 자주 쓰입니다.

---

### Sinks.many().replay()

`Sinks.many().replay()`는 `emit`된 값을 캐시해 두었다가, 나중에 구독하는 Subscriber에게 과거 값을 리플레이합니다. **`multicast`가 “실시간 이후만” 흘려보내는 반면, `replay`는 이전에 `emit`된 값들을 저장해 두었다가, 나중에 붙은 구독자에게도 과거 값을 다시 방출해 준다는 점이 핵심 차이입니다.**

```java
Sinks.Many<State> sink =
    Sinks.many().replay().latest();   // 항상 최신 상태 1개 유지

Flux<State> states = sink.asFlux();
```

일반적으로 현재 시스템 상태, 마지막 가격처럼 “늦게 구독해도 최신 상태를 바로 제공하고 싶은 스트림”에 잘 맞습니다.


- **replay 전략**
  1. **`replay().limit(n)`:** 마지막 n개만 캐시
  2. **`replay().all()`:** 모든 값 캐시
  3. **`replay().limit(Duration)`:** 일정 시간 동안만 캐시
  4. **`replay().latest()`:** 마지막 1개만 캐시 (ReplayProcessor 대체)



---

