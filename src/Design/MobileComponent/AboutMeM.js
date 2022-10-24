import React from "react";
import IconSetM from "../MobileComponent/IconSetM";

export default function AboutMeM() {
  return (
    <div>
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
      <div style={{ color: "white", padding: "30px" }}>
        <p style={{ textAlign: "center", fontSize: "30px", opacity: "0.7" }}>
          About Me
        </p>
        <div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              id="sidePic"
              style={{
                margin: "0px",
                width: "80px",
                height: "120px",
                backgroundSize: "cover",
                boxShadow: "0px 0px 5px",
              }}
            ></div>
            <p
              style={{
                color: "white",
                fontWeight: "500",
                textAlign: "left",
                // width: "100%",
                fontSize: "20px",
                marginTop: "15px",
              }}
            >
              Frontend Develop <br />
              <span style={{ marginLeft: "40px" }}>+</span>
              <br /> UI Designer
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "12px",
                marginTop: "10px",
                opacity: "0.6",
                border: "4px solid #FFFFFF73",
                // width: "50%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              I am an undergraduate of <br />
              Trincomalee Campus in EUSL.
              <br /> I am studying Computer Science in there. <br /> And I am
              good at self-study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
