function debounce(fn,delay){
    var _timer = null;

    return function(){
        clearTimeout(_timer)
        _timer= setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}

function printInputValues(value){
    console.log(value)
}



function printInputByDebounce(){
    const item = document.getElementById('searchItem')
    const dealFn= debounce(printInputValues,3000)

    item.addEventListener('input',(e)=>{
        dealFn(e.target.value)
    })
}

printInputByDebounce()
