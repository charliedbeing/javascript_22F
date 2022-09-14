/** Two modules communicate  with each other by an observer object (middle layer) 
 * aims: by reducing the couping between objects to increacing extensibility
 * scene: if two modules communicate directly , it will make the couping heavy.  
 * or they can not say each other
 * ( for example: 
 *  1: in Vue, two components who are not parent-son relationships). 
 *  3: async modules, a button addeventlisten , the button can not possible to know when it will be clicked.
 *      in other word, the button can not write any code about the possible click now.so bring in a middle layer called eventbus.
 * 
 *  user's operations is a module, and  triggering the button is another module, they have no way to predict when and where meet each other, 
 *  so we bring in a middle layer called oberver pattern to deal with .
 */

function observe(){
    this.message ={} // the container where store 
}

observe.prototype.register= function(type,fn){
    this.message[type] =fn;
}
observe.prototype.fire= function(type){
    this.message[type]();
}
observe.prototype.remove= function(type){
    this.message[type] =null;
}

var observer = {

    message:{},

    register:function(type,fn){
        this.message[type]= fn    
    },
    fire:function(){
        this.message[type]();
    },

}

/**
 * a -> b
 * 
 * observer  (adding a middle layer to decouping  )  
 * a -> observer 
 * observer -> b
 * 
 * so a and b do not touch each other directly.
 * 
 */

/** Demo 1 
 * Assuming A write Home module and B write feedback module individually without any cooperation to predefined.
 * But one day, these two mudles need to talk each other,
 *  for example, the newest feedback should appear on home page, how to do it ?
 *  
 *
*/

function HomeObserver(){
    this.message={}
 
}

HomeObserver.prototype.register= function(type,fn){
    this.message[type]= fn;
}

HomeObserver.prototype.fire = function(type){
    
  if(type === 'product_new_feedback'){
    var fn = this.message['consum_new_feedback']
    var args = arguments.slice(1);
    fn.apply(this,args)

  }

}


var Home = function(observer){
    this.observer = observer;
    this.observe.register('consum_new_feedback',this.updateFeedback)
}

Home.prototype.updateFeedback= function(){
    console.log(arguments)
}

var Feedback = function(observer){
    this.observer = observer;
    this.observer.register('product_new_feedback',this)
}

Feedback.prototype.sendOneNewFeedback = function(){
   
    this.observer.fire('product_new_feedback',message)
}


var solution = function(){
    var middleLayer = new HomeObserver();
    var home1 = new Home(middleLayer);
    var feedback1 = new Feedback(middleLayer);


}

/**
 * Demo 2: A roulette 's speed will be slower by slower when it is rotating. 
 *  
 * 1:roulette 
 * 2: how to define of rotating a round by special speed 
 * 3: next round, by new lower spcial speed,
 * 4: roulette stop 
 * 
 * one idea: 
 * 1:roulette have a  initial value like Total: 10*360+ random(1:360)
 * 2: when roulette finish one round generating 360 number by a fix time interval as time1, Total -= 360
 * 3：Second round, time1 = time1*(1+ roundNum *0.1 );
 * 4: until Total ==0 then stop. 
 * 
 *  roulette init module => controll rotating module => rotating animation module (async module: they need to depend on  event queue)
 * 
 */

function centerHub(){
    this.message={}
}

/**
 *  controll rotating module:
 * 
 *  rotating animation module:
 */
centerHub.prototype.register= function(type,fn){
    this.message[type] =fn;
}
centerHub.prototype.fire= function(type){
    this.message[type]();
}
centerHub.prototype.remove= function(type){
    this.message[type] =null;
}

/**
 * up: {isLastRound,currentSpeed, leftNum}
 * down: finished current round ;stop
 */

function roulette(round,stepLength){
    this.stepLength = stepLength;
    this.initNumber= round* 360 + Math.floor(Math.random()*360);
    this.giftArr={1:'$10',2:'$100',3:'0',4:'thank you'}
}

roulette.prototype.finishOneRound= function(){
    this.initNumber -= 360;
}

roulette.prototype.reduceOneStep= function(){
    var left = this.initNumber-this.stepLength;
    if(left < this.stepLength){
        // send a message to center reporting need to stop
    }else{
        this.initNumber -= this.stepLength;
    }
}


/**
 * up:   finished current round; stop;
 * down: {isLastRound,currentSpeed, leftNum}
 */
function round(){
    this.finished = true;
    this.currentNum = 0;
    this.currentRoundSpeed = 100;
    this.isLastRound = false;
}


round.prototype.finishLastRound= function(speed,leftNum){

}

round.prototype.finishOneRound= function(speed){

}






