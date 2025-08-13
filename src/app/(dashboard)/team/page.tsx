import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { userStats } from "@/lib/placeholder-data"
import { Users, Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TeamPage() {
  const totalTeam = Object.values(userStats.team).reduce((a, b) => a + b, 0);

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Your Referral Link</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2">
                        <Input value="https://starrise.network/ref/USER123" readOnly />
                        <Button variant="outline" size="icon">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Direct Referrals</CardDescription>
                    <CardTitle className="text-4xl">{userStats.directs}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+2 this week</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Total Team</CardDescription>
                    <CardTitle className="text-4xl">{totalTeam}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">Across all 5 levels</div>
                </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Team Breakdown</CardTitle>
                <CardDescription>Number of members at each level in your network.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Object.entries(userStats.team).map(([level, count]) => (
                    <div key={level} className="p-4 bg-muted/50 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Level {level.replace('level', '')}</p>
                        <p className="text-2xl font-bold">{count}</p>
                        <p className="text-xs text-muted-foreground">Members</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
  )
}
