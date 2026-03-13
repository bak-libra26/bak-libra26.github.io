import { createContext, useReducer, useCallback, useMemo, useRef, useEffect } from 'react';

export const DesktopContext = createContext(null);

let _id = 0;
const nextId = () => `win-${++_id}`;

const TERMINAL_ID = 'win-terminal';

const initialState = {
  windows: [
    {
      id: TERMINAL_ID,
      type: 'terminal',
      title: 'sim.junghun — terminal',
      icon: '>_',
      state: 'minimized',
      position: { x: null, y: null },
      size: { w: 680, h: 480 },
      zIndex: 0,
      meta: {},
    },
  ],
  nextZ: 1,
  activeWindowId: null,
};

function reducer(state, action) {
  switch (action.type) {
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

    case 'CLOSE_WINDOW': {
      const { id } = action.payload;
      const remaining = state.windows.filter((w) => w.id !== id);
      const activeId = state.activeWindowId === id
        ? (remaining.length > 0
          ? remaining.reduce((a, b) => (a.zIndex > b.zIndex ? a : b)).id
          : null)
        : state.activeWindowId;
      return { ...state, windows: remaining, activeWindowId: activeId };
    }

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

    case 'MOVE_WINDOW': {
      const { id, position } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, position } : w),
      };
    }

    case 'RESIZE_WINDOW': {
      const { id, size } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) => w.id === id ? { ...w, size } : w),
      };
    }

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

export const DesktopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const getWindow = useCallback((id) => {
    return state.windows.find((w) => w.id === id) || null;
  }, [state.windows]);

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
