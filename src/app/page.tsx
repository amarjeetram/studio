import { PublicHeader } from '@/components/layout/PublicHeader';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { AboutAi } from '@/components/home/AboutAi';
import { Features } from '@/components/home/Features';
import { Testimonials } from '@/components/home/Testimonials';
import { Cta } from '@/components/home/Cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <Hero />
        <AboutAi />
        <Features />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
