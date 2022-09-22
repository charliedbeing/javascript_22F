import express from 'express'
import data from "./data/mock.json" assert {type:'json'};
import bodyParser from 'body-parser';

const app = express()

const PORT = 3000


app.get('/person',(req,res)=>{

    res.send(data[1])
})

app.use(bodyParser.json())

app.post('/person',bodyParser.json(),(req,res)=>{

    var p= req.body
    data.push(p)
    res.send(`create one person named ${p.first_name}`)
})

app.put('/person/:id',(req,res)=>{

    console.log(req.params.id)

    var p = req.body

    var id=req.params.id

    console.log(p.first_name)

    data[id]['phone']=123;
    data[id]['first_name']= p.first_name;
    console.log(data[id])



    res.send(JSON.stringify(data[id]))
})

app.delete('/person/:id',(req,res)=>{
    const id= req.params.id

    console.log(data.length)
    data.splice(id,1)

    console.log(data.length)

    res.send(`delete ${id}`)
})



app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}!`)

})

