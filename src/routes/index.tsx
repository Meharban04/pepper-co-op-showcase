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

type Goal = {
  num: string;
  category: string;
  title: string;
  goal: string;
  action: string;
  outcome: string;
  reflection: string;
};

const goals: Goal[] = [
  {
    num: "Goal 01",
    category: "Critical & Creative Thinking",
    title: "Inquiry & Analysis",
    goal:
      "Get genuinely good at unpacking problems at Pepper — not just the obvious surface, but the hidden dependencies and downstream effects. Use tools like Cursor, Claude, and AWS to generate multiple solution paths and design systems that don't just patch a problem today, but help Pepper scale tomorrow.",
    action:
      "On every project I started by sitting with the team that owned the pain — ops, support, catalog — and mapping the current workflow end-to-end before writing a line of code. I'd brainstorm at least three angles per problem, weigh which stack made sense (Lovable vs. n8n vs. raw SQL), and pressure-test the shortlist with my manager before committing.",
    outcome:
      "The SALT Control Center and Recommended + Similar tools both came out of this loop — collapsing what had been multi-tab, multi-team workflows into a single screen. I can now defend why each tool exists, what it replaced, and which downstream metrics it should move.",
    reflection:
      "Looking back, the biggest shift was learning to slow down at the start of a project instead of jumping straight to building. The instinct to ship fast is still there, but I trust the upfront mapping more now — it consistently saved me from rebuilding things mid-stream. Where I want to keep growing is in quantifying impact: I can articulate what each tool replaced, but I'd like to get sharper at tying that back to hard numbers earlier in the process.",
  },
  {
    num: "Goal 02",
    category: "Communicating",
    title: "Oral Communication",
    goal:
      "Get sharper at talking about my work — especially when explaining technical decisions to people who aren't technical. Present the tools I build with confidence, drive better requirement-gathering meetings, and ask the kind of questions that surface what teams actually need.",
    action:
      "Before every demo I rehearsed with my audience in mind first — adjusting depth for ops vs. engineering. In meetings I leaned into active listening: restating what stakeholders said, asking what would break the workflow, and looping back with my manager for feedback on how the message landed.",
    outcome:
      "I demoed the SALT Control Center and User Diagnostics tools live to cross-functional teammates and walked away with concrete adoption — not just polite nods. Stakeholders started pulling me into scoping conversations earlier, which is the clearest signal the communication was working.",
    reflection:
      "Early in the term I leaned too hard on showing the build instead of explaining the why. Once I started leading with the problem and the user, demos landed differently — people asked sharper questions and surfaced edge cases I'd missed. I'm more comfortable in the room now, but I want to keep working on async communication too: tighter Loom walkthroughs and written specs that don't rely on me being there to narrate.",
  },
  {
    num: "Goal 03",
    category: "Technological Literacy",
    title: "Stack Fluency",
    goal:
      "Build real fluency across Pepper's stack — the no-code platforms, the AI layer, and the data plumbing underneath. Move beyond knowing how to use a tool to understanding why we picked it, where it breaks, and how to wire several together into something useful, fast.",
    action:
      "I went deep on Lovable and n8n on every project, pushed AI features into the workflow wherever they removed manual toil (Claude for lead scoring, OpenAI for catalog tasks), and kept sharpening SQL + Python for the moments no-code couldn't carry the weight. I treated each tool's limits as the interesting part.",
    outcome:
      "I shipped three internal tools and an AI-powered lead scoring automation in a single term, mixing Lovable, n8n, Postgres, and LLM APIs. I can now scope an idea on Monday and have a working prototype in front of users by Friday — which is the bar I wanted to hit.",
    reflection:
      "What surprised me most was how much the tools themselves shaped how I thought about problems — knowing n8n well meant I started seeing automation opportunities everywhere, not just where someone asked for them. I hit the speed bar I wanted, but I noticed the gap between prototype and production-grade is where the real engineering lives, and that's the next bar I want to clear.",
  },
];

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
            <a href="#goals" className="hover:text-accent transition-colors">Goals</a>
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
                .
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

        <section id="company" className="mb-32 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <span className="size-2 bg-accent rounded-full" />
                <span className="font-mono text-sm uppercase tracking-widest">
                  The Company
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                Pepper Labs.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="p-6 bg-surface border-l-2 border-accent">
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                  Mission
                </h4>
                <p className="text-sm leading-relaxed">
                  Pepper is rebuilding the food supply chain from the ground
                  up. Founded by tech veterans from Uber Eats, Google, and
                  Amazon, the team ships digital tools that power foodservice
                  distributors — modernizing an industry that still runs on
                  phone calls, fax orders, and spreadsheets.
                </p>
              </div>
              <div className="p-6 bg-surface border-l-2 border-foreground">
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                  What They Do
                </h4>
                <p className="text-sm leading-relaxed">
                  Pepper builds the operating system for foodservice — a
                  platform connecting distributors, suppliers, and operators
                  through smarter ordering, catalog intelligence, and
                  AI-powered workflows that take friction out of every link in
                  the chain.
                </p>
              </div>
              <div className="p-6 bg-surface border-l-2 border-accent">
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                  Why It Matters
                </h4>
                <p className="text-sm leading-relaxed">
                  Foodservice is a multi-trillion dollar industry running on
                  decades-old infrastructure. Pepper's bet: speed, ownership,
                  and small teams shipping real software beat bureaucracy —
                  and the supply chain is overdue for both.
                </p>
              </div>
            </div>
          </div>
        </section>

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
          id="goals"
          className="mt-40 md:mt-48 pt-20 border-t border-border"
        >
          <div className="mb-16 md:mb-20 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Learning Goals · Term 03
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter">
              What I set out to learn.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Three goals tracked across the term — the rationale, the moves I
              made, and how I know I hit them.
            </p>
          </div>
          <div className="space-y-16 md:space-y-20">
            {goals.map((g) => (
              <article
                key={g.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="size-2 bg-accent rounded-full" />
                    <span className="font-mono text-sm uppercase tracking-widest">
                      {g.num} / {g.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
                    {g.title}
                  </h3>
                </div>
                <div className="lg:col-span-8 space-y-4">
                  <div className="p-6 bg-surface border-l-2 border-accent">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Goal
                    </h4>
                    <p className="text-sm leading-relaxed">{g.goal}</p>
                  </div>
                  <div className="p-6 bg-surface border-l-2 border-foreground">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Action Plan
                    </h4>
                    <p className="text-sm leading-relaxed">{g.action}</p>
                  </div>
                  <div className="p-6 bg-surface border-l-2 border-accent">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Measure of Success
                    </h4>
                    <p className="text-sm leading-relaxed">{g.outcome}</p>
                  </div>
                  <div className="p-6 bg-surface border-l-2 border-foreground">
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                      Reflection
                    </h4>
                    <p className="text-sm leading-relaxed">{g.reflection}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
