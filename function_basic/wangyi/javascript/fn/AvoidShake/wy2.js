function saveTrans(fn,restartTime){
    var _timer =null;
    fn.apply(this,arguments)

    var _flag = false;

    return function(){
        clearTimeout(_timer)
        
        if(_flag){
            _flag = false;
            fn.apply(this,arguments)
        }

        _timer = setT
        imeout(()=>{
           _flag = true;         
        }, restartTime)
    }

}

function onClick(){
    var currentTime = Date.now().toLocaleString()
    console.log(currentTime)
}

var onClick_SaveTrans= saveTrans(onClick,3000)


function listenButton(){
    var item = document.getElementById('saveTrans');
    item.addEventListener('click', _ =>{
        onClick_SaveTrans()
    })
}

listenButton()