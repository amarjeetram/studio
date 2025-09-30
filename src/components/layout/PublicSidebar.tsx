
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Shield, Puzzle, Mail, LayoutDashboard } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/plans', label: 'Plans', icon: Shield },
  { href: '/how-it-works', label: 'How It Works', icon: Puzzle },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function PublicSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <div className="flex flex-col gap-4 p-4">
        <Link href="/" className="flex items-center gap-2 font-semibold mb-4">
          <Logo />
        </Link>
        <nav className="grid items-start gap-1 text-sm font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { "bg-muted text-primary": pathname === href }
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
         <Button asChild className="w-full">
            <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Go to Dashboard
            </Link>
         </Button>
      </div>
    </aside>
  );
}
