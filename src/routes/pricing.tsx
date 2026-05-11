import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Check } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Starter $100 & Professional $999 | React Flow Templates | VisualFlow Labs" },
      {
        name: "description",
        content:
          "VisualFlow Labs pricing: Starter at $100 for one production React Flow template, Professional at $999 for the full library, AI workflow builders, commercial SaaS licensing, and priority support. Compare plans and license terms.",
      },
      {
        name: "keywords",
        content:
          "React Flow templates pricing, workflow builder license, node-based UI SaaS, VisualFlow Starter, VisualFlow Professional, TypeScript canvas templates, commercial React Flow",
      },
      { property: "og:title", content: "VisualFlow Labs pricing — Starter $100, Professional $999" },
      {
        property: "og:description",
        content:
          "One-time pricing for production React Flow templates: $100 Starter, $999 Professional, plus Enterprise. Full TypeScript source, commercial licenses, and workflow-builder patterns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VisualFlow Labs — React Flow template pricing ($100 / $999)" },
      {
        name: "twitter:description",
        content:
          "Compare Starter and Professional plans for node-based SaaS, AI workflow canvases, and automation UIs built on React Flow.",
      },
    ],
  }),
});

const TIERS = [
  {
    name: "Starter",
    price: "$100",
    blurb: "For solo devs and small teams shipping one visual surface.",
    features: ["1 React Flow template", "TypeScript source", "Single-project license", "Community support"],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "$999",
    blurb: "For product teams standardizing on React Flow across the stack.",
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

const pricingLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/pricing#webpage`,
      name: "VisualFlow Labs — React Flow template pricing",
      description:
        "Starter ($100) and Professional ($999) pricing for production React Flow templates, workflow builders, and node-based SaaS UIs.",
      url: `${SITE.url}/pricing`,
      mainEntity: { "@id": `${SITE.url}/pricing#offers` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/pricing#offers`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Starter",
            price: "100",
            priceCurrency: "USD",
            description: "One React Flow template, TypeScript source, single-project commercial license.",
            url: `${SITE.url}/pricing`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Professional",
            price: "999",
            priceCurrency: "USD",
            description:
              "Full template library, AI workflow builders, commercial SaaS license, priority support, lifetime updates.",
            url: `${SITE.url}/pricing`,
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/pricing#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is VisualFlow Labs pricing one-time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Starter and Professional are one-time purchases for the template catalog. Enterprise may include optional recurring services such as dedicated support or custom build weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Can I upgrade from Starter ($100) to Professional ($999)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upgrades are handled on VisualFlow with a prorated difference when moving from one template to the full library; contact support with your purchase email.",
          },
        },
        {
          "@type": "Question",
          name: "Do VisualFlow templates work with Next.js, Vite, and TanStack Start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Templates target modern React 18 and 19 applications. You provide router and data layer; canvas code uses standard React rendering.",
          },
        },
        {
          "@type": "Question",
          name: "How do VisualFlow templates compare to raw React Flow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You keep React Flow performance and compatibility while gaining production patterns: validation, keyboard UX, persistence hooks, and accessibility defaults.",
          },
        },
      ],
    },
  ],
};

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingLd) }} />
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
                href={SITE.pricingUrl}
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
          All paid plans include full TypeScript source, documented patterns, and a commercial use license aligned to the tier. Enterprise pricing is scoped after a short discovery call.
        </p>
      </section>

      {/* SEO: in-depth pricing & product context */}
      <article className="border-t border-border bg-muted/20">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            How VisualFlow Labs pricing maps to your roadmap
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {SITE.name} sells production-ready{" "}
            <strong className="font-semibold text-foreground">React Flow templates</strong> and reference architectures for
            workflow builders, automation canvases, and node-based SaaS. Plans are one-time purchases—no per-seat
            metering—so your COGS stay predictable as you scale MAU.
          </p>

          <h3 className="mt-12 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">
            Starter at $100 — ship one premium canvas
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Choose Starter when you need a single, opinionated React Flow system—complete with nodes, edges, layout
            patterns, and TypeScript types you can extend. It is ideal for founders validating a workflow UI, internal
            tools teams, or an MVP automation surface. You receive source you own, a single-project commercial license, and
            community support channels so you are not blocked while integrating with your auth, persistence, and API layers.
          </p>

          <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">
            Professional at $999 — standardize visual SaaS
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Professional unlocks the full template catalog, including AI-oriented canvases (agent graphs, Langflow-style
            composers) and advanced diagramming patterns. It is built for startups and scale-ups that treat the canvas as a
            core product surface: multiple squads can reuse the same interaction model, design tokens, and testing
            strategy. Priority support and lifetime updates protect your build as React Flow and browser APIs evolve.
          </p>

          <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">
            Starter vs Professional — quick comparison
          </h3>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed marker:text-brand">
            <li>
              <span className="font-medium text-foreground">Template breadth:</span> Starter includes one curated template;
              Professional includes every shipped template and future catalog additions during your update window.
            </li>
            <li>
              <span className="font-medium text-foreground">Commercial scope:</span> Starter covers one production product
              or internal system; Professional covers multiple SaaS surfaces under one org license (see agreement for exact
              limits).
            </li>
            <li>
              <span className="font-medium text-foreground">Support and roadmap:</span> Community forums for Starter;
              prioritized responses and implementation guidance for Professional teams shipping on deadline.
            </li>
          </ul>

          <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">
            Why React Flow templates matter for SEO and product
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Searchers comparing <em className="text-foreground/90">workflow builder frameworks</em>,{" "}
            <em className="text-foreground/90">node-based editors</em>, and{" "}
            <em className="text-foreground/90">React Flow vs diagramming SDKs</em> usually care about three things:
            time-to-market, bundle weight, and licensing. Our templates are MIT-friendly at the library layer (React Flow
            itself) with clear commercial terms on VisualFlow-authored glue code—so marketing pages, in-app help, and
            programmatic SEO around your workflows stay consistent with a single canvas vocabulary (nodes, handles, minimap,
            controls).
          </p>

          <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">
            License, security, and procurement notes
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Source downloads are delivered as versioned packages you can audit in CI. Enterprise customers can add custom
            node libraries, VPC-friendly delivery, SLAs, and vendor paperwork. If you need SSO-gated docs, penetration-test
            summaries, or a DPA package, start from the Enterprise tier conversation on{" "}
            <a href={SITE.visualflowUrl} className="font-medium text-brand hover:underline">
              {SITE.domain}
            </a>
            .
          </p>

          <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground">Frequently asked questions</h3>
          <dl className="mt-4 space-y-6">
            <div>
              <dt className="font-medium text-foreground">Is pricing really one-time?</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Yes for Starter and Professional: pay once per tier, no subscription for the template catalog itself.
                Enterprise may include optional recurring services such as dedicated support or custom build weeks.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Can I upgrade from Starter ($100) to Professional ($999)?</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Upgrades are handled on VisualFlow so you only pay the difference when moving from a single template to the
                full library—contact support with your purchase email for a prorated path.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Do templates work with Next.js, Vite, and TanStack Start?</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Templates target modern React 18/19 apps. Bring your own router and data layer; the canvas code is
                framework-agnostic beyond standard React rendering.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">How does this compare to building on raw React Flow?</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                You still get React Flow performance and ecosystem compatibility—we add production patterns (validation,
                keyboard UX, persistence hooks, accessibility defaults) so you skip weeks of experimentation.
              </dd>
            </div>
          </dl>

          <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
            Ready to evaluate in your repo? Browse templates on{" "}
            <a href={SITE.visualflowUrl} className="font-medium text-brand hover:underline">
              VisualFlow
            </a>{" "}
            or read deep-dives on the{" "}
            <Link to="/blog" className="font-medium text-brand hover:underline">
              VisualFlow Labs blog
            </Link>{" "}
            for workflow architecture, automation UX, and node-based interface design.
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
}
