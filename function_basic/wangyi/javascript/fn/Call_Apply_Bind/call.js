const animals =[
    {species:'Lion',name:'King'},
    {species:'Whale',name:'Fail'}
]


function assignPrintMethod(i,j){
    this.print = function(){
        console.log(`#${i}-${j} ${this.species}: ${this.name}`)
    }
    this.print()
}

// for(let i=0;i< animals.length;i++){
//     assignPrintMethod.call(animals[i],i)
// }

// for(let i=0;i< animals.length;i++){
//     assignPrintMethod.apply(animals[i],[i])
// }

// for(let i=0;i< animals.length;i++){
//    let f = assignPrintMethod.bind(animals[i],[i])
//    f()
// }

function test_call(j){

    for(let i=0;i< animals.length;i++){
        assignPrintMethod.call(animals[i],i,j)
    }

}



function test_apply(j){

    for(let i=0;i< animals.length;i++){
        let args=[...arguments,i]
        console.log(args)

        assignPrintMethod.apply(animals[i],args)
    }

}

test_call(100)

test_apply(200)

/** 
the difference is that apply lets you invoke the function with arguments as an array; 
call requires the parameters be listed explicitly.
A useful mnemonic is "A for array and C for comma."

See MDN's documentation on apply and call.

Pseudo syntax:

theFunction.apply(valueForThis, arrayOfArgs)

theFunction.call(valueForThis, arg1, arg2, ...)

There is also, as of ES6, the possibility to spread the array for use with the call function, you can see the compatibilities here.
 */



function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}

theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]);


console.log(theFunction.toString())

