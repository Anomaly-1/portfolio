'use client';
import React from 'react';
import { GridSmallBackground } from '@/components/smallbackground';
import HomeIconButton from '@/components/HomeIconButton';
import { TechStack } from '@/components/TechStack';

export default function AboutPage() {
  return (
    <GridSmallBackground>
      <div className="relative w-full min-h-screen px-8 py-24">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto p-8 md:p-16 border border-neutral-800 rounded-xl bg-black/90 h-full">
          <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden z-[-1]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
            About Me
          </h1>
          <div className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-3xl text-center mx-auto space-y-6">
            <p>
              I am a driven software developer striving to continue building efficient and user-friendly applications. My interests span primarily full-stack development and AI. I enjoy tackling complex problems and continuously learning new technologies to enhance my skill set.
            </p>
          </div>
          <div className="mt-14 mb-64">
            <TechStack />
          </div>
        </div>
      </div>
    </GridSmallBackground>
  );
}
