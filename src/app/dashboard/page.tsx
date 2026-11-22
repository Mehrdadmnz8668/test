'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  CreditCard,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { DEMO_ORDERS, DEMO_SUBSCRIPTIONS, DEMO_USER_PROFILE } from '@/data/mockData';
import { SubscriptionCard } from '@/components/dashboard/SubscriptionCard';
import { Badge } from '@/components/ui/Badge';
import { EmptyState, LoadingSkeleton } from '@/components/ui/StateViews';
import { formatToman } from '@/lib/formatters';

export default function CustomerDashboardPage() {
  const [viewMode, setViewMode] = useState<'default' | 'loading' | 'empty'>('default');
  const primarySub = DEMO_SUBSCRIPTIONS[0];
  const recentOrders = DEMO_ORDERS.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/20 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-black text-white">
              خوش آمدید، {DEMO_USER_PROFILE.fullName}
            </h1>
          </div>
          <p className="text-xs text-slate-400">
            مدیریت اشتراک‌های فعال، بررسی میزان ترافیک مصرفی و مشاهده سوابق سفارشات
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#151124] p-1 rounded-xl border border-white/[0.07] self-start md:self-auto">
          <span className="text-[10px] text-slate-400 px-2">حالت نمایش:</span>
          {[
            { id: 'default', label: 'عادی' },
            { id: 'loading', label: 'بارگذاری' },
            { id: 'empty', label: 'بدون اشتراک' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as 'default' | 'loading' | 'empty')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                viewMode === mode.id
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'loading' && <LoadingSkeleton rows={4} />}

      {viewMode === 'empty' && (
        <EmptyState
          title="هنوز اشتراک فعالی ندارید"
          description="پس از تهیه اولین سرویس از فروشگاه ISO VPN، لینک اشتراک یکپارچه و جزئیات ترافیک شما در این بخش نمایش داده می‌شود."
          actionLabel="رفتن به فروشگاه سرویس"
          onAction={() => setViewMode('default')}
        />
      )}

      {viewMode === 'default' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0F0D18] border border-violet-500/15 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-slate-400">اشتراک‌های فعال</span>
                <div className="text-xl font-black font-mono text-white">۲ سرویس</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                <Layers className="w-5 h-5" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F0D18] border border-violet-500/15 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-slate-400">وضعیت اتصال تلگرام</span>
                <div className="text-sm font-bold text-emerald-400">متصل به ربات اطلاع‌رسانی</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F0D18] border border-violet-500/15 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-slate-400">تراکنش‌های موفق</span>
                <div className="text-xl font-black font-mono text-white">۲ سفارش</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                <CreditCard className="w-5 h-5" />
              </div>
            </div>
          </div>

          <SubscriptionCard subscription={primarySub} />

          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">آخرین سفارشات و تراکنش‌ها</h2>
              <Link
                href="/dashboard/orders"
                className="text-xs font-bold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1"
              >
                <span>مشاهده همه سفارشات</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-[#151124] text-slate-400 border-b border-white/[0.07]">
                  <tr>
                    <th className="py-3 px-4 rounded-r-xl font-semibold">شماره فاکتور</th>
                    <th className="py-3 px-4 font-semibold">سرویس</th>
                    <th className="py-3 px-4 font-semibold">مبلغ (تومان)</th>
                    <th className="py-3 px-4 font-semibold">تاریخ</th>
                    <th className="py-3 px-4 rounded-l-xl font-semibold">وضعیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-slate-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-mono text-violet-300">{order.invoiceNumber}</td>
                      <td className="py-3.5 px-4 font-medium">{order.planTitle}</td>
                      <td className="py-3.5 px-4 font-mono">{formatToman(order.amountToman)}</td>
                      <td className="py-3.5 px-4 text-slate-400">{order.createdAtJalali}</td>
                      <td className="py-3.5 px-4">
                        {order.status === 'paid' && (
                          <Badge variant="emerald">
                            <CheckCircle2 className="w-3 h-3" /> پرداخت موفق
                          </Badge>
                        )}
                        {order.status === 'pending' && (
                          <Badge variant="amber">
                            <Clock className="w-3 h-3" /> در انتظار تایید
                          </Badge>
                        )}
                        {order.status === 'failed' && <Badge variant="rose">ناموفق</Badge>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-[#151124] border border-violet-500/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">نیاز به راهنمای وارد کردن لینک اشتراک دارید؟</p>
                <p className="text-slate-400 mt-0.5">
                  آموزش تصویری و گام‌به‌گام اندروید، آیفون، ویندوز و مک در دسترس است.
                </p>
              </div>
            </div>
            <Link
              href="/guide"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shrink-0"
            >
              مشاهده راهنمای نصب
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
