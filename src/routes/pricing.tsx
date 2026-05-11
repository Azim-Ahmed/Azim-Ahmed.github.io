import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Check } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — React Flow Templates & VisualFlow | VisualFlow Labs" },
      { name: "description", content: "Simple, transparent pricing for production React Flow templates and node-based UI systems." },
    ],
  }),
  prerender: true,
});

const TIERS = [
  {
    name: "Starter",
    price: "$49",
    blurb: "For solo devs prototyping a node-based UI.",
    features: ["1 React Flow template", "TypeScript source", "Single-project license", "Community support"],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "$199",
    blurb: "For startup teams shipping a real product.",
    features: ["All templates", "AI workflow + Langflow builder", "Commercial SaaS license", "Priority support", "Lifetime updates"],
    cta: "Get Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "For platforms with custom canvas needs.",
    features: ["Everything in Professional", "Custom node libraries", "Dedicated engineer", "SLA & invoicing", "Private Slack"],
    cta: "Talk to sales",
    popular: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container-page pt-20 pb-12 text-center">
        <p className="text-sm text-brand font-medium">Pricing</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Build the visual layer of your SaaS</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Production React Flow templates, node libraries and runtime patterns. One-time pricing — no per-seat fees.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 shadow-card transition hover:-translate-y-0.5 ${
                t.popular ? "bg-brand text-brand-foreground shadow-glow" : "glass"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-foreground text-xs font-medium px-3 py-1 border border-border">
                  Most popular
                </span>
              )}
              <h2 className={`text-lg font-semibold ${t.popular ? "" : ""}`}>{t.name}</h2>
              <p className={`mt-1 text-sm ${t.popular ? "text-brand-foreground/80" : "text-muted-foreground"}`}>{t.blurb}</p>
              <p className="mt-6 text-4xl font-bold tracking-tight">{t.price}</p>
              <p className={`text-xs ${t.popular ? "text-brand-foreground/70" : "text-muted-foreground"}`}>one-time</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 ${t.popular ? "" : "text-brand"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.visualflowUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-md font-medium text-sm transition ${
                  t.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-brand text-brand-foreground hover:opacity-90 shadow-glow"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include source code, lifetime updates and a commercial license.
        </p>
      </section>
      <Footer />
    </div>
  );
}
