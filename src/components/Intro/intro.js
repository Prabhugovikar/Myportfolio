import React from 'react'
import './into.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import Floatingdiv from '../FloatingDiv/floatingdiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
// import  motion  from "framer-motion"
export default function Intro() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color : darkMode? 'white' :''}}>Hey ! Am</span>
                <span>Prabhu Govikar</span>
                <span style={{color : darkMode? 'white' :''}}>Frontend Devloper With 
                    1 Year of Experience in Web 
                    Development, Producting the Quality Work
                </span>
            </div>
            <button className='button i-button'>Hire Me</button>
            <div className='i-icons'>
                <a href=''>
                <img src={Github} alt='' />
                </a>
                <a>
                <img src={LinkedIn} alt='' />
                </a>
               <a>
               <img src={Instagram} alt='' />
               </a>
            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={boy} alt=''/>
            <img src={glassesimoji} alt='' />
            <div style={{top:'-4%',left:'68%'}}>
                <Floatingdiv img={Crown} text1="Web" text2="Devloper"/>
            </div>
            <div style={{top:'18rem',left:'0rem'}}>
                <Floatingdiv img={thumbup} text1="Best Desgin" text2='Award' />
            </div>
            {/* blur divs */}
            <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}
