
const lg = (m)=>console.log(m)

function MacBook(){
    this.cost = function(){return 100;}
    this.screenSize = function(){return 13.1;}
}

//Decorate 1

function Memory(macbook){
    var v = macbook.cost();
    macbook.cost= function(){
        return v + 75;
    }
}
// Decorate 2

function Insurance(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v+ 200; 
    }
}

var mac1 = new MacBook();

Memory(mac1)
Insurance(mac1)

lg(mac1.cost())
