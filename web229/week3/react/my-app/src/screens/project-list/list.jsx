import React from 'react'

export const List =({list, users})=>{
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