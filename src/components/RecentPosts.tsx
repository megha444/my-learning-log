import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '@/data/posts';
import { PostCard } from './PostCard';
import { Button } from '@/components/ui/button';

export function RecentPosts() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
              <span className="text-primary">&lt;</span>
              Recent Learnings
              <span className="text-primary"> /&gt;</span>
            </h2>
            <p className="text-muted-foreground">
              What I've been learning lately
            </p>
          </div>
          
          <Link to="/learnings">
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              View all
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
