---
summary: 스프링 시큐리티에서 CORS를 처리하는 세 가지 레이어(Servlet-level, Security-level, MVC-level)의 아키텍처를 완벽히 이해하고, 각 방식의 차이와 올바른 선택 기준을 배우는 실무 가이드.
tags: 
references:
  - https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html
  - https://docs.spring.io/spring-security/reference/servlet/integrations/cors.html
created_date: 2026-03-04T20:09:52.000Z
last_modified_date: 2026-03-04T22:09:52.000Z
---

> 이 글에서는 프리플라이트 요청이 왜 필요한지, Servlet-level·Security-level·MVC-level 세 가지 방식에서 CORS를 처리하는 방법, 그리고 실제 CORS 에러가 났을 때 어디를 확인해야 하는지 정리합니다.


## CORS(Cross-Origin Resource Sharing)란 무엇인가

CORS(Cross-Origin Resource Sharing)는 브라우저의 동일 출처 정책 때문에 기본적으로 차단되는, 다른 출처(도메인·포트·프로토콜)에서 오는 HTTP 요청 전반에 대해 서버가 특정 조건에 한해 접근을 허용할 수 있게 해주는 HTTP 헤더 기반 메커니즘입니다.

브라우저는 이 규약을 바탕으로, 서버가 응답에 어떤 CORS 관련 헤더(예: Access-Control-Allow-Origin, Access-Control-Allow-Methods 등)를 붙였는지를 보고 cross-origin 응답을 자바스크립트에서 읽을 수 있도록 허용할지 결정합니다.

> **(참고) 출처(Origin)는 프로토콜 + 도메인 + 포트 조합을 의미한다.**
> 
> - http://localhost:3000, http://localhost:8080 : 포트가 다르기 때문에 서로 다른 출처이다.
> - http://example.com, https://example.com :  프로토콜이 다르기 때문에 다른 출처로 취급된다.




---

### 브라우저는 CORS 요청을 어떻게 보내는가

- **브라우저의 CORS 요청 흐름**
    ![cors-options-request-diagram](cors-options-request-diagram.png)

    위 이미지는 브라우저가 프리플라이트 요청과 실제 요청을 어떤 순서로 보내고, 서버의 CORS 응답 헤더를 어떻게 사용하는지를 정리한 다이어그램입니다.


---

#### 다른 출처로 HTTP 요청하기 

```javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify({ name: 'Alice' }),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));
```

위의 코드처럼 브라우저에서 자바스크립트로 다른 출처로 HTTP 요청을 보낼 때, 이 요청이 CORS 스펙에서 말하는 **단순 요청(simple request)** 조건을 만족하는지에 따라 동작이 달라집니다.

---

#### CORS의 단순 요청(simple request)


> (참고) 단순 요청의 정확한 조건(허용되는 메서드, 헤더, Content-Type 등)은 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#simple_requests)에서 확인 가능합니다.

간단하게 말하자면 단순 요청이란 아래 조건을 모두 만족하는 교차 출처 HTTP 요청을 의미합니다.

| 구분      | 단순 요청 조건                                        |
|---------|--------------------------------------------------------|
| **메서드**   | GET, HEAD, POST 중 하나인 경우                         |
| **요청 헤더** | 브라우저가 기본으로 붙이는 단순 헤더만 포함, 커스텀 헤더 없음 (예: Accept, Accept-Language 등) |
| **본문 타입** | POST인 경우 Content-Type이 application/x-www-form-urlencoded, multipart/form-data, text/plain 중 하나인 경우 |

이 조건을 만족하는 단순 요청의 경우에 브라우저는 프리플라이트(OPTIONS) 없이 바로 요청을 보내고, 조건을 만족하지 않으면 프리플라이트(OPTIONS) 요청을 보낸 후, 실제 요청을 전송합니다.

---

#### 프리플라이트(OPTIONS)란?

