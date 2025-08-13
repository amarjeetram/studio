import { PublicHeader } from '@/components/layout/PublicHeader';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Eye, Users, DollarSign, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-accent" />,
    title: "Step 1: Register",
    description: "Create your account in just a few minutes. Choose a plan that suits your goals and get instant access to the platform.",
  },
  {
    icon: <Eye className="h-8 w-8 text-accent" />,
    title: "Step 2: View Ads",
    description: "Log in daily to view your single assigned advertisement. It's a simple task that ensures your daily earnings.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Step 3: Build Your Team",
    description: "Share your unique referral link with others. As your team grows through 5 levels, so do your bonuses and income.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent" />,
    title: "Step 4: Earn & Withdraw",
    description: "Watch your balance grow from your daily tasks and referral network. Withdraw your earnings securely and easily.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-50/50 dark:bg-transparent">
      <PublicHeader />
      <main className="flex-grow">
        <section className="py-20 md:py-28 text-center bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary dark:text-white">How It Works</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, powerful process to build your income stream.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container">
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-border/50 rounded-full hidden md:block"></div>
                    {steps.map((step, index) => (
                         <div key={index} className={`flex items-center w-full mb-8 md:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="p-3 bg-accent/10 rounded-full">{step.icon}</div>
                                        <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center shadow-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                The path to success is clear. Take the first step now.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
