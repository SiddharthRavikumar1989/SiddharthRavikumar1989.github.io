// ============================================
// DATA — All portfolio content
// ============================================

const PROFILE = {
  name: "Siddharth Ravikumar",
  initials: "SR",
  title: "AI Product Specialist & Full-Stack AI Architect",
  tagline: "Building intelligent systems that think, speak, and see.",
  typingTexts: [
    "Real-Time ASR & Speech Intelligence",
    "Agentic RAG & Multi-Agent Systems",
    "Micro SaaS Builder & AI Entrepreneur",
    "Computer Vision & Edge AI",
    "14+ Years Shipping Production AI"
  ],
  summary: `AI Product Specialist and Full-Stack AI Architect with <strong>14+ years</strong> of experience delivering AI-driven solutions across NLP, Generative AI, Speech Intelligence, and Geospatial Analysis. I own AI roadmaps, lead cross-functional teams, and manage end-to-end model lifecycles from concept to production — building scalable systems that deliver measurable business impact.`,
  about: [
    `I specialize in architecting production-grade AI systems at the intersection of research and product. From real-time multilingual ASR pipelines to agentic RAG frameworks for structural engineering, I build systems that solve complex domain problems at scale.`,
    `Beyond my professional work, I'm an active AI entrepreneur — building and launching Micro SaaS products that bring cutting-edge AI to niche markets. My current ventures include AI-powered accident forensics, on-device visual search, and culturally-rooted language models.`,
    `I believe in bridging the gap between AI research and real-world impact — whether that's deploying world foundation models in defense settings or building a tiny Tamil LLM that preserves classical literature.`
  ],
  email: "siddharth.ravikumar4521@gmail.com",
  phone: "+971503658915",
  linkedin: "https://www.linkedin.com/in/siddharth-ravikumar-17262a50/",
  github: "https://github.com/SiddharthRavikumar1989",
  location: "Abu Dhabi, UAE",
  availability: "Open to Collaborations"
};

const STATS = [
  { number: "14+", label: "Years Experience" },
  { number: "10+", label: "AI Products Shipped" },
  { number: "5", label: "Industries Served" },
  { number: "3", label: "Live SaaS Products" }
];

const SKILLS = [
  {
    icon: "🧠",
    title: "AI / ML Frameworks",
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "PyTorch Lightning", "Unsloth"]
  },
  {
    icon: "💬",
    title: "LLMs & Generative AI",
    tags: ["Fine-tuning (LoRA/QLoRA)", "Agentic RAG", "Multi-Agent Systems", "LangGraph", "LangChain", "Prompt Engineering"]
  },
  {
    icon: "🎤",
    title: "Speech & NLP",
    tags: ["Whisper ASR", "Speaker Diarization", "Real-time Streaming", "Arabic NLP", "Persian NLP", "Tamil NLP"]
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    tags: ["Object Detection", "OCR Pipelines", "Image Search", "Scene Analysis", "TF Lite", "Edge AI"]
  },
  {
    icon: "⚙️",
    title: "Backend & Architecture",
    tags: ["Python", "FastAPI", "Django", "WebSockets", "Microservices", "Event-Driven", "API Design"]
  },
  {
    icon: "☁️",
    title: "Cloud & MLOps",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow", "Airflow", "CI/CD", "Spark"]
  },
  {
    icon: "🗄️",
    title: "Data & Databases",
    tags: ["PostgreSQL", "Vector DBs", "Elasticsearch", "DuckDB", "Apache Kafka", "PySpark", "Pandas"]
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    tags: ["Gradio", "Streamlit", "Git", "Linux", "Jupyter", "Android SDK"]
  }
];

