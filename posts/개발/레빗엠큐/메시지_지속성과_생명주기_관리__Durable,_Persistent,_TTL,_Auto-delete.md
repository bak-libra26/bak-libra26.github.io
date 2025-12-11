---
tags:
  - RabbitMQ
  - TTL
  - AutoDelete
  - Durable
  - Persistent
references: 
created_date: 2025-08-21T10:14:27.000Z
last_modified_date: 2025-08-21T10:15:22.000Z
id: dd2a0cfb-14b0-4b1a-807d-81ead937256f
---
# 메시지 지속성


> 메세지 지속성이란 RabbitMQ 에서 메세지가 브로커 재시작이나 장애 상황에서도 손실되지 않고 보존되는 것을 의미함.

## 메시지 지속성의 중요성


메세지 큐 시스템에서 메세지의 지속성이 중요한 이유는 무엇일까. 결제, 예약과 같이 신뢰성이 중요한 비즈니스에서 하드웨어 또는 네트워크 장애, 혹은 브로커 재시작 등의 이슈로 인한 메세지 손실은 비즈니스에 치명적으로 작용한다.

그렇기 때문에 결제, 예약과 같이 신뢰성이 중요한 메세지는 하드웨어 또는 네트워크 장애, 혹은 브로커 재시작 등의 작업을 수행하더라도 메세지가 손실되지 않도록 보장되어야 한다.

메세지 지속성을 보장하면 장애 발생 시에도 메세지가 디스크에 안전하게 저장되어 복구가 가능하며, 서비스 중단이나 데이터 손실로 인한 피해를 최소화할 수 있다.

또한, 메세지의 중요도에 따라 적절한 지속성 정책을 적용함으로써 시스템 자원을 효율적으로 사용할 수 있고, 불필요한 데이터 저장을 방지할 수 있다.

## Durable 과 Persistent

### Durable (큐/익스체인지 지속성)

Durable 속성은 큐/익스체인지 지속성을 의미한다. Durable 속성이 참인 큐/익스체인지는 브로커 재시작이나 장애 상황에서도 사라지지 않는다. 기본적으로 큐/익스체인지의 Durable 속성은 거짓(false)로 설정되어 있는데

이러한 큐/익스체인지는 메세지 브로커를 재시작하는 경우에는 큐/익스체인지의 메세지가 사라진다. 따라서 큐/익스체인지의 메세지가 손실되지 않도록 하기 위해서는 Durable 속성을 참(true)으로 설정해야 한다.

- 익스체인지 생성 메서드
	```java
	/**
	* 익스체인지를 선언합니다.
	*
	* @param exchange 익스체인지 이름
	* @param type 익스체인지 타입 (예: "direct", "fanout", "topic", "headers")
	* @param durable true로 설정하면 브로커 재시작 시에도 익스체인지가 유지됩니다.
	*/
	exchangeDeclare(String exchange, String type, boolean durable)
	```

  

- 큐 생성 메서드
	```java
	/**
	* 큐를 선언합니다.
	*
	* @param queue 큐 이름
	* @param durable true로 설정하면 브로커 재시작 시에도 큐가 유지됩니다.
	* @param exclusive true로 설정하면 해당 커넥션에서만 큐를 사용할 수 있습니다.
	* @param autoDelete true로 설정하면 사용이 끝난 큐가 자동으로 삭제됩니다.
	* @param arguments 기타 큐 옵션(예: TTL 등)
	*/
	queueDeclare(String queue, boolean durable, boolean exclusive, boolean autoDelete, Map<String, Object> arguments)
	```

큐와 익스체인지 생성 시 durable 속성을 참으로 설정한 경우 브로커 재시작이나 장애 상황에서도 큐/익스체인지의 메세지가 사라지지 않는다.
  

### Persistent (메시지 지속성)

Persistent 속성은 메시지 지속성을 의미한다. Persistent 속성이 참인 메시지는 브로커 재시작이나 장애 상황에서도 사라지지 않는다.

