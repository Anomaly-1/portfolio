'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Folder, FileText } from 'lucide-react';
import { DotBackground } from '@/components/dotbackground';

export default function Home() {
  return (
    <DotBackground>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-20 text-center text-white">Arjun Hariharan</h1>
        <div className="flex flex-wrap justify-center gap-14 sm:gap-16 lg:gap-20">
          <IconLink href="/about" icon={<User className="w-full h-full" />} />
          <IconLink href="/projects" icon={<Folder className="w-full h-full" />} />
          <IconLink href="/resume" icon={<FileText className="w-full h-full" />} />
        </div>
      </main>
    </DotBackground>
  );
}

function IconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center border border-white rounded-lg text-white bg-black hover:bg-white hover:text-black cursor-pointer"
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
          {icon}
        </div>
      </motion.div>
    </Link>
  );
}
