import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Koala Brothers LLC collects, uses, and safeguards your information.",
};

export default function PrivacyPage() {
  return (
    <LegalShell numeral="§" eyebrow="Legal" title="Privacy Policy">
      <p>
        Koala Brothers LLC (&ldquo;<strong>Koala Brothers</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo;
        &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>&rdquo;) respects your privacy. This
        Privacy Policy explains how we collect, use, and safeguard information when you visit{" "}
        <a href="https://koalabro.co">koalabro.co</a> or use our products and services
        (collectively, the &ldquo;<strong>Services</strong>&rdquo;).
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> When you join our mailing list, contact us, or apply for early
          access, we collect the email address and any other details you submit.
        </li>
        <li>
          <strong>Automatically collected information.</strong> When you visit the Services, our hosting providers
          may log standard request data (IP address, user-agent, referrer, timestamp) for security and
          operational purposes.
        </li>
        <li>
          <strong>Cookies.</strong> The marketing site uses essential cookies only. We do not run third-party
          advertising trackers.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to inquiries you initiate.</li>
        <li>To send periodic product updates and letters, only to addresses that have opted in.</li>
        <li>To detect, prevent, and address technical or security issues.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Sharing of information</h2>
      <p>
        We do not sell your personal information. We share information only with service providers who help us
        operate the Services (for example, our email and hosting infrastructure) under confidentiality
        obligations, or when required by law.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We retain personal information only as long as necessary for the purposes set out above, or as required
        by applicable law. You may request deletion of your data at any time by emailing{" "}
        <a href="mailto:privacy@koalabro.co">privacy@koalabro.co</a>.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, port, or delete your personal
        information. To exercise these rights, contact us at{" "}
        <a href="mailto:privacy@koalabro.co">privacy@koalabro.co</a>.
      </p>

      <h2>6. Children</h2>
      <p>
        Our Services are not directed to children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided us with personal information, please contact us so
        we can delete it.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Our Services may be provided using infrastructure and service providers that process information in the
        United States and other countries. By using the Services, you understand that your information may be
        transferred to, stored, and processed in jurisdictions outside your place of residence.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards designed to protect personal
        information. No method of transmission or storage is fully secure; we cannot guarantee absolute
        security.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will, where appropriate, provide
        additional notice.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions or requests should be directed to{" "}
        <a href="mailto:privacy@koalabro.co">privacy@koalabro.co</a>.
      </p>
    </LegalShell>
  );
}
