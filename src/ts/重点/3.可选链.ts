

type Person = {
    name:string
    friend?:{
        name:string
        age?:number
    }
}

const info:Person  = {
    name:'zs',

}

console.log('info.name',info.name)
// console.log('info.friend',info.friend.age)

// if(info.friend){
//     console.log('info.friend.age',info.friend.name)

//     if(info.friend.age){
//         console.log('info.friend.age',info.friend.age)

//     }
// }

// info 里面可能有 friend  也可能没有
// 没有的话， 就会短路   就是后面的代码都不再执行了  返回undefined
// 有值 就继续执行
console.log('info.friend',info.friend)
console.log('info?.friend',info.friend?.name.length)


export {

}