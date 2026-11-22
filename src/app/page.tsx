import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { PricingPreview } from '@/components/landing/PricingPreview';
import { NetworkPreview } from '@/components/landing/NetworkPreview';
import { SupportedDevices } from '@/components/landing/SupportedDevices';
import { FaqPreview } from '@/components/landing/FaqPreview';

export default function Home() {
  return (
    <>
      <PublicNavbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <NetworkPreview />
        <PricingPreview />
        <SupportedDevices />
        <FaqPreview />
      </main>
      <PublicFooter />
    </>
  );
}
