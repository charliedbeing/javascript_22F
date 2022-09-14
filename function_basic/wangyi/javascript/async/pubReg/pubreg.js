var centerContainer ={}



function notifyAll(msg){
    centerContainer[msg]&&centerContainer[msg].forEach(cb => {
        cb(msg)
    });
}


function regToCenter(msg, cb){
    centerContainer[msg]= centerContainer[msg]||[]
    centerContainer[msg].push(cb)
}

function test1(){
  
    regToCenter('baozi',()=>{
        console.log('charlie: 2 kg')
    })
    regToCenter('baozi',()=>{
        console.log('Daniel: 1kg')
    })

    notifyAll(' ');
}

test1()
