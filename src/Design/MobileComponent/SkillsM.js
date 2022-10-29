import React from "react";

export default function SkillsM() {
  return (
    <div>
      <div style={{ color: "white", padding: "40px" }}>
        <p style={{ textAlign: "center", fontSize: "30px", opacity: "0.7" }}>
          Skills & Education
        </p>
      </div>
      <div style={{ border: "3px solid #FFFFFF75", padding: "20px 30px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
            opacity: "0.7",
            color: "white",
            textDecorationLine: "underline",
          }}
        >
          Skill List
        </p>
        <ol>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Web Development</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>React JS</li>
            <li style={{ color: "white", fontSize: "15px" }}>Next JS</li>
            <li style={{ color: "white", fontSize: "15px" }}>HTML + CSS</li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Mobile Development</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>Flutter</li>
            <li style={{ color: "white", fontSize: "15px" }}>Android - JAVA</li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>UI Designer</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>Adobe XD</li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Graphic Designer</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              Adobe Photoshop
            </li>
            <li style={{ color: "white", fontSize: "15px" }}>Corel Draw</li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Arduino</p>
          </li>
        </ol>
      </div>
      <div
        style={{
          border: "3px solid #FFFFFF75",
          padding: "20px 30px",
          marginTop: "50px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
            opacity: "0.7",
            color: "white",
            textDecorationLine: "underline",
          }}
        >
          Education
        </p>
        <ol>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Undergraduate of BCS</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              <p>
                Trincomalee Campus EUSL
                <br /> from March-2019 to present
              </p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Dip in English</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              <p>Wayamba University Sri Lanka in 2018</p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>ICTT - NVQ level IV</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              <p>from Chilaw Youth Center 2017</p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>GCE Advanced Level</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>Adobe XD</li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>Graphic Designer</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              <p>Passed with BCC result in the Maths Stream in 2019</p>
            </li>
          </ul>
          <li style={{ color: "white", fontSize: "18px" }}>
            <p>GCE Ordinary Level</p>
          </li>
          <ul>
            <li style={{ color: "white", fontSize: "15px" }}>
              <p>
                Passed with A grades for Maths and Science, B pass for English
              </p>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
