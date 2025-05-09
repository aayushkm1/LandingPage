"use client"

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  title: string;
  imageSrc: string | StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-lg font-sans p-6 ">
      <p className="text-black  mb-6 text-base leading-relaxed">{testimonial}</p>
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt={`${name} profile`}
          width={44}
          height={44}
          className=""
        />
        <div className="ml-4">
          <div className="font-semibold  text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;