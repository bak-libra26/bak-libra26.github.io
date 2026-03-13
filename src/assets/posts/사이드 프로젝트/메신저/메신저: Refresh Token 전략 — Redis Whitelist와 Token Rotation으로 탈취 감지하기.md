---
summary: JWT Refresh Token을 안전하게 관리하기 위해 Redis Whitelist + Token Rotation + JTI 기반 탈취 감지를 설계하고 구현한 과정을 정리했습니다. 왜 Stateless RT가 위험한지, 블랙리스트 대신 화이트리스트를 선택한 이유, 그리고 탈취자가 다른 deviceId를 사용하는 경우까지 방어하는 로직을 다룹니다.
tags: JWT, Redis, Spring Boot, Security, Token Rotation
references:
  - https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 Refresh Token 전략을 설계하고 구현한 과정을 정리한 글입니다.


## Access Token만으로는 부족하다

JWT 기반 인증에서 Access Token(이하 AT)은 보통 15분~1시간으로 짧게 설정한다. 짧은 수명 덕분에 탈취되더라도 피해 시간이 제한되지만, 사용자가 15분마다 로그인해야 한다면 UX가 망가진다.

그래서 Refresh Token(이하 RT)이 필요하다. AT가 만료되면 RT로 새 AT를 발급받고, 사용자는 로그인 상태를 유지한다.

문제는 RT의 수명이 보통 7일~30일로 길다는 것이다. **RT가 탈취되면 그 기간 동안 공격자가 마음대로 새 AT를 발급받을 수 있다.**


## 세 가지 선택지

RT를 어떻게 관리할지 크게 세 가지 방식이 있다.

### 1. Stateless (서명만 검증)

```
클라이언트 → RT 전달 → 서버: JWT 서명 검증만 → 새 AT 발급
```

가장 단순하지만, 서버가 RT를 무효화할 방법이 없다. 탈취된 RT를 막으려면 JWT secret을 바꿔야 하는데, 그러면 모든 사용자의 토큰이 무효화된다.

### 2. 블랙리스트 (차단 목록)

```
로그아웃 시 → RT를 Redis 블랙리스트에 등록
refresh 시 → 블랙리스트에 있으면 거부
```

로그아웃은 처리할 수 있지만, **탈취 사실을 모르면 블랙리스트에 등록할 수가 없다.** 즉, 탈취 감지 능력이 없다.

### 3. 화이트리스트 (허용 목록) ← 선택

```
로그인 시 → RT의 식별자를 Redis에 저장
refresh 시 → Redis에 저장된 값과 일치하는지 검증
```

**Redis에 등록된 토큰만 유효하다.** 서버가 언제든 특정 사용자의 RT를 삭제해서 즉시 무효화할 수 있다.

### 왜 화이트리스트인가

| 기준 | Stateless | 블랙리스트 | 화이트리스트 |
|------|-----------|-----------|------------|
| 즉시 무효화 | X | O | O |
| 탈취 감지 | X | X | **O (Token Rotation)** |
| 저장 비용 | 없음 | 차단된 토큰만 | 활성 토큰만 |
| 자동 정리 | - | TTL 필요 | **TTL로 자동 만료** |

pinguinz는 이미 이메일 인증에 Redis를 사용하고 있어서 인프라 추가 비용이 없었고, TTL을 걸면 만료된 토큰이 자동으로 사라지니 배치 정리도 필요 없었다.


## Token Rotation: 탈취를 감지하는 방법

화이트리스트만으로는 "누군가 내 RT를 쓰고 있다"는 사실을 알 수 없다. 여기서 **Token Rotation**이 등장한다.

핵심 아이디어: **RT를 사용할 때마다 새 RT를 발급하고, 기존 RT는 즉시 무효화한다.**

이를 위해 JWT의 표준 클레임인 `jti` (JWT ID, [RFC 7519 §4.1.7](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7))를 사용한다. `jti`는 JWT의 고유 식별자로, 중복 사용을 방지하기 위한 클레임이다.

### 흐름

```
[로그인]
  서버: tokenId = UUID 생성
  서버: Redis에 저장 → rt:123:electron-desktop = "aaa"
  서버: RT 발급 (jti="aaa" 포함)

[refresh 요청]
  서버: RT에서 jti="aaa" 추출
  서버: Redis에서 rt:123:electron-desktop 조회 → "aaa"
  서버: 일치 → 새 tokenId="bbb" 생성
  서버: Redis 덮어쓰기 → rt:123:electron-desktop = "bbb"
  서버: 새 RT 발급 (jti="bbb")
  → 기존 RT(jti="aaa")는 이제 무효
```

### 탈취 감지 시나리오

