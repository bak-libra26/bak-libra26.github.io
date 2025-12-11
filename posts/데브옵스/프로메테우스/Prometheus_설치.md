---
created-date: 2025-12-02 01:19:28
last-modified-date: 2025-12-02 02:48:36
---
# Prometheus 설치 문서

---

## 1. Prometheus 바이너리 다운로드 및 디렉터리 구성함

Prometheus를 패키지 매니저가 아닌 공식 바이너리로 설치하기 위해, GitHub 릴리즈에서 tar.gz 파일을 다운로드하고 `/opt/prometheus` 경로로 정리함.[](https://co-no.tistory.com/entry/Observability-%ED%94%84%EB%A1%9C%EB%A9%94%ED%85%8C%EC%9A%B0%EC%8A%A4Prometheus-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95-%EC%8B%A4%ED%96%89)​

1. Prometheus 압축 파일 다운로드 및 압축 해제, 디렉터리 이동함.
    - 실행 명령:
        shell
		```shell
		wget https://github.com/prometheus/prometheus/releases/download/v2.47.1/prometheus-2.47.1.linux-amd64.tar.gz tar xvfz prometheus-2.47.1.linux-amd64.tar.gz sudo mv prometheus-2.47.1.linux-amd64 /opt/prometheus
		```
        
2. 위 명령을 통해 현재 디렉터리에 `prometheus-2.47.1.linux-amd64` 디렉터리가 생성되며, 이후 `/opt/prometheus` 로 이동됨.​
3. 이동 후 주요 파일은 다음과 같음.[](https://prometheus.io/docs/prometheus/latest/getting_started/)​
    - `/opt/prometheus/prometheus` : Prometheus 서버 실행 바이너리.
    - `/opt/prometheus/promtool` : 설정 검증 및 유틸리티 바이너리.
    - `/opt/prometheus/prometheus.yml` : 기본 설정 파일.
    - `/opt/prometheus/consoles/`, `/opt/prometheus/console_libraries/` : 콘솔 템플릿 관련 디렉터리.

※ 필요 시 `/opt/prometheus/data` 디렉터리를 생성해 TSDB 데이터를 저장하는 용도로 사용함.[](https://ace28.tistory.com/entry/Prometheus-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%A4%EC%A0%95)​

---

## 2. Prometheus systemd 서비스 유닛 파일 생성함

Prometheus를 systemd 서비스로 관리하기 위해 `/etc/systemd/system/prometheus.service` 파일을 생성함.[](https://jy-p.tistory.com/140)​
    
1. systemd 서비스 유닛 파일 생성함.
    - 파일 경로: `/etc/systemd/system/prometheus.service`
    - 내용 예시는 다음과 같음.
        ```shell
        [Unit] 
        Description=Prometheus 
        Wants=network-online.target 
        After=network-online.target 
        
        [Service] 
        User=prometheus 
        Group=prometheus 
        Type=simple 
        ExecStart=/opt/prometheus/prometheus --config.file=/opt/prometheus/prometheus.yml --storage.tsdb.path=/opt/prometheus/data ExecReload=/bin/kill -HUP $MAINPID Restart=on-failure 
        
        [Install] 
        WantedBy=multi-user.target
        ```
        
2. 위 설정을 통해 네트워크가 활성화된 이후 `Prometheus` 가 실행되며, 설정 파일과 데이터 경로를 명시적으로 지정하도록 구성함.​

---

## 3. Prometheus 서비스 등록 및 기동함

systemd에 새로운 서비스 유닛을 인식시키고, 부팅 시 자동 실행되도록 설정한 뒤 `Prometheus` 를 기동함.​

1. systemd 데몬 리로드함.
    - 실행 명령:
        ```shell
        sudo systemctl daemon-reload
        ```
        
2. 부팅 시 자동 실행 설정함.
    - 실행 명령:
        ```shell
        sudo systemctl enable prometheus
        ```
    - 시스템 부팅 시 prometheus 서비스가 자동으로 시작되도록 설정됨.
        
3. 즉시 Prometheus 서비스를 기동함.
    - 실행 명령:
        ```shell
        sudo systemctl start prometheus
        ```
        
    - Prometheus HTTP 서버가 기본 포트 9090에서 대기 상태로 진입함.[](https://www.devkuma.com/docs/prometheus/uses/)​
        

---

## 4. Prometheus 웹 UI 및 상태 확인함

1. 서비스 기동 후 브라우저에서 아래 주소로 접속함.
    
    - URL: `http://1.235.104.73:9090`
        
2. Prometheus 메인 페이지에서 현재 타임 시리즈, 설정된 스크랩 타깃, 알림 상태 등을 확인할 수 있음.[](https://prometheus.io/docs/introduction/first_steps/)​
    
3. 외부에서 접속할 경우, 방화벽 또는 보안 그룹에서 TCP 9090 포트가 허용되어 있는지 확인해야 함.
