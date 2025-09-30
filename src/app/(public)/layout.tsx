
import { PublicSidebar } from '@/components/layout/PublicSidebar';
import { PublicHeader } from '@/components/layout/PublicHeader';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <PublicSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        <PublicHeader />
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
