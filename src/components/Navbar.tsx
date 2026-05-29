import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, FileText } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV = [
  { id: "about", label: "Now" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2 text-left"
          aria-label="Home"
        >
          <span className="font-serif text-lg italic text-foreground">Ashutosh Singh</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:inline">
            / PM &amp; AI
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          <ul className="flex flex-col items-center gap-5">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="font-serif text-3xl text-foreground hover:text-primary"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-sm text-muted-foreground"
            >
              Toggle theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
