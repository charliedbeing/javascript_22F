/**
 * For example, there are one hundred kinds of pop windows, each kind of pop has same actions(reused) but with different
 * context and styles, So we do not be necessary to create one hundred pop object, 
 * We can just create one object which have the same actions and pass by different params to 
 * repesent different context and styles of each pop window.
 * 
 * the other 99 object share the same action and show  to reuse the code .
 * 
 * we want to try 100 suit cloths, we totally not necesarily invite 100 models to try 100 piece of cloths, 
 * we can invit one model to try 100 times .
 */

function Pop(){

}

Pop.prototype.action= function(){}
Pop.prototype.show= function(text, style){}


var popArr = [
    {text:'this is window1', style:[400,400]},
    {text:'this is window2', style:[400,600]},
]

var popWindow = new Pop()
for (var i =0;i< popArr.length;i++){
    popWindow.show(popArr[i])
}

/**
 * Upload demo:
 */

// original

function uploader(fileType,file){
    this.fileType = fileType;
    this.file =file;
}
uploader.prototype.init = function(){
    //init html ui
}

uploader.prototype.delete = function(){
    // remove the html ui after don't need
}
uploader.prototype.uploading= function(){
    // upload
}

var fileobj1, fileobj2, fileobj3,fileobj4;

new uploader('img',fileobj1);
new uploader('txt',fileobj2);
new uploader('img',fileobj3);
new uploader('pdf',fileobj4);

//upgrade by flyweight pattern

function upLoader(){

}

upLoader.prototype.init= function(){}
upLoader.prototype.delete = function(){}
upLoader.prototype.uploading = function(type,file){}

/**
 * the object's private fields are extracted to a outside data object 
 */
filesArr =[
    ['img',fileobj1],
    ['txt',fileobj2],
    ['img',fileobj3],
    ['pdf',fileobj4]
]

var upLoaderObj = new upLoader()

for(var i =0;i< filesArr.length;i++){
    upLoaderObj.uploading(filesArr[i][0],filesArr[i][1]);
}

/**
 * jQuery extend method
 * 
 * don't repeat youself.
 */
$.extend({a:1})
$.extend({a:1},{b:2}) // {a:1, b:2}

function extend(){
    if(arguments ==1){
        for(var item in arguments[0]){
            this[item] = arguments[0][item];
        }
    }else{
        for(var item in arguments[1])
        {
            arguments[0][item]= arguments[1][item];
        }
    }

}
/**  */
function extend_upgrade(){
    var from, to ;

    if(arguments==1){
        from =arguments[0];
        to= this;
    }else{
        from = arguments[1]
        to= arguments[0]
    }

    for(var item in from){
        to[item]= from[item]
    }

}