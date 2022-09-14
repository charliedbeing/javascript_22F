function Memento(){
    var cache ={};

    return function(cacheName){
        if(cache[cacheName]){
            // do something with cache
        }else{
            // do sth without cache
        }
    }
}

var MementoFn = Memento()

MementoFn('xxx')

/**
 * Cache article context
 */

function page(){
    var cache={}

    return function(pageName){
        if(cache[pageName]){
            return cache[pageName]
        }else{
            axios.get(pageName).then(res=>{
                cache[pageName]= res;
                return res;
            })
        }
    }
}
