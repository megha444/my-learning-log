import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Cpu, Brain, Code, Layers, Sparkles, Cloud, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  // { path: '/', label: 'Home', icon: Home },
  { path: '/#about', label: 'Skills and Experience', icon: User },
  { path: '/learnings', label: 'All Learnings', icon: BookOpen },
  { path: '/learnings/system-design', label: 'System Design', icon: Layers },
  { path: '/learnings/ai', label: 'AI', icon: Cpu },
  { path: '/learnings/ml', label: 'ML', icon: Brain },
  { path: '/learnings/cloud', label: 'Cloud', icon: Cloud },
  { path: '/learnings/dsa', label: 'DSA', icon: Code },

];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/learnings') {
      return location.pathname === '/learnings';
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 text-lg font-bold font-heading text-foreground hover:text-primary transition-colors"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span>Megha Agarwal</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.path.startsWith('/#')) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                      location.hash === item.path.substring(1)
                        ? 'bg-primary text-primary-foreground shadow-soft'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            {navItems.map((item, index) => {
              if (item.path.startsWith('/#')) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all my-1',
                      location.hash === item.path.substring(1)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all my-1',
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
