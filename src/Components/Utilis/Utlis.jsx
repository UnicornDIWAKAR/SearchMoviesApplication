/* Utilis File use to store reusable methods and its params for Application */

    /* Add Object in Array */
  export  const AddObjectsinArray = (Array,object) => {
        let newArray = [...Array];
        newArray.push(object);
        return newArray;
    }


    /* Query Parms COnfigure */
      export  const configureQueryParams = (parmsName,parmsValue) => {
            let configObj= {
                params:{ [parmsName]:parmsValue }
            };
            return configObj;
        }

        /* Merge Array */
    export const MergeArrays = (array1,array2) => {
          let newArray = [...array1,...array2];
          return newArray;
    }

    /* Filter the Object By key */
   export  const searchfilterByKey = (array,keyName,keyValue) => {
          let newArray = array.filter((item) => {
             if(item[keyName].includes(keyValue)) {
                return item
             }
          })

          return newArray;
    }