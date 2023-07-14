import React, { useEffect, useState } from 'react' 
import moviePoster from '../../ModulesStyles/MoviePoster.module.css' 
import useResource from '../../Components/Resource/useResource'; 
import { configureQueryParams } from '../../Components/Utilis/Utlis';
 
function MoviePoster({imbdId,onchange}) { 
 
  const [ lookupData, setLookupData ] = useState({}); 
  const [ isloader , setIsloader ] = useState(false);
  const [ errorData , setErrorData ] = useState(false); 
  const { getApiCall } = useResource(); // Api Hook 
  
    /* Whenever the Id is changes render the Api call Again and set the lookup and isLoader */
    useEffect(()=>{ 
              setIsloader((prev) => true); 
                getApiCall(configureQueryParams("i",imbdId)).then( 
                    (res) => 
                    { 
                        if(res.data.Response.toLowerCase() != "false") { 
                          setLookupData((prev) => res.data); 
                          setIsloader((prev)=> false); 
                          setErrorData((prev) => false); 
                        } else { 
                          setIsloader((prev)=> false); 
                          setErrorData((prev) => true);
                        }     
                    }, 
                    (error)=>{ 
                      setErrorData((prev) => true);
                    } 
                ) 
    },[imbdId]); 
   
  return ( 
    <> 
      { isloader  ?
       <div className='h-100 d-flex flex-column justify-content-center align-items-center gap-2 w-100 bgSecondary'>
             <img src={require("../../Assets/Img/Loading.gif")} /> 
             <p className='primaryColor headerFontSize'> Loading </p>
       </div> 
       :
       <div className={`${moviePoster.moviePosterContainer}`} style={{backgroundImage:`url(${lookupData.Poster !== "N/A" ? lookupData.Poster : "../../Assets/Img/No_Poster.png"})`}} > 
       <div className={`d-flex flex-column justify-content-between align-items-start ${moviePoster.moviePosterOverlay}`} >  
     
         
          {/* Header */} 
          <div className='d-flex justify-content-between align-items-center p-2 w-100'>   
             <img src={require("../../Assets/Img/icons8-arrow-50.png")} onClick={() => onchange("",false)} className='cursor-pointer'/> 
             <h1 className={`secondaryColor ${moviePoster.moviePosterTitle}`}> { !errorData ? lookupData.Title : "Coming Soon" } </h1> 
             <div></div> 
          </div> 

          { !errorData && 
          <> 
          {/* Body */} 
          <div className='d-flex justify-content-center align-items-center h-100 w-100 p-2 gap-2'> 
              <img src={lookupData.Poster !== "N/A" ? lookupData.Poster : require("../../Assets/Img/No_Poster.png") } alt='Movies' className={`${moviePoster.moviePosterImg}`}/> 
                 <div className={`text-start ${moviePoster.moviePosterContentContainer}`}> 
                    <div className='p-2'> 
                       <h4 className={`secondaryColor ${moviePoster.moviePosterContent}`}> {lookupData.Actors} </h4> 
                       <h4 className={`secondaryColor ${moviePoster.moviePosterContent}`}> {lookupData.Genre} | {lookupData.Language} | {lookupData.Country}</h4> 
                       <h4 className={`secondaryColor ${moviePoster.moviePosterContent}`}> {lookupData.Year} </h4> 
                       <h4 className={`secondaryColor ${moviePoster.moviePosterContent}`}> {lookupData.Released} </h4> 
                    </div> 
                   <p className={`secondaryColor p-2 ${moviePoster.moviePosterContentPlot}`}> {lookupData.Plot} </p> 
                   <div className={`d-flex justify-content-start align-items-center p-2 gap-2`}> 
                                           <p className={`secondaryColor ${moviePoster.moviePosterContent}`}> IMDb </p> 
                                           <img src={require("../../Assets/Img/StarIcon_15.png")} alt='Movies' className={`${moviePoster.moviePosterIcon}`} /> 
                                           <p className={`secondaryColor ${moviePoster.moviePosterContent}`}> {lookupData.imdbRating} </p> 
                                   </div> 
               </div> 
           </div> 
          </> 
        
      } 
        
     </div> 
       
        </div>
       } 
    </> 
  ) 
} 
 
export default MoviePoster;
