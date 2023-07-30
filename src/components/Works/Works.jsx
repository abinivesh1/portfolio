import React, { useContext } from "react";
import "./Works.css";
import java from "../../img/java.png";
import Mysql from "../../img/mysql.png";
import Code from "../../img/code.png";
import Figma from "../../img/figma.png";
import React1 from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            About Me
          </span>
          <span></span>
          <spane>
            Greetings! I'm Abinivesh S, currently pursuing my studies at DR NGP Institute of Technology in Coimbatore. 
            My deep interest lies in programming and I'm truly fascinated by emerging technologies. 
            Computers have captivated me since an early age, and I'm always intrigued by the limitless opportunities they present. 
            As a programmer, I take pleasure in exploring inventive approaches and taking on intricate challenges. 
            Whether it involves crafting efficient algorithms, developing web applications, or delving into artificial intelligence, 
            I find immense joy in learning and applying novel ideas. My commitment to refining my programming skills enables me to keep abreast of the latest advancements in the field. 
            I'm eager to contribute to the ever-changing tech industry and create a positive impact through my work. 
            In my portfolio, I aim to showcase my projects and demonstrate my proficiency in various programming languages and technologies. 
            Excitedly, I look forward to embarking on new ventures, collaborating with fellow enthusiasts, and creating impactful solutions that will shape the future of technology.
            <br />

            <br />
            
            <span style={{ color: darkMode ? "white" : "" }}>
            Areas of Interest : Software Development {'\n'} - Web Developement {'\n'}  - Artificial Intelligence
          </span>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mysql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Code} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Figma} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React1} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
