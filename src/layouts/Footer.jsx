/**
 * @file Footer - 사이트 하단 푸터 컴포넌트
 *
 * 저작권 정보, GitHub 프로필 링크, 이메일 연락처를 표시하는
 * 간결한 푸터를 렌더링한다. 연도는 현재 날짜 기준으로 자동 갱신된다.
 *
 * @module layouts/Footer
 */

import '../styles/layout/footer.css';

/**
 * 사이트 푸터 컴포넌트
 *
 * ASCII 구분선 아래에 저작권 표시, GitHub 링크, 이메일 링크를 포함한다.
 * 외부 링크는 새 탭에서 열리며 보안을 위해 rel="noopener noreferrer"가 적용된다.
 *
 * @returns {React.ReactElement} 푸터 요소
 */
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__divider">────────────────────────────────────────</div>
      <div>
        &copy; {new Date().getFullYear()} sim.junghun
        <span>·</span>
        <a href="https://github.com/bak-libra26" target="_blank" rel="noopener noreferrer">github</a>
        <span>·</span>
        <a href="mailto:bak-libra26@gmail.com">email</a>
      </div>
    </footer>
  );
};

export default Footer;
