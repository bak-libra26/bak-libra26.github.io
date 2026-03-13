/**
 * @file DesktopContext.jsx
 * @description 데스크톱 환경의 윈도우 관리를 위한 React Context.
 *
 * macOS 스타일의 윈도우 시스템을 구현하며, 윈도우의 열기/닫기/포커스/최소화/
 * 전체화면/이동/크기조절 등의 상태를 useReducer 패턴으로 관리한다.
 * 모든 윈도우 조작 함수는 useCallback으로 메모이제이션되어 하위 컴포넌트에
 * Context를 통해 제공된다.
 */
import { createContext, useReducer, useCallback, useMemo, useRef, useEffect } from 'react';

export const DesktopContext = createContext(null);

/** @type {number} 윈도우 고유 ID 생성을 위한 자동 증가 카운터 */
let _id = 0;

/** @returns {string} 'win-{n}' 형식의 고유 윈도우 ID */
const nextId = () => `win-${++_id}`;

/** @constant {string} 터미널 윈도우의 고정 ID (싱글톤 식별용) */
const TERMINAL_ID = 'win-terminal';

/**
 * @description 데스크톱 윈도우 관리의 초기 상태.
 * 터미널 윈도우가 최소화된 상태로 기본 포함된다.
 * @property {Array} windows - 현재 열려있는 윈도우 목록
 * @property {number} nextZ - 다음에 부여할 z-index 값
 * @property {string|null} activeWindowId - 현재 활성화된 윈도우 ID
 */
const initialState = {
  windows: [
    {
      id: TERMINAL_ID,
      type: 'terminal',
      title: 'sim.junghun — terminal',
      icon: '>_',
      state: 'minimized',
      position: { x: null, y: null },
      size: { w: 620, h: 400 },
      zIndex: 0,
      meta: {},
    },
  ],
  nextZ: 1,
  activeWindowId: null,
};

/**
 * 데스크톱 윈도우 상태를 관리하는 리듀서 함수.
 * @param {Object} state - 현재 데스크톱 상태
 * @param {Object} action - 디스패치된 액션 ({type, payload})
 * @returns {Object} 새로운 데스크톱 상태
 */
function reducer(state, action) {
  switch (action.type) {
    /** 새 윈도우 열기. singleton 옵션이 true이면 기존 윈도우를 포커스한다. */
    case 'OPEN_WINDOW': {
      const { windowType, title, icon, meta, size, singleton } = action.payload;
      // Singleton check (e.g. terminal)
      if (singleton) {
        const existing = state.windows.find((w) => w.type === windowType);
        if (existing) {
          // Focus + restore if minimized
          return {
            ...state,
            windows: state.windows.map((w) =>
              w.id === existing.id
                ? { ...w, state: w.state === 'minimized' ? 'normal' : w.state, zIndex: state.nextZ }
                : w,
            ),
            nextZ: state.nextZ + 1,
            activeWindowId: existing.id,
          };
        }
      }
      const id = nextId();
      const win = {
        id,
        type: windowType,
        title,
        icon: icon || '',
        state: 'normal',
        position: { x: null, y: null },
        size: size || { w: 680, h: 480 },
        zIndex: state.nextZ,
        meta: meta || {},
      };
      return {
        ...state,
        windows: [...state.windows, win],
        nextZ: state.nextZ + 1,
        activeWindowId: id,
      };
    }

    /** 윈도우 닫기. 닫힌 윈도우가 활성 윈도우였으면 가장 위에 있는 윈도우로 전환한다. */
    case 'CLOSE_WINDOW': {
      const { id } = action.payload;
      const remaining = state.windows.filter((w) => w.id !== id);
      const visible = remaining.filter((w) => w.state !== 'minimized');
      const activeId = state.activeWindowId === id
        ? (visible.length > 0
          ? visible.reduce((a, b) => (a.zIndex > b.zIndex ? a : b)).id
          : null)
        : state.activeWindowId;
      return { ...state, windows: remaining, activeWindowId: activeId };
    }

    /** 윈도우 포커스. z-index를 최상위로 올리고, 최소화 상태면 복원한다. */
    case 'FOCUS_WINDOW': {
      const { id } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: state.nextZ, state: w.state === 'minimized' ? 'normal' : w.state } : w,
        ),
        nextZ: state.nextZ + 1,
        activeWindowId: id,
      };
    }

    /** 윈도우 최소화. 활성 윈도우였으면 다음으로 높은 z-index 윈도우를 활성화한다. */
    case 'MINIMIZE_WINDOW': {
      const { id } = action.payload;
      const remaining = state.windows.filter((w) => w.id !== id);
      const activeId = state.activeWindowId === id
        ? (remaining.filter((w) => w.state !== 'minimized').length > 0
          ? remaining.filter((w) => w.state !== 'minimized').reduce((a, b) => (a.zIndex > b.zIndex ? a : b)).id
          : null)
        : state.activeWindowId;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, state: 'minimized' } : w),
        activeWindowId: activeId,
      };
    }

    /** 최소화된 윈도우를 일반 상태로 복원하고 포커스한다. */
    case 'RESTORE_WINDOW': {
      const { id } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, state: 'normal', zIndex: state.nextZ } : w,
        ),
        nextZ: state.nextZ + 1,
        activeWindowId: id,
      };
    }

    /** 전체화면 토글. 이미 전체화면이면 일반 상태로, 아니면 전체화면으로 전환한다. */
    case 'FULLSCREEN_WINDOW': {
      const { id } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, state: w.state === 'fullscreen' ? 'normal' : 'fullscreen', zIndex: state.nextZ } : w,
        ),
        nextZ: state.nextZ + 1,
        activeWindowId: id,
      };
    }

    /** 윈도우 위치(position) 변경. 드래그 이동 시 호출된다. */
    case 'MOVE_WINDOW': {
      const { id, position } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, position } : w),
      };
    }

    /** 윈도우 크기(size) 변경. 리사이즈 핸들 조작 시 호출된다. */
    case 'RESIZE_WINDOW': {
      const { id, size } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, size } : w),
      };
    }

    /** 윈도우 속성 일괄 업데이트. title, meta 등 임의 필드를 변경할 때 사용한다. */
    case 'UPDATE_WINDOW': {
      const { id, updates } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, ...updates } : w),
      };
    }

    default:
      return state;
  }
}

