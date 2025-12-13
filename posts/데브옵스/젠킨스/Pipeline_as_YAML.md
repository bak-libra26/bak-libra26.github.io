---
summary: 젠킨스 스크립트 작성, pipeline/yaml 
tags:
  - 젠킨스
  - 파이프라인
  - YAML
references:
  - https://github.com/jenkinsci/pipeline-as-yaml-plugin/
created_date: 2025-08-14T09:29:02.000Z
last_modified_date: 2025-08-14T14:54:54.000Z
---
# Pipeline as YAML 설정

젠킨스에서 CI/CD를 위해 작성하는 스크립트는 기본적으로 `Groovy`로 작성된다. 하지만 `Groovy`에 대한 지식이 부족해 대안을 찾던 중, `pipeline-as-yaml-plugin` 플러그인을 통해 `YAML`로도 스크립트를 작성할 수 있다는 점을 알게 되었다.

## Pipeline as YAML

1. `pipeline-as-yaml-plugin` 플러그인 설치
    
2. Pipeline의 Configure 메뉴로 이동
    
3. Build Configuration
    
    1. Mode: `by 젠킨스file As Yaml` 선택
        
    2. Script Path: `젠킨스.yaml` 파일 경로 지정
        

### 기본적인 문법 확인

`YAML`로 Pipeline 스크립트를 작성하기 위해서는 기본 문법을 이해해야 한다. AI에게 요청할 수도 있지만, 적절한 예시가 제공되지 않는 경우가 있으므로 공식 예시를 참고하는 것이 좋다.

> 기본적인 예시는 [젠킨스 Yaml Pipeline Syntax](https://github.com/jenkinsci/pipeline-as-yaml-plugin/blob/main/src/test/resources/pipeline/pipelineAllinOne.yml)에서 확인할 수 있다.


### `Yaml` 파이프라인 작성 예시

- 예시
    
    ```yaml
    # jenkins/젠킨스file.yaml  
    pipeline:  
      agent:  
        node:  
          label: 'built-in'  
      tools:  
        jdk: 'OpenJDK17'  
      
      environment:  
        SERVICE_NAME: 'sender-manager'  
        SLACK_CHANNEL: '#이슈'  
        REMOTE_DIR: credentials('HOME_PATH')      # 젠킨스 Credentials 바인딩 필요  
        SERVER_NAME: credentials('DEV_IP')      # SSH 서버명 (Publish Over SSH 플러그인 기준)  
      
      stages:  
        - stage: Build  
          steps:  
            - echo "Hello 젠킨스 YAML"  
      
        - stage: "Stage2"  
          steps:  
            - echo "Test"  
            - echo "$SLACK_CHANNEL"
    ```
    

## Yaml 사용 후기

- 장점
    
    1. `Groovy`보다 `YAML`이 더 친숙하다.
        
    2. 가독성이 뛰어나다.
        
    3. 버전 관리가 용이하다.
        
    4. 진입장벽이 낮아 DevOps 경험이 적은 개발자도 쉽게 이해하고 수정할 수 있다.
        
- 단점
    
    1. 공식 Declarative Pipeline에 비해 지원되는 플러그인 종류가 제한적이다.
        
    2. Slack 알림, 외부 서비스 연동 등 확장 기능 구현이 어렵거나 지원이 부족하다.
        
    3. 고급 파이프라인 기능(예: 동적 파라미터, 커스텀 스텝 등) 활용에 제약이 있다.
        
    4. 실무에서는 필요한 플러그인과 기능이 YAML Pipeline에서 정상적으로 작동하는지 사전 검증이 필요하다.
        

> 개인적으로 Slack Notification 플러그인을 활용한 슬랙 알림 기능이 필요했으나, 해당 플러그인이 YAML을 지원하지 않거나 정상적으로 동작하지 않아 결국 Groovy로 스크립트를 작성했다.

---

요약: 젠킨스에서 YAML로 파이프라인을 작성하는 것은 진입장벽이 낮고 가독성이 좋다는 장점이 있지만, 플러그인 호환성과 확장성 측면에서는 아쉬움이 있다. 실무 적용 전 충분한 테스트가 필요하다.