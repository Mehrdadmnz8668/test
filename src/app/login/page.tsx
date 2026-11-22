'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff, Info, Lock, Mail } from 'lucide-react';
import { IsoShieldLogo } from '@/components/ui/IsoShieldLogo';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/ToastProvider';

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [email, setEmail] = useState('demo.user@isovpn.net');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage('لطفاً ایمیل و رمز عبور را وارد نمایید.');
      return;
    }
    setErrorMessage('');
    showToast('ورود نمایشی انجام شد — انتقال به داشبورد کاربری');
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
        <Badge variant="amber">احراز هویت نمایشی (فاز ۱)</Badge>
      </div>

      <div className="w-full max-w-md mx-auto my-10">
        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/25 p-7 sm:p-8 space-y-6 shadow-2xl shadow-black/50">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#151124] border border-violet-500/30 flex items-center justify-center mx-auto">
              <IsoShieldLogo className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">ورود به حساب ISO VPN</h1>
              <p className="text-xs text-slate-400 mt-1">
                مدیریت اشتراک‌ها، مشاهده ترافیک و دریافت لینک اتصال
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#151124] border border-violet-500/20 flex items-start gap-2.5 text-[11px] text-slate-300">
            <Info className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <span>
              در فاز طراحی رابط کاربری، احراز هویت واقعی غیرفعال است و با ثبت فرم به نمای پیش‌نمایش داشبورد منتقل می‌شوید.
            </span>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="block text-xs font-semibold text-slate-300">
                ایمیل کاربری
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-email"
                  type="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pr-10 pl-4 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="login-pass" className="block text-xs font-semibold text-slate-300">
                  رمز عبور
                </label>
                <span className="text-[11px] text-violet-400">بازیابی رمز (فاز ۲)</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-pass"
                  type={showPassword ? 'text' : 'password'}
                  dir="ltr"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 pl-10 py-3 rounded-xl bg-[#151124] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-violet-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="نمایش یا مخفی کردن رمز"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              ورود به پنل کاربری
            </Button>
          </form>

          <div className="pt-4 border-t border-white/[0.07] text-center text-xs text-slate-400">
            هنوز حساب کاربری ندارید؟{' '}
            <Link href="/register" className="text-violet-400 hover:text-violet-300 font-bold">
              ثبت‌نام سریع
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
