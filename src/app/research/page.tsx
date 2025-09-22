"use client";
import React, { useState } from "react";
import { research } from "@/app/data/research";
import HomeIconButton from "@/components/HomeIconButton";
import { DotBackground } from "@/components/dotbackground";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ResearchPage() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for up/left, 1 for down/right
  const item = research[selected];
  const canGoUp = selected > 0;
  const canGoDown = selected < research.length - 1;

  // Helper for selector titles
  const prev = research[selected - 1]?.title || "";
  const next = research[selected + 1]?.title || "";

  // Animation variants
  const variants = {
    enter: (dir: number) => ({
      y: dir === 1 ? 24 : dir === -1 ? -24 : 0,
      opacity: 0,
      scale: 0.95,
      position: "absolute" as const,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      position: "relative" as const,
      transition: { duration: 0.25 }
    },
    exit: (dir: number) => ({
      y: dir === 1 ? -24 : dir === -1 ? 24 : 0,
      opacity: 0,
      scale: 0.95,
      position: "absolute" as const,
      transition: { duration: 0.25 }
    })
  };

// Selector component (Vertical - Desktop)
function Selector() {
    return (
      <div className="flex flex-col md:items-center md:justify-center min-w-[180px] max-w-[220px] mx-auto md:mx-0 mt-8 md:mt-0 select-none">
        {/* Up Arrow (Top) */}
        <button
          onClick={() => { if (canGoUp) { setDirection(-1); setSelected(selected - 1); }}}
          disabled={!canGoUp}
          className={`mb-2 p-2 rounded-full transition-colors ${canGoUp ? "hover:bg-yellow-400/20" : "opacity-30 cursor-not-allowed"}`}
          aria-label="Previous research"
        >
          <ChevronUp className="w-7 h-7 text-yellow-400" />
        </button>
        {/* Previous title — expands on hover, pushes content down */}
        <div className="flex items-start justify-center w-full mb-4">
          <AnimatePresence initial={false} custom={direction}>
            {canGoUp && prev && (
              <motion.span
                key={prev}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-yellow-300 text-base font-medium text-center px-2 truncate hover:truncate-none hover:whitespace-normal transition-all duration-200 ease-in-out"
                style={{ minHeight: 24 }}
              >
                {prev}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
  
        <div className="flex-1" />
  
        {/* Next title — expands on hover, pushes content up */}
        <div className="flex items-end justify-center w-full mt-4">
          <AnimatePresence initial={false} custom={direction}>
            {canGoDown && next && (
              <motion.span
                key={next}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-yellow-300 text-base font-medium text-center px-2 truncate hover:truncate-none hover:whitespace-normal transition-all duration-200 ease-in-out"
                style={{ minHeight: 24 }}
              >
                {next}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {/* Down Arrow (Bottom) */}
        <button
          onClick={() => { if (canGoDown) { setDirection(1); setSelected(selected + 1); }}}
          disabled={!canGoDown}
          className={`mt-2 p-2 rounded-full transition-colors ${canGoDown ? "hover:bg-yellow-400/20" : "opacity-30 cursor-not-allowed"}`}
          aria-label="Next research"
        >
          <ChevronDown className="w-7 h-7 text-yellow-400" />
        </button>
      </div>
    );
  }
  
  // Enhanced MobileSelector (Horizontal)
  function MobileSelector() {
    const [hovered, setHovered] = useState<"prev" | "next" | null>(null);
  
    return (
      <div className="flex flex-col items-center w-full mt-8 select-none">
        <div className="flex flex-row items-center justify-center w-full gap-1 flex-wrap">
          {/* Left Arrow */}
          <button
            onClick={() => { if (canGoUp) { setDirection(-1); setSelected(selected - 1); }}}
            disabled={!canGoUp}
            className={`p-2 rounded-full transition-colors ${canGoUp ? "hover:bg-yellow-400/20" : "opacity-30 cursor-not-allowed"}`}
            aria-label="Previous research"
          >
            <ChevronLeft className="w-7 h-7 text-yellow-400" />
          </button>
  
          {/* Previous title */}
          <div className="h-auto min-h-[18px] flex items-center justify-start max-w-28 ml-1">
            <AnimatePresence initial={false} custom={direction}>
              {canGoUp && prev && (
                <motion.span
                  key={prev}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-yellow-300 text-xs font-medium text-left px-2 truncate hover:truncate-none hover:whitespace-normal transition-all duration-200 ease-in-out"
                  style={{ minHeight: 18 }}
                  onMouseEnter={() => setHovered("prev")}
                  onMouseLeave={() => setHovered(null)}
                  onTouchStart={() => setHovered("prev")}
                  onTouchEnd={() => setTimeout(() => setHovered(null), 500)} // keep visible briefly on touch
                >
                  {prev}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
  
          <div className="flex-1 min-w-4" />
  
          {/* Next title — only show if not hovering "prev" */}
          {hovered !== "prev" && (
            <div className="h-auto min-h-[18px] flex items-center justify-end max-w-28 mr-1">
              <AnimatePresence initial={false} custom={direction}>
                {canGoDown && next && (
                  <motion.span
                    key={next}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-yellow-300 text-xs font-medium text-right px-2 truncate hover:truncate-none hover:whitespace-normal transition-all duration-200 ease-in-out"
                    style={{ minHeight: 18 }}
                    onMouseEnter={() => setHovered("next")}
                    onMouseLeave={() => setHovered(null)}
                    onTouchStart={() => setHovered("next")}
                    onTouchEnd={() => setTimeout(() => setHovered(null), 500)}
                  >
                    {next}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          )}
  
          {/* Right Arrow */}
          <button
            onClick={() => { if (canGoDown) { setDirection(1); setSelected(selected + 1); }}}
            disabled={!canGoDown}
            className={`p-2 rounded-full transition-colors ${canGoDown ? "hover:bg-yellow-400/20" : "opacity-30 cursor-not-allowed"}`}
            aria-label="Next research"
          >
            <ChevronRight className="w-7 h-7 text-yellow-400" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16 flex flex-col items-center">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Research
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              Selected research projects, papers, and experiments.
            </p>
          </div>

          {/* Main layout: viewer + selector (responsive) */}
          <div className="w-full flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Main Viewer */}
            <div className="relative bg-black border border-neutral-600 rounded-xl p-8 shadow-lg transition-all duration-300 w-full max-w-2xl h-[520px] flex flex-col justify-between overflow-hidden">
              <div className="overflow-y-auto pr-2" style={{ maxHeight: 420 }}>
                <h2 className="text-2xl font-medium text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-neutral-200 text-base font-normal mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-neutral-800 border border-neutral-600 text-neutral-200 text-xs font-medium rounded hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                {item.embedUrl && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900">
                    <iframe
                      src={item.embedUrl}
                      className="w-full h-64 md:h-80"
                      title={item.title}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Selector: vertical on desktop, horizontal on mobile */}
            <div className="hidden md:flex"><Selector /></div>
            <div className="md:hidden"><MobileSelector /></div>
          </div>
        </div>
      </div>
    </DotBackground>
  );
}
