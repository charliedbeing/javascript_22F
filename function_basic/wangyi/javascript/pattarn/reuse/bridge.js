/** in order to improve the ability of sharing the code.
 * for example, we want to create three types with three color; 
 * 1: we do not need to create 3*3 =9 kinds of shapes
 * 2: we find the color part can be extracted to one funciton (reused) to encapsulate how to make special color to the shape
 * 3: we can use the color function,as like kind of bridge, into three diffent shapes funciton to finish the process of creating process.
 * 
 * 4: when initilization happens, 
 * 
 */
function rect(color){
    showcolor(color)
}

function circle(color){
    showcolor(color)
}

function delta(color){
    showcolor(color)
}

/** this is extracted to be depended on by all three shape methods  */
function showcolor(color){

}

new circle('red')

/**
 * example: create different selected effect
 */
// menu1 menu2 menu3

function menuItem(word){
    this.word = word;
    this.dom = document.createElement('div')
    this.dom.innerHTML= word;

}

var menu1 = new menuItem('menu1')
var menu2 = new menuItem('menu2')
var menu3 = new menuItem('menu3')

menu1.onmouseover = function(){
    menu1.style.color='red'
}
menu2.onmouseover = function(){
    menu2.style.color='green'
}
menu3.onmouseover = function(){
    menu3.style.color='blue'
}

menu1.onmouseout = function(){
    menu1.style.color='white'
}
menu2.onmouseout = function(){
    menu2.style.color='white'
}
menu3.onmouseout = function(){
    menu3.style.color='white'
}

/** upgrade method one */

function mouseover(dom,color){
    dom.onmouseover= function(){
        dom.style.color =color;
    }
}
function mouseout(dom,color){
    dom.onmouseout= function(){
        dom.style.color =color;
    }
}

function menuItem2(word,overColor,outColor){
    this.word = word;
    this.dom = document.createElement('div')
    this.dom.innerHTML= word;

    mouseover(dom,overColor);
    mouseout(dom,outColor);

}

var menu11 = new menuItem2('menu1','red','while')
var menu22 = new menuItem2('menu2','green','white')
var menu33 = new menuItem2('menu3','blue','white')

/** upgrade method two */

function menuItem3(word,color){
    this.word = word;
    this.dom = document.createElement('div')
    this.dom.innerHTML = word;
    this.color = color;
}

menuItem3.prototype.bind= function(){
    var self = this;
    this.onmouseout= function(){
        this.style.color = self.color.outColor;
    }
    this.onmouseover = function(){
        this.style.color = self.color.overColor;
    }
}

function menuColor(overColor,outColor){
    this.overColor = overColor;
    this.outColor = outColor;
}

var data =[
    {word:'menu1',color:['red','white']},
    {word:'menu2',color:['green','white']},
    {word:'menu3',color:['blue','white']}
]

for(var i=0;i<data.length;i++){
    new menuItem3(data[i].word,new menuColor(data[i].color[0], data[i].color[1])).bind()
}

/**
 * express get post delete put 
 */

function express(){

}

express.prototype.get= funciton(){

}
express.prototype.post= funciton(){
    
}
express.prototype.delete= funciton(){
    
}
/** upgrade */
function app(){

}

var methods =['get','post','delete','put']
methods.forEach(function(method){
    app[method]= function(){
       // route[method].apply(route,silce.call(arguments,1))
       
       // https://github.com/expressjs/express/blob/master/lib/router/route.js
       Route.prototype[method] = function(){

        var handles = flatten(slice.call(arguments));
    
        for (var i = 0; i < handles.length; i++) {
          var handle = handles[i];
    
          if (typeof handle !== 'function') {
            var type = toString.call(handle);
            var msg = 'Route.' + method + '() requires a callback function but got a ' + type
            throw new Error(msg);
          }
    
          debug('%s %o', method, this.path)
    
          var layer = Layer('/', {}, handle);
          layer.method = method;
    
          this.methods[method] = true;
          this.stack.push(layer);
        }

    }
}

})