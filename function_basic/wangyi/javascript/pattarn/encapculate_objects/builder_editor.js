/***
 * In order to build a complex object which will be split to differnt subpart to handle a part of the whole 
 * funciton.
 * 1: one big complex object changes into many small simple object
 * 2: in each simple object ,it can handle itself function at ease ,moreover, it can call another simple 
 * object easily ,since they are all in the same score of the inner of the outer whole builder object: Editor.
 * 
 */
function Editor(){
    this.initer = new initHTML();
    this.fontControll = new fontControll();
    this.stateControll = new stateControll();

}

function initHTML(){

}

initHTML.prototype.initStyle = function(){}
initHTML.prototype.renderDom = function(){}

function fontControll(){

}
fontControll.prototype.changeColor= function(){}
fontControll.prototype.changeFontSize = function(){}

function stateControll(){
    this.state=[]; 
    this.nowState= 0;
}

stateControll.prototype.saveState= function(){}

stateControll.prototype.stateBack =function(){
    var state = this.state[this.nowState-1];
    this.fontControll.changeColor(state.color);
    this.fontControll.changeFontSize(state.size);
}


stateControll.prototype.stateGo= function(){}

window.Editor = Editor;


