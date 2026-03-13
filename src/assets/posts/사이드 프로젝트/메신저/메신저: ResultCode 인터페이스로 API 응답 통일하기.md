---
summary: MSA 프로젝트에서 모든 API 응답을 하나의 포맷으로 통일하기 위해 ResultCode 인터페이스 + ApiResponse 제네릭 클래스를 설계한 과정을 정리했습니다. 도메인별 enum이 하나의 인터페이스를 구현하는 다형성 패턴, 예외 없이 결과를 표현하는 방식, 그리고 실제 11개 Result enum에 적용한 경험을 다룹니다.
tags: Spring Boot, API Design, Java, Enum, Generics
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API 응답 포맷을 통일한 설계를 정리한 글입니다.


## 문제: 응답 포맷이 제각각이다

MSA 프로젝트에서 여러 서비스가 각자 응답 포맷을 만들면 클라이언트가 고생한다.

```json
// auth 서비스
{ "success": true, "token": "eyJ..." }

// social 서비스
{ "status": "OK", "result": { "friends": [...] } }

// chat 서비스
{ "code": 200, "data": { "messages": [...] } }
```

클라이언트는 서비스마다 다른 파싱 로직을 작성해야 한다. 에러 처리도 서비스마다 다르다. 새 서비스가 추가될 때마다 같은 문제가 반복된다.

필요한 건 **모든 서비스, 모든 엔드포인트가 동일한 포맷으로 응답**하는 것이다.


## 설계: ResultCode 인터페이스

핵심 아이디어는 간단하다. "응답 코드"의 공통 계약을 인터페이스로 정의하고, 각 도메인이 이를 구현한다.

```java
public interface ResultCode {
    String getCode();
    String getMessage();
}
```

딱 두 개의 메서드. 코드와 메시지.

### ApiResponse: 통일된 응답 래퍼

```java
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    private final String code;
    private final String message;
    private T data;

    public ApiResponse(ResultCode resultCode) {
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
    }

    public ApiResponse(ResultCode resultCode, T data) {
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
        this.data = data;
    }

    public static <T> ApiResponse<T> of(ResultCode resultCode) {
        return new ApiResponse<>(resultCode);
    }

    public static <T> ApiResponse<T> of(ResultCode resultCode, T data) {
        return new ApiResponse<>(resultCode, data);
    }
}
```

포인트:

- **`ResultCode`를 받는다, 구체 타입이 아니라**: `LoginResult`든 `RefreshResult`든 `SendFriendRequestResult`든 상관없다.
- **`@JsonInclude(NON_NULL)`**: data가 null이면 JSON에서 아예 빠진다. 실패 응답에서 불필요한 `"data": null`이 사라진다.
- **정적 팩토리 메서드 `of()`**: 생성자 대신 가독성 좋은 호출을 제공한다.

결과적으로 모든 응답이 이 포맷을 따른다:

```json
// 성공 (data 있음)
{ "code": "LOGIN_0000", "message": "Login completed successfully.", "data": { ... } }

// 실패 (data 없음 → 필드 자체가 생략)
{ "code": "LOGIN_0004", "message": "Invalid username or password." }
```


## 도메인별 Result enum

각 도메인이 자신의 결과 코드를 enum으로 정의한다.

### LoginResult

```java
@AllArgsConstructor
public enum LoginResult implements ResultCode {

    SUCCESS("LOGIN_0000", "Login completed successfully."),
    FAILED_BY_LOCKED_ACCOUNT("LOGIN_0001", "Your account is temporarily locked."),
    FAILED_BY_EXPIRED_ACCOUNT("LOGIN_0002", "Your account has expired."),
    FAILED_BY_DISABLED_ACCOUNT("LOGIN_0003", "Your account has been disabled."),
    FAILED_BY_INVALID_CREDENTIALS("LOGIN_0004", "Invalid username or password."),
    FAILED_BY_NOT_VERIFIED("LOGIN_0005", "Your account is not verified."),
    FAILED_BY_UNKNOWN_ERR("LOGIN_9999", "Login failed.");

    private final String code;
    private final String message;

    @Override
    public String getCode() { return this.code; }

    @Override
    public String getMessage() { return this.message; }
}
```

