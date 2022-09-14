var lg =(m)=> console.log(m)

function VehicleFactory(){}

function Car(option){
    this.color= option.color;
    this.turbo = option.turbo;
}

function Truck(option){
    this.color= option.color;
    this.length = option.length;
}


VehicleFactory.prototype.vehicleClass= Car;
VehicleFactory.prototype.getVehicle= function(options){
    return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();

var car = carFactory.getVehicle({color:'black',turbo:true})

lg(car)
lg(car instanceof Car)

VehicleFactory.prototype.vehicleClass = Truck;

var truck1 = carFactory.getVehicle({color:'white',length:'26m'})

lg(truck1)
lg( truck1 instanceof Truck)











