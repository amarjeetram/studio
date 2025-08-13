import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah L.",
    role: "Team Leader",
    testimonial: "StarRise Network has completely transformed my life. The support and mentorship I've received are unparalleled. I'm finally on the path to true financial independence.",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    name: "David Chen",
    role: "New Member",
    testimonial: "I was skeptical at first, but the system is so easy to follow. Earning daily rewards is simple, and the community is incredibly welcoming and helpful.",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    name: "Maria Rodriguez",
    role: "Top Earner",
    testimonial: "The earning potential here is real. If you're willing to put in the effort and build your team, the rewards are limitless. StarRise provides the perfect platform.",
    avatar: "https://placehold.co/100x100.png"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-50 to-background dark:from-primary/10 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories from Our Members</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from real people who are building their dreams with StarRise Network.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-6 italic">"{item.testimonial}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={item.avatar} alt={item.name} data-ai-hint="person avatar" />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
