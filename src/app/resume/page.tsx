'use client';
import HomeIconButton from '@/components/HomeIconButton';
import { FileText } from 'lucide-react';
import { DotBackground } from '@/components/dotbackground';

export default function ResumePage() {
  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Resume
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              Choose the resume that best fits your needs.
            </p>
          </div>

          {/* Resume Options */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <DownloadLink
              href="/defaultresume.pdf"
              icon={<FileText className="w-8 h-8" />}
              label="Default Resume"
              description="A concise overview of my experience and skills."
            />
            <DownloadLink
              href="/extensiveresume.pdf"
              icon={<FileText className="w-8 h-8" />}
              label="Extensive Resume"
              description="A detailed version with more projects and information."
            />
          </div>
        </div>
      </div>
    </DotBackground>
  );
}

// Download link with description
function DownloadLink({ href, icon, label, description }: { href: string; icon: React.ReactNode; label: string; description: string }) {
  return (
    <a href={href} download className="group block">
      <div className="p-8 bg-neutral-900 border border-neutral-600 rounded-lg hover:border-yellow-400 hover:bg-neutral-800 transition-all duration-300 text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black border border-neutral-600 rounded-lg text-neutral-300 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
          {label}
        </h3>
        <p className="text-neutral-200 text-sm font-light">
          {description}
        </p>
      </div>
    </a>
  );
}