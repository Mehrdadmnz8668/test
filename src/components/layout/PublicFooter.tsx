import React from 'react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
export function PublicFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#09090F] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2">
           <div className="flex items-center gap-2.5 mb-4">
             <IsoShieldLogo className="w-6 h-6" />
             <span className="font-bold text-white text-sm">ISO VPN Infrastructure</span>
           </div>
           <p className="text-xs text-slate-500 leading-relaxed max-w-sm">ارائه‌دهنده سرویس‌های شبکه خصوصی با معماری مدرن، پینگ پایین و پایداری کامل برای نیازهای حرفه‌ای.</p>
        </div>
        <div>
           <h4 className="text-white text-xs font-bold mb-4">محصولات</h4>
           <ul className="space-y-2 text-xs text-slate-400">
             <li>خرید سرویس</li><li>پروتکل‌ها</li><li>شبکه سرورها</li>
           </ul>
        </div>
        <div>
           <h4 className="text-white text-xs font-bold mb-4">پشتیبانی</h4>
           <ul className="space-y-2 text-xs text-slate-400">
             <li>راهنمای راه‌اندازی</li><li>سوالات متداول</li><li>ارتباط در تلگرام</li>
           </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-8 text-center text-[10px] text-slate-600">
        © 2026 ISO VPN. All rights reserved. Designed with Luxury Minimalism.
      </div>
    </footer>
  );
}
