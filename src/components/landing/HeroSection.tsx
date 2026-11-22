'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  Copy,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { useToast } from '@/components/ui/ToastProvider';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopySampleLink = () => {
    const sampleSub = 'https://sub.isovpn.net/api/v1/sub/preview_demo_node';
    navigator.clipboard?.writeText(sampleSub);
    setCopied(true);
    showToast('لینک اشتراک نمونه (پیش‌نمایش) کپی شد.');
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="relative pt-12 lg:pt-20 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[760px] h-[420px] bg-violet-900/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-right space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151124] border border-violet-500/25 text-xs font-semibold text-violet-300">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>زیرساخت اختصاصی ISO VPN</span>
              <span className="text-violet-700">|</span>
              <span className="text-slate-400">مسیریابی بهینه و پایدار</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black leading-[1.28] text-white tracking-tight">
              اینترنت آزاد و پایدار،{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-l from-violet-300 via-purple-200 to-white">
                بدون محدودیت و با امنیت کامل
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              اتصال سریع به سرورهای بین‌المللی با پروتکل‌های مدرن و مدیریت ساده اشتراک از یک پنل یکپارچه. طراحی‌شده برای ترید، هوش مصنوعی، گیمینگ و وب‌گردی روزمره.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/store"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-violet-600 hover:bg-violet-500 text-white border border-violet-400/30 shadow-xl shadow-violet-950/60 transition-all flex items-center justify-center gap-2"
              >
                <span>خرید و انتخاب سرویس</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <Link
                href="/servers"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#151124] hover:bg-[#1C1630] border border-violet-500/25 text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-4 h-4 text-violet-400" />
                <span>مشاهده سرورها</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-lg sm:text-2xl font-black text-white font-mono">VLESS</div>
                <div className="text-xs text-slate-400">پشتیبانی کامل REALITY</div>
              </div>
              <div className="space-y-1 border-r border-white/[0.07] pr-4">
                <div className="text-lg sm:text-2xl font-black text-violet-400 font-mono">4 Regions</div>
                <div className="text-xs text-slate-400">دیتاسنترهای اروپا</div>
              </div>
              <div className="space-y-1 border-r border-white/[0.07] pr-4">
                <div className="text-lg sm:text-2xl font-black text-white font-mono">256-Bit</div>
                <div className="text-xs text-slate-400">رمزنگاری استاندارد</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/25 p-5 sm:p-6 space-y-5 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-xl bg-[#151124] border border-violet-500/25">
                    <IsoShieldLogo className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white">ISO Subscription Profile</h2>
                    <p className="text-[11px] text-slate-400">پروتکل پیشنهادی: VLESS + REALITY</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-lg bg-violet-500/15 text-violet-300 border border-violet-500/30 font-mono font-semibold">
                  UI PREVIEW
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>پهنای باند پورت</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-lg font-black text-white font-mono" dir="ltr">
                    10 Gbps <span className="text-[10px] font-sans text-slate-400">Port</span>
                  </div>
                  <div className="w-full bg-white/[0.06] h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[82%] rounded-full" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>پروتکل‌های فعال</span>
                    <Zap className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div className="text-lg font-black text-violet-300 font-mono" dir="ltr">
                    3 Core
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">VLESS · Trojan · Hy2</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>لوکیشن نمونه اشتراک:</span>
                  <span className="text-violet-300 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    مسیریابی مستقیم
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇩🇪</span>
                    <span className="text-xs font-bold text-white">آلمان — فرانکفورت VIP</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10">
                    Direct Route
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopySampleLink}
                className="w-full py-3 px-4 rounded-xl bg-[#18132B] hover:bg-[#211A3B] border border-violet-500/25 text-xs text-slate-200 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Copy className="w-3.5 h-3.5 text-violet-400" />
                  <span>کپی لینک اشتراک نمونه (پیش‌نمایش)</span>
                </span>
                {copied ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> کپی شد
                  </span>
                ) : (
                  <span className="text-violet-400 font-mono text-[10px]">Sample URL</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
