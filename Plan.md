# Portfolio Redesign Plan — Ashutosh Singh

## 1. Why the current site looks AI-generated

The current build carries every visual tell of a generated/template site:

1. **Purple-everything palette** with violet blur circles, the default Lovable/Bolt accent.
2. **Animated wave canvas** in the hero — decorative, slow, irrelevant.
3. **Spline 3D viewer** loaded dynamically — heavy, generic, no narrative reason.
4. **Glass-morphism on every card** — overused, no hierarchy.
5. **Generic Unsplash stock photos** as project covers (pothole road, security guard, GPA calculator stock image).
6. **Typewriter hero text** — overused, performative.
7. **Vague filler copy**: *"I'm a passionate developer with a focus on web technologies and machine learning."*
8. **Round metric cards**: "3+ Years", "10+ Projects" — meaningless without context.
9. **Two-mode toggle (Tech/Business)** — gimmicky, splits identity instead of unifying it.
10. **Floating circular avatar with gradient overlay** — the AI builder default hero layout.

A professional developer/PM portfolio reads as **content-first**, opinionated, and grounded in real artifacts. We will rebuild around that.

---

## 2. Identity & positioning (from resume)

The site currently positions you as a "web developer." Your resume positions you as something more interesting and more accurate:

- **Founder, TrackPay** — IIT Madras Pre-Incubation, ₹5.5L grant, Agentic AI financial assistant.
- **Product Manager Intern, Darwix AI** — scaled an Agentic AI Hiring Call product to 5K+ calls / 300+ leads; led Omnichannel Sales Hiring platform MVP.
- **General Secretary (COSA), IIIT Raichur** — ran 30+ events, ₹4M+ budget.
- **AI/ML builder** — Multi-Agent IPO Due Diligence (LangChain, RAG, Llama-3.3-70B), IPO Sentiment Analyzer (DistilBERT, 90.4% accuracy).
- **Education** — B.Tech CSE, IIIT Raichur (CS22B1013); JEE top 5% / MHT-CET 97.1 percentile; Reliance Scholar.

**New tagline (working draft):** *"Product Manager & AI builder. Founder of TrackPay. I ship agentic AI products end-to-end — from PRD to MVP."*

This is the through-line for every section.

---

## 3. Visual direction — "Editorial / Engineering"

Inspired by Linear, Vercel, Brian Lovin, Lee Robinson, Rauno Freiberg — the kind of personal sites senior engineers and PMs actually build. Restrained, typographic, content-first.

### 3.1 Palette
- **Background:** near-black `#0A0A0A` (dark) / off-white `#FAFAF7` (light) — never pure white/black.
- **Foreground:** soft white `#EDEDED` / graphite `#171717`.
- **Muted:** zinc tones for secondary text.
- **Single accent:** warm amber/orange `#E87A3E` (or muted emerald `#3F9D7A`) — used sparingly, only on links/active state/CTA. **No purple. No gradients.**
- **Borders:** 1px hairline `rgba(255,255,255,0.08)` — not soft purple shadows.

### 3.2 Typography
- **Display/Headlines:** `Instrument Serif` or `Fraunces` — serif gives editorial gravitas, breaks the "every AI portfolio uses Inter Black" pattern.
- **Body:** `Inter` at 15–16px, `-0.01em` tracking.
- **Mono:** `JetBrains Mono` or `Geist Mono` — used for metadata (dates, tech tags, code), not body.
- **Scale:** big asymmetric jumps (clamp 14→72px) — not the default Tailwind ramp.

### 3.3 Layout principles
- **Single-column, max-width 720px** for content — read like a long-form essay, not a brochure.
- Asymmetric two-column only for project case studies (label left, content right).
- **Generous vertical rhythm** (sections separated by 120–160px on desktop).
- No glass, no blur circles, no animated waves. Background stays still.
- **Subtle grain/noise texture** (SVG, ~3% opacity) for analog feel — optional.

### 3.4 Motion
- **Reduced and earned.** Fade-up on scroll for section entries (Framer Motion, `viewport.once: true`).
- Cursor-following accent on project links only.
- No typewriter, no animated background, no infinite scroll marquees.
- Respect `prefers-reduced-motion`.

---

## 4. Information architecture

Collapse the current 7-section sprawl. New structure:

```
┌─ Hero (intro + identity + 2 CTAs)
├─ Now (what I'm building right now — TrackPay)
├─ Work (Experience: Founder TrackPay → PM Intern Darwix → COSA / PR Sec)
├─ Selected Projects (3–4 case studies, not a gallery)
├─ Writing (Medium case studies — link out, don't embed gallery)
├─ Stack (compact skills, grouped — not 6 separate sections of logos)
├─ Education + Recognition (merged, compact)
└─ Contact (email + socials, drop the contact form)
```

**Drop:**
- The Tech/Business profile toggle and the entire `BusinessProfile` route. One unified profile — you are *both*. The toggle reads as indecision.
- The Spline viewer.
- The Waves canvas.
- The Hero stat cards ("3+ Years", "10+ Projects").
- The contact form with fake `setTimeout` submission — replace with a `mailto:` link + Cal.com booking link.
- The 6-category skill grid with 24 logos.

