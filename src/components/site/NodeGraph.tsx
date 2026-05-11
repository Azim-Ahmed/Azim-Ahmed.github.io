type NodeDef = { id: string; x: number; y: number; label: string; sub: string; tone?: "brand" | "glow" | "default" };
type EdgeDef = { from: string; to: string };

const NODES: NodeDef[] = [
  { id: "trigger", x: 40, y: 60, label: "Trigger", sub: "On new lead", tone: "brand" },
  { id: "filter", x: 250, y: 30, label: "Filter", sub: "score > 80" },
  { id: "ai", x: 250, y: 170, label: "AI Agent", sub: "Enrich profile", tone: "glow" },
  { id: "branch", x: 470, y: 100, label: "Branch", sub: "by region" },
  { id: "send", x: 680, y: 40, label: "Send Email", sub: "Welcome v3", tone: "brand" },
  { id: "crm", x: 680, y: 180, label: "Sync CRM", sub: "HubSpot" },
];
const EDGES: EdgeDef[] = [
  { from: "trigger", to: "filter" },
  { from: "trigger", to: "ai" },
  { from: "filter", to: "branch" },
  { from: "ai", to: "branch" },
  { from: "branch", to: "send" },
  { from: "branch", to: "crm" },
];

const NODE_W = 168;
const NODE_H = 64;

function nodeCenter(n: NodeDef) {
  return { x: n.x + NODE_W / 2, y: n.y + NODE_H / 2 };
}

export function NodeGraph() {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 880 280"
        className="w-full h-auto"
        role="img"
        aria-label="Animated workflow node graph"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 200)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 285)" />
          </linearGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {EDGES.map((e, i) => {
          const a = nodeCenter(byId[e.from]);
          const b = nodeCenter(byId[e.to]);
          const cx = (a.x + b.x) / 2;
          const d = `M ${a.x + NODE_W / 2} ${a.y} C ${cx} ${a.y}, ${cx} ${b.y}, ${b.x - NODE_W / 2} ${b.y}`;
          return (
            <g key={i}>
              <path d={d} stroke="url(#edge-grad)" strokeWidth="1.5" fill="none" opacity="0.35" />
              <path d={d} stroke="url(#edge-grad)" strokeWidth="2" fill="none" className="flow-edge" />
            </g>
          );
        })}

        {NODES.map((n) => {
          const tone =
            n.tone === "brand"
              ? "oklch(0.72 0.18 200)"
              : n.tone === "glow"
                ? "oklch(0.78 0.16 285)"
                : "oklch(0.97 0.005 250)";
          return (
            <g key={n.id} transform={`translate(${n.x},${n.y})`}>
              <rect
                width={NODE_W}
                height={NODE_H}
                rx={12}
                fill="oklch(0.20 0.022 264 / 0.9)"
                stroke="oklch(1 0 0 / 0.10)"
              />
              <circle cx={10} cy={NODE_H / 2} r={3.5} fill={tone} filter="url(#soft-glow)" />
              <circle cx={NODE_W - 10} cy={NODE_H / 2} r={3.5} fill={tone} filter="url(#soft-glow)" />
              <text x={20} y={26} fill="oklch(0.97 0.005 250)" fontSize="13" fontWeight="600">
                {n.label}
              </text>
              <text x={20} y={44} fill="oklch(0.70 0.020 256)" fontSize="11">
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
