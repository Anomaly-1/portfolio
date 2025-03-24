"use client"; // Add this directive since MultiStepLoader uses React hooks

import { MultiStepLoader } from "@/components/MultistepLoader";
import { useState, useEffect } from "react";

// Define the loading states
const loadingStates = [
  { text: "Designing...", progress: 20 },
  { text: "Building...", progress: 40 },
  { text: "Testing...", progress: 60 },
  { text: "Painting...", progress: 80 },
  { text: "Polishing...", progress: 100 },
];

export default function Loading() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
          loop={true}
        />
      </div>
    </div>
  );
}