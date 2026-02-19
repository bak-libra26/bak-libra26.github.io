---
summary: 이 글에서는 Reactor 체인에서 “어디서, 왜 스레드가 바뀌는지”를 Schedulers, publishOn, subscribeOn 중심으로 정리했습니다.
tags:
  - 리액티브 프로그래밍
  - 웹플럭스
  - 리액터
  - Thread
  - Scheduler
created_date: 2026-01-21 15:39:21
last_modified_date: 2026-01-21 15:39:21
---


리액터로 작성된 코드를 보면, 같은 비즈니스 로직인데도 로그에 찍히는 스레드 이름이 `reactor-http-nio-*`, `boundedElastic-*`, `parallel-*`처럼 제각각인 경우가 많습니다.  `Spring Web MVC` 기반 스프링부트 프로젝트에 익숙하시다면, 하나의 HTTP 요청이 톰캣 워커 스레드 하나에서 처리되는 패턴에 익숙할 테니 이런 스레드 전환이 더 낯설게 느껴질 수 있습니다.

**하지만 리액터라고 해서 항상 여러 스레드를 오가며 실행되는 것은 아닙니다.**  별도의 스케줄러를 사용하지 않으면 체인 전체가 하나의 스레드에서만 동작하고, `Spring WebFlux`처럼 프레임워크가 정해 둔 기본 스레드(이벤트 루프 등) 위에서만 실행되는 경우도 많습니다. 
만약 **스케줄러를 직접 설정하거나, 프레임워크 내부에서 다른 스레드 풀을 사용하는 구간이 있을 때에만 체인 일부가 다른 스레드로 옮겨 가고, 그 스레드 이름이 로그에 드러나는 것**입니다. 

문제는 “어디서, 왜 스레드가 바뀌는지”를 모른 채 코드를 작성하면, 디버깅이 어려워져 병목 구간이 생겨도 원인을 쉽게 짚어내지 못한다는 점입니다. **이번 글에서는 리액터에서 스레드가 바뀌는 지점과 바뀌는 이유에 대해 알아보겠습니다.**

---

# 리액터: 스레드와 스케줄러 위에 서 있는 모델

일반적인 의미에서의 스레드와 스케줄러를 먼저 짚고 가겠습니다.

> **스레드(Thread):** 실제로 작업이 실행되는 실행 단위;
> **스케줄러(Scheduler):** 여러 작업(또는 스레드)을 어떤 순서와 규칙으로 CPU에 올릴지 결정하는 스케줄링 정책;

일반적으로 리액터 코드는 발행자(`Publisher`), 구독자(`Subscriber`), 여러 개의 연산자(`Operator`)로 구성되고, 이것들이 하나의 파이프라인을 이룹니다. 이러한 파이프라인에 **따로 스케줄러를 추가하지 않으면 이 코드는 보통 하나의 스레드 위에서만 동작** 하며, 이러한 파이프라인에 `외부 API 호출` 또는 `DB I/O` 처럼 블로킹 구간이 존재한다면, 그 부분이 끝날 때까지 뒤에 이어진 작업들도 함께 블로킹될 수밖에 없습니다.

리액터가 진짜 힘을 발휘하는 지점도 바로 여기입니다. 적은 수의 스레드로 최대한 많은 작업을 처리하려면, **블로킹 구간은 중요한 스레드에서 분리하고, 가벼운 연산은 한 스레드에 묶어 두도록 체인을 설계해야 합니다.** 

다시 말해, **“적은 수의 스레드로 논블로킹하게 많은 작업을 처리하겠다”** 는 리액터의 목표를 제대로 살리려면, **어느 구간을 함께 묶고 어느 지점에서 스레드를 갈아탈지, 스레드와 스케줄러 관점에서 실행 경계를 의도적으로 설계해 줘야 합니다.**

이걸 이해하려면 먼저, 아무런 스케줄러를 쓰지 않았을 때 체인이 어떻게 동작하는지, 즉 **“하나의 스레드에서만 도는 기본 모델”** 부터 짚고 넘어가는 게 좋습니다.



---

## 리액터: 하나의 스레드에서 동작한다.

스케줄러를 사용하지 않는 가장 단순한 경우부터 보면 이해하기 쉽습니다. 아래 코드처럼 **아무 스케줄러도 쓰지 않고 `main` 스레드에서 바로 구독하면, 체인 전체가 `main` 스레드 하나에서만 실행**됩니다.

- **스케줄러를 추가하지 않은 예제**
  ```java
  public class NoSchedulerDemo {

      public static void main(String[] args) {
          Flux.just(1, 2, 3)
              .map(i -> {
                  System.out.printf("[%s] map: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .filter(i -> {
                  System.out.printf("[%s] filter: %d%n",
                          Thread.currentThread().getName(), i);
                  return i < 15;
              })
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  ```

