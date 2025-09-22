'use client';
import Link from 'next/link';
import { User, Folder, FileText } from 'lucide-react';
import { DotBackground } from '@/components/dotbackground';

export default function Home() {
  return (
    <DotBackground>
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-16 tracking-tight drop-shadow-lg text-center">
          Arjun Hariharan
        </h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <IconLink href="/about" icon={<User className="w-7 h-7" />} label="About" />
          <IconLink href="/projects" icon={<Folder className="w-7 h-7" />} label="Projects" />
          {/* <IconLink href="/research" icon={<Search className="w-7 h-7" />} label="Research" /> */}
          {/* Resume — triggers download */}
          <DownloadLink
            href="/resume.pdf"
            icon={<FileText className="w-7 h-7" />}
            label="Resume"
          />
        </div>
      </main>
    </DotBackground>
  );
}

// Normal navigation link
function IconLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href}>
      <div className="group flex flex-col items-center gap-3 p-6 hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-black border border-neutral-600 rounded-lg text-neutral-300 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors duration-300">
          {icon}
        </div>
        <span className="text-sm font-light text-neutral-400 group-hover:text-yellow-400 transition-colors duration-300">
          {label}
        </span>
      </div>
    </Link>
  );
}

// Special download link — does NOT use Link
function DownloadLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} download>
      <div className="group flex flex-col items-center gap-3 p-6 hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-black border border-neutral-600 rounded-lg text-neutral-300 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors duration-300">
          {icon}
        </div>
        <span className="text-sm font-light text-neutral-400 group-hover:text-yellow-400 transition-colors duration-300">
          {label}
        </span>
      </div>
    </a>
  );
}