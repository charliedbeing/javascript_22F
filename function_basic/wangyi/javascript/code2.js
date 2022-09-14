function testMemory(){
    var memory = process.memoryUsage().heapUsed;

    console.log(memory/ 1024 /1024 + "mb")
}


var fn = (function(){
    var arr =[]

    return function(){
        
        if(arr.length>4){
            arr.shift();
        }

        arr.push(new Array(30* 1024 * 1024))
        testMemory()
    }
})()

fn()
fn()
fn()
fn()
fn()

fn=null

testMemory()


