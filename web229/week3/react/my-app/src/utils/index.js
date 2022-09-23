export const isFalsy = (value)=> value === 0 ? false: !value

//
export const cleanObject = (object)=>{
   const result ={}
   Object.keys(object).forEach(item =>{
    if(!isFalsy(object[item])){
        result[item]= object[item]
    }
   })

   return result;
}