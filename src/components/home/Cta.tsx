import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center shadow-2xl">
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
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/register">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
