import { RESUME_DATA } from "@/data/resume-data";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: {
    lastYear: number;
  };
  contributions: Contribution[];
}

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

function isContributionsResponse(value: unknown): value is ContributionsResponse {
  if (!value || typeof value !== "object") return false;

  const response = value as Partial<ContributionsResponse>;
  return (
    Number.isFinite(response.total?.lastYear) &&
    Array.isArray(response.contributions) &&
    response.contributions.every(
      (contribution) =>
        typeof contribution.date === "string" &&
        Number.isFinite(contribution.count) &&
        Number.isInteger(contribution.level) &&
        contribution.level >= 0 &&
        contribution.level <= 4
    )
  );
}

export async function GET() {
  const url = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(RESUME_DATA.githubUsername)}?y=last`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      return Response.json({ error: "Contribution source unavailable" }, { status: 502 });
    }

    const data: unknown = await response.json();
    if (!isContributionsResponse(data)) {
      return Response.json({ error: "Contribution source returned invalid data" }, { status: 502 });
    }

    return Response.json(data, { headers: CACHE_HEADERS });
  } catch {
    return Response.json({ error: "Contribution source unavailable" }, { status: 502 });
  }
}
