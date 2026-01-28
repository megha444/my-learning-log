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
    { category: 'Frameworks', items: ['FastAPI', 'Spring Boot', 'LiveKit', 'REST APIs', 'WebSocket'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Qdrant', 'Redis', 'Object Storage (Blob/S3-compatible)'] },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'Large Language Models (LLMs)', 'Speech-to-Text', 'Text-to-Speech', 'NLP & Summarization', 'RAG (Retrieval-Augmented Generation)', 'Model Evaluation & Guardrails'] },
    { category: 'Cloud', items: ['AWS', 'Azure AKS', 'Azure Blob Storage', 'Docker', 'GitHub Actions', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines', 'Monitoring & Logging'] },
    { category: 'Architecture & Systems', items: ['Multi-Tenant Architecture', 'Microservices', 'Voice & Conversational AI Platforms'] },
  ],

  // FastAPI · Python · PostgreSQL (Neon) · Azure AKS · Azure Blob Storage · Docker · GitHub Actions
  experience: [
    {
      role: 'Product & Engineering Lead – Creator Platforms',
      company: 'Spotlit Inc.',
      period: '2025 - Present',
      description: '<ul><li>Launched <strong>2 production-ready platforms</strong> from 0 → live, <strong>owning 100% of product definition, backend architecture, and cloud deployment</strong>.</li><li>Designed and implemented <strong>workflow-heavy systems supporting 10+ distinct user states and transitions</strong> (invites, submissions, approvals, retries, rejections) with role-based access control.</li><li><strong>Built scalable media ingestion pipelines handling multi-GB uploads</strong> (up to 10GB/file) with async, chunked processing and secure access.</li><li>Engineered backend services capable of supporting <strong>hundreds of concurrent uploads and thousands of API requests/day with low-latency responses</strong>.</li><li>Reduced media infrastructure costs by <strong>~60–80%</strong> by migrating from third-party services to <strong>cloud-native Azure Blob Storage</strong>.</li><li>Designed APIs and data models supporting <strong>dozens of entities and relationships</strong>, optimized for iteration speed and future scale.</li><li><strong>Shipped multiple end-to-end MVP iterations in weeks</strong> (not months), incorporating real creator and brand workflow constraints.</li><li>Established <strong>CI/CD and cloud infrastructure</strong> enabling <strong>same-day deployments</strong> and rapid rollback in <strong>early-stage environments</strong></li></ul></br><p><strong>Key Skills: </strong>Founding Engineer · Product Engineering · Backend Systems · Distributed Systems Basics · Cloud Architecture · Media Pipelines · Cost Optimization · API Design · DevOps · Startup Execution</p>',
    },
    {
      role: 'Founding Product & GTM Lead – AI & Voice Platforms (Pharma, Enterprise)',
      company: 'Atrina Technologies',
      period: '2024 - 2025',
      description: '<ul><li>Built and commercialized <strong>enterprise AI and voice platforms</strong> for pharma, converting unstructured inputs(MR feedback, meetings, calls) into structured, cumulative intelligence at the drug, account, and role level,reducing manual synthesis effort by <strong>60–70%</strong>.</li><li>Designed and shipped voice-first solutions including <strong>meeting summarization, grievance intake,SDR co-pilot, and inbound/outbound calling agents</strong>, enabling real-time capture and downstream analytics from spoken interactions.</li><li>Led end-to-end product lifecycle (use-case discovery → MVP → pilot → feedback → iteration), delivering<strong> multiple production-ready pilots</strong> across pharma and healthcare workflows.</li><li>Drove go-to-market and enterprise discovery in the US market through <strong>50+ stakeholder conversations</strong> with pharma commercial, operations, IT, and leadership teams, shaping ICPs, pricing signals, and compliance needs.</li><li>Architected <strong>multi-tenant, scalable AI systems</strong> using LLMs, speech-to-text, vector databases, and workflow orchestration with configurable agents and enterprise data isolation.</li><li>Positioned offerings as both a <strong>platform and custom solutions</strong>, accelerating deal cycles and enabling dual <strong>product and services revenue streams</strong>.</li><li>Partnered with conferences and ecosystem players to extend the lifecycle of <strong>spoken content via AI-generated summaries</strong>, insights, and searchable knowledge layers.</li><li>Translated pharma domain complexity (compliance, workflows, data sensitivity) into <strong>deployable AI products, balancing reliability, evaluation, governance, and usability</strong>.</li></ul></br><p><strong>Key Skills: </strong>Product Strategy · AI Product Management · Voice AI · LLM Applications · Enterprise SaaS · Pharma Commercial Intelligence · Go-To-Market Strategy · Customer Discovery · Multi-Tenant Architecture · Speech Analytics · Workflow Automation · Stakeholder Management · US Market Entry · Compliance-Aware AI Systems</p>',
    },

    {
      role: 'Software Developer',
      company: 'Ericsson Inc.',
      period: '2022 - 2024',
      description: '<ul><li>Built and maintained <strong>Java & Spring Boot microservices</strong> for telecom automation platforms with scalable REST APIs.</li><li>Deployed <strong>SaaS components on Kubernetes</strong> using Helm and Jenkins across multi-cluster environments.</li><li>Improved code quality using <strong>JUnit 5, JaCoCo, and SonarQube, reducing defects by 25%</strong>.</li><li>Developed <strong>ML-based anomaly detection systems using Python, Flask, and TensorFlow</strong> with >85% accuracy.</li><li>Integrated and containerized ML inference workflows using Docker, Kubernetes, and <strong>Jenkins pipelines</strong>.</li><li>Worked with <strong>PostgreSQL, Redis, Elasticsearch, Cassandra, and InfluxDB</strong> for data storage and analytics.</li><li>Explored <strong>distributed tracing with OpenTelemetry</strong> across Kubernetes clusters.</li><li>Built automated data pipelines using Pandas and NumPy for log and metric analysis.</li><li>Automated system testing using <strong>Java and shell scripts</strong>, significantly reducing execution time.</li><li>Monitored and optimized system performance using <strong>TeraVM and Jenkins</strong>.</li></ul></br><p><strong>Key Skills: </strong>Java · Spring Boot · Kubernetes · ML Systems · Cloud-Native Platforms · Python · Pandas · NumPy · Jenkins</p>',
    },
  ],
  projects: [
    {
      title: 'Podcast AI App',
      // company: 'Spotlit Inc.',
      // period: '2025 - Present',
      description: '<ul><li>Developed an AI-powered script generation system using <strong>Gemini</strong> to automate content creation for podcast episodes.</li><li>Built a <strong>FastAPI backend</strong> with modular endpoints for dynamic script generation and prompt management.</li><li>Integrated <strong>ElevenLabs and Gemini for near-human audio experience</strong> to create a multi-use podcast assistant.</li><li>Deployed scalable microservices with Docker and Kubernetes, improving development velocity and maintainability.</li></ul>',
    },
    {
      title: 'AI Daily Digest Chrome Extension',
      // company: 'Atrina Technologies',
      // period: '2024 - 2025',
      description: '<ul><li>Solved information overload in AI by delivering <strong>role-specific, context-aware news summaries.</strong></li><li>Personalized tone, depth, and relevance for different professional personas.</li><li><strong>Combined client-side and server-side LLMs</strong> to optimize reliability and performance.</li></ul>',
    },
  ],
};
