import React from 'react' 
import layout from '../ModulesStyles/Layout.module.css';  
 
function Header() { 
  return ( 
    <div className={`bgPrimary d-flex justify-content-between align-items-center ${layout.headerContainer}`}> 
        <h1 className={`secondaryColor headerFontSize ${layout.header_Title}`}> Movies </h1> 
        <div className='d-flex justify-content-between align-items-center gap-2'> 
                    <img src={require('../Assets/Img/fbIcon.png')} alt="Movies" /> 
                    <img src={require('../Assets/Img/twitterIcon.png')}  alt="Movies"/> 
                    <img src={require('../Assets/Img/instaIcon.png')} alt='Movies' /> 
        </div> 
    </div> 
  ) 
} 
 
export default Header
