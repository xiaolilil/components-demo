
// msg?:string   -->   undefined | string
// 可选类型  相当于  这样的联合类型

function pmsg(msg?:string){
    // msg!.length   msg !  非空断言   保证这里一定有值
    console.log('msg.length',msg!.length)


    if(msg){
    console.log('msg.length',msg.length)
    }
}


pmsg('asdadsa')
pmsg()


export {

}