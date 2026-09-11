import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { useTheme } from './hooks/useTheme';
import './App.css';

/**
 * Keying the wrapper on pathname remounts it each navigation, which restarts
 * the CSS entrance animation. Cheap page transition with no extra dependency.
 */
const Page = () => {
  const location = useLocation();
  return (
    <main id="main" className="page" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Old links and anything unrecognised land on the home page. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

function App() {
  const { theme, toggle } = useTheme();

  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar theme={theme} onToggleTheme={toggle} />
        <ScrollProgress />
        <Page />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
