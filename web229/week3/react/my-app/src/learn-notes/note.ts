export{}

// import {useState}from 'react'

// let a:number =1;
// let b:string ='dzg'
// let c:boolean = false
// let e:bignit =10000
// let f:symbol 
// let g:null
// let h:undefined
// let o:object = {name:'dzg'}

// // tuple
// const [users,setUsers] = useState([])

// // enum
// enum Color{
//     Red,
//     Green
// }
// let c:Color = Color.Green

// //11 null and undefined  are value, as same time, they are type. 
// let u:undefined = undefined
// let w:null= null

// // 12 unknown  when you want to use any , think carefully, do you want to use unknown insteaded.
// // unknown is strict any 

// const isFalsy = (value:any)=>{
//     console.log(value.maynotExist)
//     return value === 0 ? true: !value

// }

// const isFalsy2 = (value:unknown)=>{
//     // console.log(value.maynotExist)  //compile will tell error,  unknown is strict any 
//     return value === 0 ? true: !value

// }

// isFalsy2(null)
// isFalsy(undefined)
// isFalsy(1)
// isFalsy({})
// isFalsy([])


// // 13.never , here func return value type is never
// const func =()=>{
//     throw new Error('error')
// }

// // 14 interface

// interface User{
//     id: number
// }

// const u:User = {id:100}

// // ts can auto referering 
// let aa =1

// function add(a:number, b:number){
//     return a+b
// }

// // .d.ts
// /**
//  * js file + .d.ts file  = ts file
//  * 
//  */