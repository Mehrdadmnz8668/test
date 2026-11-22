'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Editorial Background & Lighting */}
      <div className="absolute inset-0 bg-[#09090F] -z-20" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#7A00FF] opacity-[0.12] rounded-full blur-[140px] -z-10 mix-blend-screen animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3B00B9] opacity-[0.08] rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      {/* High-End Tech SVG Abstract Graphic */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7A00FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#B8A5FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#09090F" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#7A00FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g transform="translate(600, 400) rotate(15) scale(1.2)">
            {/* Abstract globe / grid lines */}
            <path d="M -400 0 Q 0 -300 400 0 T -400 0" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
            <path d="M -300 -150 Q 0 -400 300 -150 T -300 -150" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
            <path d="M -300 150 Q 0 400 300 150 T -300 150" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
            <path d="M 0 -400 Q 300 0 0 400 T 0 -400" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
            <path d="M -150 -300 Q 150 0 -150 300 T -150 -300" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
            <path d="M 150 -300 Q 450 0 150 300 T 150 -300" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
            {/* Glowing Data Nodes */}
            <circle cx="-150" cy="-120" r="4" fill="#fff" />
            <circle cx="-150" cy="-120" r="16" fill="url(#nodeGlow)" />
            <circle cx="200" cy="180" r="3" fill="#fff" />
            <circle cx="200" cy="180" r="12" fill="url(#nodeGlow)" />
            <circle cx="50" cy="-250" r="5" fill="#fff" />
            <circle cx="50" cy="-250" r="20" fill="url(#nodeGlow)" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center z-10 animate-fade-in-up">
        <div className="lg:col-span-7 space-y-10 text-center lg:text-right">
          
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A00FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Enterprise-Grade Network</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white leading-[1.1] tracking-tight">
            دسترسی آزاد.<br/>
            <span className="text-gradient">معماری بدون مرز.</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            زیرساخت ابری فوق‌پیشرفته، طراحی شده برای عبور از سخت‌ترین فیلترهای تحلیلی (DPI). تضمین پایداری مطلق، تاخیر میلی‌ثانیه‌ای و امنیت نظامی برای حرفه‌ای‌ترین کاربران.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
            <Link href="/store" className="w-full sm:w-auto">
              <Button size="lg" fullWidth>دسترسی به شبکه</Button>
            </Link>
            <Link href="/servers" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" fullWidth>مشاهده نودهای جهانی</Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract Technical Data block instead of generic UI card */}
        <div className="lg:col-span-5 hidden lg:block">
           <div className="editorial-card rounded-3xl p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#7A00FF] to-transparent" />
             
             <div className="space-y-8">
               <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Live Telemetry</div>
                    <div className="text-white font-bold text-lg">Frankfurt Core / 01</div>
                  </div>
                  <div className="px-2 py-1 rounded bg-[#10B981]/10 text-[#10B981] text-[10px] font-mono border border-[#10B981]/20">OPTIMAL</div>
               </div>
               
               <div className="space-y-5">
                 <div>
                   <div className="flex justify-between text-xs mb-2"><span className="text-slate-400">Bandwidth Capacity</span><span className="text-white font-mono">10 Gbps</span></div>
                   <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-white/40 w-3/4 rounded-full" /></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs mb-2"><span className="text-slate-400">Encryption Standard</span><span className="text-white font-mono">AES-256-GCM</span></div>
                   <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#7A00FF] w-full rounded-full" /></div>
                 </div>
               </div>

               <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                 <span className="text-slate-500">Protocol: VLESS + REALITY</span>
                 <span className="text-white font-mono">42ms</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
