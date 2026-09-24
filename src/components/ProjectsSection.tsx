import { ArrowUpRight, Github } from "lucide-react";

type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

interface Project {
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

const projects: Project[] = [
  {
    index: "01",
    title: "Multi-Agent IPO Due Diligence System",
    tagline: "Agentic GenAI framework that produces a full IPO analysis in ~80 seconds.",
    problem:
      "RHP documents run 500+ pages. Manual due diligence — combining document understanding, sentiment, and peer-valuation benchmarks — takes analysts days.",
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
      "Pre-IPO sentiment in news and filings is noisy, long-form, and badly labeled — generic sentiment models miss financial nuance.",
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
    title: "Automated Sales Hiring — Darwix AI",
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
      "Indian salaried taxpayers with capital market exposure face an asymmetric information problem — the IT Department (via AIS) already knows their transactions, but existing tools only process self-reported data, causing 143(1) notices.",
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-wash-sand py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-clay" />
              <p className="eyebrow-clay">03 — Projects</p>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-4xl text-foreground md:text-5xl">
              Selected work.
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Four projects at the intersection of product and applied AI — each one shipped,
              measured, and tied to a real outcome.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {projects.map((p) => (
            <article
              key={p.index}
              className="group relative grid grid-cols-1 gap-8 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm md:grid-cols-12 md:gap-10 md:p-10"
              style={{ boxShadow: `inset 4px 0 0 hsl(var(--tone-${p.tone}))` }}
            >
              <div className="md:col-span-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.18em] text-${p.tone}`}>
                    {p.index}
                  </span>
                  {p.status && (
                    <span className={`chip-${p.status.tone}`}>{p.status.label}</span>
                  )}
                </div>
                <p className="mt-3 font-serif text-2xl italic text-muted-foreground">
                  {p.tagline}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                  {p.title}
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <p className={`eyebrow-${p.tone}`}>Problem</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">
                      {p.problem}
                    </p>
                  </div>
                  <div>
                    <p className={`eyebrow-${p.tone}`}>Approach</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">
                      {p.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {p.outcomes.map((o, i) => (
                    <div key={i}>
                      <p
                        className="font-serif text-2xl md:text-3xl"
                        style={{ color: `hsl(var(--tone-${p.tone}))` }}
                      >
                        {o.value}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {o.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tech.map((t, i) => (
                    <span key={i} className={`chip-${p.tone}`}>{t}</span>
                  ))}
                </div>

                {p.links && p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {p.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
                      >
                        {l.icon === "github" ? (
                          <Github className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            More experiments, case studies, and product decompositions live on GitHub and Medium.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/Ashwhotosh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://medium.com/@ashwhotosh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <ArrowUpRight className="h-4 w-4" />
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
