import { useState, useEffect, useRef } from 'react';
import TerminalFrame from './common/TerminalFrame.jsx';
import '../styles/components/loading-screen.css';

const STEPS = [
  { text: '<span class="dim">Reading package lists...</span>', at: 8 },
  { text: '<span class="ok">Get:1</span> <span class="pkg">blog-core</span> <span class="dim">(2.0.0)</span>', at: 22 },
  { text: '<span class="ok">Get:2</span> <span class="pkg">terminal-vibes</span> <span class="dim">(1.3.7)</span>', at: 38 },
  { text: '<span class="dim">Building dependency tree...</span>', at: 55 },
  { text: '<span class="dim">Unpacking</span> <span class="pkg">sim.junghun-blog</span> <span class="dim">...</span>', at: 72 },
  { text: '<span class="ok">\u2713</span> <span class="pkg">sim.junghun-blog</span> <span class="dim">installed successfully</span>', at: 90 },
];

const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const DURATION = 2000;

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
          <div key={i} className="step-line" dangerouslySetInnerHTML={{ __html: step.text }} />
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
