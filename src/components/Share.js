import React, { useEffect, useState } from "react";
import share from "../assets/images/share.svg";
import Image from "next/image";

const Share = () => {
    const [show, setShow] = useState(false);

  const handleShare = () => {
    const time = new Date().getTime().toString().slice(-6);

    (async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            url: url + `&t=${time}`,
          });
        } catch (error) {
        }
      } else {
        if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Windows")) {
          return toast('Web share not supported by Windows Firefox')
        }
        if (isFirefox && isMacOs) {
          return toast('Web share not supported by MacOS Firefox')
        }
        toast('Web share not supported by MacOS Chrome')
      }
    })();
  };

  useEffect(() => {
    if (show) clearToasts();
  }, [show])

  return (
    <div className="share-div" >
      <div className="share_icon_div" onClick={handleShare}>
        <Image src={share} alt="" />
      </div>
      <div className="share-text">Share</div>
    </div>
  );
};

export default Share;
