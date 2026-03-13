/**
 * @file Header - 사이트 상단 헤더 및 모바일 내비게이션 드로어 컴포넌트
 *
 * 로고, 내비게이션 링크, 테마 토글 버튼을 포함하는 반응형 헤더를 렌더링한다.
 * 모바일 환경에서는 햄버거 메뉴를 통해 드로어 형태의 내비게이션을 제공하며,
 * 페이지 이동 시 드로어가 자동으로 닫힌다.
 *
 * @module layouts/Header
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/layout/header.css';
import ThemeToggle from '../components/ThemeToggle.jsx';

/**
 * 내비게이션 항목 정의 배열
 * @type {Array<{name: string, to: string, match: string}>}
 * @property {string} name - 내비게이션에 표시할 텍스트
 * @property {string} to - 이동할 경로
 * @property {string} match - 현재 경로와 비교하여 활성 상태를 판단할 패턴
 */
const navItems = [
  { name: 'home', to: '/', match: '/' },
  { name: 'posts', to: '/posts', match: '/posts' },
  { name: 'about', to: '/about', match: '/about' },
];

/**
 * 사이트 헤더 컴포넌트
 *
 * 데스크톱에서는 가로형 내비게이션 바를 표시하고,
 * 모바일에서는 햄버거 버튼과 슬라이드 드로어를 제공한다.
 * 경로가 변경되면 드로어를 자동으로 닫는다.
 *
 * @returns {React.ReactElement} 헤더 및 모바일 드로어 내비게이션
 */
const Header = () => {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  /** 경로 변경 시 모바일 드로어를 닫는다 */
  useEffect(() => { requestAnimationFrame(() => setDrawerOpen(false)); }, [pathname]);

  /**
   * 주어진 경로 패턴이 현재 URL과 일치하는지 판별한다
   * @param {string} match - 비교할 경로 패턴
   * @returns {boolean} 활성 상태 여부
   */
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
