"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore, type ReactNode } from "react";

import { IndustryClock } from "@/components/industry-clock";
import { SiteNavigation } from "@/components/SiteNavigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { ViewSwitch } from "@/components/view-switch";
import {
  DEFAULT_VIEW_MODE,
  getPortfolioViewMode,
  setPortfolioViewMode,
  subscribeToPortfolioViewMode,
} from "@/lib/portfolio-view-mode";

interface SiteHeaderProps {
  startDate: string;
  children: ReactNode;
}

export function SiteHeader({ startDate, children }: SiteHeaderProps) {
  const pathname = usePathname();
  const viewMode = useSyncExternalStore(
    subscribeToPortfolioViewMode,
    getPortfolioViewMode,
    () => DEFAULT_VIEW_MODE
  );
  const isPortfolioHome = pathname === "/";
  const wideColumns = isPortfolioHome
    ? "md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
    : "md:grid-cols-[minmax(0,1fr)_auto]";
  const controlsColumn = isPortfolioHome ? "md:col-start-3" : "";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-xl print:hidden">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className={`grid min-h-[6.25rem] grid-cols-1 items-center gap-3 py-2 sm:gap-4 ${wideColumns}`}>
            <div className="hidden min-w-0 md:block">
              <SiteNavigation />
            </div>

            {isPortfolioHome ? (
              <div className="hidden justify-center md:flex">
                <ViewSwitch
                  currentView={viewMode}
                  onChange={setPortfolioViewMode}
                  aria-label="Switch portfolio view mode"
                  className="h-10 w-52"
                />
              </div>
            ) : null}

            <div className={`flex shrink-0 items-center justify-self-center gap-2 md:justify-self-end sm:gap-3 ${controlsColumn}`}>
              <IndustryClock startDate={startDate} />
              <ThemeToggle />
            </div>
          </div>

        </div>
      </header>
      {isPortfolioHome ? (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden print:hidden">
          <ViewSwitch
            currentView={viewMode}
            onChange={setPortfolioViewMode}
            aria-label="Switch portfolio view mode"
            className="h-10 w-48"
          />
        </div>
      ) : null}
      <div
        className={`mx-auto w-full max-w-6xl px-4 lg:px-8 print:pt-0 ${
          isPortfolioHome ? "pt-28 sm:px-6 md:pt-32" : "pt-28 sm:px-6 md:pt-28"
        }`}
      >
        {children}
      </div>
    </>
  );
}
