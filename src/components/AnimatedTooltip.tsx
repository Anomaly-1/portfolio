"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface TooltipItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.div>
          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white text-sm rounded-md whitespace-nowrap"
            >
              {item.name}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
