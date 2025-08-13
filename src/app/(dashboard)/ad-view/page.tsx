import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock } from "lucide-react"
import Image from "next/image"

export default function AdViewPage() {
  const adViewed = false; // This would come from user data

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">View Your Daily Ad</CardTitle>
          <CardDescription>Watch the ad below to receive your daily earnings. You can only view one ad per day.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            {/* Ad content would be embedded here */}
            <Image 
              src="https://placehold.co/1280x720.png" 
              alt="Advertisement"
              width={1280}
              height={720}
              className="object-cover w-full h-full"
              data-ai-hint="product advertisement"
            />
          </div>
          
          <div className="flex items-center justify-center p-4 rounded-lg bg-muted/50">
             {adViewed ? (
                <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Ad viewed for today. Come back tomorrow!</span>
                </div>
            ) : (
                <div className="flex items-center gap-2 text-yellow-600">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Your ad for today is pending.</span>
                </div>
            )}
          </div>

        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full" disabled={adViewed}>
            {adViewed ? "Completed" : "Mark as Viewed & Claim Reward"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
