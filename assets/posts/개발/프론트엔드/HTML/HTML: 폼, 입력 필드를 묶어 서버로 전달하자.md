---
summary: HTML 의 폼(Form)에 대해서 알아보자.
tags:
  - HTML 폼
  - HTML Form
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 의 폼(`form`)이 무엇인지, 인풋(`input`)과 어떻게 함께 동작해서 서버로 데이터를 전송하는지 정리했습니다.

---

# HTML: 폼(`Form`)

HTML 폼(`form`) 태그는 웹 페이지에서 사용자가 `input`을 통해 입력한 입력 값을 어플리케이션 서버로 전송하는 역할을 수행하며,
아래와 같이 작성할 수 있습니다.

```html
<form>
  <!-- 여기 안에 input, textarea, select 등이 들어갑니다 -->
</form>
```

## 폼(`Form`): 여러가지 속성

- **`action`**: 입력 값을 전송할 URL 을 지정할 때 사용하는 속성 
  ```html
  <form action="http://localhost:8080/">
    <!-- input, textarea, select ... -->
  </form>
  ```
- **`method`**: `get`, `post` 등 HTTP 메서드를 지정할 떄 사용하는 속성
  ```html
  <form method="post">
    <!-- input, textarea, select ... -->
  </form>
  ```
- **`enctype`**: 데이터 인코딩 방식 지정할 때 사용하는 속성

  - **`application/x-www-form-urlencoded`**: 기본 값으로 `name=value&name2=value2` 형태로 인코딩되어 전송된다.
    ```html
    <form method="post" enctype="application/x-www-form-urlencoded">
      <!-- input, textarea, select ... -->
    </form>
    ```


  - **`multipart/form-data`**: 파일 업로드 시 사용
    ```html
    <form method="post" enctype="multipart/form-data">
      <!-- input, textarea, select ... -->
    </form>
    ```

---

## 폼(`Form`): 전송이 일어나는 순간

`input`에 값만 채워 두면 아무 일도 일어나지 않고, "제출 동작"이 있어야 서버로 요청을 전송할 수 있습니다. 
폼 안의 `type="submit"` 버튼을 클릭할 때 브라우저가 `action`·`method`·`enctype` 정보를 읽고 서버로 요청을 보냅니다. 

- `form` 데이터 전송 예시
  ```html
  <form action="http://localhost:8080/" method="post">
    <input type="text" name="username" />
    <button type="submit">전송</button>
  </form>
  ```

---

### 버튼(`button`): 데이터 전송하기

- **`submit`**: 폼을 전송하는 버튼, `type`을 안 쓰면 기본이 `submit`이라 클릭 시 폼이 제출됩니다.
  ```html
  <button type="submit">전송</button>
  ```
  
- **`reset`**: 폼 안 모든 입력값을 처음 상태로 되돌릴 뿐 서버 요청은 보내지 않습니다.
  ```html
  <button type="reset">초기화</button>
  ```
  
- **`button`**: 아무 기본 동작이 없는 버튼, 자바스크립트로 클릭 이벤트를 함께 사용해야합니다.
  ```html
  <button type="button">그냥 버튼</button>
  ```

---

## 폼(`Form`): 검증과 제한

> 제출 시점이냐, 입력 시점이냐에 따라 검증과 제한으로 나뉩니다.

- **검증(`Validation`)**: 제출 직전에 값이 규칙에 맞는지 검사해서, 틀리면 브라우저가 경고를 띄우고 제출을 막습니다. 
- **제한(`Limitation`)**: 잘못된 값이 애초에 입력되지 않도록, 입력 가능한 값의 범위와 방식 자체를 제한합니다.


---

### 검증과 제한: 예시를 통한 이해

- **`type="number"`, `type="email"`**: 해당 타입 형식인지 검사해 형식이 맞지않으면 제출 시 에러 발생
- **`required`**: 값을 비워 두면 제출 안 됨
- **`max`, `min`**: 숫자의 최대·최소 범위를 제한하고, 범위를 벗어나면 제출 시 에러 발생
- **`maxlength`**, `minlength`: 글자 수를 제한하고, 너무 짧거나 길면 제출 시 에러 발생
- **`readonly`**: 값은 보이지만 수정은 안 됨
- **`disabled`:** 완전히 비활성화, 폼 전송 시 이 필드는 아예 전송 안 됨
- **`step`**: 0, 10, 20처럼 일정 간격 값만 선택·입력하도록 제한



