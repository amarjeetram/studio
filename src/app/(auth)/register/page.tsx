import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
        <CardDescription>
          Join StarRise Network and start your journey to success.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 234 567 890" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
         <div className="space-y-2">
          <Label htmlFor="referral">Referral ID (Optional)</Label>
          <Input id="referral" placeholder="STAR12345" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full bg-primary hover:bg-primary/90">Create Account</Button>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline text-accent">
            Log in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
