import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Maad 97.5 FM",
  description:
    "Privacy Policy for Maad 97.5 FM. Learn how we collect, use, and protect your information when you visit our website or use our services.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "https://www.maad97.com"),
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy - Maad 97.5 FM",
    description:
      "Privacy Policy for Maad 97.5 FM. Learn how we collect, use, and protect your information.",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center pt-24 px-4 sm:px-6 lg:px-8 gap-8 bg-[#0b0b0b] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-8 w-28 h-28 bg-[#FD7B2B]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-8 w-40 h-40 bg-[#FD7B2B]/6 rounded-full blur-3xl"></div>
      </div>

      <Link
        href="/"
        className="relative z-10 text-[#FD7B2B] hover:text-[#FF8C42] transition-colors duration-200 text-base sm:text-lg font-medium"
      >
        &larr; Back to Home
      </Link>

      <div className="relative z-10 w-full max-w-3xl glass-dark rounded-3xl px-6 sm:px-10 md:px-12 py-12 border border-white/5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text tracking-wide mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: June 22, 2026</p>

        <div className="space-y-8 text-gray-200 leading-relaxed">
          <p className="text-lg">
            Maad 97.5 FM (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects
            your privacy. This policy explains what information we collect, how
            we use it, and the choices you have. It applies to our website and
            our Facebook page.
          </p>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li>
                <span className="text-white font-medium">Contact form:</span>{" "}
                your name and email address when you send us a message.
              </li>
              <li>
                <span className="text-white font-medium">Cookies:</span> small
                files stored on your device to keep the site working smoothly.
              </li>
              <li>
                <span className="text-white font-medium">Analytics:</span>{" "}
                basic, anonymous data about visits and page views.
              </li>
              <li>
                <span className="text-white font-medium">Facebook Pixel:</span>{" "}
                data collected by Meta to measure ad performance on Facebook.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li>Responding to your questions and feedback.</li>
              <li>Improving the website and your listening experience.</li>
              <li>Sharing updates, promotions, and marketing from Maad 97.5 FM.</li>
              <li>Understanding which content and shows are most popular.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Third-Party Services
            </h2>
            <p className="mb-3">
              We use trusted third-party services that may collect limited data
              when you visit or interact with our site:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li>Facebook and the Facebook Pixel</li>
              <li>TuneIn radio directory</li>
              <li>YouTube video embeds</li>
              <li>EmailJS for delivering contact form messages</li>
              <li>Audio streaming providers</li>
              <li>ReviewIt reviews widget</li>
            </ul>
            <p className="mt-3">
              These services have their own privacy policies and are governed by
              their own terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We only share data with
              the service providers listed above, and only as needed to run the
              site and respond to your messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Your Rights
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li>Request access to the personal data we hold about you.</li>
              <li>Ask us to delete your information.</li>
              <li>Opt out of marketing emails at any time.</li>
              <li>Disable cookies in your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Cookies
            </h2>
            <p>
              We use cookies to remember your preferences, such as volume
              settings, and to understand how the site is used. You can control
              or delete cookies through your browser. Disabling cookies may
              affect some features of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Our website is not directed at children under 13. We do not
              knowingly collect personal information from children. If you
              believe a child has shared information with us, please contact us
              and we will remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FD7B2B] mb-3">
              Contact Us
            </h2>
            <p>
              Have questions about this privacy policy or your personal data?
              Use the{" "}
              <Link
                href="/#contact"
                className="text-[#FD7B2B] hover:text-[#FF8C42] transition-colors duration-200 underline"
              >
                contact form on our website
              </Link>{" "}
              and we will get back to you.
            </p>
          </section>

          <p className="text-gray-400 text-sm pt-4 border-t border-white/5">
            This privacy policy may be updated from time to time. Changes will be
            posted on this page with a new &quot;Last updated&quot; date.
          </p>
        </div>
      </div>
    </main>
  );
}
