---
tags:
references: 
created_date: 2025-08-14 09:29:12
last_modified_date: 2025-08-14 09:29:23
---

# Pipeline JDK 설정

```shell
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.10.1:compile (default-compile) on project std-mcmp-senderManager: Fatal error compiling: java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid' -> [Help 1]
```

- 실패 원인
	1. Jenkins 에이전트가 최신 JDK(예: 21)로 빌드하고 있는데,  
	2. 프로젝트 의존성(특히 Lombok 등)이 오래돼 최신 JDK의 내부 API 변경을 반영하지 못함

## 문제 해결

### 원인 파악

빌드하는 프로젝트가 사용하는 JDK 버전은 17 버전이고, Jenkins 에 11, 17, 21 등 여러 버전의 JDK 를 설정해두었기 때문에 프로젝트를 빌드할 떄 사용해야하는 JDK 와 Jenkins 에서 빌드할 때 사용하는 JDK 버전이 상이한 것으로 판단.

### 문제 해결

1. `Jenkins` -> `Manage` -> `JDK Installation` 에 현재 추가되어있는 JDK 17 의 `alias` 를 확인
2. Pipeline 을 실행하는 스크립트에 JDK 버전과 관련한 내용을 추가한다.
	```groovy
	pipeline {
		agent any
		tools {  
		    // Jenkins 관리 > Global Tool Configuration에서 등록한 JDK 이름 사용  
		    jdk 'OpenJDK17'  
		}
		
		...
	}
	```
	