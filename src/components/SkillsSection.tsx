type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

interface Group {
  label: string;
  tone: Tone;
  items: string[];
}

const groups: Group[] = [
  {
    label: "Product",
    tone: "blue",
    items: [
      "PRDs & feature specs",
      "User stories",
      "User research",
      "Roadmap & prioritization",
      "Trade-off analysis",
      "Agile / Scrum",
      "Business analysis",
      "UAT & launch support",
    ],
  },
  {
    label: "AI / ML",
    tone: "sage",
    items: [
      "LangChain",
      "LangGraph",
      "RAG pipelines",
      "Multi-agent systems",
      "LLM orchestration",
      "DistilBERT",
      "HuggingFace",
      "Prompt-driven workflows",
    ],
  },
  {
    label: "Engineering",
    tone: "amber",
    items: ["Python", "Pandas", "NumPy", "SQL", "C", "C++", "Scikit-learn", "TensorFlow"],
  },
  {
    label: "Tools",
    tone: "clay",
    items: ["Notion", "Jira", "Git", "GitHub", "Streamlit", "ChromaDB", "Groq", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-sage" />
              <p className="eyebrow-sage">04 — Stack</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              How I build.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Product craft on top of an applied-AI engineering foundation.
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {groups.map((g) => (
                <div
                  key={g.label}
                  className="rounded-xl border border-border bg-card/60 p-6"
                  style={{ boxShadow: `inset 3px 0 0 hsl(var(--tone-${g.tone}))` }}
                >
                  <div className="flex items-center">
                    <span className={`tone-bar tone-bar-${g.tone}`} />
                    <p className={`eyebrow-${g.tone}`}>{g.label}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it, i) => (
                      <span key={i} className={`chip-${g.tone}`}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
