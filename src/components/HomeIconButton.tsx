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
      <div className="w-16 h-16 md:w-20 md:h-20 bg-black border border-white rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Home className="text-white w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" />
      </div>
    </Link>
  );
}
