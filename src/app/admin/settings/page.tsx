import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminSettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Earning Settings</CardTitle>
          <CardDescription>Configure rates for daily tasks and referral bonuses.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ad-income">Daily Ad Income ($)</Label>
            <Input id="ad-income" type="number" defaultValue="5.00" />
          </div>
          <h3 className="font-medium pt-4">Referral Level Rates (%)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level1">Level 1</Label>
              <Input id="level1" type="number" defaultValue="10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level2">Level 2</Label>
              <Input id="level2" type="number" defaultValue="5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level3">Level 3</Label>
              <Input id="level3" type="number" defaultValue="2.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level4">Level 4</Label>
              <Input id="level4" type="number" defaultValue="1.25" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level5">Level 5</Label>
              <Input id="level5" type="number" defaultValue="1" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Reward Conditions</CardTitle>
          <CardDescription>Set conditions for special rewards and bonuses.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label htmlFor="telegram-bonus">Telegram Join Bonus ($)</Label>
            <Input id="telegram-bonus" type="number" defaultValue="20.00" />
          </div>
        </CardContent>
         <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
