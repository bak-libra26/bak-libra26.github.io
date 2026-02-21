import { createRoot } from 'react-dom/client'

import './styles/base/global.css';

import App from './App.jsx'
import ScrollToTop from "./ScrollToTop.jsx";
import {BrowserRouter, Router} from "react-router-dom";

createRoot(document.getElementById('root'))
.render(
    <BrowserRouter basename={'/'}>
            <ScrollToTop>

                <App />
            </ScrollToTop>
    </BrowserRouter>
)
