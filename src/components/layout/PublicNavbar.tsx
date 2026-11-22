'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';

export function PublicNavbar() {
  const pathname = usePathname();
  const navs = [ { h: '/', l: 'خانه' }, { h: '/store', l: 'قیمت‌گذاری' }, { h: '/servers', l: 'شبکه' }, { h: '/faq', l: 'راهنما' } ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b-0 border-x-0 border-t-0 border-b-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <IsoShieldLogo className="w-7 h-7" />
          <span className="font-black text-white tracking-wide">ISO VPN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navs.map(n => (
             <Link key={n.h} href={n.h} className={`text-xs font-medium transition-colors ${pathname===n.h ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
               {n.l}
             </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">ورود</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">پنل کاربری</Link>
        </div>
      </div>
    </header>
  );
}
