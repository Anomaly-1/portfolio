import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/3DCard';
import { GridBackground } from '@/components/GridBackground';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingDock } from "@/components/FloatingDock";
import links from "@/data/links";
import projects from "@/data/projects";

export default function Page() {
  return (
    <div className="mt-120 flex flex-col items-center justify-center pt-32 pb-20">
      <GridBackground>
        <div className="relative top-0 z-50 bg-white dark:bg-black w-full py-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight text-black dark:text-white">
            PROJECTS
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 mt-8"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.tryLink}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Check it out →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      {project.tag}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </GridBackground>
      <FloatingDock items={links} />
    </div>
  );
}