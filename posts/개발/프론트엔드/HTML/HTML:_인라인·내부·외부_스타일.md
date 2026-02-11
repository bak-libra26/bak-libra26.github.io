---
summary: HTML 의 인라인, 내부, 외부 스타일이 무엇인지, 어떻게 사용하는지 알아보자.
tags:
  - HTML CSS 적용하기
  - HTML Cascading Style Sheet 적용하기 
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language)에서 인라인, 내부, 외부 스타일이 무엇인지와 각각을 어떻게 사용하는지 정리합니다.

---

# HTML: 인라인·내부·외부 스타일

HTML 요소에 스타일을 입히는 방법은 인라인(Inline), 내부(Internal), 외부(External) 방식이 존재합니다.
이 글에서는 각 방식이 무엇인고 언제 어떤 방식을 선택하면 좋은지 정리해보겠습니다.

## HTML: 인라인 스타일

**인라인 스타일(Inline Style)** 은 **"HTML 태그 안에 스타일을 직접 지정하는 방식"** 으로 바로 스타일을 주고 확인할 수 있어서 작은 수정이나 테스트해보기에 좋습니다.

```html
<html>
    <head></head>
    <body>
    <div style="width: 100%; background-color: red">
        inline style...
    </div>
    </body>
</html>
```

HTML 태그 `style` 속성을 사용해서 코드가 금방 지저분해지고, 일일이 복사·수정해야해 재사용이 어렵습니다.
그리고 CSS 의 상속과 우선순위를 제대로 활용하기 어렵고, 스타일 재사용이 거의 불가능하다.

---


## HTML: 내부 스타일

**내부 스타일(Internal Style)** 은 **HTML 파일의 `<head>` 태그 안에 `<style>` 태그를 두고, 그 안에 CSS 코드를 모아두는 방식**으로,
하나의 HTML 문서 안에서 공통 스타일을 관리할 수 있어서, 인라인 스타일보다 구조가 훨씬 깔끔합니다.

```html
<html>
    <head>
        <style>
            .container {
                width: 100%;
                background-color: red;
            }
        </style>
    </head>
    <body>
        <div class="container">
            inline style...
        </div>
    </body>
</html>
```

---


## HTML: 외부 스타일

**외부 스타일(External Style)** 은 **별도의 `.css` 파일을 만들고, HTML에서 `<link>` 태그로 그 파일을 불러오는 방식**으로,
여러 HTML 문서가 하나의 CSS 파일을 공유할 수 있어 유지보수와 확장성 측면에서 가장 좋고 색상, 폰트, 레이아웃 같은 디자인 규칙을 한 곳에서 정의하고 필요할 때마다 여러 페이지에서 재사용할 수 있습니다.

- `/styles/index.css`
    ```css
    .container {
        width: 100%;
        background-color: red;
    }
  
    p {
      color: blue;
    }
    ```

- `/index.html`
    ```html
    <html>
        <head>
            <link rel="stylesheet" href="./style/index.css"/>
        </head>
        <body>
            <div class="container">
                inline style...
            </div>
  
            <p>paragraph...</p>
        </body>
    </html>
    ```



---

## HTML: 인라인·내부·외부 스타일 정리

| 방식       | 위치                   | 장점 | 단점                            |
|----------|----------------------| --- |-------------------------------|
| **인라인 스타일** | **태그의 `style` 속성**       | 요소 하나만 빠르게 수정 가능 | HTML이 지저분해지고 재사용·유지보수가 어렵다    |
| **내부 스타일** | **`<head>` 안 `<style>`** | 한 문서 안에서 공통 스타일 관리 | 여러 페이지에서 공유해서 사용하기 어렵다        |
| **외부 스타일** | **별도 `.css` 파일**         | 여러 문서에서 공유, 유지보수에 유리 | 상황에 따라 파일 분리가 오히려 번거로울 수 있다 |

