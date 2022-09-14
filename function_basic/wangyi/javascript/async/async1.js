function asy1(){
    for(var i=0;i<5;i++){
        setTimeout(()=>{
           
            try {
                throw(new Error(Date.now()))
            } catch (error) {
                console.log(Date.now())
            }
            
            console.log(i)
        },0)

        for(var j=0;j<1000000;j++){
            var temp = new Array(5*1024)
        }
        console.log('finished...')
        console.log(Date.now())
    }
    console.log(i)
}


asy1()

