import { Github, Twitter, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/button';

const socialIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  email: Mail,
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Learning in public
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto">
          {profile.title}
        </p>

        <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto font-mono">
          {profile.tagline}
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          {Object.entries(profile.social).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <a
                key={platform}
                href={platform === 'email' ? `mailto:${url}` : url}
                target={platform === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/50 bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="lg"
          className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 font-mono"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Learn more
          <ArrowDown className="ml-2 w-4 h-4 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}
