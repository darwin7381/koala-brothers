"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Coordinate system: 1000 × 720.
 *
 * Layout (rough):
 *   ┌─────────────────────────────────────────────┐
 *   │  YOU                          MEMORY        │
 *   │   ●  ────── notify ───┐         ▼ context   │
 *   │                       │                     │
 *   │             BRIEF ◄──RUNTIME ◄─── CREW      │
 *   │                       │                     │
 *   │                CHANNELS │                   │
 *   │                       ▼                     │
 *   │  ◇ ◇ ◇ ◇ ◇ ◇   ← external tools           │
 *   └─────────────────────────────────────────────┘
 */

const RECT = {
  runtime: { x: 400, y: 280, w: 200, h: 160 },
  brief: { x: 80, y: 300, w: 180, h: 120 },
  memory: { x: 750, y: 60, w: 180, h: 140 },
  crew: { x: 750, y: 510, w: 180, h: 150 },
  channels: { x: 410, y: 540, w: 180, h: 100 },
};

const OWNER = { x: 110, y: 90, r: 30 };

// integration logos cluster (bottom)
const TOOLS = [
  { label: "Gmail", color: "#ea4335" },
  { label: "Calendar", color: "#1a73e8" },
  { label: "Slack", color: "#611f69" },
  { label: "GitHub", color: "#0a0a0a" },
  { label: "Stripe", color: "#635bff" },
  { label: "Telegram", color: "#27a7e7" },
];

// connection paths with labels
type Path = {
  id: string;
  d: string;
  label: string;
  labelXY: [number, number];
  primary?: boolean;
  flow?: boolean;
};

const PATHS: Path[] = [
  // Owner ↔ Brief (notify, approve)
  {
    id: "p-own-brief",
    d: "M 140 90 C 140 220, 170 280, 170 300",
    label: "notify",
    labelXY: [156, 200],
    primary: true,
    flow: true,
  },
  // Brief ↔ Runtime (subscribe / poll)
  {
    id: "p-brief-rt",
    d: "M 260 360 L 400 360",
    label: "subscribe",
    labelXY: [330, 350],
    primary: true,
    flow: true,
  },
  // Memory → Runtime (context)
  {
    id: "p-mem-rt",
    d: "M 840 200 C 820 240, 600 260, 580 300",
    label: "context.read",
    labelXY: [718, 220],
    primary: true,
    flow: true,
  },
  // Crew → Runtime (execute / handoff)
  {
    id: "p-crew-rt",
    d: "M 750 580 C 660 560, 580 480, 580 440",
    label: "execute",
    labelXY: [675, 540],
    primary: true,
    flow: true,
  },
  // Runtime → Channels (dispatch)
  {
    id: "p-rt-ch",
    d: "M 500 440 L 500 540",
    label: "dispatch",
    labelXY: [510, 488],
    primary: true,
    flow: true,
  },
  // Memory ↔ Crew (read+write back)
  {
    id: "p-mem-crew",
    d: "M 935 200 C 970 350, 970 430, 935 510",
    label: "read • write",
    labelXY: [950, 360],
  },
  // Owner → Runtime (approve), faint
  {
    id: "p-own-rt",
    d: "M 144 110 C 280 130, 360 220, 410 300",
    label: "approve",
    labelXY: [240, 158],
  },
];

export default function AgentOSDiagram({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="relative w-full">
      <svg
        viewBox="0 0 1000 720"
        className="w-full h-auto"
        role="img"
        aria-label="Personal Agent OS architecture diagram"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="rt-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
          <linearGradient id="card-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f8f7" />
          </linearGradient>
          <linearGradient id="conn-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c2410c" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#9a3412" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="conn-stroke-faint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a1a1aa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#71717a" stopOpacity="0.55" />
          </linearGradient>
          <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="3" result="off" />
            <feComponentTransfer result="t">
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid background */}
        <rect width="1000" height="720" fill="url(#grid)" />

        {/* Plane labels */}
        <g
          fontFamily="var(--font-geist-mono)"
          fontSize="10"
          letterSpacing="2.4"
          fill="#a1a1aa"
        >
          <text x="50" y="40">CONTROL PLANE</text>
          <text x="50" y="700">DATA PLANE</text>
        </g>
        <line
          x1="50"
          y1="700"
          x2="950"
          y2="700"
          stroke="rgba(15,23,42,0.1)"
          strokeWidth="0.6"
          strokeDasharray="2 5"
        />
        <line
          x1="50"
          y1="44"
          x2="950"
          y2="44"
          stroke="rgba(15,23,42,0.1)"
          strokeWidth="0.6"
          strokeDasharray="2 5"
        />

        {/* Connection paths */}
        <g fill="none" strokeLinecap="round">
          {PATHS.map((p, i) => (
            <motion.path
              key={p.id}
              d={p.d}
              stroke={p.primary ? "url(#conn-stroke)" : "url(#conn-stroke-faint)"}
              strokeWidth={p.primary ? 1.4 : 1}
              strokeDasharray={p.primary ? undefined : "3 5"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: p.primary ? 0.9 : 0.5 } : {}}
              transition={{
                duration: 1.4,
                delay: 0.3 + i * 0.1,
                ease: [0.6, 0.05, 0.2, 1],
              }}
            />
          ))}
        </g>

        {/* Connection labels */}
        <g
          fontFamily="var(--font-geist-mono)"
          fontSize="9.5"
          letterSpacing="0.5"
          fill="#525252"
        >
          {PATHS.map((p, i) => (
            <motion.g
              key={`label-${p.id}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + i * 0.05 }}
            >
              <rect
                x={p.labelXY[0] - 4 - p.label.length * 2.8}
                y={p.labelXY[1] - 9}
                width={p.label.length * 5.6 + 8}
                height={14}
                fill="#fafaf9"
                rx="3"
                stroke="rgba(15,23,42,0.06)"
                strokeWidth="0.5"
              />
              <text x={p.labelXY[0]} y={p.labelXY[1] + 1} textAnchor="middle">
                {p.label}
              </text>
            </motion.g>
          ))}
        </g>

        {/* Flowing dots on primary paths */}
        <g fill="#c2410c">
          {PATHS.filter((p) => p.flow).map((p, i) => (
            <circle key={`dot-${p.id}`} r="2.4">
              <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                begin={`${1.6 + i * 0.5}s`}
                rotate="auto"
                path={p.d}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="3.4s"
                repeatCount="indefinite"
                begin={`${1.6 + i * 0.5}s`}
              />
            </circle>
          ))}
        </g>

        {/* Owner node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle cx={OWNER.x} cy={OWNER.y} r={OWNER.r + 8} fill="none" stroke="rgba(194,65,12,0.18)" strokeWidth="0.6" strokeDasharray="2 4" />
          <circle cx={OWNER.x} cy={OWNER.y} r={OWNER.r} fill="#0a0a0a" filter="url(#card-shadow)" />
          {/* Simple person glyph */}
          <circle cx={OWNER.x} cy={OWNER.y - 9} r="8" fill="#fafaf9" />
          <path
            d={`M ${OWNER.x - 16} ${OWNER.y + 16} C ${OWNER.x - 16} ${OWNER.y + 4}, ${OWNER.x - 6} ${OWNER.y + 0}, ${OWNER.x} ${OWNER.y + 0} C ${OWNER.x + 6} ${OWNER.y + 0}, ${OWNER.x + 16} ${OWNER.y + 4}, ${OWNER.x + 16} ${OWNER.y + 16} Z`}
            fill="#fafaf9"
          />
          <text
            x={OWNER.x}
            y={OWNER.y + OWNER.r + 18}
            textAnchor="middle"
            fontFamily="var(--font-geist-mono)"
            fontSize="10"
            letterSpacing="1.6"
            fill="#525252"
          >
            YOU
          </text>
        </motion.g>

        {/* RUNTIME — center card with internal structure */}
        <CardNode
          rect={RECT.runtime}
          fillId="rt-fill"
          inView={inView}
          delay={0.25}
          accent
        >
          {/* internal layout */}
          <text
            x={RECT.runtime.x + RECT.runtime.w / 2}
            y={RECT.runtime.y + 32}
            textAnchor="middle"
            fontFamily="var(--font-geist-sans)"
            fontWeight={500}
            fontSize="22"
            fill="#0a0a0a"
            style={{ letterSpacing: "-0.02em" }}
          >
            Runtime
          </text>
          <text
            x={RECT.runtime.x + RECT.runtime.w / 2}
            y={RECT.runtime.y + 48}
            textAnchor="middle"
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="2.4"
            fill="#525252"
            style={{ textTransform: "uppercase" }}
          >
            the host
          </text>
          {/* agent threads visual */}
          <g>
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <rect
                  x={RECT.runtime.x + 24}
                  y={RECT.runtime.y + 70 + i * 14}
                  width="152"
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  stroke="rgba(15,23,42,0.08)"
                  strokeWidth="0.5"
                />
                <motion.rect
                  x={RECT.runtime.x + 24}
                  y={RECT.runtime.y + 70 + i * 14}
                  width="152"
                  height="6"
                  rx="3"
                  fill="#c2410c"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: [0.2, 0.7, 0.45, 0.85, 0.6] } : {}}
                  transition={{
                    duration: 6 + i * 0.4,
                    delay: 1 + i * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: `${RECT.runtime.x + 24}px ${RECT.runtime.y + 73 + i * 14}px` }}
                />
              </g>
            ))}
          </g>
          <text
            x={RECT.runtime.x + 24}
            y={RECT.runtime.y + RECT.runtime.h - 14}
            fontFamily="var(--font-geist-mono)"
            fontSize="8.5"
            letterSpacing="1.6"
            fill="#71717a"
          >
            4 AGENT THREADS · LIVE
          </text>
          <circle
            cx={RECT.runtime.x + RECT.runtime.w - 22}
            cy={RECT.runtime.y + RECT.runtime.h - 18}
            r="3"
            fill="#047857"
            className="pulse-dot"
          />
        </CardNode>

        {/* MEMORY card — vector / graph / timeline layers */}
        <CardNode rect={RECT.memory} fillId="card-fill" inView={inView} delay={0.4}>
          <text
            x={RECT.memory.x + 18}
            y={RECT.memory.y + 28}
            fontFamily="var(--font-geist-sans)"
            fontWeight={500}
            fontSize="18"
            fill="#0a0a0a"
            style={{ letterSpacing: "-0.02em" }}
          >
            Memory
          </text>
          <text
            x={RECT.memory.x + 18}
            y={RECT.memory.y + 42}
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="2.2"
            fill="#71717a"
            style={{ textTransform: "uppercase" }}
          >
            the brain
          </text>
          {/* layer rows */}
          {[
            { label: "vector", icon: "≋", color: "#fed7aa" },
            { label: "graph", icon: "◇", color: "#bef264" },
            { label: "timeline", icon: "▤", color: "#bae6fd" },
          ].map((row, i) => (
            <g key={row.label}>
              <rect
                x={RECT.memory.x + 18}
                y={RECT.memory.y + 56 + i * 22}
                width={RECT.memory.w - 36}
                height="18"
                rx="4"
                fill="#fafaf9"
                stroke="rgba(15,23,42,0.06)"
              />
              <rect
                x={RECT.memory.x + 22}
                y={RECT.memory.y + 60 + i * 22}
                width="10"
                height="10"
                rx="2"
                fill={row.color}
              />
              <text
                x={RECT.memory.x + 38}
                y={RECT.memory.y + 69 + i * 22}
                fontFamily="var(--font-geist-mono)"
                fontSize="9"
                letterSpacing="1.4"
                fill="#525252"
                style={{ textTransform: "uppercase" }}
              >
                {row.label}
              </text>
              <text
                x={RECT.memory.x + RECT.memory.w - 22}
                y={RECT.memory.y + 69 + i * 22}
                textAnchor="end"
                fontFamily="var(--font-geist-mono)"
                fontSize="8.5"
                fill="#a1a1aa"
              >
                {["18.2k", "1.4k", "∞"][i]}
              </text>
            </g>
          ))}
        </CardNode>

        {/* CHANNELS card */}
        <CardNode rect={RECT.channels} fillId="card-fill" inView={inView} delay={0.55}>
          <text
            x={RECT.channels.x + 18}
            y={RECT.channels.y + 28}
            fontFamily="var(--font-geist-sans)"
            fontWeight={500}
            fontSize="18"
            fill="#0a0a0a"
            style={{ letterSpacing: "-0.02em" }}
          >
            Channels
          </text>
          <text
            x={RECT.channels.x + 18}
            y={RECT.channels.y + 42}
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="2.2"
            fill="#71717a"
            style={{ textTransform: "uppercase" }}
          >
            the hands
          </text>
          {/* mini integration tiles inside */}
          {TOOLS.slice(0, 6).map((t, i) => (
            <g key={t.label}>
              <rect
                x={RECT.channels.x + 18 + (i % 6) * 24}
                y={RECT.channels.y + 56}
                width="20"
                height="20"
                rx="5"
                fill="#fafaf9"
                stroke="rgba(15,23,42,0.07)"
              />
              <rect
                x={RECT.channels.x + 22 + (i % 6) * 24}
                y={RECT.channels.y + 60}
                width="12"
                height="12"
                rx="3"
                fill={t.color}
                opacity="0.85"
              />
            </g>
          ))}
          <text
            x={RECT.channels.x + 18}
            y={RECT.channels.y + RECT.channels.h - 12}
            fontFamily="var(--font-geist-mono)"
            fontSize="8.5"
            letterSpacing="1.4"
            fill="#71717a"
          >
            6 OF 14 INTEGRATIONS
          </text>
        </CardNode>

        {/* CREW card with persona avatars */}
        <CardNode rect={RECT.crew} fillId="card-fill" inView={inView} delay={0.7}>
          <text
            x={RECT.crew.x + 18}
            y={RECT.crew.y + 28}
            fontFamily="var(--font-geist-sans)"
            fontWeight={500}
            fontSize="18"
            fill="#0a0a0a"
            style={{ letterSpacing: "-0.02em" }}
          >
            Crew
          </text>
          <text
            x={RECT.crew.x + 18}
            y={RECT.crew.y + 42}
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="2.2"
            fill="#71717a"
            style={{ textTransform: "uppercase" }}
          >
            the team
          </text>
          {[
            { name: "M", role: "Marketer", c: "#fdba74" },
            { name: "R", role: "Researcher", c: "#bef264" },
            { name: "O", role: "Operator", c: "#7dd3fc" },
            { name: "F", role: "CFO", c: "#fca5a5" },
          ].map((p, i) => (
            <g key={p.role}>
              <circle
                cx={RECT.crew.x + 28 + (i % 2) * 76}
                cy={RECT.crew.y + 70 + Math.floor(i / 2) * 32}
                r="9"
                fill={p.c}
              />
              <text
                x={RECT.crew.x + 28 + (i % 2) * 76}
                y={RECT.crew.y + 73 + Math.floor(i / 2) * 32}
                textAnchor="middle"
                fontFamily="var(--font-geist-sans)"
                fontWeight={600}
                fontSize="10"
                fill="#0a0a0a"
              >
                {p.name}
              </text>
              <text
                x={RECT.crew.x + 42 + (i % 2) * 76}
                y={RECT.crew.y + 73 + Math.floor(i / 2) * 32}
                fontFamily="var(--font-geist-mono)"
                fontSize="8"
                letterSpacing="1.2"
                fill="#525252"
                style={{ textTransform: "uppercase" }}
              >
                {p.role}
              </text>
            </g>
          ))}
          <text
            x={RECT.crew.x + 18}
            y={RECT.crew.y + RECT.crew.h - 12}
            fontFamily="var(--font-geist-mono)"
            fontSize="8.5"
            letterSpacing="1.4"
            fill="#71717a"
          >
            4 ON-DUTY
          </text>
        </CardNode>

        {/* BRIEF card with mini phone */}
        <CardNode rect={RECT.brief} fillId="card-fill" inView={inView} delay={0.85}>
          <text
            x={RECT.brief.x + 18}
            y={RECT.brief.y + 28}
            fontFamily="var(--font-geist-sans)"
            fontWeight={500}
            fontSize="18"
            fill="#0a0a0a"
            style={{ letterSpacing: "-0.02em" }}
          >
            Brief
          </text>
          <text
            x={RECT.brief.x + 18}
            y={RECT.brief.y + 42}
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="2.2"
            fill="#71717a"
            style={{ textTransform: "uppercase" }}
          >
            the surface
          </text>
          {/* phone glyph */}
          <rect
            x={RECT.brief.x + 18}
            y={RECT.brief.y + 56}
            width="36"
            height="58"
            rx="6"
            fill="#0a0a0a"
          />
          <rect
            x={RECT.brief.x + 21}
            y={RECT.brief.y + 60}
            width="30"
            height="50"
            rx="4"
            fill="#fafaf9"
          />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={RECT.brief.x + 23}
              y={RECT.brief.y + 64 + i * 8}
              width={[24, 18, 22][i]}
              height="3"
              rx="1"
              fill="#fed7aa"
            />
          ))}
          {/* notification list */}
          <g>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x={RECT.brief.x + 64}
                  y={RECT.brief.y + 56 + i * 18}
                  width={RECT.brief.w - 80}
                  height="14"
                  rx="3"
                  fill="#fafaf9"
                  stroke="rgba(15,23,42,0.06)"
                />
                <circle
                  cx={RECT.brief.x + 70}
                  cy={RECT.brief.y + 63 + i * 18}
                  r="2.2"
                  fill="#c2410c"
                />
                <rect
                  x={RECT.brief.x + 76}
                  y={RECT.brief.y + 60 + i * 18}
                  width={[44, 60, 38][i]}
                  height="3.5"
                  rx="1"
                  fill="#525252"
                />
                <rect
                  x={RECT.brief.x + 76}
                  y={RECT.brief.y + 65 + i * 18}
                  width={[68, 56, 72][i]}
                  height="2.5"
                  rx="1"
                  fill="#a1a1aa"
                />
              </g>
            ))}
          </g>
        </CardNode>

        {/* External tools cluster (bottom right, below DATA PLANE label area) */}
        <g>
          <text
            x={620}
            y={680}
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            letterSpacing="1.8"
            fill="#71717a"
            style={{ textTransform: "uppercase" }}
          >
            external — gmail · calendar · slack · github · stripe · telegram
          </text>
          <line x1="620" y1="660" x2="940" y2="660" stroke="rgba(194,65,12,0.3)" strokeDasharray="2 3" strokeWidth="0.6" />
          {TOOLS.map((t, i) => (
            <motion.g
              key={t.label}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.07 }}
            >
              <rect
                x={620 + i * 56}
                y={638}
                width="42"
                height="18"
                rx="4"
                fill="#ffffff"
                stroke="rgba(15,23,42,0.08)"
              />
              <rect
                x={624 + i * 56}
                y={642}
                width="10"
                height="10"
                rx="2.5"
                fill={t.color}
                opacity="0.85"
              />
              <text
                x={638 + i * 56}
                y={651}
                fontFamily="var(--font-geist-mono)"
                fontSize="7.5"
                letterSpacing="1"
                fill="#525252"
                style={{ textTransform: "uppercase" }}
              >
                {t.label.slice(0, 6)}
              </text>
            </motion.g>
          ))}
          {/* dispatch line from Channels to tools */}
          <motion.path
            d="M 500 640 C 500 650, 580 655, 620 650"
            fill="none"
            stroke="url(#conn-stroke)"
            strokeWidth="1"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </g>

        {/* Coordinate corner ticks */}
        {variant === "full" && (
          <g stroke="rgba(15,23,42,0.18)" strokeWidth="0.6" fill="none">
            <path d="M 12 12 L 12 24 M 12 12 L 24 12" />
            <path d="M 988 12 L 988 24 M 988 12 L 976 12" />
            <path d="M 12 708 L 12 696 M 12 708 L 24 708" />
            <path d="M 988 708 L 988 696 M 988 708 L 976 708" />
          </g>
        )}
      </svg>
    </div>
  );
}

function CardNode({
  rect,
  fillId,
  inView,
  delay,
  accent = false,
  children,
}: {
  rect: { x: number; y: number; w: number; h: number };
  fillId: string;
  inView: boolean;
  delay: number;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        rx="14"
        fill={`url(#${fillId})`}
        stroke={accent ? "rgba(194,65,12,0.25)" : "rgba(15,23,42,0.08)"}
        strokeWidth={accent ? 1.2 : 1}
        filter="url(#card-shadow)"
      />
      {accent && (
        <rect
          x={rect.x - 6}
          y={rect.y - 6}
          width={rect.w + 12}
          height={rect.h + 12}
          rx="20"
          fill="none"
          stroke="rgba(194,65,12,0.14)"
          strokeWidth="0.8"
          strokeDasharray="2 5"
        />
      )}
      {children}
    </motion.g>
  );
}
