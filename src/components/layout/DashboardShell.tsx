'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CreditCard,
  ExternalLink,
  Layers,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  X,
} from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { Badge } from '@/components/ui/Badge';
import { DEMO_USER_PROFILE } from '@/data/mockData';

const DASHBOARD_NAV = [
  { href: '/dashboard', label: 'نمای کلی داشبورد', icon: LayoutDashboard },
  { href: '/dashboard/subscriptions', label: 'اشتراک‌های من', icon: Layers },
  { href: '/dashboard/orders', label: 'تاریخچه سفارشات', icon: CreditCard },
  { href: '/dashboard/settings', label: 'تنظیمات حساب', icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSidebarLinks = (onNavigate?: () => void) => (
    <nav className="space-y-1.5">
      {DASHBOARD_NAV.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-colors ${
              isActive
                ? 'bg-violet-600 text-white shadow-md shadow-violet-950/60'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-violet-400'}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#09090F] text-slate-100 flex">
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:right-0 bg-[#0D0B16] border-l border-violet-500/15 p-5 justify-between">
        <div className="space-y-7">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <Link href="/" className="flex items-center gap-2.5">
              <IsoShieldLogo className="w-8 h-8" />
              <div>
                <span className="text-base font-black text-white block">ISO VPN</span>
                <span className="text-[10px] font-mono text-violet-400">CUSTOMER PORTAL</span>
              </div>
            </Link>
            <Badge variant="amber">نمای دمو</Badge>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#151124] border border-violet-500/20 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/25 border border-violet-500/40 flex items-center justify-center font-black text-violet-300 text-sm">
                ISO
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{DEMO_USER_PROFILE.fullName}</p>
                <p className="text-[11px] text-slate-400 font-mono truncate" dir="ltr">
                  {DEMO_USER_PROFILE.email}
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-slate-400">شناسه سرویس:</span>
              <span className="font-mono text-violet-300">{DEMO_USER_PROFILE.marzbanClientCode}</span>
            </div>
          </div>

          {renderSidebarLinks()}
        </div>

        <div className="space-y-2 pt-4 border-t border-white/[0.06]">
          <Link
            href="/store"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-violet-600/15 hover:bg-violet-600/25 border border-violet-500/30 text-violet-200 text-xs font-bold transition-colors"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-violet-400" />
              خرید اشتراک جدید
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>بازگشت به وب‌سایت</span>
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] bg-[#0D0B16] border-l border-violet-500/25 p-5 flex flex-col justify-between z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setSidebarOpen(false)}>
                  <IsoShieldLogo className="w-7 h-7" />
                  <span className="text-base font-black text-white">ISO VPN</span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-slate-300"
                  aria-label="بستن منو"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {renderSidebarLinks(() => setSidebarOpen(false))}
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <Link
                href="/store"
                onClick={() => setSidebarOpen(false)}
                className="block w-full py-2.5 rounded-xl bg-violet-600 text-white text-center text-xs font-bold"
              >
                خرید سرویس جدید
              </Link>
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="block w-full py-2.5 rounded-xl bg-white/5 text-slate-300 text-center text-xs font-medium"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 lg:pr-72 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-[#09090F]/90 backdrop-blur-md border-b border-violet-500/15 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[#151124] border border-violet-500/20 text-slate-200"
              aria-label="باز کردن منوی پنل"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white">پنل کاربری ISO VPN</span>
              <span className="hidden sm:inline text-xs text-slate-500">/ داده پیش‌نمایش رابط کاربری</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/guide"
              className="px-3 py-1.5 rounded-lg bg-[#151124] border border-violet-500/20 text-xs text-slate-300 hover:text-white transition-colors"
            >
              راهنمای اتصال
            </Link>
            <Link
              href="/store"
              className="px-3.5 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-colors"
            >
              + سرویس جدید
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
