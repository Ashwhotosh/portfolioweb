import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";


const ProjectsSection = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-wash-sand py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-clay" />
              <p className="eyebrow-clay">03 - Projects</p>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-4xl text-foreground md:text-5xl">
              Selected work.
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Four projects at the intersection of product and applied AI - each one shipped,
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
          <div className="flex flex-wrap gap-3">
            <Link to="/csp" className="btn-ghost">
              <ArrowUpRight className="h-4 w-4" />
              All Projects &amp; Case Studies
            </Link>
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
