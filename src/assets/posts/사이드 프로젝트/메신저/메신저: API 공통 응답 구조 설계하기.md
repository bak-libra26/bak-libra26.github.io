---
summary: MSA 메신저 프로젝트에서 API 응답 구조를 통일하기 위해 ApiResponse<T>와 ResultCode 인터페이스를 설계한 과정을 정리했습니다. 기존 엔드포인트마다 달랐던 Response 클래스를 하나로 합치고, 클라이언트(Electron/React)에서 일관된 파싱이 가능하도록 만든 결정 과정을 다룹니다.
tags: Spring Boot, MSA, API 설계
references:
created_date: 2026-03-11T00:00:00.000Z
last_modified_date: 2026-03-11T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API 공통 응답 구조를 설계하면서 고민했던 내용을 정리한 글입니다.


## 문제: 응답 구조가 제각각이었다

기존에는 API마다 별도의 Response 클래스를 만들어 사용했다.

- `LoginResponse` — code, message를 String으로 직접 저장, token 필드 추가
- `SignUpResponse` — code, message를 String으로 직접 저장
- `VerificationResponse` — Status enum을 그대로 보유하고 getter로 위임

같은 패턴인데 구현 방식이 3개 다 달랐다. API가 늘어날수록 Response 클래스도 계속 생겨야 했고, 클라이언트에서도 API마다 다른 응답 형태를 처리해야 하는 문제가 있었다.


## 결정: 공통 응답 래퍼 + 도메인별 Status enum

### 핵심 구조

**ResultCode 인터페이스** — 모든 Status enum이 구현할 계약

```java
public interface ResultCode {
    String getCode();
    String getMessage();
}
```

**ApiResponse\<T>** — 모든 API가 사용하는 공통 응답 래퍼

```java
public class ApiResponse<T> {
    private final String code;
    private final String message;
    private T data;
}
```

### 왜 StatusCode가 아니라 ResultCode인가

처음에는 `StatusCode`로 이름을 지었는데, HTTP Status Code와 혼동될 수 있었다. `ResultCode`는 "비즈니스 처리 결과 코드"라는 의미가 바로 읽히고, `LoginStatus`, `SignUpStatus` 같은 enum 이름과도 자연스럽게 어울린다.

### 패키지 위치

`core/common/api/` 패키지에 배치했다. 이미 core 모듈이 모든 서비스의 공유 라이브러리 역할을 하고 있고, `JwtUtil`, `MaskingUtil` 등 cross-cutting 관심사가 여기 있으므로 같은 성격인 `ApiResponse`도 여기가 적합하다.

대규모 MSA에서는 API 계약과 JPA 엔티티를 별도 모듈로 분리하는 경우도 있지만, 현재 규모에서는 과분리다.


## data가 null일 때 응답에서 제외하기

`data`가 없는 API(회원가입 등)에서 `"data": null`이 응답에 포함되는 것이 깔끔하지 않았다. `@JsonInclude(JsonInclude.Include.NON_NULL)`을 클래스 레벨에 적용하면, data가 null일 때 필드 자체가 응답에서 빠진다.

```json
// 회원가입 성공 — data 없음
{"code": "SIGN_UP_0000", "message": "Account registration completed successfully."}

// 로그인 성공 — data 있음
{"code": "LOGIN_0000", "message": "...", "data": {"tokenType": "Bearer", ...}}
```


## data 없는 경우의 제네릭 타입

data가 필요 없는 API에서 `ResponseEntity<ApiResponse<Void>>`는 보기 좋지 않았다. 팩토리 메서드 반환 타입에 와일드카드를 사용하면 깔끔해진다.

```java
// data 없는 경우
public static ApiResponse<?> of(ResultCode result) { ... }

// data 있는 경우
public static <T> ApiResponse<T> of(ResultCode result, T data) { ... }
```

컨트롤러에서:
```java
// 로그인
public ResponseEntity<ApiResponse<Token>> login(...) { ... }

// 회원가입
public ResponseEntity<ApiResponse<?>> signUp(...) { ... }
```


## ResponseEntity로 감싸는 이유

`ResponseEntity`는 HTTP 레벨(상태코드, 헤더), `ApiResponse`는 비즈니스 레벨(결과코드, 메시지, 데이터)을 담당한다. 역할이 다르므로 `ResponseEntity<ApiResponse<T>>` 형태가 권장된다.

클라이언트 입장에서:
1. HTTP 상태코드로 먼저 성공/실패 분기 (axios interceptor 등)
2. `code` 필드로 세부 실패 사유 처리 (UI 메시지 분기)


## 적용 결과

기존 `LoginResponse`, `SignUpResponse` 등 개별 Response 클래스를 삭제하고, 모든 API가 `ApiResponse<T>`를 사용하도록 통일했다. Status enum은 `implements ResultCode`만 추가하면 되므로 기존 코드 변경이 최소화되었다.
