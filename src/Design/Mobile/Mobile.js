import React from "react";
import CvDownload from "../Common/CvDownload";
import Logo from "../Common/Logo";
import AboutMeM from "../MobileComponent/AboutMeM";
import AnimatedText2 from "../MobileComponent/AnimatedText2";
export default function Mobile() {
  return (
    <div style={{ padding: "20px 20px", background: "#1d172f" }}>
      <Logo />
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "15px" }}
      >
        <CvDownload />
      </div>
      <div>
        <AnimatedText2 />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px",
          }}
        >
          <div id="proPic" style={{ height: "35vh", width: "35vh" }}></div>
        </div>
      </div>
      <AboutMeM />
    </div>
  );
}
