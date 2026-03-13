import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

const ga4Id = import.meta.env.VITE_GA_MEASUREMENT_ID;
const isProd = import.meta.env.PROD;
let initialized = false;

function init() {
  if (!isProd || !ga4Id || initialized) return;
  ReactGA.initialize(ga4Id);
  initialized = true;
}

function send(hitType, params) {
  if (!initialized) return;
  ReactGA.send({ hitType, ...params });
}

function event(name, params) {
  if (!initialized) return;
  ReactGA.event(name, params);
}

// ── Pageview tracking ──
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => { init(); }, []);

  useEffect(() => {
    const page = decodeURI(location.pathname + location.search);
    send('pageview', { page, title: document.title });
  }, [location.pathname, location.search]);
};

// ── Scroll depth tracking ──
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

// ── Post read tracking (time on page) ──
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

// ── Outbound link tracking ──
export const useOutboundTracking = () => {
  useEffect(() => {
    if (!initialized) return;

    const handler = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && (href.startsWith('http') || href.startsWith('mailto:')) && !href.includes(location.hostname)) {
        event('outbound_click', { url: href });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
};

// ── Search tracking ──
export const trackSearch = (query) => {
  if (!query?.trim()) return;
  event('search', { search_term: query.trim() });
};

// ── GA event export for ad-hoc usage ──
export { event as trackEvent };

export default useGoogleAnalytics;
