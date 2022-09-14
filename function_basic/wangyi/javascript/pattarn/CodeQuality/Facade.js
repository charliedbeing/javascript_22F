function Model1(){}

function Model2(){}


function use(){
    Model2(Model1())
}
/**
 * Demo :tab 
 */
function tab(){
    this.dom =null;
}
tab.prototype.initHTML = function(){}
tab.prototype.changeTab= function(){}
tab.prototype.eventBind=()=>{}

tab.prototype.init = function(config){
    this.initHTML(config)
    this.eventBind();
}
/**
 *  in browser, check the ability to support event bind
 */
function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false)
    }else if(dom.attachEvent){
        dom.attachEvent("on"+type, fn)
    }else{
        dom['on'+type]= fn;
    }
}




