// 

function sum(num1:number|string|any[]|{name:string}, num2:number|string|any[]|{name:string}){
    // return num1 + num2
    if(typeof num1 === 'number'){

    }else{

    }
}

sum(20,30)
sum(60,30)




// 类型的参数化

// 在定义函数时，不决定参数的类型
// 而是让调用者以参数的形式告知，这里的函数参数应该是什么类型
function test<T>(num1:T,num2:T):T{

    return num1

}


// 调用方式1 ： 明确传类型
test<number>(20,30)

// 传的类型是一个对象
test<{age:number}>({age:11},{age:22})
 


// 调用方式2 ： 类型推导   字面量类型
test(50,10)
test('11','22')




export {}