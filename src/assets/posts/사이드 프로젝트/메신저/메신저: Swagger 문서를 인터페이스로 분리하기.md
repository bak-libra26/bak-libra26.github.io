---
summary: 컨트롤러에 Swagger 어노테이션이 비즈니스 로직보다 많아지는 문제를 해결하기 위해, Swagger 전용 인터페이스를 분리하는 패턴을 적용한 과정을 정리했습니다.
tags: Spring Boot, Swagger, SpringDoc
references:
created_date: 2026-03-11T00:00:00.000Z
last_modified_date: 2026-03-11T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 Swagger 문서화 코드를 컨트롤러에서 분리하면서 고민했던 내용을 정리한 글입니다.


## 문제: Swagger 어노테이션이 코드 가독성을 해친다

`@Operation`, `@ApiResponses`, `@ExampleObject` 등의 Swagger 어노테이션을 컨트롤러에 직접 작성하면, API가 3개만 되어도 어노테이션이 비즈니스 로직을 압도한다. 코드를 읽을 때 실제 로직보다 문서화 코드가 먼저 눈에 들어오게 된다.


## 대안 비교

### 1. 별도 인터페이스로 분리

Swagger 어노테이션만 담은 인터페이스를 만들고, 컨트롤러가 이를 구현하는 패턴이다. 커뮤니티에서 가장 많이 사용되는 방식이다.

### 2. YAML/JSON 설정 파일

어노테이션 대신 `openapi.yaml`을 직접 작성하는 방식이다. 코드에서 문서가 완전히 분리되지만, 코드와 문서가 싱크가 안 맞을 위험이 있어 소규모 팀에서는 관리 비용이 늘어난다.

### 3. 컨트롤러에 직접 작성

API가 적고 팀이 작으면 가장 빠르지만, example까지 넣으면 금방 비대해진다.


## 결정: 인터페이스 분리 패턴

### 패키지 위치

`web/api/` 패키지를 선택했다. `swagger`라는 이름도 고려했지만, Spring 커뮤니티에서 `api`라는 이름이 "외부에 노출되는 HTTP 인터페이스 계약"이라는 의미로 주류다. `swagger`는 구현 기술에 종속된 이름이라 나중에 문서화 도구가 바뀌면 어색해질 수 있다.

```
auth/
└── web/
    ├── api/
    │   └── AuthApi.java        ← Swagger 어노테이션 집중
    ├── controller/
    │   └── AuthController.java ← 비즈니스 로직만
    └── resolver/
        └── CurrentAccountArgumentResolver.java
```

### 적용 구조

```java
// Swagger 문서 전담
@Tag(name = "Account API", description = "사용자 로그인 및 회원가입 관련 API")
public interface AuthApi {

    @Operation(summary = "로그인", ...)
    @ApiResponses({ ... })
    ResponseEntity<ApiResponse<Token>> login(@RequestBody LoginRequest request);

    @Operation(summary = "회원가입", ...)
    @ApiResponses({ ... })
    ResponseEntity<ApiResponse<Void>> signUp(@RequestBody SignUpRequest request);
}

// 컨트롤러는 로직에 집중
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController implements AuthApi {

    @Override
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<Token>> login(@RequestBody LoginRequest request) {
        // 비즈니스 로직만
    }
}
```

### 장점

- 컨트롤러가 깔끔하게 유지된다
- Swagger 문서 수정이 비즈니스 로직 변경과 분리된다
- 다른 모듈(social, chat)에서도 동일한 패턴으로 확장 가능하다
