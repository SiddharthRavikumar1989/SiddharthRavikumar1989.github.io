// ============================================
// DATA — All portfolio content
// ============================================

const PROFILE = {
  name: "Siddharth Ravikumar",
  initials: "SR",
  title: "Senior AI Solutions Architect",
  tagline: "Building production AI systems that think, speak, and see.",
  typingTexts: [
    "Multi-Agent Orchestration & Agentic AI",
    "Enterprise RAG & Knowledge Systems",
    "Real-Time ASR & Speech Intelligence",
    "Quantitative AI & Trading Intelligence",
    "14+ Years Shipping Production AI"
  ],
  summary: `AI Solutions Architect with <strong>14+ years</strong> building AI systems across Agentic AI, NLP, Speech Intelligence, Computer Vision, and Quantitative Intelligence. I've taken LLM-powered platforms from early prototypes through to production — dealing with failure recovery, latency budgets, cost control, observability, and keeping things reliable once real users depend on them. Most recently focused on multi-agent orchestration, enterprise RAG, and speech AI for defense applications.`,
  about: [
    `I specialize in architecting production-grade AI systems — the kind where you have to deal with the parts that don't show up in demos: failure recovery, latency budgets, cost control, and observability. From real-time multilingual ASR pipelines for defense to agentic RAG frameworks for structural engineering, I build systems that solve complex domain problems at scale.`,
    `Beyond my professional work, I'm building and launching AI products that bring cutting-edge intelligence to niche markets. My current ventures include an agentic swing trading intelligence platform (live at app.tradesphere.space), AI-powered accident forensics, on-device visual search, and culturally-rooted language models.`,
    `I believe in bridging the gap between AI research and real-world impact — whether that's deploying world foundation models in defense settings, building enterprise RAG that handles complex engineering documents, or keeping multi-agent systems reliable when external APIs rate-limit and timeout.`
  ],
  email: "siddharth.ravikumar4521@gmail.com",
  phone: "+971566731297",
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
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face Transformers", "Whisper", "NVIDIA NeMo"]
  },
  {
    icon: "🤖",
    title: "Agentic AI",
    tags: ["Multi-Agent Orchestration", "LangGraph", "LangChain", "Tool-Calling Agents", "Fallback & Self-Correction Loops", "Memory-Augmented Agents", "Agent Tracing & Observability"]
  },
  {
    icon: "📚",
    title: "RAG & Knowledge Systems",
    tags: ["Agentic RAG", "Multimodal RAG", "Hybrid Retrieval", "Vector DBs (Milvus, Qdrant, Chroma)", "Reranking", "Multi-Hop Retrieval", "Knowledge Graph RAG"]
  },
  {
    icon: "💬",
    title: "LLM Engineering",
    tags: ["LLM Fine-Tuning", "PEFT / LoRA / QLoRA", "Open-source LLMs", "Prompt Optimization", "LLM Evaluation (RAGAS, DeepEval)", "Token Budget Management"]
  },
  {
    icon: "🎤",
    title: "Speech & NLP",
    tags: ["Whisper ASR", "NVIDIA Conformer", "Speaker Diarization", "Real-time Streaming", "Arabic NLP", "Persian NLP", "Tamil NLP"]
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    tags: ["Object Detection", "OCR Pipelines", "ColPali Visual Retrieval", "Vision Language Models", "Image Search", "TF Lite", "Edge AI"]
  },
  {
    icon: "⚙️",
    title: "Backend & Architecture",
    tags: ["Python", "Java", "SQL", "FastAPI", "Microservices", "Event-Driven Architecture", "REST APIs", "Distributed Systems"]
  },
  {
    icon: "☁️",
    title: "Cloud, MLOps & Data",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow", "Airflow", "CI/CD", "Apache Spark", "Kafka", "DuckDB", "Dask", "Elasticsearch"]
  }
];

