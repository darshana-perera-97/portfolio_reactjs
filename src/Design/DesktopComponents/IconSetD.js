import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaGitSquare, FaInstagramSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

export default function IconSetD() {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "55px",
        justifyContent: "space-between",
        width: "40%",
        opacity: "2",
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
