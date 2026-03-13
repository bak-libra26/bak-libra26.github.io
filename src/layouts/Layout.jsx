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

const WINDOW_COMPONENTS = {
  terminal: TerminalWindow,
  image: ImageWindow,
  post: PostReaderWindow,
};

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

const Layout = () => {
  return (
    <DesktopProvider>
      <LayoutInner />
    </DesktopProvider>
  );
};

export default Layout;
