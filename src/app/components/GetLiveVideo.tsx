"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const GetLiveVideo = () => {
  // const [iframeHTML, setIframeHTML] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIframe = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/live-video", { cache: "no-store" });
        const data = await res.json();
        const first = data?.data?.[0];
        const isCurrentlyLive =
          first &&
          (first.status === "LIVE" || first.status === "LIVE_NOW") &&
          first.embed_html;

        if (isCurrentlyLive) {
          setIsLive(true);
          const iframe = first.embed_html.replace(/&amp;/g, "&");
          const srcMatch = iframe.match(/src="([^"]+)"/);
          const nextEmbedUrl = srcMatch?.[1]?.replace(/`/g, "") ?? "";
          setEmbedUrl(nextEmbedUrl);
          if (nextEmbedUrl) {
            try {
              const parsed = new URL(nextEmbedUrl);
              const href = parsed.searchParams.get("href");
              if (href) {
                setVideoLink(decodeURIComponent(href));
              }
            } catch (parseError) {
              setVideoLink("");
            }
          }
        } else {
          setIsLive(false);
          setEmbedUrl("");
        }
      } catch (error) {
        console.error("[GetLiveVideo] Failed to fetch live video:", error);
        setError("Unable to load live video. Try again later.");
        setIsLive(false);
        setEmbedUrl("");
      } finally {
        setHasChecked(true);
        setIsLoading(false);
      }
    };

    fetchIframe();

    const intervalId = setInterval(fetchIframe, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {error && (
        <div className="text-sm text-[#FD7B2B] font-medium text-center py-2">
          {error}
        </div>
      )}
      {hasChecked && !isLive && !isLoading && !error && (
        <div className="text-sm text-[#FD7B2B] font-medium text-center py-2">
          We&apos;re not live right now — check back soon.
        </div>
      )}
      {isLive && (
        <div className="flex flex-col justify-center items-center w-full gap-4">
          {embedUrl && (
            <div
              className="w-full max-w-4xl"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src={embedUrl}
                className="w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] hover:bg-[#145DB2] text-white text-sm font-semibold transition-colors"
            >
              <Image
                src="/facebook-logo.png"
                alt="Facebook"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Watch live on Facebook</span>
            </a>
          )}
        </div>
      )}
    </>
  )
};

export default GetLiveVideo;
