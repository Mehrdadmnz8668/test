'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Strong Aurora / Soundwave style background from Ref 7 */}
      <div className="absolute top-0 inset-x-0 h-[700px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-[#09090F] to-[#09090F] -z-10 blur-2xl opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <div className="text-center max-w-3xl mx-auto z-10 px-4 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-[10px] font-bold text-violet-300 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          نسل جدید زیرساخت ابری و شبکه خصوصی
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight text-glow">
          تجربه اینترنت بدون مرز <br/>
          با پایداری تضمین‌شده
        </h1>
        
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          دسترسی آزاد، ایمن و پرسرعت به سرویس‌های بین‌المللی با استفاده از پروتکل‌های مدرن VLESS و سرورهای اختصاصی مستقر در دیتاسنترهای برتر اروپا.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/store"><Button size="lg" className="px-8 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] border-violet-400/50">شروع و انتخاب پلن</Button></Link>
          <Link href="/guide"><Button variant="secondary" size="lg" className="px-8 rounded-full">دانلود نرم‌افزارها</Button></Link>
        </div>
      </div>

      {/* Floating Modern Dashboard Mockup (Ref 7) */}
      <div className="mt-20 w-full max-w-4xl mx-auto px-6 perspective-1000 relative z-10">
        <div className="glass-panel rounded-2xl p-2 shadow-2xl shadow-violet-900/30 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700">
           <div className="rounded-xl bg-[#09090F] border border-white/5 overflow-hidden">
             {/* Mock Header */}
             <div className="h-10 bg-[#110E18] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
             </div>
             {/* Mock Content */}
             <div className="p-6 grid grid-cols-3 gap-4 bg-aurora h-64">
                <div className="col-span-2 space-y-4">
                   <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-end"><div className="h-2 w-1/2 bg-violet-500/50 rounded" /></div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="h-20 rounded-xl bg-white/5 border border-white/5" />
                     <div className="h-20 rounded-xl bg-white/5 border border-white/5" />
                   </div>
                </div>
                <div className="h-full rounded-xl bg-white/5 border border-white/5 p-4 space-y-3">
                   <div className="h-3 w-1/3 bg-slate-600/50 rounded" />
                   <div className="h-2 w-full bg-white/5 rounded" />
                   <div className="h-2 w-4/5 bg-white/5 rounded" />
                   <div className="h-2 w-full bg-white/5 rounded" />
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
