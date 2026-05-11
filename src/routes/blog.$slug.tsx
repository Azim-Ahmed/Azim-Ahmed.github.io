import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getPost, POSTS, type Post } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found" }] };
    return {
      meta: [
        { title: `${post.title} | VisualFlow Labs` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-sm text-brand">404</p>
        <h1 className="mt-2 text-2xl font-semibold">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-brand">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground mt-2">{error.message}</p>
      </div>
    </div>
  ),
  component: PostPage,
  prerender: POSTS.map(post => ({ slug: post.slug })),
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const headings = post.content.filter((s) => s.heading).map((s) => s.heading as string);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />

      <article className="container-page pt-12 pb-20">
        <nav className="text-xs text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm text-brand font-medium">{post.category}</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readingTime}</span>
            <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4" />{post.tags.join(", ")}</span>
          </div>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="prose-invert max-w-none">
            {post.content.map((s, i) => (
              <section key={i} className="mb-8">
                {s.heading && <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">{s.heading}</h2>}
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-foreground/90 leading-relaxed mb-4">{p}</p>
                ))}
              </section>
            ))}

            <div className="mt-12 rounded-xl glass p-6 shadow-card flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold">Want this in production today?</p>
                <p className="text-sm text-muted-foreground">Get the matching template on VisualFlow.</p>
              </div>
              <a
                href={SITE.visualflowUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-medium text-brand-foreground shadow-glow"
              >
                Visit VisualFlow <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-lg glass p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">On this page</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {headings.map((h) => (
                    <li key={h} className="text-muted-foreground hover:text-foreground transition">{h}</li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-xl glass p-5 hover:bg-accent/40 transition shadow-card"
                >
                  <p className="text-xs text-brand">{p.category}</p>
                  <h3 className="mt-2 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
}
