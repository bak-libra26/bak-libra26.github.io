---
summary: 이 글은 마크다운으로 작성한 블로그 글을 `ReactMarkdown`과 플러그인을 활용해 HTML로 렌더링한 과정을 정리한 글입니다. 글 상세 페이지에 `ReactMarkdown` 을 사용해서 Heading·코드 블록·이미지를 블로그에 맞게 커스터마이징하는 방법을 정리했습니다.
tags: 
references: 
created_date: 2026-02-15T15:09:52.000Z
last_modified_date: 2026-02-15T15:09:52.000Z
---

> 깃허브 페이지 기반 개인 블로그에서, 마크다운으로 작성한 글을 HTML 로 렌더링한 과정을 정리했습니다.


---

## 포스트 데이터 가져오기

글 상세 페이지는 `/posts/{post.path}` 형태의 URL로 접근하는데 이 때 인코딩된 URL을 `decodeURIComponent`로 디코딩하고 `/posts/` 뒤에 오는 문자열을 잘라 글을 조회하는 데 사용했습니다.

```jsx
const PostDetailPage() {
    const location = useLocation();

    const pathname = decodeURIComponent(location.pathname);
    const path = pathname.split('/posts/')[1];

    const post = PostUtil.findByPath({path: path});
    
    return (
        ...
    );
}
    
export default PostDetailPage;
```


## 마크다운 텍스트를 HTML 로 변환하기

마크다운을 HTML 로 렌더링하면서, 먼저 손봤던 부분은 세 가지입니다.

- **Heading (h1 ~ h4):** 나중에 목차(TOC)를 만들 때 활용할 수 있게 커스터마이징 했습니다.
- **Code 블록:** 글의 특성상 코드 예제가 많아서, 하이라이트 기능과 좀 더 예쁜 코드 블록을 만들기 위해 커스터마이징 했습니다.
- **이미지:** 이미지의 경로를 잘 찾아오기 위해서 경로를 변환해 올바른 URL 로 렌더링되게 커스터마이징 했습니다.

---

### 글 상세 페이지 레이아웃 잡기

