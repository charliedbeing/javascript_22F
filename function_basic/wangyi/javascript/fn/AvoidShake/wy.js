
function debounce(fn, delay){
    let timer = null;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)

    }
}

function printInputToConsole(value){
    console.log(value);
}

var test1 = debounce(printInputToConsole,5000);

function searchItemFn(){    
    const searchItem = document.getElementById('searchItem');
    searchItem.addEventListener('input',(e)=>{
        test1(e.target.value)
    })
}

searchItemFn()






