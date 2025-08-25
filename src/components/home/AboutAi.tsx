import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Innovative Digital Solutions',
    description: 'AI Moneta is our high-edge AI-driven trading platform designed to maximize profits through automated, data-driven strategies.',
    bgColor: 'bg-purple-600',
    points: ['Innovative Digital Solutions', 'High-Speed Performance', 'Scalable & Adaptive'],
  },
  {
    title: 'AI-Driven Risk Analysis',
    description: 'Our AI continuously analyzes market trends, detects anomalies, and optimizes investments to ensure consistent and sustainable returns.',
    bgColor: 'bg-gray-800 dark:bg-gray-900',
    points: ['AI-Driven Risk Analysis', 'Portfolio Diversification', 'Secure Trading Framework'],
  },
  {
    title: 'Regulated & Transparent',
    description: 'AI Moneta operates under a regulated framework, providing a secure and transparent investment environment.',
    bgColor: 'bg-gray-800 dark:bg-gray-900',
    points: ['Regulated & Transparent', 'Industry Recognition', 'Commitment to Security'],
  },
];

export function AboutAi() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What is AI Moneta?</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 ${feature.bgColor}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-headline text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 mb-6 flex-grow">{feature.description}</p>
                <ul className="space-y-3 mb-6">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className="h-12 w-12 flex items-center justify-center rounded-full border border-white/50 bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
            <Card className="p-8 bg-gray-100 dark:bg-gray-800/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <p className="text-5xl font-bold text-primary">15k+</p>
                        <p className="text-muted-foreground mt-2">Trusted Users</p>
                    </div>
                     <div>
                        <p className="text-5xl font-bold text-primary">5k+</p>
                        <p className="text-muted-foreground mt-2">Positive Reviews</p>
                    </div>
                     <div>
                        <p className="text-5xl font-bold text-primary">35%</p>
                        <p className="text-muted-foreground mt-2">Average Monthly Return</p>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
