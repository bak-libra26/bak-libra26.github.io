---
tags:
  - NVM
  - MacOS
references: 
created_date: 2025-08-13T16:35:09.000Z
last_modified_date: 2025-08-13T16:36:13.000Z
id: 9a8b3b96-831b-467a-a8fa-f39b989e697d
---

# NVM 설치 방법

## Homebrew로 NVM 설치하기

> Homebrew가 아직 설치되어 있지 않다면, 우선적으로 설치해야함.

- Homebrew를 이용한 NVM 설치 명령어
    
    ```shell
    brew install nvm
    nvm -v
    ```
    
    만약 `nvm` 명령어가 인식되지 않는다면, 아래 환경 변수 설정 단계를 따름.
    

## MAC-OS에서 NVM 환경 변수 설정

- MAC-OS에서 NVM 환경 변수 추가 명령어
    
    ```shell
    mkdir ~/.nvm  # .nvm 폴더 생성
    
    vi ~/.zshrc  # 환경 변수 설정 파일 열기
    
    # .zshrc 파일에 아래 내용 추가
    export PATH="$PATH:$HOME/.rvm/bin"
    export PATH="$PATH:/opt/homebrew/bin"
    # NVM 설정
    export NVM_DIR="$HOME/.nvm"
      [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # nvm 로드
      [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # nvm bash_completion 로드
    ```
    

## NVM 버전 확인

- NVM 버전 확인 명령어
    
    ```shell
    $ nvm -v
    0.40.1
    ```

