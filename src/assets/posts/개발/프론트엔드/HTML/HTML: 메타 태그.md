---
summary: HTML 의 메타 태그(Meta Tag)에 대해서 알아보자.
tags:
  - HTML 메타 태그
  - HTML Meta Tag
references:
created_date: 2026-02-11T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language)에서 메타 태그가 무엇이고, 어떤 것들이 있는지 정리합니다.

---



# HTML: 메타 태그

**메타 태그(`Meta Tag`)** 는 HTML 문서의 `<head>` 태그 안에 위치하며, **브라우저와 검색 엔진에게 "이 페이지를 어떻게 이해해야 하는지"에 대한 추가 정보(메타데이터)를 제공**합니다.
사용자는 이 정보를 화면에서 직접 보지 못하지만, 검색 결과에서의 노출, 모바일 렌더링, 소셜 공유 미리보기 등 여러 측면에서 중요한 역할을 합니다.

---

## 메타 태그: 주요 속성 


  - **`charset`**: 문서의 문자 인코딩을 명시합니다.
  - **`name`**: 메타 데이터의 종류를 나타냅니다.
  - **`http-equiv`**: HTTP 헤더와 유사한 정보를 메타 태그로 전달할 때 사용합니다.
  - **`content`**: `name`이나 `http-equiv`로 지정한 항목의 실제 값을 적는 곳입니다.

---

## 메타 태그: 여러가지 메타 태그


### 타이틀(`title`):

타이틀(`title`) 은 `브라우저의 탭 제목`과 검색 엔진의 `검색 결과 제목`으로 사용되며, 50 ~ 60 자 이내의 길이로 키워드가 자연스럽게 포함되도록 작성하는 것이 좋습니다. 
만약 사이트 이름이 들어가야한다면 "페이지 제목 | 사이트 이름" 형식으로 작성하는게 좋습니다.

- **타이틀(`title`) 예시**
    ```html
    <title>HTML: 메타 태그와 SEO</title>
    ```


---

### 설명(`description`):

설명(`description`)은 검색 결과에서 제목 아래에 표시되는 요약 텍스트로 120 ~ 160자 이내의 길이로 작성하는 것이 좋습니다.

- **설명(`description`) 예시**
    ```html
    <meta name="description"
          content="HTML에서 메타 태그와 SEO가 무엇이고, 실제 페이지에 어떻게 적용하는지 정리한 글입니다."/>
    ``` 


---

### 문자 인코딩(`charset`):

문자 인코딩(`charset`)은 HTML 문서가 작성된 문자 인코딩 방식을 나타내는 메타 태그로 `UTF-8`이 권장되고 `charset`이 없거나 잘못되면 한글과 특수문자가 깨져보입니다.

- **문자 인코딩(`charset`) 예시**
    ```html
    <meta charset="UTF-8" />
    ```

---

### 뷰포트(`viewport`):

뷰포트(`viewport`)는 모바일 기기에서 페이지를 어떻게 표시할지 지정하는 메타 태그로 이 태그가 없으면 모바일에서 데스크톱 화면이 축소되어 보기 불편합니다.


#### **뷰포트(`viewport`):** 여러가지 속성 값

| 속성 | 값 | 설명 |
|------|-----|------|
| **width** | `device-width` | 페이지 너비를 기기의 실제 화면 너비에 맞춤 |
| **height** | `device-height` | 페이지 높이를 기기의 실제 화면 높이에 맞춤 (거의 사용하지 않음) |
| **initial-scale** | `1.0` | 페이지 첫 로딩 시 확대/축소 비율 (1.0 = 100%) |
| **minimum-scale** | `0.5` | 사용자가 축소할 수 있는 최소 비율 |
| **maximum-scale** | `2.0` | 사용자가 확대할 수 있는 최대 비율 |
| **user-scalable** | `yes` | 사용자가 확대/축소 가능 (기본값) |


#### **뷰포트(`viewport`):** 여러가지 예시

- **반응형 웹처럼**
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ```

- **보수적인 설정 (확대 범위 제한)**
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    ```