---

## 5. Section-by-section spec

### 5.1 Hero
- **Top-left:** small mono brand mark `AS` and a status pill: `🟢 Building TrackPay · Open to PM/AI roles`.
- **Headline (serif, ~64px):** *"Ashutosh Singh — Product Manager & AI builder."*
- **Sub (~18px muted):** *"Founder at TrackPay (IIT Madras Pre-Incubated). Previously PM at Darwix AI. I ship agentic AI products from PRD to MVP — currently building an AI-powered personal finance platform."*
- **CTAs:** `Read about my work →` (anchor to Work) · `Resume (PDF) ↗`.
- **No photo, no avatar, no metric cards.** A clean two-line intro reads more senior than a circular headshot. (Optional: small photo bottom-right at 64×64 if you want a human touch — square, not circle.)

### 5.2 Now
- Single paragraph + 2-line bullet list.
- *"Currently — building TrackPay, an agentic AI financial assistant. Pre-incubated at IIT Madras with a ₹5.5L grant. Working on the Money-Memory layer and multi-agent advisory loop."*
- Dateline: `Last updated: <auto from build date>`.

### 5.3 Work (Experience)
Replace the 2-col card grid with a **timeline list** (year on left, role + bullets on right). Use **real, resume-derived entries only**:

| Year | Role | Key outcome |
|---|---|---|
| 2025– | **Founder, TrackPay** | Pre-incubated at IIT Madras (₹5.5L). Defined vision, PRDs, MVP. |
| Mar–May '26 | **Product Manager Intern, Darwix AI** | Scaled Agentic Hiring Call product to 5K+ calls / 300+ leads. Led Omnichannel Sales Hiring MVP. |
| Oct '24–Oct '25 | **General Secretary, COSA, IIIT Raichur** | Ran 20+ institute events (400+ avg footfall), ₹4M+ ops budget. |
| Nov '23–Oct '24 | **PR Secretary, IIIT Raichur** | Led branding/outreach for 30+ events. |

**Delete entirely:** the fabricated "Internship — E-Cell IIT Bombay", "PR Head — TnP Cell", "Coordinator — E-Cell", "Event Head — GameXcellence". These are not on the resume. Either you didn't do them, or they're misnamed — either way they hurt credibility and we drop them.

### 5.4 Selected Projects (case studies)
Replace the 4 generic project cards with **3 real, resume-backed case studies**, each with: title, 1-line summary, problem, approach, outcome metric, tech tags. No stock images — use **a single hero element per project** (a screenshot, a system diagram in SVG, or just bold text).

1. **Multi-Agent IPO Due Diligence System** — RAG + agentic framework. >84% retrieval over 500+ page RHPs, ~80s report generation. *Tech: LangChain, ChromaDB, Llama-3.3-70B, Groq, Streamlit.* [GitHub link]
2. **IPO Sentiment Analyzer** — DistilBERT + LogReg pipeline. 90.4% accuracy, +21% over BiLSTM baseline. *Tech: HuggingFace, Scikit-learn, TensorFlow.* [GitHub link]
3. **TrackPay (in progress)** — Agentic AI personal finance platform. Pre-incubated at IIT Madras. *Status: MVP in build.* [Link or "Coming soon"]

Optional 4th slot: **HR Automated Sales Hiring (Darwix AI)** — workflows, scoring logic, multi-channel automation pipeline; framed as "led at Darwix" rather than personal project.

Each project gets its own anchor route or modal — **not** an Unsplash thumbnail grid.

### 5.5 Writing
Single block. Link out to `medium.com/@ashwhotosh`. Maybe list 2–3 latest post titles fetched at build time (manual is fine — no live RSS needed).

### 5.6 Stack
One paragraph + grouped inline pills. Drop the 6-section grid of logo cards.

> **Build:** Python, SQL, C/C++. **AI/ML:** LangChain, LangGraph, RAG, HuggingFace, DistilBERT, Llama via Groq. **Product:** PRDs, user research, roadmap & prioritization, Agile/Scrum. **Data:** Pandas, NumPy. **Tools:** Notion, Jira, Git/GitHub.

Match the resume's actual skills section verbatim — no React/Node/PHP/MySQL filler unless you genuinely use them daily for TrackPay.

### 5.7 Education + Recognition (merged)
Two-line entries, no logos, no timeline visual:

- **B.Tech, CSE — IIIT Raichur** (2022–2026) · CS22B1013
- **ISC, Ashoka Junior College** — 85%
- **ICSE, Ashoka Universal School** — 91.80%

**Recognition** (right column or below):
- Top 5% of 1.2M in JEE · MHT-CET 97.1 percentile · Reliance Scholar
- Agile Foundations (IIBA) · Breaking into Product Management (GfG)

