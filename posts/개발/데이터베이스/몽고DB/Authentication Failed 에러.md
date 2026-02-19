---
summary: 몽고 DB, Authentication Failed 예외 해결기
tags:
  - "#MongoDB"
  - Authentication_Failed
references:
  - https://www.mongodb.com/ko-kr/docs/manual/tutorial/create-users/#std-label-create-users
created_date: 2025-07-26 20:55:56
last_modified_date: 2025-07-26 20:56:12
---
# MongoDB / Authentication Failed 에러 해결기

## 문제 원인 파악 및 해결 과정

- 프로세스 로그
    ```shell
    com.mongodb.MongoCommandException: Command failed with error 18 (AuthenticationFailed): 'Authentication failed.' on server ${IP}:${PORT}. The full response is {"ok": 0.0, "errmsg": "Authentication failed.", "code": 18, "codeName": "AuthenticationFailed"}
    ```

1. 네이버 클라우드 서버에 Spring Boot와 MongoDB를 연동하는 과정에서 인증 실패 에러가 발생했다.
2. 에러 메시지를 통해 인증(아이디, 비밀번호, 인증 DB) 관련 문제임을 파악했다.
3. 설정 파일의 계정 정보가 정확함을 확인한 뒤, MongoDB는 사용자를 특정 데이터베이스에 소속시켜 관리하고 인증 시 해당 데이터베이스를 명확히 지정해야 한다는 점을 알게 되었다.
4. Spring Boot의 설정에서 인증 데이터베이스(authSource 또는 authentication-database) 옵션을 추가하자 정상적으로 연결이 이루어졌다.

## 스프링부트 / MongoDB 인증 데이터베이스 설정 방법

1. `uri`를 통한 설정
    ```yaml
    spring:
      data:
        mongodb:
          uri: mongodb://username:password@host:port/dbname?authSource=admin
    ```

2. `authentication-database`를 통한 설정
    ```yaml
    spring:
      data:
        mongodb:
          host: host
          port: port
          database: dbname
          username: username
          password: password
          authentication-database: admin
    ```

> **참고:**  
> 인증 DB 설정이 누락되면, 계정 정보가 정확해도 인증에 실패할 수 있다.
