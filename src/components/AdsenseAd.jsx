/**
 * @file AdsenseAd.jsx - Google AdSense 광고 컴포넌트
 *
 * 프로덕션 환경에서는 실제 AdSense 광고를 표시하고,
 * 개발 환경(DEV)에서는 "AD PLACEHOLDER" 텍스트를 표시한다.
 *
 * @exports AdsenseAd
 */

import { useEffect } from 'react';

import '../styles/components/adsense-ad.css';

/**
 * AdsenseAd - Google AdSense 광고 슬롯
 * @param {string} slot - AdSense 광고 슬롯 ID
 * @param {string} format - 광고 형식 (기본: 'auto')
 * @param {boolean} responsive - 반응형 광고 여부 (기본: true)
 */
const AdsenseAd = ({
    slot, format = 'auto', responsive = true
}) => {
    useEffect(() => {
        if (import.meta.env.DEV) return;

        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* ad script not loaded */ }
    }, []);

    const isDev = import.meta.env.DEV;

    return (
        <div className={`adsense-wrap${isDev ? ' adsense-wrap--dev' : ''}`}>
            {isDev
              ? 'AD PLACEHOLDER (Google AdSense)'
              : <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client={import.meta.env.VITE_AD_CLIENT}
                    data-ad-slot={slot}
                    data-ad-format={format}
                    data-full-width-responsive={responsive ? 'true' : 'false'}
                />
            }
        </div>
    );
};

export default AdsenseAd;
