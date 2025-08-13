import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Users, DollarSign, Target } from "lucide-react"

const features = [
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: "Daily Ad Views",
    description: "Earn consistently by viewing a single ad each day. Simple, straightforward, and rewarding."
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Powerful Referral System",
    description: "Expand your network and earnings through our 5-level referral tree. The more you grow, the more you earn."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-accent" />,
    title: "Financial Freedom",
    description: "Take control of your financial future with multiple income streams and transparent payment systems."
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: "Growth & Mentorship",
    description: "Access resources and guidance from a community of leaders dedicated to your personal and professional growth."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Join StarRise Network?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide the tools, community, and opportunities you need to build a prosperous future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/10">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
