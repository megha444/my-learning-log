import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { RecentPosts } from '@/components/RecentPosts';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
