import { PublicHeader } from '@/components/layout/PublicHeader';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    title: 'Starter',
    price: '10',
    description: 'Perfect for beginners to get a feel for the network.',
    features: [
      'Daily Ad View Earning',
      'Level 1 Referral Bonus',
      'Access to Community',
    ],
    isPopular: false,
  },
  {
    title: 'Growth',
    price: '50',
    description: 'Ideal for those ready to build and expand their team.',
    features: [
      'Higher Daily Earning',
      'Up to Level 3 Referral Bonus',
      'Basic Training Materials',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    title: 'Leader',
    price: '100',
    description: 'For serious networkers aiming for the top.',
    features: [
      'Maximum Daily Earning',
      'Full 5-Level Referral Bonus',
      'Advanced Training & Mentorship',
      'Exclusive Leader Rewards',
    ],
    isPopular: false,
  },
];

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-50/50 dark:bg-transparent">
      <PublicHeader />
      <main className="flex-grow">
        <section className="py-20 md:py-28 text-center bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary dark:text-white">Our Plans</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that best fits your ambitions. All paths lead to growth and success.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <Card key={plan.title} className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 ${plan.isPopular ? 'border-accent border-2 -translate-y-4' : ''}`}>
                {plan.isPopular && (
                  <div className="bg-accent text-accent-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-headline">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/one-time</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${plan.isPopular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                    <Link href="/register">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
