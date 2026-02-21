import React, { useEffect } from 'react';

import '../styles/components/adsense-ad.css';


const AdsenseAd = ({
    slot, format = 'auto', responsive = true
}) => {
    useEffect(() => {
        if (import.meta.env.DEV) return;

        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{
                display: 'block',
                minHeight: '280px',
                margin: '24px 0',
                border: import.meta.env.DEV ? '1px dashed black' : 'none',
                backgroundColor: import.meta.env.DEV ? '#fafafa' : 'transparent', // 옵션: dev에서만 살짝 배경
            }}
            data-ad-client={import.meta.env.VITE_AD_CLIENT}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
        />
    );
};

export default AdsenseAd;
