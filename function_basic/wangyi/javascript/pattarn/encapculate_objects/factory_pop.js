/**
 * facotry : need to create many objects which have many same features essentially, 
 * so the good idea is by referering a factory layer to encapsulate all the detail of how to 
 * create all these objects 
 * 
 */
(function(){
    function infoPop(){

    }
    function confirmPop(){
    
    }
    function canclePop(){
    
    }
    
    // create three three info pop, three confirm pop, three cancel pops
    
    function popFactory(type,context,color){
        switch (type) {
            case 'info':
                return new infoPop(context,color)
            case 'confirm':
                return new confirmPop(context,color)
            case 'cancel':
                return new canclePop(context,color);
        }
    }
    
    window.popFactory= popFactory;
})()

popFactory('info','you success to log in','green')

var popArr =[{type:'info',context:'you booked',color:'red'},
            {type:'info',context:'you booked2',color:'red'},
            {type:'info',context:'you booked3',color:'red'},
            {type:'confirm',context:'you confirm1',color:'red'},
            {type:'confirm',context:'you confirm2',color:'red'},
            {type:'confirm',context:'you confirm3',color:'red'},
            {type:'cancel',context:'you cancel1',color:'red'},
            {type:'cancel',context:'you cancel2',color:'red'},
            {type:'cancel',context:'you cancel3',color:'red'},
]
;



/** upgrade factory  */
(function(){
    function pop(type,context, color){
        if(this instanceof pop){
             this[type](context,color) 
           //  var s = this[type](context,color)
           // return s; this and new pop(), they point the same object 
        }else{
            return new pop(type,context, color)
        }
    }

    pop.prototype.info= function(){console.log('info',arguments[0],arguments[1])}
    pop.prototype.cancel= function(){console.log('cancel',arguments[0],arguments[1])}
    pop.prototype.confirm = function(){console.log('confirm',arguments[0],arguments[1])}

    
    window.pop =pop;
}
)();


var popObjects=[]
popArr.forEach(p=>{
    popObjects.push(pop(p.type,p.context,p.color))
})

console.log(popObjects)


// var test = new pop('info','hello world','red')

// console.log(test)



