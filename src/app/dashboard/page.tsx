'use client';
import React from 'react';
import { DEMO_SUBSCRIPTIONS, DEMO_ORDERS } from '@/data/mockData';
import { SubscriptionCard } from '@/components/dashboard/SubscriptionCard';
import { Activity, Shield } from 'lucide-react';
import { formatToman } from '@/lib/formatters';

export default function DashboardHome() {
  const primarySub = DEMO_SUBSCRIPTIONS[0];
  const recentOrders = DEMO_ORDERS.slice(0, 3);
  
  return (
    <div className="space-y-6">
       {/* KPI Cards styled like Ref 9 */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-premium p-5 rounded-2xl">
             <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-slate-400">کل ترافیک مصرفی</span>
                <Activity className="w-4 h-4 text-violet-400" />
             </div>
             <div className="text-2xl font-black text-white font-mono">38.4 <span className="text-xs font-sans text-slate-500">GB</span></div>
          </div>
          <div className="card-premium p-5 rounded-2xl">
             <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-slate-400">وضعیت شبکه</span>
                <Shield className="w-4 h-4 text-emerald-400" />
             </div>
             <div className="text-sm font-bold text-white mt-2">متصل و ایمن</div>
          </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2"><SubscriptionCard subscription={primarySub} /></div>
          
          <div className="card-premium p-6 rounded-3xl">
             <h3 className="text-sm font-bold text-white mb-4">آخرین تراکنش‌ها</h3>
             <div className="space-y-3">
               {recentOrders.map(o => (
                 <div key={o.id} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <div>
                      <div className="font-bold text-white mb-0.5">{formatToman(o.amountToman)} تومان</div>
                      <div className="text-[10px] text-slate-500 font-mono">{o.invoiceNumber}</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">موفق</span>
                 </div>
               ))}
             </div>
          </div>
       </div>
    </div>
  );
}
