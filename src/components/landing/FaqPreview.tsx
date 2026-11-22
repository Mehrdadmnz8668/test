'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, Send } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/mockData';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const previewFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <section id="faq" className="py-20 bg-[#0D0B16] border-t border-violet-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#151124] border border-violet-500/25 text-violet-300 text-xs font-bold">
              پرسش‌های متداول
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">پاسخ به سوالات رایج</h2>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-right font-bold text-white text-xs sm:text-sm flex items-center justify-between gap-4 hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-violet-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-slate-300/85 leading-relaxed border-t border-white/[0.06] pt-3.5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300"
            >
              <span>مشاهده تمام سوالات متداول</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-l from-[#1C1236] to-[#110D21] border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-white">
              نیاز به راهنمایی پیش از خرید دارید؟
            </h3>
            <p className="text-xs text-slate-300/80">
              کارشناسان پشتیبانی ISO VPN در تلگرام آماده پاسخگویی و معرفی بهترین پلن متناسب با مصرف شما هستند.
            </p>
          </div>

          <a
            href="https://t.me/isovpn_support"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs border border-violet-400/30 transition-colors flex items-center gap-2 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>گفتگو در تلگرام</span>
          </a>
        </div>
      </div>
    </section>
  );
}
