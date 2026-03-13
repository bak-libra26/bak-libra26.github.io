---
summary: 이메일 인증 시스템에서 Redis SETEX와 INCR을 사용해 60초 쿨다운 + 일일 3회 제한의 이중 Rate Limiting을 구현한 과정을 정리했습니다. Redis 키 설계, 이메일 해싱, MailType enum을 통한 메타데이터 관리까지 다룹니다.
tags: Redis, Spring Boot, Rate Limiting, Security
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 이메일 인증 요청에 Rate Limiting을 적용한 과정을 정리한 글입니다.


## 왜 Rate Limiting이 필요한가

이메일 인증 API는 아무 인증 없이 호출할 수 있다. 로그인 전이니까 당연하다. 그런데 이걸 아무 제한 없이 열어두면 문제가 생긴다.

- **메일 폭탄**: 공격자가 특정 이메일 주소로 수천 건의 인증 메일을 발송
- **비용 문제**: 메일 발송은 외부 SMTP 서버를 사용하므로 건당 비용이 발생
- **이메일 열거 공격**: 존재하는 이메일인지 응답 차이로 추론 (이건 별도로 방어하지만, 속도를 늦추는 것만으로도 효과적)

필요한 건 두 가지다:

1. **쿨다운**: 같은 요청을 연속으로 보내지 못하게 (60초)
2. **일일 제한**: 하루에 보낼 수 있는 횟수를 제한 (3회)


## Redis 키 설계

먼저 키 구조를 정했다. 이메일 인증과 비밀번호 재설정이 같은 Rate Limiting 로직을 공유하지만, 키는 분리되어야 한다.

```java
public class VerificationRedisKeys {

    public static String cooldown(MailType type, String email) {
        return key(type, "cooldown", email);
    }

    public static String dailyCount(MailType type, String email) {
        return key(type, "count", email);
    }

    public static String token(MailType type, String email) {
        return key(type, "token", email);
    }

    private static String key(MailType type, String purpose, String email) {
        return String.join(":", type.prefix, purpose, hash(email));
    }

    private static String hash(String email) {
        return DigestUtils.md5DigestAsHex(email.getBytes(StandardCharsets.UTF_8));
    }
}
```

실제로 생성되는 키:

```
verify:cooldown:5d41402abc4b2a76b9719d911017c592   ← 이메일 인증 쿨다운
verify:count:5d41402abc4b2a76b9719d911017c592       ← 이메일 인증 일일 카운트
verify:token:5d41402abc4b2a76b9719d911017c592       ← 인증 토큰

reset:cooldown:5d41402abc4b2a76b9719d911017c592     ← 비밀번호 재설정 쿨다운
reset:count:5d41402abc4b2a76b9719d911017c592        ← 비밀번호 재설정 일일 카운트
reset:token:5d41402abc4b2a76b9719d911017c592        ← 재설정 토큰
```

### 이메일을 왜 해싱하는가

Redis 키에 이메일 원문을 넣으면 `KEYS` 명령이나 모니터링 도구에서 사용자의 이메일이 그대로 노출된다. MD5로 해싱하면 키만 봐서는 누구의 이메일인지 알 수 없다.

보안 해시(SHA-256 등)가 아니라 MD5를 쓴 이유는, 이건 식별용이지 보안용이 아니기 때문이다. 속도가 빠르고 충돌 확률이 극히 낮으면 충분하다.


## MailType enum: 메타데이터를 타입에 담기

이메일 인증과 비밀번호 재설정은 로직이 거의 같지만 세부사항이 다르다.

```java
public enum MailType {
    EMAIL_VERIFY("verify", AccountStatus.PENDING, 60L),    // 60분 토큰
    PASSWORD_RESET("reset", AccountStatus.ENABLED, 30L);   // 30분 토큰

    public final String prefix;        // Redis 키 접두사
    public final AccountStatus status; // 대상 계정 상태
    public final long ttl;             // 토큰 만료 시간 (분)
}
```

하나의 enum에 세 가지 메타데이터를 담았다:

- `prefix`: Redis 키 네임스페이스 분리
- `status`: 이메일 인증은 PENDING 계정만, 비밀번호 재설정은 ENABLED 계정만
- `ttl`: 인증 토큰의 유효 시간

이렇게 하면 서비스 코드에서 `if (type == EMAIL_VERIFY)` 같은 분기가 필요 없다. `type.status`로 바로 계정을 조회하고, `type.ttl`로 바로 TTL을 설정한다.

```java
// MailType에 따라 자동으로 올바른 계정 상태를 조회
Optional<Account> optional = accountRepository
    .findAccountByEmailAndStatus(email, type.status);

// MailType에 따라 자동으로 올바른 TTL 설정
redisTemplate.opsForValue()
    .set(VerificationRedisKeys.token(type, email), token, type.ttl, TimeUnit.MINUTES);
```


## Rate Limiting 구현

### 전체 코드

```java
private VerificationMailResult checkRateLimit(MailType type, String email) {
    // 1. 쿨다운 체크 (60초)
    Boolean ifAbsent = redisTemplate.opsForValue()
            .setIfAbsent(VerificationRedisKeys.cooldown(type, email), "1", 60, TimeUnit.SECONDS);

    if (Boolean.FALSE.equals(ifAbsent)) {
        return VerificationMailResult.FAILED_BY_COOLDOWN;
    }

    // 2. 일일 카운트 체크 (3회)
    String countKey = VerificationRedisKeys.dailyCount(type, email);
    Long count = redisTemplate.opsForValue().increment(countKey);

    if (count != null && count == 1) {
        redisTemplate.expire(countKey, 1, TimeUnit.DAYS);
    }

    if (count == null || count > DAILY_LIMIT) {
        return VerificationMailResult.FAILED_BY_EXCEED_DAY_LIMIT;
    }

    return VerificationMailResult.SUCCESS;
}
```

