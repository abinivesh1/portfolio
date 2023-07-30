import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abiniveshshanmugam@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/abinivesh_" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/abi.nivesh.311" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/abinivesh1" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
