"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './banner.css';

const Banner = () => {
  return (
    <div className="w-full px-4 font-sans sm:px-20 py-6 sm:py-16 bg-white">
      <div className="rounded-3xl border border-purple-200 p-6 lg:p-10 xl:p-16 flex flex-col gap-3 xl:gap-16 lg:flex-row lg:items-center bg-gradient-to-r from-white to-purple-50 shadow-xl w-full">

        <div className="space-y-2 lg:max-w-2xl lg:w-full mb-0 lg:mb-0 pr-0 sm:pr-4">
          <p className="text-sm font-medium tracking-wider uppercase text-gray-500">FOR ENTERPRISE TEAMS</p>
          <h2>
            <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-black leading-tight tracking-tighter">Turn Your Design System </span>
            {/* Only show "into" once based on screen size */}
            <span className="text-3xl sm:hidden"></span>
            <br className="hidden sm:block" /> 
            <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-black leading-tight tracking-tighter">into </span>
            <span className="banner-heading-gradient text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold font-">Production Ready UIs</span>
          </h2>
          
          {/* Button that only appears on desktop */}
          <div className="pt-3 hidden lg:block">
            <button className="h-10 px-4 flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-purple-400 to-blue-600 text-white text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
              Contact Sales
              <FaArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        
        {/* Features list */}
        <div className="lg:w-full lg:max-w-md flex flex-col gap-1 xl:gap-4">
          <ul className="space-y-1 ">
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-[#161616] text-sm sm:text-lg lg:text-base xl:text-lg">Syncs with your <span className="font-semibold sm:font-bold">existing design system</span></span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-[#161616] text-sm sm:text-lg lg:text-base xl:text-lg ">Produces <span className="font-semibold sm:font-bold">pixel-perfect, code-ready</span> components</span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-[#161616] text-sm sm:text-lg lg:text-base xl:text-lg ">Supports <span className="font-semibold sm:font-bold">Figma, Framer, Webflow & Wordpress</span></span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-[#161616] text-sm sm:text-lg lg:text-base xl:text-lg ">Enterprise-grade <span className="font-semibold sm:font-bold">scalability & security</span></span>
            </li>
          </ul>
          
          {/* Button that only appears on mobile, after the feature list */}
          <div className="pt-3 block lg:hidden mt-2">
            <button className="h-10 px-4 flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-purple-400 to-blue-600 text-white text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
              Contact Sales
              <FaArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;