import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css';

import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";


createRoot(document.getElementById('root'))
.render(
    <BrowserRouter>
        <StrictMode>
            <ScrollToTop />
            <App />
        </StrictMode>,
    </BrowserRouter>
)
