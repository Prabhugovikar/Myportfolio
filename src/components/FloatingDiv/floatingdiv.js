import React from 'react'
import './flaoting.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Floatingdiv =({img,text1,text2})=> { 
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='floatingdiv' style={{color: darkMode? 'white' : ''}}>
        <img src={img} alt='' />
        <span >
            {text1}
            <br/>
            {text2}
        </span>
    </div>
  )
}

export default Floatingdiv
