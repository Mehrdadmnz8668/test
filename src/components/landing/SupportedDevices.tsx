import React from 'react';
import Link from 'next/link';
import { Smartphone, Laptop, Monitor, Terminal } from 'lucide-react';

export function SupportedDevices() {
  const devices = [
    { name: 'Android', icon: Smartphone, apps: 'v2rayNG, NekoBox' },
    { name: 'iOS', icon: Smartphone, apps: 'Streisand, V2Box' },
    { name: 'Windows', icon: Laptop, apps: 'v2rayN, Nekoray' },
    { name: 'macOS', icon: Monitor, apps: 'V2Box, Sing-Box' },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono tracking-widest text-[#7A00FF] uppercase mb-4">Integration</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">طراحی شده برای اکوسیستم شما.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {devices.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={i} className="editorial-card p-8 rounded-2xl flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                <Icon className="w-8 h-8 text-slate-400 mb-4 group-hover:text-white transition-colors stroke-1" />
                <h4 className="text-sm font-bold text-white mb-1">{d.name}</h4>
                <span className="text-[10px] text-slate-500 font-mono">{d.apps}</span>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Link href="/guide" className="text-xs font-bold text-slate-400 hover:text-white transition-colors pb-1 border-b border-white/10 hover:border-white">
            مشاهده مستندات اتصال گام‌به‌گام
          </Link>
        </div>
      </div>
    </section>
  );
}