마크다운을 HTML 로 렌더링하기 전에, 먼저 글 상세 페이지의 전체 레이아웃을 다음과 같은 형태로 잡았습니다.
글의 본문을 보여주는 부분과 추후 목차(TOC) 를 보여줄 사이드바를 나누고, 본문 영역 안에서 `ReactMarkdown` 이 마크다운을 렌더링하는 구조로 설정했습니다.


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
                    <ReactMarkdown>
                    </ReactMarkdown>
                </section>

                {/* 사이드바 */}
                <aside className={`...`}>
                    ...
                </aside>

            </article>
        </>
    )
}
```


---


#### ReactMarkdown 을 사용한 이유

글 상세 페이지에서는 마크다운을 HTML 로 직접 변환하기보다 `ReactMarkdown` 을 사용하기로 했습니다.

`ReactMarkdown` 은 마크다운을 바로 리액트 요소로 변환하고 각 태그를 컴포넌트 단위로 커스터마이징할 수 있어서, Heading·코드·이미지처럼 블로그에 맞게 렌더링하기 좋았습니다.

그리고 `remark·rehype` 기반의 플러그인 생태계를 그대로 활용할 수 있어서, GFM 문법 지원, 코드 하이라이트, heading 에 id 붙이기 같은 기능을 플러그인만 추가해서 해결할 수 있다는 것도 좋았습니다.

---


#### ReactMarkdown 플러그인 추가하기

`ReactMarkdown` 은 `remarkPlugins` 와 `rehypePlugins` 옵션을 통해 마크다운 파싱 단계와 HTML 로 변환할 때 플러그인을 추가할 수 있었습니다.



- **`ReactMarkdown` 플러그인 추가하기**
    ```jsx
    const PostDetailPage = () => {
        ...
    
        return (
            ...
            <ReactMarkdown>
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeRaw,
                    rehypeSlug,
                    rehypeHighlight,
                    rehypeHighlightLines,
                ]}
            </ReactMarkdown>
        );
    }
    ```

- **플러그인별 기능**
  1. **remarkGfm:** 체크박스, 테이블 등 GitHub Flavored Markdown 문법 지원
  2. **rehypeRaw:** 마크다운 안에 포함된 HTML 을 함께 파싱
  3. **rehypeSlug:** heading 태그에 id 를 자동으로 부여
  4. **rehypeHighlight:** 코드 블록에 하이라이트 클래스 추가


---

### Heading 변환하기

`Heading`을 변환할 때는 각 태그에 CSS를 적용하기 위한 공통 클래스와 개별 클래스를 부여하고, 추후 목차(`TOC`)를 위해서 `id` 속성을 추가해야했습니다.
이를 위해 `rehypeSlug` 플러그인을 사용했고 `props.id` 으로 `Heading` 의 `id` 값을 설정했습니다.

```jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            components={{
                h1({node, children, ...props}) {
                    return (<h1 id={props.id} className={`post-heading post-heading__h1`}>{children}</h1>);
                },
                h2({node, children, ...props}) {
                    return (<h2 id={props.id} className={`post-heading post-heading__h2`}>{children}</h2>);
                },
                h3({node, children, ...props}) {
                    return (<h3 id={props.id} className={`post-heading post-heading__h3`}>{children}</h3>);
                },
                h4({node, children, ...props}) {
                    return (<h4 id={props.id} className={`post-heading post-heading__h4`}>{children}</h4>);
                },
            }}
        </ReactMarkdown>
    )
}
```



---


### Code 변환하기

```jsx ~ ``` 처럼 `fenced code block`으로 코드를 작성하면, `ReactMarkdown`에서 HTML로 변환될 때 보통 `<pre><code>...</code></pre>` 구조로 렌더링됩니다.
그래서 `pre` 태그를 별도의 컴포넌트(`<Code></Code>`)로 분리해서 렌더링하도록 했습니다.

```jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            ...
            components={{
                ...
                pre({ node, children }) {
                    return <Code node={node}>{children}</Code>
                },
            }}
        </ReactMarkdown>
    )
}
```

`Code` 컴포넌트에서는 `rehype-highlight`가 `<code>` 태그에 붙여준 클래스에서 언어 정보를 꺼내와, 코드 블록 상단에 표시하고 하이라이트 스타일을 적용하도록 구현했습니다.
이렇게 하면 마크다운에서 ```jsx 처럼 언어를 지정해 두기만 해도, 실제 렌더링 시에는 코드 블록 위에 언어 배지가 올라가고, 하이라이트 테마와 함께 좀 더 읽기 좋은 코드 영역을 만들 수 있습니다.

```jsx
const Code = ({ node, children }) => {
    const element = node?.children?.[0];
    const classes = element?.properties?.className || [];
    const match = /language-(\w+)/.exec(classes.join(' '));
    const language = match ? match[1] : 'plaintext';

    return (
        <figure className="...">
            <figcaption className="...">
                <span className="...">
                    {language.toUpperCase()}
                </span>
            </figcaption>
            
            {/* `rehype-highlight`가 자동으로 <pre>와 <code>에 하이라이트 클래스 추가 */}
            <pre className="code-block hljs">
                {children}
            </pre>
        </figure>
    )
}
```

---


### Img 변환하기

마크다운에서 `![]()`로 이미지를 넣으면 `img` 태그로 바뀝니다. 다 `![]()` 안의 경로를 그대로 쓰면 상세 페이지에서는 이미지가 나오지 않았습니다.
그래서 `img` 태그의 `src` 값을 블로그에서 사용하는 이미지 경로로 한 번 더 변환해서 사용했습니다.

```jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            ...
            components={{
                ...
                img({node, children, ...props}) {
                    const path = post.categories.join('/');
                    const baseUrl = '/public/posts';
                    const src = `${baseUrl}/${path}/${props.src}`;
                    const alt = props.alt;
        
                    return (<img src={src} alt={alt} loading="lazy"/>);
                }
            }}
        </ReactMarkdown>
    )
}
```
