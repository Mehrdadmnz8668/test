import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { LANDING_PLANS } from '@/data/mockData';
import { Check } from 'lucide-react';
import { formatToman } from '@/lib/formatters';

export function PricingPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
         <h2 className="text-3xl font-black text-white">طرح‌های منعطف برای هر نیاز</h2>
         <p className="text-sm text-slate-400">پلن اختصاصی خود را بر اساس میزان مصرف انتخاب کنید</p>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {LANDING_PLANS.map(plan => (
          <div key={plan.id} className={`relative p-8 rounded-3xl transition-all duration-300 card-premium ${plan.featured ? 'md:-translate-y-4 border-violet-500/30' : 'border-white/5 hover:border-white/10'}`}>
            {plan.featured && (
               <>
                 {/* Strong top glow effect from Ref 6/8 */}
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_30px_rgba(167,139,250,0.6)]" />
                 <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-violet-500/10 to-transparent rounded-t-3xl pointer-events-none" />
                 <div className="absolute top-4 left-4 px-3 py-1 bg-violet-600 text-[10px] font-bold text-white rounded-full">پیشنهاد ویژه</div>
               </>
            )}
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 mb-6 flex items-center justify-center text-violet-400 font-mono text-xs">{plan.volume.replace('GB','')}</div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[32px]">{plan.subtitle}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-3xl font-black text-white">{formatToman(plan.priceToman)}</span>
                 <span className="text-xs text-slate-500">/ ماهانه</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-violet-400" /> {f}
                  </li>
                ))}
              </ul>
              
              <Link href={`/store?volume=${plan.volume}`} className="block">
                 <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth className="py-3 rounded-xl">{plan.featured ? 'خرید پلن حرفه‌ای' : 'انتخاب'}</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
