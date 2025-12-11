---
tags:
  - 젠킨스
  - github_webhook
  - pipeline_설정
references: 
created_date: 2025-08-13T17:49:55.000Z
last_modified_date: 2025-08-14T15:45:34.000Z
---

# GitHub Webhook 자동 빌드 트리거링

젠킨스와 GitHub를 연동하면 코드 변경(push, PR 등) 시 자동으로 파이프라인이 실행되어 CI/CD를 실현할 수 있음.  

이때 `Webhook` 을 활용하면 개발자가 직접 젠킨스에서 빌드를 수동으로 실행하지 않아도, GitHub 이벤트가 발생할 때마다 파이프라인이 자동으로 트리거됨.


> - **Webhook**: GitHub에서 특정 이벤트(예: push, PR)가 발생하면 젠킨스에 HTTP POST 요청을 보내는 기능
> - **젠킨스 Multibranch Pipeline**: 다양한 브랜치별로 자동으로 파이프라인 생성 및 관리 가능
> - **자동화**: 코드 변경이 있을 때마다 빌드, 테스트, 배포가 자동으로 실행됨


## Github Webhook 설정

### 방화벽 허용

Github 이벤트를 젠킨스에서 처리하려면 웹훅 IP를 방화벽에 허용해야 합니다.

Github에서 특정 레포지토리나 조직(Organization)에서 발생하는 이벤트를 젠킨스에서 자동으로 처리하려면, Github가 이벤트를 웹훅(Webhook) 형식으로 젠킨스 서버의 URL로 전달한다. 이때, 젠킨스 서버가 외부에서 오는 Github 웹훅 요청을 정상적으로 수신하려면, Github 웹훅용 IP 대역을 방화벽에서 허용해야 한다.

> - Github의 공식 웹훅 IP 대역은 [https://api.github.com/meta ↗](https://api.github.com/meta)에서 확인할 수 있다.


### 레퍼지토리 웹 훅 허용 

웹 훅은 레퍼지토리와 조직(Organization) 등 여러 곳에 설정할 수 있다. 본 글에서는 레퍼지토리 웹 훅 URL 설정 방법에 대해서만 다루도록 한다.

1. 웹 훅 URL 을 설정할 레퍼지토리
2. `Settings` -> `Webhooks` -> `Add webhook`
3. 웹 훅 관련 설정
	1. `Payload URL`: `${웹 훅 수신 URL}/github-webhook/`
	2. `Content type`: `application/json` 또는 `application/x-www-form-urlencoded`
	3. `Secret`: 기억할 수 있는 패스워드 값 입력
	4. `SSL vertification`:  `Enable` 또는 `Disable`
	5. 수신받을 이벤트 3 개 중 1 개 선택
		1. Just the push event.
		2. Send me everything.
		3. Let me select individual events.


## 젠킨스 Pipeline 설정

### \* 젠킨스 필수 플러그인 설치

#### 1. Generic Webhook Trigger

젠킨스가 GitHub Webhook을 수신하여 자동으로 빌드를 실행하려면 **Generic Webhook Trigger** 플러그인을 설치한다.  
설치는 젠킨스의 `Manage 젠킨스` → `Manage Plugins` → `Available Plugins`에서 **Generic Webhook Trigger**를 검색해 설치한다.  
이 플러그인이 없으면 파이프라인에서 웹훅 관련 설정이 보이지 않으므로, 반드시 먼저 설치해야 한다.

> 필수 플러그인: [Generic Webhook Trigger](https://plugins.젠킨스.io/generic-webhook-trigger/) 설치

---

#### 2. Pipeline: GitHub

젠킨스와 GitHub 저장소 연동을 위해 **Pipeline: GitHub** 플러그인을 설치한다.  
이 플러그인만으로도 싱글 파이프라인 Job에서 Webhook Trigger 기능을 사용할 수 있다.  
멀티브랜치 파이프라인 자동 생성 및 관리, PR 자동 감지 및 빌드 등 추가 기능을 사용하려면 **GitHub Branch Source** 플러그인도 함께 설치한다.

> 참고: [GitHub Branch Source 플러그인 공식 페이지](https://plugins.젠킨스.io/github-branch-source/)

### Pipeline 생성 및 설정

1. `젠킨스` 메인 페이지 -> `New Item`
2. `Item type` 선택 후 생성
	1. `Freestyle project`
	2. `Pipeline`
	3. `Folder`
	4. `Multibranch Pipeline`
	5. `Organization Folder`
3. `Pipeline` -> `Configure` 진입
4. `Branch Sources` 의 `Add source(Github)`
	1. `Credentials` 선택
	2. `Repository HTTPS URL`: 깃허브 레퍼지토리 주소
	3. `Add / Filter by name`: `^(main|develop|feature-.*)` 
	4. `Build Configuration`
		1. `Mode`: `by 젠킨스file`
		2. `Script Path`: 레퍼지토리 내 스크립트(젠킨스file) 경로
	5. `Apply` and `Save`



### 자동 빌드 테스트

#### 스크립트 작성

- `젠킨스file` 파일
	```groovy
	pipeline {  
	    agent any  
	  
	    tools {  
	        jdk 'OpenJDK11'  
	    }  
	    
		stages {  
	        stage('Echo') {  
	            steps {  
	                echo "Building project."
	            }  
	        }  
	    }  
	    
	    stages {  
	        stage('Build') {  
	            steps {  
	                sh 'mvn clean package -DskipTests'  
	                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true  
	            }  
	        }  
	    }  
	}
	```


젠킨스file 을 파이프라인 생성 시 입력한 경로에 위치시키고 `Commit` 후 `Push` 한다.
#### 스크립트 실행이 안될 때.

GitHub 에 `Commit`, `Push` 한 이후, 해당 이벤트를 감지하여 스크립트가 실행된다. 만약 내부 작업들이 실행이 안된다면 아래의 사항을 확인한다.

- 확인사항
	1. 젠킨스file 의 문법
	
		문법이 정확하지 않은 경우 에러 로그로 확인이 가능할 것으로 생각됨

	2. 젠킨스file 의 경로
		
		젠킨스file 정상적으로 읽었는지 여부는 `${젠킨스_HOME}/workspace/${pipeline_name}_${branch_name}/젠킨스/젠킨스file` 이나 로그를 통해 `젠킨스` 내부 파일을 확인해본다.

	3. GitHub 방화벽 및 깃허브 정상 연동 여부
		
		만약 GitHub 의 이벤트를 감지하여 빌드가 실행되었다면 연동에는 문제가 없다.
		
	4. [Plugin: Declarative Pipeline](https://plugins.젠킨스.io/pipeline-model-definition) 플러그인의 설치 여부를 확인한다

		`groovy` 로 작성한 스크립트는 해당 플러그인이 없는 경우 실행되지 않는 것으로 보인다. 해당 플러그인을 설치한다.





