
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/Logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Info, Shield, Puzzle, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const ThemeToggle = dynamic(() => import('./ThemeToggle').then(mod => mod.ThemeToggle), {
  ssr: false,
  loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
});

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/plans', label: 'Plans', icon: Shield },
  { href: '/how-it-works', label: 'How It Works', icon: Puzzle },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="sm:hidden">
         <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
              <Logo />
            </Link>
            <nav className="grid gap-2 text-lg font-medium">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 text-center sm:text-left">
        {/* We can have a breadcrumb or page title here in the future */}
      </div>

      <div className="flex items-center space-x-2">
         <ThemeToggle />
         <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
           <Link href="/dashboard">Dashboard</Link>
         </Button>
      </div>
    </header>
  );
}
