import React from 'react'
import { User } from './search-panel'

interface Project{
    id:string,
    name:string,
    personId:string,
    pin:boolean,
    organization:string
}
interface ListProps{
    list:Project[],
    users:User[]
}

export const List =({list, users}:ListProps)=>{
    return <table>
        <thead>
        <tr>
            <th>名字</th>
            <th>负责人</th>
        </tr>
        </thead>
        <tbody>
            {
                list.map(product =>
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{users.find(user => user.id === product.personId)?.name || 'unknown'}</td>
                    </tr>)
            }
        </tbody>
        
    </table>
}