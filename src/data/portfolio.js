export const personalInfo = {
  name: 'Kashish Goyal',
  title: 'Backend Software Engineer',
  tagline:
    'I architect scalable REST APIs, secure microservices, and AI-powered backends that solve real-world problems at scale.',
  email: 'kashishgoyal0003@gmail.com',
  phone: '+91 9417612395',
  whatsapp: '919417612395',
  linkedin: 'https://linkedin.com/in/kashish-goyal',
  github: 'https://github.com/Kashishgoyal6300',
  resumePath: '/Kashish_Resume.pdf',
};

export const typingRoles = [
  'Backend Developer',
  'Spring Boot Engineer',
  'AI/LLM Integrator',
  'API Architect',
  'System Designer',
];

export const stats = [
  { label: 'CGPA', value: 8.78, suffix: '/10', decimals: 2 },
  { label: 'Projects Built', value: 3, suffix: '+', decimals: 0 },
  { label: 'Months Experience', value: 10, suffix: '+', decimals: 0 },
  { label: 'Technologies', value: 25, suffix: '+', decimals: 0 },
];

export const summary = `Backend Software Engineer with production-grade experience building RESTful APIs, secure authentication systems, and AI-powered solutions. Currently interning at Innova Solutions, where I engineered an enterprise AI chatbot using Java, Spring Boot, Spring AI, and RAG for the aviation MRO industry. Strong foundation in system design, clean architecture, and modern backend practices — ready to deliver impact from day one.`;

export const highlights = [
  'Enterprise AI & RAG Systems',
  'RESTful API Design',
  'Spring Boot Microservices',
  'JWT & OAuth Security',
  'Database Optimization',
  'System Design (LLD/HLD)',
];

export const education = [
  {
    institution: 'Chitkara University',
    location: 'Rajpura, Punjab',
    degree: 'B.E. Computer Science & Engineering',
    period: 'Oct 2022 – May 2026',
    score: 'CGPA: 8.78 / 10.0',
  },
  {
    institution: 'Shivalik Public School',
    location: 'Jaitu, Punjab',
    degree: 'Senior Secondary (PCM)',
    period: '2019 – 2021',
    score: '80%',
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Innova Solutions',
    location: 'Hyderabad',
    period: 'May 2025 – March 2026',
    type: 'Full-time Internship',
    tech: ['Java', 'Spring Boot', 'Spring AI', 'RAG', 'Vector DB', 'REST APIs', 'MySQL'],
    highlights: [
      'Engineered an AI-powered chatbot for SITA MRO (Maintenance, Repair & Operations) — enabling intelligent aircraft parts discovery across massive inventories',
      'Implemented RAG pipeline with semantic search and vector embeddings for context-aware, accurate part recommendations',
      'Built multi-criteria filtering engine: availability, remaining useful life, supplier ratings, geo-location, and pricing optimization',
      'Designed scalable REST APIs following clean architecture principles with robust error handling and logging',
    ],
  },
];

export const projects = [
  {
    title: 'SITA MRO AI Chatbot',
    subtitle: 'Enterprise AI Parts Discovery System',
    featured: true,
    status: 'Production · Innova Solutions',
    architecture: 'Spring Boot · RAG · Vector Search',
    description:
      'Enterprise-grade AI assistant that revolutionizes aircraft parts procurement — users query in natural language and receive intelligent, filtered recommendations from supplier databases and inventory systems.',
    features: [
      'Natural language query processing with LLM integration',
      'RAG-based semantic search across parts catalog',
      'Multi-factor filtering: health life, pricing, supplier ratings',
      'Real-time inventory & supplier data aggregation',
    ],
    tech: ['Java', 'Spring Boot', 'Spring AI', 'RAG', 'Vector DB', 'REST APIs', 'MySQL'],
    color: '#22c55e',
    icon: '🤖',
  },
  {
    title: 'Learning Log System',
    subtitle: 'Role-Based Intern Tracking Platform',
    featured: false,
    status: 'Completed',
    architecture: 'MVC · REST · MySQL',
    description:
      'Full-stack backend platform enabling organizations to track intern learning progress with role-based access control, automated workflows, and scheduled email notifications.',
    features: [
      'Admin & Intern role-based access control (RBAC)',
      'Complete CRUD REST APIs with validation',
      'Automated daily email reminder scheduler',
      'Secure session management & authentication',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'Spring Mail', 'REST APIs', 'MVC'],
    color: '#06b6d4',
    icon: '📚',
  },
  {
    title: 'Liquor Booking System',
    subtitle: 'Secure E-Commerce Backend',
    featured: false,
    status: 'Completed',
    architecture: 'CSR Pattern · JWT · Payment Gateway',
    description:
      'Production-ready booking backend with end-to-end security — JWT authentication, role-based authorization, and seamless Razorpay payment integration for online transactions.',
    features: [
      'JWT-based stateless authentication',
      'Role-based authorization (Admin / Customer)',
      'Razorpay payment gateway integration',
      'Controller-Service-Repository architecture',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Razorpay', 'MySQL'],
    color: '#a855f7',
    icon: '🛒',
  },
];

export const techMarquee = [
  'Java', 'Spring Boot', 'Spring AI', 'MySQL', 'Redis', 'Node.js',
  'REST APIs', 'Docker', 'Git', 'Kafka', 'RAG', 'LLMs',
  'JWT', 'Microservices', 'System Design', 'Python', 'React',
];

export const skillProficiencies = [
  { name: 'Java & OOP', level: 90, color: '#f89820' },
  { name: 'Spring Boot', level: 88, color: '#6db33f' },
  { name: 'REST API Design', level: 85, color: '#06b6d4' },
  { name: 'MySQL & SQL', level: 82, color: '#00758f' },
  { name: 'Spring AI / RAG', level: 80, color: '#a855f7' },
  { name: 'System Design', level: 78, color: '#ec4899' },
  { name: 'Spring Security & JWT', level: 85, color: '#22c55e' },
  { name: 'Node.js & Express', level: 72, color: '#68a063' },
];

export const skills = {
  languages: ['Java', 'SQL', 'JavaScript', 'Python', 'TypeScript (Basics)'],
  frameworks: [
    'Spring Boot', 'Spring AI', 'Spring Security', 'Spring Data JPA',
    'Node.js', 'Express.js', 'React', 'REST APIs', 'MVC Architecture',
  ],
  ai: [
    'Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)',
    'MCP Server', 'Prompt Engineering', 'Vector Databases', 'Semantic Search',
  ],
  databases: ['MySQL', 'Redis', 'JPA/Hibernate', 'Database Indexing'],
  devops: ['Git & GitHub', 'Docker', 'Apache Kafka', 'Postman', 'CI/CD Basics'],
  concepts: [
    'Data Structures & Algorithms', 'Object-Oriented Programming',
    'Low-Level Design (LLD)', 'High-Level Design (HLD)', 'Backend System Design',
    'Authentication & Authorization', 'Microservices', 'Clean Architecture',
  ],
};

export const achievements = [
  {
    title: 'Research Paper: Phishing and Web Hacking',
    role: 'Co-Author · IEEE Conference',
    description:
      'Published peer-reviewed research analyzing phishing attack vectors and web application vulnerabilities, with actionable mitigation strategies for enterprise security — presented at an IEEE Conference.',
    icon: '📄',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
