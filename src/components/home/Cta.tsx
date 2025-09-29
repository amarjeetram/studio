import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Cta() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-indigo-50 to-background dark:from-background dark:via-primary/10 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
          <div className="relative z-10">
            <Sparkles className="mx-auto h-12 w-12 text-white/50 mb-4"/>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Rise?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Your journey towards financial empowerment and personal growth is just one click away. Join the StarRise Network today and start building your legacy.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
