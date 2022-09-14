function* gen(x){
  var y = yield x +2;

    // y= y*2
    // for(var i=0;i<2;i++){
    //     y = y*2;
    // }

var z= yield y+99

var zz= yield y-99

   return zz;
} 

var g = gen(1)

console.log(g.next())
console.log(g.next(100))


console.log(g.next(100))
console.log(g.next())




