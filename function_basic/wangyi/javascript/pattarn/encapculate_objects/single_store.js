
/**
 *  in order to make only one object in the global score to avoid some repetitive operations or some 
 *  mutual interference
 */
var container =[]

function store(){
    // console.log('before',this)
    this.store ={};
    container.push(this.store)
    // console.log('after',this.store);

    if(store.install){
        return store.install;
    }
    store.install = this;
}

store.install = null;

var s1 = new store();

console.log(s1.store)

var s2 = new store();


console.log(s1 === s2)


s1.store.a =10;

console.log(s2.store.a)

console.log(s2.store)

s2.store.b=100;


var s3 = new store()


console.log(s3.store)


console.log(container)


/**
 * Vue-Router
 */

let _Vue;

function install(Vue){
    if(install.installed && _Vue === Vue) return
   
    install.installed = true;

    _Vue = Vue
}





