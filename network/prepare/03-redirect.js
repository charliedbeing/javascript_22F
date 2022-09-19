const express = require('express')

const app = express()

app.get('/301', (req,res)=>{

    res.redirect(301,'/def')
})


app.get('/302', (req,res)=>{

    res.redirect(302,'/def')
})

app.get('/303', (req,res)=>{

    res.redirect(303,'/def')
})

app.post('/303', (req,res)=>{

    res.redirect(303,'/def')
})




app.get('/def',(req,res)=>{
    res.send('Hello from def(Get)')
})

app.post('/def',(req,res)=>{
    res.send('Hello from def(Post)')
})

app.listen(3000,(req,res)=>{

})

