

interface Iinfo {
    name:string
    age:number
    height:number
}

const info = {
    name:'www',
    age:11,
    height:22,
    address:'四川'
}

const p : Iinfo = info


function test(info:Iinfo){
    // 能传进来， 但取不出来
    // console.log('info.address',info.address)
}

// test({
//     name:'www',
//     age:11,
//     height:22,
//     address:'四川'
// })

test(info)



export {}