

// 函数作为参数时，函数在参数中如何编写类型
function fo(){

}

type Fo = () => void

function bar(fn : Fo){
    fn()
}

bar(fo)



// 2. 定义常量时，编写函数的类型
type ageFnTypes = (num1:number, num2:number) => void // void 也没报错， 因为 void 可以返回任何类型  比较宽泛的类型
type ageFnType = (num1:number, num2:number) => number  // 返回 num1 + num2 number类型

const age : ageFnType = (num1:number,num2:number) => {
    return  num1 + num2
}

let msg:string = 'hello'









export {

}