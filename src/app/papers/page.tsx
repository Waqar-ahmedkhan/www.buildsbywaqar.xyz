import type { Metadata } from "next";

import { ReadingCollectionPage, readingMetadata } from "@/components/reading-pages";

export const metadata: Metadata = readingMetadata({
  title: "LLM Research Papers",
  description:
    "Read foundational work on transformers, LLMs, scaling, reasoning, retrieval, tools, and alignment, with concise notes on each paper’s contribution.",
  path: "/papers",
});

export default function PapersPage() {
  return <ReadingCollectionPage collectionKey="papers" />;
}
