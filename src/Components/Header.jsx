// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'Why This Medicine?', id: 'whyflecroin' },
    { name: 'How to Take', id: 'howitworks' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-gray-900 to-blue-900 shadow-2xl shadow-blue-900/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Medicine Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/Nvron.webp" alt="" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
                Flecroin<sup className="text-cyan-300">™</sup>
              </span>
              <span className={`text-xs ${isScrolled ? 'text-cyan-300' : 'text-blue-200'}`}>
                Flecainide 50mg & 100mg
              </span>
            </div>
          </motion.div>

          {/* Right Side - Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  isScrolled 
                    ? 'text-blue-100 hover:text-white hover:bg-blue-800/30' 
                    : 'text-white hover:text-cyan-300 hover:bg-white/10'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Bottom Border Animation */}
      <motion.div
        className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-600 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  );
};

export default Header;