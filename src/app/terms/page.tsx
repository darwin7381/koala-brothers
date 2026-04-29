import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Koala Brothers website and products.",
};

export default function TermsPage() {
  return (
    <LegalShell numeral="§" eyebrow="Legal" title="Terms of Service" effective="April 29, 2026">
      <p>
        These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) govern your access to and use of the
        websites, applications, and services provided by Koala Brothers LLC (&ldquo;<strong>Koala Brothers</strong>,&rdquo;
        &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>&rdquo;). By using the Services you agree to
        these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use the Services. If you use the Services on behalf of an entity, you
        represent that you have authority to bind that entity to these Terms.
      </p>

      <h2>2. Your account</h2>
      <p>
        You are responsible for any activity that occurs under your account and for safeguarding your credentials.
        Notify us promptly of any unauthorized use.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Do not interfere with or disrupt the Services or the infrastructure that supports them.</li>
        <li>Do not attempt to gain unauthorized access to other accounts, systems, or networks.</li>
        <li>Do not use the Services to violate applicable laws or to infringe the rights of others.</li>
        <li>Do not reverse engineer or otherwise extract the source code of the Services, except where law permits.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        The Services, including all software, designs, text, graphics, and other content, are owned by Koala
        Brothers or its licensors and are protected by intellectual property laws. We grant you a limited,
        revocable, non-exclusive, non-transferable license to use the Services for their intended purpose.
      </p>

      <h2>5. Beta and pre-release features</h2>
      <p>
        Some products described on this site are in development, beta, or pre-release. They may be unstable,
        change without notice, or be discontinued. Pre-release features are provided &ldquo;as is&rdquo; and we
        disclaim warranties for them to the maximum extent permitted by law.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
        WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, KOALA BROTHERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUES, OR DATA, ARISING OUT OF OR
        IN CONNECTION WITH YOUR USE OF THE SERVICES.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time, with or without notice, for conduct
        that we believe violates these Terms or is otherwise harmful to other users or our business.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may modify these Terms from time to time. If we make material changes we will notify you, for example
        by updating the &ldquo;Effective&rdquo; date. Your continued use of the Services after changes take effect
        constitutes acceptance of the new Terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws
        principles. Disputes arising under these Terms shall be resolved in the state or federal courts located
        in Delaware, and you consent to personal jurisdiction there.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:legal@koalabro.co">legal@koalabro.co</a>.
      </p>
    </LegalShell>
  );
}
