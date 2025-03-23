import { cn } from "../libs/utils";
import React from "react";

interface GridBackgroundProps {
  children: React.ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black "></div>
      {/* Gradient text */}
      <div className="relative z-20 py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </div>
    </div>
  );
}