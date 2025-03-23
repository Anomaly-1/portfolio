"use client";
 
import { Carousel } from "./Carousel";
export function RecentProjects() {
  const slideData = [
    {
      title: "FlowPro",
      button: "Explore Projects",
      src: "/stockmarket.jpg",
    },
    {
      title: "Platemaster",
      button: "Explore Projects",
      src: "/food.png",
    },
    {
      title: "AgrIQ",
      button: "Explore Projects",
      src: "/plants.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}