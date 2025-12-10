import { Briefcase, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="text-primary">&lt;</span>
          About Me
          <span className="text-primary"> /&gt;</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          {profile.bio}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Skills */}
          <div className="gradient-card rounded-xl border border-border/50 p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-semibold">Skills</h3>
            </div>

            <div className="space-y-6">
              {profile.skills.map((skill) => (
                <div key={skill.category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-medium text-foreground/80 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="gradient-card rounded-xl border border-border/50 p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-semibold text-foreground">{exp.role}</h4>
                  <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
