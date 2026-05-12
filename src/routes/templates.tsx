import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NodeGraph } from "@/components/site/NodeGraph";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { TEMPLATES } from "@/lib/templates";

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
              href={t.link}
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
