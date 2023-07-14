import axios from 'axios'; 
import { useState } from 'react';
 
const apiUrl = "http://www.omdbapi.com/?&apikey=d3a41f28"; // UrL 
 
export default function useResource() { 
  
    const [ isLoader , setIsLoader ] = useState(false);
    // Get Api 
    const getApi = (config)=>{ 
         
        let fetchPromise = new Promise(function(onSuccess,onError){ 
                try { 
                       setIsLoader((prev) => !prev);
                     
                        axios.get(apiUrl,config).then((res)=>{ 
                            onSuccess(res);
                            setIsLoader((prev) => !prev);
                        }).catch((error) => { 
                            setIsLoader((prev) => !prev);
                        }) 
                } catch (error) { 
                    onError(error) 
                } 
        }) 
        return fetchPromise; 
         
    } 
  return {  
     getApiCall : getApi, 
  } 
}
