import React from 'react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { StoreConfigurator } from '@/components/store/StoreConfigurator';
import { DurationOption, VolumeOption } from '@/types';

const VALID_VOLUMES: VolumeOption[] = ['30GB', '50GB', '100GB', '200GB', 'UNLIMITED'];
const VALID_DURATIONS: DurationOption[] = ['1M', '3M', '6M'];

interface StorePageProps {
  searchParams: Promise<{ volume?: string; duration?: string }>;
}

export default async function StorePage({ searchParams }: StorePageProps) {
  const params = await searchParams;
  const initialVolume = VALID_VOLUMES.includes(params.volume as VolumeOption)
    ? (params.volume as VolumeOption)
    : '100GB';
  const initialDuration = VALID_DURATIONS.includes(params.duration as DurationOption)
    ? (params.duration as DurationOption)
    : '1M';

  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-violet-400">فروشگاه اختصاصی ISO VPN</span>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            پیکربندی و خرید اشتراک شبکه
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            حجم ترافیک و مدت زمان مورد نظر خود را انتخاب کنید تا جزئیات پلن و مبلغ نهایی به‌صورت لحظه‌ای محاسبه شود.
          </p>
        </div>

        <StoreConfigurator initialVolume={initialVolume} initialDuration={initialDuration} />
      </main>
      <PublicFooter />
    </div>
  );
}
