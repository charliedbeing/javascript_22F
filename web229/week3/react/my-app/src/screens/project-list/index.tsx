import { List } from "./list"
import { SearchPannel } from "./search-panel"
import { useEffect, useState } from "react"
import React from 'react'
import { cleanObject } from "../../utils"
// import qs from 'qs'
import * as qs from "qs";

import { useMount ,useDebounce } from '../../utils/index'

let apiUrl = process.env.REACT_APP_API_URL

// console.log(process.env)

apiUrl='http://localhost:3001'

export const ProjectListScreen =()=>{

    const [param,setParam]= useState({
        name:'',
        personId:''
    })

    const debounceParam = useDebounce(param,400)
    
    const [users,setUsers] = useState([])

    const [list,setList] = useState([])

    useEffect(()=>{
       fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response=>{
           if(response.ok){
               setList(await response.json())
           }
       })
    },[debounceParam])


    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPannel param={param} users={users} setParam={setParam}/>
        <List users={users}  list={list}/>
    </div>
}