import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-indigo-50 to-background dark:from-background dark:via-primary/10 dark:to-background py-20 md:py-32">
       <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-blob"></div>
         <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
       </div>
       <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-primary dark:text-white">
              Unlock Your Potential with StarRise Network
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              Join a thriving community dedicated to mentorship, growth, and financial freedom. Your journey to success begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
                <Link href="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
             <div className="mt-8 flex justify-center md:justify-start items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                    <Avatar className="w-8 h-8 border-2 border-background" />
                    <Avatar className="w-8 h-8 border-2 border-background" />
                    <Avatar className="w-8 h-8 border-2 border-background" />
                </div>
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                    <span className="text-muted-foreground">Trusted by 10,000+ members</span>
                </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-tilt"></div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team collaboration"
              width={600}
              height={400}
              className="relative rounded-xl shadow-2xl mx-auto"
              data-ai-hint="team collaboration"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
