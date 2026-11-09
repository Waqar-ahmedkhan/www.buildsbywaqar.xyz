"use client";

import { memo, useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Search, X } from "lucide-react";

import { ReadingThumbnail } from "@/components/ReadingThumbnail";
import type { ReadingResource } from "@/data/reading-shelf";

const ReadingItem = memo(function ReadingItem({ item, coverTone }: { item: ReadingResource; coverTone: string }) {
  const arxivId = item.href.startsWith("https://arxiv.org/abs/")
    ? item.href.slice("https://arxiv.org/abs/".length)
    : null;
  const fullTextHref = item.fullTextHref ?? (arxivId ? `https://arxiv.org/pdf/${arxivId}` : null);

  return (
    <li>
      <div className="reading-shelf-item group flex min-w-0 items-center gap-3 border-b border-border/70 py-3">
        <ReadingThumbnail
          title={item.title}
          tone={coverTone}
          src={item.image}
          alt={item.imageAlt}
          fit={item.imageFit}
        />
        <div className="min-w-0 flex-1">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="line-clamp-2 text-sm font-semibold leading-5 text-foreground transition-colors hover:text-primary sm:text-base">
              {item.title}
            </span>
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          </a>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{item.note}</p>
          {fullTextHref ? (
            <a
              href={fullTextHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <BookOpen className="size-3.5" aria-hidden="true" />
              {arxivId ? "Read paper PDF" : "Read full text"}
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
});

export function SearchableReadingList({
  title,
  coverTone,
  items,
}: {
  title: string;
  coverTone: string;
  items: readonly ReadingResource[];
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleItems = useMemo(
    () =>
      normalizedQuery
        ? items.filter((item) =>
            `${item.title} ${item.detail} ${item.note}`.toLocaleLowerCase().includes(normalizedQuery),
          )
        : items,
    [items, normalizedQuery],
  );

  return (
    <section aria-label={`${title} collection`}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs tabular-nums text-muted-foreground" aria-live="polite">
          {normalizedQuery ? `${visibleItems.length} of ${items.length} items` : `${items.length} items`}
        </p>
        <label className="group flex h-10 w-full items-center gap-2.5 border-b border-border/80 text-muted-foreground transition-colors focus-within:border-foreground sm:max-w-xs">
          <Search className="size-4 shrink-0" aria-hidden="true" />
          <span className="sr-only">Search {title.toLocaleLowerCase()}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${title.toLocaleLowerCase()}…`}
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/80"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-sm p-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Clear search"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </label>
      </div>

      {visibleItems.length ? (
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {visibleItems.map((item) => <ReadingItem key={item.title} item={item} coverTone={coverTone} />)}
        </ul>
      ) : (
        <p className="border-b border-border/70 py-10 text-sm text-muted-foreground" role="status">
          No matches for “{query.trim()}”. Try a title, author, or topic.
        </p>
      )}
    </section>
  );
}
