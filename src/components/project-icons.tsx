import React from 'react';

export const EchoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="echoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Chat bubble */}
    <path d="M20 30 Q20 20 30 20 L70 20 Q80 20 80 30 L80 50 Q80 60 70 60 L40 60 L30 70 L35 60 L30 60 Q20 60 20 50 Z" fill="url(#echoGrad)" opacity="0.9" />
    
    {/* Three dots */}
    <circle cx="35" cy="40" r="3" fill="white" opacity="0.8" />
    <circle cx="50" cy="40" r="3" fill="white" opacity="0.8" />
    <circle cx="65" cy="40" r="3" fill="white" opacity="0.8" />
  </svg>
);

export const PlatemasterIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Bowl */}
    <path d="M25 60 Q25 45 35 40 L65 40 Q75 45 75 60 L75 70 Q75 75 70 75 L30 75 Q25 75 25 70 Z" fill="url(#plateGrad)" opacity="0.8" />
    
    {/* Salad leaves */}
    <path d="M30 50 Q35 35 40 50 Q45 40 50 50 Q55 35 60 50 Q65 40 70 50" stroke="url(#plateGrad)" strokeWidth="3" fill="none" opacity="0.9" />
    <path d="M35 55 Q40 45 45 55 Q50 50 55 55 Q60 45 65 55" stroke="url(#plateGrad)" strokeWidth="2" fill="none" opacity="0.7" />
    
    {/* Cherry tomatoes */}
    <circle cx="40" cy="45" r="3" fill="url(#plateGrad)" opacity="0.8" />
    <circle cx="60" cy="45" r="3" fill="url(#plateGrad)" opacity="0.8" />
    <circle cx="50" cy="50" r="2.5" fill="url(#plateGrad)" opacity="0.9" />
  </svg>
);

export const TetrisAIIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="tetrisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Tetris blocks - classic shapes */}
    <rect x="20" y="70" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.9" />
    <rect x="35" y="70" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.8" />
    <rect x="50" y="70" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.7" />
    <rect x="65" y="70" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.6" />
    
    <rect x="20" y="55" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.8" />
    <rect x="50" y="55" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.7" />
    
    <rect x="35" y="40" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.9" />
    
    {/* L-shape */}
    <rect x="20" y="25" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.8" />
    <rect x="20" y="10" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.9" />
    
    {/* T-shape */}
    <rect x="50" y="25" width="15" height="15" fill="url(#tetrisGrad)" opacity="0.7" />
    <rect x="42.5" y="10" width="30" height="15" fill="url(#tetrisGrad)" opacity="0.8" />
  </svg>
);

export const HarvestIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="harvestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Plate */}
    <ellipse cx="50" cy="70" rx="30" ry="8" fill="url(#harvestGrad)" opacity="0.8" />
    
    {/* Fork */}
    <rect x="30" y="25" width="3" height="35" fill="url(#harvestGrad)" opacity="0.9" />
    <rect x="28" y="25" width="7" height="8" fill="url(#harvestGrad)" opacity="0.9" />
    <rect x="29" y="25" width="5" height="2" fill="url(#harvestGrad)" opacity="0.7" />
    <rect x="29" y="28" width="5" height="2" fill="url(#harvestGrad)" opacity="0.7" />
    <rect x="29" y="31" width="5" height="2" fill="url(#harvestGrad)" opacity="0.7" />
    
    {/* Knife */}
    <rect x="65" y="30" width="3" height="30" fill="url(#harvestGrad)" opacity="0.9" />
    <path d="M65 30 L75 25 L75 35 Z" fill="url(#harvestGrad)" opacity="0.9" />
    
    {/* Handle details */}
    <rect x="28" y="60" width="7" height="8" fill="url(#harvestGrad)" opacity="0.8" />
    <rect x="63" y="60" width="7" height="8" fill="url(#harvestGrad)" opacity="0.8" />
  </svg>
);

export const FlowProIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Chart bars */}
    <rect x="20" y="60" width="8" height="25" fill="url(#flowGrad)" opacity="0.8" />
    <rect x="32" y="50" width="8" height="35" fill="url(#flowGrad)" opacity="0.9" />
    <rect x="44" y="45" width="8" height="40" fill="url(#flowGrad)" opacity="0.7" />
    <rect x="56" y="55" width="8" height="30" fill="url(#flowGrad)" opacity="0.8" />
    <rect x="68" y="40" width="8" height="45" fill="url(#flowGrad)" opacity="0.6" />
    
    {/* Trend line */}
    <path d="M24 70 Q40 50 60 45 Q80 35 84 30" stroke="url(#flowGrad)" strokeWidth="3" fill="none" opacity="0.8" />
    
    {/* Money symbol */}
    <circle cx="50" cy="25" r="12" fill="none" stroke="url(#flowGrad)" strokeWidth="3" />
    <text x="50" y="30" textAnchor="middle" fontSize="16" fill="url(#flowGrad)" fontWeight="bold">$</text>
  </svg>
);

