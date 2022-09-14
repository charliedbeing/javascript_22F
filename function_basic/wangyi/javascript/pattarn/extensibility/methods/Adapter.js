/** how to change method
 * The name of interface need to change
 * Writing another band new method  instead of rewrite the old method.
 */
var log = (function(){
    return window.console.log;
})()
/** Demo */
// now, we use our developed framework named A which is like jQuery.  => jQuery replace A
/**
 *  $.css();
 *  a.c();
 *  $.on;
 *  a.o;
 */

A.c = function(){
    // do something changces for arguments to adapter the new method in A
    return $.css.call(this,arguments)
}

/** data adapter or param adapter   
 *  in  Vue-route  
 */

var test1= {
    routes:[
        {path:'/',
        components:hello
        },
        {path:'/test',
        components:test
        },
    ]
}

var test1_adapter = {'/':hello,'/test':test};







