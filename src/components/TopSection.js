import React from "react";
import Image from "next/image";
import BlueTick from "../assets/images/bluetick.svg";
import Case from "../assets/images/case.png";
import Map from "../assets/images/map.png";
import MiniCard from "../assets/images/minicard.png";

function TopSection({ data }) {
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="mt-[70px] px-5">
      <Image
        src={data.dpURL}
        alt="error"
        width={100}
        height={100}
        className="border-2 rounded-[50%]"
      />

      <div className="flex gap-2 mt-5">
        <div className="text-3xl text-white font-semibold">
          {capitalize(data?.firstname)}
        </div>
        <div className="text-3xl text-white font-semibold">
          {capitalize(data?.lastname)}
        </div>
        <Image
          src={BlueTick}
          alt="error"
          width={30}
          style={{ height: "30px" }}
          className="mt-2 ml-2"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <Image src={Case} alt="error" width={30} height={30} />
        <div className="text-[18px] text-white">
          {capitalize(data?.title?.[0]?.value)}
        </div>
      </div>

      <div className="flex gap-2 mt-2 ml-1">
        <Image src={Map} alt="error" width={18} height={18} />
        <div className="text-[18px] text-white ml-2">
          {data?.location?.city},  {data?.location?.state}
        </div>
      </div>

      <Image src={MiniCard} alt="error" width={56} height={85} className="mt-[75px]"/>
    </div>
  );
}

export default TopSection;
