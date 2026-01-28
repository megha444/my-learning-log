import { profile } from '@/data/profile';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ProfileSection() {
    return (
        <section id="profile" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">My Profile</h2>

                <div className="space-y-12">
                    {/* Basic Info */}
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{profile.name}</h3>
                        <p className="text-lg text-primary font-semibold">{profile.title}</p>
                        <p className="text-muted-foreground italic">&quot;{profile.tagline}&quot;</p>
                        <p className="text-foreground leading-relaxed max-w-2xl mx-auto">{profile.bio}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={`mailto:${profile.social.email}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-foreground">Skills & Expertise</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            {profile.skills.map((skillGroup) => (
                                <div key={skillGroup.category} className="space-y-2">
                                    <h5 className="font-semibold text-primary">{skillGroup.category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-full bg-primary/10 text-sm text-foreground"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-foreground">Experience</h4>
                        <div className="space-y-6">
                            {profile.experience.map((job, index) => (
                                <div key={index} className="border-l-2 border-primary/30 pl-6 space-y-2">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div>
                                            <h5 className="font-bold text-foreground">{job.role}</h5>
                                            <p className="text-primary">{job.company}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
                                    </div>
                                    <div
                                        className="text-foreground text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_li]:text-foreground [&_strong]:font-bold [&_strong]:text-foreground [&_p]:mb-3"
                                        dangerouslySetInnerHTML={{ __html: job.description }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
