import '../../styles/components/terminal-frame.css';

const TerminalFrame = ({ title, className = '', children }) => (
  <div className={`tf ${className}`}>
    <div className="tf-bar">
      <span className="dot r" />
      <span className="dot y" />
      <span className="dot g" />
      <span className="tf-title">{title}</span>
    </div>
    <div className="tf-body">
      {children}
    </div>
  </div>
);

export default TerminalFrame;
