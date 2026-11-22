'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, Eye, Search, X, XCircle } from 'lucide-react';
import { DEMO_ORDERS } from '@/data/mockData';
import { OrderRecord } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/StateViews';
import { formatToman } from '@/lib/formatters';

export default function DashboardOrdersPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'paid' | 'pending' | 'failed'>('all');
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);

  const filteredOrders = DEMO_ORDERS.filter((ord) => {
    const matchesStatus = statusFilter === 'all' || ord.status === statusFilter;
    const matchesSearch =
      ord.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
      ord.planTitle.includes(search);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-black text-white">تاریخچه سفارشات و فاکتورها</h1>
        <p className="text-xs text-slate-400 mt-1">
          سوابق خرید و تمدید اشتراک‌ها (داده‌های نمایشی فاز اول)
        </p>
      </div>

      <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی شماره فاکتور یا نام پلن..."
            className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'all', label: 'همه' },
            { id: 'paid', label: 'پرداخت موفق' },
            { id: 'pending', label: 'در انتظار' },
            { id: 'failed', label: 'ناموفق' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setStatusFilter(item.id as 'all' | 'paid' | 'pending' | 'failed')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                statusFilter === item.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#151124] text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <EmptyState
          title="سفارشی مطابق جستجوی شما یافت نشد"
          description="عبارت جستجو یا فیلتر وضعیت پرداخت را تغییر دهید."
          actionLabel="پاک کردن فیلترها"
          onAction={() => {
            setSearch('');
            setStatusFilter('all');
          }}
        />
      ) : (
        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#151124] text-slate-400 border-b border-white/[0.07]">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">شماره فاکتور</th>
                  <th className="py-3.5 px-4 font-semibold">عنوان سرویس</th>
                  <th className="py-3.5 px-4 font-semibold">حجم / مدت</th>
                  <th className="py-3.5 px-4 font-semibold">مبلغ پرداختی</th>
                  <th className="py-3.5 px-4 font-semibold">تاریخ ثبت</th>
                  <th className="py-3.5 px-4 font-semibold">وضعیت</th>
                  <th className="py-3.5 px-4 font-semibold">جزئیات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-slate-200">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-mono text-violet-300">{ord.invoiceNumber}</td>
                    <td className="py-3.5 px-4 font-semibold text-white">{ord.planTitle}</td>
                    <td className="py-3.5 px-4 text-slate-400">
                      {ord.volumeLabel} · {ord.durationLabel}
                    </td>
                    <td className="py-3.5 px-4 font-mono">{formatToman(ord.amountToman)} تومان</td>
                    <td className="py-3.5 px-4 text-slate-400">{ord.createdAtJalali}</td>
                    <td className="py-3.5 px-4">
                      {ord.status === 'paid' && (
                        <Badge variant="emerald">
                          <CheckCircle2 className="w-3 h-3" /> موفق
                        </Badge>
                      )}
                      {ord.status === 'pending' && (
                        <Badge variant="amber">
                          <Clock className="w-3 h-3" /> در انتظار
                        </Badge>
                      )}
                      {ord.status === 'failed' && (
                        <Badge variant="rose">
                          <XCircle className="w-3 h-3" /> ناموفق
                        </Badge>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => setSelectedOrder(ord)}
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-violet-600/20 text-slate-300 hover:text-violet-300 transition-colors cursor-pointer"
                        title="مشاهده جزئیات فاکتور"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-[#120F1E] border border-violet-500/35 p-6 space-y-5 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 left-4 p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div>
              <span className="text-[11px] font-mono text-violet-400">
                INVOICE #{selectedOrder.invoiceNumber}
              </span>
              <h3 className="text-base font-black text-white mt-0.5">{selectedOrder.planTitle}</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0912] border border-white/[0.07] space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">حجم و اعتبار:</span>
                <span className="text-white font-semibold">
                  {selectedOrder.volumeLabel} — {selectedOrder.durationLabel}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">تخفیف اعمال‌شده:</span>
                <span className="font-mono text-emerald-400">
                  {formatToman(selectedOrder.discountToman)} تومان
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">مبلغ نهایی:</span>
                <span className="font-mono font-bold text-white">
                  {formatToman(selectedOrder.amountToman)} تومان
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">درگاه پرداخت:</span>
                <span className="text-slate-200">{selectedOrder.gateway}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">تاریخ ثبت:</span>
                <span className="text-slate-200">{selectedOrder.createdAtJalali}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
