/**
 * for example, we write navigator componnents, some with message alert, some are verticle style, some are widthways
 */

function baseNav(){
    // basic class , basic framework
}

baseNav.prototype.actoin = function(fn){
    // some special deal with, left an callback to be implemented when real calling happens.
}

/**
 * First, you define the basic framework of the function,and then extends 
 */
function basePop(word,size){
    this.word = word;
    this.size =size;
    this.dom =null;
}

basePop.prototype.init= function(){
    var div = document.createElement('div')
    div.innerHTML = this.word;
    div.style.width = this.size.width+'px';
    div.style.height = this.size.height+'px';
    this.dom =div;

}

basePop.prototype.hidden= function(){
    this.dom.style.display ='none';
}
basePop.prototype.confirm = function(){
    this.dom.style.display ='none';
}



function ajaxPop(word,size){
    basePop.call(this,word,size)
}
ajaxPop.prototype = new basePop()

var hidden = ajaxPop.prototype.hidden;

ajaxPop.prototype.hidden = function(){
    hidden.call(this);
    console.log(1);
}

var confirm = ajaxPop.prototype.confirm;

ajaxPop.prototype.confirm = function(){
    confirm.call(this);
    $.ajax('')

}

/**
 * calulator  demo  
 * 
 * by compose method to extends the basic template 
 */

function counter(){
    this.beforeCounter=[];
    this.afterCounter=[];
}
counter.prototype.addBefore= function(fn){
    this.beforeCounter.push(fn)
}

counter.prototype.addAfter = function(){
    this.afterCounter.push(fn)
}

counter.prototype.count = function(){
    var _resultNum = num;
    var countFns =[];

    countFns = this.beforeCounter.concat(baseCount)
    countFns = countFns.concat(this.afterCounter);

    function baseCount(num){
        num +=4;
        num *=4;
        return num;
    }

    // for(var i=0;i<countFns.length;i++){
    //     _resultNum = countFns[i](_resultNum);
    // }

    while(countFns.length >0){
        _resultNum = countFns.shift()(_resultNum)
    }

    return _resultNum;
}

var counterDemo = new counter();

counterDemo.addBefore(function(v){
    v= v+100;
    return v
})

counterDemo.addAfter(function(v){
    v= v/100
    return v;
})


counterDemo.count(10)


