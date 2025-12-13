---
summary: 젠킨스 빌드용 JDK 설치 및 설정
tags:
  - 젠킨스
  - JDK_설치
  - JDK
references: 
created_date: 2025-08-13T15:19:52.000Z
last_modified_date: 2025-08-13T15:27:01.000Z
---
# 젠킨스 JDK

- 젠킨스 빌드용 JDK 필요함
- 로그인 → Manage Jenkins → Tools → JDK installations 이동
- Add JDK 클릭, Name(별칭), JAVA_HOME(설치 경로) 입력

## JDK 설치 및 환경 변수 설정

- OpenJDK 11 설치
	```bash
	wget https://download.java.net/openjdk/jdk11/ri/openjdk-11+28_linux-x64_bin.tar.gz
	tar -xvzf openjdk-11+28_linux-x64_bin.tar.gz
	echo 'export JAVA11_HOME="/app/jdk-11"' >> ~/.bashrc
	echo 'export PATH="$PATH:$JAVA11_HOME/bin"' >> ~/.bashrc
	source ~/.bashrc
	```

- OpenJDK 17 설치
	```bash
	wget https://download.java.net/openjdk/jdk17.0.0.1/ri/openjdk-17.0.0.1+2_linux-x64_bin.tar.gz
	tar -xvzf openjdk-17.0.0.1+2_linux-x64_bin.tar.gz
	echo 'export JAVA17_HOME="/app/jdk-17"' >> ~/.bashrc
	echo 'export PATH="$PATH:$JAVA17_HOME/bin"' >> ~/.bashrc
	source ~/.bashrc
	```

## 주의

- JDK 경로 입력해야 함, JRE 경로 입력하면 `{PATH} doesn’t look like a JDK directory` 에러남
- 빌드 에러(`release version 17 not supported`) 발생 시 JDK 버전 확인 필요
