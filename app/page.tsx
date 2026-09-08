import { CompanySection } from '@/components/CompanySection';
import { AdvantagesPartners } from '@/components/AdvantagesPartners';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ContactSection } from '@/components/ContactSection';
import { Hero } from '@/components/Hero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { TrustStrip } from '@/components/TrustStrip';

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <CategoriesSection />
      <CompanySection />
      <AdvantagesPartners />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
