import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { posts, topicLabels, Topic } from '@/data/posts';
import { BookOpen, Sparkles } from 'lucide-react';

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 shadow-soft">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {pageTitle}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {topic 
                ? `Exploring ${topicLabels[topic as Topic]} concepts and patterns`
                : 'Daily insights from my learning journey across different domains'
              }
            </p>
          </div>

          {/* Posts Count */}
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-sm text-muted-foreground font-medium">
              {filteredPosts.length} learning{filteredPosts.length !== 1 ? 's' : ''} shared
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
            <div className="text-center py-20 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-6">
                <BookOpen className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium mb-2">
                No learnings yet in this category
              </p>
              <p className="text-sm text-muted-foreground/70">
                Check back soon for new insights!
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
