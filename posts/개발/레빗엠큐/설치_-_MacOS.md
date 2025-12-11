---
tags:
  - RabbitMQ
references: 
created_date: 2025-08-23T10:12:10.000Z
last_modified_date: 2025-08-23T10:12:42.000Z
---
# RabbitMQ 설치 - MacOS


- RabbitMQ 설치
	```shell
	brew install rabbitmq
	```


- RabbitMQ 시작 및 종료
	```shell
	brew services start rabbitmq // 시작
	brew services stop rabbitmq  // 종료
	```


- RabbitMQ 상태 확인
	```shell
	brew services list // brew service 전체 상태 확인
	brew services list | awk '/rabbitmq/ {print $2}' // rabbitmq 만 확인
	```

## RabbitMQ 모니터링 페이지

RabbitMQ의 기본 포트는 5672이며, 모니터링 페이지는 15672 포트에서 동작하며, 기본적으로 다음과 같이 포트가 할당되어 있다.

- **AMQP** **기본** **포트****:** 5672  
    클라이언트 애플리케이션이 메시지를 송수신할 때 사용하는 표준 포트
    >애플리케이션이 AMQP 프로토콜로 RabbitMQ에 연결할 때 사용하는 포트
- **관리****(****모니터링****)** **페이지** **포트****:** 15672  
    RabbitMQ의 웹 기반 관리 콘솔(Management UI)은 15672 포트에서 동작함.
    브라우저에서 ‎`http://localhost:15672`로 접속하면 RabbitMQ의 상태, 큐, 익스체인지, 연결 현황 등을 모니터링할 수 있습니다.


**기본** **계정** **정보** 

RabbitMQ를 처음 설치하면 기본적으로 아래 계정이 생성되어 있다.

- **ID:** guest
- **PWD:** guest

이 계정으로 관리 페이지에 로그인할 수 있으며, 보안상 운영 환경에서는 반드시 계정 정보를 변경하거나, guest 계정의 접근을 제한하는 것이 좋다.


### 계정 생성

`Admin` -> `Users` -> `Add a User`


### Virtual Host 생성

`Admin` -> `Virtual Hosts` -> `Add a new virtual host`

