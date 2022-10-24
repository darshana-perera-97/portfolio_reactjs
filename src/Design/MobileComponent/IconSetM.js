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
      <a href="ds.perera.1997@gmail.com">
        <AiFillMail />
      </a>
      <a href="https://www.linkedin.com/in/darshana-perera-/">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/darshana-perera-97">
        <FaGitSquare />
      </a>
      <a href="">
        <FaInstagramSquare />
      </a>
      <a href="https://stackoverflow.com/users/20057317/darshana-perera">
        <ImStackoverflow />
      </a>
    </div>
  );
}
