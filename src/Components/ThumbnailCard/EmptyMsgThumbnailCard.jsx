import React from 'react' 
import emptyThumbnail from '../../ModulesStyles/ThumbnailCard.module.css'; 
 
function EmptyMsgThumbnailCard({message}) { 
  return ( 
     
    <div className={`d-flex flex-column justify-content-center align-items-center ${emptyThumbnail.emptyThumbnailContainer}`}> 
        <img src={require("../../Assets/Img/RefreshIcon.png")} alt="" /> 
        <p className={`subHeaderFontSize primaryColor ${emptyThumbnail.emptyThumbnail_content}`}>{message}</p> 
    </div> 
  ) 
} 
 
export default EmptyMsgThumbnailCard
