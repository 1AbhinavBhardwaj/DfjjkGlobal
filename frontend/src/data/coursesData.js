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
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
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
  },
  {
    id: 'scrum-master-certification',
    sku: 'DFJJK-AGILE-SM-101',
    name: 'Scrum Master Certification & Ceremonies Masterclass',
    summary: 'Master Agile Scrum ceremonies, Daily Standups, Jira & Confluence workflows, and complete PSM / CSM exam preparation.',
    description: 'A practical, industry-focused course designed for current and aspiring Scrum Masters. Master the Agile Manifesto, facilitate high-impact Scrum ceremonies (Daily Standups, Sprint Planning, Reviews, Retrospectives), manage team workflows in Jira & Confluence, and prepare thoroughly for PSM I / CSM certification.',
    price: '349.00',
    duration: '4 Weeks (6 Live Workshops)',
    category: 'Agile & Project Management',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      'Agile Manifesto & Scrum Values',
      'Scrum Ceremonies Facilitation',
      'Daily Standups & Retrospectives',
      'Jira Board & Backlog Setup',
      'Confluence Team Workspaces',
      'PSM I / CSM Exam Preparation'
    ],
    learningJourney: [
      'Module I: Agile Scrum Ceremonies',
      'Module II: Jira & Confluence',
      'Module III: Exam Prep & Certification'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module I',
        title: 'What is Agile Scrum Ceremonies?',
        topics: [
          'Agile Manifesto Principles & Core Values',
          'Daily Standups: Purpose, Facilitation & Common Pitfalls',
          'Sprint Planning & Commitment Techniques',
          'Sprint Review & Stakeholder Demo Practices',
          'Sprint Retrospectives & Continuous Action Items'
        ]
      },
      {
        number: 'Module II',
        title: 'Jira & Confluence Workflows',
        topics: [
          'Configuring Scrum Boards & Backlogs in Jira',
          'Writing User Stories, Story Points & Estimation',
          'Building Team Knowledge Bases in Confluence',
          'Tracking Burndown Charts, Velocity & Sprint Reports'
        ]
      },
      {
        number: 'Module III',
        title: 'Exam Prep and Certification',
        topics: [
          'PSM I / CSM Exam Structure, Strategy & Time Management',
          'Full-Length Mock Exams with Detailed Question Analysis',
          'Real-World Scenario Questions & Defensive Coaching'
        ]
      }
    ],
    learningOutcomes: [
      'Facilitate effective Scrum events (Daily Standups, Planning, Reviews, Retrospectives)',
      'Manage Agile project delivery using Jira boards and Confluence documentation',
      'Coach cross-functional engineering teams on self-organization and velocity',
      'Pass Professional Scrum Master (PSM I) or Certified ScrumMaster (CSM) exams'
    ],
    capstones: [
      {
        title: 'Enterprise Agile Transformation & Jira Workspace Setup',
        description: 'Set up an end-to-end Agile Scrum workspace for a software product team in Jira and Confluence, including backlog grooming, sprint setup, burndown metrics, and retrospective action board.'
      }
    ],
    interviewPrep: [
      'Top 50 Scrum Master Interview Questions & Defensive Answers',
      'Live Mock Retrospective & Conflict Facilitation Simulations',
      'Agile Resume Optimization & LinkedIn Portfolio Setup'
    ],
    faqs: [
      {
        question: 'Does this course prepare me for PSM I or CSM certifications?',
        answer: 'Yes! The curriculum aligns directly with Scrum.org (PSM I) and Scrum Alliance (CSM) competencies, complete with mock exam practice.'
      },
      {
        question: 'Will I get hands-on experience with Jira and Confluence?',
        answer: 'Yes, you will work directly inside live Jira & Confluence cloud instances to configure boards, backlogs, and team documentation.'
      }
    ]
  },
  {
    id: 'product-owner-masterclass',
    sku: 'DFJJK-AGILE-PO-201',
    name: 'Agile Product Owner Masterclass',
    summary: 'Master product vision, customer discovery, backlog management, user stories, acceptance criteria, and product roadmapping.',
    description: 'An intensive masterclass for Product Owners, Product Managers, and Business Analysts. Learn to define compelling product visions, identify stakeholders, construct prioritized product backlogs based on value and risk, write clear user stories with acceptance criteria, and collaborate effectively with Scrum Developers and Scrum Masters.',
    price: '399.00',
    duration: '6 Weeks Interactive Program',
    category: 'Agile & Project Management',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      'Agile Product Owner Role Foundations',
      'Product Vision & Customer Personas',
      'Product Backlog Management',
      'User Story Writing & Acceptance Criteria',
      'Value & Risk Prioritization Frameworks',
      'Product Discovery & Roadmapping',
      'Developer & Scrum Master Collaboration',
      'Outcome Measurement & KPI Metrics'
    ],
    learningJourney: [
      'Module I: Agile PO & Product Vision',
      'Module II: Backlog & User Stories',
      'Module III: Discovery & Roadmaps'
    ],
    type: 'module',
    modules: [
      {
        number: 'Module I',
        title: 'Agile Product Ownership & Vision',
        topics: [
          'Understand Agile, Scrum, and the Product Owner role.',
          'Define and communicate a compelling product vision.',
          'Identify customers, users, and stakeholders.'
        ]
      },
      {
        number: 'Module II',
        title: 'Product Backlog & User Story Engineering',
        topics: [
          'Develop and manage a Product Backlog.',
          'Write effective user stories and acceptance criteria.',
          'Prioritize work based on value, risk, and customer needs.'
        ]
      },
      {
        number: 'Module III',
        title: 'Product Discovery & Stakeholder Alignment',
        topics: [
          'Facilitate product discovery and stakeholder collaboration.',
          'Create and communicate product goals and roadmaps.',
          'Work effectively with Scrum Developers and Scrum Masters.',
          'Measure product outcomes and continuously improve the product.'
        ]
      }
    ],
    learningOutcomes: [
      'Craft clear, outcome-driven product visions aligned with business goals',
      'Define target personas, user segments, and key enterprise stakeholders',
      'Write high-quality user stories using Given-When-Then acceptance criteria',
      'Prioritize backlogs using MoSCoW, RICE, and value vs. risk matrices',
      'Build visual product roadmaps and facilitate continuous product discovery',
      'Partner with Scrum Developers and Scrum Masters for predictable sprint execution'
    ],
    capstones: [
      {
        title: 'SaaS Product Roadmap & Backlog Master Blueprint',
        description: 'Construct a complete Product Owner artifact package for a SaaS application: Product Vision Statement, User Personas, Prioritized Backlog (Epics & Stories with Acceptance Criteria), and a 12-Month Interactive Roadmap.'
      }
    ],
    interviewPrep: [
      'Product Owner & Product Manager Scenario Interview Guide',
      'Mock User Story Grooming & Stakeholder Alignment Interviews',
      'Product Portfolio Review & Resume Coaching'
    ],
    faqs: [
      {
        question: 'Who should enroll in this Product Owner course?',
        answer: 'Ideal for aspiring Product Owners, Product Managers, Business Analysts, Project Managers, and domain experts moving into product leadership.'
      },
      {
        question: 'Will I learn prioritization frameworks like RICE and MoSCoW?',
        answer: 'Yes! You will apply RICE, MoSCoW, Kano Model, and WSJF frameworks directly on real product backlogs.'
      }
    ]
  },
  {
    id: 'project-management-professional',
    sku: 'DFJJK-PM-PROFESSIONAL',
    name: 'Comprehensive Project Management Professional (PMP, Agile & Hybrid)',
    summary: 'Master PM Fundamentals, Methodologies (Waterfall, Agile, Kanban, Hybrid), Initiation, Stakeholder RACI, Scope & WBS, and Scheduling.',
    description: 'An intensive 8-module enterprise project management program. Go from project initiation to full project lifecycle execution covering the Triple Constraint, project charters, power/interest grids, scope baselines, requirements traceability matrices (RTM), Work Breakdown Structure (WBS) decomposition, and activity dependency scheduling.',
    price: '449.00',
    duration: '8 Modules Comprehensive Program',
    category: 'Agile & Project Management',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '8 PM Modules & Hands-on Workshops',
      'Triple Constraint: Scope, Schedule & Cost',
      'Waterfall, Agile, Scrum, Kanban & Hybrid',
      'Complete Project Charter Development',
      'Power/Interest Grid & RACI Matrix',
      'Requirements Traceability Matrix (RTM)',
      'Work Breakdown Structure (WBS)',
      'Activity Dependencies & Critical Path'
    ],
    learningJourney: [
      'Module 1: PM Fundamentals',
      'Module 2: Methodologies',
      'Module 3: Project Initiation',
      'Module 4: Stakeholders',
      'Module 5: Scope Management',
      'Module 6: Requirements',
      'Module 7: WBS',
      'Module 8: Scheduling'
    ],
    type: 'module',
    modules: [
      {
        number: 'MODULE 1',
        title: 'Project Management Fundamentals',
        topics: [
          'What is a project?',
          'What is project management?',
          'Project vs. operations',
          'Project manager responsibilities',
          'Project lifecycle & success criteria',
          'Project constraints & governance',
          'Project management methodologies',
          'The Triple Constraint: Scope, Schedule, Cost (Also consider Quality, Resources, Risk, Stakeholders)',
          'Workshop: Identify the characteristics and constraints of a real-world project.'
        ]
      },
      {
        number: 'MODULE 2',
        title: 'Project Management Methodologies',
        topics: [
          'Waterfall (Best used for stable requirements)',
          'Agile (Best used for changing requirements)',
          'Scrum (Best used for iterative product development)',
          'Kanban (Best used for continuous flow)',
          'Hybrid (Best used for combination of approaches)',
          'Lean, Iterative & Incremental approaches',
          'Workshop: Select the appropriate methodology for five different projects.'
        ]
      },
      {
        number: 'MODULE 3',
        title: 'Project Initiation',
        topics: [
          'Project idea, Business case & Feasibility analysis',
          'Project selection & objectives',
          'Project charter, sponsor & manager authority',
          'Initial stakeholder identification & high-level requirements',
          'Developing Project Charter: Purpose, Objectives, Scope, Deliverables, Stakeholders, Budget/Schedule assumptions, Risks',
          'Workshop: Create a complete Project Charter.'
        ]
      },
      {
        number: 'MODULE 4',
        title: 'Stakeholder Management',
        topics: [
          'Identifying stakeholders & stakeholder analysis',
          'Managing stakeholder expectations & influence',
          'Stakeholder engagement & communication requirements',
          'Managing difficult stakeholders',
          'Tools: Stakeholder Register, Power/Interest Grid, RACI Matrix, Stakeholder Engagement Assessment',
          'Workshop: Create a stakeholder management plan.'
        ]
      },
      {
        number: 'MODULE 5',
        title: 'Project Scope Management',
        topics: [
          'Project scope vs. Product scope',
          'Scope boundaries & Scope baseline',
          'Scope validation, control & preventing scope creep',
          'Scope Statement: In-scope, Out-of-scope, Deliverables, Assumptions, Constraints, Acceptance criteria',
          'Workshop: Develop a Project Scope Statement.'
        ]
      },
      {
        number: 'MODULE 6',
        title: 'Requirements Management',
        topics: [
          'Requirements gathering: Business, Functional & Non-functional requirements',
          'Requirements analysis, prioritization, validation & traceability',
          'Techniques: Interviews, Workshops, Surveys, Observation, Document analysis, Brainstorming',
          'Workshop: Create a Requirements Traceability Matrix.'
        ]
      },
      {
        number: 'MODULE 7',
        title: 'Work Breakdown Structure (WBS)',
        topics: [
          'What is a WBS? & WBS principles',
          'Deliverable decomposition & Work packages',
          'Activities & WBS Dictionary',
          'Example WBS: Project → Planning → Design → Development → Testing → Deployment → Training → Project Closure',
          'Workshop: Create a complete WBS for an IT project.'
        ]
      },
      {
        number: 'MODULE 8',
        title: 'Project Scheduling',
        topics: [
          'Project activities & activity sequencing',
          'Dependencies & milestones',
          'Duration estimates & schedule development',
          'Schedule baseline & schedule control',
          'Dependency Types: Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)'
        ]
      }
    ],
    learningOutcomes: [
      'Distinguish between projects and operations while selecting appropriate methodologies (Waterfall, Agile, Hybrid)',
      'Author robust Project Charters with business cases, budget/schedule assumptions, and sponsor sign-off',
      'Build Stakeholder Registers, Power/Interest Grids, and RACI Matrices for organizational alignment',
      'Create Project Scope Statements and implement change control to prevent scope creep',
      'Conduct requirements gathering using 6 key techniques and build Requirements Traceability Matrices',
      'Decompose enterprise projects into Work Breakdown Structures (WBS) and detailed WBS Dictionaries',
      'Sequence project activities using 4 dependency types and construct schedule baselines'
    ],
    capstones: [
      {
        title: 'Enterprise IT Infrastructure & Software Project Management Blueprint',
        description: 'Build a full project management execution binder for an enterprise IT project: Business Case, Project Charter, RACI Matrix, Scope Statement, Requirements Traceability Matrix, WBS Dictionary, and Activity Schedule Baseline.'
      }
    ],
    interviewPrep: [
      'PMP Scenario-Based Technical Interview Questions & Solutions',
      'Mock Project Manager Stakeholder & Risk Mitigation Discussions',
      'Project Management Resume & PMO Portfolio Coaching'
    ],
    faqs: [
      {
        question: 'Does this course align with PMI PMP standards?',
        answer: 'Yes! The course curriculum incorporates PMBOK 7th Edition concepts, Agile Practice Guide principles, and hybrid project management frameworks.'
      },
      {
        question: 'Are practical workshops included in every module?',
        answer: 'Yes! Every module includes hands-on workshops where you build real PM artifacts like Charters, RACI matrices, WBS diagrams, and RTMs.'
      }
    ]
  },
  {
    id: 'cybersecurity-professional-program',
    sku: 'DFJJK-CYBER-FULL-28',
    name: 'Cybersecurity Professional Training Program (28 Modules & Capstone)',
    summary: 'Master end-to-end Cybersecurity: Fundamentals, Threat Landscape, Networking, OS Security, IAM, Cryptography, SOC, Forensics, Cloud, Zero Trust, GRC & Capstone.',
    description: 'A comprehensive, zero-to-hero 28-module cybersecurity professional program taking students from foundational security principles to practical SOC operations, threat hunting, digital forensics, cloud security, zero trust architecture, GRC compliance frameworks (NIST, ISO 27001, CIS), ethical hacking, leadership, and certification pathways (Security+, CySA+, CISSP). Includes a full 4-phase capstone project.',
    price: '599.00',
    duration: '12-Week Comprehensive Program',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    active: true,
    highlights: [
      '28 Modules + 4-Phase Capstone Project',
      '12-Week Structured Learning Path',
      'CIA Triad & Threat Actor Analysis',
      'Networking & Operating System Security',
      'IAM, RBAC, MFA & SSO Implementation',
      'Cryptography, PKI & TLS Security',
      'SOC Operations & SIEM (Splunk, Sentinel)',
      'Incident Response & Digital Forensics',
      'Cloud Security (AWS, Azure, GCP)',
      'Zero Trust Security Architecture',
      'GRC Frameworks (NIST CSF/RMF, ISO 27001, CIS)',
      'Privacy (GDPR, CCPA, HIPAA) & BCP/DR',
      'Hands-on Tools (Wireshark, Nmap, Splunk, Nessus)',
      'Ethical Hacking & Defensive Security',
      'Career Prep & Certifications (Security+, CISSP)'
    ],
    learningJourney: [
      'Week 1: Fundamentals & Threats (Mod 1–2)',
      'Week 2: Networking & OS Security (Mod 3–4)',
      'Week 3: IAM & Cryptography (Mod 5–6)',
      'Week 4: Network, Endpoint & Malware (Mod 7–9)',
      'Week 5: Phishing & Vulnerability (Mod 10–11)',
      'Week 6: SOC, IR & Forensics (Mod 12–14)',
      'Week 7: Cloud, App & Data Security (Mod 15–17)',
      'Week 8: Wireless, Zero Trust & Risk (Mod 18–20)',
      'Week 9: GRC, Privacy & DR (Mod 21–23)',
      'Week 10: Awareness, Tools & Hacking (Mod 24–26)',
      'Week 11: Leadership & Career Prep (Mod 27–28)',
      'Week 12: Cybersecurity Capstone Project'
    ],
    type: 'module',
    modules: [
      {
        number: 'MODULE 1',
        title: 'Introduction to Cybersecurity',
        topics: [
          'What is cybersecurity?',
          'Information security vs. cybersecurity',
          'Cybersecurity career landscape & objectives',
          'Threats, vulnerabilities, and risks',
          'Security controls, policies, and security awareness',
          'CIA Triad: Confidentiality, Integrity, Availability',
          'Workshop: Analyze a simulated security breach and identify CIA issues.'
        ]
      },
      {
        number: 'MODULE 2',
        title: 'Cybersecurity Threat Landscape',
        topics: [
          'Threat actors: Cybercriminals, Insider threats, Nation-states, Hacktivists, Organized cybercrime',
          'Attack surfaces & Cyber kill chain concepts',
          'Common Threats: Phishing, Malware, Ransomware, Credential theft, Social engineering, DoS, Data breaches, Supply-chain attacks',
          'Workshop: Analyze a fictional cyberattack and identify attacker objectives and methods.'
        ]
      },
      {
        number: 'MODULE 3',
        title: 'Networking Fundamentals',
        topics: [
          'LAN/WAN, TCP/IP, OSI 7-Layer model, IP addresses, Subnets, DNS, DHCP, HTTP/HTTPS, TCP/UDP, Ports and protocols',
          'Routers, Switches, Firewalls, VPNs',
          'Practical Lab: Use a controlled lab environment to examine network traffic and identify protocols.'
        ]
      },
      {
        number: 'MODULE 4',
        title: 'Operating System Security',
        topics: [
          'Windows and Linux security fundamentals',
          'User accounts, Permissions, File systems, Processes, Services',
          'System logs, Security updates, Patch management, Configuration management',
          'Practical Lab: Review operating-system security settings in a sandbox environment.'
        ]
      },
      {
        number: 'MODULE 5',
        title: 'Identity & Access Management (IAM)',
        topics: [
          'Authentication, Authorization, Accounting (AAA)',
          'Identity lifecycle, User provisioning, Access reviews, Least privilege, Privileged accounts',
          'Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), Single Sign-On (SSO)',
          'Practical Exercise: Design an access-control model for a fictional organization.'
        ]
      },
      {
        number: 'MODULE 6',
        title: 'Cryptography',
        topics: [
          'Encryption fundamentals: Symmetric vs. Asymmetric encryption',
          'Hashing, Digital signatures, Certificates, Public Key Infrastructure (PKI)',
          'TLS, Encryption at rest & in transit, Key management',
          'Practical Exercise: Compare encryption, hashing, and digital signatures and determine usage.'
        ]
      },
      {
        number: 'MODULE 7',
        title: 'Network Security',
        topics: [
          'Firewalls, IDS, IPS, Network segmentation, VLANs, VPN, Proxy servers',
          'Secure network architecture, Zero Trust, Network Access Control, Wireless security',
          'Practical Lab: Design a secure network architecture for a small company.'
        ]
      },
      {
        number: 'MODULE 8',
        title: 'Endpoint Security',
        topics: [
          'Endpoint protection, Antivirus, EDR, Mobile device security & management',
          'Patch management, Application control, Host-based firewalls, Endpoint monitoring',
          'Workshop: Develop an endpoint security policy for an organization.'
        ]
      },
      {
        number: 'MODULE 9',
        title: 'Malware & Ransomware',
        topics: [
          'Viruses, Worms, Trojans, Spyware, Rootkits, Keyloggers, Ransomware, Botnets',
          'Malware delivery mechanisms, prevention & response strategies',
          'Case Study: Analyze a fictional ransomware incident and develop a response plan.'
        ]
      },
      {
        number: 'MODULE 10',
        title: 'Social Engineering & Phishing',
        topics: [
          'Phishing, Spear phishing, Whaling, Smishing, Vishing, Business Email Compromise (BEC)',
          'Social engineering tactics, Credential harvesting, Security awareness training',
          'Practical Exercise: Analyze simulated email examples and identify suspicious indicators.'
        ]
      },
      {
        number: 'MODULE 11',
        title: 'Vulnerability Management',
        topics: [
          'Vulnerability, Threat, Risk, Exposure concepts',
          'Vulnerability identification, scanning, Risk scoring (CVE, CVSS)',
          'Patch management, Remediation & Verification workflows',
          'Practical Lab: Perform a vulnerability assessment against intentionally vulnerable systems.'
        ]
      },
      {
        number: 'MODULE 12',
        title: 'Security Operations Center (SOC)',
        topics: [
          'What is a SOC?, SOC roles, Security monitoring, Alert management',
          'Log management, Event correlation, Threat detection & Escalation workflows',
          'SIEM Concepts: Log collection, Event correlation, Alerts, Dashboards, Detection rules',
          'Practical Lab: Analyze sample security logs and identify suspicious activity.'
        ]
      },
      {
        number: 'MODULE 13',
        title: 'Incident Response',
        topics: [
          'Incident identification, classification & Incident response lifecycle',
          'Lifecycle steps: Preparation → Detection → Analysis → Containment → Eradication → Recovery → Lessons Learned',
          'Incident documentation & Evidence preservation',
          'Workshop: Respond to a simulated cybersecurity incident.'
        ]
      },
      {
        number: 'MODULE 14',
        title: 'Digital Forensics Fundamentals',
        topics: [
          'Digital evidence, Evidence handling & Chain of custody',
          'Disk images, File metadata, System logs, Network evidence, Timeline analysis, Forensic reporting',
          'Practical Lab: Examine a provided forensic dataset in a controlled environment.'
        ]
      },
      {
        number: 'MODULE 15',
        title: 'Cloud Security',
        topics: [
          'Cloud fundamentals (IaaS, PaaS, SaaS) & Shared responsibility model',
          'Cloud identity, access controls, encryption, logging & security monitoring',
          'Misconfiguration risks across AWS, Azure, and Google Cloud',
          'Workshop: Develop a basic cloud security architecture.'
        ]
      },
      {
        number: 'MODULE 16',
        title: 'Application Security & OWASP Top 10',
        topics: [
          'Secure Software Development Lifecycle (SSDL) & Secure coding',
          'Application vulnerabilities, Authentication, Authorization, Input validation, Session & API security',
          'OWASP Top 10 Risks: Broken access control, Injection, Authentication failures, Security misconfiguration, Cryptographic failures',
          'Lab: Identify security weaknesses in an intentionally vulnerable training application.'
        ]
      },
      {
        number: 'MODULE 17',
        title: 'Database & Data Security',
        topics: [
          'Database security, Data loss prevention (DLP), Data encryption, Access controls, Auditing',
          'Data classification levels: Public, Internal, Confidential, Restricted',
          'Backup security, Data retention & Data destruction policies',
          'Workshop: Create a data classification policy.'
        ]
      },
      {
        number: 'MODULE 18',
        title: 'Mobile & Wireless Security',
        topics: [
          'Wireless & Wi-Fi security (WPA2/WPA3), Mobile security & BYOD',
          'Mobile app security, Device encryption, Mobile Device Management (MDM), Remote wipe',
          'Workshop: Develop a secure BYOD policy.'
        ]
      },
      {
        number: 'MODULE 19',
        title: 'Zero Trust Security',
        topics: [
          'Zero Trust core principles ("Never trust, always verify")',
          'Identity-based security, Least privilege, Continuous verification',
          'Micro-segmentation, Device trust & Application access controls',
          'Workshop: Transform a traditional network architecture into a Zero Trust model.'
        ]
      },
      {
        number: 'MODULE 20',
        title: 'Cybersecurity Risk Management',
        topics: [
          'Risk identification, assessment, analysis & treatment (Acceptance, Mitigation, Transfer, Avoidance)',
          'Risk register & Risk Formula: Risk = Likelihood × Impact',
          'Workshop: Create a cybersecurity risk register and risk treatment plan.'
        ]
      },
      {
        number: 'MODULE 21',
        title: 'Governance, Risk & Compliance (GRC)',
        topics: [
          'Cybersecurity governance: Policies, Standards, Procedures, Controls',
          'Risk management, Compliance & Auditing',
          'Security Frameworks: NIST Cybersecurity Framework, NIST RMF, ISO 27001, CIS Controls, COBIT, SOC 2',
          'Workshop: Map organizational security controls to a cybersecurity framework.'
        ]
      },
      {
        number: 'MODULE 22',
        title: 'Privacy & Data Protection',
        topics: [
          'Data privacy, Personal information, Sensitive data & Privacy principles',
          'Data minimization, retention, consent & breach notification concepts',
          'Regulations: GDPR, CCPA/CPRA, HIPAA security/privacy, State privacy laws'
        ]
      },
      {
        number: 'MODULE 23',
        title: 'Business Continuity & Disaster Recovery',
        topics: [
          'Business continuity & Disaster recovery planning',
          'Business Impact Analysis (BIA), Recovery Time Objective (RTO), Recovery Point Objective (RPO)',
          'Backup strategies, Disaster recovery testing & Crisis management',
          'Workshop: Create a Business Continuity and Disaster Recovery plan.'
        ]
      },
      {
        number: 'MODULE 24',
        title: 'Security Awareness & Human Risk',
        topics: [
          'Security awareness programs & Employee training',
          'Password security, MFA, Phishing awareness & Social engineering prevention',
          'Insider risk & Security culture building',
          'Workshop: Create a cybersecurity awareness campaign for employees.'
        ]
      },
      {
        number: 'MODULE 25',
        title: 'Cybersecurity Tools & Hands-On Labs',
        topics: [
          'Network Tools: Wireshark, Nmap',
          'Security Monitoring: Splunk, Microsoft Sentinel',
          'Vulnerability Management: Nessus scanner',
          'Endpoint & OS: Microsoft Defender, Linux command line',
          'Framework Resources: NIST resources, CIS Controls'
        ]
      },
      {
        number: 'MODULE 26',
        title: 'Ethical Hacking Fundamentals',
        topics: [
          'Ethical hacking concepts, Authorization & Rules of engagement',
          'Reconnaissance concepts & Vulnerability identification methodology',
          'Penetration testing lifecycle, Reporting & Remediation',
          'Emphasis on defensive security and authorized testing'
        ]
      },
      {
        number: 'MODULE 27',
        title: 'Cybersecurity Leadership & Management',
        topics: [
          'Security leadership, program management & security policies',
          'Security budgets, metrics & executive reporting',
          'Security risk communication, Vendor risk & Third-party risk management',
          'Cybersecurity strategy',
          'Workshop: Create a cybersecurity strategy for a mid-sized organization.'
        ]
      },
      {
        number: 'MODULE 28',
        title: 'Cybersecurity Career & Certification Preparation',
        topics: [
          'Entry-Level Paths: Security Analyst, SOC Analyst, GRC Analyst, Vulnerability Analyst, IAM Analyst, Security Admin',
          'Beginner Certs: CompTIA Security+',
          'Intermediate Certs: CySA+, SSCP, Certified Ethical Hacker (CEH)',
          'Advanced Certs: CISSP, CISM, CRISC',
          'Exam requirements & career preparation strategies'
        ]
      }
    ],
    learningOutcomes: [
      'Explain core cybersecurity concepts and analyze cyber threats and vulnerabilities',
      'Configure networking, operating system security, IAM, MFA, and SSO models',
      'Apply cryptography, PKI, digital signatures, and TLS protocols',
      'Operate SOC tools (Splunk, Sentinel, Wireshark, Nmap, Nessus) for threat detection and incident response',
      'Develop incident response plans and perform digital forensics timeline analysis',
      'Design cloud security, zero trust micro-segmentation, and endpoint security controls',
      'Align organizational security to NIST CSF, ISO 27001, CIS Controls, GDPR, CCPA, and HIPAA',
      'Formulate Business Continuity & Disaster Recovery plans with RTO/RPO targets',
      'Conduct authorized ethical hacking penetration tests and present executive security strategies',
      'Prepare for CompTIA Security+, CySA+, CEH, and CISSP certification exams'
    ],
    capstones: [
      {
        title: 'Simulated Enterprise Cybersecurity Engagement Capstone Project',
        description: 'Comprehensive 4-phase simulated cybersecurity engagement for a fictional enterprise: Phase 1 (Asset, Threat & Risk Assessment), Phase 2 (Security Architecture for Network, IAM, Endpoint, Cloud & Data), Phase 3 (Incident Response simulation: Phishing → Credential Compromise → Unauthorized Access → Data Exposure), and Phase 4 (GRC Documentation: Security policies, Risk register, IR plan, BCP).'
      }
    ],
    interviewPrep: [
      'Cybersecurity Analyst & SOC Technical Mock Interviews',
      'GRC Framework Mapping & Incident Response Scenario Practice',
      'Cybersecurity Capstone Portfolio Review & Resume Preparation'
    ],
    faqs: [
      {
        question: 'Is this program suitable for beginners with no cybersecurity background?',
        answer: 'Yes! The 28-module program starts from foundational networking and OS principles before advancing to SOC operations, cloud security, ethical hacking, and GRC.'
      },
      {
        question: 'Which certifications does this course prepare me for?',
        answer: 'The program directly prepares you for CompTIA Security+, CySA+, CEH, SSCP, and provides strong foundational knowledge for CISSP and CISM exams.'
      }
    ]
  }
];

export const getCourseBySku = (sku) => {
  if (!sku) return null;
  return CATALOG_COURSES.find((c) => c.sku.toUpperCase() === sku.toUpperCase());
};

