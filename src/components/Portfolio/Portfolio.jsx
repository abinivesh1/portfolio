import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Campus from "../../img/campusmanagement.png";
import Chatbot from "../../img/chatbot.jpg";
import snakexenzia from "../../img/snakexenzia.png";
import EmergencySystem from "../../img/emergencysystem.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Campus} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Chatbot} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EmergencySystem} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={snakexenzia} alt="" />
        </SwiperSlide>
      </Swiper>
      <br>
      
      </br>
    </div>
  );
};

export default Portfolio;
