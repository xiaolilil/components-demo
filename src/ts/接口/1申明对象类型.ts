


/* 
1. 通过类型别名来声明类型
type InfoType = {name:string,age:number}

2. 通过接口
    interface

    可定义可选类型
    可定义只读类型


    

*/


type InfoType = {name:string,age:number}

interface IInfoType {
    readonly name :string
    age:number
    friedn?:{
        name:string
    }
}

const info :IInfoType ={
    name:'aaa',
    age:111,
    friedn:{
        name:'vcc'
    }
}

console.log('info.friedn?.name',info.friedn?.name)

console.log('info.name',info.name)

export{}