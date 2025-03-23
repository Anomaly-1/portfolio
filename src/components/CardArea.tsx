'use client'
import { InfoCard } from "@/components/InfoCard"
import { Box, ShieldHalf, Clock, Sparkles, ChartLine } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import {sampleArcs} from "@/data/globeConfig";
import {globeConfig} from "@/data/globeConfig";

export const CardArea = () => {

    const World = dynamic(() => import("@/components/Globe").then((m) => m.World), {
        ssr: false,
    });
    
    return (
        <ul className="mt-10 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <InfoCard
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Iterate and Improve"
            description="I am constantly looking to improve and iterate on every project to get it to an ideal quality."
            />
    
            <InfoCard
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Clock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="I Work Fast"
            description="I excel in a fast-paced environment. Check out my performance under pressure on the hackathon page."
            />
    
            <InfoCard
                area="md:[grid-area:2/1/4/7] xl:[grid-area:1/5/4/8]"
                icon={<ShieldHalf className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Collaboration boosts production"
                description="Let's build something amazing together."
            >
                {/* Outer Wrapper - Defines Available Space */}
                <div className="relative w-full overflow-hidden px-4 flex flex-col items-center">
                    <div className="relative w-full h-52 md:h-60 rounded-xl bg-white/80 dark:bg-black/50 shadow-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg overflow-hidden">
                        <div className="absolute w-full bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent dark:to-black to-white pointer-events-none select-none z-40"></div>

                        <div className="absolute top-0 left-0 w-full h-full z-10">
                            <div className="relative w-full h-full overflow-hidden pointer-events-auto touch-auto">
                                <div className="absolute w-[180%] h-[180%] top-[-40%] left-[-40%]">
                                    <World data={sampleArcs} globeConfig={globeConfig} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </InfoCard>

    
            <InfoCard
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="I Adapt"
            description="The tech world moves fast, and so do I. I try to stay up to date with the latest updates in the tech industry and move quick to learn necassary frameworks to fit any project."
            >
            </InfoCard>
    
            <InfoCard
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<ChartLine className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Pushing to Create"
                description="Driven by curiosity and a commitment to excellence, I’m constantly exploring new technologies to push the boundaries of what’s possible."
            >
                <Image className="block sm:visible md:hidden lg:hidden" src="/schematic.png" alt="Schematic diagram" width={250} height={250}>

                </Image>
            </InfoCard>
        </ul>
    );
}
