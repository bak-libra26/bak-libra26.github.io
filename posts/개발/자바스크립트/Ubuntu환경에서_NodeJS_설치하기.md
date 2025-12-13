---
summary: Ubuntu환경에서 NodeJS 설치하기
tags: 
references: 
created_date: 2025-07-26 22:45:36
last_modified_date: 2025-07-26 22:45:36
---
## 우분투에서 Node.js 설치하기

### 1. NodeSource 저장소 추가

```bash
curl -fsSL https://deb.nodesource.com/setup_24.4.1 | sudo -E bash -
```

### 2. Node.js 및 npm 설치

```bash
sudo apt-get install -y nodejs
```

### 3. 설치 확인

```bash
node -v
npm -v
```

---

> 다른 버전을 설치하려면 `setup_18.x` 부분을 `setup_20.x` 등으로 변경하면 됩니다.  
> 최신 LTS 버전은 [Node.js 공식 홈페이지](https://nodejs.org/)에서 확인할 수 있습니다.