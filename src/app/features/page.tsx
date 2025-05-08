import React from 'react';
import ThunderIcon from './ThunderIcon';
import '../Styles/features.css';

// Import images with proper TypeScript types
import FigmaImage from '../../../Assets/Frame 1973342148.png';
import ReactImage from '../../../Assets/Frame 1973342153.png';
import FramerImage from '../../../Assets/Group 1171281979.svg';

// Define type for imported images
// This handles the StaticImageData type that comes from Next.js or similar
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

// Helper function to get src from various image types
const getImageSrc = (image: string | StaticImageData): string => {
  if (typeof image === 'string') {
    return image;
  }
  return image.src;
};

const Page: React.FC = () => {
  return (
    <div className="w-full max-w-full bg-white mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="title-hero mb-2">Design Smarter</h1>
        <div className="flex items-center justify-center flex-wrap">
          <span className="title-hero">Build</span>
          <span className="gradient-text ml-4 mr-2">Quicker</span>
          <ThunderIcon />
          <span className="title-hero ml-4">Look</span>
          <span className="gradient-text ml-4">Better</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Figma Component Card */}
        <div className="card-container">
          <div className="card-image-container">
            <img 
              src={getImageSrc(FigmaImage)} 
              alt="Figma Component Library" 
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="card-content">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Fully Customizable</span>
              <span className="text-xs text-gray-500">Mobile Responsive</span>
            </div>
            <h3 className="text-lg text-black font-bold mb-2">Figma Component Library</h3>
            <p className="text-sm text-gray-700">
              Craft stunning designs faster with 350+ pixel-perfect Figma components
            </p>
          </div>
        </div>

        {/* React/HTML Component Card */}
        <div className="card-container">
          <div className="card-image-container">
            <img 
              src={getImageSrc(ReactImage)} 
              alt="React/HTML Component Library" 
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="card-content">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Fast Integration</span>
              <span className="text-xs text-gray-500">Mobile Responsive</span>
            </div>
            <h3 className="text-lg text-black font-bold mb-2">React/HTML Component Library</h3>
            <p className="text-sm text-gray-700">
              Amazing collection of drag-and-drop UI components for your HTML &amp; modern React apps
            </p>
          </div>
        </div>

        {/* Framer Component Card */}
        <div className="card-container">
          <div className="card-image-container flex  justify-center items-center">
            <img 
              src={getImageSrc(FramerImage)} 
              alt="Framer Component Library" 
              className="w-10 h-10 "
            />
          </div>
          <div className="card-content">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Fully Customizable</span>
              <span className="text-xs text-gray-500">Mobile Responsive</span>
            </div>
            <h3 className="text-lg text-black font-bold mb-2">Framer Component Library</h3>
            <p className="text-sm text-gray-700">
              Craft beautiful sites in minutes with 350+ Framer-ready components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;