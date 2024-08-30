import React from "react";
import Cross from "../assets/images/cross_white.svg";
import Image from "next/image";

function CardTopContainer({ data }) {

  return (
    <div className="mt-[20px] flex justify-between px-[20px]">
      <div className="text-xl text-white">Deepa's Personal Card</div>
      <Image src={Cross} alt="error" width={30} style={{ height: "30px" }} />

    </div>
  );
}

export default CardTopContainer;
