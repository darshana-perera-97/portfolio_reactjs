import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaGitSquare, FaInstagramSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

export default function IconSetM() {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "35px",
        justifyContent: "space-between",
        width: "120%",
        opacity: "1",
        color: "white",
      }}
    >
      <a href="">
        <AiFillFacebook />
      </a>
      <a href="">
        <AiFillMail />
      </a>
      <a href="">
        <AiFillLinkedin />
      </a>
      <a href="">
        <FaGitSquare />
      </a>
      <a href="">
        <FaInstagramSquare />
      </a>
      <a href="">
        <ImStackoverflow />
      </a>
    </div>
  );
}
