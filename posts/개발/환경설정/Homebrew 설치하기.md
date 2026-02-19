---
summary: M1 Mac 환경에 Homebrew 설치해보기
tags: 
references: 
created_date: 2026-01-08T11:03:06.000Z
last_modified_date: 2026-01-08T11:03:06.000Z
---

# Homebrew 설치하기

> M1 Mac 환경에서 Homebrew를 설치해봅니다.

## Homebrew 설치 명령어 입력

[Homebrew 공식 사이트](https://brew.sh/) 에 들어간 후, 맨 위에 보이는 명령어를 복사하고 터미널에 붙여넣기합니다.

- `Homebrew` 설치 명령어 복사/붙여넣기
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

만약 `Checking for 'sudo' access (which may request your password)` 와 같은 메시지가 뜬다면 맥북 비밀번호를 입력해줍시다.

위 명령어를 입력한 후, 아래와 같이 `echo` 명령어를 실행하여 Homebrew 환경 변수를 설정합니다.

- 설치 후에 나온 `echo` 명령어 복사/붙여넣기
    ```shell
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/사용자이름/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ```


## 설치 확인하기

- Homebrew 버전 확인
    ```shell
    $ brew --version
    Homebrew 5.0.9
    ```

위와같이 명령어를 입력했을 때, 설치한 Homebrew 의 버전이 출력된다면 정상적으로 설치된 것입니다.



