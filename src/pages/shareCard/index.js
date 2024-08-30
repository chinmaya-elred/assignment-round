import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import CardTopContainer from "@/components/CardTopContainer";
import CardData from "@/components/CardData";
import BgImage from '../../assets/images/bg.png'

function ShareCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mainContainer">
      <Image
        className="background-image"
        src={BgImage}
        style={{
            position: "absolute",
            top: 0,
            width: "375px",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            zIndex: 1,
        }}
      />
      <div
        className="overlay"
        style={{
            position: "absolute",
            top: 0,
            width: "375px",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", 
            zIndex: 2,
          }}
      />
      <div style={{ position: "relative", zIndex: 3 }}>
        <CardTopContainer data={data} />

        <CardData data={data} />
      </div>
    </div>
  );
}

export default ShareCard;
