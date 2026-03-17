// components/Gallery.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { DitherShader } from './dither-shader';

interface GalleryProps {
  images: string[];
  projectTitle: string;
  mounted?: boolean;
  onViewerOpenChange?: (isOpen: boolean) => void;
}

// Skeleton Loader Component
const ImageSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`relative bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden ${className}`}>
    <div
      className="w-full h-full animate-pulse"
      style={{
        background: 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear',
      }}
    />
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(250,204,21,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,204,21,0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-yellow-400/60 font-mono text-xs animate-pulse">LOADING...</span>
    </div>
  </div>
);

// Loading Spinner Component
const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' } as const;
  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full" />
      <div 
        className="absolute inset-0 border-2 border-transparent border-t-yellow-400 rounded-full animate-spin"
        style={{ animationDuration: '1s' }}
      />
      <div className="absolute inset-2 bg-yellow-400/20 rounded-full animate-pulse" />
      <span className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-yellow-400/80 font-mono text-xs whitespace-nowrap">
        FETCHING
      </span>
    </div>
  );
};

// Error State Component
const ImageError = ({ onRetry, className = '' }: { onRetry: () => void; className?: string }) => (
  <div className={`relative bg-neutral-900/80 border border-red-500/50 rounded-xl overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(239,68,68,0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(239,68,68,0.3) 25%, transparent 25%)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
      <svg className="w-8 h-8 text-red-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span className="text-red-400 font-mono text-xs mb-3">LOAD_FAILED</span>
      <button
        onClick={onRetry}
        className="px-3 py-1 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/50 text-yellow-400 font-mono text-xs rounded transition-all duration-200 hover:scale-105"
      >
        [RETRY]
      </button>
    </div>
  </div>
);

// Simplified Image Load Hook
const useImageLoad = (src: string) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    setStatus('loading');
    const img = new Image();
    img.src = src;
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
    return () => { img.onload = null; img.onerror = null; };
  }, [src]);

  const retry = useCallback(() => {
    setStatus('loading');
    const img = new Image();
    img.src = src;
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
  }, [src]);

  return { status, retry };
};

// Thumbnail Component
const GalleryThumbnail = ({ 
  imageUrl, 
  index, 
  onClick 
}: { 
  imageUrl: string; 
  index: number; 
  onClick: () => void;
}) => {
  const { status, retry } = useImageLoad(imageUrl);

  return (
    <div
      onClick={onClick}
      className="group relative aspect-video bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
      style={{
        animation: `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.3 + index * 0.1}s both`,
      }}
    >
      {/* Loading State */}
      {status === 'loading' && <ImageSkeleton className="absolute inset-0" />}

      {/* Error State */}
      {status === 'error' && <ImageError onRetry={retry} className="absolute inset-0" />}

      {/* Loaded Image */}
      {status === 'loaded' && (
        <>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(250,204,21,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,204,21,0.2) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
          </div>
          <DitherShader
            src={imageUrl}
            className="w-full h-full object-contain rounded-lg shadow-2xl shadow-yellow-400/20"
            ditherMode="bayer"
            colorMode="duotone"
            primaryColor="#000000"
            secondaryColor="#ffaa00"
            colorLevels={16}
            gridSize={2}
            brightness={0.1}
            contrast={1.2}
            threshold={0.5}
            objectFit="contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-yellow-400 bg-black/80 px-2 py-1 rounded font-mono">⤢ VIEW</span>
          </div>
        </>
      )}
    </div>
  );
};

export default function Gallery({ images, projectTitle, mounted = true, onViewerOpenChange }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);
  const [popupStatus, setPopupStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const preloadCache = useRef<Set<string>>(new Set());

  // Preload adjacent images
  useEffect(() => {
    if (!selectedImage) return;
    const preloadAdjacent = (index: number) => {
      [index - 1, index + 1].forEach(i => {
        if (i >= 0 && i < images.length && !preloadCache.current.has(images[i])) {
          const img = new Image();
          img.src = images[i];
          preloadCache.current.add(images[i]);
        }
      });
    };
    preloadAdjacent(selectedImage.index);
  }, [selectedImage, images]);

  // Handle popup image loading
  useEffect(() => {
    if (!selectedImage) { setPopupStatus('loading'); return; }
    setPopupStatus('loading');
    const img = new Image();
    img.src = selectedImage.url;
    img.onload = () => setPopupStatus('loaded');
    img.onerror = () => setPopupStatus('error');
    return () => { img.onload = null; img.onerror = null; };
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); setSelectedImage(null); }
      if (e.key === 'ArrowLeft') {
        e.stopPropagation();
        const prev = selectedImage.index > 0 ? selectedImage.index - 1 : images.length - 1;
        setSelectedImage({ url: images[prev], index: prev });
      }
      if (e.key === 'ArrowRight') {
        e.stopPropagation();
        const next = selectedImage.index < images.length - 1 ? selectedImage.index + 1 : 0;
        setSelectedImage({ url: images[next], index: next });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  useEffect(() => { onViewerOpenChange?.(!!selectedImage); }, [selectedImage, onViewerOpenChange]);

  return (
    <>
      {/* Gallery Grid */}
      <div
        className="mt-20 pt-12 border-t border-neutral-700"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: '1.2s',
        }}
      >
        <h2 className="text-3xl font-light text-white mb-8 tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imageUrl, index) => (
            <GalleryThumbnail
              key={`${imageUrl}-${index}`}
              imageUrl={imageUrl}
              index={index}
              onClick={() => setSelectedImage({ url: imageUrl, index })}
            />
          ))}
        </div>
      </div>

      {/* Popup Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(to right, rgba(250,204,21,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,204,21,0.15) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(250,204,21,0.1) 2px, rgba(250,204,21,0.1) 4px)',
          }} />

          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            className="absolute top-4 right-4 z-50 text-yellow-400 hover:text-yellow-300 transition-all duration-300 p-2 hover:bg-yellow-400/10 rounded hover:scale-110"
            aria-label="Close viewer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const prev = selectedImage.index > 0 ? selectedImage.index - 1 : images.length - 1;
              setSelectedImage({ url: images[prev], index: prev });
            }}
            className="absolute left-2 md:left-4 z-50 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 p-2 hover:bg-yellow-400/10 rounded disabled:opacity-30"
            aria-label="Previous"
            disabled={popupStatus === 'loading'}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const next = selectedImage.index < images.length - 1 ? selectedImage.index + 1 : 0;
              setSelectedImage({ url: images[next], index: next });
            }}
            className="absolute right-2 md:right-4 z-50 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 p-2 hover:bg-yellow-400/10 rounded disabled:opacity-30"
            aria-label="Next"
            disabled={popupStatus === 'loading'}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[85vh] p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 border border-yellow-400/30 rounded-lg pointer-events-none" />
            <div className="absolute -inset-1 border border-yellow-400/10 rounded-lg pointer-events-none" />

            {popupStatus === 'loading' && (
              <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex flex-col items-center justify-center gap-4">
                <LoadingSpinner size="lg" />
                <div className="text-yellow-400/60 font-mono text-sm animate-pulse">
                  LOADING_IMAGE_{String(selectedImage.index + 1).padStart(2, '0')}
                </div>
              </div>
            )}

            {popupStatus === 'error' && (
              <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex flex-col items-center justify-center">
                <ImageError 
                  onRetry={() => {
                    setPopupStatus('loading');
                    const img = new Image();
                    img.src = selectedImage.url;
                    img.onload = () => setPopupStatus('loaded');
                    img.onerror = () => setPopupStatus('error');
                  }} 
                  className="w-full max-w-2xl"
                />
              </div>
            )}

            {popupStatus === 'loaded' && (
              <img
                src={selectedImage.url}
                alt={`${projectTitle} gallery ${selectedImage.index + 1}`}
                className="w-full h-full object-contain rounded-lg shadow-2xl shadow-yellow-400/20"
                style={{ animation: 'fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) both' }}
                draggable={false}
              />
            )}

            {/* Counter */}
            <div className="absolute -bottom-8 left-0 text-yellow-400 font-mono text-sm">
              <span className="opacity-60">IMAGE_</span>
              <span>{String(selectedImage.index + 1).padStart(2, '0')}</span>
              <span className="opacity-60"> / {String(images.length).padStart(2, '0')}</span>
              {popupStatus === 'loading' && <span className="ml-2 text-yellow-400/60 animate-pulse">[LOADING]</span>}
              {popupStatus === 'error' && <span className="ml-2 text-red-400 animate-pulse">[ERROR]</span>}
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-400/50" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-400/50" />
        </div>
      )}
    </>
  );
}