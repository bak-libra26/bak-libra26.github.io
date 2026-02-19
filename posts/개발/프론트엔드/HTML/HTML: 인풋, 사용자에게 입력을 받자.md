---
summary: HTML 의 인풋(Input)에 대해서 알아보자.
tags:
  - HTML 인풋
  - HTML Input
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 사용자로부터 값을 어떻게 입력받을 수 있는 인풋(Input) 태그의 여러가지 속성, 타입에 대해 정리했습니다.

---

# HTML: Input

`input` 태그는 사용자로부터 텍스트, 이메일, 숫자 등의 여러가지 타입의 값을 입력받을 때 사용하는 HTML 태그입니다.


## Input: 여러가지 속성

- **`type`**: **어떤 형태의 데이터를 입력받을지를 결정**하는 속성.
  ```html
    <input type="email" />
    <input type="number" />
    ```
  
- **`name`**: 데이터의 고유 이름을 설정하는데 사용하는 속성.

  ```html
  <input type="text" name="username" />
  <input type="password" name="password" />
  ```
  
- **`value`**: `input` 태그가 현재 가지고 있는 값을 나타내는 속성. 기본값을 설정할 때도 사용된다.
  ```html
  <input type="text" name="nickname" value="baklibra" />
  ```
  
- **`placeholder`**: 예시/힌트 텍스트를 보여주는 속성. 실제 입력값은 아니며 값을 입력하면 사라진다.

  ```html
  <input
    type="text"
    name="username"
    placeholder="아이디를 입력하세요"
  />
  ```

- **`disabled`**: `input` 태그를 비활성화되어 클릭/입력이 불가능하며, 폼 전송 시 값이 전송되지 않는다.

  ```html
  <button type="submit" disabled>제출하기</button>
  ```
  
- **`required`**: 값 필수 여부를 나타내는 속성으로 값을 입력되지 않으면 브라우저가 기본으로 검증 메세지를 띄워준다. 

  ```html
  <input
    type="password"
    name="password"
    required
  />
  ```


## Input: 여러가지 타입

`input`의 `type` 값에 따라 텍스트, 비밀번호, 이메일 등 용도에 맞는 전용 입력 필드를 만들 수 있고, 브라우저가 각 타입에 맞는 UI와 기본 검증을 함께 제공해 줍니다.

---

### Input: 텍스트 타입

`text` 는 한줄 텍스트를 입력받을 때 사용하는 타입 속성입니다.

- **`text` 타입 예시**
  ```html
  <input type="text" />
  ```

---

### Input: 패스워드 타입

`password` 는 사용자 계정의 패스워드를 입력받을 때 사용하는 타입 속성으로, 입력 내용이 ●●● 으로 가려집니다. 

- **`password` 타입 예시**
  ```html
  <input type="password" />
  ```

---

### Input: 이메일 타입

`email` 은 이메일 정보를 입력받을 때 사용하는 타입 속성으로 이메일 형식 검증을 지원하고, 모바일에서 이메일 입력에 어울리는 키보드를 보여줍니다.

- **`email` 타입 예시**
  ```html
  <input type="email" />
  ```

---

### Input: 넘버 타입

`number` 는 숫자 정보를 입력받을 떄 사용하는 속성으로, 스핀 버튼이 표시되고 숫자가 아닌 값은 기본 검증에서 막히게됩니다.

- **`number` 타입 예시**
  ```html
  <input type="number" />
  ```

---

### Input: 체크박스 타입

`checkbox` 는 여러 값을 **다중 선택**으로 받는 타입으로, 각 체크박스는 체크 여부만 `true`/`false` 로 표현됩니다. 
같은 `name` 을 가진 `checkbox` 들 중 선택된 `checkbox` 의 `value` 가 서버로 **리스트처럼 묶여** 전송되며, 
폼이 `application/x-www-form-urlencoded` 로 전송될 때는 `stack=frontend&stack=backend` 같이 한 줄의 쿼리 스트링으로 인코딩됩니다. 


- **`checkbox` 예시**

  ```html
    <input type="checkbox" name="stack" value="frontend" />
    <input type="checkbox" name="stack" value="backend" />
    <input type="checkbox" name="stack" value="devops" />
  ```

---
### Input: 라디오 타입

