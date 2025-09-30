
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { FileDropzone } from '@/components/home/FileDropzone';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-72">
        <Header />
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-auto">
          <div className="flex flex-col items-center justify-center flex-1 pt-12 md:pt-24">
            <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/10 text-primary backdrop-blur-sm">
                <Sparkles className="mr-2 h-3 w-3" />
                Powered by AI
            </Badge>
            <div className="text-center space-y-4 px-4">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-foreground">
                Unlock Your Workflow with Smart Tools
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                SmartToolsWala – Powered by advanced AI, offering all-in-one tools for productivity, file conversion, SEO, image editing, and coding utilities to simplify your digital life.
              </p>
            </div>
            <FileDropzone />
          </div>
        </main>
      </div>
    </div>
  );
}
