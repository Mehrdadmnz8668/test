'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  LayoutGrid,
  LogOut,
  Menu,
  Package,
  Server,
  Settings,
  ShieldCheck,
  Ticket,
  Users,
  X,
} from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { Badge } from '@/components/ui/Badge';

export type AdminSectionId =
  | 'overview'
  | 'users'
  | 'products'
  | 'orders'
  | 'coupons'
  | 'servers'
  | 'settings';

export const ADMIN_SECTIONS: { id: AdminSectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'overview', label: 'نمای کلی سیستم', icon: LayoutGrid },
  { id: 'users', label: 'مدیریت کاربران', icon: Users },
  { id: 'products', label: 'محصولات و تعرفه‌ها', icon: Package },
  { id: 'orders', label: 'سفارشات و تراکنش‌ها', icon: CreditCard },
  { id: 'coupons', label: 'کدهای تخفیف', icon: Ticket },
  { id: 'servers', label: 'نودها و سرورها', icon: Server },
  { id: 'settings', label: 'تنظیمات پلتفرم', icon: Settings },
];

interface AdminShellProps {
  activeSection: AdminSectionId;
  onSelectSection: (section: AdminSectionId) => void;
  children: React.ReactNode;
}

export function AdminShell({ activeSection, onSelectSection, children }: AdminShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNav = (closeDrawer?: () => void) => (
    <nav className="space-y-1">
      {ADMIN_SECTIONS.map((sec) => {
        const Icon = sec.icon;
        const active = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => {
              onSelectSection(sec.id);
              closeDrawer?.();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-950/60'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-violet-400'}`} />
            <span>{sec.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#09090F] text-slate-100 flex">
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:right-0 bg-[#0C0A14] border-l border-violet-500/20 p-5 justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <Link href="/" className="flex items-center gap-2.5">
              <IsoShieldLogo className="w-8 h-8" />
              <div>
                <span className="text-base font-black text-white block">ISO ADMIN</span>
                <span className="text-[10px] font-mono text-violet-400">CONTROL CENTER</span>
              </div>
            </Link>
            <Badge variant="violet">UI Preview</Badge>
          </div>

          <div className="p-3 rounded-xl bg-[#151124] border border-violet-500/20 flex items-center gap-2.5 text-xs">
            <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="text-slate-300">محیط شبیه‌سازی مدیریت (فاز ۱)</span>
          </div>

          {renderNav()}
        </div>

        <div className="pt-4 border-t border-white/[0.06] space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-violet-300 hover:bg-violet-500/10 transition-colors"
          >
            <span>مشاهده پنل مشتری</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>خروج به صفحه اصلی</span>
          </Link>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-72 max-w-[85vw] bg-[#0C0A14] border-l border-violet-500/25 p-5 flex flex-col justify-between z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-sm font-black text-white">ISO ADMIN PANEL</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {renderNav(() => setMobileOpen(false))}
            </div>
            <Link
              href="/"
              className="py-2.5 rounded-xl bg-white/5 text-center text-xs text-slate-300"
            >
              بازگشت به وب‌سایت
            </Link>
          </div>
        </div>
      )}

      <div className="flex-1 lg:pr-72 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-[#09090F]/90 backdrop-blur-md border-b border-violet-500/15 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[#151124] border border-violet-500/20 text-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xs sm:text-sm font-bold text-white">
              مدیریت پلتفرم ISO VPN —{' '}
              <span className="text-violet-400">
                {ADMIN_SECTIONS.find((s) => s.id === activeSection)?.label}
              </span>
            </h1>
          </div>

          <Badge variant="amber">بدون اتصال به دیتابیس واقعی</Badge>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
