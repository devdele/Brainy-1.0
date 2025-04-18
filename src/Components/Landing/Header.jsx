import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-black p-4">
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
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="fas fa-times w-6 h-6 text-black"></i>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
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
      )}
    </header>
  );
};

export default Header;
