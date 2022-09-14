// callback

// function a(b){
//     console.log(b)
// }

// Promise.resolve().then(a.bind(this,123))

// // first param is fixed

// function inputTest(reg,value){
//     return `${value}`.match(reg) !== null ? true: false
// } // ten forms needed to verify

// inputTest(/^[0-9]*$/, 123)

// function inputTestCarrying(reg){
//     return function(value){
//         return inputTest(reg,value)
//     }
// }

// let numberTestFn= inputTestCarrying(/^[0-9]*$/)


// console.log(numberTestFn(123))

// console.log(numberTestFn('sd'))

// console.log(numberTestFn(0123547))


function a(b){
    console.log(b)
}

function c(b){
    console.log('c:'+b)
}


// Promise.resolve().then(a.bind(this,123))


// Function.prototype.MyBind= function(ref,arg){
//     console.log(this.name)
//     return this(arg)
// }

// Promise.resolve().then(c.MyBind(this,123))


Function.prototype.mybind= function(thisArg){
    if( typeof this !== 'function'){
        return;
    }
    var _self = this;
    var args = Array.prototype.slice.call(arguments,1)

    return function(){
        return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
}


Function.prototype.Mybind= function(thisArg){
    // if( typeof ref !== 'function'){
    //     return;
    // }
    var _self = this;
    var args = Array.prototype.slice.call(arguments,1)

    return function(){
        return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
}


const obj = {
    x: 42,
    getX: function() {
        console.log(arguments)
      return this.x;
    }
  };
  
  const unboundGetX = obj.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
//   const boundGetX = unboundGetX.bind(obj);
//   console.log(boundGetX());
//   // expected output: 42

  const boundGetX = unboundGetX.Mybind(obj);
  console.log(boundGetX(1,2,3));
  // expected output: 42
  