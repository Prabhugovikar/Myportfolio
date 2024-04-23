import React from 'react'
import "./Experience.css"
import { useContext } from 'react'
import { themeContext } from '../../Context'
export default function Experience() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience'>
        <div className='achivement' style={{color:darkMode? 'white':''}} >
            <div className='circle'>1+</div>
              <span>years</span>
              <span>Experience</span>
        </div>
        <div className='achivement'>
            <div className='circle'>5+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className='achivement'>
            <div className='circle'>1</div>
            <span>Compaines</span>
            <span>Work</span>
        </div>
    </div>
  )
}
