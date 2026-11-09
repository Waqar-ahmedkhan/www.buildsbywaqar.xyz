'use client';

import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';

interface IndustryClockProps {
  startDate: string;
}

const MINUTE = 60_000;
const DAY = 86_400_000;
const pad = (value: number) => String(value).padStart(2, '0');

function getExperience(startDate: string, now: number) {
  const start = new Date(startDate);
  const current = new Date(Math.max(start.getTime(), now));
  let months = (current.getUTCFullYear() - start.getUTCFullYear()) * 12 + current.getUTCMonth() - start.getUTCMonth();

  const getAnniversary = (offset: number) => {
    const month = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + offset, 1));
    const lastDay = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();

    return Date.UTC(
      month.getUTCFullYear(),
      month.getUTCMonth(),
      Math.min(start.getUTCDate(), lastDay),
      start.getUTCHours(),
      start.getUTCMinutes(),
      start.getUTCSeconds(),
    );
  };

  if (getAnniversary(months) > current.getTime()) months -= 1;

  const years = Math.floor(months / 12);
  const days = Math.floor((current.getTime() - getAnniversary(years * 12)) / DAY);
  const elapsedMinutes = Math.floor((current.getTime() - start.getTime()) / MINUTE);

  return { years, days, hours: Math.floor(elapsedMinutes / 60) % 24, minutes: elapsedMinutes % 60 };
}

export function IndustryClock({ startDate }: IndustryClockProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    let interval: ReturnType<typeof setInterval> | undefined;
    let initialTick: ReturnType<typeof setTimeout> | undefined;
    const tick = () => setNow(Date.now());

    const sync = () => {
      clearInterval(interval);
      clearTimeout(initialTick);
      if (document.hidden || !desktop.matches) return;
      initialTick = setTimeout(tick, 0);
      interval = setInterval(tick, MINUTE);
    };

    sync();
    document.addEventListener('visibilitychange', sync);
    desktop.addEventListener('change', sync);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTick);
      document.removeEventListener('visibilitychange', sync);
      desktop.removeEventListener('change', sync);
    };
  }, []);

  const experience = now === null ? null : getExperience(startDate, now);
  const description = experience
    ? `${experience.years} years, ${experience.days} days, ${pad(experience.hours)}:${pad(experience.minutes)} of industry experience`
    : 'Industry experience';

  return (
    <div
      className="hidden items-center gap-2 border-r border-border/70 px-2.5 py-1 text-muted-foreground lg:flex"
      role="group"
      aria-label={description}
      title={description}
    >
      <Clock3 className="size-3.5" aria-hidden="true" />
      <span className="text-left">
        <span className="block text-[9px] font-medium uppercase tracking-[0.1em]">Experience</span>
        <span className="block text-xs font-semibold tabular-nums text-foreground">
          {experience ? `${experience.years}y ${experience.days}d · ${pad(experience.hours)}:${pad(experience.minutes)}` : '—'}
        </span>
      </span>
    </div>
  );
}