const EXPERIENCE = [
  {
    role: "Solutions Architect",
    company: "SAAL AI",
    period: "Jan 2025 – Present",
    location: "Abu Dhabi",
    highlights: [
      "Architected an agentic document intelligence platform handling PDFs, PowerPoints, engineering drawings, and technical diagrams with multimodal RAG — improved grounded-answer rates from 62% to 84%",
      "Built production speech AI pipelines for Arabic & Persian transcription with military-grade noise reduction — achieved >25% WER improvement on jargon-heavy segments through fine-tuned Whisper & NVIDIA Conformer models",
      "Designed multi-agent trading intelligence platform with LangGraph orchestration, validation loops reducing manual review from 30% to under 10%, and end-to-end latency under 3 seconds",
      "Ran RAGAS evaluations on every deployment, tracking p95 retrieval latency against 800ms targets and cost-per-query across providers for intelligent routing"
    ],
    projects: ["Agentic RAG", "Speech Intelligence", "Trading AI", "Defense AI"]
  },
  {
    role: "AI Architect",
    company: "Ministry of Rural Development",
    period: "Jun 2023 – Jan 2025",
    location: "Riyadh, Saudi Arabia",
    highlights: [
      "Designed geospatial intelligence platform for urban violation hotspot prediction using DBSCAN/HDBSCAN on GPS-tagged enforcement data — became the standard planning tool across districts",
      "Built spatial-temporal forecasting models combining time-series analysis with spatial features, with weekly accuracy evaluations against actual violation density",
      "Implemented LLM-powered municipal compliance platform with RAG retrieval, tracking hallucination rates across policy domains and data freshness monitoring for regulatory updates",
      "Automated compliance checklist generation, cutting manual review time by ~35% over a three-month operational period"
    ],
    projects: ["Geospatial AI", "Policy Intelligence", "Municipal Chatbot"]
  },
  {
    role: "Senior Data Scientist",
    company: "Onit",
    period: "Sep 2022 – Jun 2023",
    location: "Remote",
    highlights: [
      "Built LLM-powered clause extraction with automatic routing of low-confidence extractions to human review — hit ~95% clause validation reliability with weekly regression checks",
      "Fine-tuned domain-specific legal LLMs with instruction tuning and contrastive learning — reduced manual review effort by ~40% validated through side-by-side comparison",
      "Designed legal expert recommendation engine with semantic similarity, embeddings, and metadata ranking — iterated scoring weights based on actual lawyer acceptance rates"
    ],
    projects: ["Legal AI", "Contract Analytics", "Recommendation Engine"]
  },
  {
    role: "Consultant Data Scientist",
    company: "Verizon",
    period: "Nov 2018 – Sep 2022",
    location: "Chennai, India",
    highlights: [
      "Built network anomaly detection and churn prediction using ensemble methods and RNNs/LSTMs against live telemetry — tracked alert precision and false-positive rates weekly",
      "Developed NLP pipelines using BM25 and contextual embeddings to extract insights from millions of customer conversations with pipeline health monitoring",
      "Implemented sentiment analysis, intent classification, and aspect-based sentiment models — validated accuracy on monthly holdout sets and tracked correlation with NPS scores"
    ],
    projects: ["Anomaly Detection", "NLP Pipelines", "Customer Analytics"]
  },
  {
    role: "Machine Learning Engineer",
    company: "UST",
    period: "Jun 2017 – Dec 2018",
    location: "India",
    highlights: [
      "Built edge AI analytics for real-time IoT datacenter monitoring with sub-200ms latency constraints for alerting",
      "Developed streaming data pipelines on AWS (Kinesis, Spark Streaming, DynamoDB, Elasticsearch) handling burst traffic with backpressure monitoring",
      "Developed anomaly detection models using Bayesian inference and RNN/LSTM architectures with precision/recall tracking and automatic retraining triggers"
    ],
    projects: ["IoT Analytics", "Edge Computing", "AWS Pipelines"]
  }
];

