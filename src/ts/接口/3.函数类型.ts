type Calc = (n1:number,n2:number) => number
// 函数类型 最好还是用  type 别名  阅读性好一点

// 可调用的接口
interface CalcFn {
    (n1:number, n2:number):number
}


function calc(num1:number, num2:number, calcFn: Calc){
    return calcFn(num1, num2)
}   

const add:Calc = (num1,num2) => {
    return num1 + num2
}


calc(12, 20, add)


export {}