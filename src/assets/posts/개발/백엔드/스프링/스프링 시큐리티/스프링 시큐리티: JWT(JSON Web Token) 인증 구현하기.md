---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-05T20:09:52.000Z
last_modified_date: 2026-03-05T22:09:52.000Z
---


> 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다.


## 시나리오 설정

이 글에서 다루는 예제는 대략 이런 환경을 기준으로 합니다.

- 프론트엔드: React, Vue 로 만든 SPA
- 백엔드: 스프링 부트 + 스프링 시큐리티 기반 API 서버
- 도메인: SPA 는 https://app.example.com, API 서버는 https://api.example.com
- 통신·인증: JSON 기반 REST API, Authorization: Bearer <액세스 토큰> 헤더 사용

이때 실제로 오가는 HTTP 요청은 아래와 같이 가정합니다.

| 구분           | 메서드 | 엔드포인트      | 요청 바디 예시                                            | 응답 바디 예시                                      |
| -------------- | ------ | --------------- | --------------------------------------------------------- | -------------------------------------------------- |
| 로그인         | POST   | /api/auth/login | { "email": "user@example.com", "password": "pass" }       | { "accessToken": "JWT...", "expiresIn": 3600 }     |
| 현재 사용자 조회 | GET    | /api/users/me   | (바디 없음, Authorization 헤더에 토큰)                    | { "id": 1, "email": "user@example.com", "name": "사용자" } |


## 유저 도메인 설계

### 기본 필드 

###  유저 상태 (활성/비활성, 탈퇴, 잠금 여부 등)

### 권한/역할 구조 (ROLE_USER, ROLE_ADMIN 등)

### UserDetails 구현

## 스프링 시큐리티 기본 설정
### CORS 설정 (SPA 오리진 허용, 메서드·헤더 설정)
### CSRF 전략 (SPA+JWT 환경에서 왜 disable 하는지, 예외 케이스)
### 세션 정책 (STATELESS 사용하는 이유)


## JWT 구성
###  토큰에 무엇을 담을지(클레임 설계: sub, roles, 만료 시간 등)
## JWT Provider/Util 설계
### 토큰 생성
### 토큰 검증 및 파싱
### 만료 시간 설정

## 인증 로직 추가

### AuthenticationProvider 구성
### UserDetailsService
### PasswordEncoder
### 로그인 API (인증 성공 → JWT 발급 응답)


### 요청 검증: JWT 인증 필터
### OncePerRequestFilter 기반 JWT 필터 구현
### Authorization 헤더에서 토큰 꺼내기, 검증, SecurityContext에 저장
### SecurityFilterChain에 필터 등록 위치