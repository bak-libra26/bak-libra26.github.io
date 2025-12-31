---
summary: 젠킨스, 넥서스 설정
tags:
  - 젠킨스
  - nexus
references: 
created_date: 2025-08-13T15:48:07.000Z
last_modified_date: 2025-08-13T16:00:32.000Z
---
# 젠킨스(Jenkins), 넥서스(Nexus) 설정

Nexus에서 라이브러리 받아오려면 Maven에 Nexus 관련 설정 필요함. 설정은 1. 계정 설정, 2. 레포지토리 설정으로 나뉨.

### 계정 설정

Maven이 Nexus에 접근할 때 사용할 계정정보는 `$MAVEN_HOME/settings.xml`에 추가해야 함.

- `settings.xml` 수정
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                              http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <servers>
    <server>
      <id>레포지토리ID</id>
      <username>계정ID</username>
      <password>계정PW</password>
    </server>
  </servers>
</settings>
```

### 레포지토리 설정

빌드시 필요한 라이브러리를 Nexus에서 받으려면 ‎`pom.xml`에 레포지토리 정보 추가해야 함.

```xml
<repositories>
  <repository>
    <id>레포지토리ID</id>
    <name>레포지토리별칭</name>
    <url>Nexus URL</url>
  </repository>
</repositories>
```

- ‎`<id>` 값은 ‎`settings.xml`의 ‎`<server><id>`와 일치해야 함
- 계정이 필요 없는 공개 레포는 ‎`<server>` 설정 생략 가능