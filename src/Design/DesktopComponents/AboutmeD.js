import React from "react";
import IconSetD from "../DesktopComponents/IconSetD";

export default function AboutmeD() {
  return (
    <div style={{ color: "white", padding: "80px" }}>
      <p style={{ textAlign: "center", fontSize: "50px", opacity: "0.7" }}>
        Contact Me
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <IconSetD />
      </div>
      <div style={{ color: "white", padding: "80px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "50px",
            opacity: "0.7",
            marginBottom: "50px",
          }}
        >
          About Me
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontWeight: "500",
                textAlign: "right",
                // width: "100%",
                fontSize: "40px",
              }}
            >
              Frontend Developer <br /> UI Designer
            </p>
            <p
              style={{
                fontSize: "25px",
                marginTop: "20px",
                opacity: "0.6",
                border: "4px solid #FFFFFF73",
                // width: "50%",
                padding: "20px",
                borderRadius: "30px",
              }}
            >
              I am an undergraduate of <br />
              Trincomalee Campus in EUSL.
              <br /> I am studying Computer Science in there. <br /> And I am
              good at self-study.
            </p>
          </div>
          <div id="sidePic"></div>
        </div>
      </div>
    </div>
  );
}
