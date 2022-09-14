var cache= {}
var container = function(flags){
    var stack =[] 
    var carryout , memory,i =0;

    flags = typeof flags == 'string' ? (cache[flags] || createFlags(flags)): extend({},flags)
    
    var fire = function(data){
        /** guarantee to execute by order */
        var stackLen = stack.length;
        carryout = true;    
        memory = flags.memory && data;

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

function Promise(func){

    var tuples =[
        // 1 state, 2: adding callback method , 3: creating containers , 4: final state for async operations. 
        ["resolve","done", container("once memory"), "resolved"],
        ["reject", "fail", container("once memory"), "rejected"]
    ];

    var state ="pending";
    var chain = {
        then:function(/**fnSuccess, fnFail*/){
            var args = arguments;

            return Promise(function(resolve, reject){
                tuples.forEach(function(tuple,i){
                    var fn = toString.call(args[i]) === "[object Function]" && args[i]
                    chain[tuple[1]](function(){
                       var returned = fn && fn.apply(this,arguments)
                        if(returned && toString.call(returned.then) === '[object Function]'){                    
                            returned.done(resolve)
                            returned.fail(reject)

                        }
                    })
                })
            });
          
        }
    };
    var protect ={};

    tuples.forEach(function(tuple,i){
        var list = tuple[2];
        var stateString = tuple[3];
        if(stateString){
            list.add(function(){
                state = stateString;
            })
        }
        // chain [done / fail]  chain.done chain.fail

        chain[tuple[1]] = list.add;

        // state binding
        protect[tuple[0]] = function(){
            protect[tuple[0]+'With'](this,arguments)
        }
        // resovleWith rejectWith
        protect[tuple[0]+'With'] = list.startupWith; 

    })

    // console.log(protect)
    // console.log(protect['resolve'])

    if(func){
        func.call(chain, protect['resolve'], protect["reject"])
    }

    return chain;
} 