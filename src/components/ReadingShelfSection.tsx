import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { ReadingThumbnail } from "@/components/ReadingThumbnail";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { READING_COLLECTIONS } from "@/data/reading-shelf";

export function ReadingShelfSection() {
  return (
    <Section id="reading" className="scroll-mt-6 animate-fade-in">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <SectionHeading>Reading &amp; watching</SectionHeading>
          <p className="-mt-2 max-w-2xl text-xs leading-5 text-muted-foreground sm:text-sm">
            Books, LLM papers, essays, philosophy, and films worth returning to.
          </p>
        </div>
        <Link
          href="/books"
          className="mb-1 inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
        >
          Browse the shelf
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-x-8 sm:grid-cols-2">
        {READING_COLLECTIONS.map((collection) => (
          <Link
            key={collection.key}
            href={`/${collection.key}`}
            className="reading-shelf-item group flex min-w-0 items-center gap-3 border-b border-border/70 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ReadingThumbnail
              title={collection.title}
              tone={collection.coverTone}
              src={collection.items[0]?.image}
              fit={collection.items[0]?.imageFit}
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {collection.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">{collection.description}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{collection.items.length} items</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
