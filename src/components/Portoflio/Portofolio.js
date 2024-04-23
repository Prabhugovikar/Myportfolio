import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'
import "./portofolio.css"
import { useContext } from 'react';
import { themeContext } from '../../Context';
export default function Portofolio() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Project</span>
        <span>Portoflio</span>

        {/* slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
              <img src={Sidebar} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommerce} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Hoc} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MusicApp} alt='' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
