---
tags:
  - 젠킨스
references: 
created_date: 2025-08-26T11:31:12.000Z
last_modified_date: 2025-08-26T11:31:12.000Z
---

# 젠킨스 Publish Over SSH 서버 테스트 접속 실패

젠킨스에서 `Publish Over SSH` 플러그인을 사용해 서버를 추가하고, `Test Configuration`으로 접속 테스트를 수행할 때 발생할 수 있는 대표 에러 메시지와 해결 방법을 정리합니다.

## 에러 메시지별 해결 방법

### Connection refused

- **원인:** 서버 방화벽, SSH 데몬 미가동, 리스닝 포트 불일치로 인해 연결이 거부되는 경우
- **확인 방법:** `ping`, `traceroute`로 경로 점검, `nc -vz <HOST> 22`로 포트 오픈 여부 확인
- **해결 방법:**
	- 방화벽에서 SSH 포트(기본 22)를 허용
	- 서버에서 sshd 상태/포트 확인: `sudo systemctl status sshd`, `ss -tnlp | grep :22`
	- 젠킨스의 서버 설정에서 Host/Port 값 재확인

### Connection timed out

- **원인:** 네트워크 경로 차단(방화벽/보안그룹), 라우팅 이슈로 응답이 오지 않는 경우
- **확인 방법:** `traceroute <HOST>`, `nc -vz <HOST> 22` 실행 시 타임아웃 여부 확인
- **해결 방법:**
	- 네트워크/방화벽 경로 점검 및 중간 구간 차단 해제
	- 대상 서버가 외부에서 접근 가능한지(공인/사설망, VPN 등) 확인

### Permission denied (publickey)

- **원인:** 공개키 미등록, 계정 불일치, 키 형식 불일치, 권한/소유자 문제
- **확인 방법:** 로컬에서 `ssh -i <PRIVATE_KEY> <USER>@<HOST> -vvv`로 직접 접속 시도
- **해결 방법:**
1. 배포할 서버의 `/home/${user}/.ssh/authorized_keys`에 젠킨스의 공개키 추가
2. 권한/소유자 설정:
	- `chmod 600 /home/${user}/.ssh/authorized_keys`
	- `chmod 700 /home/${user}/.ssh`
	- `chown -R ${user}:${user} /home/${user}/.ssh`
3. 젠킨스 설정에서 올바른 Private key(내용/경로)와 로그인 사용자명 사용
