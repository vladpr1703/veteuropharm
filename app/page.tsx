import { CompanySection } from '@/components/CompanySection';
import { ContactSection } from '@/components/ContactSection';
import { Hero } from '@/components/Hero';
import { KnowledgeSection } from '@/components/KnowledgeSection';
import { ProductsSection } from '@/components/ProductsSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { TrustStrip } from '@/components/TrustStrip';

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <ProductsSection />
      <CompanySection />
      <KnowledgeSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
