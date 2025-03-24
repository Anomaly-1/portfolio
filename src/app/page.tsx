import Image from "next/image";
import { GridBackground } from "@/components/GridBackground";
import { ColourfulText } from "@/components/ColorfulText";
import { Spotlight } from "@/components/Spotlight";
import { CardArea } from "@/components/CardArea";
import { FloatingDock } from "@/components/FloatingDock";
import { TechStack } from "@/components/TechStack";
import { RecentProjects } from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import links from "@/data/links"; 

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] overflow-x-hidden justify-center items-center bg-black">
      <GridBackground>
      <Spotlight />
      <h1 className="m-8">
        <ColourfulText>Innovating Today, Impacting Tomorrow</ColourfulText>
      </h1>
      <h3 className="text-2xl mt-12 text-white m-8">Created By: Arjun Hariharan</h3>
      </GridBackground>
      <CardArea/>
      <TechStack/>
      <RecentProjects/>
      <FloatingDock
        items={links}
      />
      <Footer/>
    </div>
  );
}
