export type DesignCategoryId =
  | "galleries"
  | "landing-pages"
  | "ux-flows"
  | "components"
  | "motion"
  | "ai-prompts"
  | "templates"
  | "toolkit"
  | "open-source";

export type DesignSignal = "staple" | "fresh" | "official" | "deep-cut";

export type DesignAccess = "Free" | "Free + Pro" | "Paid" | "Open source";

export type DesignCategoryIcon =
  | "compass"
  | "layout"
  | "route"
  | "blocks"
  | "sparkles"
  | "wand"
  | "layers"
  | "wrench"
  | "git";

export interface DesignCategory {
  id: DesignCategoryId;
  label: string;
  navLabel: string;
  description: string;
  icon: DesignCategoryIcon;
}

export interface DesignResource {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: DesignCategoryId;
  description: string;
  bestFor: string;
  tags: readonly string[];
  access: DesignAccess;
  signal: DesignSignal;
  mark: string;
  aliases?: readonly string[];
  featured?: boolean;
  stars?: string;
  language?: string;
  license?: string;
}

export const DESIGN_CATEGORIES: readonly DesignCategory[] = [
  {
    id: "galleries",
    label: "Galleries",
    navLabel: "Galleries",
    description:
      "Curated collections of real, shipped websites — for taste, direction, and trend checks.",
    icon: "compass",
  },
  {
    id: "landing-pages",
    label: "Landing pages",
    navLabel: "Landings",
    description:
      "Conversion-first pages, section order, and the details that make a launch feel finished.",
    icon: "layout",
  },
  {
    id: "ux-flows",
    label: "UX & product",
    navLabel: "UX flows",
    description:
      "Real screens and recorded flows from products people actually use.",
    icon: "route",
  },
  {
    id: "components",
    label: "Components",
    navLabel: "Components",
    description:
      "Copy-paste React, Tailwind, and CSS building blocks — from full sections to tiny details.",
    icon: "blocks",
  },
  {
    id: "motion",
    label: "Motion",
    navLabel: "Motion",
    description:
      "Animation recipes, micro-interactions, and scroll effects you can study or steal.",
    icon: "sparkles",
  },
  {
    id: "ai-prompts",
    label: "AI & prompts",
    navLabel: "AI prompts",
    description:
      "Prompt libraries that turn a blank page into a designed direction before you write code.",
    icon: "wand",
  },
  {
    id: "templates",
    label: "Templates",
    navLabel: "Templates",
    description:
      "Finished files and cloneable starts for when the brief is real and the clock is short.",
    icon: "layers",
  },
  {
    id: "toolkit",
    label: "Toolkit",
    navLabel: "Toolkit",
    description:
      "Icons, colour, type, imagery, SVG utilities, and the last-mile details that tighten a build.",
    icon: "wrench",
  },
  {
    id: "open-source",
    label: "Open-source motion stack",
    navLabel: "Open source",
    description:
      "A free brief → storyboard → motion → sound → render pipeline. Repos, not another subscription.",
    icon: "git",
  },
] as const;

