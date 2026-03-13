import { useEffect } from 'react';

import '../styles/components/adsense-ad.css';


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