### RefreshResult

```java
public enum RefreshResult implements ResultCode {
    SUCCESS("REFRESH_0000", "Token refreshed successfully."),
    FAILED_BY_INVALID_TOKEN("REFRESH_0001", "Invalid or expired refresh token."),
    FAILED_BY_TOKEN_MISMATCH("REFRESH_0002", "Refresh token has been revoked."),
    FAILED_BY_UNKNOWN_ERR("REFRESH_9999", "Token refresh failed.");
    // ...
}
```

현재 프로젝트에 11개의 Result enum이 있다:

| 모듈 | enum | 코드 접두사 |
|------|------|-----------|
| auth | LoginResult | `LOGIN_` |
| auth | SignUpResult | `SIGN_UP_` |
| auth | RefreshResult | `REFRESH_` |
| auth | LogoutResult | `LOGOUT_` |
| auth | VerificationMailResult | `MAIL_REQ_` |
| auth | EmailVerificationResult | `MAIL_VERIFY_` |
| auth | ResetPasswordResult | `RESET_PW_` |
| social | SendFriendRequestResult | `FRIEND_REQ_SEND_` |
| social | AcceptFriendRequestResult | `FRIEND_REQ_ACCEPT_` |
| social | RejectFriendRequestResult | `FRIEND_REQ_REJECT_` |
| social | CancelFriendRequestResult | `FRIEND_REQ_CANCEL_` |

전부 `ResultCode`를 구현하고, 전부 `ApiResponse.of()`로 감싸진다.


## 컨트롤러에서의 사용

```java
// 로그인 성공
return ResponseEntity.ok()
    .body(ApiResponse.of(LoginResult.SUCCESS, token));

// 인증 실패
return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
    .body(ApiResponse.of(LoginResult.FAILED_BY_INVALID_CREDENTIALS));

// 토큰 재발급 성공
return ResponseEntity.ok()
    .body(ApiResponse.of(RefreshResult.SUCCESS, token));

// 친구 요청 실패
return ResponseEntity.ok()
    .body(ApiResponse.of(SendFriendRequestResult.FAILED_BY_ALREADY_SENT));
```

모듈이 다르고, 도메인이 다르고, Result enum이 다르지만 **컨트롤러의 응답 패턴은 동일**하다.


## 예외를 던지지 않는 서비스 레이어

이 패턴의 또 다른 특징은 **서비스 메서드가 예외 대신 Result enum을 반환**한다는 것이다.

```java
// 예외 방식 (일반적)
public void signup(String email, String password) {
    if (accountRepository.existsByEmail(email)) {
        throw new DuplicateAccountException("이미 존재하는 계정");
    }
    // ...
}

// Result enum 방식 (이 프로젝트)
public SignUpResult signup(String nickname, String email, String password) {
    try {
        // ... 계정 생성
        return SignUpResult.SUCCESS;
    } catch (DataIntegrityViolationException e) {
        return SignUpResult.FAILED_BY_ALREADY_EXISTS_ACCOUNT;
    } catch (Exception ex) {
        return SignUpResult.FAILED_BY_UNKNOWN_ERR;
    }
}
```

### 장점

**1. 가능한 결과가 타입으로 명시된다**

`SignUpResult`를 보면 이 메서드가 반환할 수 있는 모든 결과를 한눈에 알 수 있다. 예외 방식은 어떤 예외가 던져질지 코드를 다 읽어봐야 안다.

**2. 컨트롤러에서 분기가 명확하다**

```java
SignUpResult result = accountService.signup(nickname, email, password);
if (SignUpResult.FAILED_BY_UNKNOWN_ERR.equals(result)) {
    return ResponseEntity.internalServerError().body(ApiResponse.of(result));
}
return ResponseEntity.ok().body(ApiResponse.of(result));
```

예외 방식이면 try-catch가 중첩되거나, `@ExceptionHandler`가 여기저기 흩어진다.

**3. 테스트가 쉽다**

