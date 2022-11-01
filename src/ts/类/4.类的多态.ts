
class Animal{
    action(){
        console.log('run a run')
    }
}

class Dog extends Animal{
    action(): void {
        console.log('dog run')
    }
}

class Fish extends Animal{
    action(): void {
        console.log('fish run')
    }
}

// 多态的目的 是为了写出更加具备通用性的代码
function makeA(animal:Animal[]){
    animal.forEach(i => {
        i.action()
        // 执行重写后的方法
    })
}
makeA([new Dog(), new Fish()])


export{

}