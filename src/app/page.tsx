"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AgentOSDiagram from "@/components/AgentOSDiagram";
import {
  BriefPhoneMockup,
  ChannelsMockup,
  CrewMockup,
  LeadListMockup,
  RuntimeMockup,
} from "@/components/Mockups";

const PRODUCTS = [
  {
    n: "01",
    name: "Lead",
    role: "Discovery",
    tag: "AI-powered PR & partnership discovery.",
    desc: "Find the journalists and operators who already cover your space, then auto-personalize the reach.",
    status: "Live",
    statusTone: "live" as const,
    span: "lg:col-span-7 lg:row-span-2",
    Mock: LeadListMockup,
  },
  {
    n: "02",
    name: "Brief",
    role: "the surface",
    tag: "Your daily AI briefing, before coffee.",
    desc: "Five-minute synthesis from the inbox, the docs, and the news. Phone-first.",
    status: "In development",
    statusTone: "wip" as const,
    span: "lg:col-span-5 lg:row-span-2",
    Mock: null,
  },
  {
    n: "03",
    name: "Channels",
    role: "the hands",
    tag: "Action layer for your AI org.",
    desc: "Gmail, Calendar, Slack, GitHub, Stripe, Telegram — agents draft and dispatch, you approve.",
    status: "In development",
    statusTone: "wip" as const,
    span: "lg:col-span-7 lg:row-span-2",
    Mock: ChannelsMockup,
  },
  {
    n: "04",
    name: "Crew",
    role: "the team",
    tag: "Specialist agents you actually hire.",
    desc: "Marketer, Researcher, Operator, CFO — each with a personality, SOPs, a track record.",
    status: "Coming soon",
    statusTone: "soon" as const,
    span: "lg:col-span-5 lg:row-span-2",
    Mock: CrewMockup,
  },
  {
    n: "05",
    name: "Runtime",
    role: "the host",
    tag: "Where your AI organisation lives.",
    desc: "Always on. Speaks plain language. Quiet by default; opinionated when it matters.",
    status: "Coming soon",
    statusTone: "soon" as const,
    span: "lg:col-span-12 lg:row-span-2",
    Mock: RuntimeMockup,
  },
];

const ROADMAP = [
  { quarter: "Q2 2026", title: "Lead — open beta widens", note: "Apple Developer enrolled in parallel" },
  { quarter: "Q3 2026", title: "Brief — application private alpha", note: "First 5 channel integrations" },
  { quarter: "Q4 2026", title: "Crew — design partner cohort", note: "Runtime — internal dogfood" },
  { quarter: "2027", title: "Runtime + Crew public beta", note: "macOS native release" },
];

function StatusBadge({ tone }: { tone: "live" | "wip" | "soon" }) {
  const config = {
    live: { label: "Live", color: "#047857", bg: "#ecfdf5", dot: "#047857" },
    wip: { label: "In development", color: "#b45309", bg: "#fffbeb", dot: "#d97706" },
    soon: { label: "Coming soon", color: "#525252", bg: "#f4f4f3", dot: "#a1a1aa" },
  }[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] font-mono font-semibold px-2.5 py-1 rounded-full"
      style={{ color: config.color, background: config.bg }}
    >
      <span className="size-1.5 rounded-full pulse-dot" style={{ background: config.dot }} />
      {config.label}
    </span>
  );
}

function KoalaMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="17" r="10.5" fill="#0a0a0a" />
      <circle cx="6.5" cy="9" r="4" fill="#0a0a0a" />
      <circle cx="25.5" cy="9" r="4" fill="#0a0a0a" />
      <circle cx="6.5" cy="9" r="1.5" fill="#fafaf9" />
      <circle cx="25.5" cy="9" r="1.5" fill="#fafaf9" />
      <circle cx="13" cy="16.5" r="1.4" fill="#fafaf9" />
      <circle cx="19" cy="16.5" r="1.4" fill="#fafaf9" />
      <ellipse cx="16" cy="20.6" rx="2.2" ry="1.5" fill="#c2410c" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Home() {
  return (
    <>
      {/* Floating Island Nav */}
      <header className="fixed top-4 inset-x-0 z-30 px-4 flex justify-center">
        <nav
          className="flex items-center gap-1 rounded-full px-2 py-1.5 max-w-full"
          style={{
            background: "rgba(250, 250, 249, 0.78)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "inset 0 0 0 1px rgba(15,23,42,0.06), 0 10px 30px -12px rgba(15,23,42,0.08)",
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 pl-3 pr-2 py-1.5"
          >
            <KoalaMark size={20} />
            <span className="wordmark">Koala Brothers</span>
          </Link>
          <div className="hidden md:flex items-center gap-0.5 px-2 border-l border-hairline ml-1">
            {[
              ["#shift", "Shift"],
              ["#pain", "Pain"],
              ["#os", "OS"],
              ["#products", "Products"],
              ["#roadmap", "Roadmap"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] text-ink-soft hover:text-ink px-3 py-1.5 rounded-full transition-colors hover:bg-paper-deep"
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#stay" className="btn-primary ml-1">
            Get early access
            <span className="btn-icon">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </nav>
      </header>

      <main className="px-4 sm:px-6 md:px-10">
        {/* HERO */}
        <section className="max-w-[1400px] mx-auto pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-28 lg:pb-36 grid grid-cols-12 gap-x-6 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <motion.span
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="eyebrow inline-flex"
            >
              <span className="eyebrow-dot" />
              Personal Agent OS · Vol. 01
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="headline mt-6 text-[clamp(2.2rem,5.6vw,4.8rem)] text-ink max-w-[16ch]"
            >
              The team you can&apos;t afford
              <br />
              <span className="text-ink-soft">to hire,</span>{" "}
              <span className="text-accent-deep">already on payroll.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="mt-7 text-[16px] md:text-[17.5px] leading-[1.6] text-ink-soft max-w-[52ch]"
            >
              Koala Brothers is an AI studio building the{" "}
              <strong className="text-ink font-medium">Personal Agent OS</strong> —
              a runtime, a shared memory, a set of hands, a crew of specialist
              agents, and a daily brief — for solo founders running a company
              with the output of fifty.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#stay" className="btn-primary">
                Get early access
                <span className="btn-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a href="#os" className="btn-secondary">
                See the architecture
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M3 6h6M6 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Hero right — phone mockup */}
          <div className="col-span-12 md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="float max-w-[280px] md:max-w-[300px] mx-auto"
            >
              <BriefPhoneMockup />
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto divider" />

        {/* SHIFT */}
        <section id="shift" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <motion.div {...fadeUp} className="col-span-12 lg:col-span-5">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                The shift
              </span>
              <h2 className="headline mt-6 text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
                The org chart{" "}
                <span className="text-accent-deep">becomes a runtime.</span>
              </h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-6"
            >
              <p className="text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft max-w-[58ch]">
                What used to require a full team can now be{" "}
                <strong className="text-ink font-medium">accessed on demand</strong>.
              </p>
              <p className="text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft max-w-[58ch]">
                Marketing. Research. Finance. Execution.
                <br />
                Exactly when you need it — for a decision, a sprint, or a moment
                that matters. AI doesn&apos;t just reduce cost. It changes how
                companies are built.
              </p>
              <p className="text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft max-w-[58ch]">
                Teams become a stack. You don&apos;t hire roles, you configure
                them. Standups turn into clear, actionable briefs.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto divider" />

        {/* PAIN POINTS — why solo founders are stuck */}
        <PainPoints />

        <div className="max-w-[1400px] mx-auto divider" />

        {/* THE OS — architecture diagram in card */}
        <section id="os" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
          <div className="text-center max-w-[760px] mx-auto mb-16 md:mb-20">
            <motion.span {...fadeUp} className="eyebrow inline-flex">
              <span className="eyebrow-dot" />
              The Personal Agent OS
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="headline mt-6 text-[clamp(2rem,4.6vw,3.8rem)] text-ink"
            >
              One organism.
              <br />
              <span className="text-accent-deep">Five surfaces.</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mt-6 text-[17px] leading-[1.6] text-ink-soft"
            >
              At the centre is a <strong className="text-ink font-medium">Runtime</strong>{" "}
              that hosts your agents and a <strong className="text-ink font-medium">Memory</strong>{" "}
              they all share. Around it: a Crew that does the work, Channels
              that act in the world, and a Brief that brings the result to you.
              One product. Five applications. Same brain.
            </motion.p>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="bezel mx-auto"
            style={{ maxWidth: 980 }}
          >
            <div className="bezel-inner p-6 md:p-12 lg:p-16">
              <AgentOSDiagram variant="full" />
            </div>
          </motion.div>
        </section>

        <div className="max-w-[1400px] mx-auto divider" />

        {/* PRODUCTS BENTO */}
        <section id="products" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 mb-10 md:mb-14">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Products
              </span>
              <h2 className="headline mt-6 text-[clamp(1.7rem,3.6vw,3rem)] text-ink">
                One OS.
                <br />
                <span className="text-accent-deep">Shipping as five applications.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-5 text-[15.5px] leading-[1.6] text-ink-soft self-end max-w-[46ch]">
              Each module ships as a standalone application. Together they
              share one runtime, one memory, and one identity — the backbone
              that makes them feel like a single organism, not five loose
              tools.
            </p>
          </div>

          {/* Five apps in flight strip */}
          <FiveAppsStrip />

          <div className="grid grid-cols-12 gap-4 md:gap-5 mt-12 md:mt-16">
            {PRODUCTS.map((p, idx) => {
              const Mock = p.Mock;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`col-span-12 ${p.span} bezel`}
                >
                  <div className="bezel-inner h-full p-6 md:p-8 flex flex-col gap-5 md:gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-baseline gap-2.5 flex-wrap">
                          <span className="font-mono text-[12px] text-ink-faint tracking-[0.18em]">
                            {p.n}
                          </span>
                          <h3 className="text-[26px] md:text-[30px] tracking-[-0.02em] text-ink font-medium">
                            {p.name}
                          </h3>
                          <span className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.18em]">
                            / {p.role}
                          </span>
                        </div>
                        <p className="mt-2 text-[15.5px] leading-[1.5] text-ink font-medium tracking-[-0.01em] max-w-[44ch]">
                          {p.tag}
                        </p>
                        <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft max-w-[52ch]">
                          {p.desc}
                        </p>
                      </div>
                      <StatusBadge tone={p.statusTone} />
                    </div>

                    <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center">
                      {p.name === "Brief" ? (
                        <div className="w-full flex justify-center pt-2">
                          <BriefPhoneMockup className="scale-[0.78] origin-top" />
                        </div>
                      ) : Mock ? (
                        <div className="w-full">
                          <Mock />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto divider" />

        {/* ROADMAP */}
        <section id="roadmap" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 mb-12 md:mb-16">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Roadmap
              </span>
              <h2 className="headline mt-6 text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
                Sequence, <span className="text-accent-deep">not slogans.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-5 text-[16px] leading-[1.6] text-ink-soft self-end max-w-[44ch]">
              Public quarterly checkpoints. Things slip; we publish when they
              do. Apple Developer enrollment is the gate the rest hinges on.
            </p>
          </div>

          <div className="bezel">
            <div className="bezel-inner p-6 md:p-10 lg:p-14">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-6 relative">
                {/* horizontal connector line on desktop */}
                <div className="hidden md:block absolute left-2 right-2 top-[14px] h-px bg-hairline" aria-hidden />
                {ROADMAP.map((q, idx) => (
                  <motion.div
                    key={q.quarter}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="hidden md:flex absolute -top-[5px] left-0 size-[12px] rounded-full bg-paper" style={{ boxShadow: "inset 0 0 0 2.5px #c2410c" }}>
                      {idx === 0 && (
                        <span className="absolute inset-0 rounded-full pulse-dot" style={{ background: "#c2410c", opacity: 0.4 }} />
                      )}
                    </div>
                    <div className="md:pt-7 flex md:block items-center gap-3">
                      <div className="md:hidden size-[10px] rounded-full" style={{ background: "#c2410c" }} />
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-deep mb-0 md:mb-3">
                        {q.quarter}
                      </div>
                    </div>
                    <div className="text-[16.5px] text-ink font-medium tracking-[-0.01em] mt-1.5">
                      {q.title}
                    </div>
                    <div className="text-[13.5px] text-ink-soft mt-1.5 leading-[1.5]">{q.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto divider" />

        {/* CTA / STAY */}
        <section id="stay" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
          <div className="bezel">
            <div className="bezel-inner p-8 md:p-16 lg:p-20 text-center relative overflow-hidden">
              {/* decorative gradient */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 50% at 50% 0%, rgba(254,215,170,0.55), transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="eyebrow inline-flex">
                  <span className="eyebrow-dot" />
                  Get notified
                </span>
                <h2 className="headline mt-6 text-[clamp(2rem,5vw,4.2rem)] text-ink">
                  Watch the work
                  <br />
                  <span className="text-accent-deep">in motion.</span>
                </h2>
                <p className="mt-6 text-[17px] leading-[1.55] text-ink-soft max-w-[52ch] mx-auto">
                  We send a letter when something ships, when something fails
                  interestingly, and when we change our minds about how an
                  agent should work. Three or four a quarter.
                </p>

                <form
                  className="mt-10 mx-auto flex flex-col sm:flex-row gap-2 max-w-[460px]"
                  action="https://formsubmit.co/hello@koalabro.co"
                  method="POST"
                >
                  <input type="hidden" name="_subject" value="New Koala Brothers signup" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@yourcompany.co"
                    className="flex-1 bg-paper-deep px-4 py-3 rounded-full text-[15px] outline-none placeholder:text-ink-faint focus:ring-2 focus:ring-accent/40 transition-shadow"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)" }}
                  />
                  <button type="submit" className="btn-primary justify-center">
                    Subscribe
                    <span className="btn-icon">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </form>

                <div className="mt-6 text-[12.5px] text-ink-faint font-mono uppercase tracking-[0.18em]">
                  Or write directly →{" "}
                  <a href="mailto:hello@koalabro.co" className="text-accent-deep hover:underline normal-case">
                    hello@koalabro.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-hairline mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 grid grid-cols-12 gap-y-6 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <KoalaMark size={22} />
            <span className="wordmark">Koala Brothers</span>
          </div>
          <div className="col-span-6 md:col-span-3 flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            <Link href="/privacy/" className="hover:text-ink transition-colors">Privacy</Link>
            <Link href="/terms/" className="hover:text-ink transition-colors">Terms</Link>
            <Link href="/support/" className="hover:text-ink transition-colors">Support</Link>
          </div>
          <div className="col-span-6 md:col-span-5 md:text-right text-[12px] text-ink-faint font-mono">
            © 2026 Koala Brothers LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

const PAIN_POINTS = [
  {
    n: "01",
    title: "The generalist trap.",
    body:
      "Marketer at 9. Engineer at 11. Operator at 2. CFO before bed. Five mediocre roles instead of one excellent one.",
    stat: "5+ hats",
    statLabel: "rotated daily",
  },
  {
    n: "02",
    title: "Your stack doesn't talk.",
    body:
      "The average solo founder rents 18 SaaS products. None of them know about the other 17. Every reconciliation lives in your head.",
    stat: "18",
    statLabel: "disconnected tools",
  },
  {
    n: "03",
    title: "Context-switch tax.",
    body:
      "Every 11 minutes your brain reloads — Slack to spreadsheet to docs to Stripe. By Friday, the week is fog and the work is a third done.",
    stat: "23 min",
    statLabel: "to refocus, per switch",
  },
  {
    n: "04",
    title: "Decision fatigue.",
    body:
      "Two hundred micro-decisions before lunch. The 201st is where the mistakes live, and there's no one to catch them.",
    stat: "201st",
    statLabel: "is where it breaks",
  },
  {
    n: "05",
    title: "Weekly amnesia.",
    body:
      "Last Tuesday's research is dead by Monday morning. You re-discover instead of compounding. Your second brain is a Slack thread you can't find.",
    stat: "0",
    statLabel: "useful institutional memory",
  },
  {
    n: "06",
    title: "Hire-or-scale paradox.",
    body:
      "Too small to bring help on. Too busy to compound the work alone. You stall — not because the market said no, but because Tuesday said no.",
    stat: "stuck",
    statLabel: "thinking headcount, needing a stack",
  },
];

function PainPoints() {
  return (
    <section id="pain" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
      <div className="grid grid-cols-12 gap-x-6 gap-y-6 mb-12 md:mb-16">
        <div className="col-span-12 lg:col-span-7">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Why it&apos;s broken
          </span>
          <h2 className="headline mt-6 text-[clamp(2rem,4.6vw,3.8rem)] text-ink">
            Running solo is{" "}
            <span className="text-accent-deep">deceptively brutal.</span>
          </h2>
        </div>
        <p className="col-span-12 lg:col-span-5 text-[16px] leading-[1.6] text-ink-soft self-end max-w-[46ch]">
          The one-person company sounds like freedom. In practice it&apos;s six
          jobs welded to a single calendar. Every tool you bolt on adds
          surface area. Every decision lands on the same desk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {PAIN_POINTS.map((p, idx) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: (idx % 3) * 0.08 + Math.floor(idx / 3) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bezel-flat p-6 md:p-7 flex flex-col gap-4 group"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                {p.n}
              </span>
              <div className="flex flex-col items-end">
                <span className="font-mono text-[18px] text-accent-deep tracking-[-0.02em] font-medium leading-none">
                  {p.stat}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-faint mt-1">
                  {p.statLabel}
                </span>
              </div>
            </div>
            <h3 className="text-[20px] md:text-[22px] tracking-[-0.02em] text-ink font-medium leading-tight">
              {p.title}
            </h3>
            <p className="text-[14px] leading-[1.55] text-ink-soft">{p.body}</p>
            <div className="mt-auto pt-2 flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.18em] text-ink-faint">
              <span className="size-1.5 rounded-full bg-accent-tint" />
              <span className="opacity-80">solo founder reality</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 md:mt-16 max-w-[680px] mx-auto text-center"
      >
        <p className="text-[17px] md:text-[19px] leading-[1.55] text-ink-soft">
          The answer isn&apos;t another chat window or a 19th SaaS subscription.
          It&apos;s an{" "}
          <strong className="text-ink font-medium">operating system</strong> for
          a personal organisation — one that{" "}
          <strong className="text-ink font-medium">remembers</strong>,{" "}
          <strong className="text-ink font-medium">acts</strong>, and{" "}
          <strong className="text-ink font-medium">briefs you back</strong>.
        </p>
      </motion.div>
    </section>
  );
}

const APP_ICONS = [
  {
    name: "Lead",
    platforms: ["Application", "Web"],
    status: "Live",
    statusTone: "live" as const,
    glyph: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="g-lead" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#g-lead)" />
        <circle cx="14" cy="18" r="3.2" fill="#fff" />
        <circle cx="22" cy="18" r="3.2" fill="#fff" opacity="0.78" />
        <circle cx="30" cy="18" r="3.2" fill="#fff" opacity="0.55" />
        <path d="M 10 28 L 30 28" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Brief",
    platforms: ["Application", "Web"],
    status: "In dev",
    statusTone: "wip" as const,
    glyph: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="g-brief" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#g-brief)" />
        <rect x="10" y="11" width="20" height="2.4" rx="1" fill="#0a0a0a" opacity="0.85" />
        <rect x="10" y="17" width="14" height="2" rx="1" fill="#0a0a0a" opacity="0.6" />
        <rect x="10" y="22" width="20" height="2" rx="1" fill="#0a0a0a" opacity="0.6" />
        <rect x="10" y="27" width="11" height="2" rx="1" fill="#0a0a0a" opacity="0.6" />
        <circle cx="32" cy="13" r="2.5" fill="#c2410c" />
      </svg>
    ),
  },
  {
    name: "Channels",
    platforms: ["Application", "macOS"],
    status: "In dev",
    statusTone: "wip" as const,
    glyph: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="g-channels" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bef264" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#g-channels)" />
        <circle cx="13" cy="13" r="3.2" fill="#fff" />
        <circle cx="27" cy="13" r="3.2" fill="#fff" />
        <circle cx="13" cy="27" r="3.2" fill="#fff" />
        <circle cx="27" cy="27" r="3.2" fill="#fff" />
        <path
          d="M 13 13 L 27 13 M 13 13 L 13 27 M 27 13 L 27 27 M 13 27 L 27 27 M 13 13 L 27 27"
          stroke="#fff"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: "Crew",
    platforms: ["Application", "macOS"],
    status: "Soon",
    statusTone: "soon" as const,
    glyph: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="g-crew" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#g-crew)" />
        <circle cx="14" cy="16" r="4" fill="#fff" />
        <circle cx="26" cy="16" r="4" fill="#fff" />
        <circle cx="20" cy="26" r="4" fill="#fff" />
        <circle cx="14" cy="16" r="1.6" fill="#0a0a0a" opacity="0.65" />
        <circle cx="26" cy="16" r="1.6" fill="#0a0a0a" opacity="0.65" />
        <circle cx="20" cy="26" r="1.6" fill="#0a0a0a" opacity="0.65" />
      </svg>
    ),
  },
  {
    name: "Runtime",
    platforms: ["Application", "macOS"],
    status: "Soon",
    statusTone: "soon" as const,
    glyph: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="g-runtime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1815" />
            <stop offset="100%" stopColor="#3f3f46" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#g-runtime)" />
        <circle cx="20" cy="20" r="9" fill="none" stroke="#c2410c" strokeWidth="1.4" />
        <circle cx="20" cy="20" r="3" fill="#c2410c" />
        <circle cx="20" cy="20" r="13.5" fill="none" stroke="#fed7aa" strokeWidth="0.6" strokeDasharray="1.5 3" opacity="0.7" />
      </svg>
    ),
  },
];

function FiveAppsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bezel"
    >
      <div className="bezel-inner p-4 sm:p-5 md:p-6">
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            Apps in flight · App Store roadmap
          </span>
          <span className="hidden sm:inline font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint">
            5 binaries · 1 brain
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3.5">
          {APP_ICONS.map((app, idx) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl bg-paper-deep/60 hover:bg-paper-deep transition-colors p-3 md:p-3.5 flex flex-col items-stretch gap-2.5"
              style={{ boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)" }}
            >
              <div className="flex items-center justify-between gap-2">
                <div
                  className="size-11 flex-shrink-0 rounded-[11px] overflow-hidden"
                  style={{
                    boxShadow:
                      "0 6px 16px -8px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
                  }}
                >
                  {app.glyph}
                </div>
                <span
                  className="font-mono text-[8.5px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap px-1.5 py-0.5 rounded"
                  style={{
                    color:
                      app.statusTone === "live"
                        ? "#047857"
                        : app.statusTone === "wip"
                          ? "#b45309"
                          : "#71717a",
                    background:
                      app.statusTone === "live"
                        ? "#ecfdf5"
                        : app.statusTone === "wip"
                          ? "#fffbeb"
                          : "#f4f4f3",
                  }}
                >
                  {app.status}
                </span>
              </div>
              <div>
                <div className="text-[14.5px] md:text-[15px] font-medium text-ink tracking-[-0.01em]">
                  {app.name}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  {app.platforms.map((pl) => (
                    <span
                      key={pl}
                      className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink-faint"
                    >
                      {pl}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

