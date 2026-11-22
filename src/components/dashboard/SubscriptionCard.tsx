'use client';
import React from 'react';
import { Copy, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/ToastProvider';

export function SubscriptionCard({ subscription }: any) {
  const { showToast } = useToast();
  const usedPercent = Math.min(100, Math.round((subscription.usedTrafficGb / subscription.totalTrafficGb) * 100));

  return (
    <div className="card-premium p-6 rounded-3xl relative overflow-hidden">
       {/* Ambient accent inside card */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 blur-[50px] pointer-events-none" />
       
       <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
             <Badge variant="emerald" dot className="mb-2">فعال</Badge>
             <h3 className="text-lg font-bold text-white">{subscription.planTitle}</h3>
          </div>
          <Button size="sm" variant="secondary" onClick={() => showToast('نمایش QR کد')}><QrCode className="w-4 h-4"/> QR Code</Button>
       </div>
       
       <div className="relative z-10 space-y-2 mb-8">
          <div className="flex justify-between text-xs font-medium">
             <span className="text-slate-400">مصرف ترافیک</span>
             <span className="text-white font-mono">{subscription.usedTrafficGb} / {subscription.totalTrafficGb} GB</span>
          </div>
          <div className="h-1.5 w-full bg-[#09090F] rounded-full overflow-hidden border border-white/5">
             <div className="h-full bg-violet-500 rounded-full" style={{ width: `${usedPercent}%` }} />
          </div>
          <p className="text-[10px] text-slate-500">انقضا: {subscription.expiresAtJalali}</p>
       </div>
       
       <div className="relative z-10 flex items-center gap-2">
          <input type="text" readOnly value={subscription.subscriptionUrl} className="flex-1 bg-[#09090F] border border-white/5 rounded-xl px-4 py-2.5 text-[11px] font-mono text-slate-400 focus:outline-none" />
          <Button size="sm" onClick={() => { navigator.clipboard.writeText(subscription.subscriptionUrl); showToast('کپی شد'); }}><Copy className="w-3.5 h-3.5"/></Button>
       </div>
    </div>
  );
}
