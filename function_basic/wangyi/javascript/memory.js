function testMemory(){
    var memory = process.memoryUsage().heapUsed;

    console.log(memory/ 1024 /1024 + "mb")
}

var size = 30 * 1024 * 1024

// global

var arr1 = new Array(size)

testMemory();  // here must have ; to seperate ()()  and before expression to make sure ()() can be called normally


(function(){
    // normal variable 
        var arr2 = new Array(size)
        testMemory()       
        var arr3 = new Array(size)       
        testMemory()
        
})();



var arr4 = new Array(size);

testMemory()

// arr1= null
// arr2= null
// arr3= null

var arr5 = new Array(size)

testMemory()


var arr6 = new Array(size)

testMemory()