### 5.8 Contact
- `ashutoshgs.tech@gmail.com` (from resume — the current site uses `ashutoshgovindsingh2003@gmail.com`; reconcile, default to resume).
- `+91 7666338799`
- GitHub, LinkedIn, Medium icons.
- Optional: a single line *"Best way to reach me: email or LinkedIn DM. I reply within 24h."*
- **Drop the contact form.**

### 5.9 Footer
One line. Name, year, "Built with React + Vite. Source on GitHub →". That's it.

---

## 6. Files to change / create / delete

### Delete
- `src/components/Waves.tsx`, `src/components/Waves.css` — kill the wave canvas.
- `src/components/TypewriterText.tsx` — kill typewriter.
- `src/pages/BusinessProfile.tsx` + entire `src/components/business/` directory — kill the dual-profile concept.
- Remove `<spline-viewer>` from About; uninstall Spline script load.
- Remove any unused Unsplash URLs from `ProjectsSection`.

### Rewrite
- `src/index.css` — new color tokens (zinc/amber instead of purple), drop `.glass`, `.blur-circle`, `.gradient-text` utilities.
- `tailwind.config.ts` — new font family, new accent color, drop animations we don't use.
- `src/components/HeroSection.tsx` — strip to clean intro + 2 CTAs (per §5.1).
- `src/components/AboutSection.tsx` → rename to **Now** section, drop Spline.
- `src/components/ExperienceSection.tsx` — convert to timeline list, use **resume-accurate** entries only.
- `src/components/ProjectsSection.tsx` — 3 real case studies, no stock images.
- `src/components/SkillsSection.tsx` — compact paragraph + grouped pills.
- `src/components/EducationSection.tsx` — flat list, no timeline visual; merge in Recognition.
- `src/components/ContactSection.tsx` — strip form, replace with mailto + socials.
- `src/components/Navbar.tsx` — drop logo gap, simplify, drop mobile resume button duplication; nav items: Work / Projects / Writing / Contact.
- `src/components/Footer.tsx` — single line.
- `src/pages/Index.tsx` — remove Tech/Business toggle; remove navigate import.
- `index.html` — update `<title>` and add proper meta tags (OG image, description matching new positioning).

### Add
- `src/components/NowSection.tsx` (replaces About).
- `src/components/WritingSection.tsx`.
- `src/lib/fonts.ts` or `@import` in `index.css` for Instrument Serif + Inter + JetBrains Mono (use Google Fonts or Fontsource).
- `public/og.png` — proper Open Graph image for social shares.
- `public/resume.pdf` — host the resume locally instead of a Google Drive link (the current Drive link is for an older resume; new one should be the `Resume/APM-1.pdf` you just shared).

### Keep
- Routing setup, theme provider, shadcn primitives we still use (Button, Tooltip, Toast — drop the rest from imports).

---

## 7. Implementation phases

**Phase 1 — Foundation (design tokens)**
1. Update `tailwind.config.ts` and `src/index.css` with new palette, fonts, removal of decorative utilities.
2. Load new fonts.
3. Delete `Waves`, `TypewriterText`, `BusinessProfile`, `business/` directory; clean imports.

**Phase 2 — Content rewrite (no design polish yet)**
4. Rewrite Hero, Now, Experience, Projects, Stack, Education, Contact with resume-accurate copy in plain JSX.
5. Update `index.html` meta, drop the Drive-hosted resume link in favor of `/resume.pdf`.

**Phase 3 — Layout & motion**
6. Apply single-column editorial layout + asymmetric project case studies.
7. Add scroll-triggered fade-up (Framer Motion or CSS `@starting-style`).
8. Add status pill, mono details, accent link hover.

**Phase 4 — Polish & QA**
9. Light/dark mode parity check.
10. Mobile (375px) and desktop (1440px) review.
11. Lighthouse pass (target 95+ across).
12. Replace `og.png`, fix favicon if needed.
13. Manual content review — ensure every claim matches the resume.

---

## 8. Decisions (confirmed)

1. **Accent color** → **Amber** (`#E87A3E`-family, exact values picked in `index.css`). Warm, editorial, not purple, not generic blue.
2. **Photo** → **Keep**. Used as a small square (not circular) frame in hero; a second photo may appear in the Now section.
3. **Dual Tech/Business profile** → **Dropped**. One unified profile positioned around **Product Management + AI projects**. `BusinessProfile` route, `business/` components, and the floating toggle all removed.
4. **Email** → `ashutoshgovindsingh2003@gmail.com` (per user). Used in Hero socials and Contact.
5. **Phone** → `+91 7666338799`. Used in Contact.
6. **Resume button** → **Kept** in Navbar and Hero. Self-host `Resume/APM-1.pdf` as `public/resume.pdf` to avoid the stale Drive link.
7. **GitHub + LinkedIn** → **Kept** in Hero, Contact, and Footer.
8. **TrackPay** → Labeled as "in build" since no live URL was provided.

## 9. Positioning emphasis

Site is unified but **PM-forward**: hero lead is "Product Manager & AI builder," Work section leads with Founder/PM roles, Projects section leads with the agentic-AI case studies. The tech stack still appears (you ship code), but framed as *what I use to build products*, not as the headline identity.
