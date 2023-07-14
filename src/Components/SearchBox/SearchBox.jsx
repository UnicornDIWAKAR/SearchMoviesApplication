import React, { useEffect, useState } from 'react' 
import search from '../../ModulesStyles/SearchBox.module.css'; 
import button from '../../ModulesStyles/Button.module.css' 
  
export default function SearchBox({name,onchange,valueReset}) { 
     
    const [ fieldValue , setFieldValue ] = useState(""); 
 
    useEffect(()=>{ 
          setFieldValue(""); 
    },[valueReset]) 
 
    const handleInputChange = event => setFieldValue(event.target.value); 
 
    return ( 
    <div className='d-flex justify-content-start gap-1 align-items-center'> 
        <div className={`d-flex justify-content-between align-items-center ${search.fieldContainer}`}> 
                   <img  src={require("../../Assets/Img/search30.png")} className={`${search.icon}`}/> 
                   <input type="text" className={` subHeaderFontSize ${search.field}`} placeholder='search titles' name={name} onChange={handleInputChange} value={fieldValue} /> 
        </div> 
        <button onClick={() => onchange(fieldValue)}  className={`cursor-pointer d-flex justify-content-center align-items-center bgPrimary secondaryColor contentFontSize ${button.buttonContainer}`} type={'button'} disabled={fieldValue ? false : true } > 
                       Search 
                    </button> 
    </div> 
  ) 
}
