import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import CardTopContainer from "@/components/CardTopContainer";
import CardData from "@/components/CardData";
import BgImage from "../../assets/images/bg.png";

function ShareCard(props) {
  const { data, userCode, networkCode } = props;
  const [data1, setData] = useState([]);
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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image"
          content={data?.cardImageURL ?? ""}
          key="image"
        />
        <meta property="og:title" content={data?.cardTitle ?? ""} key="title" />
        <meta property="og:description" content={data?.description ?? ""} />
      </Head>
      <div className="d-flex align-item-center justify-content-center height-100">
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
            <CardTopContainer data={data1} />

            <CardData data={data1} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "no-store");

  let url =
    "https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b";
  const response = await fetch(url, {
    cache: "no-cache",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const result = data?.result && data?.result?.length && data?.result[0];

  return {
    props: { data: result, userCode: "66961e8dcc9a8155d09b8c9b" },
  };
}

export default ShareCard;
