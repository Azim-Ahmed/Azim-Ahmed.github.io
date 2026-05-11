import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { POSTS } from "@/lib/blog";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog — React Flow, Workflow Builders & Visual SaaS | VisualFlow Labs" },
      {
        name: "description",
        content:
          "Articles on React Flow, node-based UI, visual programming, automation workflows, and SaaS architecture.",
      },
    ],
  }),
  prerender: true,
});

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const categories = useMemo(() => Array.from(new Set(POSTS.map((p) => p.category))), []);
  const filtered = POSTS.filter(
    (p) =>
      (!cat || p.category === cat) &&
      (q === "" || (p.title + p.description + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container-page pt-16 pb-10">
        <p className="text-sm text-brand font-medium">Blog</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Visual SaaS, in writing.</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Long-form articles on React Flow, node-based UIs, automation workflows and the patterns behind production visual products.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full h-10 pl-9 pr-3 rounded-md bg-background/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat(null)}
              className={`px-3 h-8 rounded-full border text-xs transition ${!cat ? "bg-brand text-brand-foreground border-transparent" : "border-border hover:bg-accent"}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 h-8 rounded-full border text-xs transition ${cat === c ? "bg-brand text-brand-foreground border-transparent" : "border-border hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
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
                <h2 className="font-semibold group-hover:text-brand transition">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                <p className="mt-4 text-xs text-muted-foreground">{post.readingTime} · {post.date}</p>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground col-span-full text-center py-12">No articles match your search.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
