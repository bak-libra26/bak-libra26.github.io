---
summary: 셀렉터(Selector) 기반 이벤트 루프 구조를 소개하고, OP_ACCEPT/READ/WRITE를 사용해 하나의 스레드로 여러 클라이언트 소켓을 관리하는 방법을 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2026-02-04 21:28:56
last_modified_date: 2026-02-04 21:28:56
visibility: hidden
---

> 이 글에서는 JDK 1.4 에 도입된 **java.nio** 의 **셀렉터(Selector)** 가 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# `java.nio`: 셀렉터(`Selector`)  

