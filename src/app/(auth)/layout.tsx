import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10 p-4">
       <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center space-x-2">
            <Logo />
        </Link>
      </div>
      {children}
    </div>
  )
}
