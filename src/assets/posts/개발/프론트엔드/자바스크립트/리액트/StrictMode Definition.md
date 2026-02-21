---
tags: 
references:
  - https://react.dev/reference/react/StrictMode
created_date: 2025-08-03 18:16:47
last_modified_date: 2025-08-03 18:17:02
---

# React : StrictMode 란

`<StrictMode>` 는 리액트 애플리케이션의 잠재적인 문제를 조기에 발견할 수 있도록  도와주는 도구로 `<StrictMode>` 는 실제로 UI에 아무런 영향을 주지 않으며, 오직 개발 환경에서만 동작한다.

- 사용 예시
	```javascript
	import { StrictMode } from 'react';  
	import { createRoot } from 'react-dom/client';  
	
	const root = createRoot(document.getElementById('root'));  
	root.render(  
		<StrictMode>  
			<App />  
		</StrictMode>  
	);
	```


## StrictMode 동작 방식

React의 StrictMode를 사용하면 개발 과정에서 아래와 같은 방식으로 동작하여, 잠재적인 버그를 조기에 발견할 수 있도록 추가적인 검사와 경고를 제공한다.

- **컴포넌트가 한 번 더 렌더링됨:**  
    컴포넌트 함수가 두 번 실행되어, 순수하지 않은 렌더링(부작용이 있는 코드)을 쉽게 찾아낼 수 있다.
- **Effect(예: useEffect)가 한 번 더 실행됨:**  
    Effect의 setup과 cleanup이 한 번 더 반복되어, cleanup이 누락된 경우 메모리 누수나 중복 동작을 조기에 드러낸다.
    
- **ref 콜백이 한 번 더 실행됨:**  
    ref 콜백도 setup → cleanup → setup 순서로 추가 실행되어, 정리 코드가 빠진 부분을 확인할 수 있다.
    
- **Deprecated API 사용 여부 검사:**  
    사용 중인 API가 폐기된 것이라면 경고를 통해 알려준다.
    
이러한 동작은 실제 서비스에는 영향을 주지 않고, 오직 개발 환경에서만 활성화되며 그 결과, 코드의 품질을 높이고 나중에 발생할 수 있는 문제를 미리 예방할 수 있게된다.
