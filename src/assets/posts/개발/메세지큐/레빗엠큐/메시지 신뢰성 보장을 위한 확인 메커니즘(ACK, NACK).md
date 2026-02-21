---
tags:
  - RabbitMQ
references: null
created_date: 2025-08-19T12:52:27.000Z
last_modified_date: 2025-08-19T12:52:53.000Z
id: 7a119f12-b9e9-4da5-abca-deaa35f3a0a6
---

# ACK(Acknowledgement)와 NACK(Negative Acknowledgement)란 무엇인가?

  

ACK와 NACK는 메시지 처리 상태를 확인하고, 그 결과를 브로커에 알리는 프로토콜로 RabbitMQ 같은 메시지 브로커에서 메시지의 신뢰성 있는 처리를 하기 위해서 중요한 역할을 한다.

  

## ACK(Acknowledgement) 란?

ACK(Acknowledgement)는 컨슈머가 메시지를 정상적으로 처리했음을 메시지 브로커(RabbitMQ)에 알릴 때 사용하는 신호이다. 예를 들어, 컨슈머가 메시지를 받아 비즈니스 로직을 성공적으로 수행했다면, ACK를 전송하여 해당 메시지가 안전하게 처리되었음을 알린다.

## NACK(Negative Acknowledgement) 란?

NACK(Negative Acknowledgement)는 메시지 처리에 실패하거나, 메시지를 거부하고 싶을 때 사용하는 신호이다. 컨슈머가 메시지를 처리하지 못했거나 오류가 발생한 경우, NACK를 전송하면 브로커가 해당 메시지를 재전송하거나 다른 처리를 할 수 있다.

---

  

## Acknowledgment Mode

RabbitMQ 에서는 컨슈머가 메시지를 받은 후, 그 처리 결과를 브로커에게 어떻게 알릴지 두 가지 방식(Auto-ack, Manual-ack)으로 정할 수 있다.

### Auto-ack

- 메시지를 수신하는 즉시 자동으로 ACK를 브로커에 전송한다.
- 별도의 확인 작업 없이 메시지가 바로 처리된 것으로 간주하기 때문에 만약 처리 중 오류가 발생해도 메시지가 손실될 수 있다.
- *예시: 로그 메시지 처리와 같이 재처리가 필요하지 않은 중요하지 않은 데이터 처리에 적합합니다.*

### Manual-ack

- 컨슈머가 비즈니스 로직을 성공적으로 처리한 후 명시적으로 ACK를 브로커에 전송한다.
- 메시지 처리가 확실히 끝난 뒤에만 삭제하여 신뢰성이 높고, 장애 발생 시 메시지 재처리하여 데이터 손실을 방지할 수 있다.
- *예시: 결제, 주문 등 꼭 재처리되어야 하는 데이터에 적합하다.*
  

---

## 코드를 통한 Ack, Nack 처리 예시


```java
import com.rabbitmq.client.*;

public class AckNackLambdaExample {
  public static void main(String[] args) throws Exception {
	ConnectionFactory factory = new ConnectionFactory();
	  factory.setHost("localhost");
	  try (Connection connection = factory.newConnection();
	  Channel channel = connection.createChannel()) {
		// Manual-ack 모드 설정: autoAck = false
		channel.basicConsume("queueName", false, (consumerTag, delivery) -> {
		String message = new String(delivery.getBody(), "UTF-8");
		long deliveryTag = delivery.getEnvelope().getDeliveryTag();
				
		boolean isProcessed = doSomething(message);
		if (isProcessed) {
		  channel.basicAck(deliveryTag, false);
		} else {
		  channel.basicNack(deliveryTag, false, true);
		}
	  }, consumerTag -> {});
	}
  }
}
```

  

위 코드는 RabbitMQ에서 Manual-ack 모드로 메시지를 처리할 때, 메시지 처리 결과에 따라 ACK 또는 NACK를 전송하는 예시다. 직접 컨슈머를 람다식으로 생성하여 메시지를 간단하게 처리하는 구조로 작성했다.

비즈니스 로직 처리는 doSomething 메서드에서 수행하며, 처리 성공 여부를 isProcessed 변수에 저장한다. 만약 isProcessed가 true이면 channel.basicAck(deliveryTag, false)를 호출하여 해당 메시지에 대해 정상 처리를 브로커에 알리고, false이면 channel.basicNack(deliveryTag, false, true)를 호출해 처리 실패를 알리면서 requeue 옵션을 true로 설정해 메시지를 다시 큐에 넣는다.

  

### basicAck 와 basicNack 메서드의 파라미터

```java
channel.basicAck(long deliveryTag, boolean multiple);
channel.basicNack(long deliveryTag, boolean multiple, boolean requeue);
```

  

1. deliveryTag: 메시지의 고유 식별자로 브로커가 어떤 메시지에 대해 ACK 또는 NACK를 처리할지 지정하는 데 사용된다.
2. multiple: 파라미터를 활용하면 여러 메시지를 한 번에 처리할 수 있다.
3. requeue: NACK 전송 시, requeue 옵션을 통해 큐에 메세지를 재적재할지 여부를 결정할 수 있다.

  

이 코드는 Manual-ack 모드에서 메시지의 신뢰성 있는 처리를 위해 메시지 처리 결과에 따라 ACK 또는 NACK를 명시적으로 전송하는 기본적인 패턴을 보여준다. 코드를 작성할 때, deliveryTag, multiple, requeue 옵션을 잘 설정하여 어떻게 메세지를 처리할 것인지 세부적으로 제어하여 안정적인 코드를 작성할 수 있도록 해야한다.