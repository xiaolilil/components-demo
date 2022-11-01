
function get(arg:string|any[]){
    return arg.length
}


interface Ilength {
    length:number
}

function gets<T extends Ilength>(arg:T){
    return arg.length
}
gets('sadasd')
gets([1,2,3,4])
// gets(111)

export {}