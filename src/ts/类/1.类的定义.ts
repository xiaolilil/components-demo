

class Person {
    // 属性和方法
    // name:string = ""
    // age:number = 1
    name:string 
    age:number 

    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }   

    eat(){
      console.log(this.name  + 'eating')
    }
}

const p = new Person('aaa',20)

console.log('p.name',p.name)
console.log('p.age',p.age)








export {

}