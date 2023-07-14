import React from 'react' 
import inputField from '../../ModulesStyles/InputField.module.css' 
 
function InputField({error,name,onchange,label,Placeholder}) { 
 
    /* HandleChange */ 
    const handleChange = (event) => { 
       onchange(event.target.value,name) 
    } 
 
    return ( 
    <div className={`${inputField.inputFieldContainer}`}> 
           <div className={` d-flex justify-content-start align-items-center bgSecondary gap-1 ${error.error && inputField.errorBorder} ${inputField.inputFieldBox}`}> 
             <label htmlFor={name} className={`primaryColor ${inputField.inputFieldLabel}`}> {label} * </label> 
             <input type="text" name={name} onChange={handleChange} className={`w-100 ${inputField.inputField}`} placeholder={Placeholder} autoComplete={false} /> 
           </div> 
           {error.error  && <p className={`w-100 ${inputField.inputFieldError}`}>{error.errorMsg}</p> } 
    </div> 
  ) 
} 
 
export default InputField
