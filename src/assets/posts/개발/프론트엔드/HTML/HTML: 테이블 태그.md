---
summary: HTML 의 테이블(Table) 태그 에 대해서 알아보자.
tags:
  - HTML 테이블 태그
  - HTML Table Tag
references: 
  - https://roadmap.sh/html
created_date: 2026-02-10T19:09:52.000Z
last_modified_date: 2026-02-10T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 테이블(Table)을 표현할 때 사용하는 태그들을 정리합니다.

---


# HTML: 테이블

HTML에서 테이블은 **행과 열로 이루어진 표 형식 데이터**를 표현할 때 사용하며
엑셀 표, 통계 데이터, 시간표, 가격표처럼 “격자 형태로 정리된 정보”를 보여주고 싶을 때 테이블을 사용합니다. 

---

## HTML: 테이블의 기본 구조

가장 기본적인 테이블 구조는 아래 네 가지 태그로 이루어집니다. 

- `table`: 전체 표를 감싸는 컨테이너
- `tr` (table row): 행(row)을 나타내는 태그
- `td` (table data): 일반 셀(데이터 셀)
- `th` (table header): 헤더 셀(열 제목/행 제목)

```html
<table>
  <tr>
    <th>이름</th>
    <th>직무</th>
  </tr>
  <tr>
    <td>홍길동</td>
    <td>백엔드 개발자</td>
  </tr>
  <tr>
    <td>김코딩</td>
    <td>프론트엔드 개발자</td>
  </tr>
</table>
```

`th`는 기본적으로 **굵게 + 중앙 정렬**이 적용되고, 스크린 리더에서도 “헤더”로 인식되어 어떤 열/행과 연결된 데이터인지 이해하기 쉽습니다. 


## HTML: 테이블 구조 나누기

표가 복잡해지는 경우, 머리글·본문·요약 부분을 나누어 두는게 좋습니다. 이때 사용하는 태그가 `thead`, `tbody`, `tfoot` 입니다. 

- `thead`: 헤더 영역(컬럼 제목 등)
- `tbody`: 실제 데이터가 들어가는 본문 영역
- `tfoot`: 합계, 요약 정보가 들어가는 푸터 영역

```html
<table>
  <thead>
    <tr>
      <th>상품명</th>
      <th>수량</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>마우스</td>
      <td>1</td>
      <td>30,000원</td>
    </tr>
    <tr>
      <td>키보드</td>
      <td>1</td>
      <td>70,000원</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">합계</td>
      <td>100,000원</td>
    </tr>
  </tfoot>
</table>
```

위와 같이 나누면 `CSS`에서 각 부분을 따로 스타일링하기도 쉽고, `DOM`을 다룰 때도 구조가 명확해집니다. 


## HTML: 테이블 셀 병합

**하나의 셀을 여러 칸에 걸쳐 합치고 싶은 경우**가 있습니다. 
이때 쓰는 속성이 `rowspan`과 `colspan` 입니다. 

- `rowspan`: 세로 방향(행)으로 몇 줄을 합칠지
- `colspan`: 가로 방향(열)으로 몇 칸을 합칠지

```html
<table>
  <tr>
    <th rowspan="2">날짜</th>
    <th colspan="2">근무 시간</th>
  </tr>
  <tr>
    <th>입근</th>
    <th>퇴근</th>
  </tr>
  <tr>
    <td>2월 11일</td>
    <td>09:00</td>
    <td>18:00</td>
  </tr>
</table>
```

셀 병합을 사용할 때는 행/열 개수가 맞지 않아서 레이아웃이 깨지지 않도록 구조를 잘 맞춰 주는 것이 중요합니다. 


## HTML: `<table>`를 남용하면 안 되는 경우

**레이아웃용으로 `<table>`을 쓰는 것** 에 주의해야하며,
그리드나 카드 레이아웃은 `CSS Flexbox`, `Grid`로 해결하고 표 태그는 진짜 "표 데이터"일 때만 쓰는 것이 좋습니다. 

- 레이아웃 → `div` + `CSS(Flex, Grid)`
- 진짜 표 데이터 → `table`, `tr`, `th`, `td`

레이아웃과 표를 만들 떄 위와 같이 역할을 나누면 HTML 구조가 훨씬 더 간결해지고, 유지보수도 쉬워집니다. 
