/** Event trigger ->operating -> close valve -> since vavle closed, all subsequent triggers fail
 * -> a peroid time past,vavle open again, -> operating can be triggered again.*/
function throttle(fn, delay){
    var _flag = true;
    return function(){
        if(_flag){
            setTimeout(()=>{
                fn.apply(this,arguments) // all the core operation was wrapped in timmer. 
                _flag = true
            }, delay)    
            _flag = false;
        }else{
            return false;
        }
    }
}
/** Event trigger -> set a timer 
 *  -> if another event trigger again,clear the previous timer and then set another brand new timer ...
 *  -> until the timed time is here, the operations are called.*/
function antiShake(fn,delay){
    var _timer = null;

    return function(){      
        clearTimeout(_timer)       // clear the timer and then everything in the timer are both cleared.
        _timer = setTimeout(()=>{
            fn.apply(this,arguments)  // all the core operation was wrapped in timmer. 
        }, delay)
    }
}



function buttonClick(){
    console.log(Date.now().toLocaleString())
}


function throttleDemo(){
    var btn = document.getElementById('throttle')
    btn.onclick= throttle(buttonClick,5000)
}

throttleDemo()


