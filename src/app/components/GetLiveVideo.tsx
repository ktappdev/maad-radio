"use client";
import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
const GetLiveVideo = () => {
  // const [iframeHTML, setIframeHTML] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    if (isMobile) {
      return;
    }
    const fetchIframe = async () => {
      try {
        const endpoint = "https://graph.facebook.com/maad975/live_videos";
        const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
        const res = await fetch(`${endpoint}?access_token=${accessToken}`, {
          method: "GET",
          cache: "no-cache",
        });
        const data = await res.json();
        // setIframeHTML(data.data[0].embed_html);
        if (data.data[0].status === "LIVE") {
          console.log("live");
          setIsLive(true);
          let iframe = data.data[0].embed_html.replace(/&amp;/g, "&");
          let srcParts = iframe.split("src=")[1].split(" ")[0].split("%2F");
          let videoId = srcParts[srcParts.length - 1];
          setVideoLink(
            (value) =>
            (value = `https://www.facebook.com/maad975/videos/${videoId.replace(
              '"',
              ""
            )}`)
          );
        }
      } catch (error) { }
    };

    fetchIframe();
  });

  if (isMobile && isLive) {
    return <div className='text-xs text-white font-light'>Live Video only on Pc for now</div>
  }
  return (
    <>
      {isLive && !isMobile &&
        <div className="flex justify-center items-center w-full">
          <script
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v17.0"
            nonce="GLMKdyjM"
            async
          ></script>

          <div className="fb-video" data-href={videoLink}>
          </div>
        </div>}
      {isLive && isMobile &&
        <div className="flex justify-center items-center w-full">
          <iframe
            src={videoLink}
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}

            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>}
    </>
  )
};

export default GetLiveVideo;
