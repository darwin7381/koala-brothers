import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Support",
  description: "How to reach Koala Brothers for support, partnerships, or press.",
};

export default function SupportPage() {
  return (
    <LegalShell numeral="§" eyebrow="Help" title="Support." effective="April 29, 2026">
      <p>
        Koala Brothers is a small studio. There&apos;s no support ticket queue or chatbot — just an email
        address that lands in a real human&apos;s inbox.
      </p>

      <h2>General questions</h2>
      <p>
        For product questions, account issues, or anything you can&apos;t find on this site, write to us at{" "}
        <a href="mailto:hello@koalabro.co">hello@koalabro.co</a>. We aim to reply within two business days.
      </p>

      <h2>Privacy & data requests</h2>
      <p>
        For privacy questions or requests under applicable data protection laws, please email{" "}
        <a href="mailto:privacy@koalabro.co">privacy@koalabro.co</a>.
      </p>

      <h2>Press & partnerships</h2>
      <p>
        Members of the press, investors, and prospective design partners can reach the founder directly at{" "}
        <a href="mailto:press@koalabro.co">press@koalabro.co</a>.
      </p>

      <h2>Mailing address</h2>
      <p>
        Koala Brothers LLC
        <br />
        Wilmington, Delaware
        <br />
        United States
      </p>

      <h2>App support</h2>
      <p>
        If you reached this page from inside one of our applications, the same address —{" "}
        <a href="mailto:hello@koalabro.co">hello@koalabro.co</a> — is the right one. Please include the app name
        and version in your message so we can route it quickly.
      </p>
    </LegalShell>
  );
}
