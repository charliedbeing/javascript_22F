const net = require('net');

const response =`
HTTP/1.1 200 OK
Data: Thu 15 Sep 2022 09:15:00 GMT
Content-Type: text/plain
Connection: Closed

Hello world, Charlie Ding
`

const server = net.createServer(socket =>{
    socket.end(response)
})

server.listen(80,()=>{

})


