'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Project } from '@/app/data/projects';
import { DitherShader } from './dither-shader';
import ProjectDetailView from './ProjectDetailView';

interface ProjectTimelineProps {
  projects: Project[];
}

const ProjectTimelineComponent: React.FC<ProjectTimelineProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects.find(p => p.priority === 1) || projects[0]
  );
  const [showTopOnly, setShowTopOnly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    if (filter === 'software') {
      filtered = filtered.filter(p => !p.categories?.includes('Hardware'));
    } else if (filter === 'hardware') {
      filtered = filtered.filter(p => p.categories?.includes('Hardware'));
    }

    if (showTopOnly) {
      filtered = filtered.filter(p => p.priority === 1);
    }

    return filtered.sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      const aYear = parseInt(a.completionDate.split(' ')[1] || a.completionDate);
      const bYear = parseInt(b.completionDate.split(' ')[1] || b.completionDate);
      return bYear - aYear;
    });
  }, [filter, showTopOnly, projects]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [filteredProjects]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const beamY = useTransform(scrollYProgress, [0, 1], [40, Math.max(40, containerHeight - 190)]);

  const softwareCount = projects.filter(p => !p.categories?.includes('Hardware')).length;
  const hardwareCount = projects.filter(p => p.categories?.includes('Hardware')).length;
  const topProjectsCount = projects.filter(p => p.priority === 1).length;

  return (
    <div className="relative w-full min-h-screen">
      <style>{`
        .detail-view-scroll::-webkit-scrollbar {
          display: none;
        }
        .detail-view-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="fixed inset-0 bg-black pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-blue-900/5 opacity-50" />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
          <div className="text-center mb-20 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              Project Timeline
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed font-light">
              An interactive journey through my most significant work across software and hardware engineering
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border tracking-[0.05em] ${
                    filter === 'all'
                      ? 'border-[#ffaa00] text-[#ffaa00] bg-[#ffaa00]/10'
                      : 'border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:border-[#ffaa00]/40 hover:text-[#ffaa00]'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setFilter('software')}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border tracking-[0.05em] ${
                    filter === 'software'
                      ? 'border-[#ffaa00] text-[#ffaa00] bg-[#ffaa00]/10'
                      : 'border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:border-[#ffaa00]/40 hover:text-[#ffaa00]'
                  }`}
                >
                  Software ({softwareCount})
                </button>
                <button
                  onClick={() => setFilter('hardware')}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border tracking-[0.05em] ${
                    filter === 'hardware'
                      ? 'border-[#ffaa00] text-[#ffaa00] bg-[#ffaa00]/10'
                      : 'border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:border-[#ffaa00]/40 hover:text-[#ffaa00]'
                  }`}
                >
                  Hardware ({hardwareCount})
                </button>
              </div>

              <button
                onClick={() => setShowTopOnly(!showTopOnly)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border tracking-[0.05em] ${
                  showTopOnly
                    ? 'border-[#ffaa00] text-[#ffaa00] bg-[#ffaa00]/10'
                    : 'border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:border-[#ffaa00]/40 hover:text-[#ffaa00]'
                }`}
              >
                Featured ({topProjectsCount})
              </button>
            </div>

            <p className="text-sm text-neutral-500">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in this view
            </p>
          </div>

          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[minmax(420px,42%)_1fr] gap-10">
            <div className="lg:col-span-1">
              <div 
                ref={containerRef}
                className="relative space-y-4 rounded-[28px] border border-neutral-800 bg-neutral-950/85 p-6 shadow-[0_0_60px_rgba(0,0,0,0.24)]"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    bottom: '40px',
                    left: '51px',
                    width: '4px',
                    backgroundColor: 'rgba(255, 170, 0, 0.3)',
                    zIndex: 5,
                    pointerEvents: 'none',
                    borderRadius: '9999px',
                  }}
                />

                <motion.div
                  style={{
                    position: 'absolute',
                    top: beamY,
                    left: '49px',
                    width: '8px',
                    height: '150px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 170, 0, 0.9), transparent)',
                    zIndex: 6,
                    pointerEvents: 'none',
                    borderRadius: '9999px',
                    boxShadow: '0 0 20px rgba(255, 170, 0, 0.8)',
                  }}
                />

                {filteredProjects.map((project, index) => (
                  <div
                    key={project.slug}
                    className="relative animate-timeline-slide-in pl-12"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      zIndex: 2,
                    }}
                  >
                    <span
                      className="absolute top-8 inline-block h-4 w-4 rounded-full bg-[#ffaa00] border-[3px] border-black shadow-[0_0_14px_#ffaa00]"
                      style={{ left: '22px', zIndex: 10 }}
                    />

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-left"
                    >
                      <div
                        className={`group overflow-hidden rounded-[18px] border transition-all duration-300 relative ${
                          selectedProject?.slug === project.slug
                            ? 'border-[#ffaa00]/40 bg-neutral-900/85 shadow-[0_0_40px_rgba(255,170,0,0.14)]'
                            : 'border-neutral-800 bg-neutral-900/70 hover:border-[#ffaa00]/30 hover:bg-neutral-900/80'
                        }`}
                      >
                        {project.priority === 1 && (
                          <div className="absolute top-4 right-4 z-20 pointer-events-none">
                            <div
                              className="bg-black border border-[#ffaa00] pl-2 pr-2.5 py-1 flex items-center gap-2 shadow-[0_0_15px_rgba(255,170,0,0.3)]"
                              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                            >
                              <span className="w-1.5 h-1.5 bg-[#ffaa00] shadow-[0_0_6px_#ffaa00]" />
                              <span className="text-[#ffaa00] text-[10px] font-bold tracking-[0.2em] font-mono uppercase">
                                Featured
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="mb-4 h-44 border border-neutral-800 bg-neutral-900/40 overflow-hidden group-hover:border-[#ffaa00]/40 transition-colors duration-300">
                          {project.normalImage ? (
                            <DitherShader
                              src={project.normalImage}
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
                          ) : (
                            <div className="w-full h-full bg-neutral-900" />
                          )}
                        </div>

                        <div className="px-4 pb-4">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <h3 className={`text-base font-semibold tracking-tight ${
                              selectedProject?.slug === project.slug ? 'text-[#ffaa00]' : 'text-white'
                            }`}>
                              {project.title}
                            </h3>
                            <span className="text-xs text-neutral-400 font-mono">
                              {project.completionDate}
                            </span>
                          </div>

                          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">
                            {project.specialization}
                          </p>

                          <p className={`text-sm leading-relaxed ${
                            selectedProject?.slug === project.slug ? 'text-neutral-200' : 'text-neutral-400'
                          }`}>
                            {project.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full border border-[#ffaa00]/30 bg-[#ffaa00]/10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffaa00]">
                              {project.projectType}
                            </span>
                            {project.priority === 1 && (
                              <span className="px-3 py-1 rounded-full border border-[#ffaa00]/30 bg-neutral-900 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffaa00]">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              {selectedProject ? (
                <div className="sticky top-20 max-h-[calc(100vh-160px)] overflow-y-auto rounded-[40px] border border-neutral-800 bg-neutral-950/90 p-6 shadow-[0_0_80px_rgba(0,0,0,0.24)] detail-view-scroll">
                  <ProjectDetailView key={selectedProject.slug} project={selectedProject} />
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center rounded-[32px] border border-neutral-800 bg-neutral-950/80 p-8">
                  <p className="text-neutral-500">Select a project to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimelineComponent;