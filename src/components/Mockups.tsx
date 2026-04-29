"use client";

import { motion } from "framer-motion";

export function BriefPhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: "min(100%, 320px)",
      }}
    >
      <div
        className="relative aspect-[9/19.5] rounded-[2.6rem] p-[10px]"
        style={{
          background: "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
          boxShadow:
            "0 30px 60px -25px rgba(15,23,42,0.35), 0 6px 18px -8px rgba(15,23,42,0.18), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="relative h-full w-full rounded-[2rem] overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #fafaf9 0%, #fff7ed 100%)",
          }}
        >
          {/* Status bar */}
          <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[10px] text-ink-soft font-medium">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-1.5 rounded-[1px] bg-ink/80" />
              <span className="w-2.5 h-2.5 rounded-full border border-ink/60" />
            </span>
          </div>

          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/85" />

          {/* Header */}
          <div className="px-6 pt-7">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-faint font-mono mb-2">
              Brief · Tuesday
            </div>
            <h3 className="text-[22px] leading-tight text-ink tracking-[-0.02em] font-medium">
              Three things to know before
              <br />
              <span className="italic text-accent-deep" style={{ fontFamily: "serif" }}>
                your first call.
              </span>
            </h3>
          </div>

          {/* List items */}
          <div className="px-4 mt-5 space-y-2.5">
            {[
              {
                tag: "Inbox",
                title: "Helena replied — wants pricing for 12 seats",
                meta: "from Tide Inc.",
              },
              {
                tag: "Lead",
                title: "Daniel @ The Information opened your pitch",
                meta: "3 minutes ago",
              },
              {
                tag: "Calendar",
                title: "Reschedule Friday review — Crew suggests Mon 10",
                meta: "shared with 4 agents",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-[1rem] bg-white p-3"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
                }}
              >
                <div className="text-[8.5px] uppercase tracking-[0.18em] text-accent-deep font-mono font-semibold mb-1">
                  {item.tag}
                </div>
                <div className="text-[12.5px] text-ink leading-snug font-medium tracking-[-0.01em]">
                  {item.title}
                </div>
                <div className="text-[10px] text-ink-faint mt-1 font-mono">
                  {item.meta}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom action */}
          <div className="absolute bottom-5 left-4 right-4">
            <div
              className="rounded-full bg-ink text-paper text-[11px] py-2.5 px-4 flex items-center justify-between"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span className="font-mono uppercase tracking-[0.18em]">Ask Crew</span>
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px]">
                →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-10 top-12 hidden md:block"
      >
        <div
          className="rounded-2xl bg-white px-3.5 py-2.5"
          style={{
            boxShadow:
              "0 14px 30px -14px rgba(15,23,42,0.18), inset 0 0 0 1px rgba(15,23,42,0.06)",
          }}
        >
          <div className="text-[8.5px] uppercase tracking-[0.18em] text-accent-deep font-mono font-semibold">
            Crew · Marketer
          </div>
          <div className="text-[11.5px] text-ink mt-0.5 max-w-[140px] leading-tight">
            Drafted reply to <em className="text-ink-soft">Helena</em> — review?
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function LeadListMockup() {
  const leads = [
    { name: "Helena Voss", role: "Editor, Tide Inc.", status: "Opened pitch", tone: "ok" },
    { name: "Daniel Akpan", role: "Reporter, The Information", status: "Replied", tone: "good" },
    { name: "Mira Tanaka", role: "Investor, North Cape Capital", status: "Drafted", tone: "warn" },
    { name: "Leon Park", role: "Host, Solo Founders Pod", status: "Sent", tone: "ok" },
  ];
  return (
    <div className="space-y-2.5">
      {leads.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(15,23,42,0.05), 0 1px 2px rgba(15,23,42,0.03)",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${
                ["#fed7aa", "#bef264", "#bae6fd", "#fecaca"][i]
              }, ${["#fdba74", "#a3e635", "#7dd3fc", "#fca5a5"][i]})`,
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-medium text-ink truncate tracking-[-0.01em]">
              {l.name}
            </div>
            <div className="text-[10.5px] text-ink-soft font-mono truncate">{l.role}</div>
          </div>
          <span
            className="text-[9px] uppercase tracking-[0.18em] font-mono font-semibold whitespace-nowrap px-2 py-1 rounded-full"
            style={{
              color:
                l.tone === "good" ? "#047857" : l.tone === "warn" ? "#b45309" : "#525252",
              background:
                l.tone === "good"
                  ? "#ecfdf5"
                  : l.tone === "warn"
                    ? "#fffbeb"
                    : "#f4f4f3",
            }}
          >
            {l.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function ChannelsMockup() {
  const items = [
    { label: "Gmail", color: "#ea4335" },
    { label: "Calendar", color: "#1a73e8" },
    { label: "Slack", color: "#611f69" },
    { label: "GitHub", color: "#0a0a0a" },
    { label: "Stripe", color: "#635bff" },
    { label: "Telegram", color: "#27a7e7" },
    { label: "Notion", color: "#0a0a0a" },
    { label: "Linear", color: "#5e6ad2" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {items.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-square rounded-[1.1rem] bg-white flex items-center justify-center relative overflow-hidden"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)",
          }}
        >
          <div
            className="w-7 h-7 rounded-[0.7rem]"
            style={{
              background: c.color,
              opacity: 0.9,
              boxShadow: `0 6px 14px -6px ${c.color}80`,
            }}
          />
          <div className="absolute bottom-1.5 left-0 right-0 text-center text-[8.5px] uppercase tracking-[0.18em] font-mono text-ink-faint">
            {c.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function CrewMockup() {
  const crew = [
    { name: "Marshall", role: "Marketer", initial: "M", color: "#fdba74" },
    { name: "Reva", role: "Researcher", initial: "R", color: "#bef264" },
    { name: "Otis", role: "Operator", initial: "O", color: "#7dd3fc" },
    { name: "Frances", role: "CFO", initial: "F", color: "#fca5a5" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {crew.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white p-3 flex items-center gap-3"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink font-medium text-[14px]"
            style={{
              background: c.color,
              boxShadow: `0 6px 14px -8px ${c.color}`,
            }}
          >
            {c.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-medium text-ink tracking-[-0.01em]">{c.name}</div>
            <div className="text-[10px] text-ink-soft font-mono uppercase tracking-[0.16em]">
              {c.role}
            </div>
          </div>
          <span className="size-2 rounded-full bg-emerald pulse-dot" style={{ background: "#047857" }} />
        </motion.div>
      ))}
    </div>
  );
}

export function RuntimeMockup() {
  const lines = [
    { tag: "10:42:01", text: "agent.runtime: Marshall accepted task #3812", tone: "muted" as const },
    { tag: "10:42:08", text: "memory.write: drafted-reply.md → context/inbox", tone: "muted" as const },
    { tag: "10:42:14", text: "channels.gmail: queued reply to helena@tide.com", tone: "accent" as const },
    { tag: "10:42:21", text: "brief.next: 1 item awaiting your approval", tone: "emerald" as const },
  ];
  return (
    <div
      className="rounded-2xl bg-white p-4 font-mono text-[11.5px] leading-[1.7]"
      style={{
        boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)",
      }}
    >
      <div className="flex items-center gap-1.5 pb-3 border-b border-hairline mb-3">
        <span className="size-2.5 rounded-full bg-[#fca5a5]" />
        <span className="size-2.5 rounded-full bg-[#fed7aa]" />
        <span className="size-2.5 rounded-full bg-[#bef264]" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          Runtime · live
        </span>
        <span className="ml-auto size-1.5 rounded-full bg-[#047857] pulse-dot" />
      </div>
      <div className="space-y-1">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="flex gap-3"
          >
            <span className="text-ink-faint">{l.tag}</span>
            <span
              className="flex-1"
              style={{
                color:
                  l.tone === "accent"
                    ? "#9a3412"
                    : l.tone === "emerald"
                      ? "#047857"
                      : "#525252",
              }}
            >
              {l.text}
            </span>
          </motion.div>
        ))}
        <div className="flex gap-3 pt-1">
          <span className="text-ink-faint">10:42:</span>
          <span className="text-ink-faint inline-flex items-center">
            <span className="w-1.5 h-3 bg-ink/80 inline-block" style={{ animation: "blink 1.1s steps(1) infinite" }} />
          </span>
        </div>
      </div>
      <style>{`@keyframes blink {50%{opacity:0}}`}</style>
    </div>
  );
}
