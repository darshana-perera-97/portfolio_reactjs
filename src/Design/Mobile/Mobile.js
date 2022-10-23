import React from "react";
import CvDownload from "../Common/CvDownload";
import Logo from "../Common/Logo";
import AnimatedText2 from "../MobileComponent/AnimatedText2";
import IconSetM from "../MobileComponent/IconSetM";

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
      <div style={{ color: "white", padding: "40px" }}>
        <p style={{ textAlign: "center", fontSize: "30px", opacity: "0.7" }}>
          Contact Me
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <IconSetM />
        </div>
      </div>
    </div>
  );
}
