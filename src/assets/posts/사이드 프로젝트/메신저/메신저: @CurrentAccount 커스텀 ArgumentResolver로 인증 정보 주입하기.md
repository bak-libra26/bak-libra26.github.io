---
summary: MSA 환경에서 Gateway가 JWT를 파싱해 x-usr-* 헤더로 전달한 사용자 정보를, 뒷단 서비스의 컨트롤러에서 @CurrentAccount Account 파라미터로 자동 변환하는 HandlerMethodArgumentResolver를 구현한 과정을 정리했습니다.
tags: Spring MVC, HandlerMethodArgumentResolver, MSA, JWT
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 커스텀 ArgumentResolver를 만들어 인증 정보를 자동 주입한 과정을 정리한 글입니다.


## 문제: 모든 컨트롤러에서 헤더를 직접 꺼내야 한다

pinguinz는 API Gateway에서 JWT를 검증하고, 파싱한 사용자 정보를 `x-usr-id`, `x-usr-nickname`, `x-usr-role`, `x-usr-status` 헤더로 뒷단 서비스에 전달하는 구조다.

뒷단 서비스의 컨트롤러에서 사용자 정보가 필요하면 이렇게 해야 한다:

```java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @RequestHeader("x-usr-id") Long userId,
        @RequestHeader("x-usr-nickname") String nickname,
        @RequestHeader("x-usr-role") String role,
        @RequestHeader("x-usr-status") String status,
        @RequestParam("nickname") String targetNickname) {

    Account me = Account.builder()
            .id(userId)
            .nickname(nickname)
            .role(AccountRole.valueOf(role))
            .status(AccountStatus.valueOf(status))
            .build();

    // ...
}
```

문제:
- **모든 인증 필요 엔드포인트**에서 4개 헤더를 반복해서 선언
- Account 객체 조립 로직이 컨트롤러마다 중복
- 헤더 이름이 문자열이라 오타에 취약
- 새 헤더가 추가되면 모든 컨트롤러를 수정해야 함


## 해결: @CurrentAccount + HandlerMethodArgumentResolver

목표는 이것이다:

```java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account me,
        @RequestParam("nickname") String targetNickname) {
    // me에 id, nickname, role, status가 이미 채워져 있음
}
```

Spring MVC의 `HandlerMethodArgumentResolver`를 사용하면, 컨트롤러 메서드의 파라미터를 **Spring이 호출하기 전에 자동으로 만들어서 넘겨줄 수 있다.**


## HandlerMethodArgumentResolver 이해하기

Spring MVC가 컨트롤러 메서드를 호출할 때, 각 파라미터를 어떻게 채울지 결정하는 과정이 있다.

```
요청 → DispatcherServlet → HandlerAdapter → ArgumentResolver → 컨트롤러 메서드
```

`HandlerMethodArgumentResolver`는 두 개의 메서드를 구현해야 한다:

```java
public interface HandlerMethodArgumentResolver {

    // "이 파라미터를 내가 처리할 수 있는가?"
    boolean supportsParameter(MethodParameter parameter);

    // "이 파라미터의 값을 만들어라"
    Object resolveArgument(MethodParameter parameter, ...);
}
```

Spring은 등록된 ArgumentResolver들을 순회하면서, `supportsParameter()`가 `true`를 반환하는 resolver를 찾아서 `resolveArgument()`를 호출한다.

익숙한 `@RequestParam`, `@RequestBody`, `@PathVariable`도 전부 내부적으로 ArgumentResolver로 구현되어 있다.


## 구현

### 1단계: @CurrentAccount 어노테이션

```java
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CurrentAccount {
}
```

- `@Target(PARAMETER)`: 메서드 파라미터에만 붙일 수 있음
- `@Retention(RUNTIME)`: 런타임에 리플렉션으로 읽을 수 있음

이 어노테이션 자체는 아무 로직이 없다. ArgumentResolver가 이걸 보고 "내가 처리할 파라미터"라고 판단하는 마커 역할이다.

### 2단계: CurrentAccountArgumentResolver

```java
public class CurrentAccountArgumentResolver implements HandlerMethodArgumentResolver {

    private final CurrentAccountResolverSupport support = new CurrentAccountResolverSupport();

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasAnnotation = parameter.hasParameterAnnotation(CurrentAccount.class);
        boolean isAccountType = Account.class.isAssignableFrom(parameter.getParameterType());
        return hasAnnotation && isAccountType;
    }

    @Override
    public Object resolveArgument(
            MethodParameter parameter,
            ModelAndViewContainer mavContainer,
            NativeWebRequest webRequest,
            WebDataBinderFactory binderFactory
    ) {
        HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);
        if (request == null) {
            throw new IllegalStateException("No HttpServletRequest");
        }

        Map<String, String> headers = Collections.list(request.getHeaderNames()).stream()
                .collect(Collectors.toMap(
                        name -> name,
                        request::getHeader
                ));

        return support.resolveFromHeaders(headers);
    }
}
```

