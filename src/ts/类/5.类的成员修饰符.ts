
/* 
public : 在任何地方可见，公有的属性和方法，默认编写的属性就是 pubic

private ： 仅在同一类中可见、私有的属性或方法

protected ： 仅在类自身及子类中可见，受保护的属性或方法

*/

class M {
    // public name:string = 'asdasd'
        private name :string = 'aaa'

        getName(){
            return this.name
        }
    
        setName(newName){
            this.name = newName
        }
}
const  p = new M()
p.setName('code')



 class Person {
    protected name:string = 'abc'
 }

 class Stu extends Person {
    getName() {
        return this.name   
    }
 }

 const stu = new Stu()
 stu.getName()

export {

}