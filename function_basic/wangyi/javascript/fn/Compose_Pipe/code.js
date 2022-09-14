function multiplyTwo(num){
    return num *2 
}

function minusOne(num){
    return num -1 
}

function addTwo(num){
    return num +2 
}


function addThree(num){
    return num + 3
}

var result = multiplyTwo(10)
result = minusOne(result)
result = addTwo(result)
result = addThree(result)

console.log(result)



function compose(){
    var fns = arguments
   
    return function(init){
        var result = fns[0](init);
        for(var i =1; i<fns.length;i++){
            result = fns[i](result)
        }
        return result;
    }
}



var f1 = compose(multiplyTwo,minusOne,addTwo,addThree)

console.log(f1(10))


var f2 = compose(addThree)

console.log(f2(100))


function compose2(){
    //arguments
    const args =[].slice.apply(arguments)
    return function(num){
        return args.reduceRight((res,cb)=>cb(res), num)
    }

}

var test3 = Promise.resolve(10).then(multiplyTwo).then(minusOne)

test3.then(v=> console.log(v))








