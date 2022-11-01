
class Person{
    name:string 
    age:number

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }   
    eat(){
        console.log(this.name  + 'eating')
      }
}


/* 
    学生和老师 都有相同的属性和方法
        name  age
        eat

    这个时候可以定义一个 公共类

    子类 继承 父类 里面的属性和方法
*/
class Student extends Person{
    sno?:number 

    constructor(name:string,age:number, sno?:number){

        super(name,age)

        // this.name = name
        // this.age = age
        // this.sno = sno
    }   

    // 方法的重写
    eat(): void {
        // 先调用父类里面的方法，再执行子类的方法
        super.eat()
        console.log('111',111)
    }
    study(){
        console.log('this.name',this.sno+'学习')
    }
}

// class Teacher extends Person{

//     ti:number 
//     teaching(){
//         console.log('this.age',this.ti)
//     }
// }

const stu = new Student('code', 18, 20)
stu.name = 'code'
stu.age = 11
console.log('stu.name',stu.name)
console.log('stu.age',stu.age)
stu.eat()


export{

}