const VERCEL_ANALYTICS_API = "https://api.vercel.com/v1/query/web-analytics/visits/count";
const VERCEL_PROJECT_ID = "prj_DwgunB0aAe7KbDS9Bt09Iejo1HxN";
const VERCEL_TEAM_ID = "team_QTBAzwNeZALDTOUpInJglJ0O";

interface VercelAnalyticsResponse {
  data?: {
    visitors?: number;
  };
}

export async function GET() {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;

  if (!token) {
    return Response.json({ available: false }, { status: 503 });
  }

  const url = new URL(VERCEL_ANALYTICS_API);
  url.searchParams.set("projectId", VERCEL_PROJECT_ID);
  url.searchParams.set("teamId", VERCEL_TEAM_ID);

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return Response.json({ available: false }, { status: 502 });
    }

    const result = (await response.json()) as VercelAnalyticsResponse;
    const visitors = result.data?.visitors;

    if (typeof visitors !== "number" || !Number.isFinite(visitors)) {
      return Response.json({ available: false }, { status: 502 });
    }

    return Response.json({ available: true, visitors });
  } catch {
    return Response.json({ available: false }, { status: 502 });
  }
}
