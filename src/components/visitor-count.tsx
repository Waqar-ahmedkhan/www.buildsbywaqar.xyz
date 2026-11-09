"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCount() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/analytics/visitors", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((result: { available?: boolean; visitors?: number } | null) => {
        if (result?.available && typeof result.visitors === "number") {
          setVisitors(result.visitors);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (visitors === null) return null;

  const formattedVisitors = new Intl.NumberFormat().format(visitors);

  return (
    <>
      <span className="text-border" aria-hidden="true">
        ·
      </span>
      <span
        className="inline-flex items-center gap-1.5 text-xs tabular-nums text-muted-foreground"
        aria-label={`${formattedVisitors} total website visitors`}
        title="Total website visitors"
      >
        <Eye className="size-3.5" aria-hidden="true" />
        <span aria-hidden="true">{formattedVisitors}</span>
      </span>
    </>
  );
}
