
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl font-bold font-headline mb-8">Terms and Conditions</h1>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <h2 className="font-headline">1. Introduction</h2>
            <p>Welcome to StarRise Network. These terms and conditions outline the rules and regulations for the use of our website and services.</p>

            <h2 className="font-headline">2. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, StarRise Network and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

            <h2 className="font-headline">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material...</p>
            
            <h2 className="font-headline">4. Your Content</h2>
            <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant StarRise Network a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

            <h2 className="font-headline">5. No warranties</h2>
            <p>This Website is provided “as is,” with all faults, and StarRise Network express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>

            <h2 className="font-headline">6. Limitation of liability</h2>
            <p>In no event shall StarRise Network, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.</p>

            <h2 className="font-headline">7. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
