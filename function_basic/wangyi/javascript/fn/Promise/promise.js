var container = function(){
    var stack =[]
    var onceFlag = false
    var stopOnFalse = true
    var hasStartupOnce = false;
    var memoryFlag = false;

    var fire = function(data,last=false){
        /** guarantee to execute by order */
        onceFlag = true
        var stackLen = stack.length;
        var i =0;

        if(last){
            i=stackLen -1;
        }

        for(;i<stackLen;i++){
           var returnValue = stack[i].apply(data[0],data[1])
           if(stopOnFalse && !returnValue){
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
                        //arg && arg.length && typeof arg !== 'string'
                    }else if( toString.call(arg) === '[object Array]'){
                        add(arg)
                    }
                })

                if(hasStartupOnce){                   
                    memoryFlag =true;
                    self.startup()              
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

            if(! onceFlag){
                fire(args)
            }

            if(memoryFlag){
                fire(args,true)
            }
     
            
        },
        startup: function(){
            // this is self
            hasStartupOnce = true;
            self.startupWith(this,arguments)
        },

        has: function(fn){
            return stack.indexOf(fn) > -1;
        }
    }

    return self;
}