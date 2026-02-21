import {Link, useLocation} from "react-router-dom";

import '../styles/layout/header.css';
import HrefUtil from "../utils/href-util.js";

const navigators = [
    { name: '홈', to: '/', path: '/' },
    { name: '전체 글', to: HrefUtil.getPostsHref({page: 1, category: '전체'}), path: '/posts' },
]

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header>
            <div className="container header-inner">
                <p className="header__site-title">
                    bak-libra26.
                </p>

                <nav>
                    <ol>
                        {
                            navigators.map((navigator) => {
                                const path = navigator.path;
                                return (
                                    <li key={navigator.to}>
                                        <Link to={navigator.to}
                                              className='nav-link'
                                              data-active={path == pathname}>
                                            { navigator.name }
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ol>
                </nav>
            </div>
        </header>
    )
};

export default Header;