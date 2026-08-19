export const CATALOG_COURSES = [
  {
    id: 'power-bi-excellence',
    sku: 'DFJJK-DS-POWERBI',
    name: 'Power BI: Data Visualization Excellence',
    summary: 'Master Power BI, Microsoft Fabric, advanced DAX, data modeling, and performance optimization to build executive-ready interactive dashboards.',
    description: 'An end-to-end professional program transforming raw datasets into high-impact strategic insights. Learn Power Query (M Language), complex DAX calculations, semantic data modeling, Power BI Service administration, and Microsoft Fabric integration while preparing for the Microsoft PL-300 certification.',
    price: '349.00',
    duration: '10–12 Live Interactive Sessions',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '10–12 Live Interactive Sessions',
      'Microsoft Fabric Integration',
      'Hands-on Power BI Projects',
      'Power Query (M Language)',
      'Advanced DAX',
      'Interactive Dashboard Design',
      'Power BI Service',
      'Performance Optimization',
      'PL-300 Preparation',
      'Capstone Project'
    ],
    learningJourney: [
      'Power BI Basics',
      'Data Sources',
      'Power Query',
      'Data Modeling',
      'DAX',
      'Advanced DAX',
      'Visualization',
      'Power BI Service',
      'Performance Optimization',
      'Capstone Project'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module 1',
        title: 'Introduction to Power BI',
        topics: [
          'Overview of Power BI Ecosystem (Desktop, Service, Mobile)',
          'Understanding Business Intelligence & Data Analytics Workflows',
          'Navigating Power BI Desktop Interface & Canvas',
          'Building your first interactive report in 30 minutes'
        ]
      },
      {
        number: 'Module 2',
        title: 'Connecting to Data Sources',
        topics: [
          'Connecting to Excel, CSV, SQL Server, and Web APIs',
          'Import Mode vs. DirectQuery vs. Live Connection',
          'Data privacy levels & data refresh strategies',
          'Integrating with Microsoft Fabric Lakehouses & Warehouses'
        ]
      },
      {
        number: 'Module 3',
        title: 'Power Query (M Language)',
        topics: [
          'ETL Concepts & Data Cleaning Best Practices',
          'Text, Number, and Date Transformations',
          'Pivoting, Unpivoting, and Transposing Data',
          'Merging & Appending Queries',
          'Introduction to M Code & Custom Function Creation'
        ]
      },
      {
        number: 'Module 4',
        title: 'Data Modeling / Semantic Model',
        topics: [
          'Star Schema vs. Snowflake Schema Architecture',
          'Fact Tables vs. Dimension Tables',
          'Managing Relationships & Directionality (Active/Inactive, Bi-directional)',
          'Creating Date/Calendar Tables with DAX & M',
          'Role-Playing Dimensions & Bridge Tables'
        ]
      },
      {
        number: 'Module 5',
        title: 'DAX Fundamentals',
        topics: [
          'Calculated Columns vs. DAX Measures',
          'Row Context vs. Filter Context',
          'Aggregation Functions (SUM, AVERAGE, COUNTROWS, DISTINCTCOUNT)',
          'Filter Functions (CALCULATE, FILTER, ALL, ALLEXCEPT, USERELATIONSHIP)'
        ]
      },
      {
        number: 'Module 6',
        title: 'Advanced DAX',
        topics: [
          'Time Intelligence Functions (YTD, MTD, SAMEPERIODLASTYEAR, DATEADD)',
          'Iterator Functions (SUMX, AVERAGEX, RANKX)',
          'Variables in DAX (VAR / RETURN)',
          'Handling Blank Values, Errors, and Complex Conditional Aggregation',
          'Row-Level Security (RLS) & Dynamic Security Rules'
        ]
      },
      {
        number: 'Module 7',
        title: 'Data Visualization',
        topics: [
          'Choosing the Right Visuals (Bar, Line, Combo, Matrix, Cards, Scatter)',
          'Customizing Color Schemes, Typography, and Grid Alignments',
          'Designing Visual Hierarchy for Executive Dashboards',
          'Using Tooltips, Bookmarks, and Selection Panes for Interactive Storytelling'
        ]
      },
      {
        number: 'Module 8',
        title: 'Advanced Visualization',
        topics: [
          'Custom Visuals from AppSource & Deneb/Vega-Lite integration',
          'Decomposition Trees, Key Influencers, and Smart Narrative AI Visuals',
          'Drill-down, Drill-through, and Page Navigation UX',
          'Mobile Layout Optimization & Responsive Visual Formatting'
        ]
      },
      {
        number: 'Module 9',
        title: 'Power BI Service',
        topics: [
          'Publishing Reports & Managing Workspaces',
          'Creating Dashboards, Tiles, and Data Alerts',
          'Configuring Scheduled Data Refresh & On-Premises Data Gateways',
          'Sharing Reports, Apps, and Row-Level Security (RLS) Roles'
        ]
      },
      {
        number: 'Module 10',
        title: 'Performance Optimization & Capstone Project',
        topics: [
          'Performance Analyzer Tool & DAX Studio Profiling',
          'Optimizing DAX Expressions & Reducing Data Model Footprint',
          'Incremental Refresh & Aggregations',
          'End-to-End Enterprise BI Dashboard Capstone Presentation',
          'Microsoft PL-300 Exam Structure & Preparation Guide'
        ]
      }
    ],
    learningOutcomes: [
      'Build interactive dashboards',
      'Write DAX measures confidently',
      'Design optimized data models',
      'Publish and share reports',
      'Optimize report performance',
      'Become interview ready for Power BI roles'
    ],
    capstones: [
      {
        title: 'Enterprise Executive Financial & Sales Analytics Dashboard',
        description: 'Design a multi-page interactive Power BI report connecting live sales data, calculating dynamic KPI benchmarks, inventory turnover, and regional forecasts with RLS.'
      }
    ],
    interviewPrep: [
      'Top 50 Power BI & DAX Interview Questions and Solutions',
      'Live Mock Technical Interviews with Senior BI Architects',
      'Resume Review & Portfolio Project Showcase Setup'
    ],
    faqs: [
      {
        question: 'Do I need prior coding knowledge for Power BI?',
        answer: 'No prior coding experience is required. We start from foundational data concepts before building up to advanced M code and DAX logic.'
      },
      {
        question: 'Does this course prepare me for the PL-300 exam?',
        answer: 'Yes! The curriculum aligns directly with Microsoft PL-300 certification objectives, complete with practice questions and exam tips.'
      }
    ]
  },
  {
    id: 'sql-unlocked',
    sku: 'DFJJK-DS-SQL',
    name: 'SQL Unlocked: Path to Data Excellence',
    summary: 'Master hands-on SQL query writing, complex joins, CTEs, subqueries, and window functions to solve real-world analytical problems.',
    description: 'A comprehensive, practice-intensive SQL masterclass designed for aspiring Data Analysts, Data Engineers, and BI Professionals. Go from fundamental data retrieval to advanced analytical queries, window functions, query optimization, and real-world enterprise database case studies.',
    price: '299.00',
    duration: '10 Live Interactive Sessions',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      'Hands-on SQL Coding',
      '10 Live Interactive Sessions',
      'Notes after every session',
      'Assignments & Practice Problems',
      'Real-world Case Study',
      'Interview Preparation'
    ],
    learningJourney: [
      'SQL Basics',
      'Data Retrieval',
      'Aggregation',
      'Joins',
      'Functions',
      'Set Operations',
      'Subqueries & CTEs',
      'Window Functions',
      'Performance Optimization',
      'Case Study & Interview Readiness'
    ],
    type: 'session',
    sessions: [
      {
        sessionNumber: 'Session 1',
        title: 'SQL Fundamentals',
        topics: [
          'Introduction',
          'SQL Server setup',
          'first database and tables'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 2',
        title: 'Table Design & Data Modification',
        topics: [
          'ALTER',
          'UPDATE',
          'DELETE',
          'Constraints'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 3',
        title: 'Data Retrieval',
        topics: [
          'SELECT',
          'WHERE',
          'ORDER BY',
          'LIKE',
          'IN'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 4',
        title: 'Aggregation',
        topics: [
          'SUM',
          'AVG',
          'COUNT',
          'GROUP BY',
          'HAVING'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 5',
        title: 'SQL Joins',
        topics: [
          'INNER',
          'LEFT',
          'RIGHT',
          'FULL joins'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 6',
        title: 'SQL Functions',
        topics: [
          'Date',
          'String',
          'CASE WHEN'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 7',
        title: 'Set Operations',
        topics: [
          'UNION',
          'UNION ALL',
          'INTERSECT',
          'EXCEPT'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 8',
        title: 'Subqueries & CTEs',
        topics: [
          'Nested Queries',
          'CTEs'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 9',
        title: 'Window Functions',
        topics: [
          'ROW_NUMBER',
          'RANK',
          'LEAD',
          'LAG'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      },
      {
        sessionNumber: 'Session 10',
        title: 'Performance & Project',
        topics: [
          'Indexes',
          'Optimization',
          'Case Study',
          'Doubts'
        ],
        deliverables: ['Notes', 'Hands-on Lab', 'Assignment']
      }
    ],
    learningOutcomes: [
      'Write SQL queries confidently',
      'Analyze datasets',
      'Optimize queries',
      'Solve interview questions',
      'Build real-world SQL projects'
    ],
    capstones: [
      {
        title: 'Enterprise E-Commerce Data Analytics & Revenue Audit',
        description: 'Audit millions of transaction records to compute user retention, customer lifetime value (CLV), churn risk, monthly recurring revenue (MRR), and sales anomalies using window functions and CTEs.'
      }
    ],
    interviewPrep: [
      'Curated List of Top 100 Real Interview SQL Questions',
      'Live Coding & Problem Solving Workshops',
      '1-on-1 Resume & SQL Portfolio Guidance'
    ],
    faqs: [
      {
        question: 'Which SQL dialect is used in this course?',
        answer: 'We cover ANSI SQL standards applicable to SQL Server, PostgreSQL, MySQL, Snowflake, and BigQuery, with practical hands-on examples.'
      },
      {
        question: 'Will I get practice datasets?',
        answer: 'Yes! You will receive realistic e-commerce, banking, and SaaS datasets with millions of rows for hands-on practice.'
      }
    ]
  },
  {
    id: 'python-ai-master-program',
    sku: 'DFJJK-DS-AI',
    name: 'Python → AI → Machine Learning → Deep Learning → NLP → Generative AI',
    summary: 'A comprehensive end-to-end AI & Data Science program covering Python, Math, ML, Neural Networks, Transformers, LLMs, RAG, and Agentic AI Systems.',
    description: 'The ultimate zero-to-hero engineering masterclass designed for developers, data scientists, and AI architects. Master Python programming, AI mathematics, Supervised & Unsupervised ML, Deep Learning with PyTorch & TensorFlow, Natural Language Processing with Transformers, and production Generative AI with RAG, Vector DBs, and Agentic Frameworks.',
    price: '699.00',
    duration: '16 Weeks Comprehensive Program',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      'End-to-End AI & Data Science Program',
      'Python Programming & DSA Stack',
      'Mathematics & Intuition Behind AI/ML',
      'Supervised & Unsupervised Machine Learning',
      'Deep Learning (ANN, CNN, RNN, LSTM)',
      'Natural Language Processing & Transformers',
      'Generative AI, Prompt Engineering & LLMs',
      'RAG & Vector Databases (FAISS, ChromaDB)',
      'Agentic AI & Multi-Agent Systems',
      'Comprehensive Capstone Projects'
    ],
    learningJourney: [
      'Python Programming',
      'Mathematics for AI',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Generative AI',
      'Capstone Projects'
    ],
    type: 'hierarchical',
    aiModules: [
      {
        moduleNumber: 'Module 1',
        title: 'Python Programming',
        subsections: [
          {
            name: 'Python Fundamentals',
            topics: [
              'Variables and Data Types',
              'Operators and Expressions',
              'Control Statements',
              'Functions and Modules',
              'Object-Oriented Programming',
              'Exception Handling',
              'File Handling'
            ]
          },
          {
            name: 'Data Structures and Algorithms',
            topics: [
              'Practical programming and problem-solving using Python'
            ]
          },
          {
            name: 'Python Data Science Stack',
            topics: [
              'NumPy',
              'Pandas',
              'Data Visualization using Matplotlib and Seaborn'
            ]
          },
          {
            name: 'Projects',
            topics: [
              'Hands-on Python projects'
            ]
          }
        ]
      },
      {
        moduleNumber: 'Module 2',
        title: 'Mathematics for AI',
        subsections: [
          {
            name: 'Core Foundations',
            topics: [
              'Linear Algebra',
              'Probability and Statistics',
              'Calculus Fundamentals',
              'Optimization Techniques',
              'Gradient Descent',
              'Loss Functions',
              'Feature Scaling',
              'Mathematical Intuition Behind Machine Learning'
            ]
          }
        ]
      },
      {
        moduleNumber: 'Module 3',
        title: 'Machine Learning',
        subsections: [
          {
            name: 'ML Core & Algorithms',
            topics: [
              'Data Preprocessing',
              'Exploratory Data Analysis',
              'Feature Engineering',
              'Feature Selection',
              'Supervised Learning',
              'Unsupervised Learning',
              'Ensemble Learning',
              'Recommendation Systems',
              'Time-Series Forecasting',
              'Model Evaluation',
              'Hyperparameter Tuning'
            ]
          },
          {
            name: 'Projects',
            topics: [
              'End-to-end Machine Learning projects'
            ]
          }
        ]
      },
      {
        moduleNumber: 'Module 4',
        title: 'Deep Learning',
        subsections: [
          {
            name: 'Deep Architectures & Frameworks',
            topics: [
              'Artificial Neural Networks (ANN)',
              'Backpropagation',
              'Activation Functions',
              'Optimizers',
              'Regularization Techniques',
              'Convolutional Neural Networks (CNN)',
              'Transfer Learning',
              'Recurrent Neural Networks (RNN)',
              'LSTM and GRU',
              'TensorFlow and Keras',
              'Deep Learning Projects'
            ]
          }
        ]
      },
      {
        moduleNumber: 'Module 5',
        title: 'Natural Language Processing',
        subsections: [
          {
            name: 'NLP & Transformers',
            topics: [
              'Text Preprocessing',
              'Tokenization',
              'Stemming and Lemmatization',
              'TF-IDF',
              'Word Embeddings',
              'Sequence Models',
              'Attention Mechanism',
              'Transformers',
              'Hugging Face Transformers',
              'Practical NLP Applications'
            ]
          }
        ]
      },
      {
        moduleNumber: 'Module 6',
        title: 'Generative AI',
        subsections: [
          {
            name: 'Generative AI & Agentic Systems',
            topics: [
              'Introduction to Large Language Models (LLMs)',
              'Prompt Engineering',
              'OpenAI APIs',
              'Hugging Face Ecosystem',
              'LangChain Framework',
              'Vector Databases (FAISS, ChromaDB)',
              'Retrieval-Augmented Generation (RAG)',
              'AI Agents and Agentic AI',
              'Multi-Agent Systems',
              'Function Calling and Tool Use',
              'Memory Management in AI Applications',
              'Streamlit and FastAPI Deployment',
              'Building Production-Ready GenAI Applications'
            ]
          }
        ]
      }
    ],
    learningOutcomes: [
      'Master Python data science stack and DSA fundamentals',
      'Build solid mathematical intuition for AI and ML algorithms',
      'Develop end-to-end Machine Learning and Deep Learning models',
      'Implement state-of-the-art NLP models using Transformers',
      'Build production RAG pipelines with Vector Databases',
      'Create autonomous Agentic AI and multi-agent systems with tool use',
      'Deploy production-ready GenAI applications with FastAPI & Streamlit'
    ],
    capstones: [
      {
        title: 'End-to-End Machine Learning Project',
        description: 'Comprehensive supervised ML pipeline with automated EDA, feature engineering, model tuning, and web deployment.'
      },
      {
        title: 'Recommendation System',
        description: 'Personalized e-commerce and media content recommendation engine using matrix factorization and collaborative filtering.'
      },
      {
        title: 'Time-Series Forecasting Project',
        description: 'Multi-step temporal forecasting system for enterprise demand and stock metrics.'
      },
      {
        title: 'Computer Vision Project',
        description: 'Object detection, image segmentation, and transfer learning pipeline with ResNet and PyTorch.'
      },
      {
        title: 'NLP Project',
        description: 'Domain-specific text classification, sentiment analysis, and named entity extraction suite.'
      },
      {
        title: 'RAG-based AI Assistant',
        description: 'Vector search knowledge assistant using FAISS/ChromaDB and LangChain to answer domain-specific documentation queries.'
      },
      {
        title: 'Agentic AI Application',
        description: 'Autonomous research AI agent capable of multi-step tool execution, function calling, and memory management.'
      },
      {
        title: 'Industry-Level Generative AI Capstone',
        description: 'Production multi-agent platform combining open-weight LLM fine-tuning, streaming FastAPI backend, and Streamlit dashboard.'
      }
    ],
    interviewPrep: [
      'Comprehensive AI & Data Science Coding Practice Suite',
      'System Design for Machine Learning & GenAI Architectures',
      '1-on-1 Mock AI Engineer Technical Interviews & Portfolio Review'
    ],
    faqs: [
      {
        question: 'Who is this program suitable for?',
        answer: 'This program is tailored for software engineers, data analysts, and IT professionals looking to transition into senior Data Science, Machine Learning, and AI Engineering roles.'
      },
      {
        question: 'Are cloud GPU resources provided for Deep Learning?',
        answer: 'Yes! All students get cloud GPU notebook environment access (Colab Pro / Modal) for model training and fine-tuning experiments.'
      }
    ]
  },
  {
    id: 'fullstack-architecture',
    sku: 'DFJJK-FULLSTACK-101',
    name: 'Enterprise Full-Stack Architecture Masterclass',
    summary: 'Master modern Java, Spring Boot, React, and cloud-native deployments for high-scale enterprise applications.',
    description: 'An intensive 12-week comprehensive program designed for developers aiming to master high-scale architecture, microservices, secure authentication, reactive systems, and state-of-the-art frontend frameworks.',
    price: '499.00',
    duration: '12 Weeks',
    category: 'Software Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '12-Week Intensive Curriculum',
      'Java 21 & Spring Boot 3 Core',
      'React 18 & Modern Hooks Architecture',
      'Microservices & REST APIs',
      'PostgreSQL & Redis Caching',
      'Docker & Cloud Deployment'
    ],
    learningJourney: [
      'Core Java & Spring Boot',
      'Data Access & JPA',
      'React Frontend Architecture',
      'Security & OAuth2',
      'Microservices',
      'DevOps & Capstone'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module 1',
        title: 'Enterprise Java & Spring Core',
        topics: [
          'Java 21 Features, Virtual Threads & Memory Model',
          'Spring Framework Architecture & Dependency Injection',
          'Spring Boot 3 Configuration & Actuator Health Diagnostics'
        ]
      },
      {
        number: 'Module 2',
        title: 'Persistence Layer & Query Optimization',
        topics: [
          'Spring Data JPA & Hibernate Performance Tuning',
          'PostgreSQL Indexing, Connection Pooling (HikariCP)',
          'Redis Caching Strategies & Cache Invalidation Patterns'
        ]
      },
      {
        number: 'Module 3',
        title: 'React 18 & Modern Frontend Architecture',
        topics: [
          'React 18 State Management & Custom Hooks',
          'Vite Build Setup, Code Splitting & Performance',
          'Consuming REST APIs with Axios Interceptors'
        ]
      },
      {
        number: 'Module 4',
        title: 'Security, Microservices & Cloud Deployment',
        topics: [
          'Spring Security 6, JWT & Stateless Authentication',
          'Dockerizing Spring Boot & React Applications',
          'Production CI/CD Pipelines & Cloud Hosting'
        ]
      }
    ],
    learningOutcomes: [
      'Architect robust production-grade backend microservices in Spring Boot',
      'Build responsive, reactive React 18 single-page applications',
      'Implement enterprise security, RBAC, and JWT authentication filters',
      'Containerize applications and deploy to production cloud infrastructure'
    ],
    capstones: [
      {
        title: 'Distributed Enterprise E-Commerce System',
        description: 'Full-stack platform with microservices backend, React frontend, payment integration, and Docker deployment.'
      }
    ],
    interviewPrep: [
      'Java & Spring Boot System Design Mock Interviews',
      'Full-Stack Architecture Portfolio Review'
    ],
    faqs: [
      {
        question: 'What are the prerequisites?',
        answer: 'Basic understanding of programming concepts and Java or JavaScript syntax.'
      },
      {
        question: 'Will I receive a certificate?',
        answer: 'Yes, a verified DFJJK Global Industry Certificate is awarded upon successful project completion.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    sku: 'DFJJK-CLOUD-DEVOP',
    name: 'Cloud DevOps & Kubernetes Specialization',
    summary: 'Deploy, auto-scale, and secure containerized infrastructure with AWS, Docker, and Kubernetes.',
    description: 'Learn production-grade CI/CD pipelines, GitOps with ArgoCD, Infrastructure as Code using Terraform, and multi-region Kubernetes clusters monitoring with Prometheus and Grafana.',
    price: '399.00',
    duration: '8 Weeks',
    category: 'Cloud & Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '8-Week Intensive Hands-on Specialization',
      'AWS Cloud Infrastructure Management',
      'Docker & Container Orchestration',
      'Kubernetes Cluster Architecture',
      'Terraform Infrastructure as Code',
      'Prometheus & Grafana Observability'
    ],
    learningJourney: [
      'Container Foundations',
      'Kubernetes Basics',
      'Infrastructure as Code',
      'GitOps & CI/CD Pipelines',
      'Observability & Security',
      'Multi-Region Production Deployment'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module 1',
        title: 'Docker Containerization & Registry Management',
        topics: ['Dockerfile Optimization', 'Multi-Stage Builds', 'Docker Compose Setup']
      },
      {
        number: 'Module 2',
        title: 'Kubernetes Cluster Architecture & Management',
        topics: ['Pods, Deployments & Services', 'Ingress Controllers', 'ConfigMaps & Secrets']
      },
      {
        number: 'Module 3',
        title: 'Terraform & Infrastructure as Code (IaC)',
        topics: ['AWS VPC & EC2 Provisioning', 'State File Management', 'Modular Terraform Setup']
      },
      {
        number: 'Module 4',
        title: 'GitOps CI/CD & Observability',
        topics: ['GitHub Actions Pipelines', 'ArgoCD Deployment', 'Prometheus Metrics & Grafana Dashboards']
      }
    ],
    learningOutcomes: [
      'Containerize enterprise workloads with minimal Docker image size',
      'Manage production Kubernetes clusters on AWS EKS',
      'Automate infrastructure provisioning using Terraform modules',
      'Establish GitOps deployment pipelines with full observability'
    ],
    capstones: [
      {
        title: 'Multi-Region Kubernetes Cloud Deployment',
        description: 'Provision AWS infrastructure via Terraform and deploy auto-scaling Kubernetes microservices with ArgoCD CI/CD.'
      }
    ],
    interviewPrep: [
      'DevOps Scenario & Troubleshooting Technical Interviews',
      'CKA / AWS Certified Solutions Architect Exam Guide'
    ],
    faqs: [
      {
        question: 'Are cloud credits provided?',
        answer: 'Yes, students receive $200 in free AWS cloud lab credits during the course.'
      },
      {
        question: 'Is this course live or self-paced?',
        answer: 'It includes live weekly interactive workshops along with on-demand HD video content.'
      }
    ]
  },
  {
    id: 'applied-ai-ml',
    sku: 'DFJJK-AI-DATA-301',
    name: 'Applied AI & Machine Learning Engineering',
    summary: 'Build intelligent LLM applications, custom neural networks, and scalable data pipelines.',
    description: 'Dive deep into PyTorch, LangChain, vector databases (Pinecone/Milvus), fine-tuning open-weight LLMs, and deploying AI models into low-latency production APIs.',
    price: '599.00',
    duration: '10 Weeks',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '10-Week AI Engineering Immersion',
      'PyTorch Neural Networks',
      'LangChain & Vector Databases',
      'Fine-Tuning Open-Source LLMs',
      'RAG System Architecture',
      'Low-Latency AI API Deployment'
    ],
    learningJourney: [
      'Python AI Stack',
      'Machine Learning Models',
      'Deep Learning & PyTorch',
      'Transformers & LLMs',
      'LangChain & RAG',
      'Production AI Deployment'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module 1',
        title: 'Foundational Machine Learning & PyTorch',
        topics: ['Data Wrangling', 'Supervised ML', 'PyTorch Tensor Mechanics']
      },
      {
        number: 'Module 2',
        title: 'Transformers & Large Language Models',
        topics: ['Attention Mechanisms', 'Hugging Face API', 'LoRA Fine-tuning']
      },
      {
        number: 'Module 3',
        title: 'RAG & Vector Database Systems',
        topics: ['Embedding Generation', 'Vector Search with Pinecone/Milvus', 'LangChain Workflows']
      },
      {
        number: 'Module 4',
        title: 'Production AI Deployment & MLOps',
        topics: ['FastAPI Microservices', 'Model Quantization', 'GPU Inference Serving']
      }
    ],
    learningOutcomes: [
      'Train custom ML models and PyTorch deep learning architectures',
      'Fine-tune open-weight LLMs like Llama and Mistral for domain tasks',
      'Build scalable RAG applications using vector databases and LangChain',
      'Serve low-latency AI endpoints using FastAPI and Docker containers'
    ],
    capstones: [
      {
        title: 'Enterprise Multi-Modal RAG AI Platform',
        description: 'Deploy a production vector search engine answering queries from technical PDFs and enterprise DBs.'
      }
    ],
    interviewPrep: [
      'AI System Design & LLM Fine-Tuning Technical Interviews',
      'MLOps & Portfolio Architecture Showcase'
    ],
    faqs: [
      {
        question: 'Do I need a GPU machine?',
        answer: 'No, cloud GPU notebooks (Google Colab Pro & Modal) will be provided for training runs.'
      }
    ]
  },
  {
    id: 'offensive-security',
    sku: 'DFJJK-CYBER-SEC-202',
    name: 'Offensive Security & Ethical Hacking',
    summary: 'Practical penetration testing, zero-trust network defense, and smart contract vulnerability auditing.',
    description: 'Hands-on labs covering web app vulnerability assessment, privilege escalation, memory exploitation, threat hunting, and modern red team tradecraft.',
    price: '449.00',
    duration: '9 Weeks',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '9-Week Practical Cybersecurity Lab',
      'Web Vulnerability Assessment (OWASP Top 10)',
      'Penetration Testing Tradecraft',
      'Privilege Escalation & Memory Exploitation',
      'Network Packet Inspection & Threat Hunting',
      'Smart Contract Auditing'
    ],
    learningJourney: [
      'Security Fundamentals',
      'Web Exploitation',
      'Network Security',
      'Privilege Escalation',
      'Defensive Security & SIEM',
      'Ethical Hacking Capstone'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module 1',
        title: 'Reconnaissance & Web Application Vulnerabilities',
        topics: ['Nmap Scanning', 'Burp Suite Pro', 'OWASP Top 10 Exploitation']
      },
      {
        number: 'Module 2',
        title: 'Network Penetration & Active Directory Security',
        topics: ['Metasploit Framework', 'Kerberoasting', 'Lateral Movement']
      },
      {
        number: 'Module 3',
        title: 'Linux & Windows Privilege Escalation',
        topics: ['Kernel Exploits', 'Misconfigurations', 'Token Manipulation']
      },
      {
        number: 'Module 4',
        title: 'Defensive SIEM & Threat Hunting',
        topics: ['Splunk Logging', 'Wireshark Analysis', 'Incident Response']
      }
    ],
    learningOutcomes: [
      'Identify and remediate web application security vulnerabilities',
      'Perform penetration tests following industry standard frameworks (PTES)',
      'Analyze network traffic to detect intrusions and malware activity',
      'Execute ethical hacking operations and write vulnerability reports'
    ],
    capstones: [
      {
        title: 'Enterprise Red Team Vulnerability Assessment & Report',
        description: 'Audit a simulated corporate network environment, exploit security gaps, and draft a professional remediation report.'
      }
    ],
    interviewPrep: [
      'OSCP / CEH Technical Interview Practice',
      'Penetration Testing Report Writing Guidance'
    ],
    faqs: [
      {
        question: 'Is legal permission required for lab exercises?',
        answer: 'All exercises are conducted in isolated sandbox environment labs owned by DFJJK Global.'
      }
    ]
  }
];

export const getCourseBySku = (sku) => {
  if (!sku) return null;
  return CATALOG_COURSES.find((c) => c.sku.toUpperCase() === sku.toUpperCase());
};
