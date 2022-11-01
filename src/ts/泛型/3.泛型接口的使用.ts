
interface Ifo<T1, T2> {
    name:T1
    age:T2
}


const P:Ifo<string, number> = {
    name:'abv',
    age:22
}



interface Ifo2<T1 = string, T2 = number> {
    name:T1
    age:T2
}

const a:Ifo2 = {
    name:'aaa',
    age:290
}



export {}