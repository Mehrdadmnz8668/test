'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff, Info, Lock, Mail, Send, User } from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/ToastProvider';

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telegramId, setTelegramId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || password.length < 6) {
      setErrorMessage('لطفاً نام، ایمیل معتبر و رمز عبور حداقل ۶ کاراکتری وارد کنید.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMessage('پذیرش قوانین استفاده از سرویس الزامی است.');
      return;
    }
    setErrorMessage('');
    showToast('پیش‌نمایش ثبت‌نام تکمیل شد — انتقال به داشبورد');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#09090F] flex flex-col justify-between p-4 sm:p-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <ArrowRight className="w-4 h-4 text-violet-400" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
        <Badge variant="amber">ثبت‌نام نمایشی (فاز ۱)</Badge>
      </div>

      <div className="w-full max-w-md mx-auto my-8">
        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/25 p-7 sm:p-8 space-y-6 shadow-2xl shadow-black/50">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#151124] border border-violet-500/30 flex items-center justify-center mx-auto">
              <IsoShieldLogo className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">ایجاد حساب کاربری جدید</h1>
              <p className="text-xs text-slate-400 mt-1">
                ساخت حساب یکپارچه جهت خرید و تمدید آنلاین سرویس‌های ISO VPN
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#151124] border border-violet-500/20 flex items-start gap-2.5 text-[11px] text-slate-300">
            <Info className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <span>
              در این مرحله اطلاعات شما در دیتابیس ذخیره نمی‌شود و صرفاً جهت نمایش تجربه کاربری ثبت‌نام است.
            </span>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="reg-name" className="block text-xs font-semibold text-slate-300">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="reg-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="مثال: علی محمدی"
                  className="w-full pr-10 pl-4 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-300">
                آدرس ایمیل
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="reg-email"
                  type="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pr-10 pl-4 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="reg-tg" className="block text-xs font-semibold text-slate-300">
                آیدی تلگرام (اختیاری — جهت اتصال ربات)
              </label>
              <div className="relative">
                <Send className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="reg-tg"
                  type="text"
                  dir="ltr"
                  value={telegramId}
                  onChange={(e) => setTelegramId(e.target.value)}
                  placeholder="@username"
                  className="w-full pr-10 pl-4 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="reg-pass" className="block text-xs font-semibold text-slate-300">
                رمز عبور
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="reg-pass"
                  type={showPassword ? 'text' : 'password'}
                  dir="ltr"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="حداقل ۶ کاراکتر"
                  className="w-full pr-10 pl-10 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-violet-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="rounded border-white/20 bg-[#151124] text-violet-600 focus:ring-violet-500"
              />
              <span>قوانین و شرایط استفاده از شبکه ISO VPN را می‌پذیرم.</span>
            </label>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              ایجاد حساب کاربری
            </Button>
          </form>

          <div className="pt-4 border-t border-white/[0.07] text-center text-xs text-slate-400">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-bold">
              ورود به حساب
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-500">
        ISO VPN Secure Infrastructure — Phase 1 UI Preview
      </div>
    </div>
  );
}
