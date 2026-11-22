import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { LANDING_PLANS } from '@/data/mockData';
import { formatToman } from '@/lib/formatters';

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 bg-[#0D0B16] border-y border-violet-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#151124] border border-violet-500/25 text-violet-300 text-xs font-bold">
            تعرفه‌های شفاف و اختصاصی
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">سرویس خودت را انتخاب کن</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            امکان سفارشی‌سازی حجم و مدت اشتراک در صفحه فروشگاه با پیش‌نمایش آنی قیمت
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 items-stretch max-w-6xl mx-auto">
          {LANDING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#1C1236] via-[#130E24] to-[#0F0D18] border-2 border-violet-500/70 shadow-2xl shadow-violet-950/50 lg:-translate-y-2'
                  : 'bg-[#0F0D18] border border-violet-500/15 hover:border-violet-500/35'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-violet-600 text-white text-[11px] font-bold shadow">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-5 pt-1">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#151124] text-violet-300 border border-violet-500/25">
                    {plan.code}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {plan.concurrentUsers} کاربر همزمان
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{plan.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.subtitle}</p>
                </div>

                <div className="py-3 border-y border-white/[0.07]">
                  <div className="text-3xl font-black text-white font-mono flex items-baseline gap-1.5">
                    {formatToman(plan.priceToman)}{' '}
                    <span className="text-xs font-sans text-slate-400">تومان / ماهانه</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-200 pt-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/store?volume=${plan.volume}&duration=${plan.duration}`}
                className={`w-full mt-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'bg-violet-600 hover:bg-violet-500 text-white border border-violet-400/30 shadow-lg shadow-violet-950/50'
                    : 'bg-[#151124] hover:bg-[#1F1936] text-slate-100 border border-violet-500/25'
                }`}
              >
                <span>انتخاب و ادامه در فروشگاه</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