const EXPERIENCE = [
  {
    role: "AI Product Specialist",
    company: "SAAL AI",
    period: "Jan 2025 – Present",
    location: "Abu Dhabi",
    highlights: [
      "Architecting Agentic RAG frameworks for complex structural engineering document understanding",
      "Building real-time multilingual ASR systems for Arabic & Persian with military-grade accuracy",
      "Designing multi-agent trading intelligence platforms with LangGraph orchestration",
      "Engineering world foundation models for defense autonomy and edge deployment"
    ],
    projects: ["Agentic RAG", "Speech Intelligence", "Trading AI", "Defense AI"]
  },
  {
    role: "AI Architect",
    company: "Ministry of Rural Development",
    period: "Jun 2023 – Jan 2025",
    location: "Riyadh, Saudi Arabia",
    highlights: [
      "Built geospatial violation hotspot detection using DBSCAN/HDBSCAN on city-scale GIS data",
      "Designed spatial-temporal forecasting models for proactive urban enforcement planning",
      "Developed LLM-powered municipal compliance chatbot integrated with government backends",
      "Automated policy checklist generation and compliance validation across regulatory domains"
    ],
    projects: ["Geospatial AI", "Policy Intelligence", "Municipal Chatbot"]
  },
  {
    role: "Senior Data Scientist",
    company: "Onit",
    period: "Sep 2022 – Jun 2023",
    location: "Remote",
    highlights: [
      "Built LLM-powered legal clause extraction achieving ~95% validation reliability",
      "Fine-tuned domain-adapted legal LLMs — reduced manual review effort by 40%",
      "Designed content-aware lawyer recommendation engine using semantic similarity search"
    ],
    projects: ["Legal AI", "Contract Analytics", "Recommendation Engine"]
  },
  {
    role: "Consultant Data Scientist",
    company: "Verizon",
    period: "Nov 2018 – Sep 2022",
    location: "Chennai, India",
    highlights: [
      "Deployed network anomaly detection and churn prediction using ensemble learning & LSTMs",
      "Built large-scale NLP pipelines for conversation analysis with contextual embeddings",
      "Implemented multi-level sentiment analysis and intent classification systems"
    ],
    projects: ["Anomaly Detection", "NLP Pipelines", "Customer Analytics"]
  },
  {
    role: "Machine Learning Engineer",
    company: "UST",
    period: "Jun 2017 – Dec 2018",
    location: "India",
    highlights: [
      "Designed edge analytics infrastructure for real-time IoT datacenter monitoring",
      "Built distributed data pipeline on AWS (Spark Streaming, Kinesis, DynamoDB, Elasticsearch)",
      "Applied Bayesian inference and deep learning for sequence-based anomaly detection"
    ],
    projects: ["IoT Analytics", "Edge Computing", "AWS Pipelines"]
  }
];

// OFFICIAL PROJECTS
const OFFICIAL_PROJECTS = [
  {
    category: "client",
    icon: "🏗️",
    title: "Agentic RAG for Structural Engineering",
    company: "SAAL AI",
    description: "Multimodal RAG pipeline evolved into an Agentic framework with task-aware agents, dynamic retrieval, and reasoning loops for complex engineering document understanding.",
    tech: ["LangGraph", "Vector DB", "Airflow", "OCR", "FastAPI"],
    impact: "Company-wide standard for production RAG systems"
  },
  {
    category: "client",
    icon: "🎙️",
    title: "Multilingual ASR & Speech Intelligence",
    company: "SAAL AI",
    description: "End-to-end speech intelligence system with audio enhancement, ASR, and speaker diarization for Arabic and Persian — fine-tuned with military jargon-specific voice samples.",
    tech: ["Whisper", "NVIDIA Conformer", "WebSockets", "Docker", "Python"],
    impact: "Real-time transcription in contested environments"
  },
  {
    category: "product",
    icon: "📈",
    title: "Multi-Agent Trading Intelligence Platform",
    company: "SAAL AI",
    description: "Orchestrated News, Fundamental, Technical, and Algo-Trading agents with self-correction loops, Text-to-SQL interface, and Modern Portfolio Theory integration.",
    tech: ["LangGraph", "Multi-Agent", "Text-to-SQL", "Yahoo Finance", "FastAPI"],
    impact: "Unified investment insights with validation loops"
  },
  {
    category: "client",
    icon: "🛡️",
    title: "Defense AI — World Foundation Models",
    company: "SAAL AI",
    description: "World foundation models for defense autonomy — multimodal training across challenging physical conditions with noise-resilient sensing and symbolic reasoning.",
    tech: ["PyTorch", "Multimodal AI", "Edge Deployment", "Symbolic AI"],
    impact: "Adaptive action execution in extreme conditions"
  },
  {
    category: "client",
    icon: "🗺️",
    title: "Urban Violation Hotspot Detection",
    company: "Ministry of Rural Development",
    description: "City-scale geospatial analytics using density-based clustering on GPS-tagged enforcement data, with spatial-temporal forecasting for proactive urban planning.",
    tech: ["GeoPandas", "DBSCAN", "PostGIS", "Time-Series", "Python"],
    impact: "Proactive enforcement with predictive hotspot mapping"
  },
  {
    category: "product",
    icon: "📋",
    title: "Municipal Compliance & Policy Intelligence",
    company: "Ministry of Rural Development",
    description: "LLM-powered multi-channel chatbot for automated compliance checks, policy guidance, and regulatory content management across city development authorities.",
    tech: ["LangChain", "Embeddings", "Topic Modeling", "FastAPI"],
    impact: "Automated policy validation reducing manual review"
  },
  {
    category: "client",
    icon: "⚖️",
    title: "Legal Intelligence & Contract Analytics",
    company: "Onit",
    description: "LLM-powered clause extraction, generation, and semantic validation with a content-aware lawyer recommendation engine using embeddings and metadata ranking.",
    tech: ["LLM Fine-tuning", "Semantic Search", "NLP", "Python"],
    impact: "~95% clause validation · 40% less manual review"
  },
  {
    category: "rnd",
    icon: "🔬",
    title: "Liquid Foundation Models vs LLMs",
    company: "R&D",
    description: "Comparative evaluation of liquid neural networks vs transformer-based LLMs — analyzing reasoning stability, data efficiency, latency, and GPU utilization in streaming environments.",
    tech: ["PyTorch", "Benchmarking", "GPU Profiling"],
    impact: "Informed architecture decisions for streaming AI"
  },
  {
    category: "rnd",
    icon: "⚡",
    title: "GPU Architecture Benchmarking",
    company: "R&D",
    description: "Evaluated DGX Spark vs NVIDIA A100/H100 — benchmarking VRAM, memory bandwidth, throughput, and cost-performance across LLM inference, fine-tuning, and multimodal workloads.",
    tech: ["NVIDIA DGX", "A100", "H100", "CUDA", "Profiling"],
    impact: "Optimized GPU procurement strategy"
  }
];

