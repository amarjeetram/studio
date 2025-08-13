import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for success. Your journey starts here.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
             <Link href="/terms" className="hover:text-foreground">Terms & Conditions</Link>
             <Link href="/contact" className="hover:text-foreground">Support</Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" target="_blank" rel="noreferrer">
              <div className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-4 w-4" />
              </div>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <div className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors hover:bg-accent hover:text-accent-foreground">
                <Github className="h-4 w-4" />
              </div>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <div className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
       <div className="pb-4 text-center text-sm text-muted-foreground">
         © {new Date().getFullYear()} StarRise Network. All rights reserved.
       </div>
    </footer>
  );
}
