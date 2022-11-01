
// x:number | string   联合类型
function a(x:number | string){
    // 使用联合类型的值时，需要特别小心

    if(typeof x === 'string'){
        x.toUpperCase()
    }else{
        x + 2 
    }


    console.log('x',x)
}

a(11)
a('111')

export {

}