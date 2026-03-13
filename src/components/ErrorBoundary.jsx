import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/not-found/not-found-page.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const reset = () => this.setState({ hasError: false, error: null });

    return (
      <div className="not-found">
        <div>
          <div className="error-terminal">
            <div className="error-terminal-bar">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="title">bash — 500</span>
            </div>
            <div className="error-terminal-body">
              <div><span className="prompt">$</span> curl https://bak-libra26.co.kr{window.location.pathname}</div>
              <div><span className="err">Error 500:</span> internal server error</div>
              <div><span className="dim">예상치 못한 오류가 발생했습니다.</span></div>
              <div>&nbsp;</div>
              <div><span className="prompt">$</span> <span className="cursor-block" /></div>
            </div>
          </div>
          <div className="error-actions">
            <Link to="/" className="primary" onClick={reset}>cd ~/home</Link>
            <Link to="/posts" className="secondary" onClick={reset}>cd ~/posts</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
