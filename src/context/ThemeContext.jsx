/**
 * @file ThemeContext.jsx
 * @description 애플리케이션 전체 테마(색상 스킴)를 관리하는 React Context.
 *
 * Dracula, Nord, Tokyo Night 등 다크 테마와 GitHub Light, Catppuccin Latte 등
 * 라이트 테마를 지원한다. 사용자가 테마를 선택하면 localStorage에 저장하고,
 * 선택하지 않았을 경우 시스템의 prefers-color-scheme 설정을 따른다.
 * 테마 변경 시 document 루트 요소의 data-theme 속성이 업데이트된다.
 */
import { createContext, useState, useEffect, useCallback } from 'react';

/**
 * @constant {Array<Object>} THEMES
 * @description 지원하는 테마 목록. 각 테마는 id, label(표시명), scheme(dark/light)을 갖는다.
 */
export const THEMES = [
  { id: 'dracula', label: 'Dracula', scheme: 'dark' },
  { id: 'nord', label: 'Nord', scheme: 'dark' },
  { id: 'tokyo-night', label: 'Tokyo Night', scheme: 'dark' },
  { id: 'github-light', label: 'GitHub Light', scheme: 'light' },
  { id: 'catppuccin-latte', label: 'Catppuccin Latte', scheme: 'light' },
];

/** @constant {string} 다크 모드 기본 테마 ID */
const DARK_DEFAULT = 'dracula';
/** @constant {string} 라이트 모드 기본 테마 ID */
const LIGHT_DEFAULT = 'github-light';

/** @type {React.Context} 테마 상태와 변경 함수를 제공하는 Context */
export const ThemeContext = createContext({
  theme: DARK_DEFAULT,
  setTheme: () => {},
  themes: THEMES,
});

/**
 * 시스템의 색상 스킴 설정에 따라 기본 테마를 반환한다.
 * @returns {string} 다크 모드이면 DARK_DEFAULT, 라이트 모드이면 LIGHT_DEFAULT
 */
function getSystemDefault() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_DEFAULT : LIGHT_DEFAULT;
}

/**
 * 주어진 ID가 유효한 테마인지 확인한다.
 * @param {string} id - 확인할 테마 ID
 * @returns {boolean} THEMES 목록에 존재하면 true
 */
function isValidTheme(id) {
  return THEMES.some((t) => t.id === id);
}

/**
 * 테마 관리 Context Provider.
 * localStorage에서 저장된 테마를 불러오고, 없으면 시스템 설정을 따른다.
 * 시스템 색상 스킴이 변경되면 자동으로 테마를 전환한다 (수동 선택이 없을 때).
 * @param {Object} props
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 */
export const ThemeProvider = ({ children }) => {
  /** @state localStorage 저장값 또는 시스템 기본값으로 초기화되는 현재 테마 ID */
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

  /**
   * 테마를 변경하고 localStorage에 저장한다.
   * 유효하지 않은 테마 ID는 무시된다.
   * @param {string} id - 변경할 테마 ID
   */
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
