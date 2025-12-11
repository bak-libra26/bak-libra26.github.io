---
tags:
  - Jenkins
  - Maven
references: 
created_date: 2025-08-13T15:49:56.000Z
last_modified_date: 2025-08-13T15:50:17.000Z
---
# Jenkins - Maven 설정

## Maven 설치

`mvn --version` 으로 `Maven` 이 설치되어있는지 확인하고 설치되어 있지 않은 경우 아래의 순서로 `Maven` 을 설치한다.

- `Maven` 설치
	1. `wget https://archive.apache.org/dist/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.tar.gz`
	2. `sudo tar -xvf apache-maven-3.8.6-bin.tar.gz -C /opt`
	3. `sudo ln -s /opt/apache-maven-3.8.6 /opt/maven`
	4. `maven.sh` 설정 
		1. `vi /etc/profile.d/maven.sh`
		2. `export JAVA_HOME=${JDK 설치 경로}`
		3. `export M2_HOME=/opt/maven`
		4. `export MAVEN_HOME=/opt/maven`
		5. `export PATH=${M2_HOME}/bin:${PATH}`
	5. `maven.sh` 권한 적용
		1. `sudo chmod +x /etc/profile.d/maven.sh`
		2. `source /etc/profile.d/maven.sh`
	6. `mvn --version` 으로 정상 설치 여부 확인


## Jenkins - Maven 설정

- `Tools` -> `Maven Configuration`
- `Use Default Settings` 또는 `Settings file in filesystem` 선택
	- `Settings file in filesystem`선택시 `File Path` 에 `${MAVEN 설치 경로}/conf/settings.xml` 입력
