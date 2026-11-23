import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISO VPN | اینترنت بدون محدودیت",
  description: "اینترنت آزاد و پایدار، بدون محدودیت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="bg-background text-textPrimary font-vazir antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}