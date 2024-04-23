import React from 'react'
import "./Work.css"
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
export default function Works() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='works'>
           <div className='awesome'>
         <span style={{color: darkMode? 'white' : ''}}>Works For All This</span>
         <span  >Brands & Clients</span>
         <span style={{color: darkMode? 'white' : ''}}>
            Hello this is my services which i created 
            <br/>
            Its dummy text of painting
            <br/>
            this is dummy text od louparsemum 
            <br/>
            dummy text is showm my website 
         </span>
         <button className='button s-button'>Hire me </button>
         <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* Right side  */}

        <div className='w-right'>
            <div className='w-manCircle'>
                <div className='w-secCircle' >
                    <img src={Upwork} alt='' />
                </div>
                <div className='w-secCircle' >
                    <img src={Fiverr} alt='' />
                </div>
                <div className='w-secCircle'>
                    <img src={Amazon} alt='' />
                </div>{''}
                <div className='w-secCircle'>
                    <img src={Shopify} alt='' />
                </div>
                <div className='w-secCircle' >
                    <img src={Facebook} alt='' />
                </div>
            </div>
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}
