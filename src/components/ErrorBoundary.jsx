/**
 * @file ErrorBoundary.jsx - React 에러 경계 컴포넌트
 *
 * 자식 컴포넌트 트리에서 발생하는 런타임 에러를 catch하여
 * 앱 전체가 크래시되는 것을 방지한다.
 * 에러 발생 시 터미널 스타일의 500 에러 화면을 표시하며,
 * 홈(~)과 글 목록(/posts)으로의 복구 링크를 제공한다.
 *
 * children prop이 변경되면(라우트 전환 등) 자동으로 에러 상태를 리셋한다.
 *
 * @exports ErrorBoundary
 */

import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/not-found/not-found-page.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /** 에러 발생 시 state를 갱신하여 fallback UI를 렌더링하도록 한다 */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /** 에러 정보를 콘솔에 로깅한다 (추후 에러 리포팅 서비스 연동 가능) */
  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  /** children이 변경되면(라우트 전환) 에러 상태를 자동으로 초기화한다 */
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
            <Link to="/" className="primary" onClick={reset}>cd ~</Link>
            <Link to="/posts" className="secondary" onClick={reset}>cd /posts</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
