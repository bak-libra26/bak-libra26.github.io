import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.05)',
      padding: '60px 0',
      marginTop: '120px',
      backgroundColor: '#fff'
    }}>
      <div className="container flex flex-col items-center gap-8">
        <div className="flex gap-8 items-center" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="https://www.instagram.com/simjungh" style={{ color: 'var(--color-text-main)' }}>인스타그램</a>
          <a href="https://github.com/bak-libra26" style={{ color: 'var(--color-text-main)' }}>깃허브</a>
          <a href="mailto:bak-libra26@gmail.com" style={{ color: 'var(--color-text-main)' }}>이메일</a>
          <span style={{ color: 'var(--color-text-muted)', opacity: 0.3 }}>|</span>
          <a href="/feed.xml" style={{ color: 'var(--color-text-main)' }}>RSS</a>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          &copy; 2024 baklibra26. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 30px 0 !important;
            margin-top: 40px !important;
          }

          footer .flex.gap-8 {
            gap: 12px !important;
            flex-wrap: wrap;
            justify-content: center;
            font-size: 0.8rem !important;
          }

          footer p {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
