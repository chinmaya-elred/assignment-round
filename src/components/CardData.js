import React from "react";
import Share from "../assets/images/share-arrow.svg";
import Image from "next/image";
import Award1 from "../assets/images/award 1.png";
import Award2 from "../assets/images/award 2.png";
import Award3 from "../assets/images/awardimage.png";
import call from "../assets/images/call.svg";
import globe from "../assets/images/globe.svg";
import location from "../assets/images/location.svg";
import mail from "../assets/images/mail.svg";
import S from "../assets/images/S.svg";

function CardData({ data }) {
  const images = [Award1, Award2, Award3];
  const images2 = [Award1, Award2, Award3, Award1, Award2];
  
  const url = typeof window !== "undefined" ? window.location.href : ""; // Define the URL here

  const isFirefox =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("firefox");
  const isMacOs =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("mac");

    const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

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


  return (
    <div className="card-container">
      <div className="flex gap-3 mt-3 ml-auto mr-[20px]">
        <Image src={Share} alt="error" width={20} style={{ height: "20px" }} onClick={handleShare} className="cursor-pointer"/>
        <div className="text-white font-semibold cursor-pointer" onClick={handleShare}>Share</div>
      </div>

      <div className="mt-[60px] m-auto flex flex-col items-center justify-center">
        <Image
          src={data.dpURL}
          alt="error"
          width={120}
          height={120}
          className="border-2 rounded-[50%]"
        />

        <div className="flex flex-col justify-center text-center gap-2 mt-[30px]">
          <div className="text-3xl text-white font-semibold">
            {capitalize(data?.firstname)}
          </div>
          <div className="text-xl text-white font-semibold">
            {capitalize(data?.lastname)}
          </div>

          <div className="text-[19px] text-white font-semibold mt-[30px]">
            {capitalize(data?.title?.[0]?.value)}
          </div>
          <div className="text-[19px] text-white font-semibold ml-2">
            {data?.location?.city}, {data?.location?.state}
          </div>

          <div className="flex justify-center mt-[20px] gap-2">
            {images.map((imageSrc, index) => (
              <div key={index}>
                <Image
                  src={imageSrc}
                  alt={`Award ${index + 1}`}
                  width={40}
                  height={120}
                  className="border-2 rounded-[50%]"
                />
              </div>
            ))}
          </div>

          <div className="flex  justify-center  mt-[10px] gap-2">
            {images2.map((imageSrc, index) => (
              <div key={index}>
                <Image
                  src={imageSrc}
                  alt={`Award ${index + 1}`}
                  width={40}
                  height={120}
                  className="border-2 rounded-[50%]"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Image src={S} alt="err" width={20} className="option-wrapper" />
            <Image src={mail} alt="err" width={20} className="option-wrapper" />
            <Image src={call} alt="err" width={20} className="option-wrapper" />
            <Image
              src={location}
              alt="err"
              width={20}
              className="option-wrapper"
            />
            <Image
              src={globe}
              alt="err"
              width={20}
              className="option-wrapper"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardData;
