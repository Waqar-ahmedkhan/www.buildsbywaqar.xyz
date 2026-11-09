import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { RESUME_DATA } from "@/data/resume-data";

const BASE_URL = "https://www.buildsbywaqar.xyz";
const PAGE_URL = `${BASE_URL}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Waqar Ahmed's portfolio (buildsbywaqar.xyz), covering analytics, cookies, and contact information handling.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Waqar Ahmed Portfolio",
    title: "Privacy Policy | Waqar Ahmed Portfolio",
    description:
      "How telemetry, analytics, and direct contact data are handled on Waqar Ahmed's portfolio.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Waqar Ahmed Portfolio Privacy Policy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Mr___WaQAR",
    creator: "@Mr___WaQAR",
    title: "Privacy Policy | Waqar Ahmed Portfolio",
    description:
      "How telemetry, analytics, and direct contact data are handled on Waqar Ahmed's portfolio.",
    images: ["/image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl pb-24 pt-2 sm:pt-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        Portfolio
      </Link>

      <header className="mt-8 border-b border-border/80 pb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Updated November 2026
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This policy explains what minimal information is collected when you
          visit <span className="text-foreground">buildsbywaqar.xyz</span> and
          how it is used.
        </p>
      </header>

      <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            1. Analytics &amp; Performance Telemetry
          </h2>
          <p>
            This website uses privacy-friendly aggregate web analytics (Vercel
            Web Analytics and optional Google Tag Manager) to understand page
            views, referral sources, device types, and general performance
            metrics. No personally identifiable profiles are sold or shared with
            data brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            2. Local Storage &amp; Preferences
          </h2>
          <p>
            Your visual theme preference (<code className="text-xs">light</code>{" "}
            or <code className="text-xs">dark</code>) is stored locally in your
            browser&apos;s <code className="text-xs">localStorage</code> solely
            to prevent theme flashing across page loads.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            3. Direct Contact &amp; Booking
          </h2>
          <p>
            If you reach out via email ({RESUME_DATA.contact.email}) or schedule
            a call via an external booking link, any details you provide are
            used strictly to respond to your inquiry or collaboration request.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            4. External Links
          </h2>
          <p>
            Pages such as the{" "}
            <Link
              href="/inspiration"
              className="text-foreground underline underline-offset-4"
            >
              Design Index
            </Link>{" "}
            link out to external design galleries, open-source repositories, and
            third-party tools. Each external domain operates under its own
            privacy policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            5. Contact
          </h2>
          <p>
            For any questions regarding this policy, email{" "}
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {RESUME_DATA.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
