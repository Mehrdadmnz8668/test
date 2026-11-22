import React from 'react';
import Link from 'next/link';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
export function PublicFooter() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#09090F] pt-24 pb-12 relative overflow-hidden">
      {/* Subtle glow in footer */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7A00FF] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">
        <div className="md:col-span-5 space-y-6">
           <div className="flex items-center gap-3">
             <IsoShieldLogo className="w-7 h-7 opacity-80" />
             <span className="font-black text-white tracking-widest text-sm">ISO VPN</span>
           </div>
           <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
             توسعه‌یافته بر پایه معماری ابری توزیع‌شده. ارائه راهکارهای ارتباطی امن، رمزنگاری‌شده و بدون افت سرعت برای تیم‌های حرفه‌ای و استفاده شخصی.
           </p>
        </div>
        <div className="md:col-span-2">
           <h4 className="text-white text-xs font-bold mb-6 tracking-wide">زیرساخت</h4>
           <ul className="space-y-4 text-xs text-slate-400 font-medium">
             <li><Link href="/store" className="hover:text-white transition-colors">طرح‌های اشتراکی</Link></li>
             <li><Link href="/servers" className="hover:text-white transition-colors">موقعیت نودها</Link></li>
             <li><Link href="/" className="hover:text-white transition-colors">پروتکل‌های اتصال</Link></li>
           </ul>
        </div>
        <div className="md:col-span-2">
           <h4 className="text-white text-xs font-bold mb-6 tracking-wide">کاربران</h4>
           <ul className="space-y-4 text-xs text-slate-400 font-medium">
             <li><Link href="/dashboard" className="hover:text-white transition-colors">پورتال اختصاصی</Link></li>
             <li><Link href="/guide" className="hover:text-white transition-colors">مستندات راه‌اندازی</Link></li>
             <li><Link href="/faq" className="hover:text-white transition-colors">پایگاه دانش</Link></li>
           </ul>
        </div>
        <div className="md:col-span-3">
           <h4 className="text-white text-xs font-bold mb-6 tracking-wide">ارتباط</h4>
           <p className="text-xs text-slate-400 leading-relaxed mb-4">
             پشتیبانی فنی در طول ۲۴ ساعت شبانه‌روز آماده رسیدگی به درخواست‌های معماری و اتصال شماست.
           </p>
           <a href="https://t.me/isovpn_support" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#B8A5FF] hover:text-white transition-colors">
             Telegram Support →
           </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
          © 2026 ISO VPN Infrastructure. All rights reserved.
        </div>
        <div className="flex gap-6 text-[10px] text-slate-500 font-medium">
          <Link href="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
