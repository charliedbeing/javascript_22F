/**
 * Find all attributes from an object according some conditions
 */

obj={
    name:'dzg',
    age:40,
    address:[
        {
        streetNo:38,
        streetName:'Catalina Cres',
        cityName:'Richmond Hill',
        },

        {
            streetNo:88,
            streetName:'Catalina Cres',
            cityName:'Richmond Hill',
            
        }],

    education:{
        primary:{
            e_p_schoolName:'',
            address:''
        },
        highSchool:{
            e_h_schoolName:'',
            address:''
        },
        collegae:{
            e_c_schoolName:'',
            address:''
        },
        univercity:{
            e_u_schoolName:'',
            address:''
        }

    }
}

function all_attributes(obj,arrs=[]){
    for(var key in obj){
        if(typeof key !=='object' && typeof key === 'string'){
            //console.log(key)
            arrs.push(key)
            if(typeof obj[key] === 'object'){
                all_attributes(obj[key],arrs)
            }
        }
    }
    return arrs
}

var test7 = all_attributes(obj)

// console.log(test7)


function find_attr(obj,fn){
    var attrs = all_attributes(obj)

    console.log(attrs)
    return attrs.filter(fn)
}

var test8 = find_attr(obj,(a)=>{ return a.includes('_')})

console.log(test8)


var obj2={
    num1:1,
    num2:2,
    num3:3,
    num4:4,
    num5:5
}

function findProperty(obj, fn){
    var _obj = Object.create(obj)
    var _propertyArr =[]

    for(var item in _obj){
        if( fn.call(_obj, _obj[item],item)){
            _propertyArr.push(_obj[item])
        }
    }
    return _propertyArr;
}

var test8 = findProperty(obj2,(value,name)=>{return value%2 === 0})

console.log(test8)






