'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Info,
  Laptop,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { GUIDE_PLATFORMS } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';

const ICONS = {
  android: Smartphone,
  ios: Smartphone,
  windows: Laptop,
  macos: Monitor,
};

export default function GuidePage() {
  const [selectedId, setSelectedId] = useState<'android' | 'ios' | 'windows' | 'macos'>('android');
  const activeGuide = GUIDE_PLATFORMS.find((g) => g.id === selectedId) || GUIDE_PLATFORMS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-violet-400">مستندات اتصال سریع</span>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای نصب و راه‌اندازی ISO VPN
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            سیستم‌عامل دستگاه خود را انتخاب کنید و مطابق مراحل زیر لینک اشتراک را وارد نمایید.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GUIDE_PLATFORMS.map((platform) => {
            const Icon = ICONS[platform.id];
            const active = selectedId === platform.id;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedId(platform.id)}
                className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                  active
                    ? 'bg-violet-600/20 border-violet-500 text-white'
                    : 'bg-[#0F0D18] border-violet-500/15 text-slate-300 hover:border-violet-500/35'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    active ? 'bg-violet-600 text-white' : 'bg-[#151124] text-violet-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate">{platform.label}</div>
                  <div className="text-[11px] font-mono text-slate-400 truncate">
                    {platform.primaryApp}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.07]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="violet">{activeGuide.label}</Badge>
                <span className="text-xs text-slate-400">{activeGuide.version}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white pt-1">
                راه‌اندازی با اپلیکیشن {activeGuide.primaryApp}
              </h2>
              <p className="text-xs text-slate-400">
                اپلیکیشن‌های جایگزین سازگار: {activeGuide.secondaryApp}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151124] border border-violet-500/25 text-xs font-semibold text-violet-300">
              <Download className="w-4 h-4" />
              <span>{activeGuide.downloadLabel}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">مراحل اتصال گام‌به‌گام:</h3>
            <ol className="space-y-3">
              {activeGuide.steps.map((step, index) => (
                <li
                  key={index}
                  className="p-4 rounded-xl bg-[#151124] border border-white/[0.06] flex items-start gap-3.5 text-xs text-slate-200 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-lg bg-violet-600/25 border border-violet-500/40 text-violet-300 font-mono font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-start gap-3 text-xs text-slate-200">
            <Info className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">نکته بهینه‌سازی: </strong>
              <span>{activeGuide.tip}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>لینک اشتراک خود را می‌توانید از داشبورد کاربری کپی کنید.</span>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold"
            >
              <span>رفتن به داشبورد کاربری</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
