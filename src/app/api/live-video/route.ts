import { NextResponse } from "next/server";

const PAGE_ID = "maad975";

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
    `https://graph.facebook.com/v19.0/${PAGE_ID}/live_videos`
  );

  url.searchParams.set("access_token", accessToken);
  url.searchParams.set("fields", "embed_html,status");
  url.searchParams.set("limit", "1");

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "FacebookGraphError",
          status: res.status,
          message: data?.error?.message ?? "Unknown error from Facebook Graph",
          type: data?.error?.type,
          code: data?.error?.code,
        },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to reach Facebook Graph" },
      { status: 502 }
    );
  }
}

