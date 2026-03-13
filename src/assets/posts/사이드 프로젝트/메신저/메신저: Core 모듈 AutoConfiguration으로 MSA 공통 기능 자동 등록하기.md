---
summary: Spring Boot 3의 @AutoConfiguration을 사용해 공유 core 모듈의 GlobalExceptionHandler, ArgumentResolver, WebMvcConfig를 뒷단 서비스에 자동 등록하는 구조를 설계한 과정을 정리했습니다. @ConditionalOnWebApplication으로 Reactive 서비스 충돌을 방지하고, optional 의존성으로 core 모듈의 의존 범위를 최소화한 경험을 다룹니다.
tags: Spring Boot, AutoConfiguration, MSA, Spring Cloud
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 core 모듈의 AutoConfiguration을 설계한 과정을 정리한 글입니다.


## 문제: 서비스마다 같은 설정을 반복한다

MSA 프로젝트에서 여러 서비스가 공통 기능을 공유한다.

```
auth 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
social 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
chat 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
```

이 기능들을 core 모듈에 모아두고, 각 서비스가 core를 의존하면 코드 중복은 해결된다. 하지만 **설정 등록은 여전히 각 서비스에서 해야 한다.**

```java
// auth 서비스의 WebMvcConfig
@Configuration
public class AuthWebConfig implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}

// social 서비스의 WebMvcConfig — 똑같은 코드
@Configuration
public class SocialWebConfig implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
```

`GlobalExceptionHandler`도 마찬가지다. `@RestControllerAdvice`는 해당 패키지를 스캔해야 등록되는데, core 모듈의 패키지를 각 서비스가 `@ComponentScan`에 포함해야 한다.

서비스가 2개일 때는 참을 수 있지만, 4개, 8개가 되면 관리가 안 된다. 새로운 공통 기능이 추가될 때마다 모든 서비스를 수정해야 한다.


## 해결: Spring Boot AutoConfiguration

Spring Boot의 AutoConfiguration은 **의존성만 추가하면 설정이 자동으로 적용**되는 메커니즘이다. `spring-boot-starter-web`을 추가하면 Tomcat, DispatcherServlet, Jackson이 자동 설정되는 것과 같은 원리다.

core 모듈도 이 방식을 적용하면, 서비스는 `pinguinz-core` 의존성만 추가하면 된다.


## 구현

### 1단계: AutoConfiguration 클래스

```java
@AutoConfiguration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@Import({GlobalExceptionHandler.class, CoreWebMvcConfig.class})
public class CoreAutoConfiguration {
}
```

세 줄이 전부다. 하나씩 보자.

**`@AutoConfiguration`**: Spring Boot 3에서 도입된 어노테이션. 이 클래스가 자동 설정 후보라는 걸 선언한다. Spring Boot 2에서는 `@Configuration`을 쓰고 `spring.factories`에 등록했는데, 3부터는 `@AutoConfiguration`과 별도 imports 파일을 사용한다.

**`@ConditionalOnWebApplication(type = SERVLET)`**: Servlet 기반 웹 애플리케이션에서만 활성화된다. 이게 핵심이다. pinguinz의 API Gateway는 **Spring Cloud Gateway(Reactive/WebFlux)** 기반이다. `WebMvcConfigurer`는 Servlet 전용이라 Reactive 환경에서 등록하면 충돌이 발생한다.

```
auth (Servlet)    → CoreAutoConfiguration 활성화 ✓
social (Servlet)  → CoreAutoConfiguration 활성화 ✓
api-gateway (Reactive) → CoreAutoConfiguration 비활성화 ✓
```

**`@Import`**: 지정한 클래스들을 Spring 컨텍스트에 빈으로 등록한다. `@ComponentScan` 없이도 특정 클래스를 명시적으로 가져올 수 있다.

### 2단계: imports 파일 등록

```
src/main/resources/META-INF/spring/
  org.springframework.boot.autoconfigure.AutoConfiguration.imports
```

파일 내용:

```
kr.co.baklibra26.pinguinz.core.common.config.CoreAutoConfiguration
```

Spring Boot가 시작될 때 이 파일을 읽고, 등록된 클래스를 자동 설정 후보로 인식한다. 이전의 `spring.factories`를 대체하는 방식이다.

### 3단계: Import되는 클래스들

**GlobalExceptionHandler** — 전역 예외 처리:

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final ResultCode INVALID_INPUT = new ResultCode() {
        @Override
        public String getCode() { return "COMMON_0001"; }
        @Override
        public String getMessage() { return "One or more fields are invalid."; }
    };

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationException(
            MethodArgumentNotValidException ex) {
        return ResponseEntity.badRequest().body(ApiResponse.of(INVALID_INPUT));
    }
}
```

`@Valid` 검증 실패 시 모든 서비스가 동일한 포맷(`COMMON_0001`)으로 응답한다. 각 서비스에서 별도로 처리하지 않아도 된다.

**CoreWebMvcConfig** — ArgumentResolver 등록:

```java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
```

`@CurrentAccount`가 모든 Servlet 서비스에서 동작하게 된다.


## optional 의존성으로 core 모듈 가볍게 유지하기

core 모듈의 `pom.xml`을 보면:

```xml
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