```java
// Result enum 방식: 반환값만 비교
SignUpResult result = accountService.signup("nick", "email@test.com", "pass");
assertEquals(SignUpResult.FAILED_BY_ALREADY_EXISTS_ACCOUNT, result);

// 예외 방식: assertThrows + 예외 타입 확인
assertThrows(DuplicateAccountException.class, () ->
    accountService.signup("nick", "email@test.com", "pass"));
```

### LoginResult.resolveLoginStatus: 예외 → Result 변환

Spring Security의 `AuthenticationProvider`는 예외를 던지는 방식이라 피할 수 없다. 이 경우 enum에 변환 메서드를 둔다.

```java
public enum LoginResult implements ResultCode {
    // ...

    public static LoginResult resolveLoginStatus(Exception ex) {
        if (ex instanceof LockedException) return FAILED_BY_LOCKED_ACCOUNT;
        if (ex instanceof AccountExpiredException) return FAILED_BY_EXPIRED_ACCOUNT;
        if (ex instanceof AccountApprovalPendingException) return FAILED_BY_NOT_VERIFIED;
        if (ex instanceof DisabledException) return FAILED_BY_DISABLED_ACCOUNT;
        return FAILED_BY_UNKNOWN_ERR;
    }
}
```

예외를 받아서 Result enum으로 변환하는 책임이 enum 안에 있다. 컨트롤러는 `LoginResult.resolveLoginStatus(ex)`만 호출하면 된다.


## 코드 접두사 컨벤션

코드 체계에는 규칙이 있다:

```
{도메인}_{번호}

LOGIN_0000    → 로그인 성공
LOGIN_0004    → 인증 실패
LOGIN_9999    → 알 수 없는 오류

REFRESH_0000  → 재발급 성공
REFRESH_0002  → 탈취 감지

COMMON_0001   → @Valid 검증 실패 (전역)
```

- `0000`은 항상 성공
- `9999`는 항상 알 수 없는 오류
- 그 사이 번호는 도메인별 실패 사유

클라이언트는 코드의 접두사만 보고 어떤 도메인의 응답인지 알 수 있고, 번호만 보고 성공/실패를 판단할 수 있다.


## 다형성이 만드는 확장성

새 서비스를 추가할 때:

1. `XxxResult` enum을 만들고 `ResultCode`를 구현한다
2. 서비스 메서드에서 `XxxResult`를 반환한다
3. 컨트롤러에서 `ApiResponse.of(result)`로 감싼다

`ApiResponse`를 수정할 필요가 없다. `ResultCode` 인터페이스를 수정할 필요도 없다. **새 enum을 추가하기만 하면 기존 시스템에 자연스럽게 끼워진다.** 이게 인터페이스 다형성의 힘이다.

```java
// core 모듈 (변경 없음)
public static <T> ApiResponse<T> of(ResultCode resultCode) {
    return new ApiResponse<>(resultCode);
}

// auth 모듈의 LoginResult → 잘 들어감
ApiResponse.of(LoginResult.SUCCESS)

// social 모듈의 SendFriendRequestResult → 잘 들어감
ApiResponse.of(SendFriendRequestResult.FAILED_BY_ALREADY_SENT)

// 미래에 추가될 chat 모듈의 SendMessageResult → 수정 없이 잘 들어갈 것
ApiResponse.of(SendMessageResult.SUCCESS)
```


## 정리

| 설계 요소 | 역할 |
|----------|------|
| `ResultCode` 인터페이스 | 모든 응답 코드의 공통 계약 |
| `ApiResponse<T>` | 통일된 응답 래퍼 (code + message + data) |
| 도메인별 Result enum | 비즈니스 결과를 타입으로 표현 |
| `@JsonInclude(NON_NULL)` | 실패 시 불필요한 data 필드 제거 |

면접에서 "API 응답을 어떻게 설계하나요?"라는 질문에 `ResultCode` 인터페이스 → enum 다형성 → `ApiResponse` 제네릭 래퍼 → 서비스가 예외 대신 Result를 반환하는 흐름까지 설명하면, **단순히 DTO를 만드는 수준이 아니라 확장 가능한 응답 체계를 설계할 수 있다는 걸 보여줄 수 있다.**
