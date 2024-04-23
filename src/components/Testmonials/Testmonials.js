import React from 'react'
import "./Testmonials.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {Pagination} from 'swiper';
// import 'swiper/css'; 
// import 'swiper/css/pagination'; 
export default function Testmonials() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const clients = [
        {
            img : profilePic1,
            review :
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"
        },

        {
            img : profilePic2,
            review :
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"
        },
        {
            img : profilePic3,
            review :
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"
        },
        {
            img : profilePic4,
            review :
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"
        }


    ]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Clints Always get</span>
            <span>Excepetional Work</span>
            <span>From me...</span>
            <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background:"skyblue"}}></div>
        </div>
        {/* swiper */}
        <Swiper 
        // modules={[Pagination]}
        // slidesPerView={1}
        // pagination = {{clickable:true}}
        >
            {clients.map((client,index)=>{
                return (

                    <SwiperSlide key={index}>
                        <div className='testimonial' >
                        <img src={client.img} alt='' />
                        <span style={{color:darkMode?'white':''}}>{client.review}</span>
                        </div>
                        
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}
