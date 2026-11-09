"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

import {
  DEFAULT_VIEW_MODE,
  getPortfolioViewMode,
  subscribeToPortfolioViewMode,
} from "@/lib/portfolio-view-mode";

const ChatbotWidget = dynamic(
  () => import("@/components/ChatbotWidget").then((m) => m.ChatbotWidget),
  { ssr: false, loading: () => null }
);

interface PortfolioViewShellProps {
  simple: ReactNode;
  detailed: ReactNode;
}

export function PortfolioViewShell({
  simple,
  detailed,
}: PortfolioViewShellProps) {
  const viewMode = useSyncExternalStore(
    subscribeToPortfolioViewMode,
    getPortfolioViewMode,
    () => DEFAULT_VIEW_MODE
  );
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    if (viewMode !== "detailed") {
      return;
    }

    const loadChatbot = () => setShowChatbot(true);
    const requestIdle = window.requestIdleCallback;
    const cancelIdle = window.cancelIdleCallback;

    if (typeof requestIdle === "function") {
      const idleId = requestIdle(loadChatbot, { timeout: 3500 });
      return () => cancelIdle?.(idleId);
    }

    const timeoutId = globalThis.setTimeout(loadChatbot, 2500);
    return () => {
      globalThis.clearTimeout(timeoutId);
    };
  }, [viewMode]);

  if (viewMode === "simple") {
    return (
      <div>
        {simple}
      </div>
    );
  }

  return (
    <div className="relative bg-transparent">
      <main className="relative mx-auto min-h-screen scroll-my-12 overflow-auto pt-2 pb-28 print:p-12">
        {detailed}

        {showChatbot ? <ChatbotWidget /> : null}
      </main>
    </div>
  );
}
