'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Menu, Send, ShieldCheck, X } from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';

const NAV_ITEMS = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/store', label: 'فروشگاه سرویس' },
  { href: '/servers', label: 'سرورها' },
  { href: '/guide', label: 'راهنمای اتصال' },
  { href: '/faq', label: 'سوالات متداول' },
];

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#09090F]/90 backdrop-blur-md border-b border-violet-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="p-1.5 rounded-xl bg-[#151124] border border-violet-500/25 group-hover:border-violet-400/50 transition-colors">
            <IsoShieldLogo className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wide text-white flex items-center gap-1">
              ISO <span className="text-violet-400">VPN</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              Secure Network
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-[#0F0D18] p-1.5 rounded-xl border border-white/[0.06]">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/admin"
            className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-violet-300 hover:bg-white/[0.04] border border-transparent hover:border-violet-500/20 transition-colors flex items-center gap-1.5"
            title="نمای مدیریت پلتفرم"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>پنل ادمین</span>
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-[#151124] hover:bg-[#1E1836] border border-violet-500/20 transition-colors"
          >
            ورود
          </Link>

          <Link
            href="/dashboard"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white border border-violet-400/30 shadow-lg shadow-violet-950/50 transition-all flex items-center gap-2"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>پنل کاربری</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2.5 rounded-xl bg-[#151124] border border-violet-500/25 text-slate-200 hover:text-white"
          aria-label="منوی ناوبری"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0F0D18] border-b border-violet-500/20 px-4 pt-3 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'text-slate-300 hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-2 gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 rounded-xl text-center text-xs font-semibold bg-[#151124] border border-violet-500/20 text-slate-200"
            >
              ورود / ثبت‌نام
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 rounded-xl text-center text-xs font-bold bg-violet-600 text-white"
            >
              پنل کاربری
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="col-span-2 py-2.5 rounded-xl text-center text-xs font-semibold bg-white/[0.03] border border-white/10 text-slate-300 flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              ورود به پنل مدیریت (Admin)
            </Link>
            <a
              href="https://t.me/isovpn_support"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 py-2.5 rounded-xl text-center text-xs font-semibold text-violet-300 hover:underline flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              کانال و پشتیبانی تلگرام
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
