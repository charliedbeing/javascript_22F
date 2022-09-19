const fetch = require('node-fetch')




function requrest(url){
    let resolved = false
    let t =1

    return new Promise((resolve)=>{

        function doFetch(){
            if(resolved || t>512){
                return
            }
            fetch(url).then(resp=>{
                return resp.text()
            })
            .then(data=>{
                if(!resolved){
                    console.log(t)
                    resolve(data)
                    resolved = true
                }
            })

            setTimeout(()=>{
                doFetch()
                t *= 2
            },t * 100)
        }

       doFetch()

    })
}

// requrest('https://www.163.com/').then(data=>{
//     console.log(data.length) 
// }) 

function wait(ms=1000,fn){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            var temp =fn()
            resolve(temp)
        } ,ms)
    })
}


function request2(url){
    return Promise.race([
        fetch(url),
        wait(100,()=>fetch(url)),
        wait(200,()=>fetch(url)),
        wait(400,()=>fetch(url)),
        wait(800,()=>fetch(url)),
        wait(8000,()=>fetch(url)),
    ]);
}

function request3(url) {

    
        return Promise.race([
            fetch(url),
            wait(100,()=>fetch(url)),
            wait(200,()=>fetch(url)),
            wait(400,()=>fetch(url)),
            wait(800,()=>fetch(url)),
            wait(8000,()=>fetch(url)),
        ]);
    
    
  
}

// request2('https://www.163.com/').then(data=>{
//     console.log(data.length) 
// })


var test = request3('https://www.google.com/').then(data=>{
    console.log(data)
})



