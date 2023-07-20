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

  console.log(isLive, videoLink);
  return (
    <div className=" flex justify-center ">
      {isLive ? <div id="fb-root"></div> : null}

      {isLive ? (
        <script
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v17.0"
          nonce="GLMKdyjM"
          async
        ></script>
      ) : null}

      {isLive ? (
        <div
          className="fb-video"
          data-href={"https://www.facebook.com/maad975/videos/" + videoLink}
        ></div>
      ) : null}
    </div>
  );
};

export default GetLiveVideo;

//
// possible blockquote and that href needs a slash at the end
