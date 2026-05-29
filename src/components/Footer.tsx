import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-lg italic text-foreground">Ashutosh Singh</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              © {new Date().getFullYear()} · Built with React, Vite, Tailwind
            </p>
          </div>

          <div className="flex items-center gap-2">
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
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="icon-btn"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
