import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-purple-600">Brainy</h2>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Brainy. All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-purple-800">Home</a>
        <a href="#about" className="hover:text-purple-800">About</a>
        <a href="#services" className="hover:text-purple-800">Services</a>
        <a href="#contact" className="hover:text-purple-800">Contact</a>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
