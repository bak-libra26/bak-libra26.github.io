---
tags:
  - RabbitMQ
  - Transaction
  - Publisher_Confirms
references: 
created_date: 2025-08-23T14:15:48.000Z
last_modified_date: 2025-08-23T14:15:48.000Z
---

# RabbitMQ - 발행 확인 메커니즘: 트랜잭션과 게시자 확인

  

## 발행 확인 메커니즘이란?

> 메시지를 브로커에 발행할 때, 브로커가 해당 메시지를 정상적으로 수신 및 저장했는지 발행자(Producer)가 확인하는 절차

소비자는 큐에 적재되어 있는 메시지를 가져와 소비하고, ACK 또는 NACK 신호를 전달하여 정상 처리 여부를 메시지 브로커에 알려준다. 그렇다면 메시지를 발행하는 경우에 메시지가 제대로 발행되었는지를 확인하려면 어떻게 해야 할까?

정상적으로 메시지 발행이 이루어졌는지 확인하기 위해 사용할 수 있는 메커니즘으로 `트랜잭션(Transaction)`과 `게시자 확인(Publish Confirm)`이 존재하며, 이러한 메시지 발행 상태를 확인할 수 있는 메커니즘을 발행 확인 메커니즘이라고 한다.

### 발행 확인이 필요한 이유

Spring AMQP를 사용하여 메시지를 발행해본 적이 있는 사람이라면 Channel 또는 RabbitTemplate을 사용했을 것이다.

메시지를 발행할 때 RabbitMQ가 종료되어 있거나 연결할 수 없는 경우 ConnectionException과 같은 예외가 발생한다. 이를 통해 메시지 발행에 실패했는지를 알 수 있다. 그렇다면 예외 처리를 통해 메시지 발행에 실패한 것을 알 수 있지 않나?라고 생각할 수 있다.

하지만 실제로는 예외가 발생하지 않는 상황이 존재한다. 예를 들어:

1. 네트워크 지연: 연결은 유지되지만 메시지가 브로커에 도달하지 않는 경우

2. 브로커 내부 오류: 메시지를 받았지만 저장 과정에서 실패하는 경우

3. 브로커 재시작: 메시지 발행 후 브로커가 재시작되는 경우

이러한 상황에서는 basicPublish() 메서드가 정상적으로 반환되어도 메시지가 실제로 브로커에 저장되지 않을 수 있다.

따라서 예외 처리만으로는 메시지 발행의 성공 여부를 정확히 판단할 수 없으며, 이를 해결하기 위해 발행 확인 메커니즘이 필요하다.



> 예외 처리와 발행 확인은 서로 다른 레벨에서 동작하는 메커니즘이다.
> 
> 예외 처리는 네트워크/연결 레벨에서 발생하는 문제를 감지한다. 예를 들어, RabbitMQ 서버가 종료되어 연결할 수 없는 경우 ConnectionException이 발생하고, 잘못된 인증 정보로 인해 AuthenticationException이 발생하는 등의 명확한 오류 상황을 처리한다.
> 
> 발행 확인은 메시지 저장 레벨에서 메시지가 실제로 브로커에 정상적으로 저장되었는지를 확인한다. 예외가 발생하지 않았더라도 메시지가 브로커의 큐에 제대로 저장되지 않았을 수 있기 때문에, 이러한 상황을 감지하고 적절한 처리를 할 수 있도록 도와준다.
> 
> 따라서 두 메커니즘은 상호 보완적인 관계이며, 안정적인 메시지 발행을 위해서는 둘 다 적절히 활용해야한다.


---

  

## 트랜잭션 (Transaction)

  
### 트랜잭션이란?

트랜잭션은 여러 메시지 발행 작업을 하나의 트랜잭션으로 묶어, 모두 성공하거나 모두 실패하도록 보장하는 원자적 처리 방식으로 ACID 속성을 보장한다.

- 원자성 (Atomicity): 모든 작업이 성공하거나 모두 실패
- 일관성 (Consistency): 시스템의 상태가 일관되게 유지
- 격리성 (Isolation): 동시 실행되는 트랜잭션들이 서로 영향을 주지 않음
- 지속성 (Durability): 커밋된 트랜잭션은 영구적으로 저장
  

### 트랜잭션 처리

트랜잭션은 다음과 같은 단계로 동작합니다:

1. 트랜잭션 시작: `tx.select()` 호출
2. 메시지 발행: `basicPublish()` 호출 (여러 메시지 가능)
3. 트랜잭션 커밋: `tx.commit()` 호출 (성공 시)
4. 트랜잭션 롤백: `tx.rollback()` 호출 (실패 시)
  

### 트랜잭션 사용 방법과 코드 예시

```java
try {
	ConnectionFactory factory = new ConnectionFactory();
	factory.setHost("localhost");
	
	try (Connection connection = factory.newConnection();
		Channel channel = connection.createChannel()) {
			channel.txSelect(); // 트랜잭션 시작
			
			try {
				// 메세지 발행
				channel.basicPublish("ex", "rk", null, "msg".getBytes("UTF-8")); 
				// 커밋
				channel.txCommit();
			} catch (Exception e) {
				// 예외 발생 시 롤백 처리
				channel.txRollback();
			}
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
}
```

  

### 트랜잭션의 장단점

