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
    author: "VisualFlow Team",
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
    author: "VisualFlow Team",
    content: [
      {
        paragraphs: [
          "Automation platforms live and die by their canvas. React Flow's headless rendering model and event system make it the most flexible foundation for Zapier-, n8n- or Make-style products.",
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
    author: "VisualFlow Team",
    content: [
      {
        paragraphs: [
          "A premium node-based UI is mostly typography, spacing and color discipline. Get those right and the canvas instantly feels like Linear, not like a 2010 graph editor.",
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
    author: "VisualFlow Team",
    content: [{ paragraphs: ["Visual-first interfaces compress the learning curve of complex products into minutes."] }],
  },
  {
    slug: "react-flow-vs-gojs",
    title: "React Flow vs GoJS",
    description: "Honest comparison: licensing, performance, customization, and developer experience.",
    date: "2025-03-20",
    readingTime: "8 min read",
    category: "Comparisons",
    tags: ["React Flow", "GoJS", "Diagramming"],
    author: "VisualFlow Team",
    content: [{ paragraphs: ["GoJS is powerful but commercial. React Flow is MIT, React-native, and easier to extend."] }],
  },
  {
    slug: "react-flow-vs-jointjs",
    title: "React Flow vs JointJS",
    description: "JointJS came from BPMN tooling. React Flow came from product builders. Which fits your stack?",
    date: "2025-03-12",
    readingTime: "8 min read",
    category: "Comparisons",
    tags: ["React Flow", "JointJS", "Diagramming"],
    author: "VisualFlow Team",
    content: [{ paragraphs: ["If you're shipping a React product, React Flow's component model wins."] }],
  },
  {
    slug: "how-visualflow-accelerates-saas-development",
    title: "How VisualFlow Accelerates SaaS Development",
    description: "Pre-built React Flow templates that save months of canvas engineering.",
    date: "2025-03-04",
    readingTime: "5 min read",
    category: "VisualFlow",
    tags: ["VisualFlow", "Templates"],
    author: "VisualFlow Team",
    content: [{ paragraphs: ["VisualFlow ships the canvas primitives, node libraries and patterns we wish we had on day one."] }],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
