'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Laptop, Monitor, Smartphone } from 'lucide-react';
import { GUIDE_PLATFORMS } from '@/data/mockData';

const PLATFORM_ICONS = {
  android: Smartphone,
  ios: Smartphone,
  windows: Laptop,
  macos: Monitor,
};

const COMPATIBLE_SERVICES = [
  { name: 'ChatGPT / OpenAI', tag: 'AI Tools' },
  { name: 'Claude & Gemini', tag: 'AI Models' },
  { name: 'Binance / Bybit', tag: 'Crypto Exchange' },
  { name: 'YouTube / Spotify', tag: '4K Streaming' },
  { name: 'GitHub / Docker', tag: 'Developers' },
  { name: 'Steam / Discord', tag: 'Gaming' },
];

export function SupportedDevices() {
  const [activeId, setActiveId] = useState<'android' | 'ios' | 'windows' | 'macos'>('android');
  const currentGuide = GUIDE_PLATFORMS.find((p) => p.id === activeId) || GUIDE_PLATFORMS[0];

  return (
    <section id="devices" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-white">سازگار با سرویس‌های بین‌المللی</h2>
            <p className="text-xs text-slate-400">
              دسترسی پایدار به ابزارهای هوش مصنوعی، پلتفرم‌های توسعه و صرافی‌های معتبر
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {COMPATIBLE_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0F0D18] border border-violet-500/15 text-center space-y-1"
              >
                <div className="text-xs font-bold text-slate-100">{srv.name}</div>
                <div className="text-[10px] text-violet-400 font-mono">{srv.tag}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D0B16] border border-violet-500/20 rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#151124] border border-violet-500/25 text-violet-300 text-xs font-bold">
              پشتیبانی از تمام پلتفرم‌ها
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              نصب و راه‌اندازی روی دستگاه‌های شما
            </h3>
          </div>

          <div className="flex justify-center overflow-x-auto">
            <div className="inline-flex p-1.5 rounded-xl bg-[#151124] border border-white/[0.07] gap-1">
              {GUIDE_PLATFORMS.map((tab) => {
                const Icon = PLATFORM_ICONS[tab.id];
                const isActive = activeId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveId(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-violet-600 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl bg-[#0F0D18] border border-white/[0.07] p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
              <div>
                <h4 className="text-sm font-bold text-white">
                  اپلیکیشن پیشنهادی: {currentGuide.primaryApp}
                </h4>
                <p className="text-[11px] text-slate-400">
                  جایگزین: {currentGuide.secondaryApp} — {currentGuide.version}
                </p>
              </div>
              <Link
                href="/guide"
                className="text-xs font-bold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1"
              >
                <span>راهنمای کامل نصب</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <ol className="space-y-2.5 list-decimal list-inside text-xs text-slate-300 leading-relaxed">
              {currentGuide.steps.slice(0, 4).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
