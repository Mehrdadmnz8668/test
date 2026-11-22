'use client';
import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { VOLUME_OPTIONS, DURATION_OPTIONS, calculateOrderTotals, formatToman } from '@/lib/formatters';
import { useToast } from '@/components/ui/ToastProvider';

export function StoreConfigurator({ initialVolume = '100GB', initialDuration = '1M' }: any) {
  const [vol, setVol] = useState<any>(initialVolume);
  const [dur, setDur] = useState<any>(initialDuration);
  const { showToast } = useToast();
  
  const totals = useMemo(() => calculateOrderTotals(vol, dur, 0), [vol, dur]);

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-8">
         <div className="card-premium p-6 rounded-3xl space-y-5">
            <h3 className="text-sm font-bold text-white">میزان ترافیک (حجم)</h3>
            <div className="bg-[#09090F] p-1.5 rounded-2xl flex flex-wrap gap-1 border border-white/5">
               {VOLUME_OPTIONS.map(v => {
                 const active = vol === v.id;
                 return (
                   <button key={v.id} onClick={() => setVol(v.id)} className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${active ? 'bg-[#1D1730] text-white border border-violet-500/30 shadow-sm' : 'text-slate-400 hover:text-white'}`}>
                     {v.label}
                   </button>
                 );
               })}
            </div>
         </div>
         
         <div className="card-premium p-6 rounded-3xl space-y-5">
            <h3 className="text-sm font-bold text-white">دوره تمدید</h3>
            <div className="bg-[#09090F] p-1.5 rounded-2xl flex gap-1 border border-white/5">
               {DURATION_OPTIONS.map(d => {
                 const active = dur === d.id;
                 return (
                   <button key={d.id} onClick={() => setDur(d.id)} className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${active ? 'bg-[#1D1730] text-white border border-violet-500/30 shadow-sm' : 'text-slate-400 hover:text-white'}`}>
                     {d.label} {d.discountBadge && <span className="text-[9px] text-emerald-400 block font-normal">{d.discountBadge}</span>}
                   </button>
                 );
               })}
            </div>
         </div>
      </div>
      
      <div className="card-premium p-6 rounded-3xl space-y-6 sticky top-24">
         <h3 className="text-sm font-bold text-white border-b border-white/5 pb-4">خلاصه سفارش</h3>
         <div className="space-y-3 text-xs text-slate-300">
           <div className="flex justify-between"><span>حجم:</span> <span className="font-bold text-white">{VOLUME_OPTIONS.find(x=>x.id===vol)?.label}</span></div>
           <div className="flex justify-between"><span>اعتبار:</span> <span className="font-bold text-white">{DURATION_OPTIONS.find(x=>x.id===dur)?.label}</span></div>
           <div className="flex justify-between pt-4 border-t border-white/5">
              <span>مبلغ نهایی:</span>
              <span className="text-xl font-black text-violet-300 font-mono">{formatToman(totals.finalPrice)} <span className="text-[10px] font-sans text-slate-500">تومان</span></span>
           </div>
         </div>
         <Button fullWidth onClick={() => showToast('انتقال به درگاه پرداخت در فاز ۲ انجام می‌شود')}>تایید و پرداخت</Button>
      </div>
    </div>
  );
}
