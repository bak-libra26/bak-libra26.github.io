---
summary: GitHub Pages로 올린 개인 블로그에 댓글 기능을 붙이기 위해 Utterances, Disqus, Giscus 같은 도구들을 비교해 보고, 그중 Giscus를 선택한 이유와 실제 적용 방법을 정리한 글입니다. 
tags: 
references: 
created_date: 2026-03-01T15:09:52.000Z
last_modified_date: 2026-03-01T15:09:52.000Z
visibility: hidden
---

# 아키텍처



- login

    client(electron + vite + react) -> api-gateway -> auth

- chat
  
    client(electron + vite + react) -> api-gateway -> chat

- booting 

    api-gateway, auth, chat -> eureka

