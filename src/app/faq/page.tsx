'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, Send } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { FAQ_ITEMS } from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/StateViews';

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | 'purchase' | 'setup' | 'trading' | 'account'>('all');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCat = category === 'all' || item.category === category;
    const matchesQuery =
      item.question.includes(search.trim()) || item.answer.includes(search.trim());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-violet-400">مرکز راهنمایی ISO VPN</span>
          <h1 className="text-2xl sm:text-4xl font-black text-white">سوالات متداول و پاسخ‌ها</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            پاسخ به پرتکرارترین پرسش‌ها درباره خرید اشتراک، نحوه اتصال و مدیریت حساب کاربری
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در سوالات متداول..."
              className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-[#0F0D18] border border-violet-500/20 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'همه موضوعات' },
              { id: 'setup', label: 'اتصال و نرم‌افزار' },
              { id: 'purchase', label: 'خرید و پرداخت' },
              { id: 'trading', label: 'ترید و IP ثابت' },
              { id: 'account', label: 'مدیریت اشتراک' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setCategory(cat.id as 'all' | 'purchase' | 'setup' | 'trading' | 'account')
                }
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  category === cat.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-[#0F0D18] border border-violet-500/15 text-slate-300 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="پاسخی مطابق جستجوی شما یافت نشد"
            description="عبارت دیگری را جستجو کنید یا از طریق تلگرام با پشتیبانی فنی در ارتباط باشید."
            actionLabel="نمایش همه سوالات"
            onAction={() => {
              setSearch('');
              setCategory('all');
            }}
          />
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <Badge variant="neutral">{item.categoryLabel}</Badge>
                      <h2 className="text-xs sm:text-sm font-bold text-white">{item.question}</h2>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-violet-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-3.5 border-t border-white/[0.06] text-xs text-slate-300 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="rounded-2xl bg-[#151124] border border-violet-500/25 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">پاسخ سوال خود را پیدا نکردید؟</h3>
            <p className="text-xs text-slate-400">
              پشتیبانی تلگرام ISO VPN آماده پاسخگویی مستقیم به پرسش‌های شماست.
            </p>
          </div>
          <a
            href="https://t.me/isovpn_support"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold inline-flex items-center gap-2 shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>پیام به پشتیبانی تلگرام</span>
          </a>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
