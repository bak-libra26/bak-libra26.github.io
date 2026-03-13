import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/layout/header.css';
import ThemeToggle from '../components/ThemeToggle.jsx';

const navItems = [
  { name: 'home', to: '/', match: '/' },
  { name: 'posts', to: '/posts', match: '/posts' },
  { name: 'about', to: '/about', match: '/about' },
];

const Header = () => {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => { requestAnimationFrame(() => setDrawerOpen(false)); }, [pathname]);

  const isActive = (match) => {
    if (match === '/') return pathname === '/';
    return pathname.startsWith(match);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <Link className="header-logo" to="/">
              sim<span className="accent">.</span>junghun
            </Link>
            <nav>
              <ul className="header-nav">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} data-active={isActive(item.match)} aria-current={isActive(item.match) ? 'page' : undefined}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <ThemeToggle />
            <button
              className="header-mobile-toggle"
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
            >
              {drawerOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`header-drawer${drawerOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            data-active={isActive(item.match)}
            aria-current={isActive(item.match) ? 'page' : undefined}
            onClick={() => setDrawerOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="header-drawer__theme">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Header;
