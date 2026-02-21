---
summary: 블로그 글 상세 페이지에 사이드바 목차(TOC; Table Of Contents) 를 직접 붙인 과정 정리한 글입니다. 마크다운 본문에서 Heading(h2 ~ h4) 를 추출한 후, 목차를 만들어 목차 텍스트를 클릭하면 해당 헤딩 위치로 이동할 수 있도록 했습니다.
tags: 
references: 
created_date: 2026-02-16T15:09:52.000Z
last_modified_date: 2026-02-16T15:09:52.000Z
---

> 이 글은 블로그 글을 읽을 때 상단·사이드에 보이는 목차(TOC) 영역을 직접 구현하는 과정을 정리한 글입니다.


## 목차란 무엇인가?  

소제목(h2 ~ h4)이 많은 긴 글에서는 **목차(TOC)** 가 있느냐 없느냐에 따라 읽기 경험이 상당한 차이가 생기게 됩니다.
목차는 어떤 내용들이 있는지, 지금 내가 글의 어디쯤에 있는지를 한눈에 볼 수 있게하고 원하는 섹션으로 바로 이동했다가 다시 돌아오게 해주기 때문에
글이 더 읽기 편해지고, 블로그 자체도 조금 더 완성된 느낌을 줄 수 있습니다.

---

### 기본 원리

목차를 구현하는 가장 기본적인 방법은 `a` 태그의 `href` 속성으로 `h1 ~ h5` 같은 제목 태그의 `id`를 연결하는 것입니다. 
이렇게 연결해 두면 사용자가 링크를 클릭했을 때 브라우저가 자동으로 해당 제목 위치로 스크롤을 이동합니다.


```html
<h2 id="intro">intro</h2>
<a href="#intro">intro로 가기</a>
```

이 글에서도 목차를 만들 때 같은 원리를 사용하는데 이를 위해서 마크다운에서 제목들을 뽑아 `id`를 만들고, 그 `id`에 맞춰 `a` 태그의 `href`를 설정합니다.


---

## 블로그: 상세보기 페이지에 목차 만들기

> 중요! 목차가 제대로 동작하려면, 마크다운을 HTML로 변환할 때 각 `Heading`에 고유한 `id`를 설정해야 합니다.

이 글에서는 이미 변환된 HTML에 `id`가 들어가 있다는 것을 전제로 목차를 구현합니다. 
아직 마크다운을 HTML로 변환하지 않았거나, `id` 값을 추가하는 방법을 모르신다면 먼저 [블로그: 마크다운을HTML로 변환하기](https://bak-libra26.co.kr/posts/사이드%20프로젝트/블로그/블로그:%20마크다운을%20HTML로%20변환하기) 글을 보고 와주세요. 

- **`id` 속성이 설정된 HTML 파일**
   ```html
   ...
   <body>
      <h2 id="목차toc란-무엇인가" class="post-heading post-heading__h2">목차(TOC)란 무엇인가?</h2>
      ...
      <h3 id="목차toc-기본-원리" class="post-heading post-heading__h3">목차(TOC) 기본 원리</h3>
       ...
   </body>
   ```
  
---

### 목차: 컴포넌트 구성하기

이 글에서는 `<article>` 안에 본문을 담을 `<section>`과 사이드바를 위한 `<aside>` 를 분리하고, 사이드바(`<aside>`)에 목차를 배치하는 구조로 구현했습니다.

```jsx
import ReactMarkdown from "react-markdown";

const PostDetailPage = () => {
    const post = ...

    return (
        <>
            <article className={`...`}>
                
                {/* 글 본문 */}
                <section className={`...`}>
                    ...
                </section>

                {/* 사이드바: TOC 구현부 */}
                <aside className={`...`}>
                    ...
                </aside>

            </article>
        </>
    )
}
```

---

### 목차: 데이터 추출하기

목차에는 글 본문에 있는 `h2 ~ h4` 헤딩 텍스트가 그대로 들어가게 했습니다. 
그래서 마크다운을 파싱하던 `MarkdownUtil`에 `toc` 메서드를 하나 추가하고 글을 불러올 때 글 본문의 헤딩 텍스트를 추출했습니다

```javascript
import MarkdownUtil from "./markdown-util";

const MarkdownUtil = {
    toc({post}) {
       const content = post.content;
   
       const toc = [];
       
       // 정규식을 통한 Heading 추출
       const matches = content.matchAll(/^(#{2,5})\s+(.*)$/gm);
   
       for (const match of matches) {
           const hashes = match[1];      // hashes: "###"
           const level = hashes.length;  // level: 3
           const fullText = match[2];    // fullText: "[제목](#anchor)" 또는 "제목"
   
           const linkMatch = fullText.match(/^\[(.*?)\]\(.*?\)$/);
           const text = linkMatch ? linkMatch[1] : fullText.trim();
   
           // Heading 태그 `id` 에 들어갈 값  
           const slug = slugger.slug(text);
   
           toc.push({level, text, slug});
       }
   
       return toc;
   }
}
```

`MarkdownUtil.toc()`로 글 본문에서 헤딩에 대한 데이터를 `{ level, text, slug }` 형태로 추출했습니다.
이후 컴포넌트에서는 데이터를 받아서 `<a href={#${slug}}>{text}</a>` 형태로 목차를 렌더링했습니다.

- **추출 데이터 예시**
   ```json
   const toc = [
      {
         "level": 3,
         "text": "목차(TOC)란 무엇인가?"
         "slug": "목차toc란-무엇인가"
      },
      {
         "level": 3,
         "text": "목차(toc) 기본 원리"
         "slug": "목차toc-기본-원리"
      },
      ...
   ]
   ```

---

### 목차: 데이터 활용하기

목차를 만들기위해 `PostDetailToc` 라는 컴포넌트를 만들었고 내부에서 `MarkdownUtil.toc()`로 `{ level, text, slug }` 형태로 만든 데이터를 사용했습니다. 

```jsx
const PostDetailToc = ({ post }) => {
   const toc = MarkdownUtil.toc({post: post});
   ...
   
   return (
           <aside className="toc">
              <div className="toc__title">이 글의 목차</div>
              <nav className="toc__nav">
                 <ol className="toc__list">
                    {
                       toc.map((item, index) => {
                          const { level, text, slug } = item;

                          return (
                                  <li key={slug} className={`toc__item toc__item--h${level}`}>
                                     <a href={`#${slug}`} className="toc__link">
                                        {text}
                                     </a>
                                  </li>
                          );
                       })
                    }
                 </ol>
              </nav>
           </aside>
   );
};
```

만약 적절한 `slug` 값을 `href` 에 할당하면, 이걸 클릭 했을 때 해당 `Heading`으로 화면이 이동합니다. 
저는 목차를 좀 더 예쁘게 만들기위해서 `toc__item--h2`, `toc__item--h3`와 같이 레벨별로 다른 클래스명을 부여해줬습니다.

---


### 목차: 마무리

```jsx
import ReactMarkdown from "react-markdown";

const PostDetailPage = () => {
    const post = ...

    return (
        <>
            <article className={`...`}>
                
                {/* 글 본문 */}
                <section className={`...`}>
                    ...
                </section>

                {/* 사이드바: TOC 구현부 */}
                <aside className={`...`}>
                    <PostDetailToc post={post} />
                </aside>

            </article>
        </>
    )
}
```

이렇게 구성하면 별도의 수작업 없이 자동으로 목차를 생성하고 사이드바에 표시되는 구조를 만들 수 있습니다

---
