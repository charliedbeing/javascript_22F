/**
 * There are four methods to create object  in javascript
 * property: writeable :ture, enumerable: ture, configurable:ture; when by assignment operations "=" line 17
 * 
 */

var lg = (m)=>console.log(m)

 var newObject1 = {} ;
 var newObject2 = Object.create(null);
 var newObject3 = new Object();



newObject1.name='charlie'
newObject1['age'] =42            // writeable :ture, enumerable: ture, configurable:ture; commont line 3
const favor ='favorTech'
newObject1[favor] = 'javascript'

Object.defineProperty(newObject1,"homeAddress",{
    value:'catalina cres Ontario',
    writable:false,  // readonly,
    enumerable:true,  // Object.assign() spread operation ; for ... in; Object.keys(); 
    configurable:false, // control current property can be delete from objct or not, value and writable can be changed or not 
    
    // get(){
    //     console.log('every time, when client try to access the value of this property, this method will be called');
    //     return "charlie's" + "address is Catalina Cres";
    //     }
    // Invalid property descriptor. Cannot both specify accessors and a value or writable attribute,

})



function test1(){

    console.log(typeof Object)
    console.log(Object.constructor)
   lg(typeof newObject1)
    
lg(newObject1)

newObject1.homeAddress = 'beijing'

lg(newObject1)
lg(newObject1.propertyIsEnumerable('homeAddress'))
lg(newObject1.propertyIsEnumerable('name'))
lg(Object.keys(newObject1))

delete newObject1.name;
delete newObject1.homeAddress; // can not work, because of line 24 => configuralbe is false 

lg(Object.keys(newObject1))

lg(newObject1.homeAddress)

}

// newObject2.defineProperty(this,'name',{
//     get(){
//         return this['name'];
//     },
//     set(value){
//         this.name = value;
//     }
// });

// lg(newObject2)
//error: newObject2.defineProperty is not a function

function MyObject(){
    let count =  MyObject.prototype.counts.length;
    MyObject.prototype.counts.push(count+1);
    let name=null;
    const names=[];

    // 
    Object.defineProperty(this,'name3',{
        get(){
            lg('get!')
            return name;
        },
        // not works when  there is not set method in defineProperty 
        set(value){
            name= value;
            console.log('all things can be happened when the value is chagned by this set methods')
            names.push(value);
        },
        enumerable:true,

    });

    // return {
    //     allNames:function(){
    //         lg(names);
    //     }
    // }

    this.getNames = ()=> names;

    // return {
    //     names:function(){
    //         lg(names)
    //     }
    // } // in this way , the names is the only one property which can be access by clients

    return this; // if there is not any kinds of return content, then the js engine will add "return this"
    // and all properties and methods which are assgined on this  will be accessed by clients;

}

// class static property : only one part shared by all the objects created by this function 
MyObject.prototype.counts=[];

function test2(){
    const my = new MyObject();
    lg(my.name);
    
    my.name3='charlie'; // not works when  there is not set method in defineProperty 

    // lg(my.getNames())
    
    // lg(MyObject.prototype.counts)
    
    // const my1 = new MyObject();
    
    // lg(MyObject.prototype.counts)
    
    
    // lg(Object.keys(my))

   // lg(my)

    lg(my.name3)

    lg(my['name3'])

    /*Returns the names of the enumerable string properties and methods of an object.
     * @param o Object that contains the properties and methods.
         This can be an object that you created or an existing Document Object Model (DOM) object.
     */
    lg(Object.keys(my))
    lg(typeof my)
    lg(my.constructor)
}

// test2();

function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles =miles;
    this.toString= function(){
        for(var i=0;i<1000;i++){
            let r = Math.random()*1000;
        }
        return this.model +" has runned "+ this.miles;
    }

}

Car.prototype.sayHi= function(){
    lg('di di!!!!')
}


// lg(typeof Car.prototype)
// lg(Car.prototype.constructor)

/**
 * Singleton
 */
// method 1:  name can not conflict in the namespace,

var mySingleton = {
    property1:'somthing',
    property2:'something else',
    method1: function(){
        lg('hello world')
    }
}

// since object can be created from function so

var mySingleton = (function(){

    var instance;

    var property1 = "charlie";
    
    var sayHi = function(){
        lg(property1 + ' charlie say hi')
    }

    var init = function(){
        return {
            publicMethod:function(){
                sayHi()
            },
            name:'Charlie'
        } 
    }

    return {
        getInstance:function(){
            if(! instance){
                instance = init()
            }

            return instance;
            
        }
    }
})()

lg(Object.keys(mySingleton))


lg( mySingleton.getInstance() === mySingleton.getInstance());

/**
 * THe Module Pattern:
 * private
 * public 
 * 
 * protected to solve the implement son and father class 
 */
var Name;
Name="lena"

var myNamespce = (function(param){
    var myPrivateVar =0;
    var myPrivateMethod = function(sometext){
        console.log(sometext)
    }

    return {
        myPublicVar :'charlie',
        myPublicMethod:function(){
            console.log('this is a public method, which can be called by client')
            myPrivateMethod();
        },
        display:function(){
            lg(param);
        }    

    }
})(Name)

 



myNamespce.display();




