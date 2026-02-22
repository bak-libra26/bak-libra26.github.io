import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

import '../styles/base/layout.css';
import AdsenseAd from "../components/AdsenseAd.jsx";

const Layout = () => {
    return <div id="wrap">
        <Header />
        <Main />
        <Footer />
    </div>
}

export default Layout;