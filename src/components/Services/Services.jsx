import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Smile from "../../img/smile.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Technical</span>
        <span>Skills</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={"https://drive.google.com/file/d/19DnyXThkXy923bCocwb8Vzc3Y5ah-V2u/view?usp=drive_link"} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Photoshop"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Web Technologies"}
            detail={"Html, Css, JavaScript"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Programming Skills"}
            detail={
              "C Programming, Java, C++, Python"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", right: "25rem" }}
          whileInView={{ left: "17rem" }}
          transition={transition}
        >
          <Card
            emoji={Smile}
            heading={"Database"}
            detail={
              "MySQL, Firebase"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
