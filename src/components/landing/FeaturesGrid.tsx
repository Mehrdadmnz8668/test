import React from 'react';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';

export function FeaturesGrid() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-[10px] font-mono tracking-widest text-[#7A00FF] uppercase mb-4">Core Technology</div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-2xl">
            معماری یک شبکه بدون نقص.
          </h2>
        </div>

        {/* Asymmetric Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 editorial-card rounded-3xl p-10 flex flex-col justify-between min-h-[320px] group">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white mb-8 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 stroke-1" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">تونل‌های رمزنگاری شده</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                استفاده از پروتکل‌های مقاوم در برابر فیلترینگ هوشمند. داده‌های شما در لایه‌های تو در تو رمزنگاری شده و به عنوان ترافیک عادی اینترنت تشخیص داده می‌شود.
              </p>
            </div>
          </div>

          <div className="editorial-card rounded-3xl p-10 flex flex-col justify-between min-h-[320px] group">
            <div className="w-14 h-14 rounded-2xl bg-[#7A00FF]/10 border border-[#7A00FF]/20 flex items-center justify-center text-[#B8A5FF] mb-8 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 stroke-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">سرعت بی‌رقیب</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                مسیریابی هوشمند و عدم اورسل (Oversell) ظرفیت سرورها، سرعت دانلود و آپلود شما را در بالاترین حد ممکن نگه می‌دارد.
              </p>
            </div>
          </div>

          <div className="editorial-card rounded-3xl p-10 flex flex-col justify-between min-h-[320px] group">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white mb-8 group-hover:scale-105 transition-transform">
              <Globe className="w-6 h-6 stroke-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">آی‌پی‌های ثابت</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                اختصاص IP دیتاسنترهای معتبر اروپایی. مناسب‌ترین گزینه برای فعالیت در صرافی‌های ارز دیجیتال و دور زدن تحریم‌های سرویس‌های خارجی.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 editorial-card rounded-3xl p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#7A00FF]/10 to-transparent blur-3xl rounded-full" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white mb-8 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6 stroke-1" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">زیرساخت اختصاصی ابری</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                ما بر خلاف سرویس‌های عمومی، روی سرورهای ابری قدرتمند با پورت‌های ۱۰ گیگابیتی و پردازنده‌های نسل جدید متکی هستیم تا تجربه‌ای بدون قطعی خلق کنیم.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
