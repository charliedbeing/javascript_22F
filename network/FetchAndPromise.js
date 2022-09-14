// example 01
const cl= (m)=> console.log(m)

const promise = new Promise((resolve,rejcet)=>{
    resolve('I have finished');
}).then(data=>{
    console.log(data);
    return "Charlie";
}).then(data=>{
    console.log(data)
})

//example 02 

const promise2 = new Promise((resolve, reject)=>{
    reject('error');
}).catch(e=>{
    console.log(e)
})


const test1 = new Promise((resolve,rejcet)=>{
    resolve('I have finished');
}).then(data=>{
    console.log(data);
    return "Charlie";
})

cl(test1)

test1.then(data=>{
    console.log(data);
})



