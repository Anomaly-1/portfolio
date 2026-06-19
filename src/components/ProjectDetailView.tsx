'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/app/data/projects';
import { DitherShader } from './dither-shader';
import { TerminalText } from './terminal-text';

interface ProjectDetailViewProps {
  project: Project;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [terminalTrigger, setTerminalTrigger] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
    setTerminalTrigger(false);
    const timer = setTimeout(() => setTerminalTrigger(true), 300);
    return () => clearTimeout(timer);
  }, [project.slug]);

  const allImages = [
    project.normalImage,
    ...(project.galleryImages || [])
  ].filter(Boolean);

  const currentImage = allImages[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-6">
      {currentImage && (
        <div className="rounded-[28px] border border-neutral-800 bg-neutral-900/70 overflow-hidden">
          <div 
            className="relative h-[480px] bg-black/40 flex items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Centered wrapper for images */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Original image layer (revealed on hover) */}
              <img
                src={currentImage}
                alt={project.title}
                className="max-w-full max-h-full object-contain transition-opacity duration-500"
                style={{ opacity: isHovering ? 1 : 0 }}
              />
              
              {/* Dithered image layer */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: isHovering ? 0 : 1 }}
              >
                <div className="max-w-full max-h-full w-full h-full flex items-center justify-center">
                  <DitherShader
                    key={currentImage}
                    src={currentImage}
                    className="max-w-full max-h-full"
                    ditherMode="bayer"
                    colorMode="colorized-grayscale"
                    monochromeColor="#ffaa00"
                    colorLevels={6}
                    gridSize={4}
                    brightness={0.1}
                    contrast={1.2}
                    threshold={0.5}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Image Navigation */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-[#ffaa00]/30 bg-neutral-900/80 hover:bg-neutral-900 hover:border-[#ffaa00]/60 transition-all duration-200"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4 text-[#ffaa00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-[#ffaa00]/30 bg-neutral-900/80 hover:bg-neutral-900 hover:border-[#ffaa00]/60 transition-all duration-200"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4 text-[#ffaa00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full border border-[#ffaa00]/30 bg-neutral-900/80 text-xs font-mono text-[#ffaa00] z-20">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
          {project.title}
        </h2>
        <p className="text-neutral-400 text-sm mb-4">{project.specialization}</p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#ffaa00]/20 bg-[#ffaa00]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffaa00]">
            {project.projectType}
          </span>
          <span className="text-sm text-neutral-400 font-mono">
            {project.completionDate}
          </span>
        </div>
      </div>

      <div className="border border-neutral-800 rounded-3xl p-5 bg-neutral-900/70">
        <p className="text-neutral-300 text-sm leading-relaxed">{project.fullDescription}</p>
      </div>

      {project.skills && project.skills.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full border border-[#ffaa00]/20 bg-neutral-900/70 text-xs font-medium text-neutral-200 hover:border-[#ffaa00]/40 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="px-3 py-2 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-xs text-neutral-300 font-mono hover:border-[#ffaa00]/30 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {project.leadership && (
          <div className="border border-neutral-800 rounded-3xl p-4 bg-neutral-900/70">
            <h4 className="text-sm font-semibold text-neutral-100 uppercase tracking-[0.18em] mb-2">
              Leadership
            </h4>
            <p className="text-sm text-neutral-400">{project.leadership}</p>
          </div>
        )}

        {project.impact && (
          <div className="border border-neutral-800 rounded-3xl p-4 bg-neutral-900/70">
            <h4 className="text-sm font-semibold text-neutral-100 uppercase tracking-[0.18em] mb-2">
              Impact & Learning
            </h4>
            <p className="text-sm text-neutral-400">{project.impact}</p>
          </div>
        )}
      </div>

      {project.features && project.features.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ffaa00] mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-neutral-800">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Links</h3>
          <div className="space-y-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-neutral-800 bg-neutral-900/70 px-4 py-3 transition-all duration-300 hover:border-[#ffaa00]/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-[#ffaa00]">
                    <TerminalText
                      text={`> ${link.label || link.linkMessage}`}
                      trigger={terminalTrigger}
                      scrambleDuration={600 + idx * 100}
                      holdDuration={100}
                    />
                  </span>
                  <span className="font-mono text-sm text-neutral-500">{link.link.replace(/https?:\/\//, '')}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailView;