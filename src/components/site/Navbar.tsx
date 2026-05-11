import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { SITE } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand shadow-glow">
            <span className="block h-2 w-2 rounded-sm bg-background" />
          </span>
          <span className="font-semibold tracking-tight">{SITE.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Home</Link>
          <Link to="/blog" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Blog</Link>
          <Link to="/pricing" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Pricing</Link>
          <Link to="/templates" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Templates</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SITE.visualflowUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground shadow-glow hover:opacity-90 transition"
          >
            Visit VisualFlow
          </a>
        </div>
      </div>
    </header>
  );
}
