const { isGeneratorFunction } = require("util/types");

function* gen(x){
    var y = yield x+2;
    return y;
}

function* gen2(x){
    var y
    for(var i=0;i<5;i++){
        y= yield i+2;
    }
    return y
}

var g = gen2(1)
console.log(typeof g)

isGeneratorFunction

console.log(g.constructor)


// var r1 = g.next()

// console.log(typeof r1)
// console.log(r1)

// var r2 = g.next();

// console.log(typeof r2)
// console.log(r2)

// var r3 = g.next();

// console.log(typeof r3)
// console.log(r3)


// var r4 = g.next();

// console.log(typeof r4)
// console.log(r4)

for(var j=0;j<7;j++){
    console.log(g.next())
}
