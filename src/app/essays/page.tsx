import type { Metadata } from "next";

import { ReadingCollectionPage, readingMetadata } from "@/components/reading-pages";

export const metadata: Metadata = readingMetadata({
  title: "Essays & Ideas",
  description:
    "Read Paul Graham’s essential essays on startups, work, and ideas alongside practical writing on LLM agents and production AI engineering.",
  path: "/essays",
});

export default function EssaysPage() {
  return <ReadingCollectionPage collectionKey="essays" />;
}