기본적으로 메시지의 Persistent 속성은 거짓(false)로 설정되어 있기 때문에 메세지는 메모리 내에만 저장되고 브로커 재시작이나 장애 상황에서 사라진다. 따라서 메세지가 손실되지 않도록 하기 위해서는 Persistent 속성을 참(true)으로 설정해야 한다.

- 메시지 전송 메서드
	```java
		/**
		* 메시지를 전송합니다.
		*
		* @param exchange 메시지를 보낼 익스체인지 이름
		* @param routingKey 라우팅 키
		* @param props 메시지 속성 (예: Persistent 여부 등)
		* @param body 전송할 메시지 본문 (byte 배열)
		*/
		basicPublish(String exchange, String routingKey, BasicProperties props, byte[] body)
	```

  

- 메시지 발행 시 Persistent 속성 추가
	```java
	import com.rabbitmq.client.AMQP;
	
	// 방법 1
	AMQP.BasicProperties props = new AMQP.BasicProperties.Builder()
	.deliveryMode(MessageProperties.PERSISTENT_TEXT_PLAIN.getDeliveryMode())
	.build();
	
	channel.basicPublish("my_exchange", "my_routing_key", props, "Hello, RabbitMQ!".getBytes("UTF-8"));
	
	// 방법 2
	channel.basicPublish(
		"", // 익스체인지 이름 (기본 익스체인지)
		"task_queue", // 큐 이름
		MessageProperties.PERSISTENT_TEXT_PLAIN, // Persistent 속성 적용
		message.getBytes("UTF-8") // 메시지 본문
	);
	```


위의 예시처럼 메시지 발행 시 Persistent 속성을 적용하려면 AMQP.BasicProperties 인자에 메시지 속성을 명시적으로 추가해야 한다. 만약 AMQP.BasicProperties에 null을 전달하면 메시지는 기본적으로 비지속성(persistent=false)으로 처리되어 메모리에만 저장되고, 브로커 재시작이나 장애 발생 시 사라진다. 반면, deliveryMode를 MessageProperties.PERSISTENT_TEXT_PLAIN(2)로 설정하면 메시지가 디스크에 저장되어 장애 상황에서도 안전하게 보존된다.

### Durable과 Persistent의 관계 및 설정 가이드

Durable(내구성)과 Persistent(지속성)는 메시지의 신뢰성과 보존에 중요한 역할을 합니다. 각각의 조합에 따라 메시지의 보존 방식이 달라지므로, 아래 표를 참고하여 상황에 맞게 설정해야 합니다.

| Durable | Persistent | 동작 및 설명                                                   |
| ------- | ---------- | --------------------------------------------------------- |
| true    | true       | 큐와 메시지 모두 디스크에 저장됨. 브로커 재시작/장애 시에도 메시지가 안전하게 보존됨. (가장 안전) |
| true    | false      | 큐는 디스크에 저장되나, 메시지는 메모리에만 존재. 장애 시 메시지는 유실될 수 있음.          |
| false   | true       | 메시지는 디스크에 저장되나, 큐가 비내구성이므로 브로커 재시작 시 큐와 메시지 모두 사라짐.       |
| false   | false      | 큐와 메시지 모두 메모리에만 존재. 장애나 재시작 시 모두 유실됨.                     |

  

> **정리:**
> 메시지의 신뢰성을 보장하려면 큐와 메시지 모두 Durable과 Persistent를 true로 설정해야 합니다. 한쪽만 true여도 장애 상황에서 메시지 유실이 발생할 수 있으니, 서비스의 중요도에 따라 적절히 선택하세요.

  
  
  

## TTL (Time To Live)

RabbitMQ에서 TTL(Time To Live)은 메시지 또는 큐에 저장된 데이터의 유효 기간을 제한하는 기능이다. TTL은 크게 두 가지 방식으로 설정할 수 있다.

---
  

### 큐 TTL (Queue TTL)

큐에 TTL을 설정하면, 해당 큐에 들어오는 **모든 메시지**가 지정한 시간(밀리초) 동안만 큐에 머물 수 있습니다. TTL이 지난 메시지는 자동으로 삭제된다.


