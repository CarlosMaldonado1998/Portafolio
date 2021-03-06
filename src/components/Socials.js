import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

function Socials() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://google.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default Socials;
