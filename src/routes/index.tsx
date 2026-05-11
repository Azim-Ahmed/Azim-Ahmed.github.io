import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, GitBranch, Layers, BookOpen, Workflow, Boxes, Bot, Network, Map, BarChart3, Brain } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NodeGraph } from "@/components/site/NodeGraph";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "VisualFlow Labs — Production React Flow Templates for SaaS" },
      {
        name: "description",
        content:
          "Build workflow builders, automation tools, node-based editors and visual SaaS platforms faster with production-ready React Flow systems.",
      },
    ],
  }),
  prerender: true,
});

const TEMPLATES = [
  { name: "React Flow Templates", icon: Workflow, desc: "Drop-in canvas systems for SaaS." },
  { name: "Workflow Automation", icon: Zap, desc: "Trigger → action graphs ready to ship." },
  { name: "AI Workflow Builders", icon: Bot, desc: "Agent and prompt orchestration UIs." },
  { name: "Microservice Diagrams", icon: Network, desc: "Visualize service topology in real time." },
  { name: "Marketing Automation", icon: GitBranch, desc: "Branching journeys with conditions." },
  { name: "Langflow Builder", icon: Brain, desc: "LLM chain composer template." },
  { name: "Timeline Flow", icon: BarChart3, desc: "Time-based scheduling canvas." },
  { name: "Sankey Diagram", icon: Layers, desc: "Flow & allocation visualization." },
  { name: "Multi-directional Mindmap", icon: Map, desc: "Radial expansion node tree." },
];

const TESTIMONIALS = [
  { quote: "Cut 3 months off our roadmap. The canvas just worked.", who: "Maya R.", role: "CTO, FlowOps" },
  { quote: "The cleanest React Flow code I've ever read.", who: "Daniel K.", role: "Staff Engineer" },
  { quote: "Our automation product shipped in weeks instead of quarters.", who: "Priya S.", role: "PM, AutomateAI" },
];

const FAQS = [
  { q: "Is this built on React Flow?", a: "Yes — every template uses React Flow as the rendering core, with our patterns layered on top." },
  { q: "Do I get the source code?", a: "Yes. All templates ship as TypeScript source you fully own." },
  { q: "Can I use it commercially?", a: "Yes, all licenses include commercial use in your SaaS product." },
  { q: "How does this compare to GoJS or JointJS?", a: "Lighter, MIT licensed, React-native, and free of legacy DOM APIs." },
];

function HomePage() {
  const featured = POSTS.slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    sameAs: [SITE.github, SITE.linkedin],
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-brand" />
              Now shipping: Langflow + AI Agent templates
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Production Ready{" "}
              <span className="text-gradient-brand">React Flow Templates</span>{" "}
              for SaaS Applications
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Build workflow builders, automation tools, node-based editors and visual SaaS platforms faster with production-ready React Flow systems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/templates"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-glow hover:opacity-90 transition"
              >
                Explore Templates <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border glass px-6 text-sm font-medium hover:bg-accent transition"
              >
                <BookOpen className="h-4 w-4" /> Read Blog
              </Link>
              <a
                href={SITE.visualflowUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md px-6 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Visit VisualFlow →
              </a>
            </div>
          </div>

          <div className="relative mt-16 md:mt-20 mx-auto max-w-5xl">
            <div className="rounded-2xl glass-strong shadow-card p-4 md:p-8 animate-float-slow">
              <NodeGraph />
            </div>
            <div className="absolute -inset-x-10 -bottom-10 h-40 bg-brand/10 blur-3xl -z-10" aria-hidden />
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="container-page py-24" id="templates">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm text-brand font-medium">Featured products</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">A template for every visual surface</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">From AI agent canvases to Sankey diagrams — ship the visual layer of your SaaS in days.</p>
          </div>
          <a href={SITE.visualflowUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand hover:opacity-90">
            Browse on VisualFlow <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map(({ name, icon: Icon, desc }) => (
            <a
              key={name}
              href={SITE.visualflowUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl glass p-6 hover:bg-accent/50 transition shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-brand opacity-0 group-hover:opacity-100 transition">
                View on VisualFlow <ArrowRight className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-brand font-medium">From the blog</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Notes on visual SaaS</h2>
          </div>
          <Link to="/blog" className="text-sm text-brand hover:opacity-90 inline-flex items-center gap-1">All articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group rounded-xl glass overflow-hidden shadow-card hover:bg-accent/40 transition"
            >
              <div className="aspect-[16/9] bg-brand relative">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute bottom-3 left-3 text-xs glass rounded px-2 py-1">{post.category}</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold group-hover:text-brand transition">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                <p className="mt-4 text-xs text-muted-foreground">{post.readingTime} · {post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">Loved by visual builders</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.who} className="rounded-xl glass p-6 shadow-card">
              <blockquote className="text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{t.who}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Frequently asked</h2>
        <div className="mt-10 max-w-3xl mx-auto divide-y divide-border rounded-xl glass">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-page py-24">
        <div className="rounded-2xl glass-strong p-10 md:p-14 text-center shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-hero opacity-60" aria-hidden />
          <div className="relative">
            <Boxes className="mx-auto h-8 w-8 text-brand" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Get one workflow idea a week</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Deep-dives on React Flow, node UIs, and what we're shipping at VisualFlow.</p>
            <form
              className="mt-6 flex max-w-md mx-auto gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                placeholder="you@startup.com"
                className="flex-1 h-11 rounded-md bg-background/60 border border-border px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="h-11 rounded-md bg-brand px-5 text-sm font-medium text-brand-foreground shadow-glow hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
