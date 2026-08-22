import { NextResponse } from "next/server";

const PAGE_ID = "maad975";

type FacebookLiveVideo = {
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
      "[live-video] Facebook Graph success, videos found:",
      videos.length
    );

    const candidate = videos.find(
      (video) =>
        (video.status === "LIVE" || video.status === "LIVE_NOW") &&
        typeof video.embed_html === "string" &&
        video.embed_html.trim().length > 0 &&
        video.embed_html.includes("<iframe")
    );

    if (!candidate?.embed_html) {
      return NextResponse.json({ live: false });
    }

    return NextResponse.json({
      live: true,
      embedHtml: candidate.embed_html,
      videoUrl: candidate.permalink_url,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach Facebook Graph" },
      { status: 502 }
    );
  }
}
