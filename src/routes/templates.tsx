import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NodeGraph } from "@/components/site/NodeGraph";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/templates")({
  component: TemplatesPage,
  head: () => ({
    meta: [
      { title: "Templates — React Flow, Langflow, Sankey & More | VisualFlow Labs" },
      {
        name: "description",
        content:
          "Explore production-ready React Flow templates: workflow automation, AI agents, Langflow, Sankey, mindmaps and more.",
      },
    ],
  }),
});

const TEMPLATES = [
  { name: "React Flow Workflow Builder", desc: "Trigger-based automation canvas with branching and conditions." },
  { name: "AI Agent Builder", desc: "Compose multi-step LLM agents with tools, memory and routing." },
  { name: "Langflow Builder", desc: "Visual chain composer for LLM apps." },
  { name: "Microservice Diagram", desc: "Real-time topology of your service mesh." },
  { name: "Marketing Automation", desc: "Multi-channel customer journey graphs." },
  { name: "Timeline Flow", desc: "Time-based dependency canvas for scheduling." },
  { name: "Sankey Diagram", desc: "Flow & allocation visualization." },
  { name: "Multi-directional Mindmap", desc: "Radial node trees that expand in any direction." },
  { name: "Node Editor Starter", desc: "Bare-bones React Flow starter to fork." },
];

function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative pt-20 pb-16 text-center">
          <p className="text-sm text-brand font-medium">Templates</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Every visual surface, ready to ship.</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Production React Flow templates designed for SaaS — own the source, deploy in days.
          </p>
        </div>
        <div className="container-page pb-16">
          <div className="rounded-2xl glass-strong shadow-card p-6 md:p-10 max-w-5xl mx-auto">
            <NodeGraph />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => (
            <a
              key={t.name}
              href={SITE.visualflowUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl glass p-6 shadow-card hover:bg-accent/40 transition"
            >
              <h2 className="font-semibold group-hover:text-brand transition">{t.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-brand">
                View on VisualFlow <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
