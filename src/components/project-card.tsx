'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { DitherShader } from './dither-shader';

interface ProjectCardProps {
  title: string;
  description: string;
  links?: ProjectLink[] | null;
  buttonText: string;
  categories?: string[];
  normalImage?: string;
  slug?: string;
}

interface ProjectLink {
  link: string;
  linkMessage: string;
  label?: string; // Optional: custom terminal window name
}

export function ProjectCard({ title, description, buttonText, categories = [], normalImage, slug }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isHardware = categories.includes('Hardware');
  const isSoftware = !isHardware;

  const cardInner = (
    <div 
      className="group relative bg-black border border-neutral-600 p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-400/50 h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Corner brackets - Top Left */}
      <div className="absolute top-1 left-1 w-3.5 h-3 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner brackets - Top Right */}
      <div className="absolute top-1 right-1 w-3.5 h-3 border-r-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner brackets - Bottom Left */}
      <div className="absolute bottom-1 left-1 w-3.5 h-3 border-l-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner brackets - Bottom Right */}
      <div className="absolute bottom-1 right-1 w-3.5 h-3 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 flex-1 group-hover:translate-x-1 duration-300">
            {title}
          </h3>
          {isHovered && isSoftware && (
            <span className="text-yellow-400 text-lg animate-pulse">↗</span>
          )}
        </div>

        <p className="text-neutral-200 text-sm font-normal mb-3 leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">
          {description}
        </p>
        
        {/* Categories */}
        {categories.filter(cat => cat !== 'Software' && cat !== 'Hardware').length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.filter(cat => cat !== 'Software' && cat !== 'Hardware').map((category, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-800 border border-neutral-600 text-neutral-300 text-xs font-medium group-hover:border-yellow-400/50 group-hover:text-yellow-300 transition-all duration-300"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Image Container - Only for Hardware */}
        {isHardware && normalImage && (
          <div className="mb-6 flex items-center justify-center h-64 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-300 relative overflow-hidden border border-neutral-700 group-hover:border-yellow-400/30">
            <DitherShader
              src={normalImage}
              className="w-full h-full"
              ditherMode="bayer"
              colorMode="colorized-grayscale"
              monochromeColor="#ffaa00"
              colorLevels={8}
              gridSize={3}
              brightness={0.1}
              contrast={1.2}
              threshold={0.5}
              objectFit="cover"
            />
          </div>
        )}
        
        {/* Button/Link for Software - Not visible but card is clickable */}
        {isSoftware && slug && (
          <>
            <div className="inline-flex items-center px-4 py-2 bg-neutral-800 border border-neutral-600 text-neutral-200 text-sm font-medium group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100 pointer-events-none">
              {buttonText}
            </div>
          </>
        )}

        {/* Button/Link for Hardware */}
        {isHardware && slug && (
          <div className="inline-flex items-center px-4 py-2 bg-neutral-800 border border-neutral-600 text-neutral-200 text-sm font-medium group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors duration-300 cursor-pointer opacity-0 group-hover:opacity-100 pointer-events-none">
            {buttonText}
          </div>
        )}
      </div>

      {/* CSS Animation for scan lines */}
      <style>{`
        @keyframes scan {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/projects/${slug}`}>
        <div className="cursor-pointer h-full block">
          {cardInner}
        </div>
      </Link>
    );
  }

  return cardInner;
}
