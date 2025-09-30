
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { FileDropzone } from '@/components/home/FileDropzone';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-auto">
          <div className="flex flex-col items-center justify-center flex-1 py-12 md:py-24">
            <div className="text-center space-y-4 px-4">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500">
                Unlock Your Workflow with Smart Tools
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Powered by advanced AI, offering all-in-one tools for productivity, file conversion, SEO, image editing, and coding utilities.
              </p>
            </div>
            <FileDropzone />
          </div>
        </main>
      </div>
    </div>
  );
}
