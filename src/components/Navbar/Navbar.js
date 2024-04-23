import React from 'react'
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
export default function Navbar() {
  return (
    <div className='n-wrapper' >
        <div className='n-left'>
            <div className='n-name'>Prabhu</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}
