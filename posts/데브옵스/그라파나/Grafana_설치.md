---
summary: 그라파나 설치해보자
created-date: 2025-12-02 01:19:28
last-modified-date: 2025-12-02 02:42:17
---
# Grafana 설치

---

## 1. Grafana 저장소 추가함

Grafana 패키지를 설치하기 위해 공식 YUM 저장소를 등록.

1. 리포지토리 설정 파일 생성함.
	- 파일 경로: `/etc/yum.repos.d/grafana.repo`
	- 내용 예시는 다음과 같음.
		```shell  
		sudo tee /etc/yum.repos.d/grafana.repo << EOF  
		[grafana] name=grafana  
		baseurl=https://rpm.grafana.com  
		repo_gpgcheck=1  
		enabled=1  
		gpgcheck=1  
		gpgkey=https://rpm.grafana.com/gpg.key  
		EOF  
		```
2. 위 설정을 통해 dnf가 Grafana 패키지를 공식 저장소에서 가져올 수 있도록 구성했음.
    

---

## 2. Grafana 패키지 설치함

1. 패키지 설치 명령 실행함.
	- 실행 명령:
	    - `sudo dnf install grafana -y`

2. dnf가 의존성 패키지와 함께 Grafana를 시스템에 설치함.
3. 설치 완료 후 `/usr/sbin/grafana-server` 바이너리가 배포되고, 서비스 유닛 파일이 함께 등록됨.​
    

---

## 3. Grafana 서비스 활성화 및 기동함

1. 부팅 시 자동 실행 설정함.
	- 실행 명령:
	    - `sudo systemctl enable grafana-server`
	- 시스템 부팅 시 grafana-server 서비스가 자동으로 시작되도록 설정됨.​

2. 즉시 서비스 기동함.
	- 실행 명령:
	    - `sudo systemctl start grafana-server`
	- Grafana HTTP 서버가 기본 포트 3000에서 대기 상태로 진입함.​
3. 중복된 start 명령은 하나만 있어도 충분하므로, 실제 문서에서는 한 번만 사용하는 것을 권장함.
    

---

## 4. 웹 UI 접속함

1. 서비스 기동 후 브라우저에서 아래 주소로 접속함.
	- URL: `http://1.235.104.73:3000`
2. 기본 로그인 계정은 guest / guest 이며, 최초 로그인 시 비밀번호 변경을 요구함.​
3. 외부에서 접속할 경우, 방화벽 또는 보안 그룹에서 TCP 3000 포트가 허용되어 있는지 확인해야 함.