- **출력 로그**
  ```shell
  [main] map: 1
  [main] filter: 10
  [main] subscribe: 10
  [main] map: 2
  [main] filter: 20
  [main] map: 3
  [main] filter: 30
  ```

위 로그에서 `map`과 `subscribe`에서 찍히는 모든 로그의 스레드 이름이 `main`인 것을 확인할 수 있습니다.
따로 스케줄러를 전혀 건드리지 않았을 때 리액터 체인이 따르는 가장 기본적인 스레드 모델이 바로 이런 형태입니다.

--- 

### 하나의 스레드에 블로킹 구간이 끼어들면?

이 구조가 문제가 되는 순간은, 이 한 스레드 모델 안에 **오래 걸리는 블로킹 작업이 끼어 있을 때**입니다.

예를 들어 위 코드의 **map 구간에서 외부 API 호출이나 DB I/O처럼 수십~수백 ms 이상 걸리는 작업을 수행한다고 가정**해 보겠습니다.
그러면 **그 시간 동안 이 스레드는 그 작업만 처리하느라 바빠지고, 뒤에 이어진 filter와 subscribe 구간도 모두 그 스레드가 다시 “비는 순간”까지 그대로 멈춰 서 있게 됩니다.**

간단한 데모로, map 안에 `Thread.sleep(...)`을 잠깐 추가해 보면 여전히 모든 로그는 main 스레드에서 찍히지만, 각 로그 사이의 간격이 눈에 띄게 벌어지는 걸 바로 확인할 수 있습니다. **겉으로는 리액터 연산자가 이어진 비동기 체인처럼 보이지만, 실제 실행 흐름만 놓고 보면 한 스레드 위에서 순서대로 막히는, 동기/블로킹 코드와 크게 다르지 않은 동작이 되어 버리는 셈입니다.**



---

## 리액터: 스레드 분리하기

