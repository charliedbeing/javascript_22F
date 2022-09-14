const lg = (m)=>console.log(m)


var someCar ={
    drive:function(){},
    name:'Mazda 3'
}

var anotherCar = Object.create(someCar)


lg(someCar === anotherCar)

var vehicle ={
    getModel:function(){
        lg('The model of this vehicle is..'+ this.model)
    }
}

var car = Object.create(vehicle,{
    'id':{
        value:'DDDDRRR11',
        enumerable:true
    },
    'model':{
        value:'Ford',
        enumerable:true
    }
})

car.getModel();


var vehicleProperty ={
    init:function(carModel){
        this.model = carModel;
    },
    getModel:function(){
        lg('The model of this vehicle is..'+ this.model)
    }
};


function Vehicle(model){
    function F(){}
    F.prototype = vehicleProperty;

    var f = new F();
    f.init(model)

    return f;
};


var car1 = Vehicle('Honda');

car1.getModel();


var car2 = new Vehicle('dodge')

car2.getModel();


var beget = (function(){

    function F(){}

    return function(proto){
        F.prototype = proto;
        return new F();
    }
})()






