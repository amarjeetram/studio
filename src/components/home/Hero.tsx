import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10 py-20 md:py-32">
       <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-primary dark:text-white">
              Unlock Your Potential with StarRise Network
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              Join a thriving community dedicated to mentorship, growth, and financial freedom. Your journey to success begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl mx-auto"
              data-ai-hint="team collaboration"
            />
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
             <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
