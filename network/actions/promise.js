const cl = (...m)=>console.log(...m)

function test1(){
    var cal_step_1 = new Promise((resolve, reject)=>{
        resolve(10)
    })
    
    cl(cal_step_1)
    
    cl(cal_step_1.constructor)
    
    cl('---------------')
    var res = cal_step_1.then(data=>{
        cl('line 13 ',data)
        return 20;
    })
    
    cl(res)
    
    cl(res.constructor)
    
    cl('--------ee-------')
    res.then(data=>
        cl('line23 ',data))
}

/**
 * catch error and then also can return another brand new Promise to continue 
 * to do calulate 
 * 
 */
function test2(){
    var cal_step_1 = new Promise((resolve, reject)=>{
        reject(10)
    })
    
    cl(cal_step_1)
    
    cl(cal_step_1.constructor)
    
    cl('-----------11----')

    // var res = cal_step_1.then(data=>{
    //     cl('line 13 ',data)
    //     return 20;
    // })

    var errorAndNext=  cal_step_1.catch(e=>{
        cl(e);
        return 100;
    })



    
    cl(errorAndNext)
    
    cl(errorAndNext.constructor)
    
    cl('--------22-------')
    errorAndNext.then(data=>
        cl('line57 ',data));
  
    cl('--------33-------')

    var errorAndNext2 =  cal_step_1.catch(e=>{
            cl(e);

            return new Promise((resolve,reject)=>{
                resolve(100)
            });
        }) 

       cl(errorAndNext2);

       errorAndNext2.then(data=>cl(data))
}



// test2()


/**
 * RestFul : value
 * 
 * 
 */

function test3(){
    // const p1 = new Promise((resovle,reject)=>{
    //     resovle(100)
    // }).then( data=>{
    //     cl(data)
    //     return 'abc'
    // }
    // ).then(data=>{
    //     cl(data)
    // })

    const p2 = new Promise((resovle,reject)=>{
        resovle(100)
    }).then( data=>{
        cl(data)
        return new Promise((resolve,rejct)=>{
            resolve(200)    
        })
    }
    ).then(data=>{
        cl(data)
    })
}

// test3();

/**
 * when wait executed, from 0-1000ms state is pending ,and then fulfilled,  
 */
function wait(ms=1000,data){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },ms)
    })
}

function test4(){
    const p = new Promise((resolve,reject)=>{
        resolve(100)
    }).then(data=>{
        cl(data)
        return wait(3000,'charlie')
    }).then(data=>{
        cl(data)
    })
}

// test4();

function test5(){
    const p = new Promise((reslove,reject)=>{
        reject('some error')
    })
    .then(data=>cl(data))
    .catch(ex=>{
            cl(ex)
            return 'abcd'
    }).then(data=>{
        cl('here------------', data)
    })
}

// test5(); 


async function foo(){
    // cl('-----------before one----------')
    // const one = await wait(1000,1);
    // cl('-----------after one before two----------')
    // const two = await wait(1000,2)
    // cl('-----------after  two----------')
    // console.log(one+two);

    // const x = await Promise.resolve(200)

    // cl(typeof x)
    // cl(x)

    try {
        const y = await Promise.reject('error')

        cl(typeof y)
        cl(y)
    } catch (error) {
        
    }
  


    // return one+two


}

// foo().then(data=>{
//     cl(data)
// })


/**
 * Promise race all sesolve and reject are all static facotry method
 * since they all return a Promise instance.
 * 
 * concurrency and race
 * 
 */
function test6(){

    // Promise.all([wait(200,1),wait(4000,2)])
    // .then(data=>{
    //     cl(data)
    // })


    var race = Promise.race([wait(200,1),wait(4000,2)])
    .then(data=>{
        cl('data',data)
    })

    cl(typeof race)
    cl(race.constructor)
}

test6();

