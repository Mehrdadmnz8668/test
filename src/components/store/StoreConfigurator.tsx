'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  HardDrive,
  Info,
  ShieldCheck,
  Tag,
  X,
} from 'lucide-react';
import { DurationOption, VolumeOption } from '@/types';
import {
  calculateOrderTotals,
  DEMO_COUPONS,
  DURATION_OPTIONS,
  formatToman,
  VOLUME_OPTIONS,
} from '@/lib/formatters';
import { LANDING_PLANS } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/ToastProvider';

interface StoreConfiguratorProps {
  initialVolume?: VolumeOption;
  initialDuration?: DurationOption;
}

export function StoreConfigurator({
  initialVolume = '100GB',
  initialDuration = '1M',
}: StoreConfiguratorProps) {
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>(initialVolume);
  const [selectedDuration, setSelectedDuration] = useState<DurationOption>(initialDuration);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percent: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const { showToast } = useToast();

  const totals = useMemo(
    () => calculateOrderTotals(selectedVolume, selectedDuration, appliedCoupon?.percent ?? 0),
    [selectedVolume, selectedDuration, appliedCoupon]
  );

  const currentVolumeLabel =
    VOLUME_OPTIONS.find((v) => v.id === selectedVolume)?.label ?? selectedVolume;
  const currentDurationLabel =
    DURATION_OPTIONS.find((d) => d.id === selectedDuration)?.label ?? selectedDuration;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = couponInput.trim().toUpperCase();
    if (!normalized) {
      setCouponError('لطفاً کد تخفیف را وارد کنید.');
      return;
    }
    const percent = DEMO_COUPONS[normalized];
    if (percent) {
      setAppliedCoupon({ code: normalized, percent });
      setCouponError('');
      showToast(`کد تخفیف ${normalized} (${percent}٪) روی پیش‌نمایش اعمال شد.`);
    } else {
      setAppliedCoupon(null);
      setCouponError('کد تخفیف نامعتبر است. کدهای نمونه دمو: ISO2026 یا WELCOME10');
    }
  };

  const handleSelectPreset = (volume: VolumeOption, duration: DurationOption, title: string) => {
    setSelectedVolume(volume);
    setSelectedDuration(duration);
    showToast(`تنظیمات "${title}" در ماشین‌حساب بارگذاری شد.`, 'info');
  };

  return (
    <div className="space-y-12">
      <div className="rounded-2xl bg-[#151124] border border-violet-500/25 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-slate-300">
          <Info className="w-4 h-4 text-violet-400 shrink-0" />
          <span>
            <strong className="text-white">محیط پیش‌نمایش فروشگاه (فاز ۱):</strong> قیمت‌ها و کدهای تخفیف (مانند{' '}
            <code className="font-mono text-violet-300 bg-black/40 px-1.5 py-0.5 rounded">ISO2026</code>) صرفاً جهت بررسی تعامل رابط کاربری هستند.
          </span>
        </div>
        <Badge variant="amber">Demo Pricing</Badge>
      </div>

      <div className="space-y-4">
        <h2 className="text-base font-bold text-white">انتخاب سریع از بین پلن‌های پیشنهادی</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {LANDING_PLANS.map((preset) => {
            const isSelected =
              selectedVolume === preset.volume && selectedDuration === preset.duration;
            return (
              <div
                key={preset.id}
                onClick={() => handleSelectPreset(preset.volume, preset.duration, preset.title)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  isSelected
                    ? 'bg-[#18122E] border-violet-500 shadow-lg shadow-violet-950/40'
                    : 'bg-[#0F0D18] border-violet-500/15 hover:border-violet-500/35'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-violet-300">{preset.code}</span>
                  {isSelected && <Badge variant="violet">انتخاب‌شده</Badge>}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{preset.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{preset.subtitle}</p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-baseline justify-between">
                  <span className="text-lg font-black font-mono text-white">
                    {formatToman(preset.priceToman)}{' '}
                    <span className="text-[11px] font-sans text-slate-400">تومان</span>
                  </span>
                  <span className="text-[11px] text-slate-400">{preset.concurrentUsers} کاربر</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-7">
          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-violet-400" />
                <span>۱. انتخاب حجم ترافیک اشتراک</span>
              </label>
              <span className="text-xs text-violet-300 font-semibold">{currentVolumeLabel}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {VOLUME_OPTIONS.map((vol) => {
                const active = selectedVolume === vol.id;
                return (
                  <button
                    key={vol.id}
                    type="button"
                    onClick={() => setSelectedVolume(vol.id)}
                    className={`p-4 rounded-xl border text-right transition-all cursor-pointer space-y-1 ${
                      active
                        ? 'bg-violet-600/20 border-violet-500 text-white'
                        : 'bg-[#151124] border-white/[0.07] text-slate-300 hover:border-violet-500/35'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{vol.label}</div>
                    <div className="text-[11px] text-slate-400">{vol.sublabel}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>۲. انتخاب مدت زمان اعتبار</span>
              </label>
              <span className="text-xs text-violet-300 font-semibold">{currentDurationLabel}</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {DURATION_OPTIONS.map((dur) => {
                const active = selectedDuration === dur.id;
                return (
                  <button
                    key={dur.id}
                    type="button"
                    onClick={() => setSelectedDuration(dur.id)}
                    className={`p-4 rounded-xl border text-right transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      active
                        ? 'bg-violet-600/20 border-violet-500 text-white'
                        : 'bg-[#151124] border-white/[0.07] text-slate-300 hover:border-violet-500/35'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold">{dur.label}</span>
                    {dur.discountBadge ? (
                      <span className="inline-block w-fit text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 font-semibold">
                        {dur.discountBadge}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500">تمدید ماهانه</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-3">
            <label htmlFor="coupon-code" className="text-sm font-bold text-white flex items-center gap-2">
              <Tag className="w-4 h-4 text-violet-400" />
              <span>۳. کد تخفیف (اختیاری)</span>
            </label>

            <form onSubmit={handleApplyCoupon} className="flex flex-col sm:flex-row gap-3">
              <input
                id="coupon-code"
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                placeholder="مثال: ISO2026"
                dir="ltr"
                className="flex-1 px-4 py-3 rounded-xl bg-[#151124] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-violet-500"
              />
              <Button type="submit" variant="secondary" size="md">
                اعمال کد تخفیف
              </Button>
            </form>

            {couponError && <p className="text-xs text-rose-400">{couponError}</p>}

            {appliedCoupon && (
              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300">
                <span>
                  کد <strong className="font-mono">{appliedCoupon.code}</strong> ({appliedCoupon.percent}٪ تخفیف) فعال است.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setAppliedCoupon(null);
                    setCouponInput('');
                  }}
                  className="text-slate-400 hover:text-white text-[11px] underline cursor-pointer"
                >
                  حذف کد
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/30 p-6 space-y-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
              <h2 className="text-base font-black text-white">خلاصه سفارش</h2>
              <Badge variant="violet">پیش‌نمایش فاکتور</Badge>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>حجم انتخابی:</span>
                <span className="font-bold text-white">{currentVolumeLabel}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>مدت اعتبار:</span>
                <span className="font-bold text-white">{currentDurationLabel}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>لوکیشن‌های فعال:</span>
                <span className="text-slate-200">آلمان، هلند، فنلاند، انگلیس</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>مبلغ پایه سرویس:</span>
                <span className="font-mono text-slate-200">{formatToman(totals.basePrice)} تومان</span>
              </div>

              {totals.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>تخفیف ({appliedCoupon?.code}):</span>
                  <span className="font-mono">-{formatToman(totals.discountAmount)} تومان</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/[0.07] space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-slate-300">مبلغ قابل پرداخت:</span>
                <div className="text-2xl font-black font-mono text-white">
                  {formatToman(totals.finalPrice)}{' '}
                  <span className="text-xs font-sans text-violet-300">تومان</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                در فاز بعدی به درگاه پرداخت آنلاین و ایجاد خودکار اشتراک متصل می‌شود.
              </p>
            </div>

            <Button
              type="button"
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setCheckoutModalOpen(true)}
            >
              <CreditCard className="w-4 h-4" />
              <span>ادامه و پیش‌نمایش پرداخت</span>
            </Button>

            <ul className="space-y-2 pt-2 text-[11px] text-slate-400">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>تحویل یکپارچه در قالب لینک اشتراک (Subscription URL)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>پشتیبانی فنی از طریق پنل کاربری و تلگرام</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-[#120F1E] border border-violet-500/35 p-6 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-5 left-5 p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white cursor-pointer"
              aria-label="بستن پنجره"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <Badge variant="amber">شبیه‌سازی مرحله پرداخت — فاز ۱</Badge>
              <h3 className="text-lg font-black text-white pt-1">پیش‌نمایش صورت‌حساب سفارش</h3>
              <p className="text-xs text-slate-400">
                در این مرحله تراکنش واقعی انجام نمی‌شود؛ می‌توانید نمای داشبورد مشتری را بررسی کنید.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0912] border border-white/[0.07] space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">سرویس انتخابی:</span>
                <span className="font-bold text-white">
                  {currentVolumeLabel} — {currentDurationLabel}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">مبلغ نهایی:</span>
                <span className="font-mono font-bold text-violet-300">
                  {formatToman(totals.finalPrice)} تومان
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">وضعیت درگاه:</span>
                <span className="text-amber-300 font-semibold">آماده اتصال در فاز ۲</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href="/dashboard"
                onClick={() => {
                  setCheckoutModalOpen(false);
                  showToast('انتقال به نمای پیش‌نمایش داشبورد مشتری');
                }}
                className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>مشاهده نحوه نمایش اشتراک در داشبورد</span>
              </Link>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                fullWidth
                onClick={() => setCheckoutModalOpen(false)}
              >
                بستن پیش‌نمایش
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
