---
summary: 젠킨스 SSH Credentials 추가하기
tags:
  - 젠킨스
  - trouble_shooting
  - credentials
references: 
created_date: 2025-08-12T16:27:52.000Z
last_modified_date: 2025-08-13T16:02:25.000Z
---
# Credentials 추가


```shell
jenkins.plugins.publish_over.BapPublisherException: Failed to connect and initialize SSH connection. Message: [Failed to connect session for config [${config-name}]. Message [Auth fail for methods 'publickey,gssapi-keyex,gssapi-with-mic,password']]
```

젠킨스에서 SSH Credentials로 배포 자동화 시도를 위해 서버의 `Credential` 추가 중 위의 에러 발생

## SSH 키 생성 및 등록

### RSA 방식

- 키 생성  
    `ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa`
    
- 공개키 등록  
    `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`  
    `chmod 600 ~/.ssh/authorized_keys`
    
- 필요시 PEM 포맷 변환  
    `ssh-keygen -p -m PEM -f ~/.ssh/id_rsa`
    

### ECDSA 방식

- 키 생성  
    `ssh-keygen -t ecdsa -b 521 -f ~/.ssh/id_ecdsa`
    
- 공개키 등록  
    `cat ~/.ssh/id_ecdsa.pub >> ~/.ssh/authorized_keys`  
    `chmod 600 ~/.ssh/authorized_keys`
    

## 인증 실패 지속

- 키 정상 생성 및 등록 후에도 인증 실패 에러 계속 발생
- `ssh -i`로 직접 접속 시도해도 패스워드 인증으로 넘어감
- 서버의 `~/.ssh/authorized_keys` 파일 존재 여부 확인  
    없으면 `touch ~/.ssh/authorized_keys`로 생성
- 공개키(`id_rsa.pub` 또는 `id_ecdsa.pub`)를 `authorized_keys`에 추가
- 퍼미션 문제 없는지 재확인 (`chmod 600 ~/.ssh/authorized_keys`)
- 젠킨스에서 Test Configuration 재시도, 정상 연결 확인됨
    

## 결론

- SSH 키 생성, 공개키 등록, 퍼미션 설정까지 꼼꼼히 확인 필요
- authorized_keys에 키가 누락되거나 퍼미션 잘못된 경우 인증 실패함
- 젠킨스 SSH Credentials 오류 발생 시 위 단계 순서대로 점검하면 해결 가능