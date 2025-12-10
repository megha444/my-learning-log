import { Github, Twitter, Linkedin, Mail, ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const socialIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  email: Mail,
};

const highlights = [
  { icon: TrendingUp, label: 'Growth Mindset' },
  { icon: Zap, label: 'Daily Learning' },
  { icon: Target, label: 'Constant Improvement' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-glow" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container relative z-10 px-4 text-center animate-fade-in">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 shadow-soft">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Learning & Growing Every Day
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
          <span className="text-foreground">Hey, I'm </span>
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 max-w-2xl mx-auto">
          {profile.title}
        </p>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 shadow-soft animate-grow"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {Object.entries(profile.social).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <a
                key={platform}
                href={platform === 'email' ? `mailto:${url}` : url}
                target={platform === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <Link to="/learnings">
          <Button
            size="lg"
            className="gradient-accent text-accent-foreground font-semibold px-8 py-6 rounded-full shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore My Learnings
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
