import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import CompanyPage from './components/CompanyPage';
import GunRunnerPage from './components/GunRunnerPage';
import ContactFooter from './components/ContactFooter';
import LockScreen from './components/LockScreen';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Initial System Boot Sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // 1. Show System Boot Animation
  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-meridian-dark text-meridian-red font-display tracking-widest uppercase relative overflow-hidden z-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="text-4xl font-black mb-4 animate-pulse">NMT_SYSTEM_BOOT</div>
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
          <div className="h-full bg-meridian-red animate-[width_2s_ease-in-out_forwards] w-full origin-left" />
        </div>
        <div className="mt-2 text-xs font-mono text-gray-500">INITIALIZING SECURITY PROTOCOLS...</div>
      </div>
    );
  }

  // 2. Show Lock Screen until authenticated
  if (!isAuthenticated) {
    return <LockScreen onUnlock={() => setIsAuthenticated(true)} />;
  }

  // 3. Show Main Application with Routing
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-meridian-dark min-h-screen text-meridian-light selection:bg-meridian-red selection:text-white">
        {/* Global Atmospherics */}
        <div className="bg-noise" />
        <div className="scanlines" />
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/gun-runner" element={<GunRunnerPage />} />
          </Routes>
        </main>
        
        <ContactFooter />
      </div>
    </HashRouter>
  );
};

export default App;