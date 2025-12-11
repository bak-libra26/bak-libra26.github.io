---
tags:
  - 젠킨스
  - slack
references: 
created_date: 2025-08-13T16:27:25.000Z
last_modified_date: 2025-08-13T16:27:25.000Z
---
# 젠킨스 Slack 플러그인 연동 및 알림 설정

## Slack에 젠킨스 CI 플러그인 추가

- Slack에서 `더보기` → `앱` → `젠킨스 CI` 추가
    

## 젠킨스에서 Slack 플러그인 설정값 확인

- Slack 플러그인 추가 후, 설정 지침에서 필요한 값 확인 가능
    
	1. 팀 하위 도메인
	2.  통합 토큰 자격 증명 ID

## 젠킨스에 Slack 설정 추가

- `Manage 젠킨스` → `System` → `Slack` 메뉴로 이동
- Workspace에는 팀 하위 도메인 값 입력
- Credential은 아래 절차 참고해서 추가
    

### Slack Credential 추가

- `+ ADD` → `젠킨스` → `Secret text` 선택
    - Secret: 통합 토큰 자격 증명 ID 입력
    - ID: 원하는 별칭 입력

### Default Channel 설정

- 알림 보낼 채널 이름을 `#채널명` 형식으로 입력
    
### 연결 테스트

- Test Connection 시 성공하면 Slack에서 알림 도착함
    

## 젠킨스file에 Slack 알림 스크립트 추가

- `젠킨스file`에 빌드 성공/실패에 따라 슬랙 알림 전송 스크립트 추가
    

```groovy
pipeline {
	...
	post {  
	    success {  
	        slackSend (
	            channel: '#이슈',
	            color: '#00FF00',
	            message: """Job ${env.JOB_NAME} [${env.BUILD_NUMBER}] 🔥"""
	        )  
	    }
	    failure {  
	        slackSend (
	            channel: '#이슈',
	            color: '#FF0000',
	            message: "FAIL: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}]"
	        )  
	    }
	}
}
```

- 위처럼 설정하면 빌드 결과에 따라 지정한 채널로 알림 전송됨
