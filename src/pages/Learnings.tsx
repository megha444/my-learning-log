import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { posts, topicLabels, Topic } from '@/data/posts';
import { BookOpen } from 'lucide-react';

const Learnings = () => {
  const { topic } = useParams<{ topic?: string }>();
  
  const filteredPosts = topic 
    ? posts.filter((post) => post.topic === topic)
    : posts;

  const pageTitle = topic 
    ? topicLabels[topic as Topic] || 'Learnings'
    : 'All Learnings';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-primary">&lt;</span>
              {pageTitle}
              <span className="text-primary"> /&gt;</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {topic 
                ? `Exploring ${topicLabels[topic as Topic]} concepts and patterns`
                : 'Daily insights from my learning journey across different domains'
              }
            </p>
          </div>

          {/* Posts Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground font-mono">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-mono">
                No posts yet in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learnings;
