---
summary: HTML 의 인라인, 내부, 외부 스타일이 무엇인지, 어떻게 사용하는지 알아보자.
tags:
  - HTML CSS 적용하기
  - HTML Cascading Style Sheet 적용하기 
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML에 자바스크립트를 포함하는 세 가지 방식(인라인, 내부, 외부)과 <script> 태그의 위치, defer/async 속성까지 함께 정리합니다

---

# HTML: 자바스크립트 추가하기

HTML과 CSS만으로 만들어진 웹 페이지는 사용자가 보게 되는 내용이 고정된 정적인 페이지지만
자바스크립트(JavaScript)를 추가하면 웹 페이지를 동적인 페이지로 만들 수 있습니다.
이번엔 HTML 안에 자바스크립트를 추가하는 인라인(Inline), 내부(Internal), 외부(Extenal) 방식이 무엇인지 정리해보겠습니다.


---

## HTML: 인라인 자바스크립트

인라인 자바스크립트는 **HTML 태그의 속성 안에 직접 자바스크립트 코드를 작성하는 방식**으로, 
주로 `onclick`, `onchange` 같은 이벤트 핸들러 속성에 간단하게 코드를 넣을 때 사용합니다. 

```html
<button onclick="alert('버튼을 클릭했습니다!')">
  클릭
</button>
```

간단하게 코드를 작성해서 동작을 테스트할 때 사용하나 HTML 과 CSS, 자바스크립트가 섞여 코드가 길어지면 읽기도 힘들고 수정 및 확장이 어려워지기 때문에 주의해서 사용해야합니다. 

---

## HTML: 내부 자바스크립트

내부 자바스크립트는 HTML 파일 안에 `<script>` 태그를 `<head>`나 `<body>` 안에 추가하고 안에 **자바스크립트 코드를 작성하는 방식**으로
자바스크립트 코드를 HTML 파일 한 쪽에 모아서 관리할 수 있습니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>내부 자바스크립트</title>
  </head>
  <body>
    <button id="btn">클릭</button>

    <script>
      const button = document.getElementById("btn");

      button.addEventListener("click", () => {
        alert("버튼을 클릭했습니다!");
      });
    </script>
  </body>
</html>
```

HTML 파일마다 자바스크립트 코드가 존재할 수 있기 때문에 HTML 파일이 많아지면 관리가 어렵고 코드 재사용하기가 어렵습니다.   

---

## HTML: 외부 자바스크립트

외부 자바스크립트는 자바스크립트 코드를 **별도의 `.js` 파일로 분리**하고 HTML에서 `<script src="...">`로 불러오는 방식입니다.  

- **`/scripts/main.js`:**
    ```javascript
    const button = document.getElementById("btn");
    const counter = document.getElementById("count");
    
    let count = 0;
    
    button.addEventListener("click", () => {
      count += 1;
      counter.textContent = count;
    });
    ```

- **`/index.html`:**
    ```html
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <title>외부 자바스크립트</title>
      </head>
      <body>
        <button id="btn">클릭</button>
        <p>클릭 횟수: <span id="count">0</span></p>
    
        <script src="./scripts/main.js"></script>
      </body>
    </html>
    ```

이 방식은 HTML과 스크립트가 분리되어 읽기 쉽고 수정 및 확장에 용이하며 자바스크립트 코드를 재사용하기 쉬우나 파일이 많아지면 번거로울 수 있습니다. 

---

## HTML: `<script>` 태그는 어디에 ?

일반적으로 `<script>` 태그는 `<head>` 에도, `<body>` 에도 둘 수 있으나, `<body>` 안에 넣을 떄는 `<body>` 맨 아래에 넣는 경우가 많습니다. 

---

### HTML: <script> 위치 별 실행 순서

  - **`<head>` 안**: HTML 파싱 전, 스크립트를 실행한다. 
  - **`<body>` 맨 아래**: DOM 요소들이 모두 생성된 후, 스크립트를 실행한다.

---

### HTML: `HTML5` 속성을 활용한 스크립트 로딩 방식 제어

HTML5 의 `defer`, `async` 와 같이 속성을 통해서 스크립트 로딩 방식을 제어할 수 있으나, **이는 모두 src가 있는 외부 자바스크립트 방식을 사용했을 때만 유효**합니다.  

- **`defer`**: HTML 파싱과 스크립트 다운로드를 병렬로 진행한 뒤, 파싱이 끝난 후 문서에 작성된 순서대로 스크립트를 실행한다.
  ```html
  <script defer src="main.js"></script>
  ```
  
- **`async`**: 스크립트를 HTML 파싱과 병렬로 다운로드하고, 다운로드가 끝나는 즉시 실행해서 실행 순서가 보장되지 않는다.
  ```html
  <script async src="analytics.js"></script>
  ``` 

---

## HTML: 언제 어떤 방식을 쓰면 좋을까?

| 방식  | 위치 | 특징                                |
|-----| --- |-----------------------------------| 
| 인라인 | 태그의 이벤트 속성 안 | 가장 단순하지만 HTML과 JS가 섞여 유지보수에 불리하다. | 
| 내부  | `<script>` 태그 안 | 파일 하나에서 빠르게 작성·테스트 가능하다.          | 
| 외부  | 별도 `.js` 파일 | 재사용성과 유지보수, 성능(캐싱)에 유리하다.         |  

---
