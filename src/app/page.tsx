import React from 'react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { PricingPreview } from '@/components/landing/PricingPreview';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { NetworkPreview } from '@/components/landing/NetworkPreview';
import { SupportedDevices } from '@/components/landing/SupportedDevices';
import { FaqPreview } from '@/components/landing/FaqPreview';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090F]">
      <PublicNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <PricingPreview />
        <NetworkPreview />
        <SupportedDevices />
        <FaqPreview />
      </main>
      <PublicFooter />
    </div>
  );
}
