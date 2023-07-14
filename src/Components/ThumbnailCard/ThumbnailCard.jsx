import React, { useContext, useEffect, useState } from 'react' 
import thumbnail from '../../ModulesStyles/ThumbnailCard.module.css'; 
import useResource from '../Resource/useResource'; 
import { MoviesContext } from '../../Layout/Content'; 
import { configureQueryParams } from '../Utilis/Utlis'; 
 
 
function ThumbnailCard({onchange,lookupData}) { 
  
    const handleChange = () => { 
        onchange(lookupData.imdbID,true) 
    } 
 
 
  return ( 
    <div className={`${thumbnail.thumbnailContainer}`} onClick={handleChange} style={{backgroundImage:`url(${lookupData.Poster !== "N/A" ? lookupData.Poster : require("../../Assets/Img/No_Poster.png")})`}}> 
 
           <div className={`d-flex flex-column justify-content-end align-items-start  ${thumbnail.thumbnailBody}`}> 
                      
                                     <div className={`${thumbnail.thumbnailContent}`}>
                                        <h1 className={`secondaryColor  ${thumbnail.thumbnailTitle}`}> {lookupData.Title} </h1> 
                                        <h6 className={`secondaryColor  ${thumbnail.thumbnailSubTitle}`}>  {lookupData.Type} | {lookupData.Year} </h6> 
                                     </div>

            </div>     
  
    </div> 
  ) 
} 
 
export default ThumbnailCard
