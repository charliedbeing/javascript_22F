import React, { FormEvent } from 'react'

// interface Base{
//     id:number
// }
// interface Advance extends Base{
//     name:string
// }

// const test = (p:Base)=>{}

// // 鸭子类型： 面向接口编程，而不是面向对象编程
// // duck typing
// const a:Advance = {id:1, name:'charlie'}

// const a1 = {id:1, name:'charlie'}

// //since a and a1 are different type, but they have same interface ,
// test(a)

// test(a1)

let apiUrl = process.env.REACT_APP_API_URL

// console.log(process.env)

apiUrl='http://localhost:3001'

const login=(param:{username:string, password:string})=>{

    fetch(`${apiUrl}/login?`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(param)
    }).then(async response=>{
        if(response.ok){
           
        }
    })
}

const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value

    login({username,password})
}
export const LoginScreen =()=>{
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">User Name:</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id={'password'} />
        </div>
        <button type={"submit"}>Login</button>
    </form>
}