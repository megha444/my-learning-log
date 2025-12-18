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
    id: '3',
    content: '<strong>Monotonic Stack </strong>: Maintain a stack that is always increasing or decreasing. When the order breaks, pop until it’s restored.</br><i>Time</i> : <strong>O(n)</strong>: each element pushed once, popped once. </br><i>Space</i> : <strong>O(n)</strong> : Stack holds all elements in the worst case.</br><i>Examples</i>: histogram area, stock span, and next greater element',
    topic: 'dsa',
    date: '2025-12-17',
  },
  {
    id: '2',
    content: '<strong>Back-of-the-envelope estimations </strong>: <ul> <li>Power of two</li> <li>Latency numbers: Avoid disk seek, compress data before sending over internet</li><li>Availability numbers: more the 9s after decimal point, the lesser downtime</li></ul>',
    topic: 'system-design',
    date: '2025-12-16',
  },
  {
    id: '1',
    content: '<strong>Cost Function</strong>: A cost function measures how wrong a model’s predictions are. Training is just the process of <strong>minimizing this function</strong>, not “making the model smart.” Choose the wrong cost function, and even a powerful model will learn the wrong behavior.',
    topic: 'ml',
    date: '2025-12-15',
  },
];
