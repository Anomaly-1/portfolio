'use client';
import React, { useState } from 'react';
import { projects } from '@/app/data/projects';
import HomeIconButton from '@/components/HomeIconButton';
import { ProjectCard } from '@/components/project-card';
import { DotBackground } from '@/components/dotbackground';
import { Code, Cpu } from 'lucide-react';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');
  const [hardwareClicked, setHardwareClicked] = useState(false);

  const filteredProjects = projects.filter(project =>
    activeTab === 'software'
      ? !project.categories?.includes('Hardware')
      : project.categories?.includes('Hardware')
  );

  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              A collection of my work and experiments in software development.
            </p>
            
            {/* Toggle */}
            <div className="flex justify-center space-x-2 mt-6">
              <button
                onClick={() => setActiveTab('software')}
                className={`flex items-center space-x-2 px-4 py-1.5 rounded-md border-2 transition-all duration-300 ${
                  activeTab === 'software'
                    ? 'text-yellow-400 border-yellow-400 shadow-md shadow-yellow-400/50'
                    : 'text-white border-neutral-600 hover:border-yellow-400 hover:shadow-sm hover:shadow-yellow-400/30'
                } bg-neutral-900`}
              >
                <Code className="w-4 h-4" />
                <span>Software</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('hardware');
                  setHardwareClicked(true);
                }}
                className={`flex items-center space-x-2 px-4 py-1.5 rounded-md border-2 transition-all duration-300 ${
                  activeTab === 'hardware'
                    ? 'text-yellow-400 border-yellow-400 shadow-md shadow-yellow-400/50'
                    : 'text-white border-neutral-600 hover:border-yellow-400 hover:shadow-sm hover:shadow-yellow-400/30'
                } bg-neutral-900 ${activeTab === 'software' && !hardwareClicked ? 'animate-pulse text-yellow-400 border-yellow-400 shadow-md shadow-yellow-400/50' : ''}`}
              >
                <Cpu className="w-4 h-4" />
                <span>Hardware</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                  buttonText={project.buttonText}
                  categories={project.categories || []}
                  image={project.image}
                  normalImage={project.normalImage}
                />
              ))}
          </div>
        </div>
      </div>
    </DotBackground>
  );
}
