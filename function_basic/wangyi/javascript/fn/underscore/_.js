(function(root) {
    console.log(typeof root)
    console.log(root === this)
    console.log(root)
    console.log(this)
    var _ = function(){

      
        /**1: cause to infinitly recursive call constructor  */
        // var w= root;

        // if( !(w instanceof _)){
        //     return new _();
        // }
      /**2: cause to infinitly recursive call constructor  */
          // if( !(root instanceof _)){
        //     return new _();
        // }
        /** this point has special feature  */
          if( !(this instanceof _)){
            return new _();
        }
    }

    _.unique=function(){
        console.log(1)
    }


    
    /** 1:get all instance method names 2: put them into array 3: iterator array 4: item extend to _'s propotype */
    _.mixin = function(){

        var _methods =[]
        
        Object.getOwnPropertyNames(_).filter(item => typeof _[item] === 'function').forEach(m =>
            _methods.push(m))

        _methods.forEach(m=>{
            _.prototype[m]=_[m]
        })
    }

    root._ = _
})(this)