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
    ? "xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
    : "xl:grid-cols-[minmax(0,1fr)_auto]";
  const controlsColumn = isPortfolioHome ? "xl:col-start-3" : "";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-xl print:hidden">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`grid min-h-[4.75rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2 sm:min-h-[5.75rem] sm:gap-4 ${wideColumns}`}>
            <SiteNavigation />

            {isPortfolioHome ? (
              <div className="hidden justify-center xl:flex">
                <ViewSwitch
                  currentView={viewMode}
                  onChange={setPortfolioViewMode}
                  aria-label="Switch portfolio view mode"
                  className="h-10 w-56"
                />
              </div>
            ) : null}

            <div className={`flex shrink-0 items-center justify-self-end gap-2 sm:gap-3 ${controlsColumn}`}>
              <IndustryClock startDate={startDate} />
              <ThemeToggle />
            </div>
          </div>

          {isPortfolioHome ? (
            <div className="flex justify-center pb-2 xl:hidden">
              <ViewSwitch
                currentView={viewMode}
                onChange={setPortfolioViewMode}
                aria-label="Switch portfolio view mode"
                className="h-10 w-56"
              />
            </div>
          ) : null}
        </div>
      </header>
      <div
        className={`mx-auto w-full max-w-6xl px-4 lg:px-8 print:pt-0 ${
          isPortfolioHome ? "pt-36 sm:px-6 sm:pt-40 xl:pt-32" : "pt-24 sm:px-6 sm:pt-28"
        }`}
      >
        {children}
      </div>
    </>
  );
}
