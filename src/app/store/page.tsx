import React from 'react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { StoreConfigurator } from '@/components/store/StoreConfigurator';

export default function StorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />
      <main className="flex-1 py-16 px-6">
        <div className="text-center mb-12 space-y-3">
           <h1 className="text-3xl font-black text-white">پیکربندی سرویس اختصاصی</h1>
           <p className="text-xs text-slate-400">حجم و مدت زمان دلخواه را تنظیم کنید</p>
        </div>
        <StoreConfigurator />
      </main>
      <PublicFooter />
    </div>
  );
}
