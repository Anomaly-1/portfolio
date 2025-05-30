'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/3d-card';
import { projects } from '@/app/data/projects';
import HomeIconButton from '@/components/HomeIconButton';
import { GridBackground } from '@/components/bigbackground';

export default function ProjectsPage() {
  return (
    <GridBackground>
      <div className="w-full px-6 py-16 relative min-h-screen">
        <HomeIconButton className="absolute top-4 left-4" />
        <h1 className="text-4xl font-bold text-white text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-black relative group/card border border-stone-600 w-[20rem] sm:w-[24rem] lg:w-[26rem] h-auto rounded-xl p-6 pulse-glow-hover transition-shadow duration-300">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={project.image}
                      alt="thumbnail"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-white border border-white hover:text-blue-400 hover:border-blue-400 transition-all"
                    >
                      {project.buttonText}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-blue-400 hover:text-white transition-all"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </GridBackground>
  );
}
