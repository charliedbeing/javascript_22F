/** how to change method 
 *  the function's feature need to change or being strenghed 
 * Three steps:
 * 1:rewrite another brand new method,
 * 2: call the old operation in old method
 * 3: add new feature in the new method.
*/

var a = {
    b:function(){}
}

function myb(){
    a.b();
    //add extensibilities features here 
}


/**
 *  new company -> old project ,
 *  interaction, without operations alerts
 *  how to resovle?
 * 
 *  1: many operations
 *  2: decorate
 *  3: write a decoration factory
 */

 function decorationFactory(dom,fn){
    if(typeof dom.onclick === 'function'){
        var _old = dom.onclick;
        dom.onclick= function(){
            _old.apply(this,arguments)
            fn()
        }
    }
}

var arr =[
    [dom1,function(){}],
    [dom2,function(){}],
    [dom3,function(){}],
]


arr.forEach(d=> decorationFactory(d[0],d[1]))

/**
 * Vue 2 defineProperty  to  be reactive
 * 
 * ? how about Array
 * if you just operate Array directly , these is no reaction, 
 * just by push and shift method , it works
 * 
 * => obviously, decorate pattern used
 */

/**
 * you can not pollute original source,
 */

(function(){
    var methods =['push','pop','shift']
    var arrayProto = Array.prototype  // prototype is an Object.
    var arrayObj = Object.create(arrayProto)

    methods.forEach(item=>{
        arrayObj[item] = function(){
            var originalMethod = arrayProto[item];
            var result = originalMethod.apply(this, arguments);
            //add new feature here
            dep.notify()
            return result;
        }
    })
   // Vue all array in data should be chagned as this kind of new array with decorate methods.
})()


 



