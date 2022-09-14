import SuperCounter  from './SuperCounter.js';
import {counter}  from './counter.js';

function test(){
    var sCounter = new SuperCounter();

    console.log(sCounter.increment()) //100


    console.log(counter.increment()) // 1

    counter.increment();
    counter.increment();
    console.log(counter.increment())
}


test();