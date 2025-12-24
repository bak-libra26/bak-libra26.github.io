import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import AllPosts from './pages/AllPosts';
import { getCurrentSeason } from './utils/theme';
import './App.css';

function App() {
  const [season, setSeason] = React.useState('');

  React.useEffect(() => {
    const currentSeason = getCurrentSeason();
    setSeason(currentSeason);
    document.documentElement.setAttribute('data-season', currentSeason);
  }, []);

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {season === 'winter' && <Snowfall />}
        <Header />
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
