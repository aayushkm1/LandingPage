import React from 'react';

const page = () => {
  return (
    <div className="w-full px-4 sm:px-20 py-6 sm:py-16 bg-white">
      <div className="rounded-3xl border border-purple-200 p-6 sm:p-16 flex flex-col gap-4 sm:gap-20 lg:flex-row lg:items-center bg-gradient-to-r from-white to-purple-100 shadow-lg w-full">
        {/* Main content that stays in place for both mobile and desktop */}
        <div className="space-y-2 lg:max-w-2xl lg:w-full mb-0 lg:mb-0 pr-0 sm:pr-4">
          <p className="text-sm uppercase font-medium text-gray-500 tracking-wide">FOR ENTERPRISE TEAMS</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
            Turn Your Design System{" "}
            <span className="sm:hidden">into</span>
            <br className="hidden sm:block" /> 
            <span className="sm:inline">into</span>{" "}
            <span className="font-bold italic bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Production Ready UIs</span>
          </h2>
          
          {/* Button that only appears on desktop */}
          <div className="pt-3 hidden sm:block">
            <button className="rounded-lg h-[40px] w-[143px] px-4 py-2 text-sm font-medium flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500">
              Contact Sales
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Features list */}
        <div className="lg:w-full lg:max-w-md flex flex-col gap-2 sm:gap-4">
          <ul className="space-y-1 sm:space-y-2">
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-gray-800 text-sm sm:text-lg">Syncs with your <span className="font-semibold">existing design system</span></span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-gray-800 text-sm sm:text-lg">Produces <span className="font-semibold">pixel-perfect, code-ready</span> components</span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-gray-800 text-sm sm:text-lg">Supports <span className="font-semibold">Figma, Framer, Webflow & Wordpress</span></span>
            </li>
            <li className="flex items-start sm:items-center">
              <div className="mr-2 text-black text-lg">•</div>
              <span className="text-gray-800 text-sm sm:text-lg">Enterprise-grade <span className="font-semibold">scalability & security</span></span>
            </li>
          </ul>
          
          {/* Button that only appears on mobile, after the feature list */}
          <div className="pt-3 block sm:hidden mt-2">
            <button className="rounded-lg h-[40px] w-[143px] px-4 py-2 text-sm font-medium flex items-center justify-center text-white bg-gradient-to-r from-violet-500 to-blue-500">
              Contact Sales
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;