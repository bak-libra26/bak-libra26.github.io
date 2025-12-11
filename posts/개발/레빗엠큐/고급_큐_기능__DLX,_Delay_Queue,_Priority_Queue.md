---
tags:
  - RabbitMQ
references:
  - https://www.rabbitmq.com/community-plugins
  - https://github.com/rabbitmq/rabbitmq-delayed-message-exchange
  - https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/tag/v4.1.0
created_date: 2025-08-21T11:34:57.000Z
last_modified_date: 2025-08-21T11:34:57.000Z
id: fc19939b-2851-45e9-b3c2-efd961564be1
---


# RabbitMQ - 고급 큐 기능의 필요성

RabbitMQ에서 기본적으로 제공하는 큐는 메시지의 단순 전달 및 재처리 기능을 지원한다. 그러나 실제 서비스 환경에서는 다음과 같은 한계점이 존재한다.

- **재처리 메시지 반복 문제**  
    메시지 재처리가 필요한 경우, 일반적으로 Nack(Negative Acknowledgement)을 수행한다. Nack 처리된 메시지는 큐의 최상단에 다시 적재되어 같은 메시지가 반복적으로 처리된다. 만약 해당 메시지가 지속적으로 처리되지 않으면 동일한 메시지만 계속해서 재처리되는 문제가 발생한다.
- **지연 재처리의 어려움**  
    기본 큐만으로는 메시지의 재처리 주기를 설정하여 일정 시간 후에 재처리하는 기능을 구현하기 어렵다. 즉, 메시지 재처리 시점의 제어가 제한적이다.
- **메시지 우선순위 관리의 한계**  
    메시지는 발행(Publish) 순서대로 큐에 적재되며, 소비자는 인입된 순서대로 메시지를 처리한다. 메시지별로 우선순위를 부여하여 높은 우선순위의 메시지를 먼저 처리하는 기능을 기본 큐만으로 구현하기 어렵다.

이러한 문제를 해결하기 위해 RabbitMQ의 고급 큐 기능(Delay Queue, Priority Queue 등) 을 사용할 수 있다.

## DLX(Dead Letter Exchange)

> 예제: [RabbitMQ - Dead Letter Exchange Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/dead_letter_exchange)

DLX(Dead Letter Exchange) 란 메세지가 정상적으로 처리되지 않은 경우(Reject, TTL 만료, 큐의 최대 길이 초과 등) 해당 메세지를 "Dead Letter Exchange" 로 보내 별도의 큐에서 관리할 수 있게 해주는 기능이다. 

- DLX(Dead Letter Exchange) 의 장점 
	1. 재처리가 필요한 메세지를 일반 큐와 분리하여 별도의 큐에서 관리할 수 있다.
	2. 메세지의 성격에 따라 큐를 분리해 각각의 상황에 맞는 재처리 로직을 적용할 수 있다.


- DLX(Dead Letter Exchange) 의 단점
	1. 재처리해야하는 메세지의 종류가 많아질수록  DLX 큐와 컨슈머를 각각 따로 만들어야한다.
	2. 시스템 구조가 복잡해질 수 있으며, 메세지 분류 기준과 DLX 큐 관리 방안을 잘 고려하여 설계해야한다.



### DLX 동작 원리

메세지 만료(TTL), 메세지 거절(Reject), 큐 최대 길이 초과(max-length) 중 하나의 조건에 해당하는 경우, 해당 메세지는 일반 큐에서 "Dead Letter Exchange" 로 전달되며, 이렇게 전달된 메세지는 큐에 미리 설정되어있는 DLX 큐로 메세지를 라우팅하고 별도의 컨슈머가 해당 메세지를 처리한다.

- 흐름 간단 요약
	1. 메시지가 원래 큐에 들어온다.
	2. 만료, 리젝, 최대 길이 초과 중 하나의 조건이 발생한다.
	3. RabbitMQ가 해당 메시지를 Dead Letter Exchange(DLX)로 전달한다.
	4. DLX는 미리 지정된 큐(Dead Letter Queue)로 메시지를 라우팅한다.
	5. Dead Letter Queue에서 별도의 컨슈머가 메시지를 재처리하거나, 로그를 남기거나, 알림을 보낼 수 있다.


### DLX 설정 

`rabbitmqctl` 을 통해 `DLX` 설정을 추가하는 경우 `1. DLX 정책명`, `2. DLX 를 적용할 큐 이름 정규식`, `3. DLX 를 적용할 익스체인지 이름`, `4. DLX 적용 범위` 를 설정할 수 있다.

- • **큐****(queues)****에** **적용****:**  
    정책이 지정한 큐에만 직접 적용됩니다.  
    예를 들어, dead-letter-exchange 정책을 큐에 적용하면,  
    해당 큐에서만 DLX 동작이 활성화됩니다.
- **익스체인지****(exchanges)****에** **적용****:**  
    정책이 익스체인지 자체에 적용됩니다.  
    하지만, dead-letter-exchange와 같은 큐 속성은 익스체인지에 적용해도  
    큐의 동작에는 영향을 주지 않습니다.  
    (즉, DLX 정책은 큐에만 의미가 있습니다.)
- **all:**  
    큐와 익스체인지 모두에 정책을 적용합니다.  
    하지만, 정책의 내용에 따라 실제로 적용되는 대상이 다를 수 있습니다.

