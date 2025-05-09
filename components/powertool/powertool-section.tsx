"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import icon from "../../../Assets/Vector (2).svg";
import bg1 from "../../../Assets/BG (1).png";
import bg2 from "../../../Assets/BG (2).png";
import bg3 from "../../../Assets/BG (3).png";
import WireFrameGenerator from "../../../Assets/Wireframe Generator.png";
import ComponentGenerator from "../../../Assets/Component Generator.png";
import ExportToFigma from "../../../Assets/Export to Figma.png";

import "../powertools/figma-tools.css";

function FigmaToolsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      bg: bg1,
      image: WireFrameGenerator,
      icon: "👁️",
      stats: "800+ users",
      feature: "Supports Multi-page Flows",
      title: "Wireframe Generator",
      description:
        "Turn your ideas into wireframes – just describe what you need. We'll handle the layout.",
    },
    {
      id: 2,
      bg: bg2,
      image: ComponentGenerator,
      icon: "🔄",
      stats: "24.3k+ users",
      feature: "Built-in Auto Layout",
      title: "Component Generator",
      description:
        "Generate responsive UI components in seconds. Just type what you need – we'll build it for you.",
    },
    {
      id: 3,
      bg: bg3,
      image: ExportToFigma,
      icon: "🔥",
      stats: "900+ users",
      feature: "Figma-ready Frames",
      title: "Export to Figma",
      description:
        "Export screens made in UXMagic platform to Figma easily in just few clicks.",
    },
  ];

  return (
    <div className="w-full px-4 py-8 md:py-12 lg:px-8 xl:p-16 bg-white flex flex-col">
      <div className="mb-8 md:mb-12 lg:mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold tracking-tight leading-tight">
          Power Tools for
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Image
            src={icon}
            alt="Sparkle icon"
            width={28}
            height={28}
            className="-mt-1.5"
          />
          <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic tracking-tight leading-tight">
            Figma Ninjas
          </h2>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[358px] md:w-[340px] lg:w-[310px] xl:w-[411px] flex flex-col rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[279px] overflow-hidden rounded-t-xl">
              <Image
                src={card.bg}
                alt="Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover z-[1]"
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
            <div
              className="flex-1 p-4 md:p-5 lg:p-6 flex flex-col justify-between"
              style={{ minHeight: "152px" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3 md:mb-4 flex-wrap">
                  <div className="flex items-center justify-center rounded bg-gray-100  px-2">
                    <span className="mr-1">{card.icon}</span>
                    <span className="text-xs font-medium text-gray-600">
                      {card.stats}
                    </span>
                  </div>

                  <div className="flex items-center justify-center rounded bg-gray-100 py-1 px-2">
                    <span className="text-xs font-medium text-gray-600">
                      {card.feature}
                    </span>
                  </div>
                </div>

                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-3 md:mb-4 lg:mb-5">
                  {card.description}
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center text-blue-600 font-medium text-sm md:text-base"
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
