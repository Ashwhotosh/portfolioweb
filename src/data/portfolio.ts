export type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

export interface Project {
  index: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  outcomes: { value: string; label: string }[];
  tech: string[];
  links?: { label: string; href: string; icon?: "github" | "external" }[];
  status?: { label: string; tone: Tone };
  tone: Tone;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Multi-Agent IPO Due Diligence System",
    tagline: "Agentic GenAI framework that produces a full IPO analysis in ~80 seconds.",
    problem:
      "RHP documents run 500+ pages. Manual due diligence - combining document understanding, sentiment, and peer-valuation benchmarks - takes analysts days.",
    approach:
      "Built a multi-agent pipeline: RAG over RHPs (LangChain + ChromaDB + sentence-transformer embeddings), autonomous agents for data scraping, sentiment scoring, and competitor ticker mapping, with Llama-3.3-70B orchestrated via Groq for fast generation.",
    outcomes: [
      { value: "84%+", label: "retrieval accuracy" },
      { value: "92%", label: "automation accuracy" },
      { value: "~80s", label: "end-to-end report" },
    ],
    tech: ["Python", "LangChain", "RAG", "ChromaDB", "Llama 3.3 70B", "Groq", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/Ashwhotosh/Agentic_IPO_Host", icon: "github" },
      { label: "Project App", href: "https://ipomultiagent.streamlit.app/", icon: "external" }
    ],
    status: { label: "Shipped", tone: "sage" },
    tone: "sage",
  },
  {
    index: "02",
    title: "IPO Sentiment Analyzer",
    tagline: "DistilBERT + logistic regression beats a BiLSTM baseline by 21 points.",
    problem:
      "Pre-IPO sentiment in news and filings is noisy, long-form, and badly labeled - generic sentiment models miss financial nuance.",
    approach:
      "Compared a BiLSTM deep learning model against a DistilBERT-embedding + logistic-regression pipeline. Built an end-to-end preprocessing and inference workflow on HuggingFace Transformers and Scikit-learn.",
    outcomes: [
      { value: "90.4%", label: "accuracy" },
      { value: "+21%", label: "vs LSTM baseline" },
      { value: "3-class", label: "pos / neu / neg" },
    ],
    tech: ["Python", "DistilBERT", "Scikit-learn", "HuggingFace", "TensorFlow", "NLP"],
    links: [{ label: "GitHub", href: "https://github.com/Ashwhotosh", icon: "github" }],
    status: { label: "Shipped", tone: "sage" },
    tone: "blue",
  },
  {
    index: "03",
    title: "TrackPay",
    tagline: "Agentic AI personal finance platform. Pre-incubated at IIT Madras.",
    problem:
      "Most personal finance apps stop at categorization. People want a memory layer and an assistant that actually reasons about their money over time.",
    approach:
      "Defining the product around an Agentic AI Financial Assistant with a money-memory layer and multi-agent advisory loop. Owning vision, PRDs, MVP roadmap, and feature prioritization end-to-end.",
    outcomes: [
      { value: "₹10.5L", label: "IIT Madras grant" },
      { value: "Pre-Inc.", label: "stage" },
      { value: "2nd Wk Oct", label: "MVP launch" },
    ],
    tech: ["Agentic AI", "LangChain", "LLMs", "Product Strategy"],
    links: [
      { label: "thetrackpay.com", href: "https://thetrackpay.com/", icon: "external" },
      { label: "Prototype", href: "https://payexpense.vercel.app/", icon: "external" },
      { label: "Prototype Launch video", href: "https://youtu.be/xsLY5tpoz8Q?si=qiH5I3rn_I33SM05", icon: "external" },
    ],
    status: { label: "Live · MVP launching 2nd week of October", tone: "amber" },
    tone: "amber",
  },
  {
    index: "04",
    title: "Automated Sales Hiring - Darwix AI",
    tagline: "Multi-channel hiring automation across email, WhatsApp, and AI voice.",
    problem:
      "Manual high-volume sales hiring was bottlenecked on recruiter throughput and inconsistent candidate scoring.",
    approach:
      "Designed end-to-end product workflows, PRDs, scoring logic, and a multi-channel automation pipeline across email, WhatsApp, and AI voice calls. Removed recruiter dependency from the top of funnel.",
    outcomes: [
      { value: "5,000+", label: "automated calls" },
      { value: "300+", label: "qualified leads" },
      { value: "Multi-ch.", label: "email · WA · voice" },
    ],
    tech: ["PRDs", "Workflow Design", "Voice AI", "Scoring Logic"],
    links: [
      { label: "System Design (Notion)", href: "https://valiant-mail-d18.notion.site/Darwix-AI-72c8b4a1f140823d8d4e81ef60cb6d6c?source=copy_link", icon: "external" }
    ],
    status: { label: "Shipped", tone: "sage" },
    tone: "clay",
  },
  {
    index: "05",
    title: "FinITR-AI v3: Agentic Multi-Document Reconciliation for Indian ITR Filing",
    tagline: "Locally-runnable ReAct multi-agent system resolving asymmetric IT information gaps.",
    problem:
      "Indian salaried taxpayers with capital market exposure face an asymmetric information problem - the IT Department (via AIS) already knows their transactions, but existing tools only process self-reported data, causing 143(1) notices.",
    approach:
      "Built an orchestrator (ReAct Loop) with Auditor, Optimizer, Compliance, and Critic agents. Integrates Form 16, Bank CSVs, and AIS JSONs with Qwen2.5/Llama3.1 via Ollama. Built IndianTaxBench to evaluate 100+ adversarial cases.",
    outcomes: [
      { value: "ReAct", label: "Multi-Agent System" },
      { value: "100+", label: "Adversarial Cases" },
      { value: "Local", label: "LLM Inference" },
    ],
    tech: ["Python", "Ollama", "Qwen2.5", "Llama3.1", "ReAct", "Streamlit", "FastAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/Ashwhotosh/TTP_MultiAgent_ITR", icon: "github" },
      { label: "Thesis", href: "/FinV4_Thesis_Final.pdf", icon: "external" }
    ],
    status: { label: "Shipped", tone: "plum" },
    tone: "plum",
  },
];

export interface CaseStudy {
  title: string;
  description: string;
  file: string;
  logoUrl?: string;
  tone: Tone;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Google Pay Teardown",
    description: "An in-depth analysis and teardown of Google Pay's user experience, product architecture, and payment workflows.",
    file: "/Case Studies/GooglePay_Teardown_Ashutosh_Singh.pdf",
    logoUrl: "/Case Studies/gpay.svg",
    tone: "blue",
  },
  {
    title: "YouTube Music Teardown",
    description: "A comprehensive product teardown of YouTube Music, exploring user engagement, feature sets, and market positioning.",
    file: "/Case Studies/YouTubeMusic_Teardown_Ashutosh_Singh.pdf",
    logoUrl: "/Case Studies/ytmusic.svg",
    tone: "clay",
  },
  {
    title: "Eureka Product Teardown",
    description: "A product teardown of Eureka covering user experience, product strategy, and growth opportunities.",
    file: "/Case Studies/Eureka_Product_Teardown.pdf",
    tone: "sage",
  },
];
