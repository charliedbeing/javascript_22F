var mySingleton = {
    name:'charlie Ding',
    favorTech:'javascript',
    hobby:function(){
        console.log('jogging every morning')
    }
}

var mySingleton2 = function(){

    // here private variable and method
    var privateVariable = 'something private';
    function showPrivate(){
        console.log(privateVariable)
    }
    
    return {
        // here public variable and method

        publicMethod: function(){
            showPrivate();
        },
        publicVar:'the public can see this!'
    }
}

var single = mySingleton2();

console.log(single.privateVariable); // undefined

console.log(single.publicVar)


var Singleton_OnlyOne = (function(){

    var instantiated;

    function init(){
        // singleton here
       return {
        publicMethod:function(){
            console.log('public method')
        },
        publicVariable :'public Vaiable',
        state:{}

       }
    }

    return {
        getInstance: function(){
            if(! instantiated){
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

var test_onlyOne1 = Singleton_OnlyOne.getInstance()
test_onlyOne1.state['name']='charlie'

var test_onlyOne2 = Singleton_OnlyOne.getInstance()
test_onlyOne2.state['age']=40

var test_onlyOne3 = Singleton_OnlyOne.getInstance()
test_onlyOne3.state['city']='richmond hill'

console.log(test_onlyOne1.state)


var SingletonTester = (function(){
    function Singleton(options){
        options = options || {};
        this.name ='SingletonTester',
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;

    var _static= {
        name:'SingletonTester',
        getInstance: function(options){
            if( instance === undefined){
                instance = new Singleton(options);
            }
            return instance;
        }
    };

    return _static;
})()

var singletonTest = SingletonTester.getInstance({pointX:100})

console.log(singletonTest)

/**
 * ES 6
 */

let instance;
let counter=0;

class Counter{
    constructor(){
        if(instance){
            throw new Error('only create one instance')
        }
        instance = this;
    }

    getInstance(){
        return this;
    }
    
    getCount(){
        return counter;
    }
    increment(){
        return ++counter;
    }
}