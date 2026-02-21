import '../styles/layout/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-inner">
                <div className="footer-links">
                    <a href="https://www.instagram.com/simjungh">인스타그램</a>
                    <a href="https://github.com/bak-libra26">깃허브</a>
                    <a href="mailto:bak-libra26@gmail.com">이메일</a>
                    <span>|</span>
                    <a href="/feed.xml" >RSS</a>
                </div>
                <div className="footer-meta">
                    <p>© 2024 baklibra26. All rights reserved · Powered by GitHub Pages</p>
                </div>

            </div>
        </footer>
    )
};

export default Footer;