---
summary: 스프링 시큐리티에서 CSRF 보호가 왜 필요한지, 세션·쿠키를 전제로 토큰이 언제 생성되고 어떻게 검증되는지, 그리고 REST API·SPA 환경에서 csrf().disable()과 CookieCsrfTokenRepository를 언제 어떻게 써야 하는지를 정리한 글입니다.
tags: 
references: 
created_date: 2026-03-03T20:09:52.000Z
last_modified_date: 2026-03-03T22:09:52.000Z
---

> 이 글에서는 세션·쿠키가 어떻게 동작하는지부터, CSRF가 왜 발생하는지, 그리고 스프링 시큐리티가 CSRF 토큰을 이용해 이를 어떻게 막는지 정리합니다.


## CSRF(Cross-Site Request Forgery)란 무엇인가

CSRF(Cross-Site Request Forgery)는 로그인 후 만들어진 세션과 쿠키를 악용해서 사용자가 의도하지 않은 요청을 대신 보내게 만드는 공격으로, 
웹 애플리케이션이 세션 방식을 사용할 때 브라우저가 해당 도메인의 쿠키를 요청마다 자동으로 전송하는 특성을 악용한 "요청 위조 공격"입니다.

---

### 세션·쿠키는 어떻게 만들어지는가

- **HttpSession 직접 사용**

    ```java
    @PostMapping
    public ResponseEntity<String> handleLoginRequest(
        HttpServletRequest request
    ) {
        HttpSession session = request.getSession();
        session.setAttribute("username", "SIM JUNGHUN");
    
        return ResponseEntity.ok("ok");
    }
    ```

    스프링과 같은 서블릿 기반 웹 애플리케이션에서는 HttpServletRequest.getSession()이 호출되는 시점에 서블릿 컨테이너(톰캣)가 세션을 생성하고, 세션 ID(JSESSIONID)를 만들며 이를 Set-Cookie 헤더로 브라우저에 내려보냅니다.

---

- **Spring Security 를 통한 HttpSession 사용** 

    ```java
    class SecurityContextPersistenceFilter extends GenericFilterBean {
        
        private void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
            ...
            
            HttpSession session = request.getSession();
            
        }
        
    }
    ```

    스프링 시큐리티는 이런 작업을 SecurityContextPersistenceFilter.doFilter() 안에서 수행하며, 여기서 request.getSession()으로 세션을 준비하고 그 안에 SPRING_SECURITY_CONTEXT 키로 SecurityContext를 보관합니다.

    톰캣과 같은 서블릿 컨테이너가 생성된 세션의 세션 ID(JSESSIONID)를 Set-Cookie 헤더에 담아 응답으로 내려보내면, 브라우저는 이 값을 해당 도메인의 쿠키로 저장하게 됩니다.


---

### 만들어진 쿠키는 어떻게 전송되는가 

브라우저는 

| 속성         | 전송 규칙 요약                                        |
|------------|-------------------------------------------------|
| **Domain**   | 요청 호스트가 Domain과 domain-match일 때 전송.             |
| **Path**     | 요청 경로가 Path로 시작(하위 경로 포함)할 때 전송.                |
| **Secure**   | HTTPS 같은 보안 채널에서만 전송.                           |
| **SameSite** | same-site / cross-site 여부에 따라 전송 제한, CSRF 완화용.  |

한 번 발급된 JSESSIONID 쿠키를 비롯한 여러 종류의 쿠키는 위 조건을 만족하는 경우에 브라우저가 이후 요청마다 함께 전송됩니다.




---

### 왜 CSRF 보호가 필요한가

CSRF 공격을 위해서 *공격자는 지금까지 본 세션·쿠키, 브라우저 특성을 그대로 활용* 합니다.


1. **사용자의 브라우저에는 이미 `bank.com` 의 세션 쿠키(JSESSIONID 등)가 있다.**
2. **브라우저는 `bank.com` 으로 향하는 요청에 이 세션 쿠키를 자동으로 붙여 보낸다.**
3. **악성 사이트(devil.com)는 HTML 폼, 이미지 태그, 스크립트(fetch 등)를 이용해 `https://bank.com/...`으로 향하는 요청을 만들 수 있다.**


만약 사용자가 bank.com에 로그인한 상태에서 다른 탭으로 devil.com(악성 사이트)에 접속했고
devil.com 페이지에서 아래처럼 `https://bank.com/transfer` 로 돈을 보내는 폼을 몰래 만들어 자동으로 전송하게 만든 경우.

