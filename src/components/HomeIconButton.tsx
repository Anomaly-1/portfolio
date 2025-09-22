'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HomeIconButtonProps {
  className?: string;
}

export default function HomeIconButton({ className }: HomeIconButtonProps) {
  return (
    <Link href="/" className={`group ${className}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 bg-black border border-neutral-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-400">
        <Home className="text-neutral-300 w-5 h-5 md:w-6 md:h-6 group-hover:text-yellow-400 transition-colors duration-300" />
      </div>
    </Link>
  );
}
