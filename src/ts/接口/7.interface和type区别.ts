


interface Ifo{
    name:string
}

interface Ifo{
    age:number
}

// 如果两个接口的名字相同，会做一个合并
const a:Ifo = {
    name:'aaa',
    age:222
}




type Test = {
    name:string
}

// 标识符“Test”重复
// type Test = {
//     name:string
// }



/* 

    大部分可以使用 interface

    联合类型使用 type



*/



export {}