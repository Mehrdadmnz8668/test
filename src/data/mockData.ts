import { AdminCouponItem, AdminUserItem, CustomerSubscription, FaqItem, GuidePlatform, OrderRecord, PlanPreset, ServerNode } from '@/types';
export const LANDING_PLANS: PlanPreset[] = [
  { id: 'plan-eco', code: 'BASIC', title: 'پلن اقتصادی', subtitle: 'مناسب استفاده روزمره شبکه‌های اجتماعی', volume: '30GB', volumeLabel: '۳۰ گیگابایت', duration: '1M', durationLabel: '۱ ماهه', priceToman: 95000, concurrentUsers: 1, features: ['دسترسی به سرورهای پایه', 'پشتیبانی تیکتی', 'پروتکل VLESS'] },
  { id: 'plan-pro', code: 'PRO', title: 'پلن حرفه‌ای', subtitle: 'ایده‌آل برای ترید، گیمینگ و مصرف بالا', volume: '100GB', volumeLabel: '۱۰۰ گیگابایت', duration: '1M', durationLabel: '۱ ماهه', priceToman: 290000, concurrentUsers: 2, featured: true, badge: 'پیشنهاد ویژه', features: ['تمام امکانات پلن پایه', 'سرورهای VIP و IP ثابت', 'پشتیبانی ویژه تلگرام', 'پینگ تضمینی زیر 60ms'] },
  { id: 'plan-vip', code: 'ENTERPRISE', title: 'پلن سازمانی', subtitle: 'طراحی شده برای تیم‌ها و استریمرها', volume: '200GB', volumeLabel: '۲۰۰ گیگابایت', duration: '1M', durationLabel: '۱ ماهه', priceToman: 450000, concurrentUsers: 4, features: ['تمام امکانات حرفه‌ای', 'مدیریت اختصاصی اکانت', 'سرورهای اختصاصی 10Gbps', 'تضمین آپتایم 99.99%'] }
];
export const PREVIEW_SERVERS: ServerNode[] = [
  { id: 'srv-de', name: 'فرانکفورت (VIP)', country: 'Germany', city: 'Frankfurt', flag: '🇩🇪', protocol: 'VLESS + REALITY', sampleLatencyMs: 42, capacityPercent: 24, status: 'optimal', useCase: 'ترید و هوش مصنوعی', endpointMasked: 'de-fra.iso.net' },
  { id: 'srv-nl', name: 'آمستردام', country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱', protocol: 'Trojan + gRPC', sampleLatencyMs: 48, capacityPercent: 36, status: 'optimal', useCase: 'دانلود و استریم', endpointMasked: 'nl-ams.iso.net' },
];
export const DEMO_USER_PROFILE = { fullName: 'امیرحسین رضایی', email: 'demo@isovpn.net', telegramHandle: '@iso_demo', marzbanClientCode: 'ISO-USR-84920', memberSinceJalali: '۱۴۰۴/۰۵/۱۴' };
export const DEMO_SUBSCRIPTIONS: CustomerSubscription[] = [
  { id: 'sub-101', planTitle: 'اشتراک حرفه‌ای ۱۰۰ گیگابایت', status: 'active', totalTrafficGb: 100, usedTrafficGb: 38.4, expiresAtJalali: '۱۴۰۵/۰۹/۲۸', remainingDays: 21, concurrentLimit: 2, subscriptionUrl: 'https://sub.isovpn.net/api/v1/sub/demo_token', protocols: ['VLESS + REALITY', 'Trojan'] }
];
export const DEMO_ORDERS: OrderRecord[] = [
  { id: 'ord-1', invoiceNumber: 'ISO-9842', planTitle: 'اشتراک حرفه‌ای ۱۰۰ گیگابایت', volumeLabel: '۱۰۰ گیگ', durationLabel: '۱ ماهه', amountToman: 290000, discountToman: 0, createdAtJalali: '۱۴۰۵/۰۹/۰۷', gateway: 'زرین‌پال', status: 'paid' }
];
export const GUIDE_PLATFORMS: GuidePlatform[] = [
  { id: 'android', label: 'اندروید', primaryApp: 'v2rayNG', secondaryApp: 'NekoBox', version: 'نسخه 1.9+', downloadLabel: 'دانلود v2rayNG', steps: ['برنامه را نصب کنید.', 'لینک اشتراک را کپی کنید.', 'در برنامه Import from Clipboard را بزنید.'], tip: 'گزینه Ping Test را برای انتخاب بهترین سرور اجرا کنید.' },
  { id: 'ios', label: 'آیفون', primaryApp: 'Streisand', secondaryApp: 'V2Box', version: 'iOS 15+', downloadLabel: 'دانلود Streisand', steps: ['برنامه را از اپ‌استور نصب کنید.', 'لینک را کپی و Import کنید.', 'روی کلید اتصال کلیک کنید.'], tip: 'جهت آپدیت سرورها انگشت خود را روی نام اشتراک نگه دارید.' },
  { id: 'windows', label: 'ویندوز', primaryApp: 'v2rayN', secondaryApp: 'Nekoray', version: 'Windows 10/11', downloadLabel: 'دانلود v2rayN', steps: ['برنامه را اجرا کنید.', 'لینک را کپی و Ctrl+V را بزنید.', 'حالت System Proxy را فعال کنید.'], tip: 'حالت TUN Mode برای بازی‌های آنلاین پیشنهاد می‌شود.' },
  { id: 'macos', label: 'مک', primaryApp: 'V2Box', secondaryApp: 'Sing-Box', version: 'macOS 12+', downloadLabel: 'دانلود V2Box', steps: ['برنامه را نصب کنید.', 'لینک اشتراک را اضافه کنید.', 'روی Connect کلیک کنید.'], tip: 'در مک‌های سری M امکان نصب برنامه آیفون نیز وجود دارد.' },
];
export const FAQ_ITEMS: FaqItem[] = [
  { id: 'faq-1', category: 'setup', categoryLabel: 'نرم‌افزار', question: 'روی چه برنامه‌هایی کار می‌کند؟', answer: 'v2rayNG, Streisand, v2rayN, V2Box' },
  { id: 'faq-2', category: 'purchase', categoryLabel: 'پرداخت', question: 'تحویل چقدر زمان می‌برد؟', answer: 'آنلاین و بلافاصله پس از پرداخت.' }
];
export const ADMIN_USERS: AdminUserItem[] = [
  { id: 'usr-1', username: 'reza_trader', email: 'reza@example.com', activePlan: 'Pro 100GB', usedGb: 64.2, totalGb: 100, status: 'active', joinedJalali: '۱۴۰۵/۰۶/۱۲' }
];
export const ADMIN_COUPONS: AdminCouponItem[] = [
  { id: 'cp-1', code: 'ISO2026', discountPercent: 15, usedCount: 84, maxUses: 200, expiresJalali: '۱۴۰۵/۱۲/۲۹', active: true }
];
