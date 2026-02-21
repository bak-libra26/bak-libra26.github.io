import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop({ children }) {
    const { pathname, search } = useLocation(); // search 추가

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]);                     // search까지 의존성에 넣기

    return children;
}

export default ScrollToTop;
