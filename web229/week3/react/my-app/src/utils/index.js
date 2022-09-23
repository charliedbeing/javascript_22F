import { useEffect,useState } from "react"


export const isFalsy = (value)=> value === 0 ? false: !value

//
export const cleanObject = (object)=>{
   const result ={}

   if(object){
    Object.keys(object).forEach(item =>{
        if(!isFalsy(object[item])){
            result[item]= object[item]
        }
       })
   }
 

   return result;
}
// 
export const useMount =(callback)=>{
    useEffect(()=>{
        callback()
    },[])
}

// export const useDebounce = (value,delay)=>{
//      let timeout=null
//      let flag = false

//      return new Promise((resolve,reject)=>{
//         if(!flag){
//             timeout = setTimeout(() => {
//                 resolve(value) 
//             }, delay);
//             flag =true;
//         }else{
//             clearTimeout(timeout)
//             timeout = setTimeout(() => {
//                 resolve(value) 
//             }, delay);
//         }         
//      })
     
// }


export const useDebounce = (value,delay)=>{

    const [debounceValue,setDebounceValue] = useState(value);

    useEffect(()=>{
        const timeout = setTimeout(()=> setDebounceValue(value),delay)
        
        return ()=>clearTimeout(timeout)

    } , [value,delay] )

    return debounceValue
}

