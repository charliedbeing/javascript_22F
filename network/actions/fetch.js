
const fetch= require('node-fetch')

/**
 * 1:Promise
 * 2: Resovle (400,500 is resolved)
 * 3: Reject occur when communication process is error
 * 
 */
 const cl =(...m)=> console.log(...m);

//  cl(typeof fetch)


 async function foo(){
    const resp = await fetch("http://www.baidu.com")
    const text = await resp.text()

    cl(text)

 }

foo()






