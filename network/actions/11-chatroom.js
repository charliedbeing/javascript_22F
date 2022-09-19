const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('static'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"chatroom.html"))
})

app.listen(3000)

let server = app.listen(8080)

const io = require('socket.io')(server,{cors:true})

const users= new Map()

function broadcast(type,message,sender){
    for(let socket of users.keys()){
        socket.send({type,message,sender})
    }
}

io.on('connect', socket=>{
    //{type,message}
    // linux epoll i/o wait
    socket.on('message',data => {
        switch(data.type){
            case 'LOGIN':
                users.set(socket,{name:data.name})
                broadcast('LOGIN',`${data.name} join chatroom`)
                break
            case 'CHAT':
                const user = users.get(socket)
                broadcast('CHAT',data.message,user.name)
                break
        }
    })
})
