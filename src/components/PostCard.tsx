import { Heart, Calendar, Lightbulb } from 'lucide-react';
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
      className="group gradient-card rounded-2xl border border-border/60 p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
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

      <div className="flex items-start gap-3 mb-4">
        <div className="p-1.5 rounded-lg bg-accent/10 mt-0.5">
          <Lightbulb className="w-4 h-4 text-accent" />
        </div>
        <p className="prose prose-sm max-w-none text-foreground/90"
          dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* {post.content}
        </p> */}
      </div>

      {post.likes && (
        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{post.likes}</span>
          </button>
        </div>
      )}
    </article>
  );
}
