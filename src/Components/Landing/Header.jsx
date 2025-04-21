import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95 
    },
    initial: { 
      scale: 1 
    }
  };
  
  const iconVariants = {
    hover: {
      x: [0, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    closed: { 
      opacity: 0,
      y: 20 
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black p-4 relative">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">Brainy</div>
        <div className="hidden md:flex space-x-4 gap-[4rem]">
          <a href="#home" className="hover:text-purple-800 flex items-center">
            <i className="fas fa-home mr-2"></i> Home
          </a>
          <a href="#about" className="hover:text-purple-800 flex items-center">
            <i className="fas fa-info-circle mr-2"></i> About
          </a>
          <a
            href="#services"
            className="hover:text-purple-800 flex items-center"
          >
            <i className="fas fa-concierge-bell mr-2"></i> Services
          </a>
          <a
            href="#contact"
            className="hover:text-purple-800 flex items-center"
          >
            <i className="fas fa-envelope mr-2"></i> Contact
          </a>
        </div>
        <div className="hidden md:flex space-x-2">
          <Link to="/login">
            <motion.button
              className="bg-purple-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span variants={iconVariants}>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11 16l-4-4m0 0l4-4m-4 4h14" 
                  />
                </svg>
              </motion.span>
              <span className="font-semibold">Login</span>
            </motion.button>
          </Link>
          <Link to="/signup">
            <motion.button
              className="bg-purple-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span variants={iconVariants}>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
                  />
                </svg>
              </motion.span>
              <span className="font-semibold">Sign Up</span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <motion.div
          className="md:hidden z-50 w-10 h-10 rounded-full bg-transparent flex items-center justify-center cursor-pointer "
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className={`w-6 h-6 text-purple-800 ${isOpen ? "hidden" : "block"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-0 right-0 h-full bg-white shadow-2xl w-4/5 z-40 p-6 flex flex-col md:hidden"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-bold text-purple-600">Brainy</div>
              <motion.div
                className="w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer shadow-md"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
            </div>
            
            <div className="flex flex-col space-y-6 mb-8">
              <motion.a 
                href="#home" 
                className="hover:text-purple-800 flex items-center text-lg py-2 border-b border-gray-100"
                variants={navItemVariants}
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </motion.a>
              
              <motion.a 
                href="#about" 
                className="hover:text-purple-800 flex items-center text-lg py-2 border-b border-gray-100"
                variants={navItemVariants}
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </motion.a>
              
              <motion.a 
                href="#services" 
                className="hover:text-purple-800 flex items-center text-lg py-2 border-b border-gray-100"
                variants={navItemVariants}
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Services
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="hover:text-purple-800 flex items-center text-lg py-2 border-b border-gray-100"
                variants={navItemVariants}
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </motion.a>
            </div>
            
            <div className="mt-auto flex flex-col gap-4">
              <Link to="/login" onClick={toggleMenu}>
                <motion.button
                  className="bg-purple-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow w-full"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                  </svg>
                  <span className="font-semibold">Login</span>
                </motion.button>
              </Link>
              
              <Link to="/signup" onClick={toggleMenu}>
                <motion.button
                  className="bg-white text-purple-800 border-2 border-purple-800 py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow w-full"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span className="font-semibold">Sign Up</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for when sidebar is open */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;