- DLX 정책 추가
```shell
rabbitmqctl set_policy ${정책 이름} ${큐 이름 정규식} '{"dead-letter-exchange":"${DLX 익스체인지 이름}"' --apply-to ${queues|exchanges|all}
```







## Delay Queue

> 예제 : [RabbitMQ - Delay-Queue Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/delayed_queue)

Delay Queue는 메시지를 즉시 처리하지 않고, 지정한 지연 시간(delay) 이후에 처리할 수 있도록 지원하는 큐이다. 예를 들어, 회원가입 후 10분 뒤에 환영 메일을 보내거나, 일정 시간 후에 알림을 전송해야 하는 경우에 활용됩니다.

일반 큐에서는 메시지에 시간 정보를 기록하고, 소비자가 해당 시간이 될 때까지 메시지를 재적재(Nack)하는 방식이 필요하나, Delay Queue는 메시지 전송 시 지연 시간을 설정하면, 지정한 시간이 지난 후 자동으로 소비자에게 전달된다.

- Delay Queue 주요 특징
	1. 메시지별로 개별 지연 시간 설정 가능
	2. 지정한 시간이 지난 후에만 메시지가 소비자에게 전달됨
	3. 예약 알림, 만료 처리, 재시도 로직 등에 활용


RabbitMQ 에서 Delay Queue 를 사용하고 싶은 경우, `x-delayed-message` 플러그인을 설치해야한다.

### 플러그인 설치

- rabbitmq plugin 디렉토리 확인
```shell
rabbitmq-plugins directories -s
```

- 플러그인 설치
```
wget https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/download/v4.1.0/rabbitmq_delayed_message_exchange-4.1.0.ez
```

- 플러그인 사용
```shell
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```


### Delay Queue 예시

- Delay Queue 예시 코드
```java
public class DelayQueueMain {  
  
	private static final String DELAYED_EXCHANGE = "delay.exchange";  
	private static final String DELAYED_QUEUE = "delay.queue";  
	private static final String ROUTING_KEY = "delay.routingkey";  
  
	@Bean  
	public CustomExchange delayExchange() {  
		Map<String, Object> args = Map.of("x-delay-type", "direct");  
		return new CustomExchange(DELAYED_EXCHANGE, "x-delay-message", true, false, args);  
	}  
  
	@Bean  
	public Queue delayQueue() {  
		return new Queue(DELAYED_QUEUE, true);  
	}  
  
	@Bean  
	public Binding binding(Queue delayQueue, CustomExchange delayExchange) {  
		return BindingBuilder.bind(delayQueue).to(delayExchange).with(ROUTING_KEY).noargs();  
	}  
  
	@Bean  
	public CommandLineRunner testSend(RabbitTemplate rabbitTemplate) {  
		return args -> {  
			String message = "테스트 메시지";  
			MessageProperties props = new MessageProperties();  
			props.setHeader("x-delay", 3000); // 3초 지연  
			Message msg = new Message(message.getBytes(), props);  
			rabbitTemplate.send(DELAYED_EXCHANGE, ROUTING_KEY, msg);  
			System.out.println("지연 메시지 전송 완료");  
		};  
	}  
  
	public static void main(String[] args) {  
		SpringApplication.run(DelayQueueMain.class, args);  
	}  
}
```

#### Delay Queue 설정 요약


|      항목       |                   설정값/설명                    |
| :-----------: | :-----------------------------------------: |
|  Exchange 타입  |              x-delayed-message              |
| Exchange args | x-delay-type=direct, fanout, topic, headers |
|      바인딩      |                원하는 라우팅키로 바인딩                |
|    메세지 헤더     |      x-delay (ms 단위, 예: 3000 = 3초 지연)       |




## Priority Queue

> 예제 : [RabbitMQ - Priority-Queue Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/priority_queue)
> RabbitMQ 3.5.0 이상 버전에서 기본적으로 제공한다.


우선순위 큐는 메시지에 우선순위 속성(priority)을 설정하여 높은 우선순위 메시지를 먼저 처리하는 큐이다. 예를 들어, 우선순위 큐는 VIP 고객 주문 우선 처리, 시스템 장애 알림 우선 전송, 긴급 배치 작업 우선 실행 등 일반 메시지보다 먼저 처리되어야 하는 경우에 사용할 수 있다.

우선순위 큐를 사용하지 않고 메세지를 우선순위에 따라 처리하고자 하는 경우에는 아래와 같은 방법이 사용될 수 있다.

1. 일반 큐만으로 우선순위를 구현하는 방법.
	우선순위별로 일반큐를 분리하여 생성하여 사용한다. ex) `high.message`, `mid.message`, `low,message`

2. 프로세스 내부에서 메세지를 정렬하여 처리하는 방법.
	일반 큐의 메세지를 프로세스 내부에서 우선순위에 따라 정렬하여 처리한다. ex) `SortedSet`, `sorted(Comparater::comparing)`

위와 같은 방법을 사용하면 메시지를 우선순위로 정렬하기 위한 별도의 비즈니스 로직이 필요하기 때문에 신경쓸 부분이 많아져 복잡성이 증가한다. 또한 큐 관리, 메시지 분배, 정렬 성능 등 추가적인 고려사항이 발생한다.


- 우선순위 큐 사용의 장점
	- 자동 정렬: RabbitMQ가 우선순위에 따라 자동으로 메시지 정렬
	- 성능 최적화: 효율적인 정렬 알고리즘 사용
	- 구현 단순: 복잡한 분배 로직이나 정렬 로직 불필요


