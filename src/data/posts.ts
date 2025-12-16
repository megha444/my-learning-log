export type Topic = 'system-design' | 'ai' | 'ml' | 'oop' | 'general' | 'dsa';

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
  'dsa': 'DSA'
};

export const topicColors: Record<Topic, string> = {
  'system-design': 'bg-topic-system-design/15 text-topic-system-design border-topic-system-design/25',
  'ai': 'bg-topic-ai/15 text-topic-ai border-topic-ai/25',
  'ml': 'bg-topic-ml/15 text-topic-ml border-topic-ml/25',
  'oop': 'bg-topic-oop/15 text-topic-oop border-topic-oop/25',
  'general': 'bg-topic-general/15 text-topic-general border-topic-general/25',
  'dsa': 'bg-topic-general/15 text-topic-dsa border-topic-dsa/25'
};

// Add your posts here! Just copy a post object and modify it.
export const posts: Post[] = [
  {
    id: '2',
    content: 'Back-of-the-envelope estimations: Power of two, Latency numbers: Avoid disk seek, compress data before sending over internet, and Availability numbers: more the 9s after decimal point, the lesser downtime.',
    topic: 'system-design',
    date: '2025-12-16',
  },
  {
    id: '1',
    content: 'Cost Function: It is used to tune your model paramaters w and b to get the best fit. It also uses contour map for visual understanding.',
    topic: 'ml',
    date: '2025-12-15',
  },
];