단순 요청 조건을 만족하지 않는 교차 출처 요청에 대해, 브라우저가 **실제 요청을 보내기 전에 서버에 "이 요청을 보내도 되는지" 미리 묻기 위해 보내는 OPTIONS 요청**입니다.
OPTIONS 요청과 응답 시 주고받는 대표적인 헤더들은 다음과 같습니다.

- **프리플라이트(OPTIONS) 요청/응답에서 주로 사용하는 헤더** 
    <table>
      <thead>
        <tr>
          <th>종류</th>
          <th>헤더 이름</th>
          <th>의미</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3"><strong>OPTIONS 요청</strong></td>
          <td><strong>Origin</strong></td>
          <td>요청을 보내려는 페이지의 출처</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Request-Method</strong></td>
          <td>실제로 사용할 HTTP 메서드 (예: POST, PUT, DELETE)</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Request-Headers</strong></td>
          <td>실제 요청에서 포함할 커스텀 헤더 목록</td>
        </tr>
        <tr>
          <td rowspan="3"><strong>OPTIONS  응답</strong></td>
          <td><strong>Access-Control-Allow-Origin</strong></td>
          <td>어떤 Origin을 허용할지</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Allow-Methods</strong></td>
          <td>어떤 메서드를 허용할지</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Allow-Headers</strong></td>
          <td>어떤 요청 헤더를 허용할지</td>
        </tr>
      </tbody>
    </table>

    브라우저는 이 OPTIONS 응답을 보고 실제 요청을 전송할지, 그리고 이후 응답을 자바스크립트에서 **읽을 수 있도록 허용할지** 최종적으로 결정합니다.


---


## CORS는 결국 어떻게 해결하나

브라우저에서 자바스크립트로 다른 출처의 서버에 HTTP 요청을 보내는 경우, 
서버가 응답에 `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` 같은 CORS 헤더를 어떻게 설정했는지에 따라 브라우저가 **이 응답을 자바스크립트에서 읽을 수 있는지가** 결정됩니다.

이를 위해 서버는 브라우저가 보낸 프리플라이트(OPTIONS) 요청에 대해 적절한 CORS 응답 헤더를 포함해 응답을 내려줘야 합니다.
그렇다면 스프링으로 만든 서버에서는 프리플라이트(OPTIONS) 요청과 실제 요청을 처리할 때 CORS를 어떻게 설정해야 할까요?

---

### 스프링 MVC의 CORS 처리


Spring MVC에서는 아래 3가지 방식으로 CORS를 허용할 수 있지만,
실무에서는 보통 `WebMvcConfigurer` 또는 `CorsFilter` 중 **하나를 전역 설정의 기준**으로 삼고,
`@CrossOrigin`은 예외적인 엔드포인트에만 제한적으로 사용하는 편입니다.



1. **`@CrossOrigin`**: 

    특정 컨트롤러/핸들러에만 예외적으로 CORS를 열어야 할 때.

2. **`WebMvcConfigurer#addCorsMappings`**: 

    MVC 전역에 공통 정책을 적용할 때 사용하는 기본 방법.

3. **`CorsFilter`**: 

    서블릿 필터 체인에서 CORS를 제어해야 하거나, 보다 세밀한 필터 기반 구성이 필요할 때 선택할 수 있는 대안.




---

#### 컨트롤러/메서드 단위로 적용하기

Spring MVC에서 특정 컨트롤러나 핸들러 메서드에만 CORS를 허용하고 싶을 때는 `@CrossOrigin` 애노테이션을 사용합니다. 
이는 일부 엔드포인트만 예외적으로 열 때 유용하나 설정이 컨트롤러 곳곳에 흩어져 관리가 어려워질 수 있습니다.

- **컨트롤러 클래스에 @CrossOrigin 붙이는 예시**
  
  ```java
  // 컨트롤러 전체에 대해 특정 Origin 허용
  @CrossOrigin(origins = "http://localhost:3000")
  @RestController
  @RequestMapping("/api/users")
  public class UserController {
  
      @PostMapping
      public User createUser(@RequestBody CreateUserRequest request) {
          // ...
      }
  
      @GetMapping("/{id}")
      public User getUser(@PathVariable Long id) {
          // ...
      }
  }
  ```

  ---

