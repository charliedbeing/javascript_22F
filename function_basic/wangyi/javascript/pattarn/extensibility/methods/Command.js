/** how to design method  decoupling the caller way and the implement way, then they both can changed individuallay
 *  so the command is a kind of interface and try to keep it stable , 
 *  and exectue parse layer work as a cache layer to digest some change internally(for example some features in acions changes)
 *  to keep the outside command interface stable.
 *  
 ** let person who use the function, just care about how to use this command, and not care about how this command implement
    decoupling implementaion and calling and let two ways do not depend on each other
    the command called can be very varied 
    
 * 1: code,  => machine code then execute in phsical machine. 
 * 2: webpack  you just write configure file to command webpack do what we want it do for us
 * 3: all the command in linux bash 
 * 4: echarts,  
 * 
 * comparing like these:
 * 1: method - call it
 * 2: action  and execute layer, => command to execute layer and then it call  the real feature in action
 */

    var command =(function(){
        var action ={}  // real features here 
        return function execute(){  // introducing execute layer to parse the special command passed by caller 
            // parse the special command
            // call the real features in aciton;
        } 
    })()
/**
 * Example:
 * one Canvas drawing 
 */
/** method one ,traditional => low layer to use */
function myCanvas(){

}
myCanvas.prototype.drawCircle= function(){}
myCanvas.prototype.drawRect= function(){}

/** command patter to design Canvas drawing 
 * There are all kinds of possibilities can happen when just using some basic drawing features like circle, triangle,and rectangle.
 *  all kinds of possibilities  => passed command object 
 *  some basic drawing features like circle, triangle,and rectangle => action and execute layer to parse the passed command object.
*/

var canvasData = [
    {
        type:'circle',
        data:[10,2,4]
    },
    
    {
        type:'rect',
        data:[10,2,4,4]
    },
]

var command = (function(){
    var action={
        drawCircle: function(){},
        drawRect: function(){}
    }

    return function execute(commander){

    }
})()

command(canvasData)

/**
 * Example two: 
 * create a gallery, the amount of picture and how to arrange them can be varied
 * Varied:  encapsulate a command configurable file or json object.
 * Stable:  actions and execute layer to parse the configurable json object.
 */

var gallery =(function(){
    var actions={
        initHTMLContainer:function(){},
        presentOnePicture:function(){/* create */}   
    } 
    return function execute(commander){
        var container = actions.initHTMLContainer(commander.containerStyle)

        commander.photos.array.forEach(photo => {
           var domphoto = actions.presentOnePicture(photo)
           container.applychild(domphoto)

        });
    }
})()

var photoData = {
    containerStyle:'style1',
    photos:[
        {url:'1.jpg',size:[100,200],style:{}},
        {url:'1.jpg',size:[100,200],style:{}}
    ]
}

gallery(photoData)
