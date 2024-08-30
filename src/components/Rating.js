import React from "react";
import star from "../assets/images/star.svg";
import Image from "next/image";

function Rating() {
  return (
    <div className="rating-div">
      <div className="circle-logo">
        <Image
          src={star}
          alt=""
        />
      </div>
      <div className="text-xl text-white mb-[20px] font-semibold" style={{ marginTop: "-30px"}}>Ratings</div>

      <div className="flex gap-5">
        <div className="text-white text-xl font-semibold">57</div>
        <div className="text-white text-md ">
          Has ethical code of conduct and is safe to do bussines with
        </div>
      </div>

      <hr className="mt-3" />
      <div className="flex gap-5 mt-5">
        <div className="text-white text-xl font-semibold">27</div>
        <div className="text-white text-md ">Met In real life/Video call</div>
      </div>
    </div>
  );
}

export default Rating;
