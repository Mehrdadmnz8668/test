import React from 'react';
export function IsoShieldLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#7A00FF" />
        </linearGradient>
      </defs>
      <path d="M250 20 L450 110 V270 C450 390 250 480 250 480 C250 480 50 390 50 270 V110 L250 20 Z" fill="url(#logo-grad)" />
      <path d="M110 230 C 180 235, 340 200, 400 260 C 420 280, 410 320, 350 360 C 270 410, 150 340, 110 370 C 190 440, 340 420, 410 330 C 450 280, 430 210, 360 170 C 270 130, 150 160, 100 210 C 95 218, 100 226, 110 230 Z" fill="#09090F" />
    </svg>
  );
}
