'use client';
import { FileDownload } from '@/components/file-download';
import HomeIconButton from '@/components/HomeIconButton';

export default function ResumePage() {
  return (
    <div className="dark min-h-screen w-full bg-black flex items-center justify-center relative">
      <HomeIconButton className="absolute top-4 left-4" />
      <div className="w-full max-w-md">
        <FileDownload />
      </div>
    </div>
  );
}