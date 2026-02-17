import React, { useState, useEffect } from 'react';
import { Menu, X, Crosshair } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Engine', id: 'engine', type: 'anchor' },
    { name: 'Gun Runner', path: '/gun-runner', type: 'route' },
    { name: 'Company', path: '/company', type: 'route' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-meridian-dark/95 backdrop-blur-md border-meridian-red/20 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-meridian-red text-white font-display font-black text-xl">
             M
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg leading-none tracking-wider text-white">
              NORTH <span className="text-meridian-red">MERIDIAN</span>
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Clean Style */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path!}
                className={`relative font-sans font-bold uppercase tracking-widest text-sm transition-colors ${location.pathname === link.path ? 'text-meridian-red' : 'text-gray-500 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavigation(e, link.id!)}
                className="relative font-sans font-bold uppercase tracking-widest text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
          
          <a
            href="#footer"
            onClick={(e) => handleNavigation(e, 'footer')}
            className="px-6 py-2 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-meridian-red hover:text-meridian-red transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-meridian-red transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-meridian-dark border-b border-meridian-red/30 overflow-hidden relative"
          >
             <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="px-6 py-8 flex flex-col gap-6 relative z-10">
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-xl font-bold uppercase tracking-widest text-gray-300 hover:text-meridian-red flex items-center gap-2"
                  >
                     <Crosshair size={16} className="text-meridian-red" /> {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavigation(e, link.id!)}
                    className="font-display text-xl font-bold uppercase tracking-widest text-gray-300 hover:text-meridian-red flex items-center gap-2 cursor-pointer"
                  >
                    <Crosshair size={16} className="text-meridian-red" /> {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;