import { Briefcase, Code, Code2, Rocket, Star, Blocks } from 'lucide-react';
import { profile } from '@/data/profile';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {profile.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mb-8">
          {/* Skills */}
          <div className="gradient-card rounded-2xl border border-border/60 p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Skills & Tools</h3>
            </div>

            <div className="space-y-6">
              {profile.skills.map((skill) => (
                <div key={skill.category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mb-8">
          {/* Experience */}
          <div className="gradient-card rounded-2xl border border-border/60 p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                  <h4 className="font-semibold text-foreground">{exp.role}</h4>
                  <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: exp.description }} />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Always leveling up!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mb-8">
          {/* Experience */}
          <div className="gradient-card rounded-2xl border border-border/60 p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                <Blocks className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Projects</h3>
            </div>

            <div className="space-y-6">
              {profile.projects.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                  <h4 className="font-semibold text-foreground">{exp.title}</h4>
                  {/* <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mb-2">{exp.period}</p> */}
                  <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: exp.description }} />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Always leveling up!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
