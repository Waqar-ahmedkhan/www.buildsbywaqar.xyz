import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SearchableReadingList } from "@/components/SearchableReadingList";
import {
  getReadingCollection,
  READING_NAV,
  type ReadingCategoryKey,
  type ReadingCollection,
} from "@/data/reading-shelf";

const SITE_NAME = "Waqar Ahmed";

export function readingMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `https://www.buildsbywaqar.xyz${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      url,
      siteName: `${SITE_NAME} Portfolio`,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@Mr___WaQAR",
      creator: "@Mr___WaQAR",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/image.png"],
    },
  };
}

function ReadingNavigation({ current }: { current: ReadingCategoryKey }) {
  return (
    <nav aria-label="Reading collections" className="flex gap-5 overflow-x-auto border-b border-border/70">
      {READING_NAV.map((item) => {
        const isCurrent = item.key === current;

        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isCurrent ? "page" : undefined}
            className={`shrink-0 border-b-2 px-0.5 pb-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isCurrent
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

function ReadingPageShell({
  current,
  title,
  description,
  children,
}: {
  current: ReadingCategoryKey;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-6 pb-28 pt-3 sm:space-y-8 sm:pt-5">
      <header className="max-w-3xl">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
        </div>
      </header>

      <ReadingNavigation current={current} />
      {children}

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5 text-xs text-muted-foreground sm:text-sm">
        <Link className="transition-colors hover:text-foreground" href="/privacy">Privacy</Link>
        <Link className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground" href="/">
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to portfolio
        </Link>
      </footer>
    </main>
  );
}

export function ReadingCollectionPage({ collectionKey }: { collectionKey: ReadingCollection["key"] }) {
  const collection = getReadingCollection(collectionKey);

  if (!collection) return null;

  return (
    <ReadingPageShell
      current={collection.key}
      title={collection.title}
      description={collection.description}
    >
      <SearchableReadingList title={collection.title} coverTone={collection.coverTone} items={collection.items} />
    </ReadingPageShell>
  );
}
