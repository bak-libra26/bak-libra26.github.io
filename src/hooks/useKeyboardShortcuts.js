import { useState, useEffect, useCallback, useContext } from 'react';
import { DesktopContext } from '../context/DesktopContext.jsx';

const useKeyboardShortcuts = () => {
  const desktop = useContext(DesktopContext);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  const openShortcuts = useCallback(() => setShortcutsOpen(true), []);
  const closeShortcuts = useCallback(() => setShortcutsOpen(false), []);

  const toggleTerminal = useCallback(() => {
    if (!desktop) return;
    const existing = desktop.findByType('terminal');
    if (!existing) return;
    if (existing.state === 'minimized') {
      desktop.restoreWindow(existing.id);
    } else {
      desktop.minimizeWindow(existing.id);
    }
  }, [desktop]);

  useEffect(() => {
    const handler = (e) => {
      const tag = e.target.tagName;
      const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
        e.preventDefault();
        toggleTerminal();
        return;
      }

      if (e.key === 'Escape') {
        // Don't close window if vi/terminal input consumed Escape
        const isViInput = e.target.classList?.contains('vi-hidden-input');
        if (isViInput) return;

        // Priority: shortcuts modal > active window
        if (shortcutsOpen) {
          setShortcutsOpen(false);
          return;
        }
        // Don't act if input is focused (terminal handles its own escape)
        if (isInput) return;
        if (desktop && desktop.activeWindowId) {
          const activeWin = desktop.getWindow(desktop.activeWindowId);
          if (activeWin?.type === 'terminal') {
            desktop.minimizeWindow(desktop.activeWindowId);
          } else {
            desktop.closeWindow(desktop.activeWindowId);
          }
          return;
        }
        return;
      }

      if (!isInput && e.key === '?' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggleTerminal, shortcutsOpen, desktop]);

  return { shortcutsOpen, openShortcuts, closeShortcuts, toggleTerminal };
};

export default useKeyboardShortcuts;
