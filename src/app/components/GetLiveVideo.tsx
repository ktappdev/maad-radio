"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type LiveVideoResponse = {
  live?: boolean;
  embedHtml?: string;
  videoUrl?: string;
};

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
        if (!res.ok) {
          throw new Error(`Live video request failed: ${res.status}`);
        }
        const data = (await res.json()) as LiveVideoResponse;
        const embedHtml =
          data.live === true && typeof data.embedHtml === "string"
            ? data.embedHtml
            : "";
        const isCurrentlyLive = data.live === true && embedHtml !== "";

        setIsLive(isCurrentlyLive);
        setVideoLink(data.videoUrl ?? "");

        if (isCurrentlyLive) {
          const iframe = embedHtml.replace(/&amp;/g, "&");
          const srcMatch = iframe.match(/src="([^"]+)"/);
          setEmbedUrl(srcMatch?.[1]?.replace(/`/g, "") ?? "");
        } else {
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
        <div className="glass-dark rounded-xl border border-white/5 px-6 py-4 text-center flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse flex-shrink-0" />
          <span className="text-sm text-[#FD7B2B] font-medium">
            We&apos;re not live right now — check back soon.
          </span>
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
