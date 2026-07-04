import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 48, showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} id="brand-logo">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 hover:rotate-45"
      >
        <defs>
          <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe680" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="80%" stopColor="#aa7c11" />
            <stop offset="100%" stopColor="#ffe680" />
          </linearGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow behind the logo */}
        <circle cx="100" cy="100" r="90" fill="url(#goldGlow)" />

        {/* Outer Petals Layer (Symmetric 8-axis flower) */}
        {/* Cardinal Axis Loops */}
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(0 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(45 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(90 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(135 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(180 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(225 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(270 100 100)"
        />
        <path
          d="M 100,55 C 80,15 120,15 100,55"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(315 100 100)"
        />

        {/* Secondary Mid-Outer Petals to fill space */}
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(22.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(67.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(112.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(157.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(202.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(247.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(292.5 100 100)"
          opacity="0.85"
        />
        <path
          d="M 100,70 C 85,35 115,35 100,70"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(337.5 100 100)"
          opacity="0.85"
        />

        {/* Central Interlocking Grid (The Endless Knot structure) */}
        {/* Square Border 1 */}
        <rect
          x="65"
          y="65"
          width="70"
          height="70"
          rx="14"
          stroke="url(#premiumGold)"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Weaving lines of the knot */}
        <path
          d="M 80,65 C 80,45 120,45 120,65 C 120,85 120,115 120,135 C 120,155 80,155 80,135 Z"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 65,80 C 45,80 45,120 65,120 C 85,120 115,120 135,120 C 155,120 155,80 135,80 Z"
          stroke="url(#premiumGold)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner core reinforcing circle */}
        <circle
          cx="100"
          cy="100"
          r="18"
          stroke="url(#premiumGold)"
          strokeWidth="4"
          fill="#080808"
        />
        
        {/* Subtle center point */}
        <circle cx="100" cy="100" r="4" fill="url(#premiumGold)" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-wider text-xl text-white leading-none">
            BHAGYALAXMI
          </span>
          <span className="font-sans font-medium text-[10px] tracking-[0.25em] text-gold-500 leading-none mt-1">
            DD ENTERPRISES
          </span>
        </div>
      )}
    </div>
  );
}
