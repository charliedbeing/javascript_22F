import { useEffect,useState } from "react"


export const isFalsy = (value: any)=> value === 0 ? false: !value

//
export const cleanObject = (object: object)=>{
   const result ={}

   if(object){
    Object.keys(object).forEach(item =>{

        //@ts-ignore
        if(!isFalsy(object[item])){
            //@ts-ignore
            result[item]= object[item]
        }
       })
   }
 

   return result;
}
// 
export const useMount =(callback:()=>void )=>{
    useEffect(()=>{
        callback()
    },[])
}

export const useDebounce = (value: any,delay?:number)=>{

    const [debounceValue,setDebounceValue] = useState(value);

    useEffect(()=>{
        
        const timeout = setTimeout(()=> setDebounceValue(value),delay)

        return ()=>clearTimeout(timeout)

    } , [value,delay] )

    return debounceValue
}

