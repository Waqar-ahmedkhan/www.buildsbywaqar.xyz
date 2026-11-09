import type { Metadata } from "next";

import { DesignIndex } from "@/components/design-index";
import {
  DESIGN_RESOURCES,
  DESIGN_RESOURCE_COUNT,
} from "@/data/design-resources";

const BASE_URL = "https://www.buildsbywaqar.xyz";
const PAGE_URL = `${BASE_URL}/inspiration`;

export const metadata: Metadata = {
  title: "Design Index — UI Inspiration, Landing Pages & Components",
  description: `A curated shelf of ${DESIGN_RESOURCE_COUNT} links for UI inspiration, landing pages, product flows, React components, motion, AI prompts, and design tooling.`,
  keywords: [
    "design inspiration",
    "UI inspiration",
    "landing page inspiration",
    "React components",
    "motion design",
    "UI animations",
    "design resources",
    "frontend resources",
    "AI design prompts",
    "Waqar Ahmed",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Waqar Ahmed Portfolio",
    title: "Design Index — UI Inspiration, Landing Pages & Components",
    description: `A curated shelf of ${DESIGN_RESOURCE_COUNT} links for better interfaces: galleries, landing pages, UX flows, components, motion, and design tooling.`,
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Waqar Ahmed Design Index",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Mr___WaQAR",
    creator: "@Mr___WaQAR",
    title: "Design Index — UI Inspiration, Landing Pages & Components",
    description: `A curated shelf of ${DESIGN_RESOURCE_COUNT} links for UI inspiration, landing pages, components, motion, and design tooling.`,
    images: ["/image.png"],
  },
};

export default function InspirationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Design Index",
    description: `A curated shelf of ${DESIGN_RESOURCE_COUNT} links for UI inspiration, landing pages, components, motion, and design tooling.`,
    url: PAGE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: "Waqar Ahmed Portfolio",
      url: BASE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: DESIGN_RESOURCES.length,
      itemListElement: DESIGN_RESOURCES.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.name,
        url: resource.url,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesignIndex />
    </>
  );
}