```html
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="attacker-account" />
  <input type="hidden" name="amount" value="1000000" />
</form>
<script>
  document.forms
</script>
```

브라우저 입장에서 보면 “요청 주소가 bank.com이네?” 정도만 확인하고, 앞에서 본 규칙(Domain, Path, Secure, SameSite)에 맞는 bank.com의 쿠키들(JSESSIONID 포함)을 자동으로 Cookie 헤더에 붙여 보내게 됩니다.

서버는 이 요청을 공격자가 보냈는지, 실제 사용자가 보냈는지를 구분할 수 없어, 사용자가 의도하지도 않은 송금·비밀번호 변경·게시글 삭제 같은 민감한 작업도 그대로 처리해 버릴 수 있습니다. 

이 빈틈을 막기 위해, “이 요청이 정말 내가 렌더링한 화면에서 사용자가 직접 보낸 것인지”를 한 번 더 확인해 주는 신호, 즉 CSRF 토큰이 필요합니다.

---

## 스프링 시큐리티의 CSRF 기본 동작

> 이 글에서는 폼 기반 전통적인 MVC 웹 앱(Thymeleaf, JSP)**이고, http.csrf() 기본 설정을 쓰는 경우를 전제로 합니다.

스프링 시큐리티는 CSRF 공격을 막기 위해 서버에서 임의의 CSRF 토큰을 만들고, 렌더링 엔진(Thymeleaf, JSP 등)이 폼(\<form>)으로 요청을 보낼 때 이 토큰을 함께 보내도록 한 뒤, 서버에서 이 토큰을 검증하는 방식으로 문제를 해결합니다.

---

### CSRF 아키텍처 한눈에 보기

![spring-security-csrf-architecture](spring-security-csrf-architecture.png)

---

기본적으로 http.csrf()로 스프링 시큐리티의 CSRF 보호 기능을 활성화하면, 요청은 위 그림과 같은 흐름으로 처리되며, SecurityFilterChain에 등록된 CsrfFilter는 요청의 HTTP 메서드에 따라 다른 방식으로 동작합니다.


- **Safe/Unsafe 를 판단하는 CSRF RequetsMatcher 구현체**
  ```java
  private static final class DefaultRequiresCsrfMatcher implements RequestMatcher {
  
          private final HashSet<String> allowedMethods = new HashSet<>(Arrays.asList("GET", "HEAD", "TRACE", "OPTIONS"));
  
          @Override
          public boolean matches(HttpServletRequest request) {
              return !this.allowedMethods.contains(request.getMethod());
          }
  
          @Override
          public String toString() {
              return "CsrfNotRequired " + this.allowedMethods;
          }
  
      }
  }
  ```
  
---

- **Safe HTTP 메서드 (GET, HEAD, OPTIONS, TRACE, ...)**
    
  서버 상태를 바꾸지 않는다고 가정하고, CSRF 토큰 검사는 건너뜁니다.


- **Unsafe HTTP 메서드 (POST, PUT, PATCH, DELETE, ...)**
  
  서버 상태를 변경할 수 있기 때문에, 요청에 CSRF 토큰이 함께 왔는지, 그리고 그 값이 서버에 저장된 토큰과 일치하는지 확인한 뒤에만 처리를 계속합니다.


  
---

### 언제 CSRF 토큰이 만들어지는가

> Spring Security 5와 6에서 CSRF 토큰을 다루는 방식에 약간 차이가 있으나, 이 글에서는 Spring Security 6 기준으로 설명하며,
> 기본값인 HttpSessionCsrfTokenRepository를 사용해, 서버 세션에 CSRF 토큰을 저장하는 전통적인 MVC 웹 애플리케이션(Thymeleaf, JSP)을 전제로 합니다.

**Spring Security 6**에서는 필요할 때까지 **CSRF 토큰 생성을 미루는(deferred) 방식**을 사용합니다.
여기서 “필요할 때까지 미룬다”는 것은, 뷰 렌더링 과정에서 `_csrf` 속성에 실제로 접근하는 시점에 CsrfTokenRepository에서 토큰을 생성·조회한다는 뜻입니다.

