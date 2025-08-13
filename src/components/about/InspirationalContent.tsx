"use client";

import { useState, useTransition } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getEnhancedMessage } from '@/app/actions';

interface InspirationalContentProps {
  initialMessage: string;
  originalContent: string;
}

export function InspirationalContent({ initialMessage, originalContent }: InspirationalContentProps) {
  const [message, setMessage] = useState(initialMessage);
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(async () => {
      const newMessage = await getEnhancedMessage(originalContent);
      setMessage(newMessage);
    });
  };

  return (
    <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl">
      <CardContent className="p-8 md:p-12 relative">
        <Sparkles className="absolute top-4 right-4 h-8 w-8 text-primary-foreground/50" />
        <div className="text-center">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">A Message for You</h3>
            <p className="text-lg md:text-xl italic max-w-3xl mx-auto">
              "{message}"
            </p>
            <Button
              onClick={handleRefresh}
              disabled={isPending}
              variant="secondary"
              className="mt-6 bg-white/20 hover:bg-white/30 text-white"
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
              {isPending ? 'Inspiring...' : 'Inspire Me Again'}
            </Button>
            <p className="text-xs text-primary-foreground/60 mt-4">Powered by AI</p>
        </div>
      </CardContent>
    </Card>
  );
}
