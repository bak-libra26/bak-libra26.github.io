import '../styles/layout/footer.css';

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