// OFFICIAL PROJECTS
const OFFICIAL_PROJECTS = [
  {
    category: "client",
    icon: "🏗️",
    title: "Agentic Multimodal Enterprise RAG Platform",
    company: "SAAL AI",
    description: "Document intelligence platform handling PDFs, PowerPoints, engineering drawings, and scientific documents with ColPali visual retrieval, OCR, Vision Language Models, and multimodal embeddings. Structured logging across retrieval decisions, reranking, and LLM generation for full traceability.",
    tech: ["ColPali", "Vision LLMs", "LangGraph", "Vector DB", "RAGAS", "FastAPI"],
    impact: "Grounded-answer rates improved from 62% to 84%"
  },
  {
    category: "client",
    icon: "🎙️",
    title: "Speech Intelligence & Multilingual ASR",
    company: "SAAL AI",
    description: "Production speech AI for Arabic and Persian with multi-tiered noise reduction for military-grade audio. Speech separation, VAD, diarization, and fine-tuned Whisper/NVIDIA Conformer models with stratified evaluation by noise level, dialect, and vocabulary type.",
    tech: ["Whisper", "NVIDIA Conformer", "VAD", "Diarization", "Docker", "Python"],
    impact: ">25% WER improvement on defense-domain jargon"
  },
  {
    category: "product",
    icon: "📈",
    title: "Multi-Agent Quantitative Research Platform",
    company: "SAAL AI",
    description: "Agentic research platform coordinating news, fundamentals, technical signals, and algo-trading agents via LangGraph. Validation loops, fallback chains with TTL-based caching, Text-to-SQL for natural language queries, and Modern Portfolio Theory integration.",
    tech: ["LangGraph", "Multi-Agent", "Text-to-SQL", "Yahoo Finance", "FastAPI"],
    impact: "Manual review reduced from 30% to under 10%"
  },
  {
    category: "client",
    icon: "🛡️",
    title: "Defense AI — World Foundation Models",
    company: "SAAL AI",
    description: "World foundation models for defense autonomy — multimodal training across challenging physical conditions with reliability testing under sensor degradation, targeting detection consistency within strict latency constraints.",
    tech: ["PyTorch", "Multimodal AI", "Edge Deployment", "Symbolic AI"],
    impact: "Adaptive action execution in extreme conditions"
  },
  {
    category: "client",
    icon: "🗺️",
    title: "Urban Violation Hotspot Detection & Forecasting",
    company: "Ministry of Rural Development",
    description: "Geospatial intelligence platform with large-scale pipelines using GeoPandas, Shapely, and PostGIS. Automated hotspot detection with DBSCAN/HDBSCAN on GPS-tagged enforcement data and spatial-temporal forecasting for proactive planning.",
    tech: ["GeoPandas", "DBSCAN", "PostGIS", "Time-Series", "Python"],
    impact: "Standard planning tool adopted across districts"
  },
  {
    category: "product",
    icon: "📋",
    title: "Municipal Compliance & Policy Intelligence",
    company: "Ministry of Rural Development",
    description: "Enterprise knowledge platform using LLMs and RAG for regulatory guidance and compliance validation. Multichannel conversational AI with hallucination rate tracking across policy domains and data freshness monitoring for regulatory updates.",
    tech: ["LangChain", "RAG", "Embeddings", "Topic Modeling", "FastAPI"],
    impact: "~35% reduction in manual compliance review time"
  },
  {
    category: "client",
    icon: "⚖️",
    title: "Legal Intelligence & Contract Analytics",
    company: "Onit",
    description: "LLM-powered clause extraction with automatic low-confidence routing to human review. Domain-specific legal LLMs fine-tuned with instruction tuning and contrastive learning, plus a content-aware lawyer recommendation engine.",
    tech: ["LLM Fine-tuning", "Contrastive Learning", "Semantic Search", "NLP"],
    impact: "~95% clause validation · 40% less manual review"
  },
  {
    category: "rnd",
    icon: "🔬",
    title: "Liquid Foundation Models vs LLMs Evaluation",
    company: "R&D",
    description: "Comparative analysis of liquid neural networks vs. transformers, focused on production-relevant metrics: tokens/sec, memory per concurrent request, and performance degradation under load in low-data and streaming scenarios.",
    tech: ["PyTorch", "Benchmarking", "GPU Profiling"],
    impact: "Informed architecture decisions for streaming AI"
  },
  {
    category: "rnd",
    icon: "⚡",
    title: "GPU Architecture & Memory Benchmarking",
    company: "R&D",
    description: "Benchmarked DGX Spark vs A100/H100 setups on VRAM utilization, bandwidth, throughput, and cost across inference, fine-tuning, and multimodal workloads. Results informed infrastructure decisions for production model serving.",
    tech: ["NVIDIA DGX", "A100", "H100", "CUDA", "Profiling"],
    impact: "Optimized GPU procurement for production serving"
  }
];

// PERSONAL PROJECTS
const PERSONAL_PROJECTS = [
  {
    category: "saas",
    icon: "📊",
    title: "Agentic Swing Trading Intelligence",
    status: "live",
    statusLabel: "Live Product",
    description: "Multi-agent quantitative research platform for systematic swing trading insights. Coordinated technical, fundamental, news, risk, and trade validation agents via LangGraph with agent-level tracing for tool calls, token costs, and latency.",
    features: [
      "Multi-agent orchestration via LangGraph",
      "Quantitative pipelines with feedback loops",
      "Data ingestion, strategy evaluation & backtesting",
      "Signal success rate & end-to-end latency tracking",
      "Containerized deployment with health checks",
      "Response time & failure rate monitoring"
    ],
    tech: ["LangGraph", "Multi-Agent", "Docker", "FastAPI", "Yahoo Finance"],
    url: "https://app.tradesphere.space/",
    featured: true
  },
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
    featured: false
  },
  {
    category: "saas",
    icon: "🔎",
    title: "Aura Search",
    status: "progress",
    statusLabel: "In Development",
    description: "Edge AI mobile application for visual search and image understanding. Computer vision pipelines with object detection, embeddings, and visual reasoning, optimized with TensorFlow Lite / PyTorch Mobile for 60ms latency on target hardware.",
    features: [
      "Multi-object detection & classification",
      "OCR-based text extraction from images",
      "Reasoning-driven visual search",
      "Quantized models for edge deployment"
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
