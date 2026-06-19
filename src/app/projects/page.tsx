'use client';
import React from 'react';
import { projects } from '@/app/data/projects';
import HomeIconButton from '@/components/HomeIconButton';
import ProjectTimelineComponent from '@/components/ProjectTimeline';
import { DotBackground } from '@/components/dotbackground';

export default function ProjectsPage() {
  return (
    <DotBackground>
      <div className="relative w-full min-h-screen">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        <ProjectTimelineComponent projects={projects} />
      </div>
    </DotBackground>
  );
}
