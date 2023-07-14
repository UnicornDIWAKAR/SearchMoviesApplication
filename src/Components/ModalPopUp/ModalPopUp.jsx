import React from 'react' 
import modalPopUp from '../../ModulesStyles/ModalPopUp.module.css' 
function ModalPopUp({title,onclose,children}) { 
  return ( 
     <div className={`d-flex justify-content-center align-items-center ${modalPopUp.modalPopUpOverlay}`} > 
        <div className={`d-flex flex-column justify-content-between align-items-center bgSecondary ${modalPopUp.modalPopUpContainer}`}> 
                <div className={`d-flex justify-content-between align-items-center bgPrimary w-100  p-2 ${modalPopUp.modalPopUpHeader}`}> 
                        <h1 className={`secondaryColor subHeaderFontSize ${modalPopUp.modalPopUpTitle}`}> {title}</h1> 
                        <img src={require('../../Assets/Img/closeIcon.png')} onClick={()=> onclose()} className='cursor-pointer' /> 
                </div> 
 
                <div className={`w-100 p-2 bgSecondary ${modalPopUp.modalPopUpBody}`}> 
                    { children } 
                </div> 
        </div> 
     </div> 
  ) 
} 
 
export default ModalPopUp;
 