import React from 'react';
import Link from 'next/link';
import { Send, Shield } from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';

export function PublicFooter() {
  return (
    <footer className="bg-[#07070C] border-t border-violet-500/15 text-slate-400 text-xs mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.06]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <IsoShieldLogo className="w-8 h-8" />
              <div>
                <span className="text-base font-black text-white block">ISO VPN</span>
                <span className="text-[10px] font-mono text-violet-400">INFRASTRUCTURE</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              زیرساخت اختصاصی شبکه خصوصی و مدیریت یکپارچه اشتراک‌ها با تمرکز بر پایداری، امنیت رمزنگاری و کمترین تاخیر مسیر.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/store" className="hover:text-violet-300 transition-colors">
                  فروشگاه و تعرفه‌ها
                </Link>
              </li>
              <li>
                <Link href="/servers" className="hover:text-violet-300 transition-colors">
                  فهرست سرورها
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-violet-300 transition-colors">
                  راهنمای نصب نرم‌افزار
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-violet-300 transition-colors">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs">پنل‌های کاربری</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="hover:text-violet-300 transition-colors">
                  داشبورد مشتریان
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-violet-300 transition-colors">
                  ورود به حساب کاربری
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-violet-300 transition-colors">
                  ثبت‌نام سریع
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-violet-300 transition-colors">
                  پنل مدیریت (Admin UI)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs">پروتکل‌ها و پشتیبانی</h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-1 rounded-md bg-[#151124] border border-violet-500/20 text-slate-300">
                VLESS REALITY
              </span>
              <span className="px-2 py-1 rounded-md bg-[#151124] border border-violet-500/20 text-slate-300">
                Trojan gRPC
              </span>
              <span className="px-2 py-1 rounded-md bg-[#151124] border border-violet-500/20 text-slate-300">
                Hysteria 2
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
              پشتیبانی فنی ۲۴ ساعته از طریق تلگرام جهت راهنمایی نصب و بررسی وضعیت اتصال.
            </p>
            <a
              href="https://t.me/isovpn_support"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-bold text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>@isovpn_support</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-violet-500" />
            <span>© ۲۰۲۶ ISO VPN. تمامی حقوق محفوظ است.</span>
          </div>
          <div className="flex items-center gap-5">
            <span>فاز اول: پیش‌نمایش رابط کاربری</span>
            <Link href="/faq" className="hover:text-slate-300">
              قوانین استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
