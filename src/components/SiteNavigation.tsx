"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/", active: (path: string) => path === "/" },
  { label: "Work", href: "/#experience", active: () => false },
  { label: "Research", href: "/#research", active: () => false },
  { label: "Projects", href: "/#projects", active: () => false },
  {
    label: "Library",
    href: "/books",
    active: (path: string) => ["/books", "/papers", "/essays", "/movies"].includes(path),
  },
];

export function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex min-w-0 items-center justify-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1"
    >
      {NAV_ITEMS.map(({ label, href, active }) => {
        const isActive = active(pathname);

        return (
          <Link
            key={label}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-md px-2 py-2 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:text-xs ${
              isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
