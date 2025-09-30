import { Sparkle } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="p-1.5 bg-primary rounded-lg">
        <Sparkle className="h-5 w-5 text-primary-foreground" />
      </div>
      <h1 className="text-xl font-bold font-headline text-foreground">
        SmartToolsWala
      </h1>
    </div>
  );
}