`radio` 타입은 **여러 선택지 중에서 딱 하나만 고르게 할 때** 사용하는 타입으로,
같은 `name`을 가진 라디오 버튼들은 서로 연결되어 한 그룹이 되고, 그 그룹 안에서는 항상 하나 선택 또는 전부 해제 선택하도록 강제됩니다. 

- **`radio` 타입 기본 예시**
  ```html
  male: <input type="radio" name="gender" value="male" />
  female: <input type="radio" name="gender" value="female" />
  other: <input type="radio" name="gender" value="other" />
  ```

동일한 `name` 값을 가지는 `radio` 타읩의 `input` 은 **하나의 그룹**이 되고 사용자는 해당 그룹의 항목 중 **오직 하나만 선택**할 수 있습니다.  

---

### Input: 날짜/시간 타입

날짜·시간 관련 인풋 타입들은 브라우저가 **전용 피커 UI**를 띄워줍니다.
덕분에 사용자가 직접 형식을 맞춰 입력하지 않아도 되고, 기본적인 형식 검증도 함께 처리됩니다. 

- **`type="date"`: 날짜(년/월/일)를 선택하는 달력 UI.**
  ```html
    <input type="date" name="birthday" />
    <input type="time" name="meeting_time" />
    <input type="datetime-local" name="event_at" />
    ```
- **`type="time"`: 시/분(필요시 초)만 선택하는 시간 피커.**
  ```html
    <input type="date" name="birthday" />
    <input type="time" name="meeting_time" />
    <input type="datetime-local" name="event_at" />
    ```
  
- **`type="datetime-local"`: 날짜 + 시간까지 한 번에 선택하는 입력 필드.**
  ```html
    <input type="date" name="birthday" />
    <input type="time" name="meeting_time" />
    <input type="datetime-local" name="event_at" />
    ```

### Input: 파일 타입

`file` 는 이미지, 동영상과 같은 파일을 입력받을 때 사용하는 타입 속성입니다.

- **`file` 타입 예시**
  ```html
  <input type="file" />
  ```

---

## Input: `Label`과 함께

`input`만 둔다면 사용자가 어떤 값을 써야 하는지 알기 어렵기 때문에, 설명 텍스트를 함께 두는 것이 좋습니다. 
`label`은 **해당 인풋을 설명하는 텍스트**로, "이 칸에 어떤 값을 입력해야 하는지"를 명확하게 알려 줍니다.

- **`label` 사용 시 좋은 점**
  - `label`을 클릭해도 `input`에 포커스가 가기 때문에 클릭 영역이 넓어져 사용성이 좋아진다. 
  - 스크린 리더는 `input`에 포커스가 갈 때 `label`의 텍스트를 함께 읽어 줘서 접근성이 올라간다. 
  
---

### `Label`: `Input`을 감싸자

```html
<label>
  사용자 이름
  <input type="text" name="username" />
</label>
```

`label` 안에 `input`을 포함시키면 둘이 암묵적으로 연결되어, `label` 전체(텍스트 영역 포함)를 클릭해도 해당 `input`이 활성화됩니다.

---

### `Label`: `for`/`id` 속성과 `Input` 을 함꼐

```html
<label for="agree-terms">이용약관에 동의합니다</label>
<input id="agree-terms" type="checkbox" name="agree" />
```

`for`와 `id` 값을 맞추면, `label`과 `input`이 명시적으로 연결되며 `label`을 클릭해도 해당 `input`이 활성화됩니다.


## Input: Best Practice

1. 중요한 인풋에는 **가능하면 항상 `label`을 붙인다.**
2. 단순 스타일용 `<span>` 대신, 의미를 살릴 수 있도록 `label`로 필드 이름을 표시한다.
3. 체크박스·라디오는 **반드시 라벨과 함께 사용**해 선택 영역과 접근성을 확보한다. 
4. `placeholder`는 “설명”이 아니라 **예시 텍스트**로만 쓰고, 필드 이름은 `label`로 제공한다.
5. `for`와 `id`를 쓸 때는 페이지 내에서 **중복되지 않는 고유 `id`** 를 사용한다. 
6. 시멘틱 관점에서 “입력 필드”는 `input`, “필드의 이름/설명”은 `label`로 역할을 분리하는 것이 좋다.