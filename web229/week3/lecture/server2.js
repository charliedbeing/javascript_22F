const connect = require('connect')
const app = connect()

function helloworld(req,res,next){
    res.setHeader("Content-type","text/plain");
    res.end("hello world")
}

function logger(req,res,next){
    console.log('dddd')
    console.log(req.method,req.url);
    next()
}

function goodbey(req,res,next){
    res.setHeader("Content-type","text/plain");
    res.end('bye')
}

app.use(logger)
app.use('/hello',helloworld)
app.use('/goodbye',goodbey)
app.listen(3000)
