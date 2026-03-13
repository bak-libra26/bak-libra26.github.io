---
summary: MSA 메신저 프로젝트에서 API Gateway가 JWT를 파싱해 x-usr-* 헤더로 사용자 정보를 전달하는 구조에서, 외부 클라이언트가 헤더를 직접 조작해 다른 사용자로 위장할 수 있는 스푸핑 취약점을 발견하고 수정한 과정을 정리했습니다.
tags: Spring Cloud Gateway, Security, JWT, MSA
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API Gateway의 헤더 스푸핑 취약점을 발견하고 수정한 과정을 정리한 글입니다.


## 구조 먼저 보기

pinguinz는 Spring Cloud Gateway를 앞단에 두고, 뒷단의 auth, social, chat 서비스로 요청을 라우팅하는 구조다.

인증이 필요한 요청은 이런 흐름으로 처리된다:

```
클라이언트 → API Gateway (JWT 검증 → x-usr-* 헤더 주입) → 뒷단 서비스
```

Gateway의 `JwtAuthGatewayFilterFactory`가 Authorization 헤더에서 JWT를 꺼내고, 검증이 통과하면 토큰의 claims를 `x-usr-id`, `x-usr-nickname`, `x-usr-role`, `x-usr-status` 헤더로 변환해서 뒷단 서비스에 전달한다.

뒷단 서비스는 이 헤더를 읽어서 `Account` 객체로 변환한다. core 모듈의 `CurrentAccountArgumentResolver`가 이 역할을 한다.

```java
// 뒷단 서비스의 컨트롤러
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account requester,  // ← x-usr-* 헤더에서 자동 변환
        @RequestParam("nickname") String accepterNickname) {
    // ...
}
```

문제는 이 구조에서 Gateway가 기존 헤더를 정리하지 않았다는 점이다.


## 취약점: 헤더 스푸핑

수정 전 Gateway 필터 코드:

```java
ServerHttpRequest mutatedRequest = request.mutate()
        .header("x-usr-id", xUserId)
        .header("x-usr-nickname", xUserNickname)
        .header("x-usr-role", xUserRole)
        .header("x-usr-status", xUserStatus)
        .build();
```

Spring의 `ServerHttpRequest.mutate().header()`는 기존 헤더를 **덮어쓰지 않고 추가**한다. 하지만 이건 핵심이 아니다.

진짜 문제는 JwtAuth 필터가 적용되지 않는 라우트에 있었다.

```yaml
# application.yaml
routes:
  - id: auth-v1
    uri: lb://auth
    predicates:
      - Path=/api/v1/auth/**
    # filters 없음 — JwtAuth 미적용

  - id: friends-v1
    uri: lb://social
    predicates:
      - Path=/api/v1/friends/**
    filters:
      - JwtAuth  # ← 여기만 적용
```

`/api/v1/auth/**` 라우트에는 JwtAuth 필터가 없다. 로그인/회원가입은 인증 없이 접근해야 하니까 당연하다. 그런데 이 경우, 클라이언트가 `x-usr-id: 1` 같은 헤더를 직접 넣어 보내면 **Gateway를 그대로 통과해서 뒷단까지 전달된다**.

auth 서비스의 컨트롤러가 `@CurrentAccount`를 사용하는 엔드포인트가 있다면, 인증 없이 다른 사용자로 위장할 수 있는 셈이다.

JwtAuth 필터가 적용된 라우트에서도 `.header()`의 추가 동작 때문에 헤더가 중복될 수 있다. 대부분의 프레임워크가 첫 번째 값을 읽기 때문에 실질적 공격은 어렵지만, 깔끔하지 않다.


## 수정: 기존 헤더를 먼저 제거한다

```java
// [#2] 외부에서 주입된 x-usr-* 헤더를 먼저 제거한 뒤, JWT에서 파싱한 값으로 덮어씀.
// 이렇게 하지 않으면 클라이언트가 x-usr-id 등을 직접 세팅하여 다른 사용자로 위장 가능.
ServerHttpRequest mutatedRequest = request.mutate()
        .headers(h -> {
            h.remove("x-usr-id");
            h.remove("x-usr-nickname");
            h.remove("x-usr-role");
            h.remove("x-usr-status");
        })
        .header("x-usr-id", xUserId)
        .header("x-usr-nickname", xUserNickname)
        .header("x-usr-role", xUserRole)
        .header("x-usr-status", xUserStatus)
        .build();
```

`.headers(h -> { h.remove(...) })`로 기존 헤더를 strip한 뒤, JWT에서 파싱한 값만 새로 세팅한다.

이렇게 하면 JwtAuth 필터를 거치는 라우트에서는 외부 헤더가 무시되고 JWT 값만 전달된다.


## JwtAuth 필터가 없는 라우트는?

`/api/v1/auth/**`처럼 인증 없이 접근하는 라우트는 JwtAuth 필터 자체를 안 거치므로, 위 수정만으로는 방어가 안 된다.

이 경우를 대비해서 두 가지 방법이 있다:

### 방법 1: 글로벌 필터로 x-usr-* 헤더를 일괄 strip

```java
@Component
public class StripInternalHeadersFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest().mutate()
                .headers(h -> {
                    h.remove("x-usr-id");
                    h.remove("x-usr-nickname");
                    h.remove("x-usr-role");
                    h.remove("x-usr-status");
                })
                .build();

        return chain.filter(exchange.mutate().request(request).build());
    }

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE;  // 다른 필터보다 먼저 실행
    }
}
```

모든 요청에서 `x-usr-*` 헤더를 먼저 제거한다. 이후 JwtAuth 필터가 적용된 라우트에서만 JWT 파싱 후 다시 세팅한다. 가장 확실한 방법이다.

### 방법 2: 뒷단 서비스에서 직접 접근 차단

뒷단 서비스가 Gateway를 통해서만 접근 가능하도록 네트워크 레벨에서 차단하고, Gateway만 신뢰한다. 하지만 개발 환경에서는 직접 접근하는 경우가 많아서 이것만으로는 부족하다.

현재는 JwtAuth 필터 내 strip 처리를 적용했고, 글로벌 필터는 이후 추가를 고려하고 있다.


## 수정 전후 비교

**수정 전:**

```
클라이언트: x-usr-id: 999 (조작)
  → Gateway: JWT 검증 후 x-usr-id: 1 추가 (기존 999는 남아있음)
  → 뒷단 서비스: x-usr-id 헤더가 [999, 1] 두 개
```

**수정 후:**

```
클라이언트: x-usr-id: 999 (조작)
  → Gateway: 기존 x-usr-* 제거 → JWT에서 파싱한 x-usr-id: 1만 세팅
  → 뒷단 서비스: x-usr-id: 1 (신뢰 가능)
```


## 정리

내부 서비스 간 통신에 사용하는 헤더는 외부에서 절대로 주입할 수 없어야 한다. Gateway가 JWT를 검증하는 것만으로는 부족하고, **기존 헤더를 strip하는 과정이 반드시 필요하다**. 이건 Spring Cloud Gateway뿐 아니라 Nginx, Envoy 등 어떤 리버스 프록시를 쓰든 동일하게 적용되는 원칙이다.
