import React from "react";

export default function Skills() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ paddingRight: "130px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "35px",
            opacity: "0.7",
            marginBottom: "50px",
            color: "white",
            textDecorationLine: "underline",
          }}
        >
          Skill List
        </p>
        <ol>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Web Development</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>React JS</li>
            <li style={{ color: "white", fontSize: "20px" }}>Next JS</li>
            <li style={{ color: "white", fontSize: "20px" }}>HTML + CSS</li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Mobile Development</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>Flutter</li>
            <li style={{ color: "white", fontSize: "20px" }}>Android - JAVA</li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>UI Designer</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>Adobe XD</li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Graphic Designer</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              Adobe Photoshop
            </li>
            <li style={{ color: "white", fontSize: "20px" }}>Corel Draw</li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Arduino</p>
          </li>
        </ol>
      </div>
      <div style={{ width: "6px", background: "#ffffff" }}></div>
      <div style={{ paddingLeft: "80px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "35px",
            opacity: "0.7",
            marginBottom: "50px",
            color: "white",
            textDecorationLine: "underline",
          }}
        >
          Education
        </p>
        <ol>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Undergraduate of BCS</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              <p>
                Trincomalee Campus EUSL
                <br /> from March-2019 to present
              </p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>Dip in English</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              <p>
                Wayamba University Sri Lanka
                <br /> in 2018
              </p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>ICTT - NVQ level IV</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              <p>
                from Chilaw Youth Center
                <br /> 2017
              </p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>GCE Advanced Level</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              <p>
                Passed with BCC result
                <br /> in the Maths Stream in 2019
              </p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "25px" }}>
            <p>GCE Ordinary Level</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "20px" }}>
              <p>
                Passed with A grades for Maths and Science, <br />B pass for
                English
              </p>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
