"use client";

import { useEffect, useState } from "react";

import { ArrowUpRight, CalendarDaysIcon, MailIcon } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: {
    lastYear: number;
  };
  contributions: Contribution[];
}

interface GitHubContributionsSectionProps {
  animationDelay?: string;
  username: string;
  bookingUrl: string;
  email: string;
}

const LEVEL_CLASSES = [
  "bg-muted/80",
  "bg-muted-foreground/20",
  "bg-muted-foreground/35",
  "bg-muted-foreground/55",
  "bg-foreground/75",
];
const CACHE_DURATION = 60 * 60 * 1000;
let contributionCache: { username: string; data: ContributionsResponse; storedAt: number } | null = null;

const getCachedContributions = (username: string) => contributionCache?.username === username
  && Date.now() - contributionCache.storedAt < CACHE_DURATION
  ? contributionCache.data : null;

const MONTH_FORMATTER = new Intl.DateTimeFormat("en", { month: "short" });

export function GitHubContributionsSection({
  animationDelay = "0.05s", username, bookingUrl, email,
}: GitHubContributionsSectionProps) {
  const [data, setData] = useState<ContributionsResponse | null>(() => getCachedContributions(username));

  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (getCachedContributions(username)) return;
    let active = true;
    const controller = new AbortController();

    const timeout = setTimeout(() => controller.abort(), 8000);

    const loadContributions = async () => {
      try {
        const response = await fetch("/api/github-contributions", { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Contribution activity unavailable');
        }

        const contributions = (await response.json()) as ContributionsResponse;
        if (!Array.isArray(contributions.contributions) || !Number.isFinite(contributions.total?.lastYear)) {
          throw new Error('Invalid contribution activity');
        }
        if (!active) return;
        contributionCache = { username, data: contributions, storedAt: Date.now() };
        setData(contributions);
      } catch {
        if (active) setUnavailable(true);
      } finally {
        clearTimeout(timeout);
      }
    };

    loadContributions();

    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [username]);

  const totalLabel = data ? `${data.total.lastYear.toLocaleString()} contributions in the last year` : null;
  const monthLabels = data
    ? Array.from(
        new Map(
          data.contributions.map((contribution) => {
            const date = new Date(`${contribution.date}T00:00:00`);
            return [`${date.getFullYear()}-${date.getMonth()}`, MONTH_FORMATTER.format(date)];
          })
        ).values()
      ).slice(0, 12)
    : ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <Section className="animate-fade-in" style={{ animationDelay }}>
      <SectionHeading>GitHub activity</SectionHeading>
      <div className="rounded-lg border border-border/80 bg-card/80 p-3 transition-colors duration-300 hover:border-foreground/15 sm:p-4">
        <div className="overflow-x-auto rounded-md border border-border/70 bg-background/70 p-3 sm:p-4">
          {data ? (
            <div className="min-w-[660px]">
              <div className="mb-3 flex justify-between px-0.5 text-xs font-medium text-muted-foreground">
                {monthLabels.map((month, index) => (
                  <span key={`${month}-${index}`}>{month}</span>
                ))}
              </div>
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]" aria-label={totalLabel ?? undefined}>
                {data.contributions.map((contribution) => (
                  <span
                    key={contribution.date}
                    title={`${contribution.count} contributions on ${contribution.date}`}
                    className={`size-2 rounded-[2px] sm:size-2.5 ${LEVEL_CLASSES[contribution.level] ?? LEVEL_CLASSES[0]}`}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>{totalLabel}</span>
                <span className="flex items-center gap-1.5">
                  <span>Less</span>
                  {LEVEL_CLASSES.map((levelClass) => (
                    <span key={levelClass} className={`size-2 rounded-[2px] ${levelClass}`} />
                  ))}
                  <span>More</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex min-h-36 flex-col items-center justify-center gap-2 text-center">
              <p role="status" className="text-sm text-muted-foreground">
                {unavailable ? "Contribution activity is temporarily unavailable." : "Loading contribution activity…"}
              </p>
              {unavailable ? (
                <a
                  href={`https://github.com/${encodeURIComponent(username)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-1 rounded-md px-2 text-xs font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  View GitHub activity
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 px-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Interested in working together? <span className="font-medium text-foreground">Let&apos;s build something useful.</span>
          </p>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="h-9">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <CalendarDaysIcon className="size-4" aria-hidden="true" />
                Book an intro call
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="h-9">
              <a href={`mailto:${email}`}>
                <MailIcon className="size-4" aria-hidden="true" />
                Send an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
