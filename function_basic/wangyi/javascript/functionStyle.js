var obj={
    a:100,
}

function addOne(obj){
    var _getValueToBeAddOne = obj.a

    return _getValueToBeAddOne +1;
}

var test1 = addOne(obj)
console.log(test1)

console.log(obj)

function objPlus(obj){
    var _obj = Object.create(obj)

    _obj.a +=1

    return _obj
}