- 장점: 메시지 손실 방지, 원자성 보장
- 단점: 동기적 처리로 인한 성능 저하, 처리량 감소, 실무에서는 거의 사용하지 않음

  

---

  

## 게시자 확인(Publisher Confirms)


게시자 확인은 RabbitMQ에서 **메시지를 게시한 후 브로커가 해당 메시지를 정상적으로 처리했는지 게시자에게 알려주는 기능** 으로 RabbitMQ 에서 메시지의 신뢰성 있는 전달을 위해 사용하는 기능이다. 

네트워크 장애, 브로커 장애 등으로 메시지가 유실될 수 있기 때문에, 게시자는 브로커의 확인 응답을 받아야만 메시지가 안전하게 전달되었음을 보장할 수 있다.

- **트랜잭션 기능보다 가볍고 빠른 메시지 신뢰성 확보 방법**
- 게시자가 메시지를 전송한 뒤, 브로커가 처리 완료 시점에 `ack`(성공) 또는 `nack`(실패)을 비동기로 응답


### 게시자 확인 사용 예시 

#### 확인 모드 활성화

```java
channel.confirmSelect();
```

게시자는 채널에 `confirm.select` 명령을 보내 확인 모드를 활성화한다. 한 번 confirm 모드가 되면 트랜잭션 모드로 전환 불가하며, 그 반대도 마찬가지이다.

#### 메시지 발행 및 시퀀스 부여

```java
channel.basicPublish(exchange, routingKey, props, body);
```

채널이 confirm 모드가 되면, 이후 발행되는 모든 메시지에 시퀀스 번호가 부여됩니다.

#### 확인 응답 처리 (비동기)

```java
channel.addConfirmListener(new ConfirmListener() {
    @Override
    public void handleAck(long deliveryTag, boolean multiple) throws IOException {
        // deliveryTag까지의 메시지 발행 성공 처리
    }

    @Override
    public void handleNack(long deliveryTag, boolean multiple) throws IOException {
        // deliveryTag까지의 메시지 발행 실패 처리 (재발행 등)
    }
});
```

메시지가 정상적으로 큐에 저장(내구성 메시지라면 디스크에 기록)되면 브로커가 `basic.ack`를 발행자에게 전송한다. 만약 내부 오류 등으로 인해 처리에 실패한 경우에는 `basic.nack`를 발송하며, `boolean multiple` 플래그를 통해 여러 메시지에 대한 일괄 확인할 수 있다.

#### 확인 응답 처리 (동기)

```java
try {
    channel.waitForConfirmsOrDie(); // 모든 메시지에 대한 ack/nack 대기, 실패 시 예외 발생
} catch (IOException e) {
    // 메시지 발행 실패 처리 (예: 재발행, 로깅 등)
}
```

‎`channel.waitForConfirmsOrDie()`는 발행한 모든 메시지에 대해 브로커의 ‎`ack` 또는 ‎`nack` 응답을 **동기적으로** **기다리는** 메서드이다.

- 모든 메시지가 정상적으로 ack되면, 메서드는 문제 없이 종료된다.
- 만약 하나라도 nack(실패)이 발생하거나, 응답이 일정 시간 내에 오지 않으면 **IOException** 예외가 발생한다.
- 예외가 발생했다면, 메시지가 유실되었거나 브로커 오류, 네트워크 장애 등으로 인해 안전하게 처리되지 않았다는 것을 의미한다. 따라서 반드시 예외 처리를 통해 재시도, 로깅 등 적절한 대응이 필요하다.

이 방식은 구현이 간단하다는 장점이 있지만, 대량의 메시지를 처리할 때는 비동기 방식이 더 효율적이다.

---


## 트랜잭션 vs 게시자 확인(Publisher Confirms) 비교

RabbitMQ에서 메시지의 신뢰성과 성능을 확보하는 대표적인 방법 두 가지는 **트랜잭션(Transaction)**과 **게시자 확인(Publisher Confirms)** 이다. 성능, 신뢰성, 사용 시기, 선택 기준 을 보고 상황에 맞게 트랜잭션과 게시자 확인 중 하나를 선택하여 사용하도록 하자.

| 비교 항목        | 트랜잭션(Transaction)                        | 게시자 확인(Publisher Confirms)      |
| ------------ | ---------------------------------------- | ------------------------------- |
| **성능**       | 동기적 commit/rollback, 처리 속도 느림, 대량 처리 부적합 | 비동기적 확인 응답, 성능 저하 적음, 대량 처리 적합  |
| **신뢰성**      | 메시지 발행의 원자성 보장, 여러 메시지 일괄 성공/실패          | 개별 메시지 단위 확인, 메시지 손실 방지, 원자성 불가 |
| **사용 권장 시기** | 원자적 처리가 필요한 특수 상황 (금융, 결제 등)             | 대부분의 실무 환경, 일반적인 메시지 처리에 적합     |
| **선택 기준**    | 메시지의 원자적 처리 필요 시 선택                      | 대량 메시지 처리, 높은 성능 요구 시 선택        |

---

## 정리

> 대부분의 경우, 게시자 확인(Publisher Confirms) 사용을 고려하고, 트랜잭션은 정말 원자성이 필요한 특수한 상황에만 선택하는 것이 좋다.
  


