---
tags:
  - Jenkins
references: 
created_date: 2025-08-12T14:03:52.000Z
last_modified_date: 2025-08-13T16:01:51.000Z
---
# Jenkins 버전 업그레이드 하기

- `Jenkins` 버전 업그레이드
	```shell
	%% yum 을 사용한 젠킨스 버전 업그레이드 %%
	sudo systemctl stop jenkins
	sudo yum update jenkins -y 
	```


## Jenkins 포트 수정

1. `Jenkins` 버전 업그레이드 후, 재실행했으나 기존에 실행했던 45000 번 포트로 접속이 되지 않았음.
2. `lsof -i:45000` 으로 확인했으나 45000 번 포트에 어떠한 프로세스도 실행되고 있지 않았음.
3. `systemctl status jenkins` 로 확인했으나 `active` 상태인 것을 확인
4. `systemctl status jenkins` 를 통해 `jenkins` 를 실행하는 서비스 파일의 위치를 확인
5. `/usr/lib/systemd/system/jenkins.service` 파일 확인
6. `Environment=JENKINS_PORT=8080` 설정 파일이 기본 설정 파일로 수정
7. `Environment=JENKINS_PORT=45000` 설정 파일을 수정
8. `systemctl restart jenkins` 로 `jenkins` 재실행
9. 45000 포트를 통해 `jenkins` 접속 완료


## Jenkins JDK 업그레이드

`Jenkins` 가 `Java 17` 지원을 2026년 3월 31일로 종료(EOL, End of Life) 한다는 알림이 와서 `Java 21` 버전으로 업그레이드 진행한다.

1. `vi /usr/lib/systemd/system/jenkins.service` 
2. `Environment="JAVA_HOME${JDK21_HOME}"` 로 수정
3. `systemctl daemon-reload`
4. `systemctl restart jenkins`