```
[정상 사용자]
  RT(jti=aaa)로 사용 중

[탈취자]
  탈취한 RT(jti=aaa)로 /refresh 호출
  → 서버: jti 일치 → 새 jti=bbb 발급, Redis 덮어쓰기
  (탈취자가 새 AT/RT 획득)

[정상 사용자]
  기존 RT(jti=aaa)로 /refresh 호출
  → 서버: Redis의 값은 "bbb"인데 요청은 "aaa" → 불일치!
  → 탈취 의심 → revokeAll(userId) → 모든 세션 무효화
```

누가 먼저 refresh하든 **둘 중 하나가 실패**하고, 실패하는 순간 전체 세션이 무효화된다. 탈취자는 지속적으로 접근할 수 없다.


## 멀티 디바이스 세션 관리

메신저는 데스크탑과 모바일을 동시에 사용하는 게 일반적이다. 단일 세션이면 디바이스를 전환할 때마다 다른 기기가 로그아웃된다.

Redis 키에 `deviceId`를 포함해서 해결했다.

```
rt:{userId}:{deviceId} = tokenId

rt:123:electron-desktop = "aaa"
rt:123:mobile-ios       = "bbb"
```

키 구조만 달라지고 로직은 동일하다. 구현 복잡도 차이가 거의 없다.

```java
public final class RefreshTokenRedisKeys {

    private RefreshTokenRedisKeys() {}

    private static final String PREFIX = "rt";
    public static final String DEFAULT_DEVICE_ID = "default";

    public static String key(Long userId, String deviceId) {
        return String.join(":", PREFIX, userId.toString(), deviceId);
    }

    public static String pattern(Long userId) {
        return PREFIX + ":" + userId + ":*";
    }
}
```


## 구현 코드

### RefreshTokenService

```java
@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private final JwtUtil jwtUtil;
    private final StringRedisTemplate redisTemplate;

    public String issue(Long userId, String deviceId) {
        String tokenId = UUID.randomUUID().toString();
        String key = RefreshTokenRedisKeys.key(userId, deviceId);

        redisTemplate.opsForValue()
            .set(key, tokenId, jwtUtil.getRefreshTtl(), TimeUnit.MILLISECONDS);

        return tokenId;
    }

    public String getStoredTokenId(Long userId, String deviceId) {
        String key = RefreshTokenRedisKeys.key(userId, deviceId);
        return redisTemplate.opsForValue().get(key);
    }

    public void revoke(Long userId, String deviceId) {
        String key = RefreshTokenRedisKeys.key(userId, deviceId);
        redisTemplate.delete(key);
    }

    public void revokeAll(Long userId) {
        String pattern = RefreshTokenRedisKeys.pattern(userId);
        Set<String> keys = redisTemplate.keys(pattern);

        if (keys != null && !keys.isEmpty()) {
            redisTemplate.delete(keys);
        }
    }
}
```

`issue()`에서 TTL을 RT 만료 시간과 동일하게 설정한다. RT가 만료되면 Redis 키도 자동으로 사라진다.

### 컨트롤러 — refresh 엔드포인트

```java
@PostMapping("/api/v1/auth/refresh")
public ResponseEntity<ApiResponse<Token>> refresh(@Valid @RequestBody RefreshRequest request) {
    String deviceId = request.resolveDeviceId();

    // 1. JWT 서명 검증
    Jws<Claims> jws;
    try {
        jws = jwtUtil.validate(request.refreshToken());
    } catch (JwtException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    Claims payload = jws.getPayload();
    Long userId = Long.valueOf(payload.getSubject());
    String jti = payload.getId();

    // 2. Redis에서 저장된 tokenId 조회
    String storedTokenId = refreshTokenService.getStoredTokenId(userId, deviceId);

    if (storedTokenId == null) {
        // 해당 디바이스 세션 없음 → 단순 거부 (revokeAll 안 함)
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    if (!storedTokenId.equals(jti)) {
        // jti 불일치 → 탈취 의심 → 전체 세션 무효화
        refreshTokenService.revokeAll(userId);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_TOKEN_MISMATCH));
    }

    // 3. 계정 상태 확인 (ENABLED만 허용)
    Account account = accountService.findByIdAndEnabled(userId).orElse(null);
    if (account == null) {
        refreshTokenService.revoke(userId, deviceId);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    // 4. Token Rotation: 새 토큰 발급
    String newTokenId = refreshTokenService.issue(userId, deviceId);
    String accessToken = jwtUtil.createAccessToken(account);
    String refreshToken = jwtUtil.createRefreshToken(account, newTokenId);

    Token token = new Token("Bearer", accessToken, refreshToken, jwtUtil.getAccessTtl());
    return ResponseEntity.ok().body(ApiResponse.of(RefreshResult.SUCCESS, token));
}
```


