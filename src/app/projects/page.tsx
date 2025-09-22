'use client';
import React from 'react';
import { projects } from '@/app/data/projects';
import HomeIconButton from '@/components/HomeIconButton';
import { ProjectCard } from '@/components/project-card';
import { DotBackground } from '@/components/dotbackground';

export default function ProjectsPage() {
  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              A collection of my work and experiments in software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                  buttonText={project.buttonText}
                  categories={project.categories || []}
                />
              ))}
          </div>
        </div>
      </div>
    </DotBackground>
  );
}
