"use client";

import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone } from 'lucide-react';

const LoginForm = dynamic(() => import('@/components/auth/LoginForm').then(mod => mod.LoginForm), {
  ssr: false,
  loading: () => (
     <Tabs defaultValue="email" className="w-full max-w-sm">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email">
          <Mail className="mr-2 h-4 w-4" /> Email
        </TabsTrigger>
        <TabsTrigger value="phone">
          <Phone className="mr-2 h-4 w-4" /> Phone
        </TabsTrigger>
      </TabsList>
       <Card>
          <CardHeader>
             <Skeleton className="h-6 w-3/4" />
             <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
               <Skeleton className="h-4 w-1/4" />
               <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardFooter>
        </Card>
      </Tabs>
  )
});

export default function LoginPage() {
  return <LoginForm />;
}
