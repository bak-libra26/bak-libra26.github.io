import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import ReactGA from 'react-ga4';


const ga4Id = import.meta.env.VITE_GA_MEASUREMENT_ID;
const isProd = import.meta.env.PROD;

export const useGoogleAnalytics = () => {
    const location = useLocation();
    const page = decodeURI(location.pathname + location.search);

    // GA 초기화 (앱 시작 시 1번)
    useEffect(() => {
        if (!isProd || !ga4Id) return;
        ReactGA.initialize(ga4Id);
    }, []);

    // 라우트 변경 시 pageview 전송
    useEffect(() => {
        if (!isProd || !ga4Id) return;
        ReactGA.send({
            hitType: 'pageview',
            page: page,
            title: document.title
        });
    }, [location.pathname]);
};

export default useGoogleAnalytics;