
"use client";

import {
  PanelLeft,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Logo } from "../icons/Logo";
import { Sidebar } from "./Sidebar";
import Link from "next/link";

const ThemeToggle = dynamic(() => import('./ThemeToggle').then(mod => mod.ThemeToggle), {
  ssr: false,
  loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
});

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs bg-background p-0 w-72">
                <div className="p-4 border-b">
                    <Logo />
                </div>
                <Sidebar isMobile={true} />
            </SheetContent>
          </Sheet>
          
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[320px] border-none"
            />
          </div>
          <ThemeToggle />
           <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="#">Login</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-fuchsia-600 text-white">
                <Link href="#">Sign Up</Link>
            </Button>
          </div>
        </header>
    )
}