사용자가 GET으로 페이지를 처음 요청하면, CsrfFilter는 내부에서 CsrfTokenRepository를 통해 이 세션에서 사용할 CSRF 토큰을 준비하고, 
이를 HttpServletRequest의 `_csrf` 속성에 넣어 Thymeleaf 같은 렌더링 엔진이 토큰 값을 꺼내 hidden 필드로 렌더링할 수 있도록 제공합니다.
 

- **`_csrf` 사용 예시 (Thymeleaf 기반 송금 폼)**

    ```html
    <form action="https://bank.com/transfer" method="post">
        <label>
            받는 사람 계좌:
            <input type="text" name="to"/>
        </label>
        <label>
            금액:
            <input type="number" name="amount"/>
        </label>
    
        <input type="hidden"
               name="${_csrf.parameterName}"
               value="${_csrf.token}"/>
    
        <input type="submit" value="송금하기"/>
    </form>
    ```  

    예를 들어, 사용자가 인터넷 뱅킹 화면에서 송금 폼을 제출할 때는 위와 같이 CSRF 토큰이 hidden 필드로 함께 전송됩니다
    
    이 hidden 필드는 사용자가 실제로 bank.com에서 연 화면에서만 올바른 값으로 채워질 수 있기 때문에, 서버는 토큰의 존재 여부와 값 일치를 검사해서 악성 사이트(devil.com)에서 위조한 요청을 쉽게 걸러낼 수 있습니다.

    


---


### 어떻게 CSRF 토큰을 검증하는가

CSRF 토큰 검증은 SecurityFilterChain 안의 `CsrfFilter`에서 이루어지며, 기본적으로 아래와 같이 동작합니다. 

1. **CSRF 검사가 필요한 요청인지 확인한다.**
    
    - `CsrfFilter`는 먼저 HTTP 메서드를 보고 이 요청이 CSRF 보호 대상인지 확인합니다. 
    - 기본 설정에서는 POST, PUT, PATCH, DELETE 같은 **Unsafe 메서드**만 CSRF 검사를 수행합니다. 

2. **서버에 저장된 CSRF 토큰 로드**

    - 보호 대상 요청이면, `CsrfFilter`는 `CsrfTokenRepository`에서 이 세션에 저장된 CSRF 토큰을 조회합니다. 
    - 이 글에서는 기본값인 `HttpSessionCsrfTokenRepository`를 사용하므로, 서버 세션(HttpSession)에 저장된 토큰 값을 꺼내 온다고 이해하면 됩니다. 
    
    ```java
    public final class CsrfFilter extends OncePerRequestFilter {
        ...
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            DeferredCsrfToken deferredCsrfToken = this.tokenRepository.loadDeferredToken(request, response);
            ...
            CsrfToken csrfToken = deferredCsrfToken.get(); // 서버에 저장된 토큰 로드     
        }
    }
    ```


3. **클라이언트가 보낸 CSRF 토큰 추출**

    - 이어서 `CsrfTokenRequestHandler`가 HTTP 요청에서 실제로 넘어온 토큰 값을 읽어옵니다. 
    - 이 값은 폼 필드(`_csrf` 파라미터)나 헤더(`X-CSRF-TOKEN` 등)에 들어 있으며, 앞에서 본 송금 폼의 hidden 필드에 있던 값이 바로 여기로 전달됩니다. 

    ```java
    public final class CsrfFilter extends OncePerRequestFilter {
        ...
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            ...
            String actualToken = this.requestHandler.resolveCsrfTokenValue(request, csrfToken); // 클라이언트가 전송한 CSRF 토큰 추출 
        }
    }
    ```

   4. **두 토큰을 비교해 일치 여부 검사**

       - 서버에 저장된 토큰 값과, 클라이언트가 보낸 토큰 값이 모두 존재하고 서로 일치하면 CSRF 검증을 통과하고, 필터 체인이 계속 진행됩니다. 
       - 토큰이 없거나 값이 다르면 `AccessDeniedException`이 발생하고, 기본 설정에서는 403 Forbidden 응답을 반환하여 해당 요청을 차단합니다. 

       ```java
       public final class CsrfFilter extends OncePerRequestFilter {
           ...
           @Override
           protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                   throws ServletException, IOException {
               ...
               if (!equalsConstantTime(csrfToken.getToken(), actualToken)) {
                
                   // 일치하지 않는 경우, accessDeniedHandler 를 호출해 차단한다.
                   this.accessDeniedHandler.handle(request, response, exception);
                   return;
               }
      
               // 일치하는 경우, 요청을 이후 필터로 넘긴다. 
               filterChain.doFilter(request, response);
           }
       }
       ```

       Spring Security는 두 토큰을 비교할 때 equalsConstantTime을 사용해, 문자열이 얼마나 일치하는지에 따라 비교 시간이 달라지는 것을 막음으로써 타이밍 공격으로 토큰 값을 유추하는 가능성을 줄입니다.

