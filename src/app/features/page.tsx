import React from 'react';
import ThunderIcon from './ThunderIcon';
import '../features/features.css';

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
    <div className="features-container w-full max-w-full bg-white mx-auto px-4 py-12 lg:p-16 flex flex-col lg:gap-16">
      {/* Hero Section */}
      <div className="text-center">
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
      <div className="cards-container flex flex-col md:flex-row gap-6 justify-center">
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
            <div className="flex items-center mb-4 gap-2">
              <div className="stats-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1">Fully Customizable</span>
              </div>
              
              <div className="feature-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1">Mobile Responsive</span>
              </div>
            </div>
            <h3 className="card-title text-lg text-black font-bold mb-2">Figma Component Library</h3>
            <p className="card-description text-sm text-gray-700">
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
            <div className="flex items-center mb-4 gap-2">
              <div className="stats-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1">Fast Integration</span>
              </div>
              
              <div className="feature-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1">Mobile Responsive</span>
              </div>
            </div>
            <h3 className="card-title text-lg text-black font-bold mb-2">React/HTML Component Library</h3>
            <p className="card-description text-sm text-gray-700">
              Amazing collection of drag-and-drop UI components for your HTML &amp; modern React apps
            </p>
          </div>
        </div>

        {/* Framer Component Card */}
        <div className="card-container">
          <div className="card-image-container framer-card-image flex flex-col justify-center items-center">
            <img 
              src={getImageSrc(FramerImage)} 
              alt="Framer Component Library" 
              className="w-10 h-10 mb-3"
            />
            <div className="coming-soon-text text-center">Coming Soon</div>
          </div>
          <div className="card-content">
            <div className="flex items-center mb-4 gap-2">
              <div className="stats-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1">Fully Customizable</span>
              </div>
              
              <div className="feature-badge rounded-md flex items-center justify-center"
                  style={{ width: '118px', height: '18px', backgroundColor: '#F3F3F3' }}>
                <span className="text-xs font-medium text-gray-600 px-2 py-1" >Mobile Responsive</span>
              </div>
            </div>
            <h3 className="card-title text-lg text-black font-bold mb-2">Framer Component Library</h3>
            <p className="card-description text-sm text-gray-700">
              Craft beautiful sites in minutes with 350+ Framer-ready components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
