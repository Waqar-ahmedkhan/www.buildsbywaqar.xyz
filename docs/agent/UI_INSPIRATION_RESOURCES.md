# UI & Design Inspiration Directory for AI Agents & Humans

> **Agent Instruction:** When tasked with designing, revamping, or researching UI/UX components, layouts, animations, or visual styles—and the user has not specified a reference URL—automatically select and visit the relevant site(s) below based on the target component or task before proposing or implementing designs.

---

## The 7 Essential Landing Page Sites Worth Bookmarking

These 7 curated bookmark resources represent the gold standard for full landing page architectures, interactive 3D WebGL canvasses, SaaS conversions, and dark mode interfaces:

| # | Resource | URL | Focus & Key Metrics | Best For |
|---|---|---|---|---|
| **1** | **ThreeUI** | [threeui.com](https://threeui.com) | **80+ Three.js landing page templates** with live interactive 3D WebGL canvases, custom shaders, and camera controls. *(Note: Every landing page featured in the 3D demo video originates from ThreeUI)* | 3D WebGL interactive canvas heroes, shader animations, and immersive product demos |
| **2** | **Lapa Ninja** | [lapa.ninja](https://www.lapa.ninja) | **7,300+ landing pages**, with full desktop/mobile screenshots and full-scroll videos sliced by industry and style | Massive volume of real production pages, full-length scroll captures, and mobile responsive checks |
| **3** | **Curated Design** | [curated.design](https://curated.design) | **Real live sites**, cataloged and filterable by aesthetic style, platform, or industry with direct live links | Exploring real, live code and interactive animations rather than static image mockups |
| **4** | **Landingfolio** | [landingfolio.com](https://landingfolio.com) | **Landing pages, production templates, and component teardowns** (pricing, heroes, testimonials, FAQs) | Component-by-component layout teardowns, Tailwind/Figma templates, and high-converting marketing structures |
| **5** | **SaaS Landing Page** | [saaslandingpage.com](https://saaslandingpage.com) | **Dedicated SaaS examples only**, filterable by tech stack, typography, and color palette | B2B & B2C SaaS positioning, pricing comparison grids, feature highlights, and onboarding hooks |
| **6** | **One Page Love** | [onepagelove.com](https://onepagelove.com) | **Single-page websites, launch pages, and one-page templates** | Portfolios, single-scroll product launches, event pages, and high-impact minimal sites |
| **7** | **Dark Design** | [dark.design](https://www.dark.design) | **Hand-picked dark-themed sites**, high-contrast palettes, and sleek low-light aesthetics | Dark mode UI architecture, neon/glow accents, luxury dark palettes, and developer tool landing pages |

---

## Quick Routing Matrix (Which Site to Visit for What)

| UI Task / Component Needed | Primary Resource(s) to Visit | What to Extract |
| :--- | :--- | :--- |
| **3D & WebGL Canvas Heroes** | [threeui.com](https://threeui.com), [godly.website](https://godly.website) | Three.js scene composition, camera positioning, particle effects, 2D fallback layout |
| **Full Landing Pages & Volume** | [landingfolio.com](https://landingfolio.com), [lapa.ninja](https://lapa.ninja), [curated.design](https://curated.design) | Full-page narrative flow, section rhythm, desktop vs mobile layout transitions |
| **SaaS Positioning & Pricing** | [saaslandingpage.com](https://saaslandingpage.com), [land-book.com](https://land-book.com) | Value propositions, pricing tiers, feature comparison tables, social proof placement |
| **Single-Page & Minimal Portfolios**| [onepagelove.com](https://onepagelove.com), [minimal.gallery](https://minimal.gallery) | Single-scroll pacing, condensed navigation, unified story structure |
| **Dark Mode & Sleek Contrast** | [dark.design](https://www.dark.design) | Low-light color tokens, border glows, contrast ratios, dark-mode card elevations |
| **Hero Section & Value Prop** | [supahero.io](https://supahero.io), [land-book.com](https://land-book.com) | Above-the-fold layout, headline hierarchy, visual hook, primary CTA placement |
| **Interactive Page Sections** | [supply.madebyoversight.com/sections](https://supply.madebyoversight.com/sections), [bentogrids.com](https://bentogrids.com) | Bento grid geometry, interactive feature cards, testimonial carousels |
| **Call-to-Action (CTA) Blocks** | [cta.gallery](https://cta.gallery), [landdding.com](https://landdding.com) | High-contrast conversion block layout, button framing, urgency copy |
| **Footer Section** | [footer.design](https://footer.design) | Multi-column sitemap, legal/privacy placement, back-to-top buttons, newsletter forms |
| **Award-Winning / Avant-Garde** | [godly.website](https://godly.website), [supply.madebyoversight.com](https://supply.madebyoversight.com) | Creative layouts, micro-interactions, editorial typography |
| **Motion, Scroll & Micro-Animations** | [60fps.design](https://60fps.design), [scrolltide.co](https://scrolltide.co), [motionin.design](https://motionin.design) | Spring easing curves, scroll-triggered reveals, kinetic text, hover micro-states |
| **Real App Screens & User Flows** | [mobbin.com](https://mobbin.com), [component.gallery](https://component.gallery) | SaaS onboarding modals, settings sheets, empty states, filtering tables |
| **Agent Ready React / shadcn UI** | [21st.dev](https://21st.dev), [affectui.com](https://affectui.com), [shadcnblocks.com](https://shadcnblocks.com) | Copy-paste TSX primitives, Tailwind tokenized themes, clean composable blocks |
| **Icons, Fonts & Design Assets** | [iconly.design](https://iconly.design), [fontinlogo.com](https://fontinlogo.com), [devault.design](https://devault.design) | Distinctive font pairings, SVG iconography systems, branding assets |

---

## Step-by-Step Execution Plan for Smaller Models & AI Subagents

Smaller models (e.g., Gemini Flash, GPT-4o-mini, Claude Haiku, local 8B models) often produce generic, uninspired UI ("AI Slop") when given broad prompts like *"make a modern landing page"*. 

Follow this deterministic 4-step execution plan to ensure world-class output from any model size:

### Step 1: Deterministic Query Classification
Before writing any code or HTML, map the user's intent to exactly 1 or 2 reference URLs from the table above:
- *Need 3D/WebGL canvas?* -> Route to `threeui.com`
- *Need full SaaS landing page?* -> Route to `saaslandingpage.com` + `landingfolio.com`
- *Need a one-page site or portfolio?* -> Route to `onepagelove.com`
- *Need dark mode styling?* -> Route to `dark.design`
- *Need a specific component (Hero, Bento, CTA, Footer)?* -> Route to `supahero.io`, `bentogrids.com`, `cta.gallery`, or `footer.design`

### Step 2: Structured Pattern Extraction
Extract exactly five concrete tokens from the reference before drafting the component:
1. **Layout Blueprint:** Section sequence (e.g., `Hero (Badge + H1 + CTA + 3D Canvas) -> Social Proof Marquee -> 3-Column Bento Grid -> Interactive Demo -> Pricing Grid -> Bottom CTA -> Footer`).
2. **Typography Hierarchy:** Exact font size and weight scale (e.g., H1: `text-4xl md:text-6xl font-bold tracking-tight`, Subhead: `text-lg text-muted-foreground max-w-2xl`).
3. **Color & Surface Tokens:** Surface elevations (background `bg-background`, card `bg-card/50 border border-border/40 backdrop-blur-sm`).
4. **Spacing Rhythm:** Standard vertical cadence (e.g., `py-16 md:py-24` between major sections, `gap-6 md:gap-8` in grid layouts).
5. **Interactive Hooks:** Hover transitions, spring easings, or Three.js canvas setup.

### Step 3: Zero-Slop Anti-Pattern Gate
Before generating the final code, verify against these negative constraints:
- ❌ **No generic purple/blue neon gradients** unless specifically modeled after a real reference.
- ❌ **No placeholder "Lorem ipsum" or empty cards**; generate contextual, realistic copy.
- ❌ **No unstyled default buttons**; include active states, hover lift, focus rings, and icon adornments.
- ❌ **No desktop-only hardcoded widths**; enforce mobile-first responsive classes (`w-full max-w-5xl mx-auto px-4 sm:px-6`).

### Step 4: Verification Against the 12-Point Production Checklist
Audit every newly created page or route against [`docs/agent/PRODUCTION_READINESS_CHECKLIST.md`](PRODUCTION_READINESS_CHECKLIST.md):
- [ ] 1. Custom 404 page (`src/app/not-found.tsx`)
- [ ] 2. CTA above the fold (visible on mobile & desktop without scroll)
- [ ] 3. Meta title per page (`metadata.title`)
- [ ] 4. Meta description per page (`metadata.description`, 120-160 chars)
- [ ] 5. Open Graph image (`1200x630` + `twitter:summary_large_image`)
- [ ] 6. Favicon set (SVG, ICO, Apple touch icon, manifest)
- [ ] 7. `robots.txt` (`src/app/robots.ts`)
- [ ] 8. `sitemap.xml` (`src/app/sitemap.ts`)
- [ ] 9. Alt text on every content image + `aria-hidden` on icons
- [ ] 10. Route loading state (`src/app/loading.tsx`)
- [ ] 11. Privacy policy route (`src/app/privacy/page.tsx`)
- [ ] 12. Production analytics script mounted in `src/app/layout.tsx`
