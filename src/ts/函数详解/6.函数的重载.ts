

type AddType = number| string

/* 
    联合类型有两个缺点
    1. 进行很多的逻辑判断 (类型缩小)
    2. 返回值的类型依然是不能确定
*/

function add(a1:AddType,a2:AddType){
    // return a1 + a2
    if(typeof a1 === 'number' && typeof a2 === 'number'){
        return a1 + a2
    }else if(typeof a1 === 'string' && typeof a2 === 'string'){
        return a1  +  a2
    }
}

add(12,20)


// ========================

/* 
    函数的重载： 函数的名称相同，但是参数不同的几个函数，
        就是函数的重载


    调用的时候，根据参数进行匹配具体调用哪一个

*/


function add1(a1:number,a2:number):number; // 没有函数体
function add1(a1:string,a2:string):string;

function add1(a1:any,a2:any):any { // 执行这里的函数体
    if(typeof a1 === 'string' && typeof a2 === 'string'){
        return a1.length + a2.length
    }
    return a1  + a2
}

// res : number
let res = add1(20,30)

let res2 = add1('11', '22')


// 在函数的重载中， 实现函数是不能被随便调用的
// add1({name:'111'}, {age:11})











export{

}