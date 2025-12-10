import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Cpu, Brain, Code, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/learnings', label: 'All', icon: BookOpen },
  { path: '/learnings/system-design', label: 'System Design', icon: Layers },
  { path: '/learnings/ai', label: 'AI', icon: Cpu },
  { path: '/learnings/ml', label: 'ML', icon: Brain },
  { path: '/learnings/oop', label: 'OOP', icon: Code },
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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="font-mono text-lg font-bold text-primary hover:text-primary/80 transition-colors"
          >
            &lt;learnings /&gt;
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
