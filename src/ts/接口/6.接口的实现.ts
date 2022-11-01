

interface Iswim {
    swim: () => void
}


interface Ieat {
    eat:()=> void
}

const a:Iswim = {
    swim(){

    }
}


function foo(swim:Iswim){

}


class Anaimal{

}

// 继承  只能实现单继承，
// 实现  实现接口，类可以实现多个接口
class Fish extends Anaimal implements Iswim,Ieat{
    swim(){
        console.log('233',233)
    }

    eat(){
        console.log('234',234)
    }
}


// 编写一些公共的API， 面向接口编程
function swimA(swim:Fish){
    swim.swim()
}

// 1. 所有实现了接口的类对应的对象，都是可以传入
swimA(new Fish())

// swimA({swim:function(){}})

class Person implements Iswim {
    swim(){
        console.log('2222',2222)
    }
}

// swimA(new Person())



export {}