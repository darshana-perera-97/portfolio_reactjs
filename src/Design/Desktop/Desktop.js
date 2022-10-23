import React from "react";

import Logo from "../Common/Logo";
import CvDownload from "../Common/CvDownload";
import AnimatedText from "../DesktopComponents/AnimatedText";

export default function Desktop() {
  return (
    <div>
      <div style={{ padding: "20px 80px", background: "#1d172f" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "35px",
          }}
        >
          <Logo />
          <CvDownload />
        </div>
        <div
          id="background2"
          style={{
            padding: "80px 200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AnimatedText />
          <div id="proPic"></div>
        </div>
      </div>
    </div>
  );
}
