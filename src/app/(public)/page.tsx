
import { Hero } from '@/components/home/Hero';
import { AboutAi } from '@/components/home/AboutAi';
import { Features } from '@/components/home/Features';
import { Testimonials } from '@/components/home/Testimonials';
import { Cta } from '@/components/home/Cta';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAi />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