- **모바일 앱처럼**
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    ```


---

### 로봇(`robots`):


로봇(`robots`) 는 검색 엔진 크롤러가 이 페이지를 어떻게 처리해야 하는지 지시하는 메타 태그로 크롤러의 인덱싱, 캐싱, 링크 추적 등을 제어할 수 있습니다.


- **로봇(`robots`) 예시**
    ```html
    <meta name="robots" content="index, follow" />
    ```


#### 로봇(`robots`): 여러가지 속성 값

| 값                       | 설명                            |
| ----------------------- | ----------------------------- |
| noarchive               | 검색 엔진이 캐시본을 만들지 않도록 함         |
| nocache                 | noarchive와 동일                 | 
| nosnippet               | 검색 결과에서 페이지 설명(snippet) 표시 금지 |
| noimageindex            | 이 페이지의 이미지를 검색 결과에 표시 금지      |
| max-snippet:-1          | 스니펫 길이 제한 (문자 단위)             | 
| max-image-preview:large | 이미지 미리보기 크기 제한                |
| max-video-preview:-1    | 비디오 미리보기 길이 제한 (초 단위)         |

---

### 캐노니컬(`canonical`):

캐노니컬(`canonical`) 은 완전히 같은 내용이 여러 URL로 접근 가능할 때, "대표 페이지 URL"을 검색 엔진에 알려주는 메타 태그입니다.

- **캐노니컬(`canonical`) 예시**
    ```html
    <link rel="canonical" href="https://example.com/posts/html-meta-and-seo" />
    ```

---

## 메타 태그: Open Graph (OG)

`Open Graph`는 카카오톡, 페이스북, 링크드인 등 소셜 미디어에서 페이지를 공유할 때 어떤 제목·설명·이미지를 표시할지 제어하는 메타 태그입니다.


### Open Graph: 여러가지 속성

| 속성                 | 값                                         | 설명                                                                          | 
| ------------------ |-------------------------------------------|-----------------------------------------------------------------------------| 
| og:title           | 텍스트(최대 70자)                               | 공유 카드의 제목, 포스트 제목과 동일하게                                                     | 
| og:description     | 텍스트(최대 160자)                              | 공유 카드의 설명, 페이지 요약 설명                                                        | 
| og:type            | article, website, video, music 등          | `article`: 블로그 글, 뉴스, `website`: 일반 웹사이트, `video`: 비디오 콘텐츠, `music`: 음악 콘텐츠 |
| og:url             | URL(절대 URL)                               | 공유 카드가 가리키는 현재 페이지의 절대 URL(https://...), `canonical`과 동일하게                  | 
| og:image           | 이미지 URL(최소 1200x630px)                    | 공유 카드의 썸네일 이미지                                                              | 
| og:image:width     | 숫자(픽셀)                                    | og:image의 너비(px)                                                            | 
| og:image:height    | 숫자(픽셀)                                    | og:image의 높이(px)                                                            | 
| og:site_name       | 텍스트                                       | 사이트의 이름으로 공유 카드에 표시됨                                                        | 
| og:locale          | 언어 코드(예: ko_KRen_US)                      | 페이지의 언어 및 지역(`ko_KR`: 한국어, `en_US`: 미국 영어, `ja_JP`: 일본어, `fr_FR`: 프랑스어)     | 
| og:author          | URL 또는이름                                  | 콘텐츠 작성자- 작성자 이름- 또는 작성자 프로필 URL- 다중 작성자 가능                                  |
| og:published_time  | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 발행 날짜(ISO 8601 형식), `article` 타입일 때 권장                                  |
| og:modified_time   | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 마지막 수정 날짜(ISO 8601 형식), `published_time`보다 최신                           |
| og:expiration_time | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 만료 시간(ISO 8601 형식), 이벤트, 시간 제한 콘텐츠로 이 날짜 이후로는 유효하지 않음                   |
---

## 메타 태그: Twitter Card

`Twitter Card`는 트위터에서 링크를 공유할 때 어떻게 표시할지 제어하는 메타 태그입니다.


### Twitter Card: 여러가지 속성

| 속성(`name`)            | 값(`content`)                         | 설명                                          |
|---------------------|--------------------------------------|---------------------------------------------|
| twitter:card        | `summary`, `summary_large_image`, `player` | 카드 타입 지정                                 |
| twitter:title       | 텍스트(최대 70자)                          | 카드에 표시될 제목                                  |
| twitter:description | 텍스트(최대 200자)                         | 카드에 표시될 설명                                  |
| twitter:image       | 이미지 URL(최소 506x506px)                | 카드에 표시될 이미지(`summary`, `summary_large_image`) |
| twitter:creator     | @트위터계정(예: @baklibra26)               | 글 작성자의 트위터 계정                               |
| twitter:site        | @트위터계정(예: @dev_baklibra26)           | 공식 사이트/회사 공식 트위터 계정                     | 

---



## 메타 태그: 검증 도구

- **검증 도구란?** 

  작성한 메타 태그를 점검하는 온라인 도구들입니다.

- **왜 필요할까?**

  메타 태그를 잘못 작성하지는 않았는지, 카카오톡·페이스북·트위터 등 소셜 미디어에서 페이지가 어떻게 미리보기되는지 확인하고, 검색 엔진이 페이지를 제대로 인식하는지 점검하고, `viewport` 설정이 모바일에서 정상 작동하는지 검증할 수 있습니다.

---

### 검증 도구: Google Search Console
- **용도:** 페이지 색인 상태, SEO 기본 점검
- **접속:** https://search.google.com/search-console
- **확인 항목:** 색인 여부, 모바일 친화성, `robots` 메타 태그 충돌

---

### 검증 도구: Facebook Debugger
- **용도:** Open Graph 메타 태그 검증
- **접속:** https://developers.facebook.com/tools/debug/
- **확인 항목:** `og:title`, `og:description`, `og:image` 정상 인식, 미리보기 표시

---

### 검증 도구: Twitter Card Validator
- **용도:** `Twitter Card` 메타 태그 검증
- **접속:** https://cards-dev.twitter.com/validator
- **확인 항목:** 카드 타입, 이미지 크기 (최소 506x506px), 텍스트 길이

---

### 검증 도구: PageSpeed Insights
- **용도:** viewport 설정, 모바일 최적화, 성능 검증
- **접속:** https://pagespeed.web.dev/
- **확인 항목:** 모바일 점수 (75점 이상), 페이지 로딩 속도

---

### 검증 도구: Markup Validator

- **용도:** HTML 문법 및 메타 태그 구문 검증
- **접속:** https://validator.w3.org/
- **확인 항목:** 문법 에러, 중복 속성, 닫히지 않은 태그

---
