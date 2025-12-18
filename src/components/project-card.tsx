'use client';
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
  buttonText: string;
  categories?: string[];
  image?: string;
  normalImage?: string;
}

export function ProjectCard({ title, description, icon, link, buttonText, categories = [], image, normalImage }: ProjectCardProps) {
  const [loaded, setLoaded] = useState(false);
  const isHardware = categories.includes('Hardware');
  return (
    <div className="group relative bg-black border border-neutral-600 p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-400/50">
      {/* Target rectangle selector */}
      <div className="absolute inset-0 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-95"></div>
      
      {/* Corner target indicators */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-medium text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-200 text-sm font-normal mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* Categories */}
        {categories.filter(cat => cat !== 'Software' && cat !== 'Hardware').length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.filter(cat => cat !== 'Software' && cat !== 'Hardware').map((category, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-800 border border-neutral-600 text-neutral-300 text-xs font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <div className="mb-6 flex items-center justify-center h-64 bg-neutral-900 rounded-lg group-hover:bg-neutral-800 transition-colors duration-300 relative overflow-hidden">
          {image ? (
            <>
              {!loaded && (
                <div className="absolute inset-0 bg-neutral-700 animate-pulse rounded-lg"></div>
              )}
              <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 ${loaded ? '' : 'opacity-0'}`}
                onLoad={() => setLoaded(true)}
              />
              {normalImage && (
                <img
                  src={normalImage}
                  alt={title}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 ${loaded ? '' : 'opacity-0'}`}
                />
              )}
            </>
          ) : (
            <div className="w-20 h-20">
              <img src={icon} alt={title} className="w-full h-full object-contain" />
            </div>
          )}
        </div>
        
        {!isHardware && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-neutral-800 border border-neutral-600 text-neutral-200 text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
