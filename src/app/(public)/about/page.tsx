
import Image from 'next/image';
import { getEnhancedMessage } from '@/app/actions';
import { InspirationalContent } from '@/components/about/InspirationalContent';
import { Card } from '@/components/ui/card';
import { Users, Target, Eye, Shield } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';

const coreValues = [
    {
        icon: <Users className="w-8 h-8 text-accent" />,
        title: "People-First",
        description: "Our members are the heart of our network. We prioritize their growth, success, and well-being in every decision we make."
    },
    {
        icon: <Target className="w-8 h-8 text-accent" />,
        title: "Integrity",
        description: "We operate with unwavering transparency and honesty, building a foundation of trust with our community."
    },
    {
        icon: <Eye className="w-8 h-8 text-accent" />,
        title: "Visionary Growth",
        description: "We are committed to continuous innovation, providing cutting-edge tools and opportunities for financial freedom."
    },
    {
        icon: <Shield className="w-8 h-8 text-accent" />,
        title: "Empowerment",
        description: "We empower individuals through mentorship and a supportive ecosystem, enabling them to achieve their full potential."
    }
]

export default async function AboutPage() {
    const initialContent = "Our company is about helping people achieve their dreams. We believe in the power of direct selling to create financial freedom through strong mentorship and a people-first approach.";
    const inspirationalMessage = await getEnhancedMessage(initialContent);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <section className="py-20 md:py-28 text-center bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10">
                    <div className="container">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary dark:text-white">Our Story</h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            StarRise Network was born from a simple idea: that everyone deserves the opportunity to achieve financial independence and personal growth.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="https://placehold.co/600x450.png"
                                alt="Founders of StarRise Network"
                                width={600}
                                height={450}
                                className="rounded-xl shadow-2xl"
                                data-ai-hint="team meeting"
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold font-headline text-primary dark:text-white">Our Mission</h2>
                                <p className="mt-2 text-muted-foreground">To empower individuals across the globe by providing a reliable, innovative, and supportive platform for direct selling. We are committed to fostering a community built on mentorship, integrity, and shared success.</p>
                            </div>
                             <div>
                                <h2 className="text-3xl font-bold font-headline text-primary dark:text-white">Our Vision</h2>
                                <p className="mt-2 text-muted-foreground">To become the world's most trusted and inspiring direct selling network, creating a legacy of financial freedom and personal fulfillment for millions of families.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-indigo-50/50 dark:bg-card">
                    <div className="container">
                        <InspirationalContent initialMessage={inspirationalMessage} originalContent={initialContent} />
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container">
                       <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                The principles that guide every action we take.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreValues.map((value) => (
                               <Card key={value.title} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/10">
                                   <div className="flex justify-center mb-4">
                                       <div className="p-4 bg-accent/10 rounded-full">
                                           {value.icon}
                                       </div>
                                   </div>
                                   <h3 className="text-xl font-semibold font-headline">{value.title}</h3>
                                   <p className="mt-2 text-muted-foreground">{value.description}</p>
                               </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
