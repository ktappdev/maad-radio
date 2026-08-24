import { NextResponse } from "next/server";

const PAGE_ID = "maad975";

type FacebookLiveVideo = {
  id?: string;
  status?: string;
  embed_html?: string;
  permalink_url?: string;
};

type FacebookGraphResponse = {
  data?: FacebookLiveVideo[];
  error?: {
    message?: string;
    type?: string;
    code?: number;
  };
};

export async function GET() {
  const accessToken =
    process.env.FACEBOOK_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Missing Facebook access token on server" },
      { status: 500 }
    );
  }

  const url = new URL(
    `https://graph.facebook.com/v24.0/${PAGE_ID}/live_videos`
  );

  url.searchParams.set("access_token", accessToken);
  url.searchParams.set("fields", "id,status,embed_html,permalink_url");
  url.searchParams.set("limit", "10");

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const data = (await res.json()) as FacebookGraphResponse;

    if (!res.ok) {
      console.error(
        "[live-video] Facebook Graph error:",
        JSON.stringify({ status: res.status, data })
      );
      return NextResponse.json(
        {
          error: "FacebookGraphError",
          status: res.status,
          message: data.error?.message ?? "Unknown error from Facebook Graph",
          type: data.error?.type,
          code: data.error?.code,
        },
        { status: res.status }
      );
    }

    const videos = Array.isArray(data.data) ? data.data : [];

    console.log(
      "[live-video] Facebook Graph videos:",
      videos.map(({ id, status, embed_html }) => ({
        id,
        status,
        embed_html_length: embed_html?.length ?? 0,
      }))
    );

    // Facebook's current live status enum is LIVE_NOW; LIVE is legacy.
    const candidate = videos.find(
      (video) => video.status === "LIVE_NOW" || video.status === "LIVE"
    );

    if (!candidate) {
      return NextResponse.json({ live: false });
    }

    const embedHtml =
      typeof candidate.embed_html === "string" &&
      candidate.embed_html.trim().length > 0 &&
      candidate.embed_html.includes("<iframe")
        ? candidate.embed_html
        : "";

    if (!embedHtml) {
      return NextResponse.json({ live: false });
    }

    return NextResponse.json({
      live: true,
      embedHtml,
      videoUrl: candidate.permalink_url,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach Facebook Graph" },
      { status: 502 }
    );
  }
}
