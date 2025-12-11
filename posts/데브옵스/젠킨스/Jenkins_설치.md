---
tags:
  - 젠킨스
  - 젠킨스_설치
references: 
created_date: 2025-08-13T15:19:02.000Z
last_modified_date: 2025-08-13T15:19:02.000Z
---

# 젠킨스(Jenkins) 설치

- 젠킨스 설치 명령어
    ```bash
    yum install -y jenkins
    ```

## 젠킨스 기동/정지/재시작

- 상태 확인: `systemctl status jenkins`
- 기동: `systemctl start jenkins`
- 정지: `systemctl stop jenkins`
- 재기동: `systemctl restart jenkins`

## 젠킨스 초기 비밀번호

- 초기 비밀번호 확인
    ```bash
    cat /var/lib/jenkins/secrets/initialAdminPassword
    ```

## 젠킨스 실행 포트 변경

- 실행 서비스 파일: `/usr/lib/systemd/system/jenkins.service`
- 해당 파일에서 포트 설정 가능
    ```bash
    Environment="JENKINS_PORT=45000" # 원하는 포트로 수정
    ```

- privileged port(<1024) 사용 시 CAP_NET_BIND_SERVICE 설정 필요