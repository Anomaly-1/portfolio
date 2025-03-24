"use client";
import React from "react";
import { ResumeDownload } from "@/components/ResumeDownload";
import links from "@/data/links";
import { FloatingDock } from "@/components/FloatingDock";

export default function ResumeDownloadDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <ResumeDownload />
      </div>
      <FloatingDock items={links} />
    </div>
  );
}