`supportsParameter()`에서 두 가지를 모두 확인한다:

1. `@CurrentAccount` 어노테이션이 있는가
2. 파라미터 타입이 `Account`인가

둘 다 만족해야 처리한다. 이렇게 하면 `@CurrentAccount String name` 같은 실수를 방지할 수 있다.

`resolveArgument()`는 HTTP 요청에서 헤더를 꺼내서 `CurrentAccountResolverSupport`에 위임한다.

### 3단계: CurrentAccountResolverSupport — 헤더 → Account 변환

```java
public class CurrentAccountResolverSupport {

    public Account resolveFromHeaders(Map<String, String> headers) {
        String id = headers.getOrDefault("x-usr-id", "");
        String nickname = headers.getOrDefault("x-usr-nickname", "");
        String role = headers.getOrDefault("x-usr-role", "");
        String status = headers.getOrDefault("x-usr-status", "");

        if (id.isEmpty() || nickname.isEmpty()) {
            throw new IllegalArgumentException(
                "Required headers missing: x-usr-id, x-usr-nickname");
        }

        Account.AccountBuilder builder = Account.builder()
                .id(Long.valueOf(id))
                .nickname(nickname);

        if (!role.isEmpty()) {
            builder.role(AccountRole.valueOf(role));
        }

        if (!status.isEmpty()) {
            builder.status(AccountStatus.valueOf(status));
        }

        return builder.build();
    }
}
```

왜 `resolveArgument()`에 직접 넣지 않고 Support 클래스로 분리했을까?

**테스트 용이성** 때문이다. `CurrentAccountResolverSupport`는 `HttpServletRequest`에 의존하지 않고 `Map<String, String>`만 받는다. 단위 테스트에서 Mock 없이 순수 Map만 넘기면 된다.

```java
// 테스트
Map<String, String> headers = Map.of(
    "x-usr-id", "123",
    "x-usr-nickname", "testuser",
    "x-usr-role", "USER",
    "x-usr-status", "ENABLED"
);

Account account = support.resolveFromHeaders(headers);
assertEquals(123L, account.getId());
```


## 등록

ArgumentResolver를 만들었으면 Spring에 등록해야 한다.

```java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
```

`WebMvcConfigurer`의 `addArgumentResolvers()`를 오버라이드해서 등록한다. 이 설정 클래스는 core 모듈의 AutoConfiguration을 통해 자동 등록되는데, 이건 별도 글에서 다룬다.


## 최종 결과

Before:

```java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @RequestHeader("x-usr-id") Long userId,
        @RequestHeader("x-usr-nickname") String nickname,
        @RequestHeader("x-usr-role") String role,
        @RequestHeader("x-usr-status") String status,
        @RequestParam("nickname") String targetNickname) {

    Account me = Account.builder()
            .id(userId)
            .nickname(nickname)
            .role(AccountRole.valueOf(role))
            .status(AccountStatus.valueOf(status))
            .build();
    // ...
}
```

After:

```java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account me,
        @RequestParam("nickname") String targetNickname) {
    // me.getId(), me.getNickname(), me.getRole(), me.getStatus() 모두 사용 가능
}
```

현재 social 서비스에서 `@CurrentAccount`를 사용하는 엔드포인트가 7개다. 각각에서 4개 헤더 + Account 조립 코드가 사라졌다.


## 전체 흐름 정리

```
클라이언트
  └─ Authorization: Bearer eyJ...

API Gateway (JwtAuthGatewayFilterFactory)
  └─ JWT 검증 → claims 추출
  └─ x-usr-* 헤더 주입 (기존 헤더 strip 후)
  └─ 뒷단 서비스로 라우팅

뒷단 서비스 (social, chat 등)
  └─ DispatcherServlet → HandlerAdapter
  └─ CurrentAccountArgumentResolver
       └─ supportsParameter: @CurrentAccount + Account 타입 확인
       └─ resolveArgument: x-usr-* 헤더 → Account 객체 조립
  └─ 컨트롤러 메서드에 Account 주입
```

**Gateway는 JWT → 헤더, ArgumentResolver는 헤더 → Account.** 각 계층이 자기 책임만 갖는다.


## 면접 포인트

면접에서 "Spring MVC의 요청 처리 과정을 설명해 주세요"라는 질문이 나오면, `DispatcherServlet → HandlerMapping → HandlerAdapter → ArgumentResolver → 컨트롤러` 흐름을 설명하고, **ArgumentResolver를 직접 구현해서 커스텀 어노테이션으로 인증 정보를 주입해 봤다**고 하면 Spring MVC 내부 동작을 이해하고 있다는 걸 보여줄 수 있다.

핵심은 `@RequestParam`, `@RequestBody` 같은 기본 어노테이션도 결국 ArgumentResolver로 구현되어 있다는 사실이다. 커스텀 ArgumentResolver를 만든다는 건 Spring이 제공하는 확장 포인트를 이해하고 활용할 수 있다는 뜻이다.
