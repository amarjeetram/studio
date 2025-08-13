import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TelegramPage() {
  const bonusClaimed = false; // This would come from user data

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="items-center text-center">
            <div className="p-4 bg-blue-500/10 rounded-full mb-2">
                <Send className="h-10 w-10 text-blue-500" />
            </div>
            <CardTitle className="font-headline text-3xl">Join our Telegram Channel</CardTitle>
            <CardDescription>Get a one-time bonus of $20 for joining our official Telegram channel and verifying your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
         
          {bonusClaimed ? (
             <div className="flex items-center justify-center p-4 rounded-lg bg-green-500/10">
                <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Bonus already claimed. Thank you!</span>
                </div>
            </div>
          ) : (
             <>
                <div className="space-y-2">
                    <p className="text-sm font-medium">Step 1: Join the Channel</p>
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <Send className="mr-2 h-4 w-4" /> Join Now
                        </a>
                    </Button>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium">Step 2: Verify Your Username</p>
                     <Label htmlFor="telegram-username">Enter your Telegram Username</Label>
                     <Input id="telegram-username" placeholder="@yourusername" />
                </div>
            </>
          )}

        </CardContent>
        {!bonusClaimed && (
             <CardFooter>
                <Button size="lg" className="w-full">
                    Verify and Claim Bonus
                </Button>
            </CardFooter>
        )}
      </Card>
    </div>
  )
}
