---
summary: HTML 의 전역 속성(Standard Attributes) 에 대해서 알아보자.
tags:
  - HTML 전역 속성
  - HTML Standard Attributes
references: 
  - https://roadmap.sh/html
created_date: 2026-02-09T19:09:52.000Z
last_modified_date: 2026-02-09T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 전역 속성(Standard Attributes) 가 무엇이고 어떤 것들이 있는지 정리했습니다.

---

# HTML: 전역 속성(Standard Attributes)

전역 속성은 거의 모든 HTML 태그에서 공통으로 사용할 수 있는 속성들의 집합을 말합니다. 
특정 태그 전용인 `src`, `href` 같은 속성과는 다르게 전역 속성은 `div`, `span`, `button`, `input` 등 대부분의 요소에 공통으로 붙일 수 있습니다.

- **대표적인 전역 속성**
  - **`id`**: 요소를 문서 안에서 유일하게 식별할 수 있는 속성
  - **`class`**: 역할·그룹을 표현하고 스타일을 공유하는 속성
  - **`style`**: 인라인 스타일로 직접 CSS 작성할 떄 사용하는 속성
  - **`data-*`**: HTML에 정의되지 않은 커스텀 속성
  - **`tabindex`**: 탭(Tab)을 통한 키보드 포커스 이동 순서 제어 속성
  - **`title`**: 요소에 대한 툴팁(보조 설명) 제공하는 속성

---


## 전역 속성: `id`

**`id`** 는 문서 안에서 **해당 요소를 유일하게 식별하기 위한 이름표** 입니다.
`CSS`·`JavaScript`·`Anchor` 링크에서 특정 요소를 정확히 가리키기 위해 사용하기 때문에 하나의 HTML 문서에서 같은 `id`를 두 번 쓰지 않아야합니다. 

```html
<h1 id="page-title">HTML 전역 속성</h1>
<button id="submit-btn">저장</button>
```

- CSS: `#page-title`, `#submit-btn` 형태의 선택자로 스타일 지정한다.
- JavaScript: `document.getElementById('submit-btn')`으로 바로 요소에 접급한다. 


## 전역 속성: `class`


`class`는 요소가 어떤 **역할/그룹/상태에 속하는지 표현하는 라벨**이다. 여러 요소가 같은 클래스를 공유할 수 있으며 한 요소가 여러 클래스를 가질 수도 있습니다. 

```html
<p class="text-muted">부가 설명 텍스트</p>
<button class="btn primary">확인</button>
<button class="btn secondary">취소</button>
```

- 공통 스타일: `.btn`에 정의한다.
- 변형 스타일: `.primary`, `.secondary`로 역할에 따라 분리한다. 

스타일 재사용과 JavaScript에서 그룹 단위 선택(예: `document.querySelectorAll('.btn')`) 을 위해 가장 많이 쓰이는 전역 속성입니다. 


## 전역 속성: `style`

`style`은 요소에 **인라인으로 CSS를 직접 작성하는 전역 속성**입니다.

```html
<p style="color: #6b7280; font-size: 14px;">
  인라인 스타일 예시입니다.
</p>
```

특정 요소에 인라인으로 CSS 를 적용할 수 있기 때문에 빠르게 테스트 할 수 있으나 중복이 생길 수도 있고 유지보수가 어렵습니다. 

## 전역 속성: `data-*`

`data-*`는 HTML 표준에 정의되지 않은 **커스텀 데이터를 요소에 붙여두기 위한 전역 속성** 으로 이름은 반드시 `data-`로 시작해야 합니다. 

```html
<li
  class="todo-item"
  data-id="123"
  data-priority="high"
  data-completed="false"
>
  HTML 전역 속성 글 작성하기
</li>
```

`JavaScript` 로 `dataset`으로 읽을 수 있습니다.

```js
const item = document.querySelector('.todo-item');

item.dataset.id;        // "123"
item.dataset.priority;  // "high"
item.dataset.completed; // "false"
```

`data-*` 속성은 요소에 꼭 같이 기억해 두고 싶은 간단한 정보들을 붙여둘 때 쓰면 편하다.


## 전역 속성: `tabindex`

`tabindex`는 요소의 **키보드 Tab 포커스 이동 순서**를 제어하는 전역 속성입니다. 

- `양의 정수`: Tab 이동 순서를 명시적으로 지정한다.
- `0`: 기본 흐름에 포함하되, DOM 순서를 따른다.
- `-1`: `Tab`으로는 이동하지 않지만, JS로 포커스를 줄 수 있다.

```html
<button tabindex="1">첫 번째</button>
<button tabindex="3">세 번째</button>
<button tabindex="2">두 번째</button>
```

탭으로 요소를 선택할 수 있어 편리하지만 필요한 곳에 최소한으로 사용하는 것이 좋습니다. 


## 전역 속성: `title`

`title`은 요소에 대한 **보조 설명(툴팁)** 을 제공하는 전역 속성으로 많은 브라우저에서 마우스를 올리면 작은 말풍선 형태로 표시됩니다. 

```html
<button title="폼 데이터를 서버로 전송합니다.">
  제출
</button>
```

`title` 속성은 중요한 정보는 실제 텍스트나 ARIA 속성으로 제공하도록 하고 **이미 화면에 보이는 UI를 보충 설명하는 용도로 사용하는 것이 좋습니다.** 
