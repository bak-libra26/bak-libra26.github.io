import { createRoot } from 'react-dom/client';

import './styles/base/global.css';

import App from './App.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter basename="/">
      <ThemeProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
