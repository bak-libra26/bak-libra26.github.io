---
summary: HTML 의 임베디드 미디어(Embedded Media) 에 대해서 알아보자.
tags:
  - HTML 임베디드 미디어
  - HTML Embedded Media
references: 
  - https://roadmap.sh/html
created_date: 2026-02-10T19:09:52.000Z
last_modified_date: 2026-02-10T20:38:52.000Z
---

> 이 글에서는 HTML에서 **이미지, 오디오, 비디오 같은 외부 미디어를 페이지 안에 넣는 방법**에 대해서 정리합니다. 

---

# HTML: 임베디드 미디어(Embedded Media)

**임베디드 미디어(Embedded Media)** 는 말 그대로 **“문서 안에 다른 미디어를 집어넣는다(임베드한다)”** 는 뜻입니다. 
텍스트만 있는 페이지가 아니라 그림, 음악, 영상, 외부 서비스 화면 등을 같이 보여주고 싶을 때 임베디드 미디어 태그들을 사용합니다.

- **임베디드 미디어 예시**
  - **이미지**: 사진, 아이콘, 썸네일 등: `<img>`
  - **오디오**: 배경 음악, 팟캐스트 플레이어 등: `<audio>`
  - **비디오**: 동영상 플레이어: `<video>`
  - **외부 페이지/서비스**: 유튜브, 지도, 다른 사이트 일부: `<iframe>`

---

## 임베디드 미디어: 이미지(`img`)

HTML 문서 안에 이미지를 넣고싶을 떄, `<img>` 태그를 사용합니다. 

- `img` 사용 예시
    ```html
    <img src="/images/cat.png" alt="의자 위에 앉아 있는 고양이" />
    ```

### `<img>` 속성

- `src`: 실제 이미지 파일 경로
- `alt`: 이미지가 깨지거나 스크린 리더를 사용할 때 대신 읽어 줄 설명 텍스트

`alt`는 접근성 측면에서 중요하므로 “이 이미지를 글로 설명하면 뭐라고 할지”를 간단히 적어주는 것이 좋습니다. 

---

## 임베디드 미디어: 소리(`audio`)

HTML 문서 안에 음악이나 효과음 같은 소리를 넣고싶을 떄, `<audio>` 태그를 사용합니다. 

- `audio` 사용 예시
    ```html
    <audio controls>
      <source src="/audio/bgm.mp3" type="audio/mpeg" />
      브라우저가 오디오 태그를 지원하지 않습니다.
    </audio>
    ```

### `audio` 속성

- `controls`: 재생/일시정지/볼륨 같은 기본 컨트롤 UI를 보여줌
- `source` 태그를 여러 개 두고, 다른 형식(mp3, ogg 등)을 함께 제공할 수도 있습니다. 

필요하면 `autoplay`, `loop`, `muted` 같은 속성으로 자동 재생, 반복 재생 여부도 제어할 수 있습니다. 

---

## 임베디드 미디어: 영상(`video`)

HTML 문서 안에 동영상을 직접 호스팅해서 보여주고 싶을 때, `<video>` 태그를 사용합니다.

- `video` 사용 예시
    ```html
    <video controls width="640">
      <source src="/video/sample.mp4" type="video/mp4" />
      브라우저가 비디오 태그를 지원하지 않습니다.
    </video>
    ```

### `video` 속성

- `controls`: 재생 컨트롤 표시
- `width`/`height`: 플레이어 크기 지정
- `poster`: 영상이 재생되기 전에 보여줄 썸네일 이미지 지정 가능

마찬가지로 `autoplay`, `loop`, `muted` 등을 함께 사용할 수 있지만, 자동 재생은 사용자 경험을 해칠 수 있어 신중하게 사용하는 게 좋습니다. 

---

## 임베디드 미디어: 외부 콘텐츠(`iframe`)

유튜브 영상, 지도, 다른 웹 서비스 화면을 그대로 가져와서 보여주고 싶을 때는 `<iframe>`을 사용합니다. 

- `iframe` 사용 예시
    ```html
    <iframe
      src="https://www.youtube.com/embed/동영상ID"
      width="560"
      height="315"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    ```

### `iframe` 속성

- `src`: 불러올 외부 페이지 주소
- `allowfullscreen`: 전체화면 허용
- `title`: iframe 안에 어떤 내용이 들어있는지 설명 (접근성용)

`iframe` 은 편리하지만 지나치게 사용하는 경우 성능에 좋지 않고 보안 정책(`CSP`, `X-Frame-Options` 등)에 막히는 경우도 있어서 필요한 곳에만 사용하는 것이 좋습니다. 

---

## 임베디드 미디어: 언제 사용할까?

- 글만으로 설명이 부족할 때, 이미지나 영상으로 이해를 돕고 싶을 때
- 튜토리얼/강의처럼 실제 화면이나 데모를 보여줄 필요가 있을 때
- 음악/팟캐스트/스트리밍 같은 **미디어 자체가 콘텐츠의 핵심**일 때 

만약 단순한 아이콘이나 장식용 요소를 추가애햐한다면 `CSS / background-image` 또는 `아이콘 폰트`/`SVG` 등으로 처리하는 경우도 많습니다. 

---
