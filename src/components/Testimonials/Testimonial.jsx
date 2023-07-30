
import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import androidstudio from "../../img/androidstudio.png";
import visualstudio from "../../img/visualstudio.png";
import intellij from "../../img/intellij.png";
import netbeans from "../../img/netbeans.png";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Proficient </span>
      <span>Integrated development environment (IDE)</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={androidstudio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={visualstudio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={intellij} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={netbeans} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
