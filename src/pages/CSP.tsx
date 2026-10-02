import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, FileText, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, caseStudies } from "@/data/portfolio";

const CSP = () => {
  useEffect(() => {
    document.title = "Case Studies & Projects | Ashutosh Singh";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <header className="pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="container mx-auto max-w-5xl px-6">
            <Link
              to="/"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-3">
                <div className="flex items-center">
                  <span className="tone-bar tone-bar-clay" />
                  <p className="eyebrow-clay">CSP</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <h1 className="display text-4xl text-foreground md:text-6xl">
                  Case Studies &amp; Projects.
                </h1>
                <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                  Everything I have built and taken apart in one place - {projects.length} projects
                  and {caseStudies.length} product teardowns, each with links and the detail behind it.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projects" className="btn-ghost">Projects ({projects.length})</a>
                  <a href="#case-studies" className="btn-ghost">Case Studies ({caseStudies.length})</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="projects" className="relative scroll-mt-24 bg-wash-sand py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 flex items-center">
              <span className="tone-bar tone-bar-clay" />
              <p className="eyebrow-clay">Projects</p>
            </div>

            <div className="space-y-16">
              {projects.map((p) => (
                <article
                  key={p.index}
                  className="relative grid grid-cols-1 gap-8 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm md:grid-cols-12 md:gap-10 md:p-10"
                  style={{ boxShadow: `inset 4px 0 0 hsl(var(--tone-${p.tone}))` }}
                >
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-mono text-[11px] uppercase tracking-[0.18em] text-${p.tone}`}>
                        {p.index}
                      </span>
                      {p.status && <span className={`chip-${p.status.tone}`}>{p.status.label}</span>}
                    </div>
                    <p className="mt-3 font-serif text-2xl italic text-muted-foreground">{p.tagline}</p>
                  </div>

                  <div className="md:col-span-9">
                    <h2 className="font-serif text-3xl text-foreground md:text-4xl">{p.title}</h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <p className={`eyebrow-${p.tone}`}>Problem</p>
                        <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{p.problem}</p>
                      </div>
                      <div>
                        <p className={`eyebrow-${p.tone}`}>Approach</p>
                        <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{p.approach}</p>
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
          </div>
        </section>

        <section id="case-studies" className="relative scroll-mt-24 py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 flex items-center">
              <span className="tone-bar tone-bar-blue" />
              <p className="eyebrow-blue">Case Studies</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-white p-2.5 shadow-sm">
                    {cs.logoUrl ? (
                      <img src={cs.logoUrl} alt={`${cs.title} logo`} className="h-full w-full object-contain" />
                    ) : (
                      <FileText className={`h-full w-full text-${cs.tone}`} />
                    )}
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{cs.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.description}</p>
                  <div className="mt-6">
                    <a
                      href={cs.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[15px] font-medium text-${cs.tone} hover:underline`}
                    >
                      Read Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start gap-4 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
                More experiments and write-ups live on GitHub and Medium.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/Ashwhotosh" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://medium.com/@ashwhotosh" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <ArrowUpRight className="h-4 w-4" />
                  Medium
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CSP;
