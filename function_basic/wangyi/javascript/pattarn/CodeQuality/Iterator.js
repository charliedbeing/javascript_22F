function Iterator(data){
    this.data = data;
}

Iterator.prototype.dealEach= function(fn){

   if(this.data instanceof Array){
         for(var i=0; i<this.data.length;i++){
            fn(this.data[i],i)
         }
   }else{
    for(var item in this.data){
        fn(this.data[item],item)
    }
   }
}
/**
 * project to iterator  json data coming from back end
 * 
 * 
 */
var data =[{num:1},{num:2},{num:3}]

function i(data){

    function Iterator(data){
        this.data = data;
    }

    Iterator.prototype.getHasSomeNum= function(handler,num){
        var _arr=[]
        var handleFn;
        if(typeof handler === 'function'){
            handleFn = handler;
        }else{
            handleFn = function(item){
                if(item[handler]=== num){
                    return item;
                }
            }
        }
        for(var i=0; i<this.data.length;i++){
            var _result = handleFn.call(this,this.data[i])
            if(_result){
                _arr.push(_result)
            }
        }
        return _arr;
    }

}

i(data).getHasSomeNum('num',2)