// PERSONAL PROJECTS
const PERSONAL_PROJECTS = [
  {
    category: "saas",
    icon: "🔍",
    title: "TraceScene",
    status: "live",
    statusLabel: "Live Product",
    description: "AI-powered accident forensics platform for the vehicular insurance domain. Evaluates accident imagery to identify vehicle positions, infer collision dynamics, detect fraud indicators, and generate claims-ready summaries.",
    features: [
      "Vehicle position & impact zone identification",
      "Collision dynamics & fault inference",
      "Fraud inconsistency detection",
      "Structured claims-ready summaries",
      "Completely offline — custom-trained model",
      "Edge-deployable, no cloud dependency"
    ],
    tech: ["Custom CV Models", "PyTorch", "FastAPI", "Gradio"],
    url: "https://app.tracescene.space",
    featured: true
  },
  {
    category: "saas",
    icon: "🔎",
    title: "Aura Search",
    status: "progress",
    statusLabel: "In Development",
    description: "AI-powered visual intelligence platform combining multi-object detection, OCR-based text extraction, and reasoning-driven image search. Search and retrieve images by actual visual content and contextual understanding.",
    features: [
      "Multi-object detection & classification",
      "OCR-based text extraction from images",
      "Reasoning-driven visual search",
      "Mobile & cloud deployment"
    ],
    tech: ["TensorFlow Lite", "PyTorch Mobile", "Android SDK", "CLIP"],
    featured: false
  },
  {
    category: "personal",
    icon: "📜",
    title: "Tiny Tamil LLM",
    status: "live",
    statusLabel: "Live",
    description: "Compact, instruction-tuned LLM fine-tuned on classical Tamil literature. Acts as a tutor for classical Tamil literature in an interactive Q&A format — preserving cultural heritage through AI.",
    tech: ["PyTorch", "Hugging Face", "Streamlit", "LoRA"],
    featured: false
  },
  {
    category: "pipeline",
    icon: "🎬",
    title: "Agentic Screenplay Writer",
    status: "pipeline",
    statusLabel: "In Pipeline",
    description: "AI-powered agentic screenplay writing software that assists in narrative structure, dialogue generation, scene composition, and story arc development.",
    tech: ["Multi-Agent", "LangGraph", "LLMs", "Creative AI"],
    featured: false
  }
];

const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Science",
  university: "Anna University, Chennai",
  period: "2007 – 2011"
};
