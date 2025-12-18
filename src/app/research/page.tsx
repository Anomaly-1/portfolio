"use client";
import React, { useState, useEffect } from "react";
import { research } from "@/app/data/research";
import HomeIconButton from "@/components/HomeIconButton";
import { DotBackground } from "@/components/dotbackground";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ResearchPage() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(0);
  const item = research[selected];
  const canGoPrev = selected > 0;
  const canGoNext = selected < research.length - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setSelected(selected - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setDirection(1);
      setSelected(selected + 1);
    }
  };

  // Animation variants for main card
  const cardVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16 flex flex-col">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Research
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              Selected research projects, papers, and experiments.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-start justify-center mb-8">
            {/* Main Card */}
            <div className="flex-1 max-w-4xl">
              <div className="bg-black border border-neutral-600 rounded-xl p-8 shadow-lg h-[600px] flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="overflow-y-auto pr-2 flex-1"
                  >
                    <h2 className="text-3xl font-medium text-white mb-4">
                      {item.title}
                    </h2>
                    {item.status === 'wip' ? (
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse mb-2"></div>
                        <span className="text-yellow-400 text-sm font-medium">Work in Progress</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {item.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-neutral-800 border border-neutral-600 text-neutral-200 text-sm font-medium rounded hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                    {item.embedUrl && (
                      <div className="mt-4 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900">
                        <iframe
                          src={item.embedUrl}
                          className="w-full h-80"
                          title={item.title}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Terminal Description */}
            <div className="w-full lg:w-96">
              <TerminalDescription description={item.description} key={selected} />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canGoPrev
                  ? "border-neutral-600 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10"
                  : "border-neutral-700 text-neutral-500 cursor-not-allowed"
              }`}
              aria-label="Previous research"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {research.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > selected ? 1 : -1);
                    setSelected(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selected
                      ? "bg-yellow-400"
                      : "bg-neutral-600 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to research ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canGoNext
                  ? "border-neutral-600 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10"
                  : "border-neutral-700 text-neutral-500 cursor-not-allowed"
              }`}
              aria-label="Next research"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </DotBackground>
  );
}

// Terminal Description Component
function TerminalDescription({ description }: { description: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    
    const words = description.split(" ");
    let currentText = "";
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < words.length) {
        currentText += (index > 0 ? " " : "") + words[index];
        setDisplayedText(currentText);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50); // Adjust speed as needed
    
    return () => clearInterval(typeInterval);
  }, [description]);

  return (
    <div className="bg-black border border-neutral-600 rounded-lg p-6 font-mono text-sm">
      <div className="text-yellow-400 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
        <span>Research Terminal</span>
      </div>
      <div className="text-yellow-300 leading-relaxed">
        {displayedText}
        {isTyping && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
}
