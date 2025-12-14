---
summary: 프로메테우스, 레빗엠큐 익스포터 설치해보기
created-date: 2025-12-08 01:34:09
last-modified-date: 2025-12-08 09:08:37
---

# RabbitMQ Exporter 설치 및 Prometheus 연동 문서


---

## 1. rabbitmq_prometheus 플러그인 활성화

RabbitMQ 서버에 Prometheus 메트릭 수집 플러그인 활성화

```shell
rabbitmq-plugins enable rabbitmq_prometheus 
sudo systemctl restart rabbitmq-server 
sudo systemctl status rabbitmq-server
```

- `rabbitmq_prometheus` 플러그인이 활성화되면, RabbitMQ 웹 관리자 인터페이스의 `/metrics` 경로를 통해 Prometheus 메트릭을 제공합니다.
    

---

## 2. RabbitMQ Exporter 설치

RabbitMQ Exporter는 RabbitMQ의 메트릭을 Prometheus 포맷으로 수집하여 제공합니다.

- 최신 버전의 RabbitMQ Exporter 다운로드 (amd64 아키텍처 기준)


```shell
mkdir /opt/rabbitmq_exporter /opt/rabbitmq_exporter/conf 

wget https://github.com/kbudde/rabbitmq_exporter/releases/download/v1.0.0/rabbitmq_exporter_1.0.0_linux_amd64.tar.gz 

tar -xzvf rabbitmq_exporter_1.0.0_linux_amd64.tar.gz -C /opt/rabbitmq_exporter
```

- 압축 해제 후, 다음과 같은 파일 구조가 생성된다:
    
    - `/opt/rabbitmq_exporter/conf`
    - `/opt/rabbitmq_exporter/rabbitmq_exporter`
    - `/opt/rabbitmq_exporter/README.md`
    - `/opt/rabbitmq_exporter/LICENSE`
        

---

## 3. 설정 파일 작성

RabbitMQ Exporter의 설정 파일(`/opt/rabbitmq_exporter/conf/rabbitmq.conf`) 작성한다.

json

```json
{   
	"rabbit_url": "http://${RABBITMQ_IP}:15672",  
	"rabbit_user": "${USER_NAME}",  
	"rabbit_pass": "${PASSWORD}" 
}
```

- `${RABBITMQ_IP}`: RabbitMQ 서버 IP
- `${USER_NAME}`: RabbitMQ 관리자 계정
- `${PASSWORD}`: RabbitMQ 관리자 비밀번호

---

## 4. systemd 서비스 등록

RabbitMQ Exporter를 systemd 서비스로 등록합니다.

- `/etc/systemd/system/rabbitmq-exporter.service` 파일 생성:


```shell
[Unit] 
Description=RabbitMQ Exporter 
After=network.target 

[Service] 
Type=simple 
ExecStart=/opt/rabbitmq_exporter/rabbitmq_exporter \
-config-file=/opt/rabbitmq_exporter/conf/rabbitmq.conf 
Restart=always 

[Install] 
WantedBy=multi-user.target
```

- 서비스 등록 및 시작:
	```shell
	sudo systemctl daemon-reload 
	sudo systemctl start rabbitmq-exporter 
	sudo systemctl enable rabbitmq-exporter
	```

- 서비스 상태 확인:
	```shell
	sudo systemctl status rabbitmq-exporter
	```

- 기본 포트: 9419 (RabbitMQ Exporter가 메트릭을 제공하는 포트)

---

## 5. Prometheus 설정

Prometheus 서버의 `prometheus.yml`에 RabbitMQ Exporter 타깃을 추가합니다.

```text
scrape_configs:   
- job_name: 'rabbitmq'    
- scrape_interval: 60s    
- scrape_timeout: 30s    
- static_configs:      
  - targets:        
	- ${SERVER_IP}:${PORT}
```

- 설정 적용 후 Prometheus 재시작:
	```shell
	sudo systemctl restart prometheus
	```

---

## 6. 트러블슈팅

- **RabbitMQ Exporter가 메트릭을 제공하지 않을 경우**
    
    - RabbitMQ 서버의 `rabbitmq_prometheus` 플러그인이 활성화되었는지 확인
    - RabbitMQ Exporter 설정 파일의 IP, 사용자, 비밀번호가 정확한지 확인
    - 네트워크 방화벽이 15672(RabbitMQ 관리자 포트), 9419(RabbitMQ Exporter 메트릭 포트)를 허용하는지 확인
        
- **Prometheus에서 타깃이 UP 상태가 아닐 경우**
    - RabbitMQ Exporter가 정상적으로 실행되고 있는지 확인
    - Prometheus 설정 파일의 `targets`가 정확한지 확인
        

---

이 문서를 참고하여 RabbitMQ Exporter 설치 및 Prometheus 연동을 안정적으로 수행할 수 있습니다.

---

## 참고 자료

- RabbitMQ Exporter GitHub: [https://github.com/kbudde/rabbitmq_exporter](https://github.com/kbudde/rabbitmq_exporter)
- Prometheus RabbitMQ Exporter 문서: [https://github.com/kbudde/rabbitmq_exporter](https://github.com/kbudde/rabbitmq_exporter)
    