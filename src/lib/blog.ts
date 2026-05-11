export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  author: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "react-flow-workflow-builder-for-saas-apps",
    title: "React Flow Workflow Builder for SaaS Apps",
    description:
      "How to architect a production workflow builder with React Flow — nodes, edges, validation, persistence, and execution.",
    date: "2025-04-22",
    readingTime: "9 min read",
    category: "React Flow",
    tags: ["React Flow", "Workflow Builder", "SaaS"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Workflow builders are quickly becoming a core surface in modern SaaS — from CRM automations to AI orchestration. React Flow gives you the canvas primitives, but turning them into a production-grade builder requires thinking about state, validation, and runtime execution.",
        ],
      },
      {
        heading: "Why React Flow",
        paragraphs: [
          "React Flow ships with battle-tested viewport, dragging, snapping, and selection logic. You bring the node library, the side panel, and the persistence layer — and you get a builder that feels native on day one.",
          "Most teams reinvent these primitives once and never again. Starting from a template like the ones shipped by VisualFlow saves weeks of work.",
        ],
      },
      {
        heading: "Architecture in 3 layers",
        paragraphs: [
          "1. Schema layer — every node type declares its inputs, outputs, and validation rules.",
          "2. Canvas layer — React Flow renders nodes and edges from the schema with custom node components.",
          "3. Runtime layer — a topological executor walks the graph, evaluates node handlers, and streams results back to the UI.",
        ],
      },
      {
        heading: "SEO and discoverability for workflow products",
        paragraphs: [
          "Public marketing pages should use clear H1s and FAQs that mirror how buyers search: “workflow builder”, “no-code automation UI”, and “React Flow SaaS”. In-app help and docs should reuse the same vocabulary so search engines see consistent topical authority.",
        ],
      },
    ],
  },
  {
    slug: "why-react-flow-is-perfect-for-automation-platforms",
    title: "Why React Flow is Perfect for Automation Platforms",
    description:
      "Performance, extensibility and DX — what makes React Flow the right canvas for Zapier-style automation tools.",
    date: "2025-04-15",
    readingTime: "7 min read",
    category: "Automation",
    tags: ["Automation", "React Flow", "Node UI"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Automation platforms live and die by their canvas. React Flow's headless rendering model and event system make it the most flexible foundation for Zapier-, n8n- or Make-style products.",
        ],
      },
      {
        heading: "What automation buyers search for",
        paragraphs: [
          "Comparison keywords such as “visual automation builder”, “trigger action editor”, and “branching logic UI” belong in landing copy, schema.org SoftwareApplication blocks, and case studies. Pair them with technical posts on graph validation and idempotent runs to cover both commercial and engineering intent.",
        ],
      },
    ],
  },
  {
    slug: "building-node-based-ui-with-react-flow",
    title: "Building Node Based UI with React Flow",
    description:
      "A step-by-step guide to designing custom nodes, handles, and edges that feel premium.",
    date: "2025-04-08",
    readingTime: "11 min read",
    category: "Tutorials",
    tags: ["React Flow", "Node UI", "UX"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "A premium node-based UI is mostly typography, spacing and color discipline. Get those right and the canvas instantly feels like Linear, not like a 2010 graph editor.",
        ],
      },
      {
        heading: "Custom nodes and semantic HTML",
        paragraphs: [
          "Use headings and labels inside node chrome sparingly so screen readers announce meaningful groups. Expose connection points with predictable tab order and visible focus rings to satisfy WCAG and to rank for accessibility-related long-tail queries.",
        ],
      },
    ],
  },
  {
    slug: "visual-programming-interfaces-in-modern-saas",
    title: "Visual Programming Interfaces in Modern SaaS",
    description:
      "Why visual-first builders are eating the SaaS landscape and how to design them.",
    date: "2025-03-28",
    readingTime: "6 min read",
    category: "Visual Programming",
    tags: ["Visual Programming", "SaaS"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Visual-first interfaces compress the learning curve of complex products into minutes. Search demand clusters around “visual programming”, “node editor SaaS”, and “low-code canvas” — align your sitemap and glossary pages with those clusters.",
        ],
      },
      {
        heading: "Content clusters that support SEO",
        paragraphs: [
          "Publish a pillar page on visual programming, then link tutorials on React Flow state, layout, and persistence. Internal links from pricing and templates reinforce topical relevance for crawlers.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-vs-gojs",
    title: "React Flow vs GoJS",
    description: "Honest comparison: licensing, performance, customization, and developer experience.",
    date: "2025-03-20",
    readingTime: "8 min read",
    category: "Comparisons",
    tags: ["React Flow", "GoJS", "Diagramming"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "GoJS is powerful but commercial. React Flow is MIT, React-native, and easier to extend. Teams comparing “React Flow vs GoJS” often care about bundle size, React reconciliation, and long-term license cost — address each explicitly in comparison tables for featured snippets.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-vs-jointjs",
    title: "React Flow vs JointJS",
    description: "JointJS came from BPMN tooling. React Flow came from product builders. Which fits your stack?",
    date: "2025-03-12",
    readingTime: "8 min read",
    category: "Comparisons",
    tags: ["React Flow", "JointJS", "Diagramming"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "If you're shipping a React product, React Flow's component model wins. JointJS shines for legacy diagramming stacks; React Flow aligns with design systems, hooks, and concurrent rendering patterns modern SaaS expects.",
        ],
      },
    ],
  },
  {
    slug: "how-visualflow-accelerates-saas-development",
    title: "How VisualFlow Accelerates SaaS Development",
    description: "Pre-built React Flow templates that save months of canvas engineering.",
    date: "2025-03-04",
    readingTime: "5 min read",
    category: "VisualFlow",
    tags: ["VisualFlow", "Templates"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "VisualFlow ships the canvas primitives, node libraries and patterns we wish we had on day one. Faster shipping means more shipping logs, docs, and changelog content — all signals search engines use to trust a product site.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-state-management-zustand-jotai-patterns",
    title: "React Flow State Management: Zustand, Jotai, and Store Patterns",
    description:
      "How to keep nodes and edges in sync with minimal re-renders using modern React state libraries and React Flow best practices.",
    date: "2025-05-08",
    readingTime: "10 min read",
    category: "Architecture",
    tags: ["React Flow", "Zustand", "State Management"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "React Flow components re-render when props change. Coarse updates to a giant nodes array will thrash performance. Prefer normalized stores (byId maps) and selectors so only affected nodes subscribe to changes.",
        ],
      },
      {
        heading: "Zustand for graph stores",
        paragraphs: [
          "Zustand pairs well with React Flow because you can slice the graph into actions (addNode, connect) and subscribe per-node in custom components. Document your store API in README snippets so teammates find it via site search and Google.",
        ],
      },
      {
        heading: "SEO note for technical blogs",
        paragraphs: [
          "Use titles that match how developers search: “React Flow Zustand example”, “nodes edges store pattern”. Include code-adjacent keywords in headings and alt text for diagrams to capture image search traffic.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-performance-large-graphs-virtualization",
    title: "React Flow Performance: Large Graphs, Memoization, and Virtualization",
    description:
      "Practical techniques to keep 500+ node canvases smooth: memoized node types, controlled updates, and when to split subgraphs.",
    date: "2025-05-05",
    readingTime: "11 min read",
    category: "Performance",
    tags: ["React Flow", "Performance", "Canvas"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Large automation graphs stress the DOM and React commit phase. Start by stabilizing nodeTypes and edgeTypes with useMemo or module-level constants so React Flow does not remount handles unnecessarily.",
        ],
      },
      {
        heading: "Measure before optimizing",
        paragraphs: [
          "Use the React Profiler and Chrome Performance panel on representative graphs. Publish your methodology in this article format so others cite your benchmarks — backlinks help domain authority for competitive React Flow keywords.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-accessibility-keyboard-wcag",
    title: "React Flow Accessibility: Keyboard Navigation and WCAG-Friendly Canvases",
    description:
      "How to make node editors usable with keyboards and assistive tech while keeping React Flow’s default interactions intact.",
    date: "2025-05-02",
    readingTime: "9 min read",
    category: "Accessibility",
    tags: ["React Flow", "A11y", "WCAG"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Canvas products often skip accessibility. Layer roving tabindex on toolbars, expose connection labels, and provide a list view fallback for the graph so you cover WCAG 2.2 operable guidelines.",
        ],
      },
      {
        heading: "Structured data for how-to content",
        paragraphs: [
          "Mark up step lists with HowTo schema where appropriate. Search engines reward actionable accessibility guides because they answer regulated-buyer queries in enterprise SaaS.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-custom-edges-labels-markers",
    title: "React Flow Custom Edges: Markers, Labels, and Animated Connections",
    description:
      "Design edge components that communicate status, throughput, and errors — critical for workflow and data-pipeline UIs.",
    date: "2025-04-30",
    readingTime: "8 min read",
    category: "Tutorials",
    tags: ["React Flow", "Edges", "UX"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Edges are the grammar of a graph. Use stroke styles and markers to differentiate success paths, retries, and dead letters. Keep labels legible at minimum zoom by toggling detail levels with the viewport.",
        ],
      },
      {
        heading: "Keyword intent",
        paragraphs: [
          "Target “React Flow custom edge”, “animated edge react flow”, and “edge label position” in headings. These are high-intent searches from teams mid-implementation.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-minimap-controls-background-patterns",
    title: "React Flow Minimap, Controls, and Background Patterns for SaaS",
    description:
      "Compose Background variants, Controls, and Minimap to match product polish — without overwhelming first-time users.",
    date: "2025-04-28",
    readingTime: "7 min read",
    category: "React Flow",
    tags: ["React Flow", "Minimap", "UI Patterns"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "The minimap is a navigation affordance, not decoration. Match its mask and node colors to your main canvas theme tokens so orientation is instant.",
        ],
      },
      {
        heading: "Documentation SEO",
        paragraphs: [
          "Create short anchor pages for each sub-feature (minimap, controls, background) interlinked from a parent “React Flow UI kit” article to build a crawlable hub-and-spoke structure.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-subflows-parent-nodes-hierarchy",
    title: "React Flow Subflows and Parent Nodes: Modeling Hierarchies",
    description:
      "When to nest nodes, how extent: 'parent' behaves, and patterns for expandable groups in enterprise diagrams.",
    date: "2025-04-26",
    readingTime: "9 min read",
    category: "Architecture",
    tags: ["React Flow", "Hierarchy", "Subflows"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Parent-child relationships help collapse microservices regions, org units, or pipeline stages. Define clear rules for drag bounds and z-index so nested graphs stay predictable.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-auto-layout-elkjs-dagre",
    title: "React Flow Auto Layout with ELK, Dagre, and d3-hierarchy",
    description:
      "Compare layout engines for directed graphs, trees, and mixed diagrams — and where to run layout in the pipeline.",
    date: "2025-04-24",
    readingTime: "12 min read",
    category: "Tutorials",
    tags: ["React Flow", "ELK", "Layout"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Manual drag is not enough for imports from JSON, OpenAPI, or Terraform graphs. ELK handles layered graphs well; Dagre is lighter for simple DAGs; d3-hierarchy excels at trees.",
        ],
      },
      {
        heading: "Search-friendly comparisons",
        paragraphs: [
          "Publish benchmark tables and sample repos. Phrases like “React Flow ELK layout example” attract long-tail traffic from integrators evaluating stack fit.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-undo-redo-history-immutable-graph",
    title: "React Flow Undo/Redo: Immutable Graph History Patterns",
    description:
      "Implement reliable undo stacks for nodes and edges using immutable updates, command objects, or temporal libraries.",
    date: "2025-04-20",
    readingTime: "8 min read",
    category: "Architecture",
    tags: ["React Flow", "Undo Redo", "Immutability"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Command pattern stores inverse operations; structural sharing keeps memory bounded. Debounce rapid drags so history entries align with user intent, not every pointermove event.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-testing-playwright-component-tests",
    title: "Testing React Flow Apps with Playwright and Component Tests",
    description:
      "Stable selectors, waiting for canvas readiness, and mocking viewport transforms for CI-friendly end-to-end tests.",
    date: "2025-04-18",
    readingTime: "10 min read",
    category: "Engineering",
    tags: ["React Flow", "Testing", "Playwright"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Prefer data-testid on nodes and edges over pixel coordinates. Wait for React Flow initialization before asserting connections. Snapshot SVG sparingly; assert graph invariants instead.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-typescript-generics-typed-nodes-edges",
    title: "TypeScript Generics for Typed Nodes and Edges in React Flow",
    description:
      "Model domain-specific node data and edge metadata with discriminated unions so your graph stays type-safe end to end.",
    date: "2025-04-16",
    readingTime: "9 min read",
    category: "Tutorials",
    tags: ["React Flow", "TypeScript", "DX"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Define Node<DataUnion> and Edge<Meta> generics once, then narrow inside custom components with type guards. This reduces runtime errors in production graphs where bad data would otherwise corrupt execution.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-persistence-json-schema-versioning",
    title: "React Flow Persistence: JSON Schema, Versioning, and Migrations",
    description:
      "Ship save/load with explicit schema versions so customer graphs survive app upgrades and API evolution.",
    date: "2025-04-14",
    readingTime: "10 min read",
    category: "Architecture",
    tags: ["React Flow", "JSON Schema", "Persistence"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Store graph snapshots with version fields and migration functions. Validate on load with zod or JSON Schema to reject corrupt uploads early — critical for multi-tenant SaaS.",
        ],
      },
      {
        heading: "FAQ content for snippets",
        paragraphs: [
          "Add an FAQ block answering “How do I export React Flow to JSON?” and “How do I migrate old graph files?” — common questions that win featured snippets.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-realtime-collaboration-yjs-awareness",
    title: "React Flow Realtime Collaboration with Yjs and Awareness Cursors",
    description:
      "Patterns for CRDT-backed graphs, conflict-free node moves, and showing collaborator presence on the canvas.",
    date: "2025-04-12",
    readingTime: "11 min read",
    category: "Architecture",
    tags: ["React Flow", "Yjs", "Collaboration"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Yjs provides a shared document; map node positions and metadata into Y types. Throttle awareness updates so presence cursors do not flood the network on large teams.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-security-xss-user-generated-node-content",
    title: "React Flow Security: Sanitizing User-Generated Node and Edge Content",
    description:
      "Prevent XSS when labels, descriptions, or embedded HTML come from untrusted tenants in multi-user builders.",
    date: "2025-04-10",
    readingTime: "8 min read",
    category: "Engineering",
    tags: ["React Flow", "Security", "XSS"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Treat all user strings as untrusted. Prefer plain text in SVG text elements or sanitize with a strict allowlist if you must render rich text. Content Security Policy headers add defense in depth.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-mobile-touch-gestures-field-apps",
    title: "React Flow on Mobile: Touch Gestures, Hit Targets, and Field Apps",
    description:
      "Design larger handles, gesture-friendly panning, and responsive toolbars for tablets used in logistics and ops workflows.",
    date: "2025-04-06",
    readingTime: "7 min read",
    category: "UX",
    tags: ["React Flow", "Mobile", "Touch"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Increase handle radii and spacing for fat-finger tolerance. Test two-finger pan vs single-finger drag conflicts. Document device support in help center articles for SEO on mobile workflow keywords.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-ai-agent-graphs-llm-orchestration-ui",
    title: "React Flow for AI Agent Graphs and LLM Orchestration UIs",
    description:
      "Model prompts, tools, routers, and memory as nodes — patterns popular in agent builder and RAG pipeline products.",
    date: "2025-04-04",
    readingTime: "10 min read",
    category: "AI",
    tags: ["React Flow", "LLM", "Agents"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Agent UIs combine DAG semantics with branching. Use edge labels for tool success criteria and node badges for model versions. Align copy with searches like “LLM workflow builder” and “visual prompt chaining”.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-vs-mermaid-diagrams-as-code",
    title: "React Flow vs Mermaid: Interactive Apps vs Diagrams-as-Code",
    description:
      "When Markdown-native Mermaid wins for docs, and when you need React Flow for interactive, stateful editing experiences.",
    date: "2025-04-02",
    readingTime: "7 min read",
    category: "Comparisons",
    tags: ["React Flow", "Mermaid", "Diagrams"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Mermaid excels in static repos and wikis. React Flow excels when users author, validate, and execute graphs. Many products use Mermaid for export previews and React Flow for authoring — say so clearly for comparison shoppers.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-vs-d3-svg-canvas-choosing-stack",
    title: "React Flow vs Raw D3 or Canvas: Choosing Your Visualization Stack",
    description:
      "Trade-offs between imperative D3, game-loop canvas, and React-centric graph libraries for product engineering teams.",
    date: "2025-03-30",
    readingTime: "9 min read",
    category: "Comparisons",
    tags: ["React Flow", "D3", "Canvas"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "D3 offers maximum control; canvas offers maximum scale for millions of points. React Flow targets interactive node editors where React state and component reuse matter more than bespoke shaders.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-react-query-server-state-sync",
    title: "Syncing React Flow with TanStack Query and Server State",
    description:
      "Keep canvas data coherent with remote workflow definitions, optimistic updates, and invalidation after saves.",
    date: "2025-03-26",
    readingTime: "8 min read",
    category: "Architecture",
    tags: ["React Flow", "TanStack Query", "Server State"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Treat the graph as a client-side projection of server truth. After mutations, invalidate workflow keys or patch cache entries to avoid stale edges when collaborators change the definition.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-styling-tailwind-design-tokens",
    title: "Styling React Flow with Tailwind, CSS Variables, and Design Tokens",
    description:
      "Map brand tokens to nodes, edges, and backgrounds so your canvas matches the rest of your design system.",
    date: "2025-03-24",
    readingTime: "7 min read",
    category: "Tutorials",
    tags: ["React Flow", "Tailwind", "Design Systems"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Avoid inline magic colors. Use CSS variables for theme switching and dark mode. Tailwind utility classes on wrapper divs around custom nodes keep co-location of layout and style for faster refactors.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-onboarding-empty-states-templates-gallery",
    title: "React Flow Onboarding: Empty States, Templates, and Sample Graphs",
    description:
      "Reduce time-to-first-success with starter graphs, guided tours, and searchable template galleries in workflow products.",
    date: "2025-03-22",
    readingTime: "6 min read",
    category: "UX",
    tags: ["React Flow", "Onboarding", "Templates"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Empty canvases intimidate users. Ship curated starters (CRM sync, webhook fan-out, LLM router) and log which template converts best — feed insights into landing page A/B tests and SEO landing variants.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-measuring-nodes-resize-observer-fitview",
    title: "Measuring Dynamic Nodes, ResizeObserver, and fitView in React Flow",
    description:
      "Handle variable-height nodes, auto layout reflows, and camera framing when content loads asynchronously.",
    date: "2025-03-18",
    readingTime: "8 min read",
    category: "Tutorials",
    tags: ["React Flow", "Layout", "fitView"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "Dynamic forms inside nodes change height. Use ResizeObserver to update internals and trigger fitView with padding after async data resolves so users never hunt for off-screen nodes.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-ssr-prerender-hydration-caveats",
    title: "React Flow SSR, Prerender, and Hydration Caveats in Full-Stack Apps",
    description:
      "What to render on the server, how to avoid window mismatches, and patterns for static marketing previews of graphs.",
    date: "2025-03-16",
    readingTime: "9 min read",
    category: "Engineering",
    tags: ["React Flow", "SSR", "Hydration"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "React Flow relies on browser geometry. Gate interactive mounts behind client-only boundaries or dynamic import. For SEO, prerender simplified SVG previews or descriptive text summaries alongside the live canvas.",
        ],
      },
    ],
  },
  {
    slug: "react-flow-xyflow-pro-team-licensing-overview",
    title: "xyflow Pro and React Flow Pro: When Teams Invest in Supported Features",
    description:
      "Educational overview of paid xyflow offerings versus building features in-house — not legal or pricing advice.",
    date: "2025-03-14",
    readingTime: "6 min read",
    category: "React Flow",
    tags: ["React Flow", "xyflow", "Enterprise"],
    author: "VisualFlow Labs",
    content: [
      {
        paragraphs: [
          "The xyflow team maintains React Flow and offers professional support and components for demanding teams. Evaluate Pro when compliance, SLAs, or specialized primitives accelerate your roadmap versus internal build cost.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "Licensing and pricing change; confirm details on the official xyflow site. This article is independent commentary for SEO and architecture planning only.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
