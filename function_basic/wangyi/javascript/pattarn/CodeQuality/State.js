/**
 * change the if else nested structre into simple key-value pattern.
 * 
 * state -> function   
 */
function stateFactor(state){
    var stateObject ={
        _status:'', // can be state1,state2
        state:{
            state1:function(){},
            state2:function(){},
            state3:function(){},
        },
        run:function(){
            return this.state[this._status]()
        }
    }
    stateObject._status = state;
    return stateObject;
}

stateFactor('state1').run()

/**
 * 
 */
function moveDiv(){
    this.stateList=[];
    this.newState=0;
}

moveDiv.prototype.move= function(type,num){
    changeDiv(type,num);
    this.stateList.push({
        type:type,
        num:num
    })
    this.nowState = this.stateList.length-1;
}

move.prototype.go = function(){
    var _state;
    if(this.nowState< this.stateList.length -1){
        this.nowState++;
        _state = this.stateList[this.nowState]
        changeDiv(_state.type,_state.num)
    }
}
