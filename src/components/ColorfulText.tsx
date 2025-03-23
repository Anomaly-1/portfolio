"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ children }: { children: string }) {
  const blueColors = [
    "rgb(217, 241, 249)", // Light blue
    "rgb(48, 145, 224)",  // Dark blue
  ];

  const textArray = children.split("");
  const midpoint = Math.ceil(textArray.length / 2);

  return textArray.map((char, index) => (
    <motion.span
      key={`${char}-${index}`} 
      initial={{
        y: 10,
        opacity: 0, 
      }}
      animate={{
        color: index < midpoint ? blueColors[0] : blueColors[1], // First half: light blue, second half: dark blue
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05, // Staggered delay for each character
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}