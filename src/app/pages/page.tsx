"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// Import the CSS file in your global CSS or layout file
import '../Styles/banner.css'; // Ensure you have this CSS file in your styles directory

const page = () => {
  return (
    <div className="enterprise-banner w-full px-4 sm:px-20 py-6 sm:py-16 bg-white">
      <div className="enterprise-box rounded-3xl border border-purple-200 p-6 sm:p-16 flex flex-col gap-4 sm:gap-20 lg:flex-row lg:items-center bg-gradient-to-r from-white to-purple-100 shadow-lg w-full">
        {/* Main content that stays in place for both mobile and desktop */}
        <div className="space-y-2 lg:max-w-2xl lg:w-full mb-0 lg:mb-0 pr-0 sm:pr-4">
          <p className="banner-heading-label">FOR ENTERPRISE TEAMS</p>
          <h2>
            <span className="banner-heading">Turn Your Design System </span>
            {/* Only show "into" once based on screen size */}
            <span className="banner-heading sm:hidden"></span>
            <br className="hidden sm:block" /> 
            <span className="banner-heading">into </span>
            <span className="banner-heading-gradient">Production Ready UIs</span>
          </h2>
          
          {/* Button that only appears on desktop */}
          <div className="pt-3 hidden sm:block">
            <button className="contact-button">
              Contact Sales
              <FaArrowRight className="button-icon" />
            </button>
          </div>
        </div>
        
        {/* Features list */}
        <div className="lg:w-full lg:max-w-md flex flex-col gap-2 sm:gap-4">
          <ul className="feature-list space-y-1 sm:space-y-2">
            <li className="feature-item flex items-start sm:items-center">
              <div className="feature-bullet mr-2 text-black text-lg">•</div>
              <span className="feature-text">Syncs with your <span className="feature-highlight">existing design system</span></span>
            </li>
            <li className="feature-item flex items-start sm:items-center">
              <div className="feature-bullet mr-2 text-black text-lg">•</div>
              <span className="feature-text">Produces <span className="feature-highlight">pixel-perfect, code-ready</span> components</span>
            </li>
            <li className="feature-item flex items-start sm:items-center">
              <div className="feature-bullet mr-2 text-black text-lg">•</div>
              <span className="feature-text">Supports <span className="feature-highlight">Figma, Framer, Webflow & Wordpress</span></span>
            </li>
            <li className="feature-item flex items-start sm:items-center">
              <div className="feature-bullet mr-2 text-black text-lg">•</div>
              <span className="feature-text">Enterprise-grade <span className="feature-highlight">scalability & security</span></span>
            </li>
          </ul>
          
          {/* Button that only appears on mobile, after the feature list */}
          <div className="pt-3 block sm:hidden mt-2">
            <button className="contact-button">
              Contact Sales
              <FaArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;