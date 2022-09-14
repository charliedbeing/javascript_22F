const lg = (m)=>console.log(m)

var Car = function(setting){
    this.model = setting.model;
    this.color = setting.color;
}

var Mixin = function(){}

Mixin.prototype = {
    driveForward:function(){
        lg('drive forward')
    },
    driveBackward: function(){
        lg('drive backward')
    }
}

function augment(receivingClass, givingClass){
    if(arguments[2]){
        for(var i=2,len= arguments.length; i<len;i++){
            receivingClass.prototype[arguments[i]]= givingClass.prototype[arguments[i]];
        }
    }else{
        for(var methodName in givingClass.prototype){
            if(! receivingClass.prototype[methodName]){
                receivingClass.prototype[methodName] = givingClass.prototype[methodName]
            }
        }
    }
}

augment(Car,Mixin,'driveForward','driveBackward')

var vehicle = new Car({model:'Honda Civic', color:'grey'})

vehicle.driveForward();
vehicle.driveBackward()