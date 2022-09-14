var arr = [1,2,3]

arr.forEach((v)=>{
   // console.log(2*v)
}) 


var arr2= arr.map((v)=>{
    return 2*v
})


var sum=  arr.reduce((pre,now,index,arr)=>{
    return pre + now;
}, 10)


// console.log(sum)



// console.log(arr2)

// console.log(arr)


function forEach(arr,fn){
    for(var i=0 ; i< arr.length; i++){
        fn(arr[i])
    }
}

function map(arr,fn){
    var result =new Array(arr.length)

    for(var i=0;i<arr.length;i++){ 
        result[i]= fn(arr[i])
    }

    return result;
}


function reduce(arr, fn, init){
  
    var pre;
    var now;
   
    if(init != undefined){
       // have init and calulate from 0 
       pre = init;
       for(var i=0; i< arr.length; i++){
            pre = fn(pre,arr[i])
       }
       return pre
    }else{

        pre =arr[0]

        for(var i=1; i< arr.length; i++){
            pre = fn(pre,arr[i])
       }
       return pre
    }

}


// var result =  reduce([1,2,3,4,5],(pre,now,index,arr)=>{
//     return pre + now;
// },100)

// console.log(result)


var routes=[
    {
        path:'/',
        components:"hello"
    },
    {
        path:'/test',
        components:'test'
    }
]

// var simpleRoutes = routes.reduce((pre,now)=>{
//     pre[now.path]= now.components;
//     return pre;
// }, {})


// var test2 = reduce(routes,(pre,now)=>{
//     pre[now.path]= now.components;
//     return pre;
// }, {})

// console.log(simpleRoutes)
// console.log(test2)


var all =[
    {
        type:'all',
        num:10
    },
    {
        type:'one',
        num:10
    },
    {
        type:'all',
        num:100
    }
]


// var test3 = reduce(all,(pre,now)=>{
//     if(now.type === 'all'){
//         if(typeof pre !== 'number'){
//             return pre.num + now.num;
//         }
//         return pre + now.num
//     }else{
//         if(typeof pre !== 'number'){
//             return pre.num
//         }
//         return pre
//     }
// })

// console.log(test3)


var test4 = all.reduce((pre,now)=>{
    if(now.type === 'all'){
        return pre.num+ now.num
    }else{
        return pre.num
    }
})

var test5 = all.reduce((pre,now)=>{
    if(now.type ==='all'){
        pre += now.num;
    }
    return pre
},0)


var test6= reduce(all,(pre,now)=>{
    if(now.type ==='all'){
        pre += now.num;
    }
    return pre
},0)

// console.log(test4)

// console.log(test5)

console.log(test6)


Array.prototype.MyReduce = function(fn,init){
    var i =0;
    var len = this.length;
    var pre = init;

    if(init == undefined){
        i =1;
        pre = this[0];
    }

    for(i;i<len;i++){
        pre = fn.call(this, pre,this[i],i,this)
    }
    return pre;
}

var arr = [1,2,3,4,5,6]

 
var test7 = arr.filter((current,index)=>{
    return current %2 === 0;
})

console.log(test7)



Array.prototype.Myfilter= function(fn){
    var _result =[]
    for(var i=0;i<this.length; i++){
        if(fn(this[i],i)){
            if(typeof this[i] === 'object'){
                _result.push(Object.create(this[i]))
            }
            _result.push(this[i])
        }
    }

    return _result;
}



console.log(arr.Myfilter((current,index)=>{
    return current %2 === 0;
}))

