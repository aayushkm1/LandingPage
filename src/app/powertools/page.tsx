"use client";

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

// Import static assets
import icon from '../../../Assets/Vector (2).svg';
import bg1 from '../../../Assets/BG (1).png';
import bg2 from '../../../Assets/BG (2).png';
import bg3 from '../../../Assets/BG (3).png';
import WireFrameGenerator from '../../../Assets/Wireframe Generator.png';
import ComponentGenerator from '../../../Assets/Component Generator.png';
import ExportToFigma from '../../../Assets/Export to Figma.png';

import '../powertools/figma-tools.css';

function FigmaToolsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Card data
  const cards = [
    {
      id: 1,
      bg: bg1,
      image: WireFrameGenerator,
      icon: '👁️',
      stats: '800+ users',
      feature: 'Supports Multi-page Flows',
      title: 'Wireframe Generator',
      description: 'Turn your ideas into wireframes – just describe what you need. We\'ll handle the layout.'
    },
    {
      id: 2,
      bg: bg2,
      image: ComponentGenerator,
      icon: '🔄',
      stats: '24.3k+ users',
      feature: 'Built-in Auto Layout',
      title: 'Component Generator',
      description: 'Generate responsive UI components in seconds. Just type what you need – we\'ll build it for you.'
    },
    {
      id: 3,
      bg: bg3,
      image: ExportToFigma,
      icon: '🔥',
      stats: '900+ users',
      feature: 'Figma-ready Frames',
      title: 'Export to Figma',
      description: 'Export screens made in UXMagic platform to Figma easily in just few clicks.'
    }
  ];

  return (
    <div className="figma-tools-container px-4 bg-white lg:p-16 max-w-full flex flex-col gap-16">
      {/* Header Section */}
      <div className="header-section ">
        <h1 className="figma-title mb-2">Power Tools for</h1>
        <div className="figma-subtitle-wrapper flex items-center justify-center gap-2">
          <Image 
            src={icon} 
            alt="Sparkle icon" 
            width={28} 
            height={28} 
            className="sparkle-icon"
          />
          <h2 className="figma-subtitle">Figma Ninjas</h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="card rounded-xl overflow-hidden bg-white shadow-md"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Image Container */}
            <div className="card-image-container relative">
              <Image 
                src={card.bg} 
                alt="Background" 
                fill
                sizes="(max-width: 768px) 358px, 411px"
                className="card-bg object-cover"
              />
              <div className="card-image-wrapper">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={320}
                  height={280}
                  className="card-tool-image"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="card-content lg:p-[20px]">
              <div className="flex items-center mb-4 gap-2 flex-wrap">
                <div className="rounded-md bg-gray-100 flex items-center justify-center stats-badge">
                  <span className="mr-1">{card.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{card.stats}</span>
                </div>
                
                <div className="rounded-md bg-gray-100 flex items-center justify-center feature-badge">
                  <span className="text-xs font-medium text-gray-600">{card.feature}</span>
                </div>
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">
                {card.description}
              </p>

              <div className="try-button-container">
                <a 
                  href="#" 
                  className="flex items-center text-blue-600 font-medium"
                >
                  Try in Figma
                  <span className="ml-2 inline-block transform rotate-315">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FigmaToolsPage;