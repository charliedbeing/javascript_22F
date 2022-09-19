const express = require('express')
const path = require('path')
const parseHeaders = require('parse-headers')
const crypto = require('crypto')

const app = express()
const port = 3000


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'handshake.html'))

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const net = require('net')

const server = net.createServer()

server.on('connection', socket=>{
    socket.on('data',(buffer)=>{
        const str = buffer.toString()
        const headers = parseHeaders(str)
        console.log(headers)
        const sha1 = crypto.createHash('sha1')
        // 258EAFA5-E914-47DA-95CA-C5AB0DC85B11
        sha1.update(headers['sec-websocket-key']+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
        const acceptKey = sha1.digest('base64')

        const response =`HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade 
Sec-Websocket-Accept:${acceptKey}


        `
        socket.write(response)



    })  
})

server.listen(8080)


