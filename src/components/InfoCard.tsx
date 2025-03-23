import { GlowingEffect } from "./GlowingEffect";
import React from "react";

interface InfoCardProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode; // Add children prop
}

export const InfoCard = ({ area, icon, title, description, children }: InfoCardProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border border-[#02050a] p-2 md:rounded-3xl md:p-3 bg-[#02050a]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-[#02050a] p-6 bg-[#02050a] dark:shadow-[0px_0px_27px_0px_#02050a] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-[#0a1a2f] p-2 bg-[#0a1a2f]">
              {icon}
            </div>

            {children && (
              <div className="w-full flex justify-center"> 
                {children}
              </div>
            )}

            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-neutral-300"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};