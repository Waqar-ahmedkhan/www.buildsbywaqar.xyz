import Link from "next/link";
import { ArrowUpRight, BookMarked } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  DESIGN_GROUP_COUNT,
  DESIGN_RESOURCE_COUNT,
} from "@/data/design-resources";

interface DesignIndexSectionProps {
  animationDelay?: string;
}

export function DesignIndexSection({
  animationDelay = "0.75s",
}: DesignIndexSectionProps) {
  return (
    <Section className="animate-fade-in" style={{ animationDelay }}>
      <SectionHeading>Design Index</SectionHeading>
      <div className="rounded-2xl border border-border/80 bg-card/80 p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <BookMarked className="size-3.5" aria-hidden="true" />
              {DESIGN_RESOURCE_COUNT} links / {DESIGN_GROUP_COUNT} shelves
            </div>
            <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
              A working shelf for better interfaces.
            </h3>
            <p className="mt-1 max-w-xl text-xs leading-6 text-muted-foreground sm:text-sm">
              Inspiration, landing pages, components, motion, and tools. One
              clean list.
            </p>
          </div>
          <Button asChild className="w-fit shrink-0">
            <Link href="/inspiration">
              Open the index
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
