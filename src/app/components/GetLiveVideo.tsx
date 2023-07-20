"use client";
import React, { useEffect, useState } from "react";

const GetLiveVideo = () => {
  const [iframeHTML, setIframeHTML] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    const fetchIframe = async () => {
      try {
        const endpoint = "https://graph.facebook.com/maad975/live_videos";
        const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
        const res = await fetch(`${endpoint}?access_token=${accessToken}`, {
          method: "GET",
          cache: "no-cache",
        });
        const data = await res.json();
        setIframeHTML(data.data[0].embed_html);
        if (data.data[0].status === "LIVE") {
          console.log("live");
          setIsLive(true);
          let iframe = data.data[0].embed_html.replace(/&amp;/g, "&");
          // console.log(data.data[0].embed_html.replace(/&amp;/g, "&"));
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
      } catch (error) {}
    };

    fetchIframe();
  });

  // console.log(isLive);
  return (
    <div>
      <script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v17.0"
        nonce="GLMKdyjM"
        async
      ></script>

      <div className="fb-video" data-href={videoLink}>
        <blockquote cite={videoLink} className="fb-xfbml-parse-ignore">
          <a href={videoLink}>The Rush Hour Drive/ NEB 592</a>
          Posted by <a href="https://www.facebook.com/maad975">
            MAAD 97.5FM
          </a>{" "}
          on Wednesday, July 19, 2023
        </blockquote>
      </div>
    </div>
  );
};

export default GetLiveVideo;
