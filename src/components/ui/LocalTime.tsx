"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

const formatters = new Map<string, Intl.DateTimeFormat>();
function format(timeZone: string) {
  let f = formatters.get(timeZone);
  if (!f) {
    f = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone });
    formatters.set(timeZone, f);
  }
  return f.format(new Date());
}

export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => format(timeZone),
    () => null
  );
  return (
    <span className="font-mono tabular-nums" suppressHydrationWarning>
      {time ?? "--:--"} IST
    </span>
  );
}

export function Year() {
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026
  );
  return <>{year}</>;
}