- **`@CrossOrigin` 어노테이션을 사용한 CORS 허용 예시**

  ```java
  @RestController
  @RequestMapping("/api/users")
  public class UserController {
  
      @CrossOrigin(origins = "http://localhost:3000")
      @PostMapping
      public User createUser(@RequestBody CreateUserRequest request) {
          // ...
      }
  }
  ```

---


#### CorsFilter 로 전역 설정하기

`CorsFilter`는 스프링이 제공하는 서블릿 필터로, 브라우저가 보내는 프리플라이트(OPTIONS) 요청과 실제 요청을 가로채서 필요한 CORS 헤더를 대신 붙여주는 역할을 합니다.

```java
@Configuration
public class CorsFilterConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);

        return new CorsFilter(source);
    }
}
```

---


#### WebMvcConfigurer 로 전역 설정하기

CORS 정책을 여러 컨트롤러에 공통으로 적용하고 싶다면 `WebMvcConfigurer`의 `addCorsMappings`로 전역 설정을 두는 것이 가장 관리하기 쉽습니다. 
아래와 같이 설정해 `/api/**`에 매핑된 모든 핸들러에 같은 CORS 정책이 적용할 수 있습니다.

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // CORS를 허용할 경로 지정
                .allowedOrigins("http://localhost:3000") // 허용할 Origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

---

### 스프링 시큐리티의 CORS 처리

스프링 시큐리티에서는 `http.cors()` 설정을 통해 CORS 처리를 활성화합니다.
이 설정을 켜면 시큐리티는 내부적으로 CORS 전용 필터(`CorsFilter`)를 `SecurityFilterChain`에 등록하고,  
**시큐리티 필터 체인 단계에서** 브라우저가 보내는 프리플라이트(OPTIONS)와 실제 요청에 CORS 응답 헤더를 추가합니다.


```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        // ... 기타 보안 설정
        .build();
}
```

---

#### CorsFilter는 요청을 어떻게 분류할까?


- **CorsFilter 내부 코드**

  ```java
  public class CorsFilter extends GenericFilter {
  
      @Override
      public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse,
                           final FilterChain filterChain) throws IOException, ServletException {
  
          HttpServletRequest request = (HttpServletRequest) servletRequest;
          HttpServletResponse response = (HttpServletResponse) servletResponse;
  
          // 이 요청이 어떤 타입의 CORS 요청인지 판별
          CorsFilter.CORSRequestType requestType = checkRequestType(request);
      }
  }
  ```

- **CorsFilter 의 단순 요청 판단 메서드**
  
  ```java
  protected CORSRequestType checkRequestType(final HttpServletRequest request) {
    ...
    switch (method) {
      case Method.OPTIONS:
        ...
        return CORSRequestType.ACTUAL;
        
      case Method.GET:
      case Method.HEAD:
        return CORSRequestType.SIMPLE;
        
      case Method.POST:
        String mediaType = MediaType.parseMediaTypeOnly(request.getContentType());
        if (mediaType == null || SIMPLE_HTTP_REQUEST_CONTENT_TYPE_VALUES.contains(mediaType)) {
          return CORSRequestType.SIMPLE;
        }
        break;
    }
    return CORSRequestType.ACTUAL;
  }
  ```

  `checkRequestType`는 요청의 메서드, 헤더, Content-Type 등을 기준으로 이 요청이 단순 요청(SIMPLE)인지, 실제 CORS 요청(ACTUAL)인지, 프리플라이트인지 등을 판별하는 역할만 담당합니다.


---

#### CorsFilter가 요청 타입별로 처리하는 방식

