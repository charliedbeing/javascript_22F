/**
 * f(a,b,c) => f(a)(b)(c)
 */

function currying(f){
    return function(a){
        return function(b){
            return f(a,b);
        }
    }
}

var cal_add= currying((x,y)=> x+y)

console.log(cal_add(10)(20))


function currying2(f1){
    return function(f2){
        return function(value){
            return f1(f2(value));
        }
    }
}

var two_steps = currying2(x=> x*2)(y => y+100)


console.log(two_steps(25))

/**
 * Advanced curry implementation
 *
 */

Function

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this,args)
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c
}

let curriedSum = curry(sum)


console.log(curriedSum(1,2,3,4))
console.log(curriedSum(1)(2,3))
console.log(curriedSum(1)(2)(3))


function testArgsLength(a,b,c,d){

}

console.log(testArgsLength.length)








