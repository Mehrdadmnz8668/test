'use client';

import React, { useState } from 'react';
import { Bell, Lock, Save, Send, User } from 'lucide-react';
import { DEMO_USER_PROFILE } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/ToastProvider';

export default function DashboardSettingsPage() {
  const { showToast } = useToast();
  const [fullName, setFullName] = useState(DEMO_USER_PROFILE.fullName);
  const [telegramHandle, setTelegramHandle] = useState(DEMO_USER_PROFILE.telegramHandle);
  const [notifyExpiry, setNotifyExpiry] = useState(true);
  const [notifyTraffic, setNotifyTraffic] = useState(true);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('تغییرات پروفایل (پیش‌نمایش رابط کاربری) ذخیره شد.');
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('درخواست تغییر رمز عبور در فاز بعدی به سرور متصل می‌شود.', 'info');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-white">تنظیمات حساب کاربری</h1>
          <p className="text-xs text-slate-400 mt-1">
            مدیریت اطلاعات پروفایل، اتصال ربات تلگرام و تنظیمات امنیتی
          </p>
        </div>
        <Badge variant="amber">نمای دمو</Badge>
      </div>

      <form
        onSubmit={handleSaveProfile}
        className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-5"
      >
        <div className="flex items-center gap-2 text-sm font-bold text-white pb-3 border-b border-white/[0.06]">
          <User className="w-4 h-4 text-violet-400" />
          <span>اطلاعات هویتی و ارتباطی</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">نام نمایشی</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs text-white focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">ایمیل حساب (غیرقابل تغییر)</label>
            <input
              type="email"
              readOnly
              dir="ltr"
              value={DEMO_USER_PROFILE.email}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">آیدی تلگرام</label>
            <div className="relative">
              <Send className="w-3.5 h-3.5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                dir="ltr"
                value={telegramHandle}
                onChange={(e) => setTelegramHandle(e.target.value)}
                className="w-full pr-9 pl-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">شناسه یکتای اشتراک</label>
            <input
              type="text"
              readOnly
              dir="ltr"
              value={DEMO_USER_PROFILE.marzbanClientCode}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-violet-300"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-white/[0.06] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <Bell className="w-3.5 h-3.5 text-violet-400" />
            <span>هشدارهای هوشمند تلگرام و ایمیل</span>
          </div>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#151124] border border-white/[0.06] cursor-pointer">
            <span className="text-xs text-slate-300">یادآوری ۳ روز مانده به انقضای اشتراک</span>
            <input
              type="checkbox"
              checked={notifyExpiry}
              onChange={(e) => setNotifyExpiry(e.target.checked)}
              className="rounded border-white/20 bg-black text-violet-600 focus:ring-violet-500"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#151124] border border-white/[0.06] cursor-pointer">
            <span className="text-xs text-slate-300">هشدار مصرف بیش از ۸۵٪ ترافیک خریداری‌شده</span>
            <input
              type="checkbox"
              checked={notifyTraffic}
              onChange={(e) => setNotifyTraffic(e.target.checked)}
              className="rounded border-white/20 bg-black text-violet-600 focus:ring-violet-500"
            />
          </label>
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="md">
            <Save className="w-4 h-4" />
            <span>ذخیره تنظیمات پروفایل</span>
          </Button>
        </div>
      </form>

      <form
        onSubmit={handleUpdatePassword}
        className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4"
      >
        <div className="flex items-center gap-2 text-sm font-bold text-white pb-3 border-b border-white/[0.06]">
          <Lock className="w-4 h-4 text-violet-400" />
          <span>تغییر رمز عبور</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">رمز عبور فعلی</label>
            <input
              type="password"
              dir="ltr"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">رمز عبور جدید</label>
            <input
              type="password"
              dir="ltr"
              placeholder="حداقل ۸ کاراکتر"
              className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="secondary" size="md">
            به‌روزرسانی رمز عبور
          </Button>
        </div>
      </form>
    </div>
  );
}
