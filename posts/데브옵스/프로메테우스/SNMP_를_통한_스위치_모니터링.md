---
summary: 프로메테우스, SNMP 를 통한 스위치 모니터링
created-date: 2025-12-03 10:34:06
last-modified-date: 2025-12-03 03:29:41
---

# Switch Monitoring 문서: SNMP + Prometheus 연동

이 문서는 스위치와 Prometheus 간 SNMP 통신을 위한 설정하는 방법을 설명한다.

---

## SNMP / SNMP_EXPORTER + Prometheus 연동하기
### 1. SNMP 패키지 설치 및 서비스 설정

SNMP 서비스를 설치하고, 부팅 시 자동 실행되도록 설정한다.

```shell
sudo yum install -y net-snmp net-snmp-utils 
sudo systemctl enable snmpd
sudo systemctl start snmpd
```

---

### 2. SNMP Exporter 설치 및 설정

SNMP Exporter를 다운로드하고 압축을 해제합니다.

```shell
cd /opt
wget https://github.com/prometheus/snmp_exporter/releases/download/v0.29.0/snmp_exporter-0.29.0.linux-amd64.tar.gz
tar -xzf snmp_exporter-0.29.0.linux-amd64.tar.gz
```

---

### 3. SNMP Exporter systemd 서비스 등록

- `/etc/systemd/system/snmp_exporter.service` 파일 수정
	```shell
	[Unit] 
	Description=SNMP Exporter  
	After=network.target
	
	[Service] 
	User=root 
	ExecStart=/opt/snmp_exporter-0.29.0.linux-amd64/snmp_exporter \
	--config.file=/opt/snmp_exporter-0.29.0.linux-amd64/snmp.yml 
	Restart=always 
	
	[Install] 
	WantedBy=multi-user.target
	```

---


---

### 4. SNMP Exporter 서비스 등록 및 기동

```shell
sudo systemctl daemon-reload 
sudo systemctl start snmp_exporter 
sudo systemctl status snmp_exporter
```


---

### 5. Prometheus 설정 파일 수정

`prometheus.yml`에 SNMP Exporter 타깃을 추가한다.


```shell
scrape_configs:
	...
	
  - job_name: 'snmp'
    scrape_interval: 120s
    scrape_timeout: 90s
    static_configs:
      - targets:
        - ${SERVER_IP}  # 스위치 IP
    metrics_path: /snmp
    params:
      auth: [public_v2]
      module: [if_mib]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: ${SERVER_IP}:9116  # SNMP Exporter가 실행되는 서버:포트
```

설정 적용 후 Prometheus 재시작:

```shell
sudo systemctl restart prometheus
```

---


# 트러블슈팅
## community 값 불일치로 인한 연결 문제 발생

- 아래 명령어로 테스트:
	```shell
	$ snmpwalk -v2c -c public ${SERVER_IP} 1.3.6.1.2.1.1 
	> No Resposne ...
	snmpwalk -v2c -c public ${SERVER_IP} 1.3.6.1.2.1.2
	> No Resposne ...
	```

- SNMP Exporter 설정에서 `auth.public_v2.community` 값을 `magma` 가 아닌 `public`  으로 설정하여 스위치로부터 응답을 받지못하는 경우가 발생함
    


