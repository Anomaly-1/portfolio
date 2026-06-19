'use client';
import React from 'react';
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
  priority?: 1 | 2 | 3;
}

interface ProjectLink {
  link: string;
  linkMessage: string;
  label?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  buttonText, 
  categories = [], 
  normalImage, 
  slug,
  priority = 2 
}: ProjectCardProps) {
  const isHardware = categories.includes('Hardware');
  const isSoftware = !isHardware;
  const isFeatured = priority === 1;

  const filteredCategories = categories.filter(cat => 
    !['Software', 'Hardware'].includes(cat)
  );

  const cardInner = (
    <div 
      className={`
        group relative bg-black p-6 h-full overflow-hidden cursor-pointer
        border transition-all duration-300 ease-in-out
        ${isFeatured 
          ? 'border-yellow-400/70 shadow-[0_0_25px_-8px_rgba(234,179,8,0.2)]' 
          : 'border-neutral-700 hover:border-yellow-400/50'
        }
        hover:scale-[1.015]
      `}
    >
      {/* Featured Badge - Priority 1 only */}
      {isFeatured && (
        <div className="absolute -top-px -right-px z-20">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            <span className="animate-pulse">Featured</span>
          </div>
        </div>
      )}

      {/* Corner Brackets - Gold on hover for all cards */}
      <div className="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-1.5 right-1.5 w-3 h-3 border-r-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Enhanced Glow & Bottom Line for Featured */}
      {isFeatured && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Title + Pulsing Dot */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className={`
            text-lg font-semibold tracking-tight transition-colors duration-300
            ${isFeatured ? 'text-yellow-300' : 'text-white group-hover:text-yellow-400'}
          `}>
            {title}
          </h3>
          {isFeatured && (
            <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,1)] animate-pulse flex-shrink-0 mt-1" />
          )}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isFeatured ? 'text-neutral-300' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
          {description}
        </p>
        
        {/* Categories */}
        {filteredCategories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {filteredCategories.map((category, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide border border-neutral-700 text-neutral-400 bg-neutral-900/40 group-hover:border-yellow-400/50 group-hover:text-yellow-300 transition-all duration-300"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Hardware Image */}
        {isHardware && normalImage && (
          <div className="mb-4 h-44 border border-neutral-800 bg-neutral-900/40 overflow-hidden group-hover:border-yellow-400/40 transition-colors duration-300">
            <DitherShader
              src={normalImage}
              className="w-full h-full"
              ditherMode="bayer"
              colorMode="colorized-grayscale"
              monochromeColor="#ffaa00"
              colorLevels={6}
              gridSize={3}
              brightness={0.1}
              contrast={1.2}
              threshold={0.5}
              objectFit="cover"
            />
          </div>
        )}

        {/* Software Visual Accent */}
        {isSoftware && (
          <div className="mb-4 h-44 border border-neutral-800 bg-neutral-900/20 flex items-center justify-center overflow-hidden group-hover:border-yellow-400/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-neutral-600 text-xs font-mono tracking-widest uppercase group-hover:text-yellow-500/70 transition-colors">
              {isFeatured ? '● Featured App' : 'Software'}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        {slug && (
          <div className={`
            inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium border
            transition-all duration-300
            ${isFeatured
              ? 'border-yellow-400/60 text-yellow-300 bg-yellow-400/5'
              : 'border-neutral-700 text-neutral-400 bg-neutral-800/30 group-hover:border-yellow-400 group-hover:text-yellow-300 group-hover:bg-yellow-400/10'
            }
            opacity-0 group-hover:opacity-100
          `}>
            {buttonText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        )}
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/projects/${slug}`} className="block h-full">
        <div className="cursor-pointer h-full">{cardInner}</div>
      </Link>
    );
  }

  return cardInner;
}