"use client";
import React from "react";
import { cn } from "../lib/utils";
import {
  // Frontend Icons
  SiHtml5 as HtmlIcon,
  SiCss3 as CssIcon,
  SiReact as ReactIcon,
  // Backend Icons
  SiPython as PythonIcon,
  SiTypescript as TypescriptIcon,
  SiJavascript as JavascriptIcon,
  SiCplusplus as CPlusPlusIcon,
  SiSharp as CSharpIcon,
  // Hardware Icons
  SiArduino as ArduinoIcon,
  SiRaspberrypi as RaspberryPiIcon,
  // Miscellaneous Icons
  SiUnity as UnityIcon,
  SiFramer as FramerIcon,
  SiFigma as FigmaIcon,
  SiGodotengine as GodotIcon,
  SiGit as GitIcon,
} from "react-icons/si";
import { AnimatedTooltip } from "./AnimatedTooltip";

const iconClassName = "h-16 w-16 transition-all duration-300 hover:scale-110";

export function TechStack() {
  const features = [
    {
      title: "Frontend",
      description: "These are used to make things look nice and accessible.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Backend",
      description: "These are used to make things functional.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
    },
    {
      title: "Hardware",
      description: "These are for working with hardware.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Miscellaneous",
      description: "These are for specific use-cases.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="-mb-80 lg:-mt-24 relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Tech Stack
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          I stay above the curve and adapt to new technologies. My specialties lie in AI and web development.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

// Frontend Icons with Tooltips
export const SkeletonOne = () => {
  const frontendIcons = [
    { id: 1, name: "React", icon: <ReactIcon className={`${iconClassName} text-blue-500`} /> },
    { id: 2, name: "HTML", icon: <HtmlIcon className={`${iconClassName} text-orange-500`} /> },
    { id: 3, name: "CSS", icon: <CssIcon className={`${iconClassName} text-blue-600`} /> },
  ];

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 pb-8 mx-auto bg-[#0a1a2f] shadow-2xl group h-full rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <AnimatedTooltip items={frontendIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Backend Icons with Tooltips
export const SkeletonTwo = () => {
  const backendIcons = [
    { id: 1, name: "Python", icon: <PythonIcon className={`${iconClassName} text-yellow-500`} /> },
    { id: 2, name: "TypeScript", icon: <TypescriptIcon className={`${iconClassName} text-blue-600`} /> },
    { id: 3, name: "JavaScript", icon: <JavascriptIcon className={`${iconClassName} text-yellow-400`} /> },
    { id: 4, name: "C++", icon: <CPlusPlusIcon className={`${iconClassName} text-blue-700`} /> },
    { id: 5, name: "C#", icon: <CSharpIcon className={`${iconClassName} text-purple-600`} /> },
  ];

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 pb-8 mx-auto bg-[#0a1a2f] shadow-2xl group h-full rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <AnimatedTooltip items={backendIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Hardware Icons with Tooltips
export const SkeletonThree = () => {
  const hardwareIcons = [
    { id: 1, name: "Arduino", icon: <ArduinoIcon className={`${iconClassName} text-green-500`} /> },
    { id: 2, name: "Raspberry Pi", icon: <RaspberryPiIcon className={`${iconClassName} text-red-600`} /> },
  ];

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 pb-8 mx-auto bg-[#0a1a2f] shadow-2xl group h-full rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <AnimatedTooltip items={hardwareIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Miscellaneous Icons with Tooltips
export const SkeletonFour = () => {
  const miscellaneousIcons = [
    { id: 1, name: "Unity", icon: <UnityIcon className={`${iconClassName} text-gray-500`} /> },
    { id: 2, name: "Framer", icon: <FramerIcon className={`${iconClassName} text-pink-500`} /> },
    { id: 3, name: "Figma", icon: <FigmaIcon className={`${iconClassName} text-purple-500`} /> },
    { id: 4, name: "Godot", icon: <GodotIcon className={`${iconClassName} text-green-500`} /> },
    { id: 5, name: "Git", icon: <GitIcon className={`${iconClassName} text-orange-500`} /> },
  ];

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 pb-8 mx-auto bg-[#0a1a2f] shadow-2xl group h-full rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <AnimatedTooltip items={miscellaneousIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};