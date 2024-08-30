import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import TopSection from "@/components/TopSection";
import Share from "../components/Share";
import Ratings from "../components/Rating";
import Comments from "@/components/Comments";
import BgImage from "../assets/images/bg.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { data, userCode, networkCode } = props;
  const [data1, setData] = useState([]);

  console.log(data);

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

  console.log(data);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={data?.profileTitle ?? ""}
          key="title"
        />
        <meta
          property="og:description"
          content={data?.description ?? ""}
          key="description"
        />
        <meta
          property="og:image"
          content={data?.cardImageURL ?? "/"}
          key="image"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <div className="d-flex align-item-center justify-content-center height-100">
        <div
          className="mainContainer"
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          <Image
            className="background-image"
            src={BgImage}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
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
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 2,
            }}
          />

          <div style={{ position: "relative", zIndex: 3 }}>
            <Header />
            <hr />

            <TopSection data={data1} />
            <Share />
            <Ratings />
            <Comments data={data1} />
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
