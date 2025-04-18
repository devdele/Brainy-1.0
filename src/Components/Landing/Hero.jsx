import React from "react";
import HeroImage from "../../assets/hero-image3.png";
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className="text-black py-20 md:py-40 text-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-[8rem] px-6">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold animate-fadeIn">
            Welcome to Brainy.
          </h1>
          <p className="text-sm md:text-lg text-gray-700 animate-slideInLeft">
            Discover the power of Education in your daily life with Brainy.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 animate-slideInUp">
            <Link to="/Signup">
            <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600 transition duration-300">
              <span className="relative text-sm text-white">Get Started</span>
              <div className="flex items-center -space-x-3 translate-x-3 group-hover:translate-x-0">
                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-white transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            </Link>
          </div>
        </div>

      
        <div className="hidden md:block animate-zoomIn">
          <img
            src={HeroImage}
            alt="hero"
            className="w-full md:w-[40rem] h-[30rem] md:h-[25rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;



