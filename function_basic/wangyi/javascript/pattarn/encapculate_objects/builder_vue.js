function Vue(options){
    if(! this instanceof Vue){
        console.warn();
    }
    this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

