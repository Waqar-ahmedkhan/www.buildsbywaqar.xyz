import type { Metadata } from "next";

import { ReadingCollectionPage, readingMetadata } from "@/components/reading-pages";

export const metadata: Metadata = readingMetadata({
  title: "Films & Movies",
  description:
    "Films selected for thoughtful stories about language, truth, agency, choice, and what it means to live well. Each comes with a short note on its central idea.",
  path: "/movies",
});

export default function MoviesPage() {
  return <ReadingCollectionPage collectionKey="movies" />;
}