/**
 * 데스크톱 윈도우 관리 Context Provider.
 * 하위 컴포넌트에서 윈도우 열기/닫기/포커스 등의 함수와 현재 상태를 사용할 수 있게 한다.
 * @param {Object} props
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 */
export const DesktopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * 새 윈도우를 열거나, singleton이면 기존 윈도우를 포커스한다.
   * @param {string} windowType - 윈도우 타입 ('terminal', 'post', 'game' 등)
   * @param {Object} [options] - 윈도우 옵션 (title, icon, meta, size, singleton)
   */
  const openWindow = useCallback((windowType, { title, icon, meta, size, singleton } = {}) => {
    dispatch({ type: 'OPEN_WINDOW', payload: { windowType, title, icon, meta, size, singleton } });
  }, []);

  const closeWindow = useCallback((id) => {
    dispatch({ type: 'CLOSE_WINDOW', payload: { id } });
  }, []);

  const focusWindow = useCallback((id) => {
    dispatch({ type: 'FOCUS_WINDOW', payload: { id } });
  }, []);

  const minimizeWindow = useCallback((id) => {
    dispatch({ type: 'MINIMIZE_WINDOW', payload: { id } });
  }, []);

  const restoreWindow = useCallback((id) => {
    dispatch({ type: 'RESTORE_WINDOW', payload: { id } });
  }, []);

  const fullscreenWindow = useCallback((id) => {
    dispatch({ type: 'FULLSCREEN_WINDOW', payload: { id } });
  }, []);

  const moveWindow = useCallback((id, position) => {
    dispatch({ type: 'MOVE_WINDOW', payload: { id, position } });
  }, []);

  const resizeWindow = useCallback((id, size) => {
    dispatch({ type: 'RESIZE_WINDOW', payload: { id, size } });
  }, []);

  const updateWindow = useCallback((id, updates) => {
    dispatch({ type: 'UPDATE_WINDOW', payload: { id, updates } });
  }, []);

  const windowsRef = useRef(state.windows);
  useEffect(() => { windowsRef.current = state.windows; });

  /**
   * ID로 윈도우 객체를 조회한다.
   * @param {string} id - 윈도우 ID
   * @returns {Object|null} 윈도우 객체 또는 null
   */
  const getWindow = useCallback((id) => {
    return state.windows.find((w) => w.id === id) || null;
  }, [state.windows]);

  /**
   * 타입으로 윈도우를 검색한다. 동일 타입 중 첫 번째를 반환한다.
   * @param {string} type - 윈도우 타입
   * @returns {Object|null} 윈도우 객체 또는 null
   */
  const findByType = useCallback((type) => {
    return state.windows.find((w) => w.type === type) || null;
  }, [state.windows]);

  const value = useMemo(() => ({
    ...state,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    fullscreenWindow,
    moveWindow,
    resizeWindow,
    updateWindow,
    getWindow,
    findByType,
  }), [state, openWindow, closeWindow, focusWindow, minimizeWindow, restoreWindow, fullscreenWindow, moveWindow, resizeWindow, updateWindow, getWindow, findByType]);

  return (
    <DesktopContext.Provider value={value}>
      {children}
    </DesktopContext.Provider>
  );
};
