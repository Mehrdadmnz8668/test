import { DurationOption, VolumeOption } from '@/types';

export function formatToman(amount: number): string {
  return Math.round(amount).toLocaleString('fa-IR');
}

export function formatPersianNumber(num: number): string {
  return num.toLocaleString('fa-IR');
}

export const VOLUME_OPTIONS: { id: VolumeOption; label: string; sublabel: string }[] = [
  { id: '30GB', label: '۳۰ گیگابایت', sublabel: 'مصرف روزمره' },
  { id: '50GB', label: '۵۰ گیگابایت', sublabel: 'پیشنهاد استاندارد' },
  { id: '100GB', label: '۱۰۰ گیگابایت', sublabel: 'پرمصرف و ترید' },
  { id: '200GB', label: '۲۰۰ گیگابایت', sublabel: 'استریم و تیمی' },
  { id: 'UNLIMITED', label: 'نامحدود (VIP)', sublabel: 'سیاست مصرف منصفانه' },
];

export const DURATION_OPTIONS: { id: DurationOption; label: string; discountBadge?: string }[] = [
  { id: '1M', label: '۱ ماهه (۳۰ روز)' },
  { id: '3M', label: '۳ ماهه (۹۰ روز)', discountBadge: '۱۰٪ به‌صرفه‌تر' },
  { id: '6M', label: '۶ ماهه (۱۸۰ روز)', discountBadge: '۱۸٪ به‌صرفه‌تر' },
];

export const PRICING_MATRIX: Record<VolumeOption, Record<DurationOption, number>> = {
  '30GB': { '1M': 95000, '3M': 259000, '6M': 479000 },
  '50GB': { '1M': 149000, '3M': 399000, '6M': 739000 },
  '100GB': { '1M': 290000, '3M': 780000, '6M': 1420000 },
  '200GB': { '1M': 450000, '3M': 1190000, '6M': 2190000 },
  UNLIMITED: { '1M': 790000, '3M': 2100000, '6M': 3890000 },
};

export const DEMO_COUPONS: Record<string, number> = {
  ISO2026: 15,
  VIP15: 15,
  WELCOME10: 10,
};

export function calculateOrderTotals(
  volume: VolumeOption,
  duration: DurationOption,
  discountPercent: number
) {
  const basePrice = PRICING_MATRIX[volume][duration];
  const discountAmount = Math.round((basePrice * discountPercent) / 100);
  const finalPrice = Math.max(0, basePrice - discountAmount);
  return { basePrice, discountAmount, finalPrice };
}
