const AboutSection = () => {
  return (
    <section id="about" className="relative scroll-mt-24 bg-wash-cream py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-amber" />
              <p className="eyebrow-amber">01 — Now</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              What I'm doing now.
            </h2>
          </div>

          <div className="md:col-span-9 md:pt-2">
            <div className="space-y-5 text-[17px] leading-[1.75] text-foreground/90">
              <p>
                I'm a CS undergrad at <span className="text-foreground font-medium">IIIT Raichur</span>{" "}
                building{" "}
                <a
                  href="https://thetrackpay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber font-medium link-underline"
                >
                  TrackPay
                </a>{" "}— an agentic AI
                personal finance platform pre-incubated at IIT Madras. My day-to-day is the
                product-builder loop: user interviews, PRDs, MVP iteration, and shipping
                LLM-powered features that actually work in front of users.
              </p>
              <p>
                I most recently finished a Product Manager internship at{" "}
                <span className="text-blue font-medium">Darwix AI</span>, where I scaled an
                agentic hiring-call product to <span className="text-foreground font-medium">5,000+ automated calls</span>{" "}
                and <span className="text-foreground font-medium">300+ qualified leads</span>, and led
                the Omnichannel Sales Hiring MVP from product logic and workflow design
                through edge-case handling.
              </p>
              <p>
                Before product, I lived inside the AI/ML stack — multi-agent systems with{" "}
                <span className="text-sage font-medium">LangChain</span> and{" "}
                <span className="text-sage font-medium">LangGraph</span>, RAG pipelines on
                financial documents, and a DistilBERT-based IPO sentiment model. That
                technical foundation is why I end up building the things I scope, instead of
                handing them off.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 md:grid-cols-3">
              <Metric tone="amber" label="Pre-incubation grant" value="₹5.5L" sub="IIT Madras" />
              <Metric tone="blue" label="Calls scaled at Darwix" value="5,000+" sub="agentic hiring" />
              <Metric tone="sage" label="RAG retrieval accuracy" value="84%+" sub="500+ page docs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Metric = ({
  tone,
  label,
  value,
  sub,
}: {
  tone: "amber" | "blue" | "sage" | "clay" | "plum";
  label: string;
  value: string;
  sub: string;
}) => (
  <div className="relative pl-4">
    <span
      className="absolute left-0 top-1 h-10 w-[3px] rounded-full"
      style={{ background: `hsl(var(--tone-${tone}))` }}
    />
    <p className={`eyebrow-${tone}`}>{label}</p>
    <p className="mt-2 font-serif text-3xl text-foreground md:text-4xl">{value}</p>
    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
      {sub}
    </p>
  </div>
);

export default AboutSection;
