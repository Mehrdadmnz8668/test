"use client";

import { useState } from "react";
import {
  User,
  Shield,
  ChevronDown,
  Headset,
  LayoutDashboard,
  Zap,
  Network,
  Send,
  Check,
} from "lucide-react";

// --- Components --- //

const Header = () => (
  <header className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-surfaceBorder/50 backdrop-blur-md sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <Shield className="w-8 h-8 text-white" />
      <span className="font-bold text-xl tracking-widest uppercase">ISO VPN</span>
    </div>
    <nav className="hidden md:flex gap-8 text-sm text-gray-400">
      <a href="#" className="hover:text-white transition-colors">خانه</a>
      <a href="#" className="hover:text-white transition-colors">سرویس‌ها</a>
      <a href="#" className="hover:text-white transition-colors">پشتیبانی</a>
    </nav>
    <button className="flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors">
      <User className="w-4 h-4" />
      حساب کاربری
    </button>
  </header>
);

const Hero = () => (
  <section className="relative pt-24 pb-32 text-center px-4">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10" />
    <span className="inline-block border border-surfaceBorder bg-surface px-4 py-1.5 rounded-full text-xs text-primary mb-6">
      ✨ شبکه اختصاصی VPN
    </span>
    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
      اینترنت آزاد و پایدار،<br />
      <span className="text-primary drop-shadow-[0_0_15px_rgba(122,0,255,0.5)]">بدون محدودیت</span>
    </h1>
    <p className="text-gray-400 text-sm md:text-base mb-10 max-w-lg mx-auto">
      اتصال سریع به سرورهای بین‌المللی و مدیریت ساده اشتراک از یک پنل.
    </p>
    <div className="flex justify-center gap-4">
      <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
        خرید سرویس
      </button>
      <button className="border border-surfaceBorder bg-surface px-8 py-3 rounded-full font-bold hover:bg-surfaceBorder transition-colors">
        مشاهده سرورها
      </button>
    </div>
  </section>
);

const Pricing = () => (
  <section className="max-w-4xl mx-auto px-4 mb-24 relative z-10">
    <h2 className="text-center text-xl font-bold mb-10 text-gray-300">سرویس خودت را انتخاب کن</h2>
    
    <div className="space-y-4">
      {/* Active Card */}
      <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary to-background">
        <div className="bg-[#09090F]/90 backdrop-blur-xl rounded-2xl p-8 border border-primary/30">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">Exclusive • قابل تمدید</span>
              <h3 className="text-2xl font-bold text-white">اشتراک اختصاصی</h3>
              <p className="text-sm text-gray-400 mt-1">دسترسی پایدار به سرورهای بین‌المللی با تحویل فوری.</p>
            </div>
            <div className="text-left">
              <div className="text-3xl font-black text-white">
                ۲۹۰'۰۰۰ <span className="text-sm font-normal text-gray-400">تومان / ماهانه</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8 bg-black/40 p-4 rounded-xl">
            <div className="flex-1 text-center border-l border-white/10 last:border-0">
              <div className="text-xs text-gray-400 mb-1">حجم</div>
              <div className="font-bold">۱۰۰ گیگابایت</div>
            </div>
            <div className="flex-1 text-center border-l border-white/10">
              <div className="text-xs text-gray-400 mb-1">مدت</div>
              <div className="font-bold">۳۰ روز</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xs text-gray-400 mb-1">دستگاه</div>
              <div className="font-bold">۲ دستگاه</div>
            </div>
          </div>

          <ul className="space-y-3 mb-8 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> سرورهای آلمان و هلند</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> مدیریت و تمدید در پنل مشتری</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> پشتیبانی مستقیم تلگرام</li>
          </ul>

          <button className="w-full bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-white transition-all py-3 rounded-xl font-bold flex items-center justify-center gap-2">
            خرید سرویس
          </button>
        </div>
      </div>

      {/* Inactive Cards */}
      {[
        { title: "پلن حرفه‌ای", tag: "PRO" },
        { title: "پلن سازمانی", tag: "BUSINESS" },
      ].map((plan, idx) => (
        <div key={idx} className="flex justify-between items-center bg-surface border border-surfaceBorder rounded-2xl p-6 opacity-60">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{plan.title} <span className="text-xs text-gray-500 ml-2">{plan.tag}</span></h3>
            <div className="w-48 h-2 bg-surfaceBorder rounded-full mt-4"></div>
          </div>
          <button className="bg-surfaceBorder text-gray-400 px-6 py-2 rounded-xl text-sm cursor-not-allowed">به زودی</button>
        </div>
      ))}
    </div>
  </section>
);

