import type { Metadata } from "next";

import { ReadingCollectionPage, readingMetadata } from "@/components/reading-pages";

export const metadata: Metadata = readingMetadata({
  title: "Books",
  description:
    "Explore systems and software craft, philosophy, and Fyodor Dostoyevsky’s major novels, with concise notes on what each book offers.",
  path: "/books",
});

export default function BooksPage() {
  return <ReadingCollectionPage collectionKey="books" />;
}
