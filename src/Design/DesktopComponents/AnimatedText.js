import React from "react";
import Typical from "react-typical";

export default function AnimatedText() {
  return (
    <div>
      <p style={{ color: "white", fontSize: "40px", marginTop: "30px" }}>
        Hello World!
      </p>
      <p style={{ color: "white", fontSize: "55px", fontWeight: "bold" }}>
        <Typical
          steps={["My Name is", 2000, "Darshana Perera", 2500]}
          loop={Infinity}
          wrapper="p"
        />
      </p>
      <p
        style={{
          color: "#FFAE00",
          fontSize: "35px",
          marginTop: "25px",
          textShadow: "1px 1px 5px black",
        }}
      >
        <Typical
          steps={[
            "I am good in Web Development",
            3500,
            "I know React Js",
            2500,
            "I know Next Js ",
            2500,
            "I know HTML & CSS ",
            2500,
            "I am good in Mobile Development",
            3500,
            "I know Flutter",
            2500,
            "I know Android ",
            2500,
            "I am good in Arduino",
            3500,
            "I am good in UX Design",
            3500,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </p>
    </div>
  );
}
