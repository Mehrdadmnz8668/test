import React, { useState, useEffect } from 'react';
import {
  Shield, Zap, Globe, Server, Cpu, CheckCircle2, ChevronDown, Download, Lock, Activity, 
  RefreshCw, Sparkles, Smartphone, Monitor, Tv, Check, ArrowLeft, Send, Users, Radio, 
  EyeOff, Menu, X, HardDrive, ChevronRight, TrendingUp, Search
} from 'lucide-react';

const StyleInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;600;700;800;900&display=swap');
    
    body {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #090312;
      color: #F5F0FF;
      overflow-x: hidden;
    }

    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    /* Core Card Component */
    .glass-card {
      background-color: #150526;
      border: 1px solid #3B0764;
    }

    .glass-card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .glass-card-hover:hover {
      background-color: #1A0730;
      border-color: #7A00FF;
      box-shadow: 0 0 30px rgba(122, 0, 255, 0.15);
      transform: translateY(-2px);
    }

    .text-glow {
      text-shadow: 0 0 20px rgba(147, 51, 234, 0.6);
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #090312;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #3B0764;
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #7A00FF;
    }
  `}</style>
);

// Server Dataset
const SERVERS = [
  { id: 'de-1', country: 'آلمان', city: 'فرانکفورت', flag: '🇩🇪', ping: 24, load: 28, protocol: 'WireGuard / V2Ray', region: 'europe', status: 'optimal' },
  { id: 'nl-1', country: 'هلند', city: 'آمستردام', flag: '🇳🇱', ping: 29, load: 35, protocol: 'VLESS + Reality', region: 'europe', status: 'optimal' },
  { id: 'fi-1', country: 'فنلاند', city: 'هلسینکی', flag: '🇫🇮', ping: 38, load: 19, protocol: 'WireGuard', region: 'europe', status: 'optimal' },
  { id: 'tr-1', country: 'ترکیه', city: 'استانبول', flag: '🇹🇷', ping: 18, load: 44, protocol: 'VMess / VLESS', region: 'asia', status: 'optimal' },
  { id: 'ae-1', country: 'امارات', city: 'دبی', flag: '🇦🇪', ping: 22, load: 52, protocol: 'Trojan + gRPC', region: 'asia', status: 'optimal' },
  { id: 'fr-1', country: 'فرانسه', city: 'پاریس', flag: '🇫🇷', ping: 31, load: 41, protocol: 'WireGuard', region: 'europe', status: 'optimal' },
  { id: 'sg-1', country: 'سنگاپور', city: 'سنگاپور', flag: '🇸🇬', ping: 78, load: 26, protocol: 'Shadowsocks', region: 'asia', status: 'good' },
  { id: 'us-1', country: 'آمریکا', city: 'نیویورک', flag: '🇺🇸', ping: 110, load: 49, protocol: 'VLESS + Reality', region: 'america', status: 'good' },
  { id: 'uk-1', country: 'انگلستان', city: 'لندن', flag: '🇬🇧', ping: 36, load: 33, protocol: 'WireGuard', region: 'europe', status: 'optimal' },
];

const PLATFORMS = [
  { name: 'ویندوز (Windows)', icon: Monitor, desc: 'نسخه ۶۴ و ۳۲ بیت' },
  { name: 'آیفون (iOS)', icon: Smartphone, desc: 'سازگار با iOS 14+' },
  { name: 'اندروید (Android)', icon: Smartphone, desc: 'پشتیبانی از V2rayNG & Sing-box' },
  { name: 'مک (macOS)', icon: Monitor, desc: 'پردازنده‌های Intel و Apple Silicon' },
  { name: 'لینوکس (Linux)', icon: Cpu, desc: 'کلاینت اختصاصی CLI & GUI' },
  { name: 'تلویزیون (Android TV)', icon: Tv, desc: 'سازگار با تمامی Smart TV ها' },
  { name: 'روتر و میکروتیک', icon: HardDrive, desc: 'پروتکل OpenVPN & WireGuard' },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeServer, setActiveServer] = useState(SERVERS[0]);
  const [pingSearchQuery, setPingSearchQuery] = useState('');
  
  const [speedTestState, setSpeedTestState] = useState('idle');
  const [testProgress, setTestProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [livePing, setLivePing] = useState(24);
  const [liveJitter, setLiveJitter] = useState(2);

  const [openFaq, setOpenFaq] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  const [chartData, setChartData] = useState([28, 25, 32, 24, 26, 22, 25, 23, 27, 24, 22, 24]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const nextVal = Math.floor(20 + Math.random() * 10);
        return [...prev.slice(1), nextVal];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const runSpeedTest = () => {
    if (speedTestState === 'testing') return;
    setSpeedTestState('testing');
    setTestProgress(0);
    setDownloadSpeed(0);
    setUploadSpeed(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 4;
      setTestProgress(currentProgress);

      if (currentProgress <= 50) {
        const speed = Math.floor(120 + Math.sin(currentProgress) * 45 + Math.random() * 25);
        setDownloadSpeed(speed);
        setLivePing(Math.floor(18 + Math.random() * 8));
        setLiveJitter(Math.floor(1 + Math.random() * 3));
      } else {
        const speed = Math.floor(55 + Math.cos(currentProgress) * 20 + Math.random() * 15);
        setUploadSpeed(speed);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setSpeedTestState('complete');
      }
    }, 120);
  };

  const filteredServers = SERVERS.filter(s => {
    const matchesRegion = selectedRegion === 'all' || s.region === selectedRegion;
    const matchesSearch = s.country.includes(pingSearchQuery) || s.city.toLowerCase().includes(pingSearchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const openPlanModal = (planName, price) => {
    setSelectedPlanModal({ name: planName, price: price });
    setIsPurchaseModalOpen(true);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#090312] text-[#F5F0FF] selection:bg-[#9333EA] selection:text-white relative font-sans">
      <StyleInjector />

      {/* Grid Pattern Overlay matching Hero Ref */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04]" 
        style={{
          backgroundImage: `radial-gradient(#C084FC 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#090312]/80 border-b border-[#3B0764] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#150526] border border-[#3B0764] flex items-center justify-center shadow-lg group-hover:border-[#7A00FF] transition-all duration-300">
              <Shield className="w-5 h-5 text-[#9333EA]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-[#F5F0FF]">
                ISO <span className="text-[#9333EA]">VPN</span>
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#B8A6CC]">
            <a href="#features" className="hover:text-[#F5F0FF] transition-colors">ویژگی‌ها</a>
            <a href="#dashboard" className="hover:text-[#F5F0FF] transition-colors">داشبورد وضعیت</a>
            <a href="#servers" className="hover:text-[#F5F0FF] transition-colors">سرورها</a>
            <a href="#pricing" className="hover:text-[#F5F0FF] transition-colors">تعرفه‌ها</a>
            <a href="#faq" className="hover:text-[#F5F0FF] transition-colors">سوالات</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#pricing"
              className="px-6 py-2.5 rounded-full text-sm font-bold text-[#F5F0FF] bg-[#150526] border border-[#3B0764] hover:border-[#7A00FF] transition-all"
            >
              ورود
            </a>
            <a 
              href="#pricing"
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#7A00FF] hover:bg-[#9333EA] shadow-[0_0_20px_rgba(122,0,255,0.4)] transition-all"
            >
              ثبت نام
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#150526] border border-[#3B0764] text-[#F5F0FF]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-[#090312] border-b border-[#3B0764] flex flex-col gap-4">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#features" className="py-2 text-[#B8A6CC] border-b border-[#3B0764]">ویژگی‌ها</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#dashboard" className="py-2 text-[#B8A6CC] border-b border-[#3B0764]">داشبورد وضعیت</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#servers" className="py-2 text-[#B8A6CC] border-b border-[#3B0764]">سرورها</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#pricing" className="py-2 text-[#B8A6CC] border-b border-[#3B0764]">تعرفه‌ها</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#faq" className="py-2 text-[#B8A6CC]">سوالات متداول</a>
            <a href="#pricing" className="w-full text-center py-3 rounded-full bg-[#7A00FF] text-white font-bold mt-2">
              خرید اشتراک اختصاصی
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Reference #1 Style) */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center min-h-[85vh]">
        {/* Massive Sweeping Glow/Arc Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[120%] h-[800px] rounded-[100%] border-t border-[#7A00FF]/30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7A00FF]/20 via-[#090312]/0 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#150526] border border-[#3B0764] text-[#C084FC] text-xs sm:text-sm font-bold shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>نسل جدید پروتکل‌های V2Ray & WireGuard 2026</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] text-[#F5F0FF]">
              دسترسی به اینترنت آزاد.
              <br />
              <span className="text-[#9333EA] italic text-glow font-medium mt-2 block">بدون مرز و محدودیت.</span>
            </h1>

            <p className="text-[#B8A6CC] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              اتصال فوق‌سریع، بدون قطعی و کاملاً رمزنگاری‌شده بر روی تمامی اپراتورهای کشور. دسترسی نامحدود به یوتیوب، اینستاگرام، ترید و گیمینگ با پینگ پایدار.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full bg-[#7A00FF] hover:bg-[#9333EA] text-white font-bold text-lg flex items-center justify-center shadow-[0_0_30px_rgba(122,0,255,0.4)] transition-all"
              >
                شروع اتصال پرسرعت
              </a>
              <a
                href="#dashboard"
                className="px-8 py-4 rounded-full bg-[#150526] hover:border-[#7A00FF] border border-[#3B0764] text-[#F5F0FF] font-bold text-lg transition-all"
              >
                تست زنده سرعت شبکه
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 sm:gap-16 pt-12 border-t border-[#3B0764]/50 w-full max-w-2xl mt-12">
              <div className="text-center">
                <p className="text-3xl font-black text-[#F5F0FF] dir-ltr">100K+</p>
                <p className="text-xs text-[#B8A6CC] mt-1">کاربر فعال</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-[#9333EA] dir-ltr">99.9%</p>
                <p className="text-xs text-[#B8A6CC] mt-1">آپتایم شبکه</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-[#C084FC] dir-ltr">+500</p>
                <p className="text-xs text-[#B8A6CC] mt-1">سرور اختصاصی</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PLATFORM SUPPORT INFINITE MARQUEE */}
      <section className="py-8 border-y border-[#3B0764] bg-[#090312] overflow-hidden relative">
        <div className="flex overflow-hidden relative w-full">
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#090312] to-transparent z-10" />
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#090312] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-6">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, index) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#150526] border border-[#3B0764] shrink-0"
                >
                  <IconComp className="w-5 h-5 text-[#9333EA]" />
                  <span className="text-sm font-bold text-[#F5F0FF]">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVER STATUS DASHBOARD */}
      <section id="dashboard" className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#9333EA] mb-2">NETWORK DIAGNOSTICS</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#F5F0FF] mb-4">داشبورد پایش شبکه</h3>
            <p className="text-[#B8A6CC] text-base">پایش لحظه‌ای پینگ و سنجش کیفیت اتصال</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Speed Test Panel */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7A00FF]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#9333EA]" />
                    <h4 className="font-bold text-lg text-[#F5F0FF]">تست زنده سرعت</h4>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#090312] border border-[#3B0764] text-[#C084FC]">
                    LIVE PROBE
                  </span>
                </div>

                <div className="relative w-56 h-56 mx-auto my-8 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="text-[#090312]" strokeWidth="6" stroke="currentColor" fill="transparent" strokeDasharray="251.2" strokeDashoffset="60" />
                    <circle 
                      cx="50" cy="50" r="40" 
                      className="text-[#9333EA] transition-all duration-300 drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]" 
                      strokeWidth="6" strokeDasharray="251.2" strokeDashoffset={251.2 - (testProgress / 100) * 190} 
                      strokeLinecap="round" stroke="currentColor" fill="transparent" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-[#F5F0FF] dir-ltr drop-shadow-md">
                      {speedTestState === 'testing' ? (testProgress <= 50 ? downloadSpeed : uploadSpeed) : (speedTestState === 'complete' ? downloadSpeed : '0')}
                    </span>
                    <span className="text-xs text-[#9333EA] font-bold mt-1">Mbps</span>
                    <span className="text-[10px] text-[#B8A6CC] mt-1">
                      {speedTestState === 'testing' ? (testProgress <= 50 ? 'دانلود...' : 'آپلود...') : 'آماده تست'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 bg-[#090312]/50 rounded-2xl border border-[#3B0764] text-center">
                  <div>
                    <span className="text-[10px] text-[#B8A6CC] block">پینگ</span>
                    <span className="font-bold text-[#34D399] text-sm dir-ltr">{livePing} ms</span>
                  </div>
                  <div className="border-x border-[#3B0764]">
                    <span className="text-[10px] text-[#B8A6CC] block">جیتر</span>
                    <span className="font-bold text-[#C084FC] text-sm dir-ltr">{liveJitter} ms</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8A6CC] block">پکت لاس</span>
                    <span className="font-bold text-[#F5F0FF] text-sm dir-ltr">0 %</span>
                  </div>
                </div>
              </div>

              <button
                onClick={runSpeedTest}
                disabled={speedTestState === 'testing'}
                className={`w-full mt-6 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all relative z-10 ${
                  speedTestState === 'testing'
                    ? 'bg-[#090312] border border-[#3B0764] text-[#B8A6CC] cursor-not-allowed'
                    : 'bg-[#7A00FF] hover:bg-[#9333EA] text-white shadow-[0_0_20px_rgba(122,0,255,0.4)]'
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${speedTestState === 'testing' ? 'animate-spin' : ''}`} />
                {speedTestState === 'testing' ? 'در حال سنجش...' : 'شروع سنجش پینگ'}
              </button>
            </div>

            {/* Network Analytics Panel */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-8">
              <div className="flex justify-between items-center text-xs text-[#B8A6CC] mb-4">
                <span>نمودار نوسان پینگ زنده</span>
                <span className="text-[#9333EA] font-mono bg-[#090312] px-3 py-1 rounded-full border border-[#3B0764]">میانگین: ۲۴ms</span>
              </div>
              <div className="h-40 w-full flex items-end gap-2 pt-4 px-2">
                {chartData.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full relative group">
                    <div 
                      className="w-full bg-gradient-to-t from-[#3B0764] to-[#9333EA] rounded-t-md transition-all duration-500 hover:opacity-80" 
                      style={{ height: `${(val / 40) * 100}%` }}
                    />
                    <div className="absolute -top-8 opacity-0 group-hover:opacity-100 bg-[#150526] text-[10px] text-[#C084FC] px-2 py-1 rounded-md border border-[#7A00FF] transition-opacity pointer-events-none">
                      {val}ms
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#3B0764]">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#090312] border border-[#3B0764]">
                  <div className="p-3 rounded-full bg-[#150526] border border-[#7A00FF]/50"><Shield className="w-5 h-5 text-[#C084FC]" /></div>
                  <div>
                    <p className="text-xs text-[#B8A6CC]">پروتکل فعال</p>
                    <p className="text-sm font-bold text-[#F5F0FF] dir-ltr mt-0.5">VLESS+Reality</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#090312] border border-[#3B0764]">
                  <div className="p-3 rounded-full bg-[#150526] border border-[#7A00FF]/50"><Server className="w-5 h-5 text-[#C084FC]" /></div>
                  <div>
                    <p className="text-xs text-[#B8A6CC]">گره متصل</p>
                    <p className="text-sm font-bold text-[#F5F0FF] dir-ltr mt-0.5">Frankfurt-DE (VIP)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVER SELECTION INTERFACE */}
      <section id="servers" className="py-24 border-t border-[#3B0764] bg-[#090312]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#9333EA] mb-2">INFRASTRUCTURE</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-[#F5F0FF]">لیست سرورهای اختصاصی</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute right-3 top-3.5 text-[#B8A6CC]" />
                <input
                  type="text"
                  placeholder="جستجوی سرور..."
                  value={pingSearchQuery}
                  onChange={(e) => setPingSearchQuery(e.target.value)}
                  className="w-full bg-[#150526] border border-[#3B0764] rounded-full pr-10 pl-4 py-2.5 text-sm text-[#F5F0FF] placeholder-[#B8A6CC] focus:outline-none focus:border-[#7A00FF] transition-colors"
                />
              </div>

              <div className="flex p-1.5 bg-[#150526] rounded-full border border-[#3B0764] w-full sm:w-auto overflow-x-auto">
                {[
                  { id: 'all', label: 'همه سرورها' },
                  { id: 'europe', label: 'اروپا' },
                  { id: 'asia', label: 'آسیا' },
                  { id: 'america', label: 'آمریکا' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedRegion(tab.id)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      selectedRegion === tab.id
                        ? 'bg-[#7A00FF] text-white shadow-[0_0_15px_rgba(122,0,255,0.4)]'
                        : 'text-[#B8A6CC] hover:text-[#F5F0FF]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map(server => (
              <div 
                key={server.id}
                onClick={() => setActiveServer(server)}
                className={`glass-card p-6 rounded-3xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  activeServer.id === server.id 
                    ? 'border-[#7A00FF] shadow-[0_0_20px_rgba(122,0,255,0.2)] bg-[#1A0730]' 
                    : 'hover:border-[#7A00FF]/50'
                }`}
              >
                {activeServer.id === server.id && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B0764] via-[#9333EA] to-[#3B0764]" />
                )}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl drop-shadow-md">{server.flag}</span>
                    <div>
                      <h4 className="font-bold text-[#F5F0FF] text-base">{server.country}</h4>
                      <p className="text-xs text-[#B8A6CC]">{server.city}</p>
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#34D399]/10 border border-[#34D399]/30 text-[#34D399] dir-ltr">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    {server.ping} ms
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#3B0764]">
                  <div className="flex justify-between text-[#B8A6CC] text-xs">
                    <span>پروتکل:</span>
                    <span className="text-[#C084FC] font-mono font-bold">{server.protocol}</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[#B8A6CC] text-xs">
                      <span>ترافیک مصرفی:</span>
                      <span className="text-[#9333EA] font-bold dir-ltr">{server.load}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#090312] rounded-full overflow-hidden border border-[#3B0764]">
                      <div 
                        className="h-full bg-gradient-to-r from-[#7A00FF] to-[#C084FC] rounded-full"
                        style={{ width: `${server.load}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#9333EA] mb-2">FEATURES</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#F5F0FF] mb-4">قدرت و امنیت بی‌نظیر</h3>
            <p className="text-[#B8A6CC] text-base sm:text-lg">پایدارترین سرویس متناسب با نیازهای حرفه‌ای شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { icon: Zap, title: 'پینگ فوق پایین', desc: 'مسیریابی مستقیم (Direct Route) مخصوص بازی‌های آنلاین و ترید با کمترین تاخیر.' },
              { icon: Lock, title: 'پروتکل VLESS Reality', desc: 'ترافیک کاملاً شبیه‌سازی‌شده به پروتکل امن TLS برای جلوگیری از مسدودی.' },
              { icon: Shield, title: 'کیل سوئیچ (Kill Switch)', desc: 'انسداد فوری ترافیک در صورت افت اینترنت جهت محافظت از آی‌پی واقعی شما.' },
              { icon: Users, title: 'اتصال چند کاربره', desc: 'استفاده همزمان روی موبایل، لپ‌تاپ و تبلت با یک اشتراک بدون افت سرعت.' },
              { icon: EyeOff, title: 'بدون ثبت لوگ (No-Logs)', desc: 'حریم خصوصی کامل. هیچ تاریخچه وب‌گردی یا آی‌پی روی سرور ذخیره نمی‌شود.' },
              { icon: CheckCircle2, title: 'پشتیبانی ۲۴/۷', desc: 'تیم کارشناسان شبکه ما آماده راهنمایی و تنظیمات نرم‌افزاری در تمام ساعات.' }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl glass-card-hover space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#090312] border border-[#7A00FF]/40 text-[#9333EA] flex items-center justify-center shadow-[0_0_15px_rgba(122,0,255,0.2)]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#F5F0FF]">{feature.title}</h4>
                <p className="text-[#B8A6CC] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PRICING CARDS (Reference #2 Style) */}
      <section id="pricing" className="py-24 bg-[#090312] relative border-t border-[#3B0764]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#9333EA] mb-2">PRICING</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#F5F0FF] mb-6">اشتراک‌های اختصاصی</h3>

            <div className="inline-flex items-center gap-2 p-1.5 bg-[#150526] border border-[#3B0764] rounded-full">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#7A00FF] text-white shadow-[0_0_15px_rgba(122,0,255,0.4)]'
                    : 'text-[#B8A6CC] hover:text-[#F5F0FF]'
                }`}
              >
                ماهانه
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#7A00FF] text-white shadow-[0_0_15px_rgba(122,0,255,0.4)]'
                    : 'text-[#B8A6CC] hover:text-[#F5F0FF]'
                }`}
              >
                سالانه
                <span className="px-2 py-0.5 rounded-full bg-[#150526] border border-[#3B0764] text-[#C084FC] text-[10px]">
                  ۲۰٪ تخفیف
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Plan 1 */}
            <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between hover:border-[#7A00FF]/50 transition-all mt-4 md:mt-8">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#090312] border border-[#3B0764] flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-[#B8A6CC]" />
                </div>
                <h4 className="text-2xl font-bold text-[#F5F0FF]">برنز</h4>
                <p className="text-sm text-[#B8A6CC] mt-2 h-10">مناسب وب‌گردی روزمره با سرعت مطلوب.</p>
                <div className="my-6 pb-6 border-b border-[#3B0764]">
                  <span className="text-4xl font-black text-[#F5F0FF] dir-ltr">{billingCycle === 'monthly' ? '۹۹,۰۰۰' : '۷۹,۰۰۰'}</span>
                  <span className="text-[#B8A6CC] text-xs mr-1">/ماهانه</span>
                </div>
                <ul className="space-y-4 text-sm text-[#B8A6CC] mb-8">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> ۵۰ گیگابایت حجم</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> ۲ کاربر همزمان</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> دسترسی استاندارد</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> پشتیبانی تیکت</li>
                </ul>
              </div>
              <button onClick={() => openPlanModal('اقتصادی', '۹۹,۰۰۰')} className="w-full py-4 rounded-full border border-[#3B0764] hover:border-[#7A00FF] bg-transparent font-bold text-[#F5F0FF] transition-all">
                انتخاب برنز
              </button>
            </div>

            {/* Plan 2 VIP (Light Leak Effect) */}
            <div className="relative p-8 rounded-[2rem] border border-[#7A00FF] bg-[#150526] shadow-[0_0_50px_rgba(122,0,255,0.15)] flex flex-col justify-between overflow-hidden">
              {/* Reference #2 Top Right Diagonal Glow Leak */}
              <div className="absolute -top-16 -right-16 w-64 h-24 bg-[#C084FC] blur-[50px] opacity-40 rotate-45 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#7A00FF] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(122,0,255,0.5)]">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-[#F5F0FF]">حرفه‌ای VIP</h4>
                <p className="text-sm text-[#C084FC] mt-2 h-10">ویژه اینستاگرام، گیمینگ و یوتیوب.</p>
                <div className="my-6 pb-6 border-b border-[#3B0764]">
                  <span className="text-4xl font-black text-[#F5F0FF] dir-ltr">{billingCycle === 'monthly' ? '۱۸۹,۰۰۰' : '۱۳۹,۰۰۰'}</span>
                  <span className="text-[#B8A6CC] text-xs mr-1">/ماهانه</span>
                </div>
                <ul className="space-y-4 text-sm text-[#F5F0FF] mb-8 font-medium">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#9333EA] shrink-0" /> ترافیک نامحدود واقعی</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#9333EA] shrink-0" /> ۳ کاربر همزمان</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#9333EA] shrink-0" /> پینگ پایین گیمینگ</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#9333EA] shrink-0" /> سرور Reality اختصاصی</li>
                </ul>
              </div>
              <button onClick={() => openPlanModal('حرفه‌ای VIP', '۱۸۹,۰۰۰')} className="relative z-10 w-full py-4 rounded-full bg-[#7A00FF] hover:bg-[#9333EA] font-bold text-white shadow-[0_0_20px_rgba(122,0,255,0.4)] transition-all">
                خرید VIP
              </button>
            </div>

            {/* Plan 3 */}
            <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between hover:border-[#7A00FF]/50 transition-all mt-4 md:mt-8">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#090312] border border-[#3B0764] flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5 text-[#B8A6CC]" />
                </div>
                <h4 className="text-2xl font-bold text-[#F5F0FF]">سازمانی</h4>
                <p className="text-sm text-[#B8A6CC] mt-2 h-10">طراحی شده برای صرافی‌ها و تیم‌ها.</p>
                <div className="my-6 pb-6 border-b border-[#3B0764]">
                  <span className="text-4xl font-black text-[#F5F0FF] dir-ltr">{billingCycle === 'monthly' ? '۲۹۹,۰۰۰' : '۲۱۹,۰۰۰'}</span>
                  <span className="text-[#B8A6CC] text-xs mr-1">/ماهانه</span>
                </div>
                <ul className="space-y-4 text-sm text-[#B8A6CC] mb-8">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> آی‌پی ثابت اختصاصی</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> ۵ کاربر همزمان</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> پورت ۱۰ گیگابیت</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA] shrink-0" /> پشتیبانی تلفنی</li>
                </ul>
              </div>
              <button onClick={() => openPlanModal('سازمانی', '۲۹۹,۰۰۰')} className="w-full py-4 rounded-full border border-[#3B0764] hover:border-[#7A00FF] bg-transparent font-bold text-[#F5F0FF] transition-all">
                تماس برای سفارش
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-[#3B0764] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-[#F5F0FF] mb-4">سوالات متداول</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: 'آیا روی تمامی اپراتورها کار می‌کند؟', a: 'بله، تمامی سرورها مجهز به پروتکل VLESS Reality بوده و با همراه اول، ایرانسل و مخابرات سازگارند.' },
              { q: 'تحویل اشتراک چگونه است؟', a: 'بلافاصله پس از پرداخت آنلاین، مشخصات و لینک کانفیگ به همراه آموزش تصویری نمایش داده می‌شود.' },
              { q: 'آیا برای ترید امن است؟', a: 'بله، پلن سازمانی دارای آی‌پی ثابت (Static IP) بدون نشت DNS مناسب صرافی‌ها است.' }
            ].map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-right flex items-center justify-between font-bold text-[#F5F0FF] hover:text-[#C084FC] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#9333EA] shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#B8A6CC] text-sm leading-relaxed border-t border-[#3B0764] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA (Reference #3 Style) */}
      <section className="py-12 bg-[#090312] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] p-10 sm:p-14 bg-gradient-to-br from-[#3B0764] via-[#150526] to-[#090312] border border-[#7A00FF]/40 shadow-[0_0_50px_rgba(122,0,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
            
            <div className="space-y-3 z-10 text-center md:text-right">
              <h3 className="text-3xl font-black text-[#F5F0FF]">شروع سفر آزاد شما</h3>
              <p className="text-[#C084FC] text-sm">همین الان به هزاران کاربر فعال ایزو وی‌پی‌ان بپیوندید.</p>
            </div>
            <div className="flex gap-4 z-10">
              <a href="#pricing" className="px-8 py-4 rounded-full bg-[#150526] border border-[#3B0764] text-[#F5F0FF] font-bold text-sm hover:border-[#7A00FF] transition-all">
                راهنمای اتصال
              </a>
              <a href="#pricing" className="px-8 py-4 rounded-full bg-[#F5F0FF] text-[#090312] font-black text-sm shadow-[0_0_20px_rgba(245,240,255,0.3)] hover:scale-105 transition-transform">
                خرید آنلاین
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#090312] pt-12 pb-8 text-[#B8A6CC] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#9333EA]" />
                <span className="text-xl font-black text-[#F5F0FF]">ISO VPN</span>
              </div>
              <p className="text-xs leading-relaxed max-w-sm">ارائه‌دهنده سرویس‌های اختصاصی وی‌پی‌ان بر بستر امن‌ترین دیتاسنترهای اروپا. اینترنت بدون مرز، ایمن و پرسرعت.</p>
            </div>
            <div className="space-y-3">
              <h5 className="text-[#F5F0FF] font-bold text-sm">دسترسی سریع</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#servers" className="hover:text-[#9333EA]">سرورها</a></li>
                <li><a href="#pricing" className="hover:text-[#9333EA]">تعرفه‌ها</a></li>
                <li><a href="#faq" className="hover:text-[#9333EA]">سوالات متداول</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="text-[#F5F0FF] font-bold text-sm">ارتباط با ما</h5>
              <div className="space-y-2 text-xs">
                <p>تلگرام: <span className="text-[#C084FC] dir-ltr">@ISOVPN_Support</span></p>
                <p>ایمیل: <span className="text-[#C084FC] dir-ltr">info@isovpn.com</span></p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#3B0764] flex justify-between items-center text-xs text-[#B8A6CC]/50">
            <p>© ۲۰۲۶ ISO VPN. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>

      {/* PURCHASE MODAL */}
      {isPurchaseModalOpen && selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090312]/90 backdrop-blur-md">
          <div className="glass-card w-full max-w-md rounded-3xl p-8 relative space-y-6">
            <button onClick={() => setIsPurchaseModalOpen(false)} className="absolute top-4 left-4 p-2 text-[#B8A6CC] hover:text-white rounded-full bg-[#090312] border border-[#3B0764]">
              <X className="w-4 h-4" />
            </button>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#7A00FF]/20 text-[#9333EA] flex items-center justify-center mx-auto mb-4 border border-[#7A00FF]/30">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F0FF]">سفارش {selectedPlanModal.name}</h3>
              <p className="text-xs text-[#B8A6CC]">مبلغ: <span className="text-[#C084FC] font-bold">{selectedPlanModal.price}</span></p>
            </div>
            <div className="space-y-3">
              <button className="w-full p-4 rounded-full border border-[#3B0764] bg-[#090312] hover:border-[#7A00FF] flex justify-between text-sm font-bold text-[#F5F0FF] transition-all">
                <span>پرداخت بانکی (شتاب)</span><ChevronRight className="w-4 h-4 rotate-180 text-[#B8A6CC]" />
              </button>
              <button className="w-full p-4 rounded-full border border-[#3B0764] bg-[#090312] hover:border-[#7A00FF] flex justify-between text-sm font-bold text-[#F5F0FF] transition-all">
                <span>ارز دیجیتال (تتر/ترون)</span><ChevronRight className="w-4 h-4 rotate-180 text-[#B8A6CC]" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
