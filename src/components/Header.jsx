import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const menuItems = [
    { label: '홈', path: '/' },
    { label: '전체 글', path: '/posts' },
  ];

  return (
    <header
      style={{
        padding: "16px 0",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      <div className="flex justify-between items-center header-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <Link
          to="/"
          className="logo inline-flex items-center"
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            lineHeight: "1",
            color: "var(--color-text-main)",
            letterSpacing: "-0.03em",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          Dev / baklibra26
          <span style={{ color: "var(--color-accent-wood)", marginLeft: "4px" }}>.</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="nav-link inline-flex items-center"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    lineHeight: "1",            // 메뉴도 동일
                    color:
                      location.pathname === item.path
                        ? "var(--color-text-main)"
                        : "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "var(--color-text-main)")}
                  onMouseOut={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.color = "var(--color-text-muted)";
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .logo {
            font-size: 1rem !important;
          }

          nav ul.flex {
            gap: 12px !important;
          }

          .nav-link {
            font-size: 0.8rem !important;
          }

          header {
            padding: 12px 0 !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