- 큐 자체 TTL 설정
	```java
	import java.util.HashMap;
	import java.util.Map;
	
	// 큐에 TTL 30초(30000ms) 설정
	Map<String, Object> args = new HashMap<>();
	args.put("x-message-ttl", 30000); // 30초
	
	channel.queueDeclare(
		"my_queue", // 큐 이름
		true, // durable
		false, // exclusive
		false, // autoDelete
		args // arguments (TTL 포함)
	);
	```


위와 같이 `x-message-ttl` 파라미터를 큐 선언 시 arguments에 추가하면, 해당 큐에 들어오는 모든 메시지는 30초가 지나면 자동으로 삭제된다. 만약 개별 메세지의 TTL 을 설정하고 싶은 경우에는 메시지 발행 시 `expiration` 속성에 값을 지정하면 된다.

  

---

  

### 메시지 TTL (Message TTL)

메시지 단위로 TTL을 설정하면, 각 메시지마다 개별적으로 유효 기간을 지정할 수 있다. 메시지 TTL은 메시지 발행 시 `expiration` 속성에 값을 지정하여 설정할 수 있다.


- 메시지 발행 시 TTL 설정
	```java
	import com.rabbitmq.client.AMQP;
	import com.rabbitmq.client.MessageProperties;
	
	
	AMQP.BasicProperties props = new AMQP.BasicProperties.Builder()
	.deliveryMode(MessageProperties.PERSISTENT_TEXT_PLAIN.getDeliveryMode())
	.expiration("10000") // 10초 후 자동 삭제
	.build();
	
	channel.basicPublish("", "task_queue", props, "Hello, RabbitMQ!".getBytes("UTF-8"));
	```

  

위와 같이 메시지 발행 시 `expiration` 속성을 지정하면, 해당 메시지는 10초가 지나면 자동으로 삭제된다.
만약 AMQP.BasicProperties에 null을 전달하면 메시지의 expiration 속성 값은 0으로 설정되어 메시지는 자동으로 삭제되지 않는다.

  

---

  

### TTL(Time To Live) 요약

- **큐 TTL**: 큐에 들어오는 모든 메시지에 동일한 TTL이 적용된다.
- **메시지 TTL**: 각 메시지마다 개별적으로 TTL을 지정할 수 있다.

#### 큐 TTL과 메시지 TTL을 모두 설정한 경우

두 TTL 중 **더 짧은 값**이 우선 적용되어, 해당 시간이 지나면 메시지가 삭제된다.

- 큐 TTL이 더 짧으면: 큐 TTL이 만료되어 메시지가 삭제되고, 메시지 TTL은 무시된다.
- 메시지 TTL이 더 짧으면: 메시지 TTL이 만료되어 메시지가 삭제되고, 큐 TTL은 무시된다.


따라서, 메시지 TTL을 활용하려면 큐 TTL을 메시지 TTL보다 길게 설정하는 것이 좋다.

  

---

  
  
  

## Auto-delete(자동 삭제)

Auto-delete(자동 삭제)는 큐(queue)나 익스체인지(exchange)가 더 이상 사용되지 않을 때 자동으로 삭제되는 기능으로 Auto-Delete 속성을 설정하면 마지막으로 연결된 소비자(consumer) 또는 프로듀서(producer)가 연결을 끊으면 해당 큐나 익스체인지가 삭제도록 설정할 수 있다.

  
- 큐 자체에 `autoDelete=true`로 설정하면, 큐에 연결된 모든 소비자가 연결을 해제했을 때 큐가 자동으로 삭제된다.
- 익스체인지 자체에 `autoDelete=true`로 설정하면, 바인딩된 모든 큐가 해제되었을 때 익스체인지가 자동으로 삭제된다.

이 기능은 임시로 사용하는 큐나 익스체인지에 적합하며, 불필요한 리소스 점유를 방지할 수 있으나 서비스 중에 큐가 예기치 않게 삭제될 수 있으므로, 중요한 데이터 처리가 필요한 경우에는 `autoDelete=false`로 설정하는 것이 안전하다.

  

---

