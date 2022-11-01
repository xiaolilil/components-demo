
function test(){

    // string : ts 中的字符串类型
    const name:string = '测试字符串'

    // String : js 中的字符串包装类的类型
    let name2:String = '测试String'


    /* 
    js 中的包装类

    String
    Number
    Boolean
    
    */



    let num:number = 123;

    /* 
    
    每个变量 都写一个 string number boolean  比较麻烦

    ts 中有类型推导  推断

    默认情况下： 
        会将赋值的值的类型，作为前面标识符的类型
        这个过程称为 类型推导 / 推断

    */
    // 类型推导
    let abc = 1223;  // 推导出 abc 的类型 是 number  后续不能更改
    // abc = '123'








    
}

export {
    test
}
