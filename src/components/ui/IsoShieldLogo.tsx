import React from 'react';
export function IsoShieldLogo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path d="M250 30 L435 125 V260 C435 375 250 470 250 470 C250 470 65 375 65 260 V125 L250 30 Z" fill="url(#isoGrad)" />
      <path d="M100 230 C 180 235, 360 215, 410 265 C 430 285, 415 320, 360 360 C 290 410, 170 340, 130 365 C 210 425, 330 405, 400 330 C 440 285, 425 210, 350 170 C 270 130, 140 165, 95 210 C 90 218, 93 226, 100 230 Z" fill="#09090F" />
      <rect x="52" y="235" width="12" height="30" rx="4" fill="#ffffff" />
      <rect x="436" y="235" width="12" height="30" rx="4" fill="#ffffff" />
    </svg>
  );
}
