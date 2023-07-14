import React, { createContext, useContext, useEffect, useState } from 'react' 
import layout from '../ModulesStyles/Layout.module.css';  
import button from '../ModulesStyles/Button.module.css' 
import MoviePoster from '../Screens/MoviePoster/MoviePoster'; 
import ModalPopUp from '../Components/ModalPopUp/ModalPopUp'; 
import InputField from '../Components/InputField/InputField'; 
import MovieObject from '../AddMovies.json'; 
import { AddObjectsinArray, MergeArrays, configureQueryParams, searchfilterByKey } from '../Components/Utilis/Utlis'; 
import SearchMovies from '../Screens/SearchMovies/SearchMovies';
 
 
export default function Content() { 
    const [ addMovies , setAddMovies ] = useState([]); // added Movies DTO in Form Submits
    const [ modalToggle , setModalToggle ] = useState(false); // Modal 
    const [ fieldValue , setFieldValue ] = useState({values:{title:""},error:false,errorMsg:""}); // Field Values Modal
    const [ cardSelection , setCardSelection ] = useState({id:"",selection:false});  // thumnailCard Selection

    /* Handle Form Submition */ 
    const handleFormSubmit = () =>{ 
         setModalToggle((prev) => false); // Close the Modal 
         setAddMovies((prev) => AddObjectsinArray(prev,{...MovieObject, "Title":fieldValue.values.title}));  
    } 
 
   /* Handle Field Change */ 
    const handleFieldChange = (value,name) =>{ 
      if(value.length > 0 ){ 
            setFieldValue((prev) =>
        ({values:{title:value+"- Newly Added"},error:false,errorMsg:""}));   
      }  else { 
           setFieldValue((prev) => ({values:{title:""},error:true,errorMsg:"The value can't be empty"})); 
      } 
    } 
 
    /* Handle AddMovies */ 
    const handleAddMovieModal = (value) => setModalToggle((prev) => value);
    
    /* Handle Card Selection */ 
    const handleCardSelection = (obj) => setCardSelection((prev)=> ({id:obj['id'],selection:!prev.selection})); 
 
 
  return ( 
  <>

    {/* Screens */}
    { cardSelection.selection ? 
      <MoviePoster imbdId={cardSelection.id} onchange={handleCardSelection}/> 
        : 
       <SearchMovies oncardSelection={handleCardSelection} onAddMovies={handleAddMovieModal} addMoviesList={addMovies} />
    }


    {/* Add Movies Modal */} 
    { modalToggle &&  
                        <ModalPopUp title={"Add Movies"} onclose={handleAddMovieModal}>  
 
                                    <form action=""> 
                                        <InputField error={fieldValue} name={"Title"} label={"Title"} onchange={handleFieldChange} Placeholder={"Avatar"} /> 
                                     
                                        {/* Action */} 
                                        <div className='text-end w-100'>    
                                                <button  className={`text-center bgPrimary secondaryColor contentFontSize ${button.buttonContainer}`} type={'button'} onClick={handleFormSubmit} disabled={fieldValue.values.title.length > 0 ? false : true}> 
                                                Submit 
                                                </button> 
                                        </div> 
 
                                    </form> 
                                    
 
                        </ModalPopUp>  
    } 

  </>
                                  
                  
                
                        
                    
  ) 
} 
 
 