function greet(name, cb){
    console.log("hello world");

    cb(name);
}


function sayName(name){
    console.log("hello world " + name);
}

setTimeout(greet, 2000, "Charlie", sayName);
