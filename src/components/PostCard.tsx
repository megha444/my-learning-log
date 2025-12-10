import { Heart, Calendar } from 'lucide-react';
import { Post, topicLabels, topicColors } from '@/data/posts';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article
      className="group gradient-card rounded-xl border border-border/50 p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
            topicColors[post.topic]
          )}
        >
          {topicLabels[post.topic]}
        </span>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formattedDate}</span>
        </div>
      </div>

      <p className="text-foreground/90 leading-relaxed font-sans">
        {post.content}
      </p>

      {post.likes && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
          <Heart className="w-4 h-4 text-muted-foreground group-hover:text-destructive transition-colors" />
          <span className="text-sm text-muted-foreground">{post.likes}</span>
        </div>
      )}
    </article>
  );
}
