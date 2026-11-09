"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  AudioLines,
  Blocks,
  Box,
  CheckCircle2,
  Compass,
  Film,
  GitBranch,
  Image as ImageIcon,
  Layers,
  LayoutTemplate,
  MousePointer2,
  Palette,
  Route,
  Search,
  Shapes,
  Sparkles,
  Spline,
  TrendingUp,
  Type,
  WandSparkles,
  Wrench,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  AGENT_TASK_ROUTES,
  DESIGN_GROUPS,
  DESIGN_RESOURCES,
  DESIGN_RESOURCE_COUNT,
  FAVORITE_RESOURCES,
  PRODUCTION_READINESS_ITEMS,
  type DesignGroupTone,
  type DesignResource,
  type DesignTrendTone,
} from "@/data/design-resources";

const ICON_TONE_STYLES: Record<
  DesignGroupTone | DesignTrendTone,
  string
> = {
  amber: "bg-secondary/70 text-amber-600 dark:text-amber-400",
  sky: "bg-secondary/70 text-sky-600 dark:text-sky-400",
  violet: "bg-secondary/70 text-violet-600 dark:text-violet-400",
  emerald: "bg-secondary/70 text-emerald-600 dark:text-emerald-400",
  rose: "bg-secondary/70 text-rose-600 dark:text-rose-400",
  cyan: "bg-secondary/70 text-cyan-600 dark:text-cyan-400",
};

type Favorite = (typeof FAVORITE_RESOURCES)[number];
type PlaybookTab = "router" | "checklist";

const AGENT_READY_TAGS = new Set([
  "claude code",
  "claude",
  "vibe coding",
  "ai-ready",
  "mcp",
  "prompts",
  "shadcn",
]);

function isAgentFocusedResource(resource: DesignResource) {
  return (
    resource.category === "ai-prompts" ||
    resource.tags.some((tag) => AGENT_READY_TAGS.has(tag.toLowerCase()))
  );
}

const RESOURCE_SEARCH_TEXT = new Map(
  DESIGN_RESOURCES.map((resource) => [
    resource.id,
    [
      resource.name,
      resource.domain,
      resource.category,
      resource.description,
      resource.bestFor,
      ...resource.tags,
      ...(resource.aliases ?? []),
    ].join(" ").toLowerCase(),
  ])
);

const RESOURCE_GROUPS = DESIGN_GROUPS.map((group) => ({
  ...group,
  resources: DESIGN_RESOURCES.filter((resource) =>
    group.categories.includes(resource.category)
  ),
}));

const RESOURCE_BY_ID = new Map(DESIGN_RESOURCES.map((resource) => [resource.id, resource]));

const GROUP_INTENTS: Record<string, string> = {
  "landing-pages": "Study structure, messaging, and conversion.",
  inspiration: "Find a visual direction from real products and sites.",
  build: "Explore reusable UI, templates, and agent tools.",
  motion: "Find motion patterns, effects, and open-source tools.",
  toolkit: "Pick the finishing details: type, icons, color, and assets.",
};

