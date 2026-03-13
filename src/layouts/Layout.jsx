/**
 * @file Layout - 애플리케이션의 최상위 레이아웃 컴포넌트
 *
 * Header, Main, Footer로 구성된 기본 페이지 구조를 정의하고,
 * 데스크톱 컨텍스트(DesktopProvider)를 통해 터미널, 이미지 미리보기,
 * 포스트 리더 등의 윈도우 시스템을 관리한다.
 * 키보드 단축키 모달과 하단 단축키 바도 이 레이아웃에서 렌더링된다.
 *
 * @module layouts/Layout
 */

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ShortcutBar from '../components/ShortcutBar.jsx';
import ShortcutsModal from '../components/ShortcutsModal.jsx';
import TerminalWindow from '../components/TerminalOverlay.jsx';
import ImageWindow from '../components/ImagePreview.jsx';
import PostReaderWindow from '../components/PostReaderWindow.jsx';
import { DesktopProvider } from '../context/DesktopContext.jsx';
import useDesktop from '../hooks/useDesktop.js';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts.js';

import '../styles/base/layout.css';

/**
 * 윈도우 타입별 컴포넌트 매핑 객체
 * @type {Object.<string, React.ComponentType>}
 */
const WINDOW_COMPONENTS = {
  terminal: TerminalWindow,
  image: ImageWindow,
  post: PostReaderWindow,
};

/**
 * 데스크톱 컨텍스트에 등록된 윈도우 목록을 순회하며 렌더링하는 컴포넌트
 *
 * 각 윈도우의 type에 따라 WINDOW_COMPONENTS에서 대응하는 컴포넌트를 찾아
 * 동적으로 렌더링한다. 알 수 없는 타입의 윈도우는 무시된다.
 *
 * @returns {React.ReactElement} 활성 윈도우 목록
 */
const WindowRenderer = () => {
  const desktop = useDesktop();

  return (
    <>
      {desktop.windows.map((win) => {
        const Component = WINDOW_COMPONENTS[win.type];
        if (!Component) return null;
        return <Component key={win.id} windowId={win.id} />;
      })}
    </>
  );
};

/**
 * 레이아웃 내부 구조를 담당하는 컴포넌트
 *
 * Header, Main, Footer의 기본 페이지 골격과 함께
 * 윈도우 렌더러, 단축키 바, 단축키 모달을 포함한다.
 * 접근성을 위한 "Skip to content" 링크도 제공한다.
 *
 * @returns {React.ReactElement} 레이아웃 내부 래퍼
 */
const LayoutInner = () => {
  const {
    shortcutsOpen,
    openShortcuts,
    closeShortcuts,
  } = useKeyboardShortcuts();

  return (
    <div id="wrap">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Main />
      <Footer />
      <WindowRenderer />
      <ShortcutBar onOpenShortcuts={openShortcuts} />
      <ShortcutsModal open={shortcutsOpen} onClose={closeShortcuts} />
    </div>
  );
};

/**
 * 최상위 레이아웃 컴포넌트
 *
 * DesktopProvider로 전체 레이아웃을 감싸 윈도우 시스템의
 * 상태 관리 컨텍스트를 하위 컴포넌트에 제공한다.
 *
 * @returns {React.ReactElement} DesktopProvider로 감싸진 레이아웃
 */
const Layout = () => {
  return (
    <DesktopProvider>
      <LayoutInner />
    </DesktopProvider>
  );
};

export default Layout;
