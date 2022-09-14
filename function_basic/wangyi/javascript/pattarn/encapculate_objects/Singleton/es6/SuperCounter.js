import {counter}  from './counter.js';

export default class SuperCounter{
    constructor(){
        this.count =0;
    }

    increment(){
        counter.increment();
        this.count += 100;
        return this.count;
    }

    decrement(){
        counter.decrement();
        this.count -=100;
        return this.count;
    }
}