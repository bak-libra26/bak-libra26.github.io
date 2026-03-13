import { useState, useRef, useEffect, useCallback } from 'react';
import useTheme from '../hooks/useTheme.js';
import '../styles/components/theme-toggle.css';

const THEME_COLORS = {
  dracula:          ['#282a36', '#f8f8f2', '#50fa7b', '#bd93f9'],
  nord:             ['#2e3440', '#eceff4', '#a3be8c', '#b48ead'],
  'tokyo-night':    ['#1a1b26', '#c0caf5', '#9ece6a', '#bb9af7'],
  'github-light':   ['#ffffff', '#1f2328', '#1a7f37', '#8250df'],
  'catppuccin-latte': ['#eff1f5', '#4c4f69', '#40a02b', '#8839ef'],
};

const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const [focusIndex, setFocusIndex] = useState(-1);
  const current = themes.find((t) => t.id === theme);

  const handleDropdownKeyDown = useCallback((e) => {
    if (!open) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusIndex((prev) => (prev + 1) % themes.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusIndex((prev) => (prev - 1 + themes.length) % themes.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusIndex >= 0 && focusIndex < themes.length) {
          setTheme(themes[focusIndex].id);
          setOpen(false);
          setFocusIndex(-1);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        setFocusIndex(-1);
        break;
      default:
        break;
    }
  }, [open, focusIndex, themes, setTheme]);

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setFocusIndex(themes.findIndex((t) => t.id === theme)));
      return () => cancelAnimationFrame(id);
    }
  }, [open, theme, themes]);

  return (
    <div className="theme-dropdown" ref={ref} onKeyDown={handleDropdownKeyDown}>
      <span className="theme-label">Theme:</span>
      <button className="theme-dropdown__trigger" onClick={() => setOpen(!open)} aria-label="Change theme">
        <span>{current?.label || theme}</span>
        <span className="theme-dropdown__arrow">▾</span>
      </button>
      {open && (
        <ul className="theme-dropdown__menu" role="listbox" aria-label="Theme options">
          {themes.map((t, i) => {
            const colors = THEME_COLORS[t.id] || ['#888', '#aaa', '#ccc', '#eee'];
            return (
              <li key={t.id} role="option" aria-selected={t.id === theme}>
                <button
                  className={`theme-dropdown__option ${t.id === theme ? 'active' : ''}${i === focusIndex ? ' focused' : ''}`}
                  onClick={() => { setTheme(t.id); setOpen(false); setFocusIndex(-1); }}
                >
                  <span className="theme-preview">
                    {colors.map((c, i) => (
                      <span key={i} style={{ background: c }} />
                    ))}
                  </span>
                  <span>{t.label}</span>
                  <span className="theme-dropdown__check">✓</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ThemeToggle;
