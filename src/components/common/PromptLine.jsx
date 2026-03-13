const PromptLine = ({ path = '~', command, className = '' }) => (
  <div className={`prompt-line ${className}`}>
    <span className="prompt-path">{path}</span>
    <span className="prompt-dollar"> $ </span>
    <span className="prompt-cmd">{command}</span>
  </div>
);

export default PromptLine;
