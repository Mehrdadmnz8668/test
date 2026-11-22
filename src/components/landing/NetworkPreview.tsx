import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Server } from 'lucide-react';
import { PREVIEW_SERVERS } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';

export function NetworkPreview() {
  return (
    <section id="servers" className="py-20 bg-[#0D0B16] border-y border-violet-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-violet-400 uppercase tracking-widest">
              NETWORK LOCATIONS PREVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              نودهای بین‌المللی شبکه ISO VPN
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              دسترسی همزمان به تمامی لوکیشن‌ها از طریق یک Subscription URL واحد (داده‌های نمونه رابط کاربری)
            </p>
          </div>

          <Link
            href="/servers"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151124] hover:bg-[#1E1836] border border-violet-500/25 text-slate-200 text-xs font-bold transition-colors self-start md:self-auto"
          >
            <Server className="w-3.5 h-3.5 text-violet-400" />
            <span>مشاهده تمام سرورها</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PREVIEW_SERVERS.map((srv) => (
            <div
              key={srv.id}
              className="p-5 rounded-2xl bg-[#0F0D18] border border-violet-500/15 hover:border-violet-500/35 transition-colors space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{srv.flag}</span>
                <Badge variant={srv.status === 'optimal' ? 'emerald' : 'violet'} dot>
                  {srv.status === 'optimal' ? 'مسیر بهینه' : 'پایدار'}
                </Badge>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">{srv.name}</h3>
                <p className="text-[11px] text-violet-300/80 font-mono mt-1">{srv.protocol}</p>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">{srv.useCase}</p>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">نمونه تاخیر مسیر:</span>
                <span className="font-mono font-bold text-slate-200" dir="ltr">
                  ~{srv.sampleLatencyMs} ms
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
