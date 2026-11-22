'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { DEMO_SUBSCRIPTIONS } from '@/data/mockData';
import { SubscriptionCard } from '@/components/dashboard/SubscriptionCard';
import { EmptyState } from '@/components/ui/StateViews';

export default function DashboardSubscriptionsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'expiring_soon'>('all');

  const filtered = DEMO_SUBSCRIPTIONS.filter((sub) =>
    filter === 'all' ? true : sub.status === filter
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-white">اشتراک‌های من</h1>
          <p className="text-xs text-slate-400 mt-1">
            مدیریت لینک‌های اشتراک، تمدید سریع و مشاهده باقی‌مانده حجم هر سرویس
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="inline-flex p-1 rounded-xl bg-[#0F0D18] border border-white/[0.07] text-xs">
            {[
              { id: 'all', label: 'همه (۲)' },
              { id: 'active', label: 'فعال' },
              { id: 'expiring_soon', label: 'نزدیک انقضا' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as 'all' | 'active' | 'expiring_soon')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  filter === tab.id ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Link
            href="/store"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>اشتراک جدید</span>
          </Link>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="اشتراکی در این فیلتر یافت نشد"
          description="می‌توانید فیلتر را تغییر دهید یا اشتراک جدیدی از فروشگاه تهیه کنید."
          actionLabel="نمایش همه اشتراک‌ها"
          onAction={() => setFilter('all')}
        />
      ) : (
        <div className="space-y-6">
          {filtered.map((sub) => (
            <SubscriptionCard key={sub.id} subscription={sub} />
          ))}
        </div>
      )}
    </div>
  );
}
