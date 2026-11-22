import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/ToastProvider';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ISO VPN | زیرساخت شبکه خصوصی امن و پرسرعت',
  description:
    'اتصال پایدار به سرورهای بین‌المللی با پروتکل‌های مدرن VLESS REALITY و مدیریت یکپارچه اشتراک در پنل ISO VPN.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen bg-[#09090F] text-slate-100 font-[family-name:var(--font-vazirmatn)] antialiased selection:bg-violet-600 selection:text-white overflow-x-hidden">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