`CorsFilter`는 결과적으로 `checkRequestType`에서 판별한 결과에 따라  
단순/실제 CORS 요청은 `handleSimpleCORS`, 프리플라이트 요청은 `handlePreflightCORS`,  
CORS가 아닌 요청은 `handleNonCORS`, 스펙을 위반한 요청은 `handleInvalidCORS`로 보내는 분기 역할을 수행합니다.

```java
public class CorsFilter extends GenericFilter {

    @Override
    public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse,
                         final FilterChain filterChain) throws IOException, ServletException {
  
      ...

        switch (requestType) {
            case SIMPLE:
                // Handles a Simple CORS request.
            case ACTUAL:
                // Handles an Actual CORS request.
                this.handleSimpleCORS(request, response, filterChain);
                break;
            case PRE_FLIGHT:
                // Handles a Pre-flight CORS request.
                this.handlePreflightCORS(request, response, filterChain);
                break;
            case NOT_CORS:
                // Handles a Normal request that is not a cross-origin request.
                this.handleNonCORS(request, response, filterChain);
                break;
            default:
                // Handles a CORS request that violates specification.
                this.handleInvalidCORS(request, response, filterChain);
                break;
        }
    }
}
```


---

### CORS 설정시 주의하자

![spring-cors-layers-architecture](spring-cors-layers-architecture.png)

---

위 다이어그램에서 보듯이, CORS 설정은 **적용되는 레이어가 서로 다릅니다.**
같은 "CORS"라는 단어지만, 어디에 설정하느냐에 따라 동작 지점과 우선순위가 달라지기 때문에,
CORS 에러가 발생했을 때는 **어느 레이어부터 확인해야 하는지** 알아야 합니다.

---

#### Servlet-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | Servlet Filter Chain (DispatcherServlet 이전) |
| **범위** | 모든 요청에 적용 (모든 URL) |
| **언제 쓸까** | Spring MVC 외 다른 서블릿 엔드포인트까지 CORS 적용하고 싶을 때 |
| **설정 방식** | `@Bean CorsFilter` 또는 `FilterRegistrationBean` |



---

#### Security-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | SecurityFilterChain (Servlet Filter Chain 내부) |
| **범위** | 모든 요청에 적용 (Security 관리 하) |
| **구조 차이** | Servlet-level `CorsFilter`는 서블릿 필터 체인에 직접 배치 / Security CORS는 `DelegatingFilterProxy` 내부의 `SecurityFilterChain`에 격리 |
| **언제 쓸까** | Spring Security를 쓰고 있으면 거의 필수 |
| **설정 방식** | `http.cors().configurationSource(...)` |



---

#### MVC-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | HandlerMapping / HandlerExecutionChain (DispatcherServlet 이후) |
| **범위** | Spring MVC 핸들러만 (컨트롤러 메서드 단위) |
| **언제 쓸까** | 특정 핸들러/경로만 다른 CORS 정책을 원할 때 |
| **설정 방식** | `WebMvcConfigurer.addCorsMappings()` 또는 `@CrossOrigin` |



---

### CORS 에러 디버깅: 어디를 봐야 할까?

#### 프리플라이트(OPTIONS)가 아예 컨트롤러까지 안 온다면 ?

1. Servlet / Security 필터 체인에서 CORS가 막혔을 가능성  
2. `CorsFilter` / `http.cors()` 설정을 먼저 확인

---

#### 프리플라이트는 통과하는데 실제 요청에서만 터진다면 ?
   
1. DispatcherServlet 이후, MVC 핸들러 매핑 단계에서 문제  
2. `WebMvcConfigurer.addCorsMappings` / `@CrossOrigin` 설정 확인

---

#### 컨트롤러에 `@CrossOrigin`을 여러 곳에 붙였는데 들쭉날쭉하다면 ?

1. 로컬 설정과 전역 설정이 충돌하거나, 우선순위 규칙을 모를 가능성  
2. 전역 설정 하나로 통일하고, 정말 필요한 핸들러만 `@CrossOrigin`으로 예외 처리



---