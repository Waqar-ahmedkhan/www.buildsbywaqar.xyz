# 12-Point Production Website Readiness Checklist

> **Agent Instruction:** Every website or new page/route built or updated in this repository must satisfy all 12 production-readiness criteria below. Never ship a "vibe-coded" prototype missing these fundamentals. Before marking a full-site or new-page task complete, verify each item against this checklist.

---

## The 12 Production Essentials

### 1. Custom 404 Page (`src/app/not-found.tsx`)
- **Why it matters:** Default framework 404 pages break brand trust and strand users who hit dead links.
- **Implementation standard:**
  - Create a styled `src/app/not-found.tsx` matching the site's typography, theme (light/dark), and layout shell.
  - Explain clearly that the page was not found (`404`).
  - Provide immediate recovery links (e.g., "Return Home", key sections, or search/navigation).

### 2. CTA Above the Fold
- **Why it matters:** Visitors decide within seconds whether to engage; if the primary action requires scrolling, conversion drops sharply.
- **Implementation standard:**
  - Every landing page and hero section must include a visible, high-contrast primary Call-to-Action above the fold on both desktop and mobile viewports (e.g., "Book a Call", "Email Me", "View Projects").
  - Pair primary CTAs with clear action verbs and accessible focus/hover states.

### 3. Meta Title per Page
- **Why it matters:** Search engines, browser tabs, and social shares rely on unique, descriptive `<title>` tags per route.
- **Implementation standard:**
  - Root layout (`src/app/layout.tsx`) defines `title.default` and `title.template` (e.g., `"%s | Waqar Ahmed Portfolio"`).
  - Every route (`page.tsx`) exports its own specific `metadata.title` (or `generateMetadata`) tailored to that page's topic and primary keywords.

### 4. Meta Description per Page
- **Why it matters:** Drives click-through rate (CTR) in search engine results pages (SERPs) and contextualizes the page for crawlers and AI answer engines.
- **Implementation standard:**
  - Every indexable page exports a unique `metadata.description` (120–160 characters) summarizing the value of that specific page.
  - Never leave child routes falling back to a generic site-wide description when they have distinct content.

### 5. Open Graph (OG) & Twitter Card Image
- **Why it matters:** Links shared on X/Twitter, LinkedIn, Discord, Slack, WhatsApp, and iMessage look broken or untrustworthy without rich preview cards.
- **Implementation standard:**
  - Every page defines `metadata.openGraph.images` (`1200x630` recommended, with `alt`, `width`, `height`, `type`) and `metadata.twitter` (`card: "summary_large_image"`, `title`, `description`, `images`).
  - Ensure `metadataBase` is configured in `src/app/layout.tsx` so relative OG image paths resolve to absolute production URLs.

### 6. Complete Favicon Set & Web Manifest
- **Why it matters:** Browser tabs, iOS home screens, Android PWAs, and Safari pinned tabs require different icon sizes and formats.
- **Implementation standard:**
  - Provide `.svg`, `.ico`, `16x16` PNG, `32x32` PNG, `apple-touch-icon.png` (`180x180`), Android Chrome (`192x192`, `512x512` + maskable), `safari-pinned-tab.svg`, and `site.webmanifest`.
  - Include `<meta name="theme-color">` for both light and dark color schemes.

### 7. `robots.txt` (`src/app/robots.ts`)
- **Why it matters:** Directs search engine crawlers on which routes are allowed/disallowed and points them to `sitemap.xml`.
- **Implementation standard:**
  - Maintain `src/app/robots.ts` returning `MetadataRoute.Robots` with explicit `allow: "/"` rules and the canonical `sitemap` URL.
  - Disallow private, API, or internal utility routes if added in the future.

### 8. `sitemap.xml` (`src/app/sitemap.ts`)
- **Why it matters:** Ensures Google and other search engines discover and index every public route rapidly.
- **Implementation standard:**
  - Maintain `src/app/sitemap.ts` returning `MetadataRoute.Sitemap`.
  - **Rule:** Whenever a new public route or blog post is created (including `/privacy`), immediately add its canonical URL, `lastModified`, `changeFrequency`, and `priority` to `src/app/sitemap.ts`.

