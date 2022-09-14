var cache= {}
var container = function(flags){
    var stack =[] 
    var carryout , memory,i =0,stackPoint;

    flags = typeof flags == 'string' ? (cache[flags] || createFlags(flags)): extend({},flags)
    
    var fire = function(data){
        /** guarantee to execute by order */
        var stackLen = stack.length;
        carryout = true;    
        memory = flags.memory && data;
        i = stackPoint || 0;
        stackPoint =0;
        for(;i<stackLen;i++){
          if(stack[i].apply(data[0],data[1]) === false && flags.stopOnFalse){
            break;
          }
        }

    }
    
    var self ={
        add: function(){
            (function add(args){
          
                Array.from(args).forEach(function(arg){
                    if( toString.call(arg) === '[object Function]'){
                        if(! self.has(arg)){
                            stack.push(arg)
                        } 
                    }else if( toString.call(arg) === '[object Array]'){
                        add(arg)
                    }
                })

                if(memory){  
                    stackPoint = stack.length -1 
                   fire(memory);        
                }

            })(arguments)
        },
       
        startupWith:function(context,args){ 
            /** concurrent executions */
            // stack.forEach(fn=>{
            //     fn.apply(arguments[0],arguments[1])
            // })
            args = args || []
            args =[context, args]
            if(! flags.once || ! carryout){
                fire(args)
            }
        },
        startup: function(){
            // this is self
            self.startupWith(this,arguments)
        },

        has: function(fn){
            return stack.indexOf(fn) > -1;
        }
    }
    return self;
}


function createFlags(flags){
    var res ={};
    (flags.match(/\S+/g) || []).forEach(function(flag){
        res[flag] = true ;
    });
    return res;
} 
function extend(to, from){
    for(let key in from){
        to[key] = from[key]
    }
    return to
} 