const cl =(...m)=>console.log(...m)

function fib(n){
    if(n===1 || n===2){
        return n
    }
    return fib(n-1)+ fib(n-2)
}


function time(f,n){
    var start =  new Date().getTime()
    f(n)
    var end = new Date().getTime()

    return end-start
}


function fib_2(n){

  function help(n,cache={}){
        if(n==1 || n==2){
            if(!cache[n]){
                cache[n]=n
            }
            return cache[n]
        }else{
           const current = cache[n-1]+ cache[n-2]
           cache[n]= current;
           
           if(cache[n]){
            return cache[n]
           }

           return help(n-1,cache)+help(n-2,cache)
        }

  }

   help(n)

}


function fib_3(n){
    cache={}

    function help(n){
          if(n==1 || n==2){
              if(!cache[n]){
                  cache[n]=n
              }
              return cache[n]
          }else{
            if(! cache[n]){
                cache[n]= help(n-1)+help(n-2)
            }
            return cache[n]
          }
  
    }
  
    return help(n)
  
  }

function memo(func){
    const cache ={1:1,2:2}
    return (n)=>{
        if(!cache[n]){
            cache[n] =func(n)
        }
        result = cache[n]
        return result
    }
}

var fib_c= memo(fib)

// cl(time(fib,52))

cl(fib_3(60))
