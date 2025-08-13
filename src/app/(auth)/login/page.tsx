'use client';

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone } from 'lucide-react';

export default function LoginPage() {
  return (
    <Tabs defaultValue="email" className="w-full max-w-sm">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email">
          <Mail className="mr-2 h-4 w-4" /> Email
        </TabsTrigger>
        <TabsTrigger value="phone">
          <Phone className="mr-2 h-4 w-4" /> Phone
        </TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your email and password to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-primary hover:bg-primary/90">Log In</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline text-accent">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="phone">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Login with OTP</CardTitle>
            <CardDescription>
              Enter your phone number to receive a one-time password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 234 567 890" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="otp">OTP</Label>
              <Input id="otp" type="text" placeholder="123456" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button variant="outline" className="w-full">Send OTP</Button>
            <Button className="w-full bg-primary hover:bg-primary/90">Log In with OTP</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline text-accent">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
