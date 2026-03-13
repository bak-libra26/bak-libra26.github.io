/**
 * @file useTerminal 커스텀 훅
 * @description 터미널 에뮬레이터의 상태 관리 및 키 입력 처리를 담당하는 훅.
 *              TerminalEngine 인스턴스를 생성하고, 명령어 실행, 히스토리 탐색,
 *              탭 자동완성, Ctrl 단축키(Ctrl+C, Ctrl+L, Ctrl+U 등) 처리를 제공한다.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import TerminalEngine from '../components/TerminalEngine.js';

/**
 * 터미널 에뮬레이터 커스텀 훅
 * @param {object} params - 콜백 함수 모음
 * @param {Function} params.onClose - 터미널 종료 시 호출되는 콜백
 * @param {Function} params.onOpenPost - 포스트 열기 시 호출되는 콜백
 * @param {Function} params.onSyncUrl - URL 동기화 시 호출되는 콜백
 * @param {Function} params.onViOpen - vi 에디터 열기 시 호출되는 콜백
 * @param {Function} params.onPreviewImage - 이미지 미리보기 시 호출되는 콜백
 * @param {Function} params.onAppLaunch - 앱 실행 시 호출되는 콜백
 * @returns {object} outputLines(출력 라인 배열), cwd(현재 디렉토리), handleKeyDown(키 입력 핸들러), reset(엔진 초기화 함수)
 */
const useTerminal = ({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch }) => {
  const engineRef = useRef(null);
  const callbacksRef = useRef({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch });
  useEffect(() => { callbacksRef.current = { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch }; });
  useEffect(() => {
    if (engineRef.current) engineRef.current.callbacks = callbacksRef.current;
  });

  const [outputLines, setOutputLines] = useState([]);
  const [cwd, setCwd] = useState('/');

  /** TerminalEngine 인스턴스를 지연 생성(lazy init)하여 반환한다 */
  const getEngine = useCallback(() => {
    if (!engineRef.current) {
      const { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch } = callbacksRef.current;
      engineRef.current = new TerminalEngine({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch, pathname: null });
      setOutputLines([...engineRef.current.outputLines]);
      setCwd(engineRef.current.displayPath(engineRef.current.cwd));
    }
    return engineRef.current;
  }, []);

  /** 엔진의 출력 라인과 현재 작업 디렉토리를 React 상태에 동기화한다 */
  const sync = useCallback(() => {
    const engine = engineRef.current;
    if (engine) {
      setOutputLines([...engine.outputLines]);
      setCwd(engine.displayPath(engine.cwd));
    }
  }, []);

  /** 새로운 pathname으로 TerminalEngine을 재생성하고 상태를 동기화한다 */
  const reset = useCallback((pathname) => {
    const { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch } = callbacksRef.current;
    engineRef.current = new TerminalEngine({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch, pathname });
    sync();
  }, [sync]);

  /**
   * 터미널 입력 필드의 키 입력을 처리하는 핸들러.
   * Enter(명령 실행), Tab(자동완성), 방향키(히스토리), Ctrl 단축키 등을 지원한다.
   * IME 조합 중(isComposing)에는 입력을 무시한다.
   */
  const handleKeyDown = useCallback((e) => {
    const engine = getEngine();

    /** IME 조합 중이면 무시 (한글 입력 등) */
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
