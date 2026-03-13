const OutputBox = ({ className = '', children }) => (
  <div className={`output-box ${className}`}>
    {children}
  </div>
);

export default OutputBox;
