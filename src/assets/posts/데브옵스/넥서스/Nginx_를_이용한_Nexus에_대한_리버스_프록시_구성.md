---
summary: 넥서스 도메인 적용해보기, Nginx를 이용한 리버스 프록시 구성
tags:
  - Nexus
  - Nginx
  - ReverseProxy
  - HTTPS
references: 
created_date: 2025-08-13T16:07:56.000Z
last_modified_date: 2025-08-13T16:07:56.000Z
id: e6bce62c-b94b-49f1-b46b-9d01b3fcde58
---



## 최신 버전 Maven 사용을 위한 Nexus 도메인 적용

- Maven에서 Nexus 도메인(`nexus.example.com` 등)으로 접근해야 최신 라이브러리 사용 가능

> Tips: 도메인 적용하면 의존성 파일 다운로드 안정적, 빌드 환경 일관성 확보

---

## Nginx로 도메인 네임 적용

- Nginx가 HTTPS 요청을 받아 Nexus가 실행 중인 포트로 안전하게 리버스 프록시함

### Nginx 설치

```bash
yum install nginx -y
systemctl status nginx   # 상태 확인
systemctl start nginx    # 실행
systemctl stop nginx     # 중지
systemctl restart nginx  # 재시작
```

- 로그: `/var/log/nginx/access.log`, `/var/log/nginx/error.log`
- 80 포트 접속으로 nginx 기본 페이지 확인
    

---

### Nginx 도메인/SSL 설정 (보안 적용)

- 설정파일: `/etc/nginx/conf.d/default.conf`
- 발급받은 SSL 인증서는 `/etc/nginx/ssl`에 저장
    
- `/etc/nginx/conf.d/default.conf`
	```nginx
	server {  
		listen 443 ssl http2;  
		server_name nexus.example.com;ssl_certificate /etc/nginx/ssl/certificate.crt;
		
		ssl_certificate_key /etc/nginx/ssl/private.key;
		ssl_protocols TLSv1.2 TLSv1.3;
	
		location / {
		          proxy_pass http://localhost:40000;
		          proxy_set_header Host $host;
		          proxy_set_header X-Real-IP $remote_addr;
		          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		          proxy_set_header X-Forwarded-Proto $scheme;
		}
	}
	```