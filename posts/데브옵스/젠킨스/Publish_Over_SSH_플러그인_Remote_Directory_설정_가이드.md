---
tags:
  - Jenkins
references:
  - Jenkins의 Publish Over SSH 플러그인은 배포 자동화 시 SSH 서버에 파일을 전송할 때 Remote Directory 설정 가이드
created_date: 2025-08-26 11:14:57
last_modified_date: 2025-08-26 11:14:57
---
> 지극히 개인적으로 공부한 내용과 경험을 바탕으로 작성된 글입니다.

# Jenkins Publish Over SSH 플러그인 - Remote Directory 설정 주의사항

Jenkins에서 배포 자동화를 위해 `Publish Over SSH` 플러그인을 사용하면, ssh를 통해 대상 서버에 접속하여 `sshPublisher`로 바이너리 파일 등을 쉽게 배포할 수 있습니다. 하지만 이 과정에서 서버 설정의 `Remote Directory` 값을 잘못 지정하면, 의도하지 않은 경로로 파일이 배포되는 문제가 발생할 수 있습니다.

## 상대 경로로 인한 배포 경로 오류

`Remote Directory` 설정을 비워두면 기본적으로 접속 유저의 홈 디렉토리가 기준 경로로 잡히는데 예를 들어, userA 계정으로 접속하면 `/home/userA`가 기본 경로가 되는식입니다.

만약 `Remote Directory`를 `/deploy/app`이 아닌 `deploy/app`처럼 **상대 경로**로 입력하면, Jenkins는 이 경로를 접속 계정의 홈 디렉토리 기준으로 해석하기 때문에 결국 `/home/username/deploy/app`에 파일이 배포되어, 의도했던 `/deploy/app`과는 다른 위치에 파일이 복사되는 문제가 발생합니다.

### 예시

- Remote Directory: `deploy/app` (상대 경로)
- 실제 배포 경로: `/home/username/deploy/app`
- 의도한 경로: `/deploy/app`
    

## 해결 방법

`Remote Directory`는 `/deploy/app` 과 같이 **절대 경로**로 지정하는 것이 좋습니다.

### Jenkins Pipeline 스크립트 예시

```groovy
steps {
    sshPublisher(
        publishers: [
            sshPublisherDesc(
                configName: env.SERVER_NAME,
                transfers: [
                    sshTransfer(
                        sourceFiles: 'target/*.jar',
                        remoteDirectory: "${env.REMOTE_DIR}/lib",
                        removePrefix: 'target',
                        execCommand: """
                            echo 'REMOTE_DIR=${env.REMOTE_DIR}';
                            ls -l ${env.REMOTE_DIR}/lib
                        """
                    )
                ],
                verbose: true
            )
        ]
    )
}
```

- `${env.REMOTE_DIR}` 값이 반드시 절대 경로여야 의도한 위치에 배포됩니다.
    

## 결론

ㅌ
1. Jenkins의 `Publish Over SSH` 플러그인과 `sshPublisher`를 사용할 때, `Remote Directory`를 상대 경로로 설정하면 접속 계정의 홈 디렉토리가 기준이 되어 의도하지 않은 위치에 파일이 배포될 수 있습니다.
    
2. 항상 **절대 경로**를 사용하여 원하는 위치에 정확히 배포되도록 설정하는 것이 중요합니다.
    
3. 만약 Jenkins의 `Manage Jenkins` → `System` → `SSH Servers`에서 서버 추가 시 `Remote Directory`를 루트(`/`)로 지정해두면, 이후 스크립트에서 상대 경로를 사용해도 기대한 경로에 정상적으로 파일이 배포됩니다.