export const FaceMaskIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="maskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Theatre mask */}
    <path d="M25 40 Q25 25 40 20 L60 20 Q75 25 75 40 Q75 55 60 60 L40 60 Q25 55 25 40 Z" fill="url(#maskGrad)" opacity="0.9" />
    
    {/* Eye holes */}
    <ellipse cx="40" cy="35" rx="6" ry="8" fill="black" opacity="0.8" />
    <ellipse cx="60" cy="35" rx="6" ry="8" fill="black" opacity="0.8" />
    
    {/* Mouth */}
    <path d="M40 50 Q50 55 60 50" stroke="black" strokeWidth="3" fill="none" opacity="0.8" />
    
    {/* Decorative elements */}
    <path d="M30 30 Q35 25 40 30" stroke="url(#maskGrad)" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M60 30 Q65 25 70 30" stroke="url(#maskGrad)" strokeWidth="2" fill="none" opacity="0.6" />
    
    {/* Straps */}
    <rect x="20" y="45" width="8" height="3" fill="url(#maskGrad)" opacity="0.7" />
    <rect x="72" y="45" width="8" height="3" fill="url(#maskGrad)" opacity="0.7" />
  </svg>
);

export const HousingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* House roof */}
    <path d="M20 60 L50 25 L80 60 Z" fill="url(#houseGrad)" opacity="0.9" />
    
    {/* House body */}
    <rect x="30" y="60" width="40" height="25" fill="url(#houseGrad)" opacity="0.8" />
    
    {/* Door */}
    <rect x="45" y="70" width="10" height="15" fill="url(#houseGrad)" opacity="0.7" />
    
    {/* Windows */}
    <rect x="35" y="65" width="6" height="6" fill="url(#houseGrad)" opacity="0.6" />
    <rect x="59" y="65" width="6" height="6" fill="url(#houseGrad)" opacity="0.6" />
    
    {/* Chimney */}
    <rect x="65" y="45" width="8" height="15" fill="url(#houseGrad)" opacity="0.8" />
    
    {/* Ground */}
    <rect x="15" y="85" width="70" height="5" fill="url(#houseGrad)" opacity="0.6" />
  </svg>
);

export const PathfindingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Maze walls */}
    <rect x="20" y="20" width="60" height="3" fill="url(#pathGrad)" opacity="0.8" />
    <rect x="20" y="20" width="3" height="60" fill="url(#pathGrad)" opacity="0.8" />
    <rect x="77" y="20" width="3" height="60" fill="url(#pathGrad)" opacity="0.8" />
    <rect x="20" y="77" width="60" height="3" fill="url(#pathGrad)" opacity="0.8" />
    
    {/* Internal walls */}
    <rect x="35" y="30" width="3" height="20" fill="url(#pathGrad)" opacity="0.7" />
    <rect x="50" y="20" width="3" height="25" fill="url(#pathGrad)" opacity="0.7" />
    <rect x="30" y="50" width="25" height="3" fill="url(#pathGrad)" opacity="0.7" />
    <rect x="60" y="45" width="3" height="20" fill="url(#pathGrad)" opacity="0.7" />
    <rect x="40" y="65" width="20" height="3" fill="url(#pathGrad)" opacity="0.7" />
    
    {/* Start point */}
    <circle cx="25" cy="25" r="4" fill="url(#pathGrad)" opacity="0.9" />
    
    {/* End point */}
    <circle cx="75" cy="75" r="4" fill="url(#pathGrad)" opacity="0.9" />
    
    {/* Solution path */}
    <path d="M25 25 L35 25 L35 35 L45 35 L45 45 L55 45 L55 55 L65 55 L65 65 L75 65 L75 75" stroke="url(#pathGrad)" strokeWidth="2" fill="none" opacity="0.8" />
    
    {/* Path nodes */}
    <circle cx="35" cy="25" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="35" cy="35" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="45" cy="35" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="45" cy="45" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="55" cy="45" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="55" cy="55" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="65" cy="55" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="65" cy="65" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
    <circle cx="75" cy="65" r="1.5" fill="url(#pathGrad)" opacity="0.7" />
  </svg>
);
