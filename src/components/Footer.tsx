import { Sparkles, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/60 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-medium">GrowthLog</span>
            <span className="text-border">•</span>
            <span>Learning in public</span>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}
