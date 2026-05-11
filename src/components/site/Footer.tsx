import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand">
              <span className="block h-2 w-2 rounded-sm bg-background" />
            </span>
            <span className="font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Production-ready React Flow templates and node-based UI systems for SaaS.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href={SITE.visualflowUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">Templates</a></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/templates" className="hover:text-foreground">Showcase</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><a href={SITE.visualflowUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">VisualFlow.dev</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="mt-3 flex gap-2">
            <a href={SITE.github} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href={`https://twitter.com/${SITE.twitter.replace("@","")}`} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col md:flex-row items-center justify-between py-6 text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Built with React Flow love · <a href={SITE.visualflowUrl} target="_blank" rel="noreferrer" className="hover:text-foreground underline-offset-4 hover:underline">{SITE.domain}</a></p>
        </div>
      </div>
    </footer>
  );
}
