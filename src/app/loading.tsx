export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="mx-auto w-full max-w-5xl space-y-4 py-6"
    >
      <div className="h-44 w-full animate-pulse rounded-2xl border border-border/70 bg-card/60 p-6" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-32 animate-pulse rounded-2xl border border-border/70 bg-card/50" />
        <div className="h-32 animate-pulse rounded-2xl border border-border/70 bg-card/50" />
      </div>
      <div className="h-64 w-full animate-pulse rounded-2xl border border-border/70 bg-card/50" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
