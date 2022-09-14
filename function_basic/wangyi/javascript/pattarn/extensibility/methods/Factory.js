var lg =(m)=> console.log(m)

function VehicleFactory(){}

function Car(option){
    this.color= option.color;
    this.turbo = option.turbo;
}


VehicleFactory.prototype.vehicleClass= Car;
VehicleFactory.prototype.getVehicle= function(options){
    return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();

var car = carFactory.getVehicle({color:'black',trubo:true})

lg(car)






