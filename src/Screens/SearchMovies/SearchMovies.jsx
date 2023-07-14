import { useEffect, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { AddObjectsinArray, MergeArrays, configureQueryParams, searchfilterByKey } from "../../Components/Utilis/Utlis";
import useResource from "../../Components/Resource/useResource";
import EmptyMsgThumbnailCard from '../../Components/ThumbnailCard/EmptyMsgThumbnailCard';
import ThumbnailCard from '../../Components/ThumbnailCard/ThumbnailCard';
import button from '../../ModulesStyles/Button.module.css';
import searchMovies from '../../ModulesStyles/SearchMovies.module.css'; 

export default function SearchMovies({oncardSelection,onAddMovies,addMoviesList}){
 
    const { getApiCall } = useResource(); // Api Hook 
    const [ searchValue , setSearchValue ] = useState(); // search Value 
    const [ addMoviesLookUp , setAddMoviesLookUp ] = useState([]);  // lookUp from AddMovies List
    const [ moviesLookUp , setMoviesLookUp ] = useState([]); // Individual Movies object in array
    const [ thumnailList , setThumnailList  ] = useState([]);  // final list merge
    const [ errorMessage , setErrorMessage ] = useState(""); // Error 

     /* Trigger the Api Call whenever the searchvalue change */ 
     useEffect(()=>{ 
         getLookUpResults();
    },[searchValue,addMoviesList]) 


    const getLookUpResults = () => {
        if(searchValue){ 
             
            /* Api Call Lookup */
            getApiCall(configureQueryParams("s",searchValue)).then( 
             (res)=>{ 
                    let result = res.data;
                    if(result.Response.toLowerCase() != "false") { 
                                setMoviesLookUp((prev) => result.Search);
                    } else {
                                setMoviesLookUp(() => []); // Movies List  
                    }
                }, 
                (error) => { 
                          setErrorMessage((prev) => error.message) 
                } )  

             /* Filtered SearchLookUp from the stored AddMovies List */ 
             setAddMoviesLookUp ((prev) => searchfilterByKey(addMoviesList,"Title",searchValue)); 
      } 
    }
     
    /* Trigger whenever the moviesLookUp and searchAddMovies changes */ 
    useEffect(()=>{ 
         if(moviesLookUp.length > 0 || addMoviesLookUp.length > 0 ){
            setThumnailList((prev) => MergeArrays(moviesLookUp,addMoviesLookUp));
         } else {
            setThumnailList((prev) => []);
         }
    },[moviesLookUp,addMoviesLookUp]) 
 
 
       /* Handle Search */ 
       const handleSearch = (value) => setSearchValue((prev) => value); 

       /* Handle AddMovies */ 
       const handleAddMovieModal = () =>  onAddMovies(true);
       
       /* Handle Card Selection */ 
       const handleCardSelection = (imbdid) => oncardSelection({id:imbdid}); 


    return (
       
               <section className={`bgsecondary d-flex flex-column ${searchMovies.searchMoviesContainer}`}> 
                        {/* SearchBox & Add Movies*/} 
                        <div className={`d-flex justify-content-between align-items-center`}> 
                            <SearchBox name={'contentSearchBox'} onchange={handleSearch} />  
                            <button  className={`d-flex justify-content-center align-items-center bgPrimary secondaryColor contentFontSize ${button.buttonContainer}`} type={'button'} onClick={handleAddMovieModal}> 
                                + Add Movies 
                            </button> 
                        </div> 

                         {thumnailList && 
                             <div className={`d-flex  ${ thumnailList.length <= 0 ? "justify-content-center align-items-center h-100" : "justify-content-between align-items-start flex-wrap"} ${searchMovies.searchMovies}`}> 
                             { searchValue ?  
                              <> 
                              { thumnailList.length > 0 ? thumnailList.map((item)=> <ThumbnailCard lookupData={item} onchange={handleCardSelection} />   ) : <EmptyMsgThumbnailCard message={  errorMessage ? errorMessage :"Oops! No movies has been found."}/> } 
                              </>  
                              :  
                              <EmptyMsgThumbnailCard message={"Keep digging buddy."}/>
                              } 
                              </div>
                           } 
                           
                </section>
 
    )
}