---

### "devil.com" 폼에서는 왜 이 토큰을 맞출 수 없는가

사용자가 bank.com에 접속해 송금 폼을 열면, 서버는 이 세션만을 위해 생성한 CSRF 토큰을 세션에 저장하고, 동시에 뷰 렌더링 시 `_csrf` 속성을 통해 hidden 필드에 심어 둡니다.
bank.com이 렌더링한 HTML 안에서만 이 값을 알 수 있어 자바스크립트로 쿠키에 직접 접근하지 않는 한, 외부 사이트에서는 이 값을 읽어올 수 없습니다.

반면, devil.com은 오직 "사용자가 이미 가진 bank.com 세션 쿠키"에만 의존해서 https://bank.com/transfer로 POST 요청을 보낼 수 있을 뿐, 현재 세션의 CSRF 토큰 값을 알 수 없습니다.
결국 devil.com에서 보낸 위조 요청은 세션 쿠키(JSESSIONID)는 유효하더라도, CSRF 토큰 값이 없거나 틀렸기 때문에 CsrfFilter에서 `403 Forbidden`으로 차단됩니다.

> (참고) 최근 브라우저들은 기본 SameSite=Lax 정책으로, 단순 폼 제출과 같은 일부 cross-site 요청에 쿠키 전송 자체를 제한해 CSRF 위험을 어느 정도 줄여 줍니다.
> 다만 SameSite 설정만으로는 모든 케이스에 대해 안전하다고 할 수 없으며, 레거시 브라우저도 고려해야 하기에 Spring Security의 CSRF 토큰 검증은 여전히 중요하게 사용됩니다.

---

## REST API·SPA에서의 CSRF 처리 방법

지금까지 살펴본 동작은 **기본값인 HttpSessionCsrfTokenRepository를 사용하는, 서버 세션 기반(MVC + 폼) CSRF 처리 방식**입니다.

SPA(React, Vue 등)에서는 대부분 JWT 같은 토큰 기반 인증을 사용합니다.
이때 토큰을 Authorization: Bearer ... 헤더처럼 클라이언트 코드가 직접 붙여 보내는 구조라면, 브라우저가 자동으로 자격 증명을 전송하지 않기 때문에 전통적인 CSRF 공격을 상대적으로 덜 의식해도 됩니다.

> Spring Security 공식 문서에서는 완전한 토큰 기반 REST API 의 경우, `http.csrf().disable()`을 선택지로 고려할 수 있다고 안내합니다.

하지만 SPA에서 세션 쿠키나 HttpOnly 액세스 토큰 쿠키처럼 브라우저가 자동으로 전송하는 쿠키 기반 인증을 사용하는 경우, 
여전히 CSRF 공격에 노출될 수 있으므로 CookieCsrfTokenRepository를 사용하도록 설정하여 CSRF 토큰을 쿠키(XSRF-TOKEN)로 내려보내고, 
프론트엔드에서 이 값을 읽어 X-XSRF-TOKEN 같은 헤더로 다시 보내도록 구성하는 방식이 많이 사용됩니다.

---

### 쿠키 기반 인증 방식 사용하기

```java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        );
    return http.build();
}
```

CookieCsrfTokenRepository.withHttpOnlyFalse()로 바꾸면, 같은 CsrfFilter 코드 안에서 tokenRepository 구현체만 CookieCsrfTokenRepository로 교체되어, 세션 대신 쿠키(XSRF-TOKEN)에 저장된 토큰 값과 헤더(X-XSRF-TOKEN)로 넘어온 값을 비교하는 쿠키 기반 방식으로 동작하게 됩니다.

결국 **“서버가 기억하고 있는 토큰 값과, 클라이언트가 보낸 토큰 값을 비교해서 일치하면 통과시키고, 다르면 403으로 막는다”** 는 큰 구조 자체는 그대로 유지됩니다.




