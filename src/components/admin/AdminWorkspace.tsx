'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  CreditCard,
  Package,
  Plus,
  Search,
  Server,
  ShieldCheck,
  Ticket,
  Users,
} from 'lucide-react';
import { AdminSectionId } from '@/components/layout/AdminShell';
import {
  ADMIN_COUPONS,
  ADMIN_USERS,
  DEMO_ORDERS,
  LANDING_PLANS,
  PREVIEW_SERVERS,
} from '@/data/mockData';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/StateViews';
import { useToast } from '@/components/ui/ToastProvider';
import { formatToman } from '@/lib/formatters';

interface AdminWorkspaceProps {
  section: AdminSectionId;
  onNavigateSection: (sec: AdminSectionId) => void;
}

export function AdminWorkspace({ section, onNavigateSection }: AdminWorkspaceProps) {
  const { showToast } = useToast();

  const [userSearch, setUserSearch] = useState('');
  const [userStatus, setUserStatus] = useState<'all' | 'active' | 'expired' | 'suspended'>('all');
  const [orderSearch, setOrderSearch] = useState('');
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponPercent, setNewCouponPercent] = useState('15');
  const [marzbanBaseUrl, setMarzbanBaseUrl] = useState('https://panel.isovpn.net');
  const [zarinpalMerchant, setZarinpalMerchant] = useState('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

  const notifyDemoAction = (label: string) => {
    showToast(`عملیات "${label}" در فاز اول صرفاً پیش‌نمایش رابط کاربری است.`, 'info');
  };

  if (section === 'overview') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'کاربران نمونه ثبت‌شده', val: '۴ کاربر (دمو)', icon: Users, target: 'users' as AdminSectionId },
            { label: 'محصولات تعریف‌شده', val: '۳ پلن فعال', icon: Package, target: 'products' as AdminSectionId },
            { label: 'سفارشات نمونه', val: '۴ تراکنش', icon: CreditCard, target: 'orders' as AdminSectionId },
            { label: 'نودهای زیرساخت', val: '۴ لوکیشن', icon: Server, target: 'servers' as AdminSectionId },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <button
                key={idx}
                onClick={() => onNavigateSection(stat.target)}
                className="p-5 rounded-2xl bg-[#0F0D18] border border-violet-500/15 hover:border-violet-500/40 text-right transition-colors flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-xs text-slate-400">{stat.label}</span>
                  <div className="text-lg font-black text-white">{stat.val}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                  <Icon className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-white">آخرین کاربران (پیش‌نمایش)</h2>
              <button
                onClick={() => onNavigateSection('users')}
                className="text-xs font-bold text-violet-400 hover:underline cursor-pointer"
              >
                مدیریت کاربران
              </button>
            </div>
            <div className="space-y-2.5">
              {ADMIN_USERS.slice(0, 3).map((u) => (
                <div
                  key={u.id}
                  className="p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-white font-mono">{u.username}</div>
                    <div className="text-[11px] text-slate-400">{u.activePlan}</div>
                  </div>
                  <Badge variant={u.status === 'active' ? 'emerald' : 'amber'}>
                    {u.status === 'active' ? 'فعال' : 'نیاز به بررسی'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-4">
            <h2 className="text-sm font-bold text-white">آماده‌سازی اتصال به بک‌اند (فاز ۲)</h2>
            <div className="space-y-2.5 text-xs">
              {[
                { title: 'رابط کاربری پنل مدیریت و جداول داده‌ای', status: 'تکمیل‌شده در فاز ۱' },
                { title: 'اتصال به دیتابیس PostgreSQL و احراز هویت', status: 'در صف فاز ۲' },
                { title: 'اتصال مستقیم به Marzban API جهت ساخت کاربر', status: 'در صف فاز ۲' },
                { title: 'اتصال درگاه پرداخت زرین‌پال و صدور آنی اشتراک', status: 'در صف فاز ۲' },
              ].map((step, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#151124] border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="text-slate-200">{step.title}</span>
                  <Badge variant={i === 0 ? 'emerald' : 'neutral'}>{step.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (section === 'users') {
    const filteredUsers = ADMIN_USERS.filter((u) => {
      const matchStatus = userStatus === 'all' || u.status === userStatus;
      const matchSearch =
        u.username.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.email.toLowerCase().includes(userSearch.toLowerCase());
      return matchStatus && matchSearch;
    });

    return (
      <div className="space-y-5">
        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="جستجوی نام کاربری یا ایمیل..."
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {(['all', 'active', 'expired', 'suspended'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setUserStatus(st)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer ${
                  userStatus === st
                    ? 'bg-violet-600 text-white'
                    : 'bg-[#151124] text-slate-300 hover:text-white'
                }`}
              >
                {st === 'all'
                  ? 'همه'
                  : st === 'active'
                  ? 'فعال'
                  : st === 'expired'
                  ? 'منقضی'
                  : 'مسدود'}
              </button>
            ))}

            <Button size="sm" onClick={() => notifyDemoAction('افزودن کاربر جدید')}>
              <Plus className="w-3.5 h-3.5" />
              <span>کاربر جدید</span>
            </Button>
          </div>
        </div>

        {filteredUsers.length === 0 ? (
          <EmptyState
            title="کاربری با این مشخصات یافت نشد"
            description="فیلتر وضعیت یا عبارت جستجو را تغییر دهید."
            actionLabel="بازنشانی فیلتر"
            onAction={() => {
              setUserSearch('');
              setUserStatus('all');
            }}
          />
        ) : (
          <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-[#151124] text-slate-400 border-b border-white/[0.07]">
                  <tr>
                    <th className="py-3.5 px-4">نام کاربری</th>
                    <th className="py-3.5 px-4">ایمیل</th>
                    <th className="py-3.5 px-4">پلن فعال</th>
                    <th className="py-3.5 px-4">مصرف ترافیک</th>
                    <th className="py-3.5 px-4">وضعیت</th>
                    <th className="py-3.5 px-4">کنترل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-slate-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-mono text-violet-300">{user.username}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-300">{user.email}</td>
                      <td className="py-3.5 px-4">{user.activePlan}</td>
                      <td className="py-3.5 px-4 font-mono" dir="ltr">
                        {user.usedGb} / {user.totalGb} GB
                      </td>
                      <td className="py-3.5 px-4">
                        {user.status === 'active' && <Badge variant="emerald">فعال</Badge>}
                        {user.status === 'expired' && <Badge variant="amber">منقضی</Badge>}
                        {user.status === 'suspended' && <Badge variant="rose">محدودشده</Badge>}
                      </td>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => notifyDemoAction(`ویرایش کاربر ${user.username}`)}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-violet-600/20 text-violet-300 font-semibold cursor-pointer"
                        >
                          مدیریت
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (section === 'products') {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">
            تعریف و قیمت‌گذاری بسته‌های حجمی و زمانی فروشگاه
          </p>
          <Button size="sm" onClick={() => notifyDemoAction('ایجاد محصول جدید')}>
            <Plus className="w-3.5 h-3.5" />
            <span>افزودن محصول</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {LANDING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl bg-[#0F0D18] border border-violet-500/20 p-5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="violet">{plan.code}</Badge>
                  <span className="text-xs font-mono text-slate-400">{plan.volumeLabel}</span>
                </div>
                <h3 className="text-base font-bold text-white">{plan.title}</h3>
                <p className="text-xs text-slate-400">{plan.subtitle}</p>
                <div className="text-xl font-black font-mono text-white pt-2">
                  {formatToman(plan.priceToman)}{' '}
                  <span className="text-xs font-sans text-slate-400">تومان</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  onClick={() => notifyDemoAction(`ویرایش تعرفه ${plan.title}`)}
                >
                  ویرایش پلن
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'orders') {
    const filteredOrders = DEMO_ORDERS.filter(
      (o) =>
        o.invoiceNumber.toLowerCase().includes(orderSearch.toLowerCase()) ||
        o.planTitle.includes(orderSearch)
    );

    return (
      <div className="space-y-5">
        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-4 flex items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              placeholder="جستجوی شماره فاکتور..."
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
          </div>
          <Badge variant="neutral">نمایش فاکتورهای نمونه</Badge>
        </div>

        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#151124] text-slate-400 border-b border-white/[0.07]">
                <tr>
                  <th className="py-3.5 px-4">شماره فاکتور</th>
                  <th className="py-3.5 px-4">سرویس</th>
                  <th className="py-3.5 px-4">مبلغ</th>
                  <th className="py-3.5 px-4">درگاه</th>
                  <th className="py-3.5 px-4">تاریخ</th>
                  <th className="py-3.5 px-4">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-slate-200">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-mono text-violet-300">{ord.invoiceNumber}</td>
                    <td className="py-3.5 px-4 font-semibold">{ord.planTitle}</td>
                    <td className="py-3.5 px-4 font-mono">{formatToman(ord.amountToman)} تومان</td>
                    <td className="py-3.5 px-4 text-slate-400">{ord.gateway}</td>
                    <td className="py-3.5 px-4 text-slate-400">{ord.createdAtJalali}</td>
                    <td className="py-3.5 px-4">
                      {ord.status === 'paid' && (
                        <Badge variant="emerald">
                          <CheckCircle2 className="w-3 h-3" /> پرداخت‌شده
                        </Badge>
                      )}
                      {ord.status === 'pending' && <Badge variant="amber">در انتظار</Badge>}
                      {ord.status === 'failed' && <Badge variant="rose">ناموفق</Badge>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (section === 'coupons') {
    const handleCreateCoupon = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newCouponCode.trim()) return;
      notifyDemoAction(`ایجاد کد تخفیف ${newCouponCode.toUpperCase()} (${newCouponPercent}٪)`);
      setNewCouponCode('');
    };

    return (
      <div className="space-y-6">
        <form
          onSubmit={handleCreateCoupon}
          className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-5 flex flex-col sm:flex-row items-stretch sm:items-end gap-3"
        >
          <div className="flex-1 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Ticket className="w-3.5 h-3.5 text-violet-400" />
              <span>کد تخفیف جدید</span>
            </label>
            <input
              type="text"
              dir="ltr"
              value={newCouponCode}
              onChange={(e) => setNewCouponCode(e.target.value)}
              placeholder="SPRING25"
              className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="sm:w-36 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">درصد تخفیف</label>
            <input
              type="number"
              min={1}
              max={100}
              dir="ltr"
              value={newCouponPercent}
              onChange={(e) => setNewCouponPercent(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
            />
          </div>
          <Button type="submit" size="md">
            <Plus className="w-4 h-4" />
            <span>ثبت کد تخفیف</span>
          </Button>
        </form>

        <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#151124] text-slate-400 border-b border-white/[0.07]">
                <tr>
                  <th className="py-3.5 px-4">کد تخفیف</th>
                  <th className="py-3.5 px-4">درصد</th>
                  <th className="py-3.5 px-4">میزان استفاده</th>
                  <th className="py-3.5 px-4">تاریخ انقضا</th>
                  <th className="py-3.5 px-4">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-slate-200">
                {ADMIN_COUPONS.map((cp) => (
                  <tr key={cp.id}>
                    <td className="py-3.5 px-4 font-mono font-bold text-violet-300">{cp.code}</td>
                    <td className="py-3.5 px-4 font-mono">{cp.discountPercent}%</td>
                    <td className="py-3.5 px-4 font-mono" dir="ltr">
                      {cp.usedCount} / {cp.maxUses}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{cp.expiresJalali}</td>
                    <td className="py-3.5 px-4">
                      <Badge variant={cp.active ? 'emerald' : 'rose'}>
                        {cp.active ? 'فعال' : 'منقضی'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (section === 'servers') {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">
            پیکربندی نودهای متصل به Marzban Core (نمای ساختاری فاز اول)
          </p>
          <Button size="sm" onClick={() => notifyDemoAction('ثبت نود جدید')}>
            <Plus className="w-3.5 h-3.5" />
            <span>افزودن نود</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PREVIEW_SERVERS.map((srv) => (
            <div
              key={srv.id}
              className="rounded-2xl bg-[#0F0D18] border border-violet-500/20 p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{srv.flag}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{srv.name}</h3>
                    <p className="text-[11px] font-mono text-slate-400" dir="ltr">
                      {srv.endpointMasked}
                    </p>
                  </div>
                </div>
                <Badge variant="violet">{srv.protocol}</Badge>
              </div>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400">کاربری: {srv.useCase}</span>
                <button
                  onClick={() => notifyDemoAction(`تنظیمات نود ${srv.name}`)}
                  className="text-violet-400 hover:underline font-semibold cursor-pointer"
                >
                  پیکربندی
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        notifyDemoAction('ذخیره تنظیمات هسته و درگاه پرداخت');
      }}
      className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-6 space-y-5 max-w-3xl"
    >
      <div className="flex items-center gap-2 text-sm font-bold text-white pb-3 border-b border-white/[0.06]">
        <ShieldCheck className="w-4 h-4 text-violet-400" />
        <span>پیکربندی اتصال‌های آینده (Marzban & Payment Gateway)</span>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-300">
            آدرس پایه پنل Marzban (API Endpoint)
          </label>
          <input
            type="url"
            dir="ltr"
            value={marzbanBaseUrl}
            onChange={(e) => setMarzbanBaseUrl(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-300">
            مرچنت کد درگاه پرداخت (ZarinPal Merchant ID)
          </label>
          <input
            type="text"
            dir="ltr"
            value={zarinpalMerchant}
            onChange={(e) => setZarinpalMerchant(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151124] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      <Button type="submit" size="md">
        ذخیره تنظیمات پلتفرم
      </Button>
    </form>
  );
}
