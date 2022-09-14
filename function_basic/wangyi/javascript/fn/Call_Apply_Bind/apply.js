const numbers =[1,2,3,4,5]

const max = Math.max.apply(null,numbers)

// console.log(max)


function add()
{
    var _sum=0
    for(var item in arguments){
        _sum += arguments[item];
    }

    return _sum;
}


const sum = add.apply(null,numbers)

// console.log(sum)

const array=[100]

const elements =[0,1,2,]

const arr2=['c2','d2']

const arr3=['c3','d3']

const arr4=['c4','d4']

array.push.apply(elements)

console.info(array)


// array.push.apply(arr2,elements)

// console.info(arr2)

// array.push.call(arr3,elements)

// console.info(arr3)

 
// const f= array.push.bind(arr4,elements)

// console.log(typeof f)

// f(1)
// f(2)

// console.info(arr4)