### 1단계: 쿨다운 — `SETEX` + `NX`

```java
Boolean ifAbsent = redisTemplate.opsForValue()
        .setIfAbsent(cooldownKey, "1", 60, TimeUnit.SECONDS);
```

Redis의 `SET key value EX 60 NX` 명령에 대응한다.

- `NX` (Not eXists): 키가 없을 때만 설정
- `EX 60`: 60초 후 자동 만료

동작:
- 키가 없음 → 설정 성공 → `true` 반환 → 요청 통과
- 키가 있음 → 설정 실패 → `false` 반환 → 쿨다운 중

**이 한 줄이 원자적(atomic)이다.** `GET` → 없으면 → `SET` 방식으로 하면 두 요청이 동시에 통과할 수 있지만, `SETNX`는 Redis가 단일 스레드로 처리하므로 동시성 문제가 없다.

### 2단계: 일일 카운트 — `INCR` + `EXPIRE`

```java
Long count = redisTemplate.opsForValue().increment(countKey);

if (count != null && count == 1) {
    redisTemplate.expire(countKey, 1, TimeUnit.DAYS);
}

if (count == null || count > DAILY_LIMIT) {
    return FAILED_BY_EXCEED_DAY_LIMIT;
}
```

Redis의 `INCR` 명령에 대응한다.

- `INCR`: 키가 없으면 0에서 시작해서 1로 증가. 있으면 기존 값에 +1.
- 카운트가 1일 때(첫 요청)만 `EXPIRE`로 TTL을 설정

동작:
- 첫 번째 요청: count=1 → TTL 1일 설정 → 통과
- 두 번째 요청: count=2 → 통과
- 세 번째 요청: count=3 → 통과
- 네 번째 요청: count=4 → `count > 3` → 제한 초과
- 다음 날: 키 자동 만료 → 카운트 리셋

### INCR과 EXPIRE의 원자성 문제

여기서 미묘한 문제가 있다. `INCR`과 `EXPIRE`는 별도의 명령이다. 만약 `INCR` 직후 서버가 죽으면 `EXPIRE`가 실행되지 않아서 카운트 키가 영원히 남는다.

실무에서 이걸 완벽히 해결하려면 Lua 스크립트를 쓴다:

```lua
local count = redis.call('INCR', KEYS[1])
if count == 1 then
    redis.call('EXPIRE', KEYS[1], ARGV[1])
end
return count
```

현재 프로젝트에서는 카운트가 무한히 남아도 "일일 제한 초과"로 처리될 뿐 보안 문제는 아니므로, 단순 구현으로 충분하다고 판단했다.


## 전체 흐름

```java
public VerificationMailResult requestMail(MailType type, String email) {
    // 1. 계정 존재 확인 (type.status에 맞는 계정만)
    Optional<Account> optional = accountRepository
        .findAccountByEmailAndStatus(email, type.status);
    if (optional.isEmpty()) {
        return FAILED_BY_INVALID_EMAIL;
    }

    // 2. Rate Limit 체크
    VerificationMailResult rateLimitResult = checkRateLimit(type, email);
    if (!rateLimitResult.equals(SUCCESS)) {
        return rateLimitResult;
    }

    // 3. 인증 토큰 생성 및 Redis 저장
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue()
        .set(VerificationRedisKeys.token(type, email), token, type.ttl, TimeUnit.MINUTES);

    // 4. 메일 발송
    emailService.sendMail(type, account, token);

    return SUCCESS;
}
```

순서가 중요하다:

1. **계정 확인이 먼저**: 존재하지 않는 이메일이면 Redis 연산 자체를 하지 않는다
2. **Rate Limit이 토큰 생성보다 먼저**: 제한 초과 시 토큰을 만들지 않는다
3. **Redis 저장이 메일 발송보다 먼저**: 토큰이 저장된 상태에서 메일이 나가야, 사용자가 링크를 클릭했을 때 검증할 수 있다


## Redis 키 상태 예시

`user@example.com`이 이메일 인증을 3번 요청했을 때:

```
verify:cooldown:5d414...  →  "1"       TTL: 42초 남음
verify:count:5d414...     →  "3"       TTL: 23시간 남음
verify:token:5d414...     →  "uuid..." TTL: 58분 남음
```

4번째 요청이 오면:
- 쿨다운 체크 → 42초 남아서 `FAILED_BY_COOLDOWN`
- (쿨다운이 풀린 후) 일일 카운트 체크 → count=4 > 3이므로 `FAILED_BY_EXCEED_DAY_LIMIT`


## 정리

| 계층 | Redis 명령 | TTL | 목적 |
|------|-----------|-----|------|
| 쿨다운 | `SET ... NX EX 60` | 60초 | 연속 요청 방지 |
| 일일 제한 | `INCR` + `EXPIRE` | 1일 | 하루 3회 제한 |
| 인증 토큰 | `SET ... EX` | 30~60분 (MailType별) | 일회용 인증 링크 |

면접에서 "Rate Limiting을 어떻게 구현하나요?"라는 질문에 Token Bucket이나 Sliding Window 같은 알고리즘 이름만 대는 건 누구나 할 수 있다. **Redis의 원자적 명령(`SETNX`, `INCR`)을 조합해서 실제로 구현해 보고, 동시성 문제와 장애 시나리오까지 고려해 봤다는 게 차이점이다.**
