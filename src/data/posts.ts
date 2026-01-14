export type Topic = 'system-design' | 'ai' | 'ml' | 'cloud' | 'general' | 'dsa';

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
  'cloud': 'Cloud',
  'general': 'General',
  'dsa': 'DSA'
};

export const topicColors: Record<Topic, string> = {
  'system-design': 'bg-topic-system-design/15 text-topic-system-design border-topic-system-design/25',
  'ai': 'bg-topic-ai/15 text-topic-ai border-topic-ai/25',
  'ml': 'bg-topic-ml/15 text-topic-ml border-topic-ml/25',
  'cloud': 'bg-topic-cloud/15 text-topic-cloud border-topic-cloud/25',
  'general': 'bg-topic-general/15 text-topic-general border-topic-general/25',
  'dsa': 'bg-topic-general/15 text-topic-dsa border-topic-dsa/25'
};

// Add your posts here! Just copy a post object and modify it.
export const posts: Post[] = [
  {
    id: '9',
    content: '<strong>Vectorization</strong> speeds up machine learning computations by replacing loops with matrix and vector operations. It enables parallel processing under the hood, leveraging optimized linear algebra libraries and hardware (CPU/GPU) for faster, scalable execution.',
    topic: 'ml',
    date: '2026-01-14',
  },
  {
    id: '8',
    content: '<strong>API Gateway</strong>  is a fully managed service that supports rate limiting, SSL termination, authentication, IP whitelisting, servicing static content, etc. When designing a rate-limiter, important question is its deployment: server-side or gateway? Server-side: full control of algorithm, limited by 3rd-party gateway. If already using API gateway, then go with that.',
    topic: 'system-design',
    date: '2026-01-13',
  },

  {
    id: '7',
    content: '<strong>Learning rate (α)</strong> controls how fast a model learns by deciding the step size taken while minimizing the cost function. Too high causes instability, too low makes training slow and inefficient. And when gradient descent is used on a convex-function like squared error cost function, it only has 1 global minima, so works better.',
    topic: 'ml',
    date: '2026-01-09',
  },
  {
    id: '6',
    content: '<strong>Gradient descent</strong> is a method used to train models by slowly improving them based on their mistakes. It works by repeatedly adjusting model parameters in small steps to reduce the error.',
    topic: 'ml',
    date: '2026-01-06',
  },
  {
    id: '5',
    content: '<strong>Wormhole Teleportation</strong> treats matching parentheses as portals: when you hit one, you jump to its pair and reverse direction. This lets you process the string in O(n) time without explicitly reversing substrings.</br><i>Time</i> : <strong>O(n)</strong> : each character processed once. </br><i>Space</i> : <strong>O(n)</strong> : Stack holds all open parentheses in the worst case.</br><i>Examples</i>: reversing substrings within parentheses',
    topic: 'dsa',
    date: '2026-01-05',
  },
  {
    id: '4',
    content: '<strong>Cloud Computing basic concepts: </strong>: Virtualization, Virtual Machine, API, Regions, Availability Zones, Scalability, Elastcity, Agility, High Avalbility, Fault Tolerance, Disaster Recovery, Load Balancing. </br><i>Examples</i>: AWS, Azure, Google Cloud',
    topic: 'cloud',
    date: '2025-12-18',
  },
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
