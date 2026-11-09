'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const subscribeToHydration = () => () => undefined;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-[3.5rem] shrink-0 items-center rounded-full border border-border bg-muted/80 px-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default"
    >
      <Sun className="absolute left-1.5 size-3.5 text-muted-foreground" aria-hidden="true" />
      <Moon className="absolute right-1.5 size-3.5 text-muted-foreground" aria-hidden="true" />
      <span
        className={`relative z-10 size-6 rounded-full border border-border bg-background transition-transform duration-200 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