function ResourceIcon({
  resource,
  className,
}: {
  resource: DesignResource;
  className?: string;
}) {
  const tags = resource.tags.map((tag) => tag.toLowerCase());
  const iconProps = {
    className,
    strokeWidth: 1.8,
    "aria-hidden": true,
  } as const;

  if (resource.category === "ux-flows") {
    return tags.includes("animation") ? (
      <MousePointer2 {...iconProps} />
    ) : (
      <Route {...iconProps} />
    );
  }

  if (resource.category === "landing-pages") {
    return <LayoutTemplate {...iconProps} />;
  }

  if (resource.category === "galleries") {
    return tags.includes("minimal") ? (
      <Spline {...iconProps} />
    ) : (
      <Compass {...iconProps} />
    );
  }

  if (resource.category === "components") {
    if (tags.includes("css")) return <Palette {...iconProps} />;
    if (tags.includes("micro-interactions")) {
      return <MousePointer2 {...iconProps} />;
    }
    return <Blocks {...iconProps} />;
  }

  if (resource.category === "motion") {
    if (tags.includes("prompts")) return <WandSparkles {...iconProps} />;
    if (tags.includes("sections")) return <Layers {...iconProps} />;
    return <Sparkles {...iconProps} />;
  }

  if (resource.category === "ai-prompts") {
    if (tags.includes("video")) return <Film {...iconProps} />;
    if (tags.includes("sections")) return <Layers {...iconProps} />;
    return <WandSparkles {...iconProps} />;
  }

  if (resource.category === "templates") {
    return <Layers {...iconProps} />;
  }

  if (resource.category === "toolkit") {
    if (tags.includes("icons")) return <Shapes {...iconProps} />;
    if (
      tags.includes("typography") ||
      tags.includes("fonts") ||
      tags.includes("branding")
    ) {
      return <Type {...iconProps} />;
    }
    if (tags.includes("images") || tags.includes("illustrations")) {
      return <ImageIcon {...iconProps} />;
    }
    if (tags.includes("colour") || tags.includes("gradients")) {
      return <Palette {...iconProps} />;
    }
    if (tags.includes("seo")) return <TrendingUp {...iconProps} />;
    if (tags.includes("backgrounds") || tags.includes("svg")) {
      return <Spline {...iconProps} />;
    }
    if (tags.includes("animation")) return <Film {...iconProps} />;
    return <Wrench {...iconProps} />;
  }

  if (resource.category === "open-source") {
    if (tags.includes("audio") || tags.includes("voice")) {
      return <AudioLines {...iconProps} />;
    }
    if (tags.includes("3d") || tags.includes("physics")) {
      return <Box {...iconProps} />;
    }
    if (
      tags.includes("video") ||
      tags.includes("editor") ||
      tags.includes("encoding")
    ) {
      return <Film {...iconProps} />;
    }
    if (tags.includes("shaders")) return <Sparkles {...iconProps} />;
    return <GitBranch {...iconProps} />;
  }

  return <ArrowUpRight {...iconProps} />;
}