export const DESIGN_RESOURCES: readonly DesignResource[] = [
  // Galleries ---------------------------------------------------------------
  {
    id: "awwwards",
    name: "Awwwards",
    url: "https://www.awwwards.com",
    domain: "awwwards.com",
    category: "galleries",
    description:
      "Award-level websites, Sites of the Day, and annual winners. The benchmark when you need to see the ceiling of web craft.",
    bestFor: "Award-level craft & trend checks",
    tags: ["Awards", "Showcase", "Trends"],
    access: "Free",
    signal: "staple",
    mark: "AW",
    featured: true,
  },
  {
    id: "recent",
    name: "Recent",
    url: "https://recent.design",
    domain: "recent.design",
    category: "galleries",
    description:
      "A tight, tasteful gallery and the new home of Godly. Strong for editorial, dark, and experimental sites that still feel usable.",
    bestFor: "High-taste visual direction",
    tags: ["Curated", "Editorial", "Dark"],
    access: "Free",
    signal: "staple",
    mark: "RE",
    aliases: ["Godly", "godly.website"],
  },
  {
    id: "curated",
    name: "Curated",
    url: "https://curated.design",
    domain: "curated.design",
    category: "galleries",
    description:
      "Live websites and landing pages, reviewed one at a time. Filter by style or industry and click straight through to the real site.",
    bestFor: "Browsing live sites, not screenshots",
    tags: ["Live sites", "Filters", "Landing pages"],
    access: "Free + Pro",
    signal: "staple",
    mark: "CU",
  },
  {
    id: "inspora",
    name: "Inspora",
    url: "https://inspora.design",
    domain: "inspora.design",
    category: "galleries",
    description:
      "Curated website, logo, app-icon, and visual-design inspiration. Useful when the identity needs a direction, not just a layout.",
    bestFor: "Logo & app-icon ideas",
    tags: ["Logos", "App icons", "Visual design"],
    access: "Free",
    signal: "fresh",
    mark: "IN",
  },
  {
    id: "landdding",
    name: "Landdding",
    url: "https://landdding.com",
    domain: "landdding.com",
    category: "galleries",
    description:
      "Community-ranked new website designs. The upvote layer surfaces what other designers are responding to right now.",
    bestFor: "Fresh, community-voted finds",
    tags: ["Community", "New", "Landing pages"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "LD",
  },
  {
    id: "collectui",
    name: "CollectUI",
    url: "https://collectui.com",
    domain: "collectui.com",
    category: "galleries",
    description:
      "A long-running daily feed of UI designs, portfolios, and interface patterns. Good for a quick scroll when you need a nudge.",
    bestFor: "Daily UI patterns",
    tags: ["Daily", "UI patterns", "Portfolios"],
    access: "Free",
    signal: "staple",
    mark: "CL",
  },
  {
    id: "siteinspire",
    name: "SiteInspire",
    url: "https://www.siteinspire.com",
    domain: "siteinspire.com",
    category: "galleries",
    description:
      "A well-edited, long-running gallery of sharp websites. Less hype, more consistently good taste.",
    bestFor: "Classic, clean web design",
    tags: ["Curated", "Classic", "Clean"],
    access: "Free",
    signal: "staple",
    mark: "SI",
  },
  {
    id: "httpster",
    name: "Httpster",
    url: "https://httpster.net",
    domain: "httpster.net",
    category: "galleries",
    description:
      "A veteran gallery of creative, award-winning sites. Useful when the usual feeds start looking the same.",
    bestFor: "Breaking out of the feed",
    tags: ["Creative", "Award-winning", "Gallery"],
    access: "Free",
    signal: "staple",
    mark: "HT",
  },
  {
    id: "minimal-gallery",
    name: "Minimal Gallery",
    url: "https://minimal.gallery",
    domain: "minimal.gallery",
    category: "galleries",
    description:
      "A focused collection of minimal websites. The fastest way to study whitespace, restraint, and type-led layouts.",
    bestFor: "Minimal direction",
    tags: ["Minimal", "Whitespace", "Typography"],
    access: "Free",
    signal: "staple",
    mark: "MG",
  },
  {
    id: "dark-design",
    name: "Dark Design",
    url: "https://www.dark.design",
    domain: "dark.design",
    category: "galleries",
    description:
      "Hand-picked dark-themed websites. Study contrast, glow, and dark-mode hierarchy without doom-scrolling a general feed.",
    bestFor: "Dark-mode interfaces",
    tags: ["Dark mode", "Contrast", "Curated"],
    access: "Free",
    signal: "staple",
    mark: "DD",
  },
  {
    id: "the-internet-designs",
    name: "The Internet Designs",
    url: "https://theinternetdesigns.com",
    domain: "theinternetdesigns.com",
    category: "galleries",
    description:
      "UI inspiration curated from X and Pinterest: landing pages, interfaces, motion, branding, logos, and illustration.",
    bestFor: "Social-first inspiration",
    tags: ["X", "Pinterest", "Curated"],
    access: "Free",
    signal: "fresh",
    mark: "ID",
  },
  {
    id: "godly",
    name: "Godly",
    url: "https://godly.website",
    domain: "godly.website",
    category: "galleries",
    description:
      "Astronomically good web design inspiration. The #1 X and Reddit vibe-coding reference for kinetic typography, editorial grids, and interactive craft.",
    bestFor: "Award-winning interactive websites",
    tags: ["Awards", "Interactive", "Vibe coding"],
    access: "Free",
    signal: "staple",
    mark: "GD",
    featured: true,
  },
  {
    id: "on-design",
    name: "On.design",
    url: "https://on.design",
    domain: "on.design",
    category: "galleries",
    description:
      "Curated design community and visual showcase where top product and brand designers share live work.",
    bestFor: "Design community & live work",
    tags: ["Community", "Showcase", "Curated"],
    access: "Free",
    signal: "fresh",
    mark: "ON",
  },
  {
    id: "posts-design",
    name: "Posts.design",
    url: "https://posts.design",
    domain: "posts.design",
    category: "galleries",
    description:
      "Curated social media, launch announcements, and brand marketing graphics from top tech companies.",
    bestFor: "Big-brand social & OG visuals",
    tags: ["Social", "Branding", "OG images"],
    access: "Free",
    signal: "fresh",
    mark: "PD",
  },

  // Landing pages -----------------------------------------------------------
  {
    id: "threeui",
    name: "ThreeUI",
    url: "https://threeui.com",
    domain: "threeui.com",
    category: "landing-pages",
    description:
      "80+ Three.js landing page templates with live interactive 3D WebGL canvases, custom shaders, and camera controls. (Every landing page featured in the 3D showcase video is from ThreeUI).",
    bestFor: "3D & WebGL interactive landing pages",
    tags: ["Three.js", "WebGL", "3D", "Templates", "Canvas", "Interactive"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "3U",
    featured: true,
  },
  {
    id: "landingfolio",
    name: "Landingfolio",
    url: "https://landingfolio.com",
    domain: "landingfolio.com",
    category: "landing-pages",
    description:
      "Curated landing page inspiration, production templates, and component breakdowns (pricing, heroes, testimonials, FAQs) filterable by desktop and mobile.",
    bestFor: "Landing pages, templates & component breakdowns",
    tags: ["Landing pages", "Templates", "Components", "Tailwind", "Figma"],
    access: "Free + Pro",
    signal: "staple",
    mark: "LF",
    featured: true,
  },
  {
    id: "supahero",
    name: "Supahero",
    url: "https://supahero.io",
    domain: "supahero.io",
    category: "landing-pages",
    description:
      "Curated gallery of high-converting website hero sections and above-the-fold layouts. Essential when anchoring Claude Code on the first screen.",
    bestFor: "Hero section layouts & CTAs",
    tags: ["Heroes", "Above the fold", "Landing pages"],
    access: "Free",
    signal: "fresh",
    mark: "SH",
    featured: true,
  },
  {
    id: "bentogrids",
    name: "BentoGrids",
    url: "https://bentogrids.com",
    domain: "bentogrids.com",
    category: "landing-pages",
    description:
      "Curated collection of Apple-style bento grid layouts for feature showcases, metrics, and modular product storytelling.",
    bestFor: "Bento feature grids",
    tags: ["Bento", "Feature grids", "Layouts"],
    access: "Free",
    signal: "staple",
    mark: "BG",
  },
  {
    id: "onepagelove",
    name: "One Page Love",
    url: "https://onepagelove.com",
    domain: "onepagelove.com",
    category: "landing-pages",
    description:
      "Single-page website designs, templates, and launch pages. Ideal when your entire product or portfolio lives on one scroll.",
    bestFor: "Single-page websites",
    tags: ["One page", "Portfolios", "Launches"],
    access: "Free",
    signal: "staple",
    mark: "OP",
  },
  {
    id: "land-book",
    name: "Land-book",
    url: "https://land-book.com",
    domain: "land-book.com",
    category: "landing-pages",
    description:
      "Hand-picked landing pages updated daily. The default first stop for section order, copy hierarchy, and conversion-focused layout.",
    bestFor: "Landing page structure",
    tags: ["Landing pages", "Daily", "Curated"],
    access: "Free + Pro",
    signal: "staple",
    mark: "LB",
    featured: true,
  },
  {
    id: "lapa-ninja",
    name: "Lapa Ninja",
    url: "https://www.lapa.ninja",
    domain: "lapa.ninja",
    category: "landing-pages",
    description:
      "7,300+ landing page examples with screenshots and videos, sliced by industry and style. Great when you need volume, fast.",
    bestFor: "Volume of real examples",
    tags: ["Landing pages", "Screenshots", "Library"],
    access: "Free",
    signal: "staple",
    mark: "LN",
  },
  {
    id: "saas-landing-page",
    name: "SaaS Landing Page",
    url: "https://saaslandingpage.com",
    domain: "saaslandingpage.com",
    category: "landing-pages",
    description:
      "SaaS-specific landing page gallery. Filter by tech, font, or colour when you want a reference that matches your stack.",
    bestFor: "SaaS landing pages",
    tags: ["SaaS", "Filters", "Landing pages"],
    access: "Free",
    signal: "staple",
    mark: "SL",
  },
  {
    id: "footer",
    name: "Footer",
    url: "https://www.footer.design",
    domain: "footer.design",
    category: "landing-pages",
    description:
      "The only footer gallery on earth. Steal a footer structure without scrolling through a hundred full pages.",
    bestFor: "Footer patterns",
    tags: ["Footers", "Patterns", "Curated"],
    access: "Free",
    signal: "deep-cut",
    mark: "FT",
  },
  {
    id: "cta-gallery",
    name: "CTA.gallery",
    url: "https://www.cta.gallery",
    domain: "cta.gallery",
    category: "landing-pages",
    description:
      "A focused gallery of call-to-action sections. Useful when the page looks fine but nobody clicks.",
    bestFor: "CTA patterns",
    tags: ["CTA", "Conversion", "Gallery"],
    access: "Free",
    signal: "fresh",
    mark: "CT",
  },

  // UX & product ------------------------------------------------------------
  {
    id: "mobbin",
    name: "Mobbin",
    url: "https://mobbin.com",
    domain: "mobbin.com",
    category: "ux-flows",
    description:
      "600,000+ searchable screenshots from mobile and web apps. The fastest way to answer 'how do the best apps handle this?'",
    bestFor: "Real product patterns",
    tags: ["Screens", "Flows", "Mobile + web"],
    access: "Free + Pro",
    signal: "staple",
    mark: "MB",
    featured: true,
  },
  {
    id: "pageflows",
    name: "Page Flows",
    url: "https://pageflows.com",
    domain: "pageflows.com",
    category: "ux-flows",
    description:
      "100,000+ recorded user flows from Airbnb, Uber, Netflix, and more. Watch the interaction, not just the screenshot.",
    bestFor: "End-to-end UX flows",
    tags: ["User flows", "Recordings", "UX research"],
    access: "Paid",
    signal: "staple",
    mark: "PF",
    featured: true,
    aliases: ["Page Collective"],
  },
  {
    id: "refero",
    name: "Refero",
    url: "https://refero.design",
    domain: "refero.design",
    category: "ux-flows",
    description:
      "Tens of thousands of web and iOS screens with advanced search. Great when you already know the pattern you need to study.",
    bestFor: "Targeted UI references",
    tags: ["Screens", "iOS", "Search"],
    access: "Free + Pro",
    signal: "staple",
    mark: "RF",
  },
  {
    id: "sixtyfps",
    name: "60fps",
    url: "https://60fps.design",
    domain: "60fps.design",
    category: "ux-flows",
    description:
      "Curated UI animation and interaction details from the best iOS and web apps. Study timing and easing, not just the final frame.",
    bestFor: "Interaction & easing detail",
    tags: ["Animation", "Mobile", "Micro-interactions"],
    access: "Free",
    signal: "staple",
    mark: "60",
  },
  {
    id: "component-gallery",
    name: "Component Gallery",
    url: "https://component.gallery",
    domain: "component.gallery",
    category: "ux-flows",
    description:
      "Real-world UI components cross-referenced across 90+ production design systems (Stripe, GitHub, Shopify, Linear).",
    bestFor: "Design system component specs",
    tags: ["Design systems", "Components", "UX research"],
    access: "Free",
    signal: "staple",
    mark: "CG",
  },
  {
    id: "appshot",
    name: "AppShot Gallery",
    url: "https://appshot.gallery",
    domain: "appshot.gallery",
    category: "ux-flows",
    description:
      "Curated database of high-craft mobile and web application screens for vibe coders needing real production UI anchors.",
    bestFor: "Clean app screen references",
    tags: ["Screens", "Apps", "Vibe coding"],
    access: "Free",
    signal: "fresh",
    mark: "AS",
  },

  // Components --------------------------------------------------------------
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    domain: "ui.shadcn.com",
    category: "components",
    description:
      "The foundational accessible React + Tailwind primitive system that Claude Code, Cursor, and v0 understand natively.",
    bestFor: "Claude Code & Cursor base primitives",
    tags: ["React", "Tailwind", "shadcn", "Claude Code"],
    access: "Open source",
    signal: "official",
    mark: "SH",
    featured: true,
  },
  {
    id: "shadcnblocks",
    name: "Shadcnblocks",
    url: "https://www.shadcnblocks.com",
    domain: "shadcnblocks.com",
    category: "components",
    description:
      "600+ clean, copy-paste shadcn/ui sections and full blocks designed for fast Next.js and Claude Code assembly.",
    bestFor: "Ready-made shadcn page sections",
    tags: ["shadcn", "Blocks", "Next.js", "Claude Code"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "SB",
  },
  {
    id: "kokonutui",
    name: "Kokonut UI",
    url: "https://kokonutui.com",
    domain: "kokonutui.com",
    category: "components",
    description:
      "Interactive Tailwind CSS and Motion components built for modern AI apps, toolbars, and agentic interfaces.",
    bestFor: "AI chat & toolbar components",
    tags: ["React", "Tailwind", "AI UI", "Claude Code"],
    access: "Open source",
    signal: "fresh",
    mark: "KK",
  },
  {
    id: "cult-ui",
    name: "Cult UI",
    url: "https://www.cult-ui.com",
    domain: "cult-ui.com",
    category: "components",
    description:
      "High-taste shadcn-compatible components, expandable cards, and AI-focused primitives curated for vibe coding.",
    bestFor: "Tasteful shadcn primitives",
    tags: ["shadcn", "React", "Vibe coding"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "CU",
  },
  {
    id: "21st",
    name: "21st",
    url: "https://21st.dev",
    domain: "21st.dev",
    category: "components",
    description:
      "12,000+ React/Tailwind components, templates, and shadcn themes. Preview live, install with one command, and hand it to your AI agent.",
    bestFor: "shadcn-style components",
    tags: ["React", "Tailwind", "shadcn"],
    access: "Free + Pro",
    signal: "staple",
    mark: "21",
    featured: true,
  },
  {
    id: "aceternity",
    name: "Aceternity UI",
    url: "https://ui.aceternity.com",
    domain: "ui.aceternity.com",
    category: "components",
    description:
      "200+ copy-paste React/Tailwind components, blocks, and templates with a strong motion bias.",
    bestFor: "Dramatic landing sections",
    tags: ["React", "Tailwind", "Motion"],
    access: "Free + Pro",
    signal: "staple",
    mark: "AC",
  },
  {
    id: "magic-ui",
    name: "Magic UI",
    url: "https://magicui.design",
    domain: "magicui.design",
    category: "components",
    description:
      "Polished landing-page components and templates. The fastest way to add a better hero, marquee, or animated grid.",
    bestFor: "Landing page polish",
    tags: ["React", "Landing pages", "Templates"],
    access: "Free + Pro",
    signal: "staple",
    mark: "MU",
  },
  {
    id: "uiverse",
    name: "Uiverse",
    url: "https://uiverse.io",
    domain: "uiverse.io",
    category: "components",
    description:
      "The largest open-source library of CSS/Tailwind UI elements. Perfect for buttons, loaders, checkboxes, and tiny details.",
    bestFor: "Micro UI elements",
    tags: ["CSS", "Tailwind", "Open source"],
    access: "Open source",
    signal: "staple",
    mark: "UV",
  },
  {
    id: "affectui",
    name: "affectUI",
    url: "https://affectui.com",
    domain: "affectui.com",
    category: "components",
    description:
      "142 agent-ready React components, screens, blocks, and motion effects for AI products. One .tsx file each, built for Claude/Cursor/v0 handoff.",
    bestFor: "AI product interfaces",
    tags: ["React", "AI products", "MCP"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "aU",
  },
  {
    id: "bencho",
    name: "Bencho",
    url: "https://bencho.dev",
    domain: "bencho.dev",
    category: "components",
    description:
      "A library of interactive React components and micro-interactions you can tweak live before taking the code.",
    bestFor: "Testing interactions live",
    tags: ["React", "Micro-interactions", "Live demos"],
    access: "Free",
    signal: "fresh",
    mark: "BE",
  },

  // Motion ------------------------------------------------------------------
  {
    id: "motion-examples",
    name: "Motion Examples",
    url: "https://motion.dev/examples",
    domain: "motion.dev/examples",
    category: "motion",
    description:
      "Production-ready Motion snippets for React, JavaScript, and Vue. Copy-paste recipes for scroll, drag, layout, and gestures.",
    bestFor: "Official Motion recipes",
    tags: ["React", "Vue", "Snippets"],
    access: "Open source",
    signal: "official",
    mark: "MO",
    featured: true,
  },
  {
    id: "react-bits",
    name: "React Bits",
    url: "https://reactbits.dev",
    domain: "reactbits.dev",
    category: "motion",
    description:
      "Free, open-source animated React components: text effects, backgrounds, cards, and micro-interactions. Copy the source and own it.",
    bestFor: "Animated text & backgrounds",
    tags: ["React", "Open source", "Animation"],
    access: "Open source",
    signal: "staple",
    mark: "RB",
  },
  {
    id: "originkit",
    name: "Originkit",
    url: "https://originkit.dev",
    domain: "originkit.dev",
    category: "motion",
    description:
      "A free animated component library with copy-paste code, Framer support, and an MCP connection for AI tools.",
    bestFor: "Animated components + Framer",
    tags: ["Framer", "MCP", "Animation"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "OK",
  },
  {
    id: "motion-primitives",
    name: "Motion Primitives",
    url: "https://motion-primitives.com",
    domain: "motion-primitives.com",
    category: "motion",
    description:
      "Open-source animated UI primitives for React, Next.js, and Tailwind. Small, composable pieces rather than a giant library.",
    bestFor: "Composable motion",
    tags: ["React", "Next.js", "Open source"],
    access: "Open source",
    signal: "staple",
    mark: "MP",
  },
  {
    id: "hover-dev",
    name: "Hover.dev",
    url: "https://www.hover.dev",
    domain: "hover.dev",
    category: "motion",
    description:
      "Prebuilt animated React/Tailwind components and templates. Good when you want the interaction finished, not just started.",
    bestFor: "Production-ready interactions",
    tags: ["React", "Tailwind", "Templates"],
    access: "Free + Pro",
    signal: "staple",
    mark: "HV",
  },
  {
    id: "motionin",
    name: "MotionIn",
    url: "https://motionin.design",
    domain: "motionin.design",
    category: "motion",
    description:
      "Premium physics-based, cursor-responsive web sections. Copy the prompt, paste it into your AI model, and ship.",
    bestFor: "Cursor & physics sections",
    tags: ["Motion", "Prompts", "Sections"],
    access: "Paid",
    signal: "fresh",
    mark: "MI",
  },

  // AI & prompts ------------------------------------------------------------
  {
    id: "motionsites",
    name: "MotionSites",
    url: "https://motionsites.ai",
    domain: "motionsites.ai",
    category: "ai-prompts",
    description:
      "Website prompts, backgrounds, and motion sections built for AI tools. Paste a prompt into Claude or Cursor and start from a designed direction.",
    bestFor: "Prompt-to-site starting points",
    tags: ["Prompts", "Claude", "Motion"],
    access: "Paid",
    signal: "fresh",
    mark: "MS",
  },
  {
    id: "scrolltide",
    name: "Scrolltide",
    url: "https://www.scrolltide.co",
    domain: "scrolltide.co",
    category: "ai-prompts",
    description:
      "Scroll-driven website templates and AI prompts. Good when the site needs to move, not just sit there.",
    bestFor: "Scroll storytelling",
    tags: ["Scroll", "Prompts", "Templates"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "ST",
  },
  {
    id: "sceneai",
    name: "SceneAI",
    url: "https://sceneai.art",
    domain: "sceneai.art",
    category: "ai-prompts",
    description:
      "AI prompt library for hero sections, animated backgrounds, and production-ready gradients. Copy, customise, launch.",
    bestFor: "Hero & background prompts",
    tags: ["Prompts", "Heroes", "Gradients"],
    access: "Paid",
    signal: "fresh",
    mark: "SA",
  },
  {
    id: "oversight-supply",
    name: "Oversight Supply",
    url: "https://supply.madebyoversight.com",
    domain: "supply.madebyoversight.com",
    category: "ai-prompts",
    description:
      "192+ site references and premium Webflow/Framer templates from Oversight. A masterclass in modern, motion-led layout.",
    bestFor: "Site references & templates",
    tags: ["References", "Templates", "Webflow"],
    access: "Free + Pro",
    signal: "deep-cut",
    mark: "OS",
  },
  {
    id: "oversight-sections",
    name: "Oversight Sections",
    url: "https://supply.madebyoversight.com/sections",
    domain: "supply.madebyoversight.com/sections",
    category: "ai-prompts",
    description:
      "58+ interactive sections you can preview live and copy into Claude Code, Cursor, or v0. Free sections available.",
    bestFor: "Section-level inspiration",
    tags: ["Sections", "AI-ready", "Copy"],
    access: "Free + Pro",
    signal: "deep-cut",
    mark: "OC",
  },
  {
    id: "oversight-videos",
    name: "Oversight Video Skills",
    url: "https://supply.madebyoversight.com/videos",
    domain: "supply.madebyoversight.com/videos",
    category: "ai-prompts",
    description:
      "AI explainer video kits packaged as Claude skills: references, scripts, and step-by-step instructions.",
    bestFor: "Product explainer videos",
    tags: ["Video", "Claude", "Skills"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "OV",
  },
  {
    id: "onepromptdesign",
    name: "One Prompt Design",
    url: "https://onepromptdesign.com",
    domain: "onepromptdesign.com",
    category: "ai-prompts",
    description:
      "Curated single-shot AI design prompts engineered for Claude Code, Cursor, and v0 to generate non-generic UI.",
    bestFor: "Single-prompt UI generation",
    tags: ["Prompts", "Claude Code", "Vibe coding"],
    access: "Free",
    signal: "fresh",
    mark: "1P",
  },
  {
    id: "modulify",
    name: "Modulify AI",
    url: "https://modulify.ai",
    domain: "modulify.ai",
    category: "ai-prompts",
    description:
      "AI-powered website builder and modular design system generator for rapid architecture, wireframes, and section layouts.",
    bestFor: "AI website builder & wireframes",
    tags: ["AI builder", "Wireframes", "Design systems"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "MD",
  },

  // Templates ---------------------------------------------------------------
  {
    id: "modulify-templates",
    name: "Modulify Templates",
    url: "https://modulify.ai/templates",
    domain: "modulify.ai/templates",
    category: "templates",
    description:
      "100+ production-ready website templates built with Modulify. Preview any design and clone it into your dashboard.",
    bestFor: "Free starting points",
    tags: ["Templates", "AI builder", "Free"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "MT",
  },
  {
    id: "wedoflow",
    name: "WeDoFlow",
    url: "https://www.wedoflow.com",
    domain: "wedoflow.com",
    category: "templates",
    description:
      "1,300+ unique pages across premium Webflow templates for portfolios, agencies, SaaS, and business sites.",
    bestFor: "Webflow templates",
    tags: ["Webflow", "Templates", "Premium"],
    access: "Paid",
    signal: "fresh",
    mark: "WF",
  },
  {
    id: "wonderlist",
    name: "Wonderlist",
    url: "https://wonderlist.design",
    domain: "wonderlist.design",
    category: "templates",
    description:
      "127 premium website designs in Figma, covering SaaS, agency, portfolio, and consulting.",
    bestFor: "Figma website files",
    tags: ["Figma", "Templates", "Premium"],
    access: "Paid",
    signal: "fresh",
    mark: "WL",
  },

  // Toolkit -----------------------------------------------------------------
  {
    id: "tweakcn",
    name: "tweakcn",
    url: "https://tweakcn.com",
    domain: "tweakcn.com",
    category: "toolkit",
    description:
      "Visual theme editor and CSS token generator for shadcn/ui. Essential for giving Claude Code a distinct color and radius system.",
    bestFor: "shadcn/ui themes for Claude Code",
    tags: ["Colour", "shadcn", "Claude Code", "Themes"],
    access: "Free",
    signal: "fresh",
    mark: "TW",
    featured: true,
  },
  {
    id: "iconly",
    name: "Iconly",
    url: "https://iconly.design",
    domain: "iconly.design",
    category: "toolkit",
    description:
      "Curated, precision-crafted vector icon library across multiple weights and styles for modern web and mobile interfaces.",
    bestFor: "Premium vector icons",
    tags: ["Icons", "SVG", "UI kit"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "IC",
  },
  {
    id: "devault",
    name: "Devault",
    url: "https://devault.design",
    domain: "devault.design",
    category: "toolkit",
    description:
      "Comprehensive vault of curated design resources, typography foundries, mockups, and frontend utilities.",
    bestFor: "All-in-one design resource vault",
    tags: ["Vault", "Resources", "Tooling"],
    access: "Free",
    signal: "staple",
    mark: "DV",
  },
  {
    id: "sent-dm",
    name: "Sent.dm",
    url: "https://sent.dm",
    domain: "sent.dm",
    category: "toolkit",
    description:
      "Developer-first messaging and low-cost SMS API for shipping real notifications, OTPs, and alerts in vibe-coded apps.",
    bestFor: "SMS & messaging API",
    tags: ["SMS", "API", "Growth"],
    access: "Free + Pro",
    signal: "fresh",
    mark: "SD",
  },
  {
    id: "lucide",
    name: "Lucide",
    url: "https://lucide.dev",
    domain: "lucide.dev",
    category: "toolkit",
    description:
      "Beautiful, consistent open-source icons. The fastest upgrade from emoji and mismatched icon sets.",
    bestFor: "Icon consistency",
    tags: ["Icons", "Open source", "SVG"],
    access: "Open source",
    signal: "staple",
    mark: "LU",
  },
  {
    id: "realtime-colors",
    name: "Realtime Colors",
    url: "https://www.realtimecolors.com",
    domain: "realtimecolors.com",
    category: "toolkit",
    description:
      "Try palettes and type pairings on a real layout before committing. No more guessing how hex codes will feel in context.",
    bestFor: "Palette testing",
    tags: ["Colour", "Typography", "Preview"],
    access: "Free",
    signal: "staple",
    mark: "RC",
  },
  {
    id: "fontjoy",
    name: "Fontjoy",
    url: "https://fontjoy.com",
    domain: "fontjoy.com",
    category: "toolkit",
    description:
      "One-click font pairings with a slider for contrast. Good for escaping the same three safe combinations.",
    bestFor: "Font pairing",
    tags: ["Typography", "Fonts", "Pairing"],
    access: "Free",
    signal: "staple",
    mark: "FJ",
  },
  {
    id: "fonts-in-logo",
    name: "Fonts In Logo",
    url: "https://www.fontinlogo.com",
    domain: "fontinlogo.com",
    category: "toolkit",
    description:
      "Find the typefaces behind famous brand logos. Useful for reverse-engineering a brand's typographic voice.",
    bestFor: "Brand type research",
    tags: ["Typography", "Branding", "Research"],
    access: "Free",
    signal: "deep-cut",
    mark: "FL",
  },
  {
    id: "haikei",
    name: "Haikei",
    url: "https://haikei.app",
    domain: "haikei.app",
    category: "toolkit",
    description:
      "Generate unique SVG backgrounds, blobs, waves, and gradients. Export clean assets without opening a design tool.",
    bestFor: "SVG backgrounds",
    tags: ["SVG", "Backgrounds", "Generators"],
    access: "Free",
    signal: "staple",
    mark: "HK",
  },
  {
    id: "undraw",
    name: "unDraw",
    url: "https://undraw.co",
    domain: "undraw.co",
    category: "toolkit",
    description:
      "Open-source illustrations you can recolor to match your brand. A clean alternative to generic AI art.",
    bestFor: "Illustrations",
    tags: ["Illustrations", "Open source", "SVG"],
    access: "Open source",
    signal: "staple",
    mark: "UD",
  },
  {
    id: "lottiefiles",
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    domain: "lottiefiles.com",
    category: "toolkit",
    description:
      "Tiny, production-friendly animations with a large free library. Great for empty states, success states, and micro-delight.",
    bestFor: "Lottie animations",
    tags: ["Lottie", "Animation", "Assets"],
    access: "Free + Pro",
    signal: "staple",
    mark: "LF",
  },
  {
    id: "lummi",
    name: "Lummi",
    url: "https://www.lummi.ai",
    domain: "lummi.ai",
    category: "toolkit",
    description:
      "Free AI stock photos, illustrations, and 3D. Better than a generic stock photo for atmospheric, editorial imagery.",
    bestFor: "AI imagery",
    tags: ["Images", "AI", "3D"],
    access: "Free",
    signal: "staple",
    mark: "LM",
  },
  {
    id: "domain-growth",
    name: "Domain Growth",
    url: "https://domaingrowth.co",
    domain: "domaingrowth.co",
    category: "toolkit",
    description:
      "Contextual, permanent links from 10 owned design and no-code sites. Distribution and domain authority, not design inspiration.",
    bestFor: "Launch distribution",
    tags: ["SEO", "Backlinks", "Growth"],
    access: "Paid",
    signal: "deep-cut",
    mark: "DG",
  },

  // Open-source motion stack ------------------------------------------------
  {
    id: "remotion",
    name: "Remotion",
    url: "https://github.com/remotion-dev/remotion",
    domain: "github.com/remotion-dev/remotion",
    category: "open-source",
    description:
      "Make videos programmatically with React. The backbone of a code-first motion pipeline.",
    bestFor: "React video",
    tags: ["React", "Video", "TypeScript"],
    access: "Open source",
    signal: "staple",
    mark: "RE",
    stars: "71k",
    language: "TypeScript",
    license: "Remotion License",
  },
  {
    id: "storyboarder",
    name: "Storyboarder",
    url: "https://github.com/wonderunit/storyboarder",
    domain: "github.com/wonderunit/storyboarder",
    category: "open-source",
    description:
      "Visualise a story as fast as you can draw stick figures. Plan shots before touching motion.",
    bestFor: "Storyboards",
    tags: ["Storyboard", "Pre-production", "Desktop"],
    access: "Open source",
    signal: "deep-cut",
    mark: "SB",
    stars: "3.9k",
    language: "JavaScript",
  },
  {
    id: "animejs",
    name: "Anime.js",
    url: "https://github.com/juliangarnier/anime",
    domain: "github.com/juliangarnier/anime",
    category: "open-source",
    description:
      "A lightweight JavaScript animation engine with timelines, easing, and precise control.",
    bestFor: "Timelines & easing",
    tags: ["JavaScript", "Animation", "Timelines"],
    access: "Open source",
    signal: "staple",
    mark: "AN",
    stars: "74k",
    language: "JavaScript",
    license: "MIT",
  },
  {
    id: "flubber",
    name: "Flubber",
    url: "https://github.com/veltman/flubber",
    domain: "github.com/veltman/flubber",
    category: "open-source",
    description:
      "Tools for smoother shape animations. Morph one SVG path into another without the jank.",
    bestFor: "Shape morphing",
    tags: ["SVG", "Morphing", "JavaScript"],
    access: "Open source",
    signal: "deep-cut",
    mark: "FL",
    stars: "7k",
    language: "JavaScript",
    license: "MIT",
  },
  {
    id: "pixelorama",
    name: "Pixelorama",
    url: "https://github.com/Orama-Interactive/Pixelorama",
    domain: "github.com/Orama-Interactive/Pixelorama",
    category: "open-source",
    description:
      "Open-source pixel-art multitool for sprites, tiles, and animation. Runs on desktop and in the browser.",
    bestFor: "Pixel art",
    tags: ["Pixel art", "Sprites", "Animation"],
    access: "Open source",
    signal: "deep-cut",
    mark: "PX",
    stars: "11k",
    language: "GDScript",
    license: "MIT",
  },
  {
    id: "threejs",
    name: "Three.js",
    url: "https://github.com/mrdoob/three.js",
    domain: "github.com/mrdoob/three.js",
    category: "open-source",
    description:
      "The default JavaScript 3D library for scenes, lighting, cameras, and WebGL experiments.",
    bestFor: "3D scenes",
    tags: ["3D", "WebGL", "JavaScript"],
    access: "Open source",
    signal: "staple",
    mark: "3D",
    stars: "118k",
    language: "JavaScript",
    license: "MIT",
  },
  {
    id: "playcanvas",
    name: "PlayCanvas",
    url: "https://github.com/playcanvas/engine",
    domain: "github.com/playcanvas/engine",
    category: "open-source",
    description:
      "Powerful web graphics runtime built on WebGL, WebGPU, WebXR, and glTF.",
    bestFor: "Real-time 3D",
    tags: ["WebGL", "WebGPU", "3D"],
    access: "Open source",
    signal: "deep-cut",
    mark: "PC",
    stars: "17k",
    language: "JavaScript",
    license: "MIT",
  },
  {
    id: "cannon-es",
    name: "cannon-es",
    url: "https://github.com/pmndrs/cannon-es",
    domain: "github.com/pmndrs/cannon-es",
    category: "open-source",
    description:
      "A lightweight 3D physics engine for collisions, forces, and interactive scenes.",
    bestFor: "3D physics",
    tags: ["Physics", "3D", "TypeScript"],
    access: "Open source",
    signal: "deep-cut",
    mark: "CE",
    stars: "2.1k",
    language: "TypeScript",
    license: "MIT",
  },
  {
    id: "sverchok",
    name: "Sverchok",
    url: "https://github.com/nortikin/sverchok",
    domain: "github.com/nortikin/sverchok",
    category: "open-source",
    description:
      "Procedural geometry generation inside Blender. Build repeatable forms with a node graph.",
    bestFor: "Procedural geometry",
    tags: ["Blender", "Procedural", "Python"],
    access: "Open source",
    signal: "deep-cut",
    mark: "SV",
    stars: "2.6k",
    language: "Python",
    license: "GPL-3.0",
  },
  {
    id: "effekseer",
    name: "Effekseer",
    url: "https://github.com/effekseer/Effekseer",
    domain: "github.com/effekseer/Effekseer",
    category: "open-source",
    description:
      "Create stylised particle effects and export them into real-time engines.",
    bestFor: "Particles",
    tags: ["Particles", "VFX", "C"],
    access: "Open source",
    signal: "deep-cut",
    mark: "EF",
    stars: "2k",
    language: "C",
    license: "MIT",
  },
  {
    id: "twigl",
    name: "twigl",
    url: "https://github.com/doxas/twigl",
    domain: "github.com/doxas/twigl",
    category: "open-source",
    description:
      "An online editor for tiny shaders, with GIF export, sound shaders, and live coding.",
    bestFor: "Shader loops",
    tags: ["Shaders", "GIF", "Live coding"],
    access: "Open source",
    signal: "deep-cut",
    mark: "TW",
    stars: "1.1k",
    language: "JavaScript",
    license: "MIT",
  },
  {
    id: "bark",
    name: "Bark",
    url: "https://github.com/suno-ai/bark",
    domain: "github.com/suno-ai/bark",
    category: "open-source",
    description:
      "Text-prompted generative audio model for voices, music, and sound effects.",
    bestFor: "AI voices",
    tags: ["Audio", "AI", "Voice"],
    access: "Open source",
    signal: "deep-cut",
    mark: "BK",
    stars: "39k",
    language: "Jupyter Notebook",
    license: "MIT",
  },
  {
    id: "pedalboard",
    name: "Pedalboard",
    url: "https://github.com/spotify/pedalboard",
    domain: "github.com/spotify/pedalboard",
    category: "open-source",
    description:
      "A Python library for audio effects: reverb, compression, EQ, and mastering.",
    bestFor: "Audio effects",
    tags: ["Audio", "Python", "Effects"],
    access: "Open source",
    signal: "deep-cut",
    mark: "PB",
    stars: "6.5k",
    language: "C++",
    license: "GPL-3.0",
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    url: "https://github.com/obsproject/obs-studio",
    domain: "github.com/obsproject/obs-studio",
    category: "open-source",
    description:
      "Free and open-source software for screen recording and live streaming.",
    bestFor: "Screen capture",
    tags: ["Recording", "Streaming", "C"],
    access: "Open source",
    signal: "staple",
    mark: "OB",
    stars: "79k",
    language: "C",
    license: "GPL-2.0",
  },
  {
    id: "shotcut",
    name: "Shotcut",
    url: "https://github.com/mltframework/shotcut",
    domain: "github.com/mltframework/shotcut",
    category: "open-source",
    description:
      "A cross-platform, open-source video editor with a proper timeline and filters.",
    bestFor: "Video editing",
    tags: ["Video", "Editor", "C++"],
    access: "Open source",
    signal: "deep-cut",
    mark: "SC",
    stars: "16k",
    language: "C++",
    license: "GPL-3.0",
  },
  {
    id: "ffmpeg",
    name: "FFmpeg",
    url: "https://github.com/FFmpeg/FFmpeg",
    domain: "github.com/FFmpeg/FFmpeg",
    category: "open-source",
    description:
      "Encode, compress, convert, and deliver the final video. The last command in the pipeline.",
    bestFor: "Encoding & delivery",
    tags: ["Video", "Encoding", "CLI"],
    access: "Open source",
    signal: "staple",
    mark: "FF",
    stars: "67k",
    language: "C",
    license: "LGPL / GPL",
  },
] as const;

export type DesignGroupTone =
  | "amber"
  | "sky"
  | "violet"
  | "emerald"
  | "rose";

export interface DesignGroup {
  id: string;
  title: string;
  categories: readonly DesignCategoryId[];
  tone: DesignGroupTone;
}

export const DESIGN_GROUPS: readonly DesignGroup[] = [
  {
    id: "landing-pages",
    title: "Landing pages",
    categories: ["landing-pages"],
    tone: "rose",
  },
  {
    id: "inspiration",
    title: "Inspiration",
    categories: ["galleries", "ux-flows"],
    tone: "amber",
  },
  {
    id: "build",
    title: "Build",
    categories: ["components", "templates", "ai-prompts"],
    tone: "sky",
  },
  {
    id: "motion",
    title: "Motion",
    categories: ["motion", "open-source"],
    tone: "violet",
  },
  {
    id: "toolkit",
    title: "Toolkit",
    categories: ["toolkit"],
    tone: "emerald",
  },
] as const;

export const DESIGN_GROUP_COUNT = DESIGN_GROUPS.length;

export type DesignTrendTone =
  | "cyan"
  | "amber"
  | "violet"
  | "emerald"
  | "sky"
  | "rose";

export interface DesignFavorite {
  resourceId: string;
  purpose: string;
  tone: DesignTrendTone;
}

export const DESIGN_FAVORITES: readonly DesignFavorite[] = [
  {
    resourceId: "threeui",
    purpose: "3D & WebGL templates",
    tone: "violet",
  },
  {
    resourceId: "landingfolio",
    purpose: "Landing & components",
    tone: "cyan",
  },
  {
    resourceId: "affectui",
    purpose: "UI for agents",
    tone: "sky",
  },
  {
    resourceId: "inspora",
    purpose: "Design inspiration",
    tone: "amber",
  },
  {
    resourceId: "bencho",
    purpose: "Interactive React",
    tone: "emerald",
  },
  {
    resourceId: "originkit",
    purpose: "Animated components",
    tone: "rose",
  },
] as const;

export const FAVORITE_RESOURCES: readonly (DesignFavorite & {
  resource: DesignResource;
})[] = DESIGN_FAVORITES.flatMap((favorite) => {
  const resource = DESIGN_RESOURCES.find(
    (item) => item.id === favorite.resourceId
  );

  return resource ? [{ ...favorite, resource }] : [];
});

export const DESIGN_RESOURCE_COUNT = DESIGN_RESOURCES.length;

export function getResourcesByCategory(categoryId: DesignCategoryId) {
  return DESIGN_RESOURCES.filter((resource) => resource.category === categoryId);
}

export function getCategoryCount(categoryId: DesignCategoryId) {
  return getResourcesByCategory(categoryId).length;
}

export interface AgentTaskRoute {
  id: string;
  task: string;
  whenToUse: string;
  resourceIds: readonly string[];
  extractHint: string;
}

export const AGENT_TASK_ROUTES: readonly AgentTaskRoute[] = [
  {
    id: "hero-above-fold",
    task: "Hero & Above-the-Fold",
    whenToUse: "First screen, headline, CTA",
    resourceIds: ["supahero", "land-book", "godly"],
    extractHint: "Extract typography scale, visual hook, and primary CTA placement.",
  },
  {
    id: "interactive-sections",
    task: "Interactive Page Sections & Bento Grids",
    whenToUse: "Feature grids, pricing, interactions",
    resourceIds: ["oversight-sections", "bentogrids", "shadcnblocks"],
    extractHint: "Copy section rhythm, card density, and interactive hover states.",
  },
  {
    id: "claude-code-components",
    task: "Claude Code & Cursor UI Blocks",
    whenToUse: "React, Tailwind, shadcn components",
    resourceIds: ["21st", "affectui", "shadcn-ui", "tweakcn", "kokonutui"],
    extractHint: "Use tokenized shadcn primitives, tweakcn palettes, and agent-ready .tsx blocks.",
  },
  {
    id: "cta-blocks",
    task: "Call-to-Action (CTA) Sections",
    whenToUse: "Conversion banners, signup, closing CTA",
    resourceIds: ["cta-gallery", "landdding"],
    extractHint: "Study contrast, button framing, and value-driven microcopy.",
  },
  {
    id: "footer-layouts",
    task: "Website Footers",
    whenToUse: "Site footer and navigation",
    resourceIds: ["footer", "minimal-gallery"],
    extractHint: "Check column grid, sitemap links, legal/privacy links, and brand mark.",
  },
  {
    id: "motion-scroll",
    task: "Motion, 60fps & Scroll Storytelling",
    whenToUse: "Micro-interactions, scroll, transitions",
    resourceIds: ["sixtyfps", "scrolltide", "motionin", "motion-primitives"],
    extractHint: "Grab easing curves, scroll prompts, and composable Framer Motion primitives.",
  },
  {
    id: "app-ux-flows",
    task: "Real Product Screens & Dashboards",
    whenToUse: "Onboarding, settings, mobile flows",
    resourceIds: ["mobbin", "component-gallery", "appshot", "refero"],
    extractHint: "Reference real shipped flows from Stripe, Linear, and top iOS/web apps.",
  },
  {
    id: "brand-icons-type",
    task: "Typography, Icons & Social Assets",
    whenToUse: "Fonts, icons, social assets",
    resourceIds: ["fonts-in-logo", "iconly", "posts-design", "devault"],
    extractHint: "Avoid generic default fonts; pair distinctive display type with crisp icons.",
  },
  {
    id: "3d-webgl-interactive",
    task: "3D, WebGL & Three.js Landers",
    whenToUse: "3D, WebGL, shader scenes",
    resourceIds: ["threeui", "godly"],
    extractHint: "Study 3D scene camera angles, particle physics, WebGL canvas performance, and fallback 2D layouts.",
  },
  {
    id: "landing-page-benchmarks",
    task: "Full Landing Pages & SaaS Conversion",
    whenToUse: "Landing pages and SaaS flows",
    resourceIds: ["landingfolio", "lapa-ninja", "saas-landing-page", "onepagelove", "dark-design", "curated"],
    extractHint: "Extract full page narrative arc, social proof rhythm, pricing tier framing, and dark contrast ratios.",
  },
] as const;

export interface ProductionReadinessItem {
  number: number;
  title: string;
  spec: string;
  agentRule: string;
}

export const PRODUCTION_READINESS_ITEMS: readonly ProductionReadinessItem[] = [
  {
    number: 1,
    title: "Custom 404 page",
    spec: "src/app/not-found.tsx",
    agentRule: "Styled 404 route with clear recovery links back to Home and key pages.",
  },
  {
    number: 2,
    title: "CTA above the fold",
    spec: "Hero primary action",
    agentRule: "High-contrast primary CTA visible without scrolling on mobile & desktop.",
  },
  {
    number: 3,
    title: "Meta title per page",
    spec: "metadata.title",
    agentRule: "Unique, keyword-accurate title exported on every route + root template.",
  },
  {
    number: 4,
    title: "Meta description per page",
    spec: "metadata.description",
    agentRule: "Distinct 120–160 char summary per route; never fall back to generic text.",
  },
  {
    number: 5,
    title: "Open Graph image",
    spec: "1200×630 OG & Twitter card",
    agentRule: "Configured openGraph.images and twitter.card = 'summary_large_image'.",
  },
  {
    number: 6,
    title: "Favicon set",
    spec: "SVG, ICO, Apple Touch, Manifest",
    agentRule: "Complete multi-platform icon suite + site.webmanifest + theme-color meta.",
  },
  {
    number: 7,
    title: "robots.txt",
    spec: "src/app/robots.ts",
    agentRule: "Explicit crawler allow/disallow rules pointing to canonical sitemap.xml.",
  },
  {
    number: 8,
    title: "sitemap.xml",
    spec: "src/app/sitemap.ts",
    agentRule: "Auto-updated XML sitemap listing every public route and blog post.",
  },
  {
    number: 9,
    title: "Alt text on every image",
    spec: "Descriptive alt / aria-hidden",
    agentRule: "Meaningful alt text on all content images; aria-hidden on decorative SVGs.",
  },
  {
    number: 10,
    title: "Loading states",
    spec: "src/app/loading.tsx & skeletons",
    agentRule: "Route-level loading skeleton + pending states on async widgets & buttons.",
  },
  {
    number: 11,
    title: "Privacy policy page",
    spec: "src/app/privacy/page.tsx",
    agentRule: "Dedicated /privacy route disclosing analytics, cookies, and contact rights.",
  },
  {
    number: 12,
    title: "Analytics installed",
    spec: "Vercel Analytics / GTM",
    agentRule: "Production telemetry mounted in root layout to track real traffic.",
  },
] as const;

export const AGENT_DESIGN_SYSTEM_PROMPT = `# AI Agent UI Research & 12-Point Production Standard

## 1. Automatic UI Inspiration Routing (No Generic "AI Slop")
Before designing or updating any UI component, automatically visit the matching reference site below to anchor layout, typography, spacing, and motion:
- 3D & WebGL Canvas: https://threeui.com (80+ Three.js templates, live 3D showcase), https://godly.website
- Full Landing Pages & Templates: https://landingfolio.com , https://lapa.ninja (7,300+ full screenshots & videos), https://curated.design
- SaaS & Conversions: https://saaslandingpage.com , https://land-book.com , https://supahero.io
- One-Page & Minimal: https://onepagelove.com , https://minimal.gallery
- Dark Mode & Sleek Themes: https://dark.design
- Interactive Sections & Bento Grids: https://supply.madebyoversight.com/sections , https://bentogrids.com , https://shadcnblocks.com
- Claude Code & Cursor Components: https://21st.dev , https://affectui.com , https://ui.shadcn.com , https://tweakcn.com , https://kokonutui.com
- Call-to-Action (CTA) Blocks: https://cta.gallery , https://landdding.com
- Footers: https://footer.design
- Motion & 60fps Animations: https://60fps.design , https://scrolltide.co , https://motionin.design
- Real App Screens & UX Flows: https://mobbin.com , https://component.gallery , https://appshot.gallery
- Icons, Brand Fonts & Social Visuals: https://iconly.design , https://fontinlogo.com , https://posts.design , https://devault.design

## 2. Mandatory 12-Point "Make It Real" Checklist
Every website or route shipped must include all 12 production essentials:
1. Custom 404 page (src/app/not-found.tsx)
2. CTA above the fold (visible on mobile & desktop without scrolling)
3. Meta title per page (unique metadata.title per route)
4. Meta description per page (unique 120-160 char metadata.description per route)
5. Open Graph image (1200x630 openGraph.images + Twitter summary_large_image)
6. Favicon set (SVG, ICO, 16x16, 32x32, apple-touch-icon, site.webmanifest)
7. robots.txt (src/app/robots.ts with sitemap pointer)
8. sitemap.xml (src/app/sitemap.ts updated with every public route)
9. Alt text on every image (descriptive alt on <Image>, aria-hidden on decorative icons)
10. Loading states (src/app/loading.tsx + component skeleton states)
11. Privacy policy page (src/app/privacy/page.tsx linked in footer & sitemap)
12. Analytics installed (Vercel Analytics / GTM in src/app/layout.tsx)`;

