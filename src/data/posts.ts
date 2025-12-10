export type Topic = 'system-design' | 'ai' | 'ml' | 'oop' | 'general';

export interface Post {
  id: string;
  content: string;
  topic: Topic;
  date: string;
  likes?: number;
}

export const topicLabels: Record<Topic, string> = {
  'system-design': 'System Design',
  'ai': 'AI',
  'ml': 'Machine Learning',
  'oop': 'OOP',
  'general': 'General',
};

export const topicColors: Record<Topic, string> = {
  'system-design': 'bg-topic-system-design/20 text-topic-system-design border-topic-system-design/30',
  'ai': 'bg-topic-ai/20 text-topic-ai border-topic-ai/30',
  'ml': 'bg-topic-ml/20 text-topic-ml border-topic-ml/30',
  'oop': 'bg-topic-oop/20 text-topic-oop border-topic-oop/30',
  'general': 'bg-topic-general/20 text-topic-general border-topic-general/30',
};

// Add your posts here! Just copy a post object and modify it.
export const posts: Post[] = [
  {
    id: '1',
    content: 'TIL: CAP theorem states you can only have 2 of 3: Consistency, Availability, Partition tolerance. Most distributed systems choose AP or CP based on use case. Banks need CP, social media often chooses AP.',
    topic: 'system-design',
    date: '2024-12-10',
    likes: 24,
  },
  {
    id: '2',
    content: 'Transformers revolutionized NLP by replacing recurrence with self-attention. The key insight: attention allows the model to look at all positions in the input simultaneously, making training parallelizable.',
    topic: 'ai',
    date: '2024-12-09',
    likes: 42,
  },
  {
    id: '3',
    content: 'Gradient descent tip: Learning rate is crucial. Too high = overshooting minima. Too low = slow convergence. Start with 0.001 for Adam optimizer, adjust based on loss curves.',
    topic: 'ml',
    date: '2024-12-08',
    likes: 18,
  },
  {
    id: '4',
    content: 'SOLID principle reminder - Single Responsibility: A class should have only one reason to change. If you find yourself using "and" to describe what a class does, it probably needs to be split.',
    topic: 'oop',
    date: '2024-12-07',
    likes: 35,
  },
  {
    id: '5',
    content: 'Load balancing strategies: Round Robin for equal distribution, Least Connections for varying request times, IP Hash for session persistence. Choose based on your application needs.',
    topic: 'system-design',
    date: '2024-12-06',
    likes: 29,
  },
  {
    id: '6',
    content: 'Prompt engineering insight: Chain-of-thought prompting (adding "Let\'s think step by step") significantly improves reasoning in LLMs. Works because it mimics human problem-solving patterns.',
    topic: 'ai',
    date: '2024-12-05',
    likes: 56,
  },
  {
    id: '7',
    content: 'Feature scaling matters in ML! Without normalization, features with larger magnitudes dominate. StandardScaler for normal distributions, MinMaxScaler when you need bounded values.',
    topic: 'ml',
    date: '2024-12-04',
    likes: 21,
  },
  {
    id: '8',
    content: 'Dependency Injection > Hard dependencies. Instead of creating objects inside a class, pass them in. Makes testing easier, reduces coupling, and follows the Open/Closed principle.',
    topic: 'oop',
    date: '2024-12-03',
    likes: 44,
  },
];