export function DesignIndex() {
  const [query, setQuery] = useState("");
  const [playbookTab, setPlaybookTab] = useState<PlaybookTab>("router");

  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const visibleGroups = useMemo(
    () =>
      RESOURCE_GROUPS.map((group) => ({
          ...group,
          resources: normalizedQuery
            ? group.resources.filter((resource) =>
                RESOURCE_SEARCH_TEXT.get(resource.id)?.includes(normalizedQuery)
              )
            : group.resources,
        }))
        .filter((group) => group.resources.length > 0),
    [normalizedQuery]
  );

  const resultCount = visibleGroups.reduce(
    (total, group) => total + group.resources.length,
    0
  );

  return (
    <main className="mx-auto w-full max-w-4xl pb-24 pt-2 sm:pt-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Portfolio
        </Link>
      </div>

      <header className="mt-6 border-b border-border/80 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              Design Index
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Find visual direction, product patterns, and tools to make your next interface better.
            </p>
          </div>
        </div>
      </header>

      {/* Agent Playbook: Which Site for What + 12-Point Production Standard */}
      <details className="mt-4 border-b border-border/70 py-3">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
            <span>Build tools</span>
          <span className="text-xs">Reference guide · Site checklist</span>
        </summary>
        <div className="pt-4">
        <div className="flex justify-end border-b border-border/70 pb-3.5">
          <div
            role="tablist"
            aria-label="Agent protocol view"
            className="inline-flex w-fit rounded-lg border border-border/80 bg-background/70 p-0.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={playbookTab === "router"}
              onClick={() => setPlaybookTab("router")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                playbookTab === "router"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Browse by task
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={playbookTab === "checklist"}
              onClick={() => setPlaybookTab("checklist")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                playbookTab === "checklist"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Site checklist
            </button>
          </div>
        </div>

        {playbookTab === "router" ? (
          <div className="mt-4 grid gap-x-6 sm:grid-cols-2">
            {AGENT_TASK_ROUTES.map((route) => {
              const linkedResources = route.resourceIds
                .map((id) => RESOURCE_BY_ID.get(id))
                .filter((item): item is DesignResource => Boolean(item));

              return (
                <div
                  key={route.id}
                  className="flex flex-col justify-between border-b border-border/70 py-3.5 first:pt-0 sm:px-2 sm:odd:pl-0 sm:even:pr-0"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-medium text-foreground">
                        {route.task}
                      </h3>
                      <span className="text-[11px] tabular-nums text-muted-foreground">{linkedResources.length}</span>
                    </div>
                    <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                      {route.whenToUse}
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {linkedResources.map((res) => (
                      <a
                        key={res.id}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span>{res.name}</span>
                        <ArrowUpRight
                          className="size-2.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-3.5">
            <p className="mb-3 text-xs text-muted-foreground">
              A vibe-coded site looks fake without these 12 fundamentals. Every
              route and deployment must satisfy all 12 items below:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTION_READINESS_ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl border border-border/70 bg-background/50 p-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                      <CheckCircle2
                        className="size-3.5 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      {item.number}. {item.title}
                    </span>
                    <span className="rounded bg-secondary/70 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
                      {item.spec}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                    {item.agentRule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </details>

      {/* Search */}
      <div className="sticky top-0 z-20 -mx-1 mt-6 bg-background px-1 py-3">
        <div className="flex items-center gap-3 border-b border-border/80 px-1 transition-colors focus-within:border-foreground">
          <Search
            className="size-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            inputMode="search"
            placeholder="Search sites, components, motion…"
            aria-label="Search design links"
            className="h-12 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/70 [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {isSearching ? (
          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {resultCount} {resultCount === 1 ? "result" : "results"}
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Clear search
            </button>
          </div>
        ) : null}
      </div>

      {!isSearching ? (
        <section aria-labelledby="favorites-title" className="mt-7">
          <div className="mb-3">
            <h2 id="favorites-title" className="text-sm font-semibold text-foreground">Start here</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">A short list for quick inspiration.</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {FAVORITE_RESOURCES.map((favorite) => (
              <FavoritePill key={favorite.resourceId} favorite={favorite} />
            ))}
          </div>
        </section>
      ) : null}

      {visibleGroups.length > 0 ? (
        <div className={cn("space-y-8", isSearching ? "mt-6" : "mt-10")}>
          {visibleGroups.map((group) => (
            <section
              key={group.id}
              id={`group-${group.id}`}
              aria-labelledby={`group-${group.id}-title`}
            >
              <div className="mb-1 flex items-center justify-between">
                <h2
                  id={`group-${group.id}-title`}
                  className="text-base font-semibold tracking-[-0.02em] text-foreground"
                >
                  {group.title}
                </h2>
                <span className="text-xs tabular-nums text-muted-foreground">
                  {group.resources.length} {group.resources.length === 1 ? "site" : "sites"}
                </span>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">{GROUP_INTENTS[group.id]}</p>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {group.resources.map((resource) => (
                  <ResourceRow
                    key={resource.id}
                    resource={resource}
                    tone={group.tone}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-10 text-center">
          <p className="text-sm font-medium text-foreground">No links found.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
            }}
            className="mt-2 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Clear search
          </button>
        </div>
      )}

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-border/80 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        <span>
          {DESIGN_RESOURCE_COUNT} links / X &amp; Reddit Vibe-Coding Edition /
          Nov 2026
        </span>
        <Link
          href="/privacy"
          className="underline-offset-4 hover:text-foreground hover:underline"
        >
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}

function FavoritePill({ favorite }: { favorite: Favorite }) {
  const { resource, tone } = favorite;

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors duration-200 hover:border-foreground/20 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          ICON_TONE_STYLES[tone]
        )}
      >
        <ResourceIcon resource={resource} className="size-3.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-foreground">{resource.name}</span>
        <span className="mt-0.5 text-xs leading-5 text-muted-foreground">{resource.description}</span>
      </span>
      <ArrowUpRight
        className="mt-1 size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

function ResourceRow({
  resource,
  tone,
}: {
  resource: DesignResource;
  tone: DesignGroupTone;
}) {
  const isAgentReady = isAgentFocusedResource(resource);

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${resource.domain} — ${resource.description}`}
      className="group flex min-w-0 items-start gap-3 rounded-xl border border-border/70 bg-card/40 p-3 transition-colors hover:border-foreground/20 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg",
          ICON_TONE_STYLES[tone]
        )}
      >
        <ResourceIcon resource={resource} className="size-3.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="truncate text-sm font-medium text-foreground">
            {resource.name}
          </span>
          {isAgentReady ? (
            <span className="rounded border border-border/70 bg-secondary/60 px-1.5 py-0.2 font-mono text-[9px] text-muted-foreground">
              AI
            </span>
          ) : null}
          <ArrowUpRight
            className="size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </span>
        <span className="mt-0.5 text-xs leading-5 text-muted-foreground">
          {resource.description}
        </span>
      </span>
    </a>
  );
}
