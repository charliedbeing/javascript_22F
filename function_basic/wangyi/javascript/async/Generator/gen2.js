
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function* addNewName(){
    var _container =[]
    var index
    var res
     while(true){
        yield _container.push(getRandomInt(1000))
        res = _container[index]
        index +=1
     }
     return res
}

function testGenerator(){
     var g = addNewName();

    for(var i=0; i<20;i++){
        console.log(g.next())
        console.log(g.next())
    }

    console.log(g.next())
    console.log(g.next())
    console.log(g.next())
    console.log(g.next())
}

testGenerator()
