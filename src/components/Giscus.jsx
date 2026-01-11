import { useEffect, useRef } from 'react';

export default function Giscus() {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.setAttribute('data-repo', 'bak-libra26/bak-libra26.github.io-comments');
        script.setAttribute('data-repo-id', 'R_kgDOQ2hXqw');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOQ2hXq84C0v_o');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-lang', 'ko');
        script.setAttribute('data-loading', 'lazy');

        ref.current.appendChild(script);
    }, []);

    return (
        <div style={{ width: '100%', marginTop: '4rem' }}>
            <section ref={ref} />
        </div>
    );
}
