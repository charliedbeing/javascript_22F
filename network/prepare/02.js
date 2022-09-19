const express = require('express')

const app = express()

app.get('/greetings',(req,res)=>{
    res.send('Hi!')
})




app.post('/product',(req,res)=>{

    const contentType =req.headers['content-type']
    
     // base on tcp ,if data is large, then it need to be spite many times to translate the whole data

    let requestText ="";
    let body =null

    req.on('data',(buffer)=>{
        // 8bit - byte
        //console.log(buffer.constructor) // function Buffer
        requestText += buffer.toString('utf-8');
        console.log(buffer.toString('utf-8').length)
    })
 
    req.on('end',()=>{
        switch(contentType){
            case 'application/json':
                body = JSON.parse(requestText)
                console.log(body)
                res.set('Content-type','application/json')
                res.status(201).send(JSON.stringify({success:1}))
                break
        }

    })

})

app.put('/product/:id',(req,res)=>{
    console.log(req.params.id)

    res.send(204)
})

app.del('/product/:id',(req,res)=>{
    console.log(req.params.id)

    res.send(204)
})

app.listen(3000,()=>{

})