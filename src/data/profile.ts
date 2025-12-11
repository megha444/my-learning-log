import { Description } from "@radix-ui/react-toast";

export const profile = {
  name: 'Megha',
  title: 'Software Engineer & Lifelong Learner',
  tagline: 'Building things, breaking things, learning always.',
  bio: `Passionate about distributed systems, machine learning, and clean code. 
Currently exploring the intersection of AI and software engineering. 
I share my daily learnings here to solidify my understanding and help others on the same journey.`,

  social: {
    github: 'https://github.com/megha444',
    linkedin: 'https://www.linkedin.com/in/meghaagarwal470/',
    email: 'agarwalmegha470@gmail.com',
  },

  skills: [
    { category: 'Languages', items: ['Python', 'Java', 'Bash', 'Kotlin'] },
    { category: 'Frameworks', items: ['FastAPI', 'Spring Boot', 'LiveKit'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Qdrant', 'Redis'] },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain'] },
    { category: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Jenkins'] },
  ],

  experience: [
    {
      role: 'Software Engineer & Business Developement',
      company: 'Atrina Technologies',
      period: '2024 - Present',
      description: 'Building scalable distributed systems and ML pipelines.',
    },
    {
      role: 'Backend Lead',
      company: 'Spotlit Inc.',
      period: '2025 - Present',
      description: 'Founding engineer'

    },
    {
      role: 'Software Developer',
      company: 'Ericsson Inc.',
      period: '2022 - 2024',
      description: 'Developed RESTful APIs and microservices architecture.',
    },
  ],
};
