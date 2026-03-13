import { useState, useCallback, useRef, useEffect } from 'react';
import TerminalEngine from '../components/TerminalEngine.js';

const useTerminal = ({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch }) => {
  const engineRef = useRef(null);
  const callbacksRef = useRef({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch });
  useEffect(() => { callbacksRef.current = { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch }; });
  useEffect(() => {
    if (engineRef.current) engineRef.current.callbacks = callbacksRef.current;
  });

  const [outputLines, setOutputLines] = useState([]);
  const [cwd, setCwd] = useState('/');

  const getEngine = useCallback(() => {
    if (!engineRef.current) {
      const { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch } = callbacksRef.current;
      engineRef.current = new TerminalEngine({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch, pathname: null });
      setOutputLines([...engineRef.current.outputLines]);
      setCwd(engineRef.current.displayPath(engineRef.current.cwd));
    }
    return engineRef.current;
  }, []);

  const sync = useCallback(() => {
    const engine = engineRef.current;
    if (engine) {
      setOutputLines([...engine.outputLines]);
      setCwd(engine.displayPath(engine.cwd));
    }
  }, []);

  const reset = useCallback((pathname) => {
    const { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch } = callbacksRef.current;
    engineRef.current = new TerminalEngine({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch, pathname });
    sync();
  }, [sync]);

  const handleKeyDown = useCallback((e) => {
    const engine = getEngine();

    if (e.isComposing || e.keyCode === 229) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      engine.exec(e.target.value);
      e.target.value = '';
      engine.tabCount = 0;
      sync();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      e.target.value = engine.applyTab(e.target.value);
      sync();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const val = engine.historyUp();
      if (val !== null) e.target.value = val;
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const val = engine.historyDown();
      if (val !== null) e.target.value = val;
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      engine.outputLines.length = 0;
      sync();
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      engine.printCmd(e.target.value + '^C');
      e.target.value = '';
      sync();
    } else if (e.key === 'u' && e.ctrlKey) {
      e.preventDefault();
      e.target.value = '';
    } else if (e.key === 'w' && e.ctrlKey) {
      e.preventDefault();
      const val = e.target.value;
      const trimmed = val.trimEnd();
      const lastSpace = trimmed.lastIndexOf(' ');
      e.target.value = lastSpace >= 0 ? trimmed.slice(0, lastSpace + 1) : '';
    } else if (e.key === 'k' && e.ctrlKey) {
      e.preventDefault();
      const pos = e.target.selectionStart;
      e.target.value = e.target.value.slice(0, pos);
    } else if (e.key === 'a' && e.ctrlKey) {
      e.preventDefault();
      e.target.setSelectionRange(0, 0);
    } else if (e.key === 'e' && e.ctrlKey) {
      e.preventDefault();
      const len = e.target.value.length;
      e.target.setSelectionRange(len, len);
    } else if (e.key === 'd' && e.ctrlKey) {
      e.preventDefault();
      if (e.target.value === '') {
        engine.exec('exit');
        sync();
      }
    } else {
      if (!['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
        engine.tabCount = 0;
      }
    }
  }, [getEngine, sync]);

  return {
    outputLines,
    cwd,
    handleKeyDown,
    reset,
  };
};

export default useTerminal;
