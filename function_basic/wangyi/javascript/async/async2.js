// Global context
var globalVarable1 = 10; // synchronized code

// Macro task  ->MacroTaskQueue   * asynchronized code
setTimeout(function(){
    console.log(1);
})

new Promise((resolve,reject)=>{
    console.log(2);  // synchronized code
    resolve(3)
}).then(
    //Micro task  ->MicroTaskQueue  *asynchronized code
    function(val){
    console.log(val)
})

