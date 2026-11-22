import React from 'react';
import Link from 'next/link';
import { PREVIEW_SERVERS } from '@/data/mockData';

export function NetworkPreview() {
  return (
    <section className="py-32 border-y border-white/[0.04] bg-[#0E0C13]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono tracking-widest text-[#7A00FF] uppercase mb-4">Global Network</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              حضور در شاهراه‌های داده اروپا.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              با تهیه یک اشتراک، به تمامی نودهای قدرتمند ما در برترین دیتاسنترهای اروپا متصل می‌شوید. مسیریابی اختصاصی برای کمترین تاخیر ممکن.
            </p>
          </div>
          <Link href="/servers" className="text-xs font-bold text-white hover:text-[#B8A5FF] transition-colors pb-1 border-b border-white/20 hover:border-[#B8A5FF]">
            مشاهده وضعیت زنده شبکه →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PREVIEW_SERVERS.map((srv) => (
            <div key={srv.id} className="editorial-card p-6 rounded-2xl hover:bg-white/[0.02] transition-colors">
              <div className="flex justify-between items-start mb-6">
                 <span className="text-2xl opacity-80 grayscale mix-blend-luminosity">{srv.flag}</span>
                 <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{srv.name}</h3>
              <div className="text-[10px] font-mono text-slate-500 mb-6">{srv.endpointMasked}</div>
              
              <div className="pt-4 border-t border-white/[0.04] flex justify-between items-center text-xs">
                <span className="text-slate-400">Latency</span>
                <span className="font-mono text-white font-bold">{srv.sampleLatencyMs}ms</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
