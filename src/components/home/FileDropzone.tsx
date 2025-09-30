"use client";

import { UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FileDropzone() {
  return (
    <div className="w-full max-w-3xl mt-12 px-4">
      <div
        className="relative flex flex-col items-center justify-center w-full p-8 md:p-12 border-2 border-dashed border-muted rounded-xl bg-secondary/30 transition-all duration-300 hover:border-primary hover:bg-secondary/50"
      >
        <div className="text-center">
          <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-xl font-semibold text-foreground mb-2">Drag & drop files here</p>
          <p className="text-muted-foreground mb-6">or</p>
          <Button size="lg">
            Choose file
          </Button>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p className="font-semibold">Supported file types:</p>
          <p>JPEG, JPG, PNG, WEBP, HEIC, HEIF, PDF, MP4, MOV, AVI, MKV, WEBM</p>
        </div>
      </div>
    </div>
  );
}
