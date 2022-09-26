import {useArray, useMount} from "../utils"
import React from 'react'


export const TsReactTest =()=>{
    const persons:{name:string, age:number}[] =[
        {name:"jack",age:23},
        {name:"ma",age:23}
    ]
    const {value,clear,removeIndex,add} = useArray(persons)

    useMount(()=>{
        // console.log(value.notExist);
        // add({name:"david"})
        // removeIndex("123")
    })

    return (
        <div>
            <button onClick={()=>add({name:"john",age:22})}>add john</button>
            <button onClick={()=>removeIndex(0)}>remove 0</button>
            <button onClick={()=>clear()}>clear</button>
            {
                value.map((person,index)=>{
                    return (
                        <div key={index} style={{marginBottom:'30px'}}>
                            <span style={{color:'red'}}>{index}</span>
                            <span>{person.name}</span>
                            <span>{person.age}</span>
                        </div>
                    )
                })
            }

        </div>
    )
}