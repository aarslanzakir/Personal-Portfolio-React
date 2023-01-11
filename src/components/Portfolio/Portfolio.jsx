import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Pizza from "../../img/pizza.PNG";
import Restaurant from "../../img/restaurant.PNG";
import Fitness from "../../img/fitness.PNG";
import Dash from "../../img/dashboard.PNG";
import Ecommerce from "../../img/ecommerce.PNG"
const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
        
        <SwiperSlide>
        <a href="https://alifudoproject.vercel.app/" > <img src={Pizza} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://gericht.pages.dev/"><img src={Restaurant} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://alifitnessapp.pages.dev/"><img src={Fitness} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://aliecommerce.pages.dev/"> <img src={Ecommerce} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://aliecommercedashboard.pages.dev/"><img src={Dash} alt="" /></a>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Portfolio;
