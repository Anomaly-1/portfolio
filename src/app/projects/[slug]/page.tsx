'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/app/data/projects';
import HomeIconButton from '@/components/HomeIconButton';
import { DotBackground } from '@/components/dotbackground';
import { DitherShader } from '@/components/dither-shader';
import { TerminalText } from '@/components/terminal-text';
import { ChevronLeft } from 'lucide-react';
import Gallery from '@/components/Gallery';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);
  const [imageHovered, setImageHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [galleryViewerOpen, setGalleryViewerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageMouseMove = () => {
    // Not needed for simple fade, but kept for potential future use
  };

  const handleImageMouseEnter = () => {
    setImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setImageHovered(false);
  };

  if (!project) {
    return (
      <DotBackground>
        <div className="relative w-full min-h-screen px-6 py-16 flex items-center justify-center">
          <HomeIconButton className="fixed top-8 left-8 z-50" />
          <div className="text-center">
            <h1 className="text-4xl text-white mb-4">Project not found</h1>
            <Link href="/projects" className="text-yellow-400 hover:text-yellow-300">
              Back to projects
            </Link>
          </div>
        </div>
      </DotBackground>
    );
  }

  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        {/* Back Button */}
        {!galleryViewerOpen && ( 
          <Link href="/projects" className="fixed top-8 right-8 z-50 group flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300 animate-fadeIn">
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
        )}

        <div className="relative z-10 w-full max-w-6xl mx-auto mt-16">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <div className="flex flex-col justify-center" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.2s'
            }}>
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight drop-shadow-lg overflow-hidden">
                    <span style={{
                      display: 'inline-block',
                      animation: 'slideInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both'
                    }}>
                      {project.title}
                    </span>
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-yellow-400 to-transparent" style={{
                    animation: 'expandWidth 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both',
                    transformOrigin: 'left'
                  }}></div>
                </div>

                <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed" style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0.6s'
                }}>
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0.8s'
                }}>
                  <h3 className="text-sm font-semibold text-yellow-400 mb-3 tracking-widest">
                    TECHNOLOGIES
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 border border-yellow-400/30 text-yellow-300 text-xs font-medium rounded hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm"
                        style={{
                          animation: `fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.9 + index * 0.05}s both`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '1s'
                }}>
                  <h3 className="text-sm font-semibold text-yellow-400 mb-3 tracking-widest">
                    KEY FEATURES
                  </h3>
                  <ul className="space-y-2">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3" style={{
                        animation: `slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.1 + index * 0.1}s both`
                      }}>
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                        <span className="text-neutral-200 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link Terminal Section */}
                {project.links && project.links.length > 0 && (
                  <div
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: '1.3s',
                    }}
                    className="mt-8"
                  >
                    {/* Single Terminal Widget */}
                    <div className="group block p-4 bg-black border border-yellow-400/30 rounded-lg hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 overflow-hidden">
                      
                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 mb-4 border-b border-yellow-400/20 pb-3">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60 group-hover:bg-red-400 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60 group-hover:bg-yellow-400 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60 group-hover:bg-green-400 transition-colors" />
                        </div>
                        <span className="text-xs text-yellow-400/50 ml-2 font-mono">project_links.exe</span>
                      </div>

                      {/* Terminal Content - Multiple Clickable Sections */}
                      <div className="font-mono text-sm">
                        <div className="text-yellow-500/60 mb-4">
                          <span>$</span>
                          <span className="ml-2">available_links</span>
                        </div>

                        {/* Link Sections */}
                        <div className="space-y-3">
                          {project.links.map((linkItem, index) => (
                            <a
                              key={index}
                              href={linkItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link block pl-4 py-2 -ml-4 rounded hover:bg-yellow-400/10 transition-all duration-300"
                              style={{
                                animation: `fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${1.5 + index * 0.1}s both`,
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-yellow-400/40 group-hover/link:text-yellow-400 transition-colors duration-300">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-yellow-300">→</span>
                                <TerminalText
                                  text={linkItem.linkMessage || 'View Link'}
                                  scrambleDuration={3000}
                                  holdDuration={1000}
                                  className="text-sm group-hover/link:text-yellow-200 transition-colors duration-300"
                                  trigger={mounted}
                                />
                                <span className="ml-auto text-xs text-yellow-400/0 group-hover/link:text-yellow-400/60 transition-all duration-300 opacity-0 group-hover/link:opacity-100">
                                  [OPEN] ↗
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Terminal Footer */}
                      <div className="mt-4 pt-3 border-t border-yellow-400/20 text-xs text-yellow-400/40 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" />
                        <span>{project.links.length} link{project.links.length > 1 ? 's' : ''} available</span>
                        <span className="ml-auto group-hover:text-yellow-400/60 transition-colors duration-300">
                          click to navigate →
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Showcase */}
            <div className="flex items-center justify-center" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1) rotateY(0)' : 'scale(0.95) rotateY(-10deg)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.4s',
              perspective: '1000px'
            }}>
              <div className="relative w-full aspect-square group">
                {/* Showcase Container */}
                <div
                  ref={imageContainerRef}
                  className="relative w-full h-full border-2 border-yellow-400/20 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 to-black transition-all duration-500 group-hover:border-yellow-400/50"
                  onMouseEnter={handleImageMouseEnter}
                  onMouseLeave={handleImageMouseLeave}
                  onMouseMove={handleImageMouseMove}
                >
                  {/* Grid Background Effect */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(250,204,21,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,204,21,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                  </div>

                  {project.normalImage ? (
                    <>
                      {/* Yellow Dithered Image (Default) - Dithered in yellow */}
                      <div 
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          willChange: 'opacity',
                          opacity: imageHovered ? 0 : 1,
                          transition: 'opacity 0.4s ease-in-out',
                        }}
                      >
                        <DitherShader
                          src={project.normalImage}
                          className={`w-full h-full ${project.fitImage ? 'object-contain' : 'object-cover'}`}
                          ditherMode="bayer"
                          colorMode="duotone"
                          primaryColor="#000000"
                          secondaryColor="#ffaa00"
                          colorLevels={16}
                          gridSize={2}
                          brightness={0.1}
                          contrast={1.2}
                          threshold={0.5}
                          objectFit={project.fitImage ? 'contain' : 'cover'}
                        />
                      </div>

                      {/* Original Image Layer - Simple Fade */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          opacity: imageHovered ? 1 : 0,
                          transition: 'opacity 0.4s ease-in-out',
                          willChange: 'opacity',
                        }}
                      >
                        <img
                          src={project.normalImage}
                          alt={project.title}
                          className={`w-full h-full ${project.fitImage ? 'object-contain' : 'object-cover'}`}
                          draggable={false}
                          />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center flex-col gap-4">
                      <div className="w-20 h-20 border-2 border-yellow-400/50 rounded-lg flex items-center justify-center animate-pulse">
                        <span className="text-yellow-400 text-2xl">📸</span>
                      </div>
                      <p className="text-neutral-400 text-center px-8">
                        Screenshot placeholder - Add your project image here
                      </p>
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -inset-4 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.showGallery && project.galleryImages && project.galleryImages.length > 0 && (
              <Gallery
                images={project.galleryImages}
                projectTitle={project.title}
                mounted={mounted}
                onViewerOpenChange={setGalleryViewerOpen}
              />
          )}

          {/* Related Projects */}
          <div className="mt-20 pt-12 border-t border-neutral-700" style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '1.4s'
          }}>
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(p => p.slug !== slug && p.categories?.some(cat => project.categories?.includes(cat)))
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <Link key={relatedProject.slug} href={`/projects/${relatedProject.slug}`}>
                    <div 
                      className="group p-6 bg-black border border-neutral-600 rounded-lg hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 cursor-pointer h-full"
                      style={{
                        animation: `slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.5 + index * 0.1}s both`
                      }}
                    >
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <p className="text-neutral-400 text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {relatedProject.categories?.slice(0, 2).map((cat, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Animations */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 30rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Animation Keyframes */
       @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </DotBackground>
  );
}
