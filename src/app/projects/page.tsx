import React from 'react';
import { PinContainer } from '@/components/3DPin';
import { GridBackground } from '@/components/GridBackground';

export function Projects() {
    return (
        <div className="h-[40rem] flex items-center justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight text-black dark:text-white">
                PROJECTS
            </h1>
            <GridBackground>
                <PinContainer />
            </GridBackground>
        </div>
    );
};

export default Projects;