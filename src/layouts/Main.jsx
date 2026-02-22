import {Outlet} from "react-router-dom";

import '../styles/layout/main.css';
import Footer from "./Footer.jsx";
import AdsenseAd from "../components/AdsenseAd.jsx";


const Main = () => {
    return (
        <main>
            <div className="container">
                <Outlet />
            </div>

            <div className="inline-promo">
                <AdsenseAd slot="1102442335" />
            </div>
        </main>
    )
}

export default Main;