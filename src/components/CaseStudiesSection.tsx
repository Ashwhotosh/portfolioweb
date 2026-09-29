import { ArrowUpRight } from "lucide-react";

type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

interface CaseStudy {
  title: string;
  description: string;
  file: string;
  logoUrl: string;
  tone: Tone;
}

const caseStudies: CaseStudy[] = [
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
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="casestudies" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-blue" />
              <p className="eyebrow-blue">04 - Case Studies</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              Product<br />Teardowns.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Deep dives into UX, strategy, and workflows of major products.
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {caseStudies.map((cs, i) => (
                <div key={i} className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm border border-border">
                    <img src={cs.logoUrl} alt={`${cs.title} logo`} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{cs.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {cs.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
