import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            &lt;/&gt; with <Heart className="inline w-4 h-4 text-destructive mx-1" /> and lots of coffee
          </p>
          <p>
            © {new Date().getFullYear()} • Learning in public
          </p>
        </div>
      </div>
    </footer>
  );
}
