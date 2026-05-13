import { createFileRoute } from "@tanstack/react-router";
import saltImg from "@/assets/salt-control-center.png";
import diagImg from "@/assets/user-diagnostics.png";
import recImg from "@/assets/recommended-similar.png";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  num: string;
  tag: string;
  title: string;
  lede: string;
  problem: string;
  build: string;
  img: string;
  reverse?: boolean;
};

const projects: Project[] = [
  {
    num: "Tool 01",
    tag: "Distributor Operations",
    title: "SALT Control Center",
    lede: "A unified control panel for managing distributor configuration, API integration, and rematch workflows across the Pepper supply graph.",
    problem:
      "Onboarding a distributor required engineers to manually toggle SALT API integrations, edit configs, and trigger rematches across disconnected internal tools.",
    build:
      "Designed and shipped the SALT Control Center: a single screen for distributor details, API toggles, configuration editing, rematch jobs, and per-supplier tool management.",
    img: saltImg,
  },
  {
    num: "Tool 02",
    tag: "Support Tooling",
    title: "User Diagnostics",
    lede: "A purpose-built lookup tool for diagnosing user access issues across operator and distributor employees in seconds.",
    problem:
      "Support and ops were manually querying the database to debug login, invite, and permission issues — slow, risky, and error-prone for non-technical teammates.",
    build:
      "Shipped a clean diagnostics surface: search by name / email / phone, view recently created users, and surface user type, status, and account age at a glance.",
    img: diagImg,
    reverse: true,
  },
  {
    num: "Tool 03",
    tag: "Catalog Intelligence",
    title: "Recommended + Similar Items",
    lede: "Internal tooling for assigning recommended and substitute items across distributor catalogs, with bi-directional sync.",
    problem:
      "Catalog teams had no scalable way to maintain recommended / similar item relationships — links were one-way, manual, and easily drifted out of sync.",
    build:
      "Built a focused interface for searching items, assigning recommended + similar SKUs, managing item substitutions, and toggling bi-directional sync so links stay reciprocal.",
    img: recImg,
  },
];

const skills = {
  Building: ["Lovable", "Cursor", "n8n", "Retool"],
  Data: ["SQL / Postgres", "Python", "Airtable", "Spreadsheets"],
  Intelligence: ["OpenAI API", "Anthropic Claude", "Perplexity", "Prompt Eng"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm font-medium tracking-tighter">
            CO-OP_LOG:2026.01_04
          </span>
          <div className="hidden sm:flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-accent transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <header className="mb-28 md:mb-40 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-[820px]">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Co-op Analyst · Pepper Labs
              </span>
              <h1 className="mt-6 text-6xl sm:text-7xl md:text-[112px] font-extrabold leading-[0.88] tracking-tighter text-balance">
                BIZ&nbsp;OPS
                <br />
                PRODUCT
                <br />
                ENGINEER
              </h1>
              <p className="mt-8 text-lg md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                Four months shipping internal tools and AI-powered automations
                for the food supply chain at{" "}
                <span className="text-foreground font-medium underline decoration-accent decoration-2 underline-offset-4">
                  Pepper
                </span>
                . Code, no-code, and a bias for action.
              </p>
            </div>
            <div className="flex flex-col gap-1 shrink-0">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Term
              </span>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tighter">
                JAN — APR
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Toronto / Remote
              </span>
            </div>
          </div>
        </header>

        <section id="projects" className="space-y-32 md:space-y-40">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`lg:col-span-5 space-y-8 ${p.reverse ? "lg:order-last" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="size-2 bg-accent rounded-full" />
                  <span className="font-mono text-sm uppercase tracking-widest">
                    {p.num} / {p.tag}
                  </span>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{p.lede}</p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-surface border-l-2 border-accent">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Problem
                    </h4>
                    <p className="text-sm leading-relaxed">{p.problem}</p>
                  </div>
                  <div className="p-6 bg-surface border-l-2 border-foreground">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Build
                    </h4>
                    <p className="text-sm leading-relaxed">{p.build}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-surface">
                  <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="skills"
          className="mt-40 md:mt-48 pt-20 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Stack & Capabilities
              </h3>
              <p className="text-2xl font-extrabold tracking-tighter">
                The toolkit I shipped with.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <h4 className="font-extrabold text-lg mb-4">{group}</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm font-mono">
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-surface py-20 md:py-24 border-t border-border mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
                Building what's next in food-tech.
              </h2>
              <p className="text-muted-foreground">
                Open to next steps after this co-op term. Let's talk.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <a
                href="#"
                className="text-xl md:text-2xl font-extrabold tracking-tight hover:text-accent transition-colors underline decoration-accent/40 underline-offset-8"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl font-extrabold tracking-tight hover:text-accent transition-colors underline decoration-accent/40 underline-offset-8"
              >
                Email
              </a>
              <span className="font-mono text-xs text-muted-foreground mt-6">
                © 2026 — BUILT AT PEPPER LABS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