### 9. Descriptive Alt Text on Every Image
- **Why it matters:** Essential for screen-reader accessibility (WCAG), image SEO, and fallback context if an image fails to load.
- **Implementation standard:**
  - Every `<Image>` or `<img>` holding meaningful content must have a descriptive, human-readable `alt` attribute.
  - Purely decorative icons, background SVGs, or atmospheric blurs must explicitly set `aria-hidden="true"` (or `alt=""` for decorative images).

### 10. Loading States (`loading.tsx` / Skeletons / Pending UI)
- **Why it matters:** Prevents layout shifts (CLS), frozen-feeling navigation, and blank screens during route transitions or async data/widget fetches.
- **Implementation standard:**
  - Provide route-level `src/app/loading.tsx` (or `<Suspense>` boundaries with skeleton placeholders) and explicit loading/disabled states on interactive buttons, forms, and async widgets (e.g., GitHub contribution graphs, chat widgets).

### 11. Privacy Policy Page (`src/app/privacy/page.tsx`)
- **Why it matters:** Required by law (GDPR/CCPA) and by analytics/ad providers when collecting telemetry, cookies, or contact info; signals legitimacy to users.
- **Implementation standard:**
  - Maintain a dedicated `/privacy` route (`src/app/privacy/page.tsx`) detailing what analytics/telemetry are collected (e.g., Vercel Analytics, Google Tag Manager), how contact data is handled, and how users can reach out.
  - Link the Privacy Policy in the site footer and include it in `src/app/sitemap.ts`.

### 12. Analytics Installed & Verified
- **Why it matters:** Without analytics, you cannot measure traffic, conversions, top pages, or broken funnels.
- **Implementation standard:**
  - Keep `@vercel/analytics/next` (`<Analytics />`) and optional Google Tag Manager (`NEXT_PUBLIC_GTM_ID`) mounted in the root layout (`src/app/layout.tsx`).

---

## Current Audit of `waqarahmed.xyz` Against the 12 Points

| # | Requirement | Status in Repo | Location |
| :--- | :--- | :--- | :--- |
| 1 | **Custom 404 page** | ✅ **Present** | Implemented in `src/app/not-found.tsx`. |
| 2 | **CTA above the fold** | ✅ **Present** | `src/components/HeaderSection.tsx` has "Email me", social follow cards, and Discord CTA; `SimpleView` also has direct contact/booking links. |
| 3 | **Meta title per page** | ✅ **Present** | Configured in `src/app/layout.tsx`, `src/app/inspiration/page.tsx`, `src/app/privacy/page.tsx`, and `/blog/*` pages. |
| 4 | **Meta description per page** | ✅ **Present** | Configured in `src/app/layout.tsx`, `src/app/inspiration/page.tsx`, `src/app/privacy/page.tsx`, and `/blog/*` pages. |
| 5 | **Open Graph image** | ✅ **Present** | `/public/image.png` (`1200x630`) wired into OpenGraph & Twitter cards across routes. |
| 6 | **Favicon set** | ✅ **Present** | Full set in `/public/favicons/*` (`svg`, `ico`, `16x16`, `32x32`, `apple-touch-icon`, `android-chrome`, `mstile`, `site.webmanifest`) wired in `src/app/layout.tsx`. |
| 7 | **robots.txt** | ✅ **Present** | Implemented in `src/app/robots.ts`. |
| 8 | **sitemap.xml** | ✅ **Present** | Implemented in `src/app/sitemap.ts` (covers `/`, `/inspiration`, `/privacy`, and `/blog/*`). |
| 9 | **Alt text on every image** | ✅ **Present** | Verified across all `<Image>` tags in `HeaderSection.tsx` and `/blog/*` pages, with `aria-hidden="true"` on decorative icons. |
| 10 | **Loading states** | ✅ **Present** | Route-level skeleton in `src/app/loading.tsx` + component-level loading in `GitHubContributionsSection.tsx`. |
| 11 | **Privacy policy page** | ✅ **Present** | Implemented in `src/app/privacy/page.tsx`, linked in `DesignIndex` footer and `src/app/sitemap.ts`. |
| 12 | **Analytics installed** | ✅ **Present** | `<Analytics />` (`@vercel/analytics/next`) and GTM (`NEXT_PUBLIC_GTM_ID`) are installed in `src/app/layout.tsx`. |
