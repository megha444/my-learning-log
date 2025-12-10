import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '@/data/posts';
import { PostCard } from './PostCard';
import { Button } from '@/components/ui/button';

export function RecentPosts() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Flame className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-accent">Fresh insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
              Recent Learnings
            </h2>
            <p className="text-muted-foreground">
              Bite-sized insights from my daily learning journey
            </p>
          </div>
          
          <Link to="/learnings">
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-6"
            >
              View all learnings
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
