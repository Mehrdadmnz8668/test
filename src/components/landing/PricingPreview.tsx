import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { LANDING_PLANS } from '@/data/mockData';
import { Check } from 'lucide-react';
import { formatToman } from '@/lib/formatters';

export function PricingPreview() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
           <div className="text-[10px] font-mono tracking-widest text-[#7A00FF] uppercase mb-4">Investment</div>
           <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">سرمایه‌گذاری روی امنیت و سرعت.</h2>
           <p className="text-sm text-slate-400">بدون هزینه‌های پنهان. پلن مناسب خود را بر اساس ترافیک مورد نیاز انتخاب کنید.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {LANDING_PLANS.map(plan => (
            <div key={plan.id} className={`editorial-card rounded-[24px] p-10 flex flex-col justify-between relative transition-transform hover:-translate-y-2 duration-500 ${plan.featured ? 'glow-border' : ''}`}>
              {plan.featured && (
                 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#7A00FF] text-[10px] font-bold text-white rounded-full tracking-wider shadow-lg">
                   {plan.badge}
                 </div>
              )}
              
              <div>
                <div className="text-[10px] font-mono text-slate-500 tracking-widest mb-4">{plan.code}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-xs text-slate-400 mb-8 min-h-[40px] leading-relaxed">{plan.subtitle}</p>
                
                <div className="flex items-baseline gap-2 mb-10 pb-8 border-b border-white/[0.06]">
                   <span className="text-4xl font-black text-white tracking-tight">{formatToman(plan.priceToman)}</span>
                   <span className="text-[10px] text-slate-500 uppercase tracking-widest">/ Month</span>
                </div>
                
                <ul className="space-y-4 mb-12">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-[#B8A5FF] shrink-0 stroke-[2.5]" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link href={`/store?volume=${plan.volume}`} className="block">
                 <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth size="lg">{plan.featured ? 'شروع با پلن حرفه‌ای' : 'انتخاب'}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
