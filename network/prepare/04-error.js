const express = require('express')
const app = express()
const port = 3000

app.get('/bbc',

    (req, res) =>{
        res.sendStatus(401)
    } 
 
 )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))