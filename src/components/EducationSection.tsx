type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

const education: { period: string; degree: string; institution: string; detail: string; tone: Tone }[] = [
  {
    period: "2022 — 2026",
    degree: "B.Tech, Computer Science Engineering",
    institution: "Indian Institute of Information Technology, Raichur",
    detail: "Roll: CS22B1013",
    tone: "amber",
  },
  {
    period: "2019 — 2021",
    degree: "ISC (12th)",
    institution: "Ashoka Junior College, Nashik",
    detail: "85%",
    tone: "blue",
  },
  {
    period: "Until 2019",
    degree: "ICSE (10th)",
    institution: "Ashoka Universal School",
    detail: "91.80%",
    tone: "sage",
  },
];

const recognition: { label: string; tone: Tone }[] = [
  { label: "Top 5% of 1.2M students in JEE", tone: "amber" },
  { label: "MHT-CET 97.1 percentile (7L+ applicants)", tone: "blue" },
  { label: "Reliance Scholar", tone: "sage" },
  { label: "Agile Foundations — IIBA", tone: "clay" },
  { label: "Breaking into Product Management — GeeksforGeeks", tone: "plum" },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative scroll-mt-24 bg-wash-cream py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-plum" />
              <p className="eyebrow-plum">05 — Education</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              Background.
            </h2>
          </div>

          <div className="md:col-span-9">
            <ol className="divide-y divide-border">
              {education.map((e, i) => (
                <li key={i} className="grid grid-cols-12 gap-4 py-6 first:pt-0">
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-center">
                      <span className={`tone-bar tone-bar-${e.tone}`} />
                      <p className={`eyebrow-${e.tone}`}>{e.period}</p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-lg font-medium text-foreground">{e.degree}</h3>
                    <p className="mt-1 text-[15px] text-muted-foreground">{e.institution}</p>
                    <p className={`mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-${e.tone}`}>
                      {e.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 border-t border-border pt-8">
              <div className="flex items-center">
                <span className="tone-bar tone-bar-plum" />
                <p className="eyebrow-plum">Recognition & Certifications</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {recognition.map((r, i) => (
                  <span key={i} className={`chip-${r.tone}`}>
                    {r.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
