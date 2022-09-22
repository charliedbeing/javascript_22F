const fs = require('fs')
const http = require('http')
const {connect} = require('http2')
const {Console} = require('console')
const hostname ='127.0.0.1'
const port =3000

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"Content-type":"text/html"})

    fs.readFile("index.html",function(error,data){
        if(error){
            res.writeHead(404)
            res.write('error: file not found')
        }else{
            console.log(`reading html`)
            res.write(data)
        }
        res.end()
    })
})

server.listen(port,hostname,(error)=>{
    if(error){
        console.log("something went wrong" + error)
    }else{
        console.log(`Server running at http://${hostname}:${port}`)
    }
})