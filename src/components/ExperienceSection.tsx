import { ArrowUpRight } from "lucide-react";

type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

interface Role {
  period: string;
  role: string;
  org: string;
  orgUrl?: string;
  summary: string;
  bullets: string[];
  tags?: string[];
  tone: Tone;
}

const roles: Role[] = [
  {
    period: "Apr 2025 — Present",
    role: "Founder",
    org: "TrackPay",
    orgUrl: "https://thetrackpay.com/",
    summary:
      "AI-powered personal finance platform, pre-incubated at IIT Madras with a ₹5.5L grant.",
    bullets: [
      "Defined product vision and roadmap for an agentic AI financial assistant.",
      "Led end-to-end product development — user research, problem validation, feature prioritization, iterative MVP builds.",
      "Owned PRDs, success metrics, and engineering hand-off across the build.",
    ],
    tags: ["Product Strategy", "Agentic AI", "Fintech", "MVP"],
    tone: "amber",
  },
  {
    period: "Mar 2026 — May 2026",
    role: "Product Manager Intern",
    org: "Darwix AI",
    summary:
      "Shipped two AI-first hiring products and produced fundraising-grade product collateral.",
    bullets: [
      "Scaled the Agentic AI Hiring Call product to 5,000+ automated calls and 300+ qualified leads.",
      "Led end-to-end MVP of the Omnichannel Sales Hiring platform — product logic, workflow design, edge cases. 1,000+ calls, 100+ high-quality leads.",
      "Built investor pitch decks, pipeline reports, and strategic documentation supporting fundraising and BD.",
    ],
    tags: ["Product Management", "Voice AI", "Workflow Design", "GTM"],
    tone: "blue",
  },
  {
    period: "Oct 2024 — Oct 2025",
    role: "General Secretary, COSA",
    org: "IIIT Raichur",
    summary:
      "Operations and leadership across the institute's student affairs cabinet.",
    bullets: [
      "Spearheaded planning and execution of 20+ institute-level events (avg footfall 400+).",
      "Oversaw a cumulative operational budget of ₹4M+ — allocation, vendor negotiation, financial accountability.",
      "Coordinated end-to-end logistics and cross-team execution across student bodies.",
    ],
    tags: ["Operations", "Stakeholder Mgmt", "Budgeting"],
    tone: "sage",
  },
  {
    period: "Nov 2023 — Oct 2024",
    role: "Public Relations Secretary",
    org: "IIIT Raichur",
    summary:
      "Owned branding, outreach, and external partnerships for the institute.",
    bullets: [
      "Directed branding, outreach, and media strategy for 30+ major events.",
      "Managed communications, partnerships, and stakeholder engagement.",
      "Built external networks with colleges, organizations, and media channels to expand institutional reach.",
    ],
    tags: ["Brand", "Partnerships", "Comms"],
    tone: "clay",
  },
];

const ExperienceSection = () => {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-blue" />
              <p className="eyebrow-blue">02 — Work</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              Where I've shipped.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Four roles across product, AI, and operations.
            </p>
          </div>

          <div className="md:col-span-9">
            <ol className="divide-y divide-border">
              {roles.map((r, i) => (
                <li key={i} className="group grid grid-cols-12 gap-4 py-8 first:pt-0">
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-center">
                      <span className={`tone-bar tone-bar-${r.tone}`} />
                      <p className={`eyebrow-${r.tone}`}>{r.period}</p>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-9">
                    <h3 className="flex flex-wrap items-baseline gap-x-2 text-xl text-foreground">
                      <span className="font-medium">{r.role}</span>
                      <span className="text-muted-foreground">·</span>
                      {r.orgUrl ? (
                        <a
                          href={r.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`link-underline inline-flex items-center gap-1 text-${r.tone}`}
                        >
                          {r.org}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className={`text-${r.tone}`}>{r.org}</span>
                      )}
                    </h3>

                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/85">
                      {r.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: `hsl(var(--tone-${r.tone}))` }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {r.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {r.tags.map((t, k) => (
                          <span key={k} className={`chip-${r.tone}`}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
