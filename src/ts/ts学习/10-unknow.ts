
function fo(){
    return 123
}

function fo1(){
    return '123'
}

let flag  =true;


// 不确定 的类型 用  unknow
// unknow 类型 只能赋值给 any  和 unknown  类型
// any 类型 可以复制给 任意类型


let res:unknown

if(flag){
   res = fo()  // number 123
}else {
    res = fo1()  // string  '123'
}
// res 的类型 不知道


let f1:string = res










export {

}