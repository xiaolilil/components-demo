
class Person{
    name:string = ''
    age:number = 0

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
    sno:number = 11

    study(){
        console.log('this.name',this.sno+'学习')
    }
}

class Teacher extends Person{

    ti:number = 10
    teaching(){
        console.log('this.age',this.ti)
    }
}

const stu = new Student()
stu.name = 'code'
stu.age = 11
console.log('stu.name',stu.name)
console.log('stu.age',stu.age)
stu.eat()


export{

}