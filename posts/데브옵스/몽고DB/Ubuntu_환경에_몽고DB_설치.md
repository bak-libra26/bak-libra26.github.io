---
tags:
  - Ubuntu
  - MongoDB
references: 
created_date: 2025-07-26 19:10:26
last_modified_date: 2025-07-26 19:10:26
---

- 필수 패키지 설치
	```shell
	sudo apt-get install gnupg curl
	```

- **MongoDB GPG** **키** **추가**
	```shell
	curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
	  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
	  --dearmor
	```

- **MongoDB 저장소** 추가
	```shell
	%% Ubuntu 20.04 %%
	echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
	```


- 패키지 업데이트 및 MongoDB 설치
	```shell
	sudo apt-get update
	sudo apt-get install -y mongodb-org
	```

- MongoDB 서비스 시작 및 부팅 시 자동 실행
	```shell
	sudo systemctl start mongod
	sudo systemctl enable mongod
	```

- MongoDB 상태 확인
	```shell
	sudo systemctl status mongod
	```