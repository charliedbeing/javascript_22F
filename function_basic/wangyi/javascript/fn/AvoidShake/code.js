function searchItemFn(){
    const searchItem = document.getElementById('searchItem');

    searchItem.addEventListener('input',(e)=>{
        console.log(e.target.value);
    })
}
// searchItem()



// function avoidShake(item, eventName, fn){
//     var _timer = setTimeout(()=>{
//         fn(_timer,undefined)
//     },5000)

//     item.addEventListener(eventName,(e)=>{
//         _timer = null;

//         _timer = setTimeout(()=>{
//             fn(_timer,e)
//         },5000)

//     })
// }

// const searchItem = document.getElementById('searchItem');

// avoidShake(searchItem,'input',(timer,e)=>{


//     if(e){
//         console.log(e.target.value);
//     }
  
// })


function debounce(fn,delay){
    return setTimeout(fn,delay);
}


function searchItemFn2(){
    const searchItem = document.getElementById('searchItem');

    searchItem.addEventListener('input',(e)=>{
        
       var t = debounce(()=>{
            console.log(e.target.value)
        }, 2000)

        t = null;

    })
}

searchItemFn2()


