/**  Ideas from life: 
 * 1: train => railway-carriage add or change or remove  easily .
 *    https://www.123rf.com/photo_53801108_railway-carriage-train-vector-illustration-isolated-on-white-background.html
 * 2:  fruit highly processed factory 
 *   old   1: select apple, 2 wash apple, 3 cut apple,  4 package item, 5 label .
 *   new   1: select apple, 2 wash apple,  add new step: 2_3 disinfect ,  3 cut apple,  4 package item, 5 label .
 * aims:
 * scene: 
 */

/** semi-finished product
 * Demo: form validation  valid  person ID number  
 * now: the format is ok ? backend: does it exist ?
 * next phrase: the format is ok ?  is a real ID from API of Government ?  backend: does it exist ?
 * So: this is not a full features function, it must be upgrade soon to make it work well.
 * In this situation: using Chain of Responsibility to keep easy way to upgrade in future.
 * 
 * How:  put each feature  into an arry
 */

var form;

form.onblur = function(){

    var _value = input.value;
    var _arr = [front,back]; // queue item must be execute one by one

    async function test(){
        var _result ;
        while(_arr.length>0){
            _result= await _arr.shift()(_value);
            if( ! _result){
                break;
            }
        }
        return _result;
    }
}

form.onblur = function(){
    
    var _value = input.value;
    var _arr = [front,isReal,back]; // queue item must be execute one by one

    async function test(){
        var _result ;
        while(_arr.length>0){
            _result= await _arr.shift()(_value);
            if( ! _result){
                break;
            }
        }
        return _result;
    }
}

function isReal(){

}

/**
 * Axios interceptor 
 * 
 */

