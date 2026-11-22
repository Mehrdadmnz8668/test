import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { PublicFooter } from '@/components/layout/PublicFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { PricingPreview } from '@/components/landing/PricingPreview';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090F] flex flex-col">
      <PublicNavbar />
      <main className="flex-1"><HeroSection /><PricingPreview /></main>
      <PublicFooter />
    </div>
  );
}
