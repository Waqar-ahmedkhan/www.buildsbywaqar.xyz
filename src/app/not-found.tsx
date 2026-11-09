import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you are looking for does not exist or has moved. Return to Waqar Ahmed's portfolio or explore the Design Index.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[72vh] w-full max-w-3xl flex-col items-start justify-center py-16">
      <div className="w-full rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Error 404 / Route Not Found
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          The URL may be mistyped or the page may have moved. Head back to the
          portfolio or browse the UI &amp; Claude Code Design Index.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/inspiration">
              <Compass className="size-4" aria-hidden="true" />
              Open Design Index
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
