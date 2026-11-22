'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { Menu, X } from 'lucide-react';

export function PublicNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navs = [ { h: '/', l: 'معماری اصلی' }, { h: '/store', l: 'تعرفه‌ها' }, { h: '/servers', l: 'شبکه جهانی' }, { h: '/faq', l: 'پشتیبانی' } ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <IsoShieldLogo className="w-7 h-7 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="flex flex-col">
            <span className="font-black text-white text-sm tracking-wider">ISO VPN</span>
            <span className="text-[8px] font-mono text-slate-500 tracking-[0.2em] uppercase">Architecture</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navs.map(n => (
             <Link key={n.h} href={n.h} className={`text-xs font-semibold transition-colors ${pathname===n.h ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
               {n.l}
             </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-xs font-bold text-slate-300 hover:text-white transition-colors">ورود</Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-white text-black text-xs font-bold rounded-[8px] hover:bg-slate-200 transition-colors">پورتال مشتریان</Link>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/[0.04] p-6 flex flex-col gap-6">
          {navs.map(n => <Link key={n.h} href={n.h} onClick={()=>setMobileOpen(false)} className="text-sm font-semibold text-white">{n.l}</Link>)}
          <div className="h-px bg-white/[0.05] w-full" />
          <Link href="/dashboard" onClick={()=>setMobileOpen(false)} className="text-sm font-semibold text-[#7A00FF]">ورود به پورتال</Link>
        </div>
      )}
    </header>
  );
}
