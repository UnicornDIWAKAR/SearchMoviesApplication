import React from 'react' 
import layout from '../ModulesStyles/Layout.module.css';  
 
function Footer() { 
  return ( 
     <div className={`bgSecondary d-flex flex-column justify-content-center align-items-center ${layout.footerContainer}`}> 
                    <p className={`contentFontSize ${layout.footer_Content}`}> Movies @ 2023 | All rights Reversed </p> 
     </div> 
  ) 
} 
 
export default Footer
