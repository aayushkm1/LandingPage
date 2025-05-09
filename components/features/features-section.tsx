import React from "react";
import ThunderIcon from "./ThunderIcon";
import "../features/features.css";

import FigmaBG from "../../../Assets/FigmaBG.svg";
import figma from "../../../Assets/figma.svg";
import ReactBG from "../../../Assets/ReactBG.svg";
import react from "../../../Assets/react.png";
import FramerImage from "../../../Assets/Group 1171281979.svg";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

const getImageSrc = (image: string | StaticImageData): string => {
  if (typeof image === "string") {
    return image;
  }
  return image.src;
};

const FeaturesPage: React.FC = () => {
  const cards = [
    {
      id: 1,
      bg: FigmaBG,
      image: figma,
      title: "Figma Component Library",
      description:
        "Craft stunning designs faster with 350+ pixel-perfect Figma components",
      primaryBadge: "Fully Customizable",
      secondaryBadge: "Mobile Responsive",
      isFramer: false,
    },
    {
      id: 2,
      bg: ReactBG,
      image: react,
      title: "React/HTML Component Library",
      description:
        "Amazing collection of drag-and-drop UI components for your HTML & modern React apps",
      primaryBadge: "Fast Integration",
      secondaryBadge: "Mobile Responsive",
      isFramer: false,
    },
    {
      id: 3,
      image: FramerImage,
      title: "Framer Component Library",
      description:
        "Craft beautiful sites in minutes with 350+ Framer-ready components",
      primaryBadge: "Fully Customizable",
      secondaryBadge: "Mobile Responsive",
      isFramer: true,
    },
  ];

  return (
    <div className="w-full px-4 py-8 md:py-12 lg:px-8 xl:p-16 bg-white flex flex-col">
      <div className="mb-8 md:mb-12 lg:mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold tracking-tight leading-tight">
          Design Smarter
        </h1>
        <div className="flex items-center justify-center flex-wrap">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold">
            Build
          </span>
          <span className="gradient-text ml-2 md:ml-4 mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic">
            Quicker
          </span>
          <ThunderIcon />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold ml-2 md:ml-4">
            Look
          </span>
          <span className="gradient-text ml-2 md:ml-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic">
            Better
          </span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[358px] md:w-[340px] lg:w-[310px] xl:w-[411px] flex flex-col rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            {card.isFramer ? (
              <div className="relative w-full h-[195px] md:h-[279px] overflow-hidden rounded-t-xl bg-gray-100 flex flex-col justify-center items-center">
                <img
                  src={getImageSrc(card.image)}
                  alt={card.title}
                  className="w-10 h-10 mb-3"
                />
                <div className="text-gray-600 text-2xl font-medium">
                  Coming Soon
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[195px] md:h-[279px] overflow-hidden rounded-t-xl">
                <img
                  src={getImageSrc(card.bg)}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <div className="card-image-wrapper">
                  <img
                    src={getImageSrc(card.image)}
                    alt={card.title}
                    className="card-tool-image"
                  />
                </div>
              </div>
            )}

            <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1 h-[152px]">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="flex items-center justify-center rounded bg-gray-100 px-2 py-1 w-[96px] md:w-[110px] lg:w-[118px] h-5 md:h-6 whitespace-nowrap overflow-hidden">
                  <span className="text-xs font-medium text-gray-600 truncate">
                    {card.primaryBadge}
                  </span>
                </div>

                <div className="flex items-center justify-center rounded bg-gray-100 px-2 py-1 w-[110px] md:w-[115px] lg:w-[118px] h-5 md:h-6 whitespace-nowrap overflow-hidden">
                  <span className="text-xs font-medium text-gray-600 truncate">
                    {card.secondaryBadge}
                  </span>
                </div>
              </div>

              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 text-gray-900">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-[15px] text-gray-600 mb-3 lg:mb-5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
