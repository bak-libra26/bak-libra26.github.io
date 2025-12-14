import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cheoma from './components/Cheoma';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import AllPosts from './pages/AllPosts';
import { getCurrentSeason } from './utils/theme';
import './App.css';

function App() {
  React.useEffect(() => {
    const season = getCurrentSeason();
    document.documentElement.setAttribute('data-season', season);
  }, []);

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Header />
        <Cheoma />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/*" element={<PostDetail />} />
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
