import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";






import Elearnig from "../../img/e-learnig.png";
import Crosscart from "../../img/crosscart.png";
import Template from "../../img/Template.png";
import MusicApp from "../../img/musicapp.png";
import Portfoli from "../../img/Portfolio.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span></span>

      
       <Swiper

        spaceBetween={40}
         slidesPerView={2}
       
         grabCursor={true}
      loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false }}

        className="portfolio-slider"
      >
          <SwiperSlide>
          <img src={Portfoli} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Elearnig} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={Crosscart} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Template} alt="" />
        </SwiperSlide>

      
      </Swiper>



    </div>

    // <div className="container py4 px-4 justify-content-center ">
    //   <Swiper
      // freeMode={true}
      // grabCursor={true}
      // modules={[FreeMode]}
      // className="mySwiper"
      // slidesPerView={5}
      // spaceBetween={30}
    //   >
    //     <SwiperSlide>
    //       <h1>Slide 1</h1>
    //       {/* <img src={Portfoli} alt="" /> */}
    //     </SwiperSlide>

    //     <SwiperSlide>
    //       <h1>Slide 2</h1>
    //     </SwiperSlide>

    //     <SwiperSlide>
    //       <h1>Slide 3</h1>
    //     </SwiperSlide>

    //     <SwiperSlide>
    //       <h1>Slide 4</h1>
    //     </SwiperSlide>

    //     <SwiperSlide>
    //       <h1>Slide 4</h1>
    //     </SwiperSlide>


    //     <SwiperSlide>
    //       <h1>Slide 4</h1>
    //     </SwiperSlide>



    //     <SwiperSlide>
    //       <h1>Slide 4</h1>
    //     </SwiperSlide>


    //     <SwiperSlide>
    //       <h1>Slide 4</h1>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
  );
};

export default Portfolio;