const ServerStatus = () => (
  <section className="max-w-4xl mx-auto px-4 mb-24">
    <h2 className="text-center text-xl font-bold mb-10 text-white">سرورهای بین‌المللی</h2>
    
    <div className="bg-surface border border-surfaceBorder rounded-3xl p-8">
      {/* Metrics */}
      <div className="flex flex-wrap justify-between items-center mb-10 pb-10 border-b border-surfaceBorder">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-surfaceBorder flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent -rotate-45"></div>
            <span className="text-sm font-bold text-white">98.7%</span>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">کیفیت کلی شبکه</div>
            <div className="flex items-center gap-2 text-xs bg-success/10 text-success px-2 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span> پایدار
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-surfaceBorder flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border-4 border-success border-l-transparent rotate-45"></div>
             <span className="text-sm font-bold text-white">99.9%</span>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">آپتایم کل شبکه</div>
            <div className="text-white text-sm font-bold">3 سرور فعال</div>
          </div>
        </div>
      </div>

      {/* Servers List */}
      <div className="space-y-6">
        {[
          { country: "آلمان - فرانکفورت", flag: "🇩🇪", ping: "42 ms", quality: "bg-success", width: "95%" },
          { country: "هلند - آمستردام", flag: "🇳🇱", ping: "61 ms", quality: "bg-success", width: "88%" },
          { country: "فنلاند - هلسینکی", flag: "🇫🇮", ping: "68 ms", quality: "bg-primary", width: "90%" },
        ].map((server, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{server.flag}</span>
                <span className="font-bold text-gray-200">{server.country}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">{server.ping}</span>
                <span className="bg-success/20 text-success text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-success"></span> آنلاین
                </span>
              </div>
            </div>
            <div className="w-full h-2 bg-surfaceBorder rounded-full overflow-hidden">
              <div className={`h-full ${server.quality} rounded-full`} style={{ width: server.width }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "چطور سرویس خریداری کنم؟", a: "پلان فعال را انتخاب کن، با ایمیل وارد شو و پرداخت را تکمیل کن." },
    { q: "چطور سرویس را تمدید کنم؟", a: "از طریق پنل کاربری بخش سرویس‌های من." },
    { q: "وضعیت سرورها را کجا ببینم؟", a: "در بخش سرورهای بین‌المللی همین صفحه." },
    { q: "چطور با پشتیبانی ارتباط بگیرم؟", a: "از طریق دکمه تلگرام در پایین صفحه." },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 mb-24">
      <h2 className="text-xl font-bold mb-8 text-right text-white">سوالات متداول</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-surfaceBorder pb-4 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
            <div className="flex justify-between items-center text-sm font-medium text-gray-200">
              {faq.q}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-180 text-primary" : "text-gray-500"}`} />
            </div>
            {open === i && <div className="mt-4 text-xs text-gray-400 pr-2">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const SupportBanner = () => (
  <section className="max-w-4xl mx-auto px-4 mb-16">
    <div className="bg-gradient-to-r from-background via-[#1a0b2e] to-primary/20 border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
          <Send className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">نیاز به راهنمایی داری؟</h3>
          <p className="text-xs text-gray-400">پشتیبانی تلگرام برای خرید، اتصال و تمدید.</p>
        </div>
      </div>
      <button className="bg-surface border border-surfaceBorder px-6 py-3 rounded-xl text-sm font-bold hover:bg-surfaceBorder transition-colors flex items-center gap-2">
        ارتباط با پشتیبانی
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-surfaceBorder mt-20 pt-16 pb-8 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-white" />
          <span className="font-bold text-lg">ISO VPN</span>
        </div>
        <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
          خرید اشتراک، بررسی سرورها و پشتیبانی در یک پنل اختصاصی.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4 text-sm">حساب و پشتیبانی</h4>
        <ul className="space-y-3 text-xs text-gray-400">
          <li>ورود به حساب</li>
          <li>پنل مشتری</li>
          <li>پشتیبانی تلگرام</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4 text-sm">دسترسی سریع</h4>
        <ul className="space-y-3 text-xs text-gray-400">
          <li>خانه</li>
          <li>سرویس‌ها</li>
          <li>وضعیت سرورها</li>
          <li>سوالات متداول</li>
        </ul>
      </div>
    </div>
    <div className="max-w-5xl mx-auto mt-16 text-center text-[10px] text-gray-600 border-t border-surfaceBorder pt-6">
      تمامی حقوق محفوظ است © 2026
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <Header />
      <Hero />
      
      {/* Feature Grid Mini */}
      <div className="max-w-4xl mx-auto px-4 mb-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { i: <Headset className="w-5 h-5 text-primary" />, t: "پشتیبانی تلگرام" },
          { i: <LayoutDashboard className="w-5 h-5 text-primary" />, t: "پنل مدیریت" },
          { i: <Zap className="w-5 h-5 text-primary" />, t: "راه‌اندازی ساده" },
          { i: <Network className="w-5 h-5 text-primary" />, t: "مسیرهای پایدار" },
        ].map((feat, idx) => (
          <div key={idx} className="bg-surface border border-surfaceBorder rounded-2xl p-4 text-center">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
              {feat.i}
            </div>
            <div className="text-xs font-bold text-gray-300">{feat.t}</div>
          </div>
        ))}
      </div>

      <Pricing />
      <ServerStatus />
      <SupportBanner />
      <FAQ />
      <Footer />
    </main>
  );
}