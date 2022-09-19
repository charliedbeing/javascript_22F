const express = require('express')
const path = require('path')
const fs= require('fs')
const fileUpload= require('express-fileupload')
const bodyParser = require('body-parser')
const { fstat } = require('fs')

const app = express()

app.get("/submit",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"submit.html"))
})

app.get("/submit64",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"submit64.html"))
})

app.get("/submit_formdata",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"submit_formdata.html"))
})

app.post('/submit',fileUpload(),(req,res)=>{
    

    console.log(req.files)
    req.files.file.mv(path.resolve(__dirname,'upload/1.sql'))
    res.sendStatus(201);

})

app.post('/submit64',bodyParser.json(),(req,res)=>{
   
    const buffer = new Buffer.from(req.body.data, 'base64')
    
    fs.writeFileSync(
        path.resolve(__dirname,"upload/2.jpg"), buffer
    )
   
        res.send('ok')
})

app.post('/submit_formdata',fileUpload(),(req,res)=>{
    
    console.log(req.files)
    req.files.file.mv(path.resolve(__dirname,'upload/3.jpg'))
    res.sendStatus(201);
})



app.listen(3000)