[하나의 스레드에 블로킹 구간이 끼어들면](#하나의-스레드에-블로킹-구간이-끼어들면) 에서 보았듯이, 하나의 스레드로 동작하는 구성에서 블로킹 구간이 끼어들면 그 구간이 끝날 때까지 뒤에 이어진 작업들이 모두 함께 멈추게 되어 전체 처리량이 눈에 띄게 떨어집니다. 이 문제를 해결하려면 **병목이 되는 블로킹 구간만 별도의 스레드(또는 스레드 풀)로 떼어내고, 나머지 구간은 기존 스레드 위에 그대로 두어 이벤트 루프나 중요한 스레드를 막지 않도록 설계**해야 합니다.

이를 위해 리액터는 체인 중간이나 시작 지점의 실행 스레드를 바꿀 수 있는 두 가지 연산자, **`publishOn`과 `subscribeOn`을 제공**합니다. **`publishOn`은 “여기부터 아래 연산자들”의 실행 컨텍스트를 다른 스케줄러로 옮기는 역할**을 하고, **`subscribeOn`은 “체인이 어디에서 구독·요청을 시작할지”를 지정해서 소스 구간 전체를 다른 스레드로 이동시키는 역할**을 합니다. 

이제 간단한 예제를 통해 두 연산자가 실제로 어떻게 동작하는지 차례대로 살펴보겠습니다.


---

### publishOn: 체인 중간에서 스레드 바꾸기

**`publishOn(Scheduler scheduler)`** 은 **“지금까지는 그대로 두고, 이 지점부터 아래쪽 연산자들만 다른 스레드에서 실행하고 싶을 때” 쓰는 연산자**입니다. 위치 기준으로 동작하기 때문에, 체인 어디에 두느냐가 **곧 “어디서 스레드를 갈아탈지”를 의미**합니다.



- **`publishOn(Scheduler scheduler)` 예제**
  ```java
  public class PublishOnDemo {

      public static void main(String[] args) {
          Flux.range(1, 3)
              .map(i -> {
                  System.out.printf("[%s] map 1: %d%n",
                          Thread.currentThread().getName(), i);
                  return i;
              })
              .publishOn(Schedulers.boundedElastic()) // 여기서부터 스레드 전환
              .map(i -> {
                  System.out.printf("[%s] map 2: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  ```

- **출력 로그**
  ```shell
  [main] map 1: 1
  [main] map 1: 2
  [main] map 1: 3
  [boundedElastic-1] map 2: 1
  [boundedElastic-1] subscribe: 10
  [boundedElastic-1] map 2: 2
  [boundedElastic-1] subscribe: 20
  [boundedElastic-1] map 2: 3
  [boundedElastic-1] subscribe: 30
  ```

위 예제를 실행해 보면, 첫번쨰 `map` 까지는 `main` 스레드에서 실행되나, 두번째 `map`와 `subscribe`는 `boundedElastic-…` 같은 이름의 스레드에서 찍히는 걸 볼 수 있습니다. 즉, **`publishOn`은 “업스트림에서 내려오는 시그널(onNext, onComplete, onError)을 받아, 그 이후 구간만 지정한 스케줄러 위에서 처리하게 만드는 연산자”** 라고 이해하면 됩니다.

	

---

### subscribeOn: 체인 시작 스레드 정하기

**`subscribeOn(Scheduler scheduler)`** 은 **“이 리액터 체인을 어느 스레드에서 시작할지”를 정하는 연산자**입니다. 체인 어디에 두더라도, 소스 `Publisher`와 그 업스트림의 시그널(`subscribe`, `onSubscribe`, `request`, `onNext`)이 **지정한 스케줄러에서 실행되도록 만드는 게 핵심**입니다.

- **`subscribeOn(Scheduler scheduler)` 예제**
  ```java
  public class SubscribeOnDemo {

      public static void main(String[] args) throws InterruptedException {
          Flux.range(1, 3)
              .map(i -> {
                  System.out.printf("[%s] map: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .subscribeOn(Schedulers.boundedElastic()) // 체인 시작 스레드 지정
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  ```

- **출력 로그**
  ```java
  [boundedElastic-1] map: 1
  [boundedElastic-1] subscribe: 10
  [boundedElastic-1] map: 2
  [boundedElastic-1] subscribe: 20
  [boundedElastic-1] map: 3
  [boundedElastic-1] subscribe: 30
  ```

이 코드는 `main` 스레드에서 `subscribe()`를 호출하지만, 실제로 `map`과 `subscribe` 로그는 모두 `boundedElastic-1` 같은 이름의 스레드에서 찍힙니다. 즉, **`subscribeOn`이 “소스를 구독하는 작업 자체를 `boundedElastic` 스레드에서 수행해라”라고 지시**했고, 그 결과 **체인 전체가 그 스레드에서 시작되어 흘러가는 형태**가 됩니다.

정리하면, **`subscribeOn`은 “소스가 어느 스레드에서 값을 만들고 흘려보낼지”를 정하는 용도**이고, **`publishOn`은 “체인 중간의 어느 지점부터 다른 스레드에서 소비·가공할지”를 정하는 용도**라고 볼 수 있습니다


---

## 리액터: 여러가지 스케줄러

`publishOn`, `subscribeOn`에 이어서, 리액터에서 자주 쓰는 스케줄러들을 용도별로 정리해보았습니다.

| 스케줄러                        | 주요 용도                        | 스레드 특성                                                   | 언제 쓰면 좋은지                                      |
|---------------------------------|----------------------------------|----------------------------------------------------------------|--------------------------------------------------------|
| `Schedulers.immediate()`        | 스케줄링 없이 바로 실행          | 현재 호출한 **같은** 스레드에서 즉시 실행                     | 별도 스레드 전환이 전혀 필요 없을 때, 테스트용 |
| `Schedulers.single()`           | 단일 작업 큐, 순차 실행          | 공용 단일 스레드(또는 newSingle로 별도 생성), FIFO 순차 처리   | 로그 처리, 순서 보장이 중요한 가벼운 작업 |
| `Schedulers.parallel()`         | CPU 바운드 병렬 작업             | CPU 코어 수만큼의 고정 스레드 풀, 각 워커는 단일 스레드       | 빠른 계산/변환 작업, non-blocking 연산 병렬 처리 |
| `Schedulers.boundedElastic()`   | 블로킹 I/O 오프로딩              | “코어 수 × N” 수준의 제한된(bounded) 스레드 풀, 큐 포함       | DB/JDBC, 외부 API 호출 등 오래 걸리는 블로킹 작업 |
| `Schedulers.fromExecutorService(executor)` | 커스텀 실행 환경 연동 | 기존 `ExecutorService`를 감싼 스케줄러                        | 직접 구성한 스레드 풀이나 라이브러리용 executor를 쓰고 싶을 때 |

여기까지가 스레드와 스케줄러, 그리고 publishOn/subscribeOn의 기본 사용법입니다. 마지막으로, 실제 코드에서 어떤 스케줄러를 선택할지 고민될 때 참고할 수 있는 작은 체크리스트를 정리해 보았습니다.

- **어떤 스케줄러를 쓸지 헷갈릴 때**
  1. **이 구간은 CPU 계산 위주인가?** → `Schedulers.parallel()` 고려.
  2. **이 구간은 오래 기다리는 블로킹 I/O인가?** → `Schedulers.boundedElastic()` 으로 분리.
  3. **순서가 꼭 보장돼야 하는 가벼운 작업인가?** → `Schedulers.single()`.
  4. **굳이 스레드를 바꾸지 않아도 되는가?** → 스케줄러를 쓰지 않거나 `Schedulers.immediate()` 유지.

