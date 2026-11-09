"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/", sectionId: "profile" },
  { label: "Work", href: "/#experience", sectionId: "experience" },
  { label: "Research", href: "/#research", sectionId: "research" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  {
    label: "Library",
    href: "/books",
    paths: ["/books", "/papers", "/essays", "/movies", "/reading"],
  },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    if (pathname !== "/" || typeof IntersectionObserver === "undefined") return;

    const sectionIds = ["profile", "research", "experience", "projects"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.boundingClientRect.top - first.boundingClientRect.top)[0];

        if (current) setActiveSection((current.target as HTMLElement).id);
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="flex min-w-0 items-center justify-start gap-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1"
    >
      {NAV_ITEMS.map((item) => {
        const isSectionLink = "sectionId" in item;
        const isActive = isSectionLink
          ? pathname === "/" && item.sectionId === activeSection
          : item.paths.includes(pathname);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? (isSectionLink && item.label !== "Home" ? "location" : "page") : undefined}
            className={`shrink-0 rounded-md px-1.5 py-2 text-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3.5 sm:py-2.5 sm:text-xs ${
              isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
