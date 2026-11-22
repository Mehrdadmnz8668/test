'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Copy, QrCode, RefreshCw, Shield, Users, X } from 'lucide-react';
import { CustomerSubscription } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/ToastProvider';
import { formatPersianNumber } from '@/lib/formatters';

interface SubscriptionCardProps {
  subscription: CustomerSubscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const { showToast } = useToast();

  const remainingGb = Math.max(0, +(subscription.totalTrafficGb - subscription.usedTrafficGb).toFixed(1));
  const usedPercent = Math.min(
    100,
    Math.round((subscription.usedTrafficGb / subscription.totalTrafficGb) * 100)
  );

  const handleCopy = () => {
    navigator.clipboard?.writeText(subscription.subscriptionUrl);
    setCopied(true);
    showToast('لینک اشتراک (Subscription URL) در حافظه کپی شد.');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-[#17112B] via-[#100D1C] to-[#0E0B18] border border-violet-500/30 p-6 sm:p-7 space-y-6 shadow-xl shadow-black/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.07]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <Badge
                variant={subscription.status === 'active' ? 'emerald' : 'amber'}
                dot
              >
                {subscription.status === 'active' ? 'اشتراک فعال (دمو)' : 'نزدیک به انقضا (دمو)'}
              </Badge>
              <span className="text-[11px] font-mono text-slate-400">#{subscription.id}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white">{subscription.planTitle}</h2>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setQrOpen(true)}
            >
              <QrCode className="w-3.5 h-3.5 text-violet-400" />
              <span>کد QR</span>
            </Button>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold border border-violet-400/30 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>تمدید اشتراک</span>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <span className="text-slate-300 font-semibold">وضعیت مصرف ترافیک (داده نمونه):</span>
            <span className="font-mono text-violet-300 font-bold" dir="ltr">
              {subscription.usedTrafficGb} GB / {subscription.totalTrafficGb} GB ({usedPercent}%)
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-black/50 border border-white/10 p-0.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                usedPercent > 85 ? 'bg-amber-500' : 'bg-violet-500'
              }`}
              style={{ width: `${usedPercent}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#0B0912] border border-white/[0.06]">
              <div className="text-[11px] text-slate-400">حجم باقی‌مانده</div>
              <div className="text-sm font-black font-mono text-white mt-0.5" dir="ltr">
                {remainingGb} GB
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#0B0912] border border-white/[0.06]">
              <div className="text-[11px] text-slate-400">تاریخ انقضا</div>
              <div className="text-sm font-bold text-white mt-0.5">
                {subscription.expiresAtJalali}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#0B0912] border border-white/[0.06]">
              <div className="text-[11px] text-slate-400">اعتبار باقی‌مانده</div>
              <div className="text-sm font-bold text-violet-300 mt-0.5">
                {formatPersianNumber(subscription.remainingDays)} روز
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#0B0912] border border-white/[0.06]">
              <div className="text-[11px] text-slate-400">کاربر همزمان</div>
              <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-violet-400" />
                <span>{formatPersianNumber(subscription.concurrentLimit)} دستگاه</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-violet-400" />
              <span>لینک اشتراک یکپارچه (Subscription URL):</span>
            </label>
            <div className="hidden sm:flex items-center gap-1.5">
              {subscription.protocols.map((proto) => (
                <span
                  key={proto}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300"
                >
                  {proto}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <input
              type="text"
              readOnly
              dir="ltr"
              value={subscription.subscriptionUrl}
              className="flex-1 px-4 py-3 rounded-xl bg-[#090810] border border-white/10 font-mono text-xs text-violet-300 select-all focus:outline-none"
            />
            <Button type="button" variant="primary" size="md" onClick={handleCopy}>
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'کپی شد' : 'کپی لینک اشتراک'}</span>
            </Button>
          </div>
        </div>
      </div>

      {qrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-[#120F1E] border border-violet-500/35 p-6 space-y-5 relative text-center">
            <button
              onClick={() => setQrOpen(false)}
              className="absolute top-4 left-4 p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">اسکن لینک اشتراک</h3>
              <p className="text-xs text-slate-400">
                پیش‌نمایش کد QR جهت وارد کردن سریع در v2rayNG یا Streisand
              </p>
            </div>
            <div className="w-44 h-44 mx-auto rounded-2xl bg-white p-3 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#09090F]">
                <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="12" y="12" width="11" height="11" fill="currentColor" />
                <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="77" y="12" width="11" height="11" fill="currentColor" />
                <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="12" y="77" width="11" height="11" fill="currentColor" />
                <rect x="40" y="10" width="8" height="8" fill="currentColor" />
                <rect x="52" y="22" width="8" height="18" fill="currentColor" />
                <rect x="38" y="40" width="24" height="24" fill="currentColor" />
                <rect x="10" y="44" width="16" height="8" fill="currentColor" />
                <rect x="72" y="46" width="18" height="8" fill="currentColor" />
                <rect x="44" y="74" width="12" height="16" fill="currentColor" />
                <rect x="68" y="70" width="22" height="22" fill="currentColor" />
              </svg>
            </div>
            <Button type="button" variant="secondary" size="sm" fullWidth onClick={handleCopy}>
              <Copy className="w-3.5 h-3.5" />
              <span>کپی متن لینک اشتراک</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
