import {Link, useLocation} from "react-router-dom";

import '../styles/layout/header.css';

const navigators = [
    { name: '홈', to: '/' },
    { name: '전체 글', to: '/posts?page=1' },
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
                                return (
                                    <li key={navigator.to}>
                                        <a href={navigator.to}
                                              className='nav-link'
                                              data-active={pathname === navigator.to || undefined}>
                                            { navigator.name }
                                        </a>
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