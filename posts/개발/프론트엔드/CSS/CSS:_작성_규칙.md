---
summary: CSS의 여러가지 작성 규칙을 정리해보았습니다.
tags:
  - CSS 작성 규칙
  - CSS Rules
  - CSS Ruleset
references:
created_date: 2026-02-12T23:09:52.000Z
last_modified_date: 2026-02-12T20:38:52.000Z
---

> 이 글에서는 CSS(Cascading Style Sheet)에서 작성 규칙에 대해 정리합니다.

---

# CSS: 작성 규칙

스타일이 인라인, 내부, 외부 어디에 작성되어 있든지 모두 같은 방식으로 작성해야 합니다. 
이번 글에서는 `CSS`에서 스타일을 작성할 때 따랴야 하는 규칙들을 먼저 정리하고,
작성한 스타일을 어떤 요소에 적용할지 선택하는 여러 가지 방법(셀렉터 종류)에 대해서 정리해보겠습니다.


> 인라인, 내부, 외부 스타일 방식에 대해 [알아보러 가기](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/CSS/CSS:_%EC%9D%B8%EB%9D%BC%EC%9D%B8%C2%B7%EB%82%B4%EB%B6%80%C2%B7%EC%99%B8%EB%B6%80_%EC%8A%A4%ED%83%80%EC%9D%BC)

## CSS: 스타일 규칙 기본 형태

```css
선택자(selector) {
    속성(property): 값(value);
    속성(property): 값(value);
}
```

- **선택자(`Selector`):** 스타일을 적용할 요소 지정
- **선언 블록(`Declaration Block`):** 중괄호(`{}`) 안에 들어가는 부분
- **속성(`Property`):** `color`, `font-size` 와 같은 속성, **"무엇을 바꿀지"에 해당**한다.
- **값(`Value`):** `red`, `16px` 와 같은 값, **"어떻게 바꿀지"에 해당**한다.


---

### 스타일 규칙: 한 규칙에 여러 개의 선언하기

```css
button {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}
```

같은 선택자(`button`)에 대해 여러 속성을 바꾸고 싶으면, 선언 블록 안의 선언을 여러 개 나열하면 되는데 이 때 세미콜론(`;`) 을 추가하는 것이 좋습니다.


---

### 스타일 규칙: 여러 선택자에 같은 스타일 적용하기

```css
h1,
h2,
h3 {
  font-family: system-ui, sans-serif;
  font-weight: 600;
}
```

여러 요소에 같은 스타일을 적용하고 싶으면, 선택자를 쉼표로 나열해서 한 번에 쓸 수 있습니다.


## CSS: 셀렉터 종류

이제 "어떤 요소에 적용할지"를 고르는 셀렉터(`Selector`)를 정리해보겠습니다. 

- **태그 선택자(`Tag Selector`):** HTML 태그 이름으로 요소를 선택할 때 사용합니다.
    ```css
    p {
      line-height: 1.6;
    }
    ```
- **ID 선택자(`ID Selector`):** 특정 하나의 요소를 선택할 때 사용합니다.
    ```css
    #header {
      background-color: #f5f5f5;
    }
    ```
- **클래스 선택자(`Class Selector`):** 여러 요소에 공통 스타일을 재사용할 때 사용합니다.
    ```css
    .primary {
      color: white;
      background-color: #007bff;
    }
    ```
- **속성 선택자(`Attribute Selector`):** 요소의 속성(attribute) 값에 따라 대상을 선택할 때 사용합니다.
    ```css
    input[type="text"] {
      border: 1px solid #ccc;
    }
    ```
- **전체 선택자(`Universal Selector`):** `*` 하나로 문서 안의 모든 요소를 선택할 때 사용합니다.
    ```css
    * {
      box-sizing: border-box;
    }
    ```


