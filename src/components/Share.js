import React, { useEffect, useState } from "react";
import share from "../assets/images/share.svg";
import Image from "next/image";

const Share = () => {
  const [show, setShow] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : ""; // Define the URL here

  const isFirefox =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("firefox");
  const isMacOs =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("mac");

  const handleShare = async () => {
    const time = new Date().getTime().toString().slice(-6);
    const urlWithTime = url + `&t=${time}`;
    if (navigator.share) {
      try {
        await navigator.share({
          url: urlWithTime,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      handleUnsupportedBrowser();
    }
  };

  const handleUnsupportedBrowser = () => {
    if (
      navigator.userAgent.includes("Firefox") &&
      navigator.userAgent.includes("Windows")
    ) {
      toast("Web share not supported by Windows Firefox");
    } else if (isFirefox && isMacOs) {
      toast("Web share not supported by MacOS Firefox");
    } else {
      toast("Web share not supported by MacOS Chrome");
    }
  };

  useEffect(() => {
    if (show) clearToasts();
  }, [show]);

  return (
    <div className="share-div">
      <div className="share_icon_div" onClick={handleShare}>
        <Image src={share} alt="" />
      </div>
      <div className="share-text">Share</div>
    </div>
  );
};

export default Share;
