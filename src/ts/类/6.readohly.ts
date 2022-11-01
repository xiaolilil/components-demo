

class Person {

    // 只读属性可以在  constructor 构造器中 赋值
    // 赋值之后就不能修改了

    // 属性本身不能进行修改，但是如果它是对象类型，
    // 对象中的属性是可以修改
    readonly name:string 
    age?:number
    readonly friend?: Person

    constructor(name:string, friend?:Person){
        this.name = name
        this.friend = friend
    }
}
const p = new Person('code', new Person('codewh'))


console.log('p.name',p.name)
console.log('p.friend',p.friend)

if(p.friend){
    p.friend.age = 111

}
// 无法分配到 "name" ，因为它是只读属性
// p.name = 'asdas'







export {

}