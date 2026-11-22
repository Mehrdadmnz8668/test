'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Layers, CreditCard, Settings, LogOut } from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { DEMO_USER_PROFILE } from '@/data/mockData';

const NAV = [
  { h: '/dashboard', l: 'نمای کلی', i: LayoutDashboard },
  { h: '/dashboard/subscriptions', l: 'اشتراک‌ها', i: Layers },
  { h: '/dashboard/orders', l: 'مالی', i: CreditCard },
  { h: '/dashboard/settings', l: 'تنظیمات', i: Settings }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-[#09090F] flex">
      {/* Sleek Minimal Sidebar */}
      <aside className="w-64 border-l border-white/5 bg-[#09090F] flex flex-col hidden lg:flex relative z-20">
        <div className="p-6 border-b border-white/5">
           <Link href="/" className="flex items-center gap-3">
             <IsoShieldLogo className="w-6 h-6" />
             <span className="font-bold text-sm tracking-wide text-white">ISO VPN</span>
           </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1">
          {NAV.map(n => {
            const active = path === n.h;
            const Icon = n.i;
            return (
              <Link key={n.h} href={n.h} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${active ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-500'}`} />
                {n.l}
              </Link>
            );
          })}
        </div>
        <div className="p-4 border-t border-white/5">
           <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className="w-8 h-8 rounded-full bg-violet-900/50 flex items-center justify-center text-xs font-bold text-violet-300">ISO</div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">{DEMO_USER_PROFILE.fullName}</div>
                <div className="text-[10px] text-slate-500 truncate" dir="ltr">{DEMO_USER_PROFILE.email}</div>
              </div>
           </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
         <header className="h-16 border-b border-white/5 flex items-center px-8 bg-aurora">
            <h1 className="text-sm font-bold text-white capitalize">{NAV.find(x=>x.h===path)?.l || 'داشبورد'}</h1>
         </header>
         <div className="flex-1 p-8 overflow-y-auto bg-[#09090F] relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10">{children}</div>
         </div>
      </main>
    </div>
  );
}
