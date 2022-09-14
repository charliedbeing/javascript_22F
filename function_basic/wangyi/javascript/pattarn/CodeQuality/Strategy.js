/**
 * change the if else nested structre into simple key-value pattern.
 * 
 * state name string -> function   
 */

function Strategy(type,a,b){
    var Stategyer = {
        add: function(a,b){
            return a+b;
        },
        minus: function(a,b){
            return a-b;
        },
        division: function(a,b){
            return a/b;
        }
    }
    return Stategyer[type](a,b);
}

/** Demo 1
 * according the authority of the user to show different featrues.
 */
function showPart1(){console.log(1)}
function showPart2(){console.log(2)}
function showPart3(){console.log(3)}

axios.get('xxx').then((res)=>{
    if(res === 'boss'){
        showPart1();
        showPart2();
        showPart3();
    }else if(res ==='manner'){
        showPart1();
        showPart2();

    }else if(res=== 'staff'){
        showPart3();
    }
})

var featureByAuthority = function(level){

    var features ={
        boss:function(){
            showPart1();
            showPart2();
            showPart3();
        },
        manner:function(){
            showPart1();
            showPart2();
        },
        staff:function(){
            showPart3();
        }    
    }
    return features[level]()
}

function showControll(){
    this._status;
    this.power ={
        boss:function(){
            showPart1();
            showPart2();
            showPart3();
        },
        manner:function(){
            showPart1();
            showPart2();
        },
        staff:function(){
            showPart3();
        }    
    }
}

showControll.prototype.show = function(){
    var self = this;
    axios.get('xxx').then((res)=>{
        self._status= res;
        self.power[self._status]()
    })
}

new showControll().show()

/**
 *  compose movements
 * a ball can move to left, to right , to top, to bottom, to left top , to right top, 
 * to left bottom right bottom
 */
function moveTop(){}
function moveBottom(){}
function moveLeft();
function moveRight();

function mover(){
    if(arguments.length ==1){
        if(arguments[0] =='left'){
            moveLeft()
        }
        /**
         * ....
         */
    }else{
        if(arguments[0]=='left',arguments[1]=='top'){
            moveLeft();
            moveTop();
        }else if(arguments[0]=='left',arguments[1]=='bottom'){

        }
        /**
         * ....
         */
    }
}

/**
 * State 
 */

function mover(){
    this.status=[];
    this.actionHandle={
        left:moveLeft,
        right:moveRight,
        top:moveTop,
        bottom:moveBottom
    }
}

mover.prototype.run= function(){
    this.status = Array.prototype.slice.call(arguments)
    this.status.forEach((action)=>{
        this.actionHandle[action]();
    })
}

var moverObj = new mover();
moverObj.run('left','top');
moverObj.run('left','bottom');
moverObj.run('right','top');
moverObj.run('right','bottom');
moverObj.run('left','top');
moverObj.run('left');
moverObj.run('right');


