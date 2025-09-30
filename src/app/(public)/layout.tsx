
import { PublicHeader } from '@/components/layout/PublicHeader';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <PublicHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
