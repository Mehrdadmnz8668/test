'use client';
import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/mockData';

export function FaqPreview() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <section className="py-32 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-[10px] font-mono tracking-widest text-[#7A00FF] uppercase mb-4">Knowledge Base</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">پاسخ‌های شفاف.</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.slice(0, 4).map(item => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-white/[0.06] pb-4">
                <button onClick={() => setOpenId(isOpen ? null : item.id)} className="w-full text-right flex justify-between items-center py-4 cursor-pointer group">
                  <span className={`text-sm font-bold transition-colors ${isOpen ? 'text-[#B8A5FF]' : 'text-white group-hover:text-slate-300'}`}>{item.question}</span>
                  <span className="text-slate-500 font-light text-xl ml-4">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-400 leading-relaxed pl-8">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
