import {Outlet} from "react-router-dom";

import '../styles/layout/main.css';


const Main = () => {
    return (
        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>
    )
}

export default Main;