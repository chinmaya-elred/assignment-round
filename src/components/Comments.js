import React from "react";
import CommentsDP from "../assets/images/commentsDP.png";
import Image from "next/image";

function Comments({ data }) {
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="Comments-div h-[300px]">
      <div className="flex justify-between">
        <div className="text-xl text-white font-semibold">Comments</div>
        <div className="text-md text-white font-semibold cursor-pointer">See All</div>
      </div>

      <div>
        {[...Array(10)].map((_, index) => (
          <div className="flex gap-3 mt-5" key={index}>
            <Image
              src={CommentsDP}
              alt="error"
              width={50}
              style={{ height: "50px" }}
            />

            <div>
              <div className="flex gap-2">
                <div className="text-md font-bold text-white">
                  {capitalize(data?.firstname)}
                </div>
                <div className="text-md font-bold text-white">
                  {capitalize(data?.lastname)}
                </div>
              </div>

              <div className="text-md text-white mt-[2px]">
                See you in the next event @roger vaccaro
              </div>

              <div className="flex gap-4 mt-2">
                <div className="text-sm text-white">6 d</div>
                <div className="text-sm text-white">0 likes</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
