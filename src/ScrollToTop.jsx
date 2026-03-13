/**
 * @file ScrollToTop.jsx - 페이지 전환 시 스크롤 초기화 컴포넌트
 *
 * React Router는 페이지 전환 시 스크롤 위치를 자동으로 초기화하지 않는다.
 * 이 컴포넌트가 pathname이나 search(쿼리 파라미터)가 변경될 때마다
 * 스크롤을 최상단으로 이동시킨다.
 *
 * 사용 위치: index.jsx에서 App을 감싸는 래퍼로 사용된다.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - 자식 컴포넌트를 그대로 렌더링하면서 스크롤 위치만 제어한다.
 * @param {Object} props
 * @param {React.ReactNode} props.children - 감싸질 자식 요소
 */
function ScrollToTop({ children }) {
    // pathname: 현재 경로, search: 쿼리스트링 (?key=value)
    const { pathname, search } = useLocation();

    // pathname 또는 search가 변경되면 스크롤을 (0, 0)으로 초기화한다.
    // search도 의존성에 포함해야 같은 페이지에서 쿼리만 바뀔 때도 스크롤이 초기화된다.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]);

    return children;
}

export default ScrollToTop;
