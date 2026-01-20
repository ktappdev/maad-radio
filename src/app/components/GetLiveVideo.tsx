"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
const GetLiveVideo = () => {
  // const [iframeHTML, setIframeHTML] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMobile) {
      return;
    }
    const fetchIframe = async () => {
      try {
        setIsLoading(true);
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
          const srcParts = iframe.split("src=")[1].split(" ")[0].split("%2F");
          const videoId = srcParts[srcParts.length - 1];
          setVideoLink(
            `https://www.facebook.com/maad975/videos/${videoId.replace('"', "")}`
          );
        } else {
          setIsLive(false);
        }
      } catch (error) {
        setIsLive(false);
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

  if (isMobile && isLive) {
    return (
      <div className="text-xs text-white font-light">
        Live Video only on Pc for now
      </div>
    );
  }
  return (
    <>
      {isLive && !isMobile && (
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex justify-center items-center w-full">
            <script
              src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v17.0"
              nonce="GLMKdyjM"
              async
            ></script>

            <div className="fb-video" data-href={videoLink}></div>
          </div>
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
        </div>
      )}
      {isLive && isMobile && (
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex justify-center items-center w-full">
            <iframe
              src={videoLink}
              width="100%"
              height="100%"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
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
        </div>
      )}
      {!isLive && !isMobile && hasChecked && !isLoading && (
        <div className="flex justify-center items-center w-full text-xs text-white font-light">
          No live video right now
        </div>
      )}
    </>
  )
};

export default GetLiveVideo;
