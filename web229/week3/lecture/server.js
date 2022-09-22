const http= require('http')
const port =3000
const host='127.0.0.1'

const server = http.createServer((req,res)=>{
    res.statusCode =200
    res.setHeader("Content-type","text/plain")
    res.end("Welcome to the charlie's Server")
})

server.listen(port,host,()=>{
    console.log('Server is listening at ' + port)
})