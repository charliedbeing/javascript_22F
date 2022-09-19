 const PENDING =1;
 const FULLFILLED =2;
 const REJECTED =3;

 class Promise__{

    constructor(executor){
        this.state = PENDING

        const resolver =(value)=>{
            if(this.state === PENDING){
                this.value = value
                this.state = FULLFILLED

                for(let [onFullfillee,resolver] of this.allpending){
                    const x= onFullfillee(this.value)
                    resolver(x)
                }
            }
        }

        const rejector=(error)=>{

        }

        this.allpending=[]

        executor(resolver,rejector)
    }

    then(onFullfilee){
        return new Promise((resovle,reject)=>{
            switch(this.state){
                case PENDING:
                    this.allpending.push([onFullfilee,resovle])
                    break
                case FULLFILLED:
                    
                    const x = onFullfilee(this.value) // 
                    resovle(x)
                    break
            }
        })
    }
 } 

 /**
  * changet an asynchronous behavoir to anasynchronous value , and then use Promise to encapsulate .
  */
 
 class Promise_{

    constructor(executor){

        this.state = PENDING
     

        function getValue(value,onFullfill,resolve){
            if(value instanceof Promise_){
                value.then(data=>{
                    return getValue(data,onFullfill,resolve)
                })
            }else{
                const x = onFullfill(value);
                resolve(x)
            }
        }


        const resolver =(value)=>{
            if(this.state === PENDING){
                this.value = value
                this.state = FULLFILLED

                for(let [onFullfillee,resolver] of this.allpending){

                    getValue(this.value,onFullfillee,resolver)
                }
            }
        }

        const rejector=(error)=>{

        }

        this.allpending=[]
        this.getValue = getValue;

        executor(resolver,rejector)
    }

    then(onFullfilee){
        return new Promise_((resolve,reject)=>{
            switch(this.state){
                case PENDING:
                    this.allpending.push([onFullfilee,resolve])
                    break
                case FULLFILLED:
                    this.getValue(this.value,onFullfilee,resolve)                  
                    break
            }
        })
    }
 } 

 function test(){
    const p = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(100)
        },500)
   
    }).then(data=>{
        console.log(data)
        return 'abc'
    }).then(data=>{
        console.log(data)
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Charlie is good')
            },500)
        })
    }).then(data=>{
        console.log(data)
    })
 }

//  test();


 function test2(){
    const p = new Promise_((resolve,reject)=>{

        setTimeout(()=>{
            resolve(100)
        },500)
   
    }).then(data=>{
        console.log(data)
        return 'abc'
    }).then(data=>{
        console.log(data)
        return new Promise_((resolve)=>{
            const p = new Promise_((resolve,reject)=>{
                resolve('Charlie Charlie Ding')
            })

           resolve(p)
     
        })
    }).then(data=>{
        console.log(data)
    })
 }

 test2()