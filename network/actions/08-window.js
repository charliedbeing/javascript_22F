const fetch= require('node-fetch')

function hash(...args){
    return args.join(',')
}


function window_it(f, time=50){ 
    let w={}
    let flag= false

    return (...args)=>{
     //   console.log('run anyway-----')
        return new Promise((resolve)=>{
            if(! w[hash(args)]){
                w[hash(args)] ={
                    func:f,
                    args,
                    resolvers :[]
                }
            }

            if(!flag){
                flag = true;
                setTimeout(() => {

                    Object.keys(w).forEach(key=>{
                       const {func,args,resolvers} = w[key]
                       console.log('run once....')
                       func(...args)
                        .then(resp => resp.text())
                        .then(text => {

                            resolvers.forEach(r =>{ 
                                console.log('run anyway-----')
                                r(text)
                            })

                            flag = true;
                            w={}
                        })
                       
                    })
                 
                }, time);
            }

            w[hash(args)].resolvers.push(resolve)
        })
    }
}

const request = window_it(fetch,20) 


request('http://www.baidu.com') 
request('http://www.baidu.com') 
request('http://www.baidu.com') 
request('http://www.baidu.com') 
request('http://www.baidu.com') 
request('http://www.baidu.com') 
request('http://www.baidu.com') 