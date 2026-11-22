import React from 'react';
import { Headphones, Shield, Sliders, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'مسیرهای پایدار و رمزنگاری‌شده',
    desc: 'مسیریابی هوشمند داده‌ها از طریق دیتاسنترهای اروپایی با پروتکل‌های مقاوم در برابر اختلال.',
  },
  {
    icon: Zap,
    title: 'راه‌اندازی سریع در چند ثانیه',
    desc: 'تنها با کپی کردن لینک اشتراک اختصاصی در کلاینت‌های استاندارد روی تمام دستگاه‌های خود متصل شوید.',
  },
  {
    icon: Sliders,
    title: 'پنل مدیریت یکپارچه',
    desc: 'مشاهده میزان ترافیک باقی‌مانده، تاریخ انقضا، تمدید اشتراک و سوابق سفارش در یک داشبورد.',
  },
  {
    icon: Headphones,
    title: 'پشتیبانی فنی در تلگرام',
    desc: 'تیم پشتیبانی ISO VPN آماده راهنمایی جهت تنظیم کلاینت‌ها و انتخاب بهترین پروتکل است.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#151124] border border-violet-500/25 text-violet-300 text-xs font-bold">
            مزایای شبکه ISO
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">امکانات کلیدی زیرساخت ISO VPN</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            طراحی‌شده برای تجربه کاربری روان، شفاف و بدون پیچیدگی‌های فنی اضافی
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F0D18] border border-violet-500/15 hover:border-violet-500/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#18132B] border border-violet-500/25 flex items-center justify-center text-violet-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
