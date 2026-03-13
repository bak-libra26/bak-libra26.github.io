---
summary: MSA 메신저 프로젝트에서 core 모듈의 공통 빈(GlobalExceptionHandler, ArgumentResolver)을 각 서비스에 자동 등록하기 위해 Spring Boot AutoConfiguration을 적용한 과정을 정리했습니다. ComponentScan 확장 방식과 비교하고, WebFlux 기반 API Gateway와의 충돌을 방지하는 방법까지 다룹니다.
tags: Spring Boot, MSA, AutoConfiguration
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 core 모듈의 공통 빈을 AutoConfiguration으로 자동 등록하면서 고민했던 내용을 정리한 글입니다.


## 문제: 모듈마다 같은 설정을 반복해야 했다

auth 모듈에서 `GlobalExceptionHandler`와 `CurrentAccountArgumentResolver`를 만들어 사용하고 있었다. 그런데 chat, social 등 다른 모듈에서도 이 빈들이 필요하다. `@Valid` 실패 처리는 모든 API에서 공통이고, `@CurrentAccount`로 사용자 정보를 주입받는 것도 모든 서비스에서 동일한 패턴이다.

이걸 모듈마다 복사해서 넣는 건 당연히 안 된다. core 모듈에 넣으면 되는데, 문제는 등록 방식이다.


## 대안 비교

### 1. @ComponentScan 확장

각 모듈의 Application 클래스에서 `@ComponentScan("kr.co.baklibra26.pinguinz")`으로 스캔 범위를 넓히는 방식이다.

```java
@SpringBootApplication
@ComponentScan("kr.co.baklibra26.pinguinz")
public class AuthApplication { ... }
```

간단하지만, 새 모듈을 추가할 때마다 같은 설정을 반복해야 한다. 그리고 의도하지 않은 빈까지 스캔될 수 있다.

### 2. AutoConfiguration

core 모듈에 자동 설정 클래스를 만들고 `META-INF`에 등록하면, core를 의존성으로 가진 모든 모듈에서 별도 설정 없이 빈이 자동 등록된다.

새 모듈에서는 `pom.xml`에 core 의존성만 추가하면 끝이다.


## 결정: AutoConfiguration

core가 auth, chat, social 등 여러 모듈의 공통 라이브러리 역할이므로 AutoConfiguration이 더 적합하다. 한 번 설정하면 새 모듈에서 별도 설정 없이 core 의존성만 넣으면 된다.


## 구현

### AutoConfiguration 클래스

```java
@AutoConfiguration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@Import({GlobalExceptionHandler.class, CoreWebMvcConfig.class})
public class CoreAutoConfiguration {
}
```

`@ConditionalOnWebApplication(type = SERVLET)`이 핵심이다. API Gateway는 Spring Cloud Gateway 기반이라 WebFlux(Reactive)를 사용하는데, `GlobalExceptionHandler`의 `@RestControllerAdvice`나 `HandlerMethodArgumentResolver`는 WebMVC 전용이다. 이 조건을 걸면 WebFlux 환경에서는 이 설정 자체가 등록되지 않는다.

### GlobalExceptionHandler

`@Valid` 실패 시 일관된 에러 응답을 반환한다. 모든 WebMVC 모듈에서 공통으로 동작한다.

```java
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final ResultCode INVALID_INPUT = new ResultCode() {
        @Override
        public String getCode() { return "COMMON_0001"; }
        @Override
        public String getMessage() { return "One or more fields are invalid."; }
    };

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationException(MethodArgumentNotValidException ex) {
        log.warn("[validation] invalid request. errors={}", ex.getBindingResult().getFieldErrors());
        return ResponseEntity.badRequest().body(ApiResponse.of(INVALID_INPUT));
    }
}
```

### CoreWebMvcConfig

`@CurrentAccount` 어노테이션으로 컨트롤러 파라미터에 사용자 정보를 주입하는 ArgumentResolver를 등록한다.

```java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
```

`CurrentAccountArgumentResolver`는 API Gateway가 JWT에서 파싱해 헤더(`x-usr-id`, `x-usr-nickname`)에 실어준 값을 읽어서 `Account` 객체로 변환한다. 이 로직은 모든 뒷단 서비스에서 동일하므로 core에 두는 것이 맞다.

### META-INF 등록

Spring Boot가 자동으로 읽는 파일에 설정 클래스를 등록한다.

```
# core/src/main/resources/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
kr.co.baklibra26.pinguinz.core.common.config.CoreAutoConfiguration
```

### core pom.xml 의존성

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <optional>true</optional>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <optional>true</optional>
</dependency>
```

`<optional>true</optional>`이 중요하다. optional 의존성은 core를 컴파일할 때만 사용되고, core를 가져다 쓰는 모듈로 전이되지 않는다. API Gateway가 core를 의존해도 `spring-boot-starter-web`이 딸려오지 않으므로 WebFlux와 충돌하지 않는다.


## API Gateway와의 공존

API Gateway의 의존성 구조:

```xml
<!-- api-gateway/pom.xml -->
<dependency>
    <groupId>kr.co.baklibra26.pinguinz</groupId>
    <artifactId>pinguinz-core</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

여기서 두 가지 안전장치가 동작한다:

1. **optional 의존성** — core의 `spring-boot-starter-web`이 전이되지 않으므로 classpath에 WebMVC가 없다
2. **@ConditionalOnWebApplication(type = SERVLET)** — 설령 classpath에 있더라도, 현재 애플리케이션이 SERVLET 타입이 아니면 설정 자체가 무시된다


## 최종 패키지 구조

```
core/
├── src/main/java/.../core/
│   └── common/
│       ├── api/
│       │   ├── ApiResponse.java
│       │   └── ResultCode.java
│       ├── annotations/
│       │   └── CurrentAccount.java
│       ├── config/
│       │   ├── CoreAutoConfiguration.java
│       │   ├── CoreWebMvcConfig.java
│       │   └── GlobalExceptionHandler.java
│       ├── supports/
│       │   ├── CurrentAccountArgumentResolver.java
│       │   └── CurrentAccountResolverSupport.java
│       └── util/
│           ├── JwtUtil.java
│           └── MaskingUtil.java
└── src/main/resources/
    └── META-INF/spring/
        └── org.springframework.boot.autoconfigure.AutoConfiguration.imports
```

core에 공통 빈을 추가할 때는 `CoreAutoConfiguration`에 `@Import`만 추가하면 된다. 새 서비스 모듈을 만들 때는 core 의존성만 넣으면 모든 공통 설정이 자동으로 적용된다.
