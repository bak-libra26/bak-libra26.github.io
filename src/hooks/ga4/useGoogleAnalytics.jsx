/**
 * @file Google Analytics 4 (GA4) 추적 훅 모음
 * @description 페이지뷰, 스크롤 깊이, 포스트 읽기 시간, 외부 링크 클릭,
 *              검색어 추적 등 GA4 기반 사용자 행동 분석 기능을 제공한다.
 *              프로덕션 환경에서만 활성화되며, GA Measurement ID가 없으면 초기화되지 않는다.
 */

import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

/** @type {string|undefined} GA4 측정 ID (환경 변수에서 로드) */
const ga4Id = import.meta.env.VITE_GA_MEASUREMENT_ID;
/** @type {boolean} 프로덕션 환경 여부 */
const isProd = import.meta.env.PROD;
/** @type {boolean} GA4 초기화 완료 여부 (중복 초기화 방지) */
let initialized = false;

/** GA4 SDK를 초기화한다. 프로덕션 환경이 아니거나 ID가 없으면 무시한다. */
function init() {
  if (!isProd || !ga4Id || initialized) return;
  ReactGA.initialize(ga4Id);
  initialized = true;
}

/** GA4에 히트 데이터(pageview 등)를 전송한다 */
function send(hitType, params) {
  if (!initialized) return;
  ReactGA.send({ hitType, ...params });
}

/** GA4 커스텀 이벤트를 전송한다 */
function event(name, params) {
  if (!initialized) return;
  ReactGA.event(name, params);
}

/**
 * 페이지뷰 추적 훅.
 * 라우트 변경 시 현재 pathname과 search를 GA4에 pageview로 전송한다.
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => { init(); }, []);

  useEffect(() => {
    const page = decodeURI(location.pathname + location.search);
    send('pageview', { page, title: document.title });
  }, [location.pathname, location.search]);
};

/**
 * 스크롤 깊이 추적 훅.
 * 사용자가 페이지를 25%, 50%, 75%, 90% 이상 스크롤하면 각 임계값에 대해 한 번씩 이벤트를 전송한다.
 * 페이지가 변경되면 추적 상태가 초기화된다.
 */
export const useScrollDepth = () => {
  const location = useLocation();
  const fired = useRef(new Set());

  useEffect(() => {
    if (!initialized) return;
    fired.current.clear();

    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of [25, 50, 75, 90]) {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          event('scroll_depth', { percent: threshold, page: location.pathname });
        }
      }
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);
};

/**
 * 포스트 읽기 시간 추적 훅.
 * 컴포넌트가 마운트된 시점부터 언마운트되기까지의 체류 시간을 측정하며,
 * 10초 이상 체류한 경우에만 'post_read' 이벤트를 전송한다.
 * @param {string} postTitle - 추적할 포스트의 제목
 */
export const useReadTracking = (postTitle) => {
  const location = useLocation();
  const startRef = useRef(null);

  useEffect(() => {
    if (!initialized || !postTitle) return;
    startRef.current = Date.now();

    return () => {
      const duration = Math.round((Date.now() - startRef.current) / 1000);
      if (duration >= 10) {
        event('post_read', {
          post_title: postTitle,
          read_time_seconds: duration,
          page: location.pathname,
        });
      }
    };
  }, [postTitle, location.pathname]);
};

/**
 * 외부 링크 클릭 추적 훅.
 * document에 클릭 이벤트 리스너를 등록하여, 외부 도메인으로의 링크 클릭 시
 * 'outbound_click' 이벤트를 전송한다. mailto: 링크도 추적 대상에 포함된다.
 */
export const useOutboundTracking = () => {
  useEffect(() => {
    if (!initialized) return;

    const handler = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && (href.startsWith('http') || href.startsWith('mailto:')) && !href.includes(window.location.hostname)) {
        event('outbound_click', { url: href });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
};

/**
 * 검색어 추적 함수.
 * 빈 문자열이 아닌 경우에만 'search' 이벤트를 GA4에 전송한다.
 * @param {string} query - 사용자가 입력한 검색어
 */
export const trackSearch = (query) => {
  if (!query?.trim()) return;
  event('search', { search_term: query.trim() });
};

/** 범용 GA4 이벤트 전송 함수 (외부에서 직접 사용 가능) */
export { event as trackEvent };

export default useGoogleAnalytics;