`<optional>true</optional>`가 붙어 있다. 이게 뭘 의미하는가?

**core 모듈을 의존하는 서비스에게 이 의존성이 전이되지 않는다.** core 모듈의 `WebMvcConfigurer` 구현에는 `spring-boot-starter-web`이 필요하지만, core를 사용하는 서비스가 반드시 web 모듈을 사용하는 건 아니다.

```
core 모듈
  ├─ spring-boot-starter-web (optional) → 컴파일에만 사용
  ├─ spring-boot-starter-validation (optional)
  ├─ jakarta.persistence-api → 전이됨 (Entity 정의에 필요)
  └─ jjwt → 전이됨 (JWT 처리에 필요)

auth 서비스
  ├─ pinguinz-core
  ├─ spring-boot-starter-web ← 자기가 직접 의존 (core에서 전이 안 됨)
  └─ spring-boot-starter-validation ← 자기가 직접 의존

api-gateway
  ├─ pinguinz-core
  └─ spring-cloud-starter-gateway ← web 대신 Reactive
     (spring-boot-starter-web을 가져오지 않음 → 충돌 없음)
```

만약 `optional`을 빼면, api-gateway가 core를 의존하는 순간 `spring-boot-starter-web`이 전이되어 Servlet과 Reactive가 동시에 올라가는 문제가 생긴다.


## @ConditionalOnWebApplication이 없으면 어떻게 되는가

`@ConditionalOnWebApplication(type = SERVLET)`을 빼면 어떤 일이 벌어지는지 보자.

API Gateway는 Spring Cloud Gateway 기반(Reactive)이다. `CoreAutoConfiguration`이 활성화되면:

1. `CoreWebMvcConfig`(WebMvcConfigurer 구현체)가 등록됨
2. Spring이 WebMvcConfigurer 빈을 감지하고 Servlet MVC 설정을 시작
3. Reactive 환경에서 Servlet MVC 설정이 충돌
4. `ApplicationContext` 초기화 실패

```
***************************
APPLICATION FAILED TO START
***************************
Description:
Web application could not be started as it was not Servlet-based.
```

`@ConditionalOnWebApplication(type = SERVLET)`은 이걸 방지한다. Reactive 서비스에서는 `CoreAutoConfiguration` 자체가 비활성화되어, `@Import`에 나열된 클래스들도 등록되지 않는다.


## AutoConfiguration의 동작 순서

Spring Boot가 시작되면:

```
1. @SpringBootApplication 스캔
   └─ 서비스 내부의 @Component, @Configuration 등록

2. AutoConfiguration 로딩
   └─ META-INF/spring/...AutoConfiguration.imports 파일 읽기
   └─ CoreAutoConfiguration 발견

3. 조건 평가
   └─ @ConditionalOnWebApplication(SERVLET) → Servlet 환경? → true/false
   └─ true → CoreAutoConfiguration 활성화
   └─ false → 건너뜀

4. @Import 처리
   └─ GlobalExceptionHandler → 빈 등록
   └─ CoreWebMvcConfig → 빈 등록 → addArgumentResolvers() 호출
```

서비스 개발자가 해야 하는 건: **core 의존성 추가**. 끝.

```xml
<dependency>
    <groupId>kr.co.baklibra26.pinguinz</groupId>
    <artifactId>pinguinz-core</artifactId>
    <version>${project.version}</version>
</dependency>
```


## 새 공통 기능을 추가할 때

예를 들어, 모든 서비스에 공통 로깅 인터셉터를 추가하고 싶다면:

1. core 모듈에 `RequestLoggingInterceptor` 작성
2. `CoreWebMvcConfig`에 인터셉터 등록 추가
3. 끝. 모든 Servlet 서비스에 자동 적용

```java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RequestLoggingInterceptor());
    }
}
```

개별 서비스를 건드리지 않는다.


## 정리

| 구성 요소 | 역할 |
|----------|------|
| `@AutoConfiguration` | 자동 설정 후보 선언 (Spring Boot 3) |
| `@ConditionalOnWebApplication(SERVLET)` | Reactive 서비스 충돌 방지 |
| `@Import` | GlobalExceptionHandler + CoreWebMvcConfig 명시적 등록 |
| `AutoConfiguration.imports` 파일 | Spring Boot에 AutoConfiguration 클래스 위치 알림 |
| `<optional>true</optional>` | 의존성 전이 차단 → 모듈 간 결합도 최소화 |

면접에서 "AutoConfiguration이 뭔가요?"라는 질문에 "의존성 추가하면 자동으로 설정되는 거요"라고 하면 50점이다. **imports 파일로 후보를 등록하고, `@Conditional` 계열로 활성화 조건을 제어하고, `@Import`로 빈을 명시적으로 가져온다는 것까지 설명**하면, Spring Boot의 핵심 메커니즘을 이해하고 있다는 걸 보여줄 수 있다. 특히 MSA 환경에서 **Servlet과 Reactive 서비스가 공존할 때 `@ConditionalOnWebApplication`이 왜 필요한지**를 실제 경험으로 설명할 수 있다는 건 큰 차별점이다.
