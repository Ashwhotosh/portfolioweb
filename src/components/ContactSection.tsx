import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center">
              <span className="tone-bar tone-bar-clay" />
              <p className="eyebrow-clay">06 — Contact</p>
            </div>
            <h2 className="display mt-3 text-4xl text-foreground md:text-5xl">
              Get in touch.
            </h2>
          </div>

          <div className="md:col-span-9">
            <p className="max-w-2xl font-serif text-2xl italic leading-snug text-foreground/90 md:text-3xl">
              I'm open to{" "}
              <span className="text-blue not-italic font-medium">PM</span> and{" "}
              <span className="text-sage not-italic font-medium">AI-builder</span> roles,
              and always happy to talk about agentic systems, fintech, or what{" "}
              <a
                href="https://thetrackpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber not-italic font-medium link-underline"
              >
                TrackPay
              </a>{" "}is becoming.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Email or LinkedIn DM works best — I usually reply within a day.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3">
              <Channel
                tone="amber"
                Icon={Mail}
                label="Email"
                value="ashutoshgovindsingh2003@gmail.com"
                href="mailto:ashutoshgovindsingh2003@gmail.com"
              />
              <Channel
                tone="sage"
                Icon={Phone}
                label="Phone"
                value="+91 76663 38799"
                href="tel:+917666338799"
              />
              <Channel
                tone="blue"
                Icon={MapPin}
                label="Location"
                value="Nashik, Maharashtra · India"
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="btn-primary"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/Ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type Tone = "amber" | "blue" | "sage" | "clay" | "plum";

const Channel = ({
  tone,
  Icon,
  label,
  value,
  href,
}: {
  tone: Tone;
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const inner = (
    <>
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
        style={{
          background: `hsl(var(--tone-${tone}) / 0.12)`,
          color: `hsl(var(--tone-${tone}))`,
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className={`eyebrow-${tone}`}>{label}</p>
        <p className="mt-1 truncate text-[15px] text-foreground">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-lg border border-border bg-card/40 p-3 transition-colors hover:border-primary/40"
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card/40 p-3">
      {inner}
    </div>
  );
};

export default ContactSection;
