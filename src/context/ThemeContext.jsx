import { createContext, useState, useEffect, useCallback } from 'react';

export const THEMES = [
  { id: 'dracula', label: 'Dracula', scheme: 'dark' },
  { id: 'nord', label: 'Nord', scheme: 'dark' },
  { id: 'tokyo-night', label: 'Tokyo Night', scheme: 'dark' },
  { id: 'github-light', label: 'GitHub Light', scheme: 'light' },
  { id: 'catppuccin-latte', label: 'Catppuccin Latte', scheme: 'light' },
];

const DARK_DEFAULT = 'dracula';
const LIGHT_DEFAULT = 'github-light';

export const ThemeContext = createContext({
  theme: DARK_DEFAULT,
  setTheme: () => {},
  themes: THEMES,
});

function getSystemDefault() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_DEFAULT : LIGHT_DEFAULT;
}

function isValidTheme(id) {
  return THEMES.some((t) => t.id === id);
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved && isValidTheme(saved)) return saved;
    } catch { /* ignore */ }
    return getSystemDefault();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow system theme when user hasn't manually chosen
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      try {
        if (!localStorage.getItem('theme')) {
          setThemeState(e.matches ? DARK_DEFAULT : LIGHT_DEFAULT);
        }
      } catch {
        setThemeState(e.matches ? DARK_DEFAULT : LIGHT_DEFAULT);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const setTheme = useCallback((id) => {
    if (!isValidTheme(id)) return;
    setThemeState(id);
    try { localStorage.setItem('theme', id); } catch { /* storage unavailable */ }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};
