import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Soft tonal shapes behind the hero — quiet, not gradient soup */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "hsl(var(--tone-amber) / 0.35)" }} />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "hsl(var(--tone-sage) / 0.30)" }} />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full opacity-25 blur-3xl" style={{ background: "hsl(var(--tone-blue) / 0.30)" }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 animate-fade-up">
              <span className="chip-sage chip-dot">Building TrackPay · Open to PM / AI roles</span>
            </div>

            <h1 className="display text-5xl leading-[1.02] text-foreground md:text-7xl animate-fade-up-delay-1">
              Ashutosh Singh.
              <br />
              <span className="italic text-blue">Product Manager</span>
              <span className="text-muted-foreground"> & </span>
              <span className="italic text-sage">AI builder.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up-delay-2">
              Founder of{" "}
              <a
                href="https://thetrackpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber font-medium link-underline"
              >
                TrackPay
              </a> — pre-incubated at{" "}
              <span className="text-foreground">IIT Madras</span> with a{" "}
              <span className="text-clay font-medium">₹5.5L grant</span>.
              Previously Product Manager at{" "}
              <span className="text-foreground">Darwix AI</span>.
              I ship agentic AI products end-to-end, from PRD to MVP.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up-delay-3">
              <button
                onClick={() => scrollTo("work")}
                className="btn-primary"
              >
                Read my work
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FileText className="h-4 w-4" />
                Resume (PDF)
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 animate-fade-up-delay-3">
              <a
                href="https://github.com/Ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                aria-label="Email"
                className="icon-btn"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:pt-2">
            <div className="relative mx-auto w-fit animate-fade-up-delay-2">
              {/* Layered colored frames behind the photo */}
              <div
                className="absolute -inset-x-4 -inset-y-3 -z-20 rounded-md"
                style={{ background: "hsl(var(--tone-amber) / 0.18)" }}
                aria-hidden
              />
              <div
                className="absolute -inset-x-2 -inset-y-1.5 -z-10 rounded-md"
                style={{ background: "hsl(var(--tone-clay) / 0.20)" }}
                aria-hidden
              />
              <img
                src="/lovable-uploads/ed641d9a-a061-4a74-a2ee-847ad794ab3b.png"
                alt="Ashutosh Singh"
                className="h-64 w-52 rounded-md object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-72 md:w-60"
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-sage">Nashik, IN</span>
                <span className="text-clay">2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-10 md:mt-28 md:grid-cols-4">
          <MetaCell tone="amber" label="Currently" value="Founder, TrackPay" />
          <MetaCell tone="blue" label="Studying" value="B.Tech CSE, IIIT Raichur" />
          <MetaCell tone="sage" label="Last role" value="PM Intern, Darwix AI" />
          <MetaCell tone="plum" label="Writing" value="@ashwhotosh on Medium" />
        </div>
      </div>
    </section>
  );
};

const MetaCell = ({
  tone,
  label,
  value,
}: {
  tone: "amber" | "blue" | "sage" | "plum" | "clay";
  label: string;
  value: string;
}) => (
  <div>
    <div className="flex items-center">
      <span className={`tone-bar tone-bar-${tone}`} />
      <p className={`eyebrow-${tone}`}>{label}</p>
    </div>
    <p className="mt-2 text-sm font-medium text-foreground">{value}</p>
  </div>
);

export default HeroSection;
