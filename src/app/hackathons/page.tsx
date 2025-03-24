"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/libs/use-outside-click";
import { GridBackground } from '@/components/GridBackground';
import { FloatingDock } from "@/components/FloatingDock";
import links from "@/data/links";
import Image from 'next/image';

export default function Page() {
  const [active, setActive] = useState<(typeof hackathons)[number] | boolean | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="h-auto min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
      <GridBackground>
        <h1 className="fixed top-0 left-0 w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight text-black dark:text-white py-8 bg-white dark:bg-black z-50">
          Hackathons
        </h1>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {hackathons.map((hackathon, index) => (
            <motion.div
              layoutId={`card-${hackathon.title}-${id}`}
              key={`card-${hackathon.title}-${id}`}
              onClick={() => setActive(hackathon)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row items-center">
                <motion.div layoutId={`image-${hackathon.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={hackathon.src}
                    alt={hackathon.title}
                    className="h-24 w-24 md:h-20 md:w-20 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${hackathon.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-lg"
                  >
                    {hackathon.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${hackathon.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-base"
                  >
                    {hackathon.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </GridBackground>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-48 lg:h-48 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-base md:text-lg lg:text-xl h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <FloatingDock items={links} />
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const hackathons = [
  {
    description: "DAIS International Hackathon",
    title: "1st Place",
    src: "/DAIS.jpeg",
    content: () => {
      return (
        <p>
          Developed a chess-based game with an algorithmic bot entirely from scratch using Python. The bot utilized advanced AI techniques to provide a challenging and engaging experience for players, showcasing my skills in game development and artificial intelligence.
        </p>
      );
    },
  },
  {
    description: "KuriusHacks: March Edition",
    title: "Best of Water Challenge",
    src: "/core.png",
    content: () => {
      return (
        <p>
          Created <strong>Core</strong>, a survey and information app designed to evaluate users' energy and water usage. The app provides personalized steps to reduce their environmental footprint, combining intuitive design with actionable insights to promote sustainability.
        </p>
      );
    },
  },
  {
    description: "HackVortex Hackathon #2",
    title: "3rd Place",
    src: "/todolist.png",
    content: () => {
      return (
        <p>
          Built a sleek and efficient Todo list application that simplifies task management. The app features a clean user interface, real-time updates, and seamless integration across devices, making it a practical tool for productivity and organization.
        </p>
      );
    },
  },
  {
    description: "IngeniumSTEM Summer Hacks 1.0",
    title: "Participated",
    src: "/stockmarketsmall.png",
    content: () => {
      return (
        <p>
          I created <strong>FlowPro</strong>, a tracker for purchases, assets, and stocks. It gives the user a dashboard representing all data visually.
        </p>
      );
    },
  },
  {
    description: "Hack United",
    title: "Participated",
    src: "/UnitedHacks.jpeg",
    content: () => {
      return (
        <p>
          Built a simple maze solver.
        </p>
      );
    },
  },
  {
    description: "More Coming Soon!",
    title: "Stay Tuned",
    src: "/tv.png",
    content: () => {
      return (
        <p>
          Exciting new hackathon projects are on the way. Stay tuned! 🙂
        </p>
      );
    },
  },
];