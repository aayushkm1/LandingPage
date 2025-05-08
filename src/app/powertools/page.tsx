"use client"

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import icon from '../../../Assets/Vector (2).svg';
import bg1 from '../../../Assets/BG (1).png';
import bg2 from '../../../Assets/BG (2).png';
import bg3 from '../../../Assets/BG (3).png';
import WireFrameGenerator from '../../../Assets/Wireframe Generator.png';
import ComponentGenerator from '../../../Assets/Component Generator.png';
import ExportToFigma from '../../../Assets/Export to Figma.png';

import '../Styles/figma-tools.css'; // Ensure you have this CSS file in your styles directory
// Note: Import the CSS in your layout.js or global CSS file 
// import '@/styles/figma-tools.css';

export default function FigmaToolsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      bg: bg1,
      image: WireFrameGenerator,
      icon: '👁️',
      stats: '900+ users',
      feature: 'Supports Multi-page Flows',
      title: 'Wireframe Generator',
      description: 'Turn your ideas into wireframes – just describe what you want, well handle the layout.'
    },
    {
      id: 2,
      bg: bg2,
      image: ComponentGenerator,
      icon: '🔄',
      stats: '2.3k+ users',
      feature: 'Built-in Auto Layout',
      title: 'Component Generator',
      description: 'Generate responsive UI components in seconds, perfect for when you\'re on the go. We\'ll build it for you.'
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
    <div className="figma-tools-container mx-auto px-4 bg-white py-16 max-w-full">
      <div className="header-section mb-16">
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

      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="card rounded-xl overflow-hidden bg-white shadow-md"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-image-container relative h-48">
              <Image 
                src={card.bg} 
                alt="Background" 
                layout="fill" 
                objectFit="cover" 
                className="card-bg"
              />
              <div className="image-overlay absolute inset-0 flex items-center justify-center">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={180} 
                  height={180} 
                  className="card-tool-image"
                />
              </div>
            </div>

            <div className="card-content p-6">
              <div className="card-stats-row flex items-center justify-between mb-2">
                <div className="stats-badge flex items-center gap-1 text-gray-600 text-sm">
                  <span>{card.icon}</span>
                  <span>{card.stats}</span>
                </div>
                <div className="feature-badge text-sm text-gray-600">
                  {card.feature}
                </div>
              </div>

              <h3 className="card-title text-xl font-bold mb-2">{card.title}</h3>
              <p className="card-description text-gray-600 mb-4">
                {card.description}
              </p>

              <div className="try-button-container">
                <a 
                  href="#" 
                  className={`try-button flex items-center text-blue-600 font-medium ${hoveredCard === card.id ? 'text-blue-700' : ''}`}
                >
                  Try in Figma
                  <FaArrowRight className={`ml-2 transition-transform ${hoveredCard === card.id ? 'translate-x-1' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}