---
summary: 넥서스 레퍼지토리 유형과 스프링 부트에서의 연동 방법
tags:
  - Nexus
  - springboot
references: 
created_date: 2025-08-13T16:20:22.000Z
last_modified_date: 2025-08-13T16:20:22.000Z
---
# Nexus Repository 유형 및 Spring Boot 연동 가이드

## Repository

- **Repository Type**
    1. **Proxy** : 외부망 연동에 사용
    2. **Hosted** : 내부망 연동에 사용
    3. **Virtual** : 서로 다른 타입간 연결에 사용
    4. **Group** : Repository 간 그룹화를 위해 사용
        
- **Repository Version Policy**
    
    1. **Release**
        - 안정적으로 배포 및 사용되는 프로젝트 버전
        - 버그 수정, 기능 개선 등 소규모 변경 포함
        - 배포 후 artifact는 변경 불가 (수정 시 버전 증가 필요)
            
    2. **Snapshot**
        - 개발 중인, 아직 안정화되지 않은 버전
        - 최신 개발 코드의 빌드로 수시 업데이트됨
        - 버전 하위에 uuid가 붙어 배포, 별도 버전 증가 불필요
            
    3. **Mixed**
        - Release/Snapshot 구분 없이 배포 가능, 단 버전 변경 필요
            

---

## Spring Boot와 Nexus 연동 방법

### 1. Maven Settings.xml 계정 정보 등록

- `~/.m2/settings.xml`
    
    ```xml
	<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	     xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
	                                                       http://maven.apache.org/xsd/settings-1.0.0.xsd">
	
	     <servers>
		<server>
		  <id>${RepositoryName}</id>
		  <username>${Id}</username>
		  <password>${Password}</password>
		</server>
	  </servers>
	</settings>
    ```
    
    - 계정 정보를 작성 후, IntelliJ → Maven Settings → 사용자 설정 파일에 해당 경로 지정
        

### 2. pom.xml에 Repository 정보 등록

- `${SPRING_BOOT_PROJECTS}/pom.xml`
```xml
<repositories>
          <repository>
                    <id>${Repository Id}</id>
                    <name>release</name>
                    <url>${Repository URL}</url>
          </repository>
</repositories>
```

### 3. pom.xml에 자동 배포 설정 추가

```xml
<distributionManagement>
          <!-- release 버전 배포 저장소 -->
          <repository>
                    <id>[서버 ID (settings.xml과 매칭)]</id>
                    <url>[release 리포지터리 url]</url>
          </repository>

          <!-- snapshot 버전 배포 저장소 -->
          <snapshotRepository>
                    <id>[서버 ID]</id>
                    <url>[snapshot 리포지터리 url]</url>
          </snapshotRepository>
</distributionManagement>
```
