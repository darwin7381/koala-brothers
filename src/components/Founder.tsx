"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function FounderSection() {
  return (
    <section id="founder" className="max-w-[1400px] mx-auto py-20 md:py-28 lg:py-36">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
        <motion.div {...fadeUp} className="col-span-12 lg:col-span-5">
          <FounderCard />
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="col-span-12 lg:col-span-6 lg:col-start-7"
        >
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Founder
          </span>
          <h2 className="headline mt-6 text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
            Joey Luo.
          </h2>
          <p className="mt-7 text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft max-w-[58ch]">
            Joey is the founder of Koala Brothers and{" "}
            <strong className="text-ink font-medium">BlockTempo</strong> — a
            leading tech and finance media in Asia serving millions of monthly
            readers.
          </p>
          <p className="mt-5 text-[16px] leading-[1.6] text-ink-soft max-w-[58ch]">
            After a decade scaling editorial operations, he&apos;s now building
            a different kind of organisation — one that runs on agents instead
            of headcount.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-4 max-w-[460px]">
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-ink font-medium tracking-[-0.01em]">BlockTempo</span>
              <span className="text-[10.5px] text-ink-faint font-mono uppercase tracking-[0.18em]">Founder</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-ink font-medium tracking-[-0.01em]">Koala Brothers</span>
              <span className="text-[10.5px] text-ink-faint font-mono uppercase tracking-[0.18em]">Founder</span>
            </div>
            <a
              href="https://www.tatlerasia.com/people/joey-luo-en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 group"
            >
              <span className="text-[13px] text-ink font-medium tracking-[-0.01em] group-hover:text-accent-deep transition-colors inline-flex items-center gap-1">
                Tatler Gen.T
                <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" aria-hidden>
                  <path d="M3 9 L9 3 M5 3 H9 V7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[10.5px] text-ink-faint font-mono uppercase tracking-[0.18em]">Leaders of Tomorrow · 2022</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FounderCard() {
  return (
    <div className="bezel">
      <div className="bezel-inner aspect-[5/6] relative overflow-hidden">
        <Image
          src="/founder.jpg"
          alt="J. Luo, Founder"
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
          priority
        />

        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="absolute bottom-4 right-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/90 text-right">
          Koala Brothers LLC / Founder
        </div>
      </div>
    </div>
  );
}
