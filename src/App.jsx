import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Zap,
  Globe,
  Server,
  Wifi,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Download,
  Lock,
  Activity,
  BarChart3,
  RefreshCw,
  Play,
  SlidersHorizontal,
  Sparkles,
  Smartphone,
  Monitor,
  Tv,
  Check,
  HelpCircle,
  ArrowLeft,
  Send,
  Users,
  Radio,
  EyeOff,
  Menu,
  X,
  Clock,
  HardDrive,
  Copy,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  Search
} from 'lucide-react';

// Insert Vazirmatn Persian Font and Keyframes styling
const StyleInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;600;700;800;900&display=swap');
    
    body {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #030712;
      color: #f3f4f6;
      overflow-x: hidden;
    }

    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }

    .animate-pulse-glow {
      animation: pulseGlow 6s ease-in-out infinite;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .glass-card {
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .glass-card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .glass-card-hover:hover {
      background: rgba(15, 23, 42, 0.85);
      border-color: rgba(6, 182, 212, 0.4);
      box-shadow: 0 0 35px rgba(6, 182, 212, 0.15), 0 0 15px rgba(139, 92, 246, 0.1);
    }

    .neon-border-cyan {
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
    }

    .neon-border-purple {
      box-shadow: 0 0 25px rgba(168, 85, 247, 0.35);
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.6);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #06b6d4;
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

// Supported Platforms
const PLATFORMS = [
  { name: 'ویندوز (Windows)', icon: Monitor, desc: 'نسخه ۶۴ و ۳۲ بیت' },
  { name: 'آیفون (iOS)', icon: Smartphone, desc: 'سازگار با iOS 14+' },
  { name: 'اندروید (Android)', icon: Smartphone, desc: 'پشتیبانی از V2rayNG & Sing-box' },
  { name: 'مک (macOS)', icon: Monitor, desc: 'پردازنده‌های Intel و Apple Silicon' },
  { name: 'لینوکس (Linux)', icon: Cpu, desc: 'کلاینت اختصاصی CLI & GUI' },
  { name: 'تلویزیون (Android TV)', icon: Tv, desc: 'سازگار با تمامی Smart TV ها' },
  { name: 'روتر و میکروتیک', icon: HardDrive, desc: 'پروتکل OpenVPN & WireGuard' },
];

// Main Component
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeServer, setActiveServer] = useState(SERVERS[0]);
  const [pingSearchQuery, setPingSearchQuery] = useState('');
  
  // Speed Test Simulation State
  const [speedTestState, setSpeedTestState] = useState('idle'); // idle, testing, complete
  const [testProgress, setTestProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [livePing, setLivePing] = useState(24);
  const [liveJitter, setLiveJitter] = useState(2);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Modal State
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  // Latency Chart Dynamic Data
  const [chartData, setChartData] = useState([
    28, 25, 32, 24, 26, 22, 25, 23, 27, 24, 22, 24
  ]);

  // Dynamic graph polling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const nextVal = Math.floor(20 + Math.random() * 10);
        return [...prev.slice(1), nextVal];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Speed test simulation algorithm
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
        // Downloading phase
        const speed = Math.floor(120 + Math.sin(currentProgress) * 45 + Math.random() * 25);
        setDownloadSpeed(speed);
        setLivePing(Math.floor(18 + Math.random() * 8));
        setLiveJitter(Math.floor(1 + Math.random() * 3));
      } else {
        // Uploading phase
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
    <div dir="rtl" className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black relative">
      <StyleInjector />

      {/* Decorative Neon Background Blurs */}
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="fixed top-1/3 left-10 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(#06b6d4 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                ISO <span className="text-cyan-400 font-black">VPN</span>
              </span>
              <span className="text-[10px] text-cyan-400/80 font-medium tracking-widest -mt-1">ULTRA FAST & SECURE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">ویژگی‌ها</a>
            <a href="#dashboard" className="hover:text-cyan-400 transition-colors">داشبورد وضعیت</a>
            <a href="#servers" className="hover:text-cyan-400 transition-colors">سرورها</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">تعرفه‌ها</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">سوالات متداول</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#pricing"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/60 transition-all"
            >
              ورود به ناحیه کاربری
            </a>
            <a 
              href="#pricing"
              className="relative group px-6 py-2.5 rounded-xl text-sm font-bold text-slate-950 overflow-hidden bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-current" />
                خرید اشتراک اختصاصی
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl flex flex-col gap-4">
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#features" 
              className="py-2 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50"
            >
              ویژگی‌ها
            </a>
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#dashboard" 
              className="py-2 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50"
            >
              داشبورد وضعیت
            </a>
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#servers" 
              className="py-2 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50"
            >
              سرورها
            </a>
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#pricing" 
              className="py-2 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50"
            >
              تعرفه‌ها
            </a>
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#faq" 
              className="py-2 text-slate-300 hover:text-cyan-400"
            >
              سوالات متداول
            </a>

            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
              >
                خرید اشتراک اختصاصی
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Column: Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>نسل جدید پروتکل‌های ضد اختلال V2Ray & WireGuard 2026</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.2]">
                تجربه آزادی کامل اینترنت با{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">
                  ایزو وی‌پی‌ان
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                اتصال فوق‌سریع، بدون قطعی و کاملاً رمزنگاری‌شده بر روی تمامی اپراتورهای کشور. دسترسی نامحدود به یوتیوب، اینستاگرام، ترید و گیمینگ با پینگ پایدار.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href="#pricing"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 text-slate-950 font-extrabold text-lg flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  شروع اتصال پرسرعت
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <a
                  href="#dashboard"
                  className="px-8 py-4 rounded-2xl glass-card hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 font-bold text-base flex items-center justify-center gap-3 transition-all"
                >
                  <Activity className="w-5 h-5 text-cyan-400" />
                  تست زنده سرعت شبکه
                </a>
              </div>

              {/* Quick Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white dir-ltr text-right">100K+</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">کاربر فعال ماهانه</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-cyan-400 dir-ltr text-right">99.9%</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">آپتایم تضمینی شبکه</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-purple-400 dir-ltr text-right">+500</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">سرور اختصاصی پرسرعت</p>
                </div>
              </div>

            </div>

            {/* Left Column: Interactive Cyber Dashboard Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800/40 to-purple-600/40 shadow-2xl shadow-cyan-500/10">
                <div className="bg-slate-950/90 rounded-[22px] p-6 backdrop-blur-2xl space-y-6">
                  
                  {/* Status Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-sm font-bold text-emerald-400">وضعیت اتصال: ایمن و فعال</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 dir-ltr">
                      VLESS-REALITY-UDP
                    </span>
                  </div>

                  {/* Connected Location Card */}
                  <div className="glass-card rounded-2xl p-4 flex items-center justify-between border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇩🇪</span>
                      <div>
                        <p className="font-bold text-sm text-white">آلمان - فرانکفورت (VIP)</p>
                        <p className="text-xs text-slate-400">IP: 185.220.101.44</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-lg">
                        <Radio className="w-3 h-3" />
                        24 ms
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Latency Visualizer */}
                  <div>
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                      <span>نمودار نوسان پینگ (زنده)</span>
                      <span className="text-cyan-400 font-mono">میانگین: ۲۴ میلی‌ثانیه</span>
                    </div>
                    <div className="h-28 w-full flex items-end gap-1.5 pt-4 px-2 bg-slate-900/60 rounded-xl border border-slate-800/80">
                      {chartData.map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group relative">
                          <div 
                            className="w-full bg-gradient-to-t from-cyan-600 via-cyan-400 to-purple-500 rounded-t-sm transition-all duration-500" 
                            style={{ height: `${(val / 40) * 100}%` }}
                          />
                          {/* Tooltip on hover */}
                          <div className="absolute -top-7 opacity-0 group-hover:opacity-100 bg-slate-800 text-[10px] text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30 transition-opacity pointer-events-none">
                            {val}ms
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Throughput Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>سرعت دانلود</span>
                        <Download className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <p className="text-lg font-black text-cyan-400 dir-ltr text-right">184.2 Mbps</p>
                    </div>

                    <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>پروتکل فعال</span>
                        <Lock className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <p className="text-lg font-black text-purple-400 dir-ltr text-right">AES-256 GCM</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl border-cyan-500/30 flex items-center gap-3 shadow-xl animate-float hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">محافظت نشت DNS / IPv6</p>
                  <p className="text-sm font-bold text-slate-200">۱۰۰٪ ایزوله و امن</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PLATFORM SUPPORT INFINITE MARQUEE */}
      <section className="py-8 bg-slate-950/80 border-y border-slate-800/80 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-semibold text-slate-400 tracking-wider">سازگار با تمامی دستگاه‌ها و سیستم‌عامل‌ها</p>
        </div>
        
        <div className="flex overflow-hidden relative w-full">
          {/* Gradient Edges Fade */}
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10" />
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-8">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, index) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800/70 hover:border-cyan-500/40 transition-colors shrink-0"
                >
                  <IconComp className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold text-slate-200">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVER STATUS DASHBOARD & SPEED TEST */}
      <section id="dashboard" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-cyan-400 mb-2">NETWORK DIAGNOSTICS</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              داشبورد پایش هوشمند شبکه
            </h3>
            <p className="text-slate-400 text-base sm:text-lg">
              پایش لحضه‌ای پینگ، پهنای باند و سنجش زنده کیفیت اتصال به سرورها
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Speed Test Interactive Instrument */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <h4 className="font-bold text-lg text-white">تست زنده سرعت (Speedtest)</h4>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                    LIVE PROBE
                  </span>
                </div>

                {/* Speedometer Gauge Visualizer */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto my-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-slate-800"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset="60"
                    />
                    {/* Active Speed Bar */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-cyan-400 transition-all duration-300"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (testProgress / 100) * 190}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl sm:text-4xl font-black text-white dir-ltr">
                      {speedTestState === 'testing' 
                        ? (testProgress <= 50 ? downloadSpeed : uploadSpeed) 
                        : (speedTestState === 'complete' ? downloadSpeed : '0')}
                    </span>
                    <span className="text-xs text-cyan-400 font-bold uppercase mt-1">Mbps</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      {speedTestState === 'testing' ? (testProgress <= 50 ? 'دانلود...' : 'آپلود...') : 'آماده تست'}
                    </span>
                  </div>
                </div>

                {/* Realtime Metrics */}
                <div className="grid grid-cols-3 gap-2 py-4 bg-slate-900/60 rounded-2xl border border-slate-800 text-center">
                  <div>
                    <span className="text-[11px] text-slate-400 block">پینگ (Ping)</span>
                    <span className="font-bold text-emerald-400 text-sm dir-ltr">{livePing} ms</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-[11px] text-slate-400 block">جیتر (Jitter)</span>
                    <span className="font-bold text-cyan-400 text-sm dir-ltr">{liveJitter} ms</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">پکت لاس</span>
                    <span className="font-bold text-purple-400 text-sm dir-ltr">0 %</span>
                  </div>
                </div>
              </div>

              {/* Start Test Trigger Button */}
              <button
                onClick={runSpeedTest}
                disabled={speedTestState === 'testing'}
                className={`w-full mt-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  speedTestState === 'testing'
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${speedTestState === 'testing' ? 'animate-spin' : ''}`} />
                {speedTestState === 'testing' ? 'در حال بسنجش سرعت...' : 'شروع سنجش پینگ و سرعت'}
              </button>
            </div>

            {/* Network Statistics & Global Nodes Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Stat Cards 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border-slate-800 glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <Server className="w-6 h-6" />
                  </div>
                  <h5 className="text-slate-400 text-sm font-medium">کل سرورهای اختصاصی</h5>
                  <p className="text-3xl font-black text-white mt-1 dir-ltr text-right">+520 Node</p>
                  <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    ۱۰۰٪ سرورها آنلاین و با ترافیک نامحدود
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border-slate-800 glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h5 className="text-slate-400 text-sm font-medium">پروتکل فعال شبکه</h5>
                  <p className="text-3xl font-black text-white mt-1 dir-ltr text-right">VLESS + WireGuard</p>
                  <p className="text-xs text-cyan-400 mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    عبور از قوی‌ترین فیلترینگ و GFW
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border-slate-800 glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h5 className="text-slate-400 text-sm font-medium">کشورهای پوشش داده شده</h5>
                  <p className="text-3xl font-black text-white mt-1 dir-ltr text-right">38 Country</p>
                  <p className="text-xs text-slate-400 mt-2">اروپا، آسیا، آمریکا و خاورمیانه</p>
                </div>

                <div className="glass-card p-6 rounded-2xl border-slate-800 glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h5 className="text-slate-400 text-sm font-medium">رمزنگاری داده‌ها</h5>
                  <p className="text-3xl font-black text-white mt-1 dir-ltr text-right">ChaCha20-Poly1305</p>
                  <p className="text-xs text-emerald-400 mt-2">عدم ذخیره‌سازی لوگ (No-Logs Policy)</p>
                </div>
              </div>

              {/* Security Shield Banner */}
              <div className="glass-card p-6 rounded-2xl border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">سیستم هوشمند Smart Routing</h4>
                  <p className="text-xs text-slate-300">
                    مسیریابی خودکار ترافیک از خلوت‌ترین پورت‌ها برای تضمین ثبات پینگ و عدم افت سرعت در ساعات شلوغی
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold text-xs">
                    فعال روی همه پلن‌ها
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SERVER SELECTION INTERFACE */}
      <section id="servers" className="py-24 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-extrabold text-cyan-400 mb-2">SERVER INFRASTRUCTURE</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                لیست سرورهای اختصاصی ایزو وی‌پی‌ان
              </h3>
            </div>

            {/* Region Filter Buttons & Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute right-3 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="جستجوی کشور یا شهر..."
                  value={pingSearchQuery}
                  onChange={(e) => setPingSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
                {[
                  { id: 'all', label: 'همه سرورها' },
                  { id: 'europe', label: 'اروپا' },
                  { id: 'asia', label: 'آسیا' },
                  { id: 'america', label: 'آمریکا' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedRegion(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      selectedRegion === tab.id
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Servers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map(server => (
              <div 
                key={server.id}
                onClick={() => setActiveServer(server)}
                className={`glass-card p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  activeServer.id === server.id 
                    ? 'border-cyan-400 bg-slate-900/90 shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Selected Indicator Glow */}
                {activeServer.id === server.id && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{server.flag}</span>
                    <div>
                      <h4 className="font-bold text-white text-base">{server.country}</h4>
                      <p className="text-xs text-slate-400">{server.city}</p>
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 dir-ltr">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {server.ping} ms
                  </span>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800/60 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>پروتکل پشتیبانی:</span>
                    <span className="text-slate-200 font-mono">{server.protocol}</span>
                  </div>
                  
                  {/* Load Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>ترافیک مصرفی سرور:</span>
                      <span className="text-cyan-400 font-bold dir-ltr">{server.load}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        style={{ width: `${server.load}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">مخصوص گیمینگ و ترید</span>
                  <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    تست اتصال
                    <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
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
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-cyan-400 mb-2">WHY CHOOSE US</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              مزایای منحصر به فرد ایزو وی‌پی‌ان
            </h3>
            <p className="text-slate-400 text-base sm:text-lg">
              طراحی شده با استفاده از پیشرفته‌ترین متدهای لایه امنیت شبکه جهت عبور بی دردسر از محدودیت‌ها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">پینگ بسیار پایین (Low Ping)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                مسیریابی مستقیم (Direct Route) به دیتاسنترهای اروپایی برای کاهش حداکثری پینگ مخصوص بازی‌های آنلاین نظیر PubG, Valorant و Call of Duty.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Lock className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">پروتکل ضد شناسایی VLESS Reality</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                ترافیک خروجی کاملاً شبیه‌سازی‌شده به پروتکل امن TLS وب‌سایت‌های بین‌المللی است تا از شناسایی و مسدودی پورت‌ها جلوگیری شود.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">کلید قطع اضطراری (Kill Switch)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                در صورت افت ناگهانی اینترنت، تمامی ترافیک مسدود می‌شود تا آی‌پی واقعی شما هرگز برای صرافی‌ها و سایت‌های حساس افشا نشود.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">اتصال همزمان چند کاربره</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                قابلیت استفاده همزمان یک اشتراک بر روی موبایل، تبلت، لپ‌تاپ و تمامی دستگاه‌های اعضای خانواده بدون کاهش سرعت.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <EyeOff className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">سیاست عدم ثبت لوگ (No-Logs)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                هیچ‌گونه تاریخچه وب‌گردی، آدرس IP یا اطلاعات شخصی کاربر بر روی سرورها ذخیره نخواهد شد. حریم خصوصی شما ۱۰۰٪ تضمین شده است.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-slate-800 glass-card-hover space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
                <HeadphonesIcon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">پشتیبانی ۲۴/۷ تلگرام و تیکت</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                تیم کارشناسان شبکه ما در تمامی ساعات شبانه‌روز آماده راهنمایی، رفع مشکلات فنی و تنظیمات نرم‌افزاری شما هستند.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section id="pricing" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-cyan-400 mb-2">PRICING PLANS</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              تعرفه‌ها و اشتراک‌های اختصاصی
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mb-8">
              تحویل فوری آنی بلافاصله پس از پرداخت + پشتیبانی کانفیگ اختصاصی
            </p>

            {/* Billing Toggle Switch */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                اشتراک ماهانه
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                اشتراک سالانه
                <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[10px] font-black">
                  ۳۰٪ تخفیف
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Plan 1: Starter */}
            <div className="glass-card p-8 rounded-3xl border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
                  پلن برنز / یک ماهه
                </div>
                <h4 className="text-2xl font-black text-white">اشتراک اقتصادی</h4>
                <p className="text-xs text-slate-400 mt-1">مناسب استفاده روزمره و وب‌گردی</p>

                <div className="my-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-black text-white dir-ltr">
                    {billingCycle === 'monthly' ? '۹۹,۰۰۰' : '۷۹,۰۰۰'}
                  </span>
                  <span className="text-slate-400 text-sm mr-2">تومان / ماهانه</span>
                </div>

                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>حجم ۵۰ گیگابایت بین‌الملل</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>اتصال ۲ کاربر همزمان</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>دسترسی به تمامی سرورها</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>پروتکل V2Ray (VLESS+VMess)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <X className="w-5 h-5 shrink-0" />
                    <span>آی‌پی اختصاصی (Static IP)</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => openPlanModal('اشتراک اقتصادی', billingCycle === 'monthly' ? '۹۹,۰۰۰ تومان' : '۹۴۸,۰۰۰ تومان')}
                className="w-full py-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 font-bold text-white transition-colors"
              >
                سفارش پلن اقتصادی
              </button>
            </div>

            {/* Plan 2: Pro (Featured Glowing Border) */}
            <div className="relative glass-card p-8 rounded-3xl border-cyan-500/50 bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950/30 flex flex-col justify-between shadow-[0_0_50px_rgba(6,182,212,0.2)] md:-translate-y-4">
              
              {/* Popular Badge */}
              <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 text-xs font-black shadow-lg">
                محبوب‌ترین پیشنهاد کاربران
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-4 mt-2">
                  پلن نقره‌ای / نامحدود
                </div>
                <h4 className="text-2xl font-black text-white">اشتراک حرفه‌ای VIP</h4>
                <p className="text-xs text-cyan-400 mt-1">ویژه اینستاگرام، یوتیوب و ترید</p>

                <div className="my-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-black text-cyan-400 dir-ltr">
                    {billingCycle === 'monthly' ? '۱۸۹,۰۰۰' : '۱۳۹,۰۰۰'}
                  </span>
                  <span className="text-slate-400 text-sm mr-2">تومان / ماهانه</span>
                </div>

                <ul className="space-y-4 text-sm text-slate-200 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="font-bold text-white">ترافیک کاملاً نامحدود</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>اتصال ۳ کاربر همزمان</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>سرورهای اختصاصی WireGuard & Reality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>پینگ پایین مخصوص گیمینگ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>پشتیبانی اولویت‌دار تیکت</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => openPlanModal('اشتراک حرفه‌ای VIP', billingCycle === 'monthly' ? '۱۸۹,۰۰۰ تومان' : '۱,۶۶۸,۰۰۰ تومان')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 text-slate-950 font-black shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                خرید پلن حرفه‌ای نامحدود
              </button>
            </div>

            {/* Plan 3: Ultimate Enterprise */}
            <div className="glass-card p-8 rounded-3xl border-slate-800 flex flex-col justify-between hover:border-purple-500/50 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold mb-4">
                  پلن طلایی / ۱ ساله
                </div>
                <h4 className="text-2xl font-black text-white">اشتراک سازمانی & ترید</h4>
                <p className="text-xs text-slate-400 mt-1">برای صرافی‌های بین‌المللی و شرکت‌ها</p>

                <div className="my-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-black text-purple-400 dir-ltr">
                    {billingCycle === 'monthly' ? '۲۹۹,۰۰۰' : '۲۱۹,۰۰۰'}
                  </span>
                  <span className="text-slate-400 text-sm mr-2">تومان / ماهانه</span>
                </div>

                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span className="font-bold text-white">آی‌پی ثبات ثابت (Dedicated IP)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>ترافیک نامحدود با پهنای ۱۰ گیگابیت</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>اتصال ۵ کاربر همزمان</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>قابلیت Multi-Hop (تونل دوگانه)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>پشتیبانی تلفنی و اختصاصی</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => openPlanModal('اشتراک سازمانی & ترید', billingCycle === 'monthly' ? '۲۹۹,۰۰۰ تومان' : '۲,۶۲۸,۰۰۰ تومان')}
                className="w-full py-4 rounded-xl border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 font-bold transition-colors"
              >
                سفارش پلن اختصاصی ترید
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section id="faq" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-cyan-400 mb-2">FAQ</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              سوالات متداول کاربران
            </h3>
            <p className="text-slate-400 text-base">
              پاسخ به رایج‌ترین پرسش‌های شما درباره سرویس ایزو وی‌پی‌ان
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'آیا ایزو وی‌پی‌ان روی تمامی اپراتورها (همراه اول، ایرانسل، مخابرات و...) کار می‌کند؟',
                a: 'بله، تمامی سرورهای ایزو وی‌پی‌ان مجهز به پروتکل VLESS Reality و فیلترشکن اختصاصی WireGuard هستند که با تمامی اپراتورهای همراه و خانگی ایران کاملاً سازگار بوده و بدون افت سرعت متصل می‌شوند.'
              },
              {
                q: 'تحویل اشتراک پس از خرید به چه صورت انجام می‌شود؟',
                a: 'بلافاصله پس از تکمیل پرداخت آنلاین، مشخصات اشتراک، لینک اختصاصی کانفیگ و آموزش تصویری نصب کلاینت‌ها روی تمامی دستگاه‌ها به صورت آنی به شما نمایش داده شده و پیامک/ایمیل می‌شود.'
              },
              {
                q: 'پروتون‌ها و نرم‌افزارهای مورد نیاز جهت اتصال کدامند؟',
                a: 'شما می‌توانید از نرم‌افزارهای استاندارد مانند v2rayNG (اندروید)، Sing-box / Streisand / Foxray (آیفون)، v2rayN (ویندوز) و Nekoray (مک و لینوکس) استفاده کنید.'
              },
              {
                q: 'آیا سرورها برای ترید در بایننس و صرافی‌ها امن است؟',
                a: 'بله، پلن‌های اختصاصی و سازمانی ما دارای آی‌پی کاملاً ثابت (Static IP) از کشور آلمان و هلند هستند و هیچ نشت IP/DNS ندارند که برای فعالیت در صرافی‌های ارز دیجیتال کاملاً ایده‌آل است.'
              },
              {
                q: 'آیا ضمانت بازگشت وجه وجود دارد؟',
                a: 'بله، در صورت عدم رضایت یا وجود هرگونه مشکل فنی اصلاح نشدنی تا ۴۸ ساعت امکان استرداد کامل وجه پرداختی وجود دارد.'
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl border-slate-800 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-cyan-600 via-teal-600 to-purple-600 text-slate-950 shadow-2xl shadow-cyan-500/20">
            {/* Ambient Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-right">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-black text-slate-950">
                  آماده اتصال به اینترنت پرسرعت و بدون مرز هستید؟
                </h3>
                <p className="text-slate-900/90 font-medium text-base sm:text-lg">
                  همین الان اشتراک خود را فعال کنید و از کیفیت بی‌نظیر ایزو وی‌پی‌ان لذت ببرید.
                </p>
              </div>

              <a
                href="#pricing"
                className="px-8 py-4 rounded-2xl bg-slate-950 text-white hover:bg-slate-900 font-extrabold text-base sm:text-lg shrink-0 shadow-xl flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Zap className="w-5 h-5 text-cyan-400 fill-current" />
                خرید آنلاین و تحویل آنی
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px]">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <span className="text-xl font-extrabold text-white">ISO VPN</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                ارائه‌دهنده سرویس‌های اختصاصی و فوق‌سریع وی‌پی‌ان مبتنی بر آخرین پروتکل‌های امنیتی شبکه. اتصال پایدار و بدون قطعی برای تمامی کاربران ایرانی.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>تمامی شبکه و سرورها در وضعیت آنلاین هستند</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h5 className="text-white font-bold text-sm">دسترسی سریع</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">ویژگی‌های شبکه</a></li>
                <li><a href="#servers" className="hover:text-cyan-400 transition-colors">لیست سرورها</a></li>
                <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">پلن‌های قیمت</a></li>
                <li><a href="#dashboard" className="hover:text-cyan-400 transition-colors">تست زنده پینگ</a></li>
              </ul>
            </div>

            {/* Col 3: Downloads */}
            <div className="space-y-3">
              <h5 className="text-white font-bold text-sm">دانلود برنامه‌ها</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">دانلود نسخه اندروید</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">دانلود نسخه آیفون (iOS)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">دانلود نسخه ویندوز</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">راهنمای کانفیگ روتر</a></li>
              </ul>
            </div>

            {/* Col 4: Support */}
            <div className="space-y-3">
              <h5 className="text-white font-bold text-sm">پشتیبانی و ارتباط</h5>
              <div className="space-y-2 text-xs">
                <p className="text-slate-400">کانال تلگرام اطلاع‌رسانی:</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline dir-ltr">
                  <Send className="w-3.5 h-3.5" />
                  @ISOVPN_Official
                </a>
                <p className="text-slate-400 pt-2">پشتیبانی ۲۴ ساعته:</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-purple-400 hover:underline dir-ltr">
                  <Send className="w-3.5 h-3.5" />
                  @ISOVPN_Support
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© ۲۰۲۶ تمامی حقوق برای ایزو وی‌پی‌ان (ISO VPN) محفوظ است.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">حریم خصوصی</a>
              <a href="#" className="hover:text-slate-300 transition-colors">شرایط استفاده</a>
              <a href="#" className="hover:text-slate-300 transition-colors">تضمین کیفیت</a>
            </div>
          </div>
        </div>
      </footer>

      {/* PURCHASE MODAL */}
      {isPurchaseModalOpen && selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 border-slate-700 bg-slate-900 shadow-2xl relative space-y-6">
            
            <button 
              onClick={() => setIsPurchaseModalOpen(false)}
              className="absolute top-4 left-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">تکمیل سفارش {selectedPlanModal.name}</h3>
              <p className="text-xs text-slate-400">مبلغ قابل پرداخت: <span className="text-cyan-400 font-bold">{selectedPlanModal.price}</span></p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 block">انتخاب روش پرداخت:</label>
              
              <button className="w-full p-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-cyan-500 flex items-center justify-between text-sm font-bold text-white transition-all">
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  درگاه شتابی بانکی (کارت به کارت / آنلاین)
                </span>
                <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
              </button>

              <button className="w-full p-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-purple-500 flex items-center justify-between text-sm font-bold text-white transition-all">
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-purple-400" />
                  ارز دیجیتال (تتر USDT / TRX / TON)
                </span>
                <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
              </button>

              <button className="w-full p-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-emerald-500 flex items-center justify-between text-sm font-bold text-white transition-all">
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  خرید مستقیم از ربات تلگرام
                </span>
                <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-500">
                با خرید این سرویس شما شرایط و قوانین استفاده از ایزو وی‌پی‌ان را می‌پذیرید.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Helper icon component for footer support
function HeadphonesIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}