/**
 * @file LoadingScreen.jsx - 초기 로딩 화면 컴포넌트
 *
 * apt-get install 시뮬레이션 형태의 터미널 로딩 애니메이션을 표시한다.
 * 약 2초 동안 프로그레스 바가 채워지며, 진행률에 따라 단계별 메시지가 나타난다.
 * 완료 후 300ms 페이드아웃 후 onDone 콜백으로 부모에게 알린다.
 *
 * 이징 커브: 빠르게 시작 → 50% 근처에서 잠시 멈춤 → 빠르게 마무리
 *
 * @exports LoadingScreen
 */

import { useState, useEffect, useRef } from 'react';
import TerminalFrame from './common/TerminalFrame.jsx';
import '../styles/components/loading-screen.css';

// 진행률(at)에 도달하면 표시되는 로딩 단계 메시지들
const STEPS = [
  { content: <span className="dim">Reading package lists...</span>, at: 8 },
  { content: <><span className="ok">Get:1</span> <span className="pkg">blog-core</span> <span className="dim">(2.0.0)</span></>, at: 22 },
  { content: <><span className="ok">Get:2</span> <span className="pkg">terminal-vibes</span> <span className="dim">(1.3.7)</span></>, at: 38 },
  { content: <span className="dim">Building dependency tree...</span>, at: 55 },
  { content: <><span className="dim">Unpacking</span> <span className="pkg">sim.junghun-blog</span> <span className="dim">...</span></>, at: 72 },
  { content: <><span className="ok">✓</span> <span className="pkg">sim.junghun-blog</span> <span className="dim">installed successfully</span></>, at: 90 },
];

/**
 * LoadingScreen - 로딩 애니메이션 컴포넌트
 * @param {Function} onDone - 로딩 완료 시 호출되는 콜백
 */
const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);   // 0~100 진행률
  const [fadeOut, setFadeOut] = useState(false);  // 페이드아웃 애니메이션 트리거
  const rafRef = useRef(null);                    // requestAnimationFrame ID
  const startRef = useRef(null);                  // 애니메이션 시작 타임스탬프

  // requestAnimationFrame 기반 진행률 애니메이션
  useEffect(() => {
    const DURATION = 2000; // 전체 로딩 시간 (ms)

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const raw = Math.min(1, elapsed / DURATION);

      // Custom easing: fast -> pause around 50% -> fast finish
      let eased;
      if (raw < 0.3) {
        eased = raw / 0.3 * 0.45;
      } else if (raw < 0.6) {
        eased = 0.45 + (raw - 0.3) / 0.3 * 0.2;
      } else {
        eased = 0.65 + (raw - 0.6) / 0.4 * 0.35;
      }
      const pct = Math.min(100, eased * 100);

      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // 진행률이 100%에 도달하면 페이드아웃을 시작하고, 300ms 후 onDone을 호출한다
  useEffect(() => {
    if (progress >= 100 && !fadeOut) {
      const raf = requestAnimationFrame(() => {
        setFadeOut(true);
      });
      const timer = setTimeout(() => onDone(), 300);
      return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
    }
  }, [progress, fadeOut, onDone]);

  const pct = Math.round(progress);
  const visibleSteps = STEPS.filter((s) => pct >= s.at);

  return (
    <div className={`loading-overlay${fadeOut ? ' loading-fade-out' : ''}`}>
      <TerminalFrame title="apt-get install blog" className="loading-terminal">
        <div><span className="prompt-dollar">$</span> sudo apt-get install sim.junghun-blog</div>
        {visibleSteps.map((step, i) => (
          <div key={i} className="step-line">{step.content}</div>
        ))}
        <div className="loading-progress-row">
          <div className="loading-progress-bar">
            <div className="fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="loading-progress-pct">{pct}%</span>
        </div>
        {pct >= 100 && (
          <div className="step-line"><span className="ok">Done.</span> <span className="dim">Welcome to sim.junghun-blog</span></div>
        )}
        <div><span className="prompt-dollar">$</span> <span className="cursor-block" /></div>
      </TerminalFrame>
    </div>
  );
};

export default LoadingScreen;
