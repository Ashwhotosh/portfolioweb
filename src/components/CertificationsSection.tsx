import { ArrowUpRight } from "lucide-react";

type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

interface Certification {
  date: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  summary: string;
  skills: string[];
  link: string;
  tone: Tone;
}

const certifications: Certification[] = [
  {
    date: "2024",
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    issuerLogo: "/Certificate/ibm.svg",
    summary: "Demonstrated understanding of Enterprise Design Thinking methodology and collaborative problem-solving to create user-centric solutions.",
    skills: ["Design Thinking", "Problem Solving", "User-Centric Design"],
    link: "/Certificate/Coursera ICUU2N9WG9YH.pdf",
    tone: "blue",
  },
  {
    date: "2024",
    name: "Breaking into Product Management",
    issuer: "GeeksforGeeks",
    issuerLogo: "/Certificate/gfg.svg",
    summary: "Explored the core concepts, frameworks, and practical strategies required for modern Product Management roles.",
    skills: ["Product Strategy", "Market Research", "Product Lifecycle"],
    link: "/Certificate/gfg PM.pdf",
    tone: "sage",
  },
  {
    date: "2024",
    name: "Agile Foundations",
    issuer: "IIBA",
    issuerLogo: "/Certificate/iiba.svg",
    summary: "Mastered foundational Agile principles, methodologies, and the mindset required for successful iterative project execution.",
    skills: ["Agile Methodologies", "Scrum", "Business Analysis"],
    link: "/Certificate/IIBA_CertificateOfCompletion_Agile Foundations.pdf",
    tone: "amber",
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-clay" />
              <p className="eyebrow-clay">05 - Certifications</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              Licenses &<br />Certifications.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Professional credentials and specialized skill development.
            </p>
          </div>

          <div className="md:col-span-9">
            <ol className="divide-y divide-border">
              {certifications.map((c, i) => (
                <li key={i} className="group grid grid-cols-12 gap-4 py-8 first:pt-0">
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-center">
                      <span className={`tone-bar tone-bar-${c.tone}`} />
                      <p className={`eyebrow-${c.tone}`}>{c.date}</p>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-9">
                    <div className="flex flex-wrap items-center gap-4">
                      {c.issuerLogo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1.5 shadow-sm border border-border">
                          <img 
                            src={c.issuerLogo} 
                            alt={`${c.issuer} logo`} 
                            className="h-full w-full object-contain"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-medium text-foreground">
                          {c.name}
                        </h3>
                        <p className={`mt-1 text-[15px] font-medium text-${c.tone}`}>
                          {c.issuer}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      {c.summary}
                    </p>

                    {c.skills && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {c.skills.map((s, k) => (
                          <span key={k} className={`chip-${c.tone}`}>{s}</span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6">
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-[15px] font-medium text-${c.tone} hover:underline`}
                      >
                        View Certificate
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
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

export default CertificationsSection;
