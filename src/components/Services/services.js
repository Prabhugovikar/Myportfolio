import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
export default function Services() {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        {/* leftside */}
        <div className='awesome'>
         <span style={{color: darkMode? "white" : ''}}>My Awesome</span>
         <span>Services</span>
         <span style={{color: darkMode? "white" : ''}}>
            Hello this is my services which i created 
            <br/>
            Its dummy text of painting
         </span>
         <a href='' download>
         <button className='button s-button'>Download CV</button>
         </a>
        
         <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* rightside */}
        <div className='cards'>
           <div style={{marginLeft:'14rem'}}>
              <Card 
              emoji={HeartEmoji}
              heading={'Desgin'}
              detail ={'Figma, Sketch, Adobe,Adobe Xd'}
              />
           </div>
           {/* second card */}
           <div style={{top:'12rem',left:'-4rem'}}>
            <Card
             emoji={Glasses}
             heading={"Devloper"}
             detail={"HTML, CSS , JAVASCRIPT, RECAT JS , GITHUB"} 
             />
           </div>
           {/* third card */}
           <div style={{top:"19rem",left:'12rem'}}>
            <Card 
            emoji={Humble}
            heading={'UI/UX'}
            detail={"Its degining towders the text "}
            />
           </div>
           <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}
