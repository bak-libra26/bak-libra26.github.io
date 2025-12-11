---
tags:
  - Nexus
  - Rocky_Linux
references: 
created_date: 2025-08-13 16:08:00
last_modified_date: 2025-08-13 16:09:52
---


# Nexus 설치

## JDK 및 Nexus 설치

- JDK 설치 (OpenJDK 11)
    ```bash
    sudo yum install java-11-openjdk
    ```
    
    _Nexus는 JDK 1.8 이상 필요._
    
- 최신 버전의 Nexus 설치

    ```bash
    wget https://download.sonatype.com/nexus/3/latest-unix.tar.gz
    ```
    
    _설치일 기준 최신 버전 사용._
    

## Nexus 설정

### Nexus 실행 계정

- `vi nexus.rc`
    
    ```bash
    run_as_user="[실행 사용자]" # 지정한 사용자로 실행
    ```
    

### Nexus 실행 포트

- `vi ${NEXUS_HOME}/nexus-3.x.x-xx/etc/nexus-default.properties`
    
    ```bash
    ## DO NOT EDIT - CUSTOMIZATIONS BELONG IN $data-dir/etc/nexus.properties
    ##
    # Jetty section
    application-port=40000 # Nexus 실행 포트
    application-host=0.0.0.0
    nexus-args=${jetty.etc}/jetty.xml,${jetty.etc}/jetty-http.xml,${jetty.etc}/jetty-requestlog.xml
    nexus-context-path=/
    
    # Nexus section
    nexus-edition=nexus-pro-edition
    nexus-features=\
     nexus-pro-feature
    ~
    ```
    

### Nexus 서비스 관리

- `/etc/systemd/system/nexus.service` 작성
    
    ```bash
    [Unit]
    Description=nexus service
    After=network.target
    
    [Service]
    Type=forking
    LimitNOFILE=65536
    ExecStart=/svc/nexus/nexus-3.x.x-xx/bin/nexus start
    ExecStop=/svc/nexus/nexus-3.x.x-xx/bin/nexus stop
    User=[실행 사용자]
    Restart=on-abort
    
    [Install]
    WantedBy=multi-user.target
    ```
    
- systemd 데몬 갱신 및 서비스 등록
    
    ```bash
    systemctl daemon-reload
    systemctl enable nexus.service
    systemctl start nexus.service
    ```
    

### Nexus 로그 확인

- 로그 위치 : `${NEXUS_HOME}/sonatype-work/nexus3/log/nexus.log`
    

※ 서버 IP, 계정, 비밀번호 등 민감 정보는 반드시 비공개로 관리할 것. 기본 계정 및 비밀번호는 반드시 변경하고, 외부 접근 제어 설정 필수.