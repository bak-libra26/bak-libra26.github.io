---
created-date: 2025-12-02 01:19:16
last-modified-date: 2025-12-03 10:34:06
---
# Node Exporter 설치 문서

## 1. Node Exporter 전용 계정 생성함

Node Exporter 프로세스를 일반 계정이 아닌 전용 서비스 계정으로 실행하기 위해 계정을 생성함.

1. node_exporter 사용자 생성함.
    - 실행 명령:
        ```shell
        sudo useradd -rs /bin/false node_exporter
        ```
        
    - 로그인 셸을 `/bin/false`로 지정해 직접 로그인이 불가능한 시스템 계정으로 생성함.​

---

## 2. Node Exporter 바이너리 다운로드 및 압축 해제함

GitHub 릴리즈에서 Node Exporter 바이너리를 다운로드하고, 압축 해제 후 권한을 설정함.

1. 설치 디렉터리로 이동함.
    - 실행 명령:
        ```shell
        cd /opt
        ```
        
2. Node Exporter 압축 파일 다운로드함.
    - 실행 명령:
		```shell
		wget https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
		```
        
3. 다운로드한 tar.gz 파일 압축 해제함.
    - 실행 명령:
        ```shell
        tar -xvzf node_exporter-1.8.2.linux-amd64.tar.gz
        ```
        
    - 위 명령으로 `/opt/node_exporter-1.8.2.linux-amd64` 디렉터리가 생성되며, 내부에 `node_exporter` 실행 파일이 포함됨.​
    
4. Node Exporter 디렉터리에 소유권을 부여함.
    - 실행 명령:    
        ```shell
        chown -R node_exporter:node_exporter node_exporter-1.8.2.linux-amd64
        ```
        
    - node_exporter 사용자/그룹이 해당 디렉터리 및 실행 파일에 대한 권한을 가지도록 설정함.​


---

## 3. Node Exporter systemd 서비스 유닛 생성함

Node Exporter를 백그라운드 서비스로 실행하고, 부팅 시 자동 시작되도록 systemd 유닛 파일을 생성함.

1. 서비스 유닛 파일 생성함.
    - 파일 경로: `/etc/systemd/system/node_exporter.service`
    - 내용 예시는 다음과 같음.
		```text
		[Unit] 
		Description=Node 
		Exporter Wants=network-online.target 
		After=network-online.target 
		
		[Service] 
		User=node_exporter 
		Group=node_exporter 
		Type=simple 
		ExecStart=/opt/node_exporter-1.8.2.linux-amd64/node_exporter 
		Restart=on-failure 
		
		[Install] WantedBy=multi-user.target
		```
        
1. 위 설정을 통해 네트워크가 활성화된 이후 node_exporter 서비스가 실행되며, node_exporter 전용 계정으로 프로세스가 동작하도록 구성됨.​
2. 기본 설정에서는 9100 포트에서 메트릭 엔드포인트(`/metrics`)를 노출함.​


---

## 4. Node Exporter 서비스 등록 및 기동함

1. systemd 데몬 리로드함.
    - 실행 명령:
        ```shell
        sudo systemctl daemon-reload
        ```
        
2. 부팅 시 자동 실행 설정함.
    - 실행 명령:
        ```shell
        sudo systemctl enable node_exporter
        ```
        
    - 시스템 부팅 시 node_exporter 서비스가 자동으로 시작되도록 설정됨.
        
3. 즉시 Node Exporter 서비스 기동함.
    - 실행 명령:
        ```shell
        sudo systemctl start node_exporter
        ```
        
4. 서비스 상태 확인이 필요할 경우 아래 명령을 사용할 수 있음.
    - 실행 명령:
        ```shell
        sudo systemctl status node_exporter
        ```
        
5. 브라우저 또는 curl로 `http://<서버 IP>:9100/metrics` 에 접근해 메트릭 노출 여부를 확인할 수 있음.

---

## 5. Prometheus에 Node Exporter 타깃 추가함

Prometheus가 Node Exporter가 제공하는 메트릭을 스크랩할 수 있도록 Prometheus 설정 파일에 타깃을 추가함.

1. Prometheus 설정 파일 편집함.
    - 파일 경로: `/opt/prometheus/prometheus.yml`
    - 편집 예시는 다음과 같음.
        ```shell
        scrape_configs:   
	        - job_name: 'node_exporter'    
	          static_configs:      
	          - targets: ['${IP:PORT}']
        ```
        
2. `${IP:PORT}` 부분에 Node Exporter가 동작 중인 서버와 포트를 지정함. 예를 들어 동일 서버에서 기본 포트로 동작 중이면 `['1.235.104.73:9100']` 으로 설정함.​
3. 설정 변경 후 Prometheus 서비스를 재시작하거나 설정 리로드를 수행해야 변경 사항이 반영됨.
    - 재시작 예시:
        ```shell
        sudo systemctl restart prometheus
        ```
        
4. Prometheus 웹 UI의 Targets 페이지에서 `job_name: node_exporter` 항목의 상태가 UP 인지 확인해 메트릭 수집이 정상 동작하는지 검증함.