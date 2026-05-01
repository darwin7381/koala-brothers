import Link from "next/link";

export default function LegalShell({
  eyebrow,
  title,
  children,
}: {
  numeral?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-4 inset-x-0 z-30 px-4 flex justify-center">
        <nav
          className="flex items-center gap-1 rounded-full px-2 py-1.5"
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
            <KoalaMark />
            <span className="wordmark">Koala Brothers</span>
          </Link>
          <Link
            href="/"
            className="text-[12px] text-ink-soft hover:text-ink px-3 py-1.5 rounded-full transition-colors hover:bg-paper-deep border-l border-hairline ml-1 font-mono uppercase tracking-[0.16em]"
          >
            ← Return
          </Link>
        </nav>
      </header>

      <main className="px-4 sm:px-6 md:px-10 max-w-[920px] mx-auto pt-32 md:pt-40 pb-32">
        <div className="mb-10 md:mb-14">
          <span className="eyebrow inline-flex">
            <span className="eyebrow-dot" />
            {eyebrow}
          </span>
          <h1 className="headline mt-6 text-[clamp(2.4rem,5vw,4rem)] text-ink">
            {title}
          </h1>
        </div>

        <div className="divider mb-12" />

        <article className="legal-prose">{children}</article>
      </main>

      <footer className="border-t border-hairline mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 grid grid-cols-12 gap-y-6 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <KoalaMark />
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

function KoalaMark() {
  return (
    <svg width={22} height={22} viewBox="0 0 32 32" fill="none">
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