## 여기서 놓치기 쉬운 두 가지

### 1. "세션 없음"과 "jti 불일치"를 구분해야 한다

처음에는 Redis 조회 + jti 비교를 한 번에 처리했다.

```java
// 초기 구현 (문제 있음)
if (!refreshTokenService.validate(userId, deviceId, jti)) {
    refreshTokenService.revokeAll(userId);  // 무조건 전체 무효화
    return FAILED_BY_TOKEN_MISMATCH;
}
```

이러면 **탈취자가 아예 다른 deviceId로 요청**했을 때도 revokeAll이 발동된다. 탈취자는 `attacker-device`라는 deviceId를 보냈을 뿐인데, 정상 사용자의 `electron-desktop` 세션까지 전부 날아간다.

구분이 필요하다:

| 상황 | Redis 상태 | 올바른 처리 |
|------|-----------|------------|
| 해당 디바이스 세션 없음 | 키 자체가 없음 (`null`) | 단순 거부, revokeAll **안 함** |
| 같은 디바이스에서 jti 불일치 | 키는 있지만 값이 다름 | 탈취 의심 → **revokeAll** |

그래서 `validate(boolean)` 대신 `getStoredTokenId(String)`을 반환하게 바꿨다.

```java
String storedTokenId = refreshTokenService.getStoredTokenId(userId, deviceId);

if (storedTokenId == null) {
    // 세션 없음 → 단순 거부
    return FAILED_BY_INVALID_TOKEN;
}

if (!storedTokenId.equals(jti)) {
    // jti 불일치 → 탈취 → 전체 무효화
    refreshTokenService.revokeAll(userId);
    return FAILED_BY_TOKEN_MISMATCH;
}
```

### 2. refresh 시 계정 상태를 확인해야 한다

관리자가 계정을 LOCKED/DISABLED로 변경해도, RT가 살아있으면 계속 새 AT를 발급받을 수 있다. 최악의 경우 7일(RT 수명) 동안 차단이 무력화된다.

```java
// findById → findByIdAndEnabled
Account account = accountService.findByIdAndEnabled(userId).orElse(null);
if (account == null) {
    refreshTokenService.revoke(userId, deviceId);
    return FAILED_BY_INVALID_TOKEN;
}
```

`findByIdAndEnabled`는 `WHERE id = ? AND status = 'ENABLED'`로 조회하므로, 잠긴 계정은 `null`이 반환되어 refresh가 거부된다. 이미 `findById`를 호출하고 있었으므로 추가 DB 쿼리 비용은 없다.


## revokeAll과 KEYS 명령어

`revokeAll()`은 `rt:123:*` 패턴으로 해당 사용자의 모든 키를 찾아서 삭제한다.

```java
Set<String> keys = redisTemplate.keys(pattern);
```

`KEYS` 명령은 O(N)으로 전체 키를 스캔하므로 프로덕션에서는 위험하다. Redis가 블로킹되면 다른 요청도 밀린다. 프로덕션에서는 `SCAN`으로 교체해야 한다.

```java
// 프로덕션 권장
ScanOptions options = ScanOptions.scanOptions().match(pattern).count(100).build();
try (Cursor<String> cursor = redisTemplate.scan(options)) {
    List<String> keys = new ArrayList<>();
    cursor.forEachRemaining(keys::add);
    if (!keys.isEmpty()) {
        redisTemplate.delete(keys);
    }
}
```

현재는 개발 단계라 `KEYS`를 사용하되, TODO 주석으로 명시해 두었다.


## 정리

| 결정 | 선택 | 이유 |
|------|------|------|
| RT 관리 방식 | Redis 화이트리스트 | 즉시 무효화 + TTL 자동 정리 + 기존 Redis 인프라 활용 |
| 탈취 방어 | Token Rotation (jti) | jti 불일치로 탈취 감지, 감지 시 전체 세션 무효화 |
| 멀티 디바이스 | `rt:{userId}:{deviceId}` | 키 구조만 변경, 로직 동일 |
| 세션 없음 vs jti 불일치 | 구분 처리 | 다른 deviceId 공격 시 정상 사용자 보호 |
| refresh 시 계정 상태 | ENABLED만 허용 | 계정 잠금이 즉시 효력 발휘 |

면접에서 "Refresh Token을 어떻게 관리하나요?"라는 질문이 나오면, 단순히 "Redis에 저장합니다"가 아니라 **왜 화이트리스트인지, Token Rotation이 무엇을 해결하는지, 탈취 감지의 구체적인 메커니즘**까지 설명할 수 있어야 한다. 이 프로젝트에서는 그 모든 과정을 직접 설계하고 구현해 봤다.
