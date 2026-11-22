'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Info, ShieldCheck } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { PREVIEW_SERVERS } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/StateViews';

export default function ServersPage() {
  const [protocolFilter, setProtocolFilter] = useState<string>('ALL');

  const filteredServers = PREVIEW_SERVERS.filter((srv) =>
    protocolFilter === 'ALL' ? true : srv.protocol === protocolFilter
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-violet-400">زیرساخت شبکه ISO VPN</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              لوکیشن‌ها و نودهای بین‌المللی
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              تمامی اشتراک‌های ISO VPN به‌صورت خودکار به فهرست کامل سرورهای اروپایی متصل می‌شوند.
            </p>
          </div>

          <Link
            href="/store"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold self-start md:self-auto"
          >
            <span>تهیه اشتراک دسترسی</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="rounded-2xl bg-[#151124] border border-violet-500/25 p-4 flex items-center gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-violet-400 shrink-0" />
          <span>
            مقادیر تاخیر و ظرفیت نمایش‌داده‌شده در این صفحه نمونه‌های ایستا (Static UI Preview) جهت نمایش ساختار جدول سرورها هستند و مانیتورینگ زنده در فاز اتصال به پنل مرزبان فعال می‌شود.
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['ALL', 'VLESS + REALITY', 'Trojan + gRPC', 'Hysteria 2'].map((proto) => (
            <button
              key={proto}
              onClick={() => setProtocolFilter(proto)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                protocolFilter === proto
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#0F0D18] border border-violet-500/15 text-slate-300 hover:text-white'
              }`}
            >
              {proto === 'ALL' ? 'همه پروتکل‌ها' : proto}
            </button>
          ))}
        </div>

        {filteredServers.length === 0 ? (
          <EmptyState
            title="سروری با این پروتکل یافت نشد"
            description="فیلتر پروتکل را روی همه پروتکل‌ها قرار دهید."
            actionLabel="نمایش همه سرورها"
            onAction={() => setProtocolFilter('ALL')}
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredServers.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 hover:border-violet-500/35 p-6 space-y-5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl">{srv.flag}</span>
                    <div>
                      <h2 className="text-base font-bold text-white">{srv.name}</h2>
                      <p className="text-xs font-mono text-slate-400 mt-0.5" dir="ltr">
                        {srv.endpointMasked}
                      </p>
                    </div>
                  </div>

                  <Badge variant={srv.status === 'optimal' ? 'emerald' : 'violet'} dot>
                    {srv.status === 'optimal' ? 'مسیر بهینه' : 'پایدار'}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] text-xs">
                  <div>
                    <span className="text-[11px] text-slate-400 block">پروتکل</span>
                    <span className="font-mono font-bold text-violet-300 mt-0.5 block">
                      {srv.protocol}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">نمونه تاخیر</span>
                    <span className="font-mono font-bold text-white mt-0.5 block" dir="ltr">
                      ~{srv.sampleLatencyMs} ms
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">بار نمونه</span>
                    <span className="font-mono font-bold text-slate-200 mt-0.5 block" dir="ltr">
                      {srv.capacityPercent}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-violet-400" />
                    <span>کاربرد پیشنهادی: {srv.useCase}</span>
                  </span>
                  <Globe className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <PublicFooter />
    </div>
  );
}
