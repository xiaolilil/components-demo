
// 当一个参数是一个可选类型的时候， 其实类似 是这个参数是
    //                                类型 | undefined 的联合类型
function fo(msg?: string){
    console.log('msg',msg) 
}

// 两个函数表达的是一个意思

function foo(msg: string | undefined){
    console.log('msg',msg) 
}


fo('111')
fo()

foo('111111')
foo(undefined)

export {

}