

const ins = {
    name : 'why',
    age : 222
}


type Method = 'get' | 'post' | 'delete' | 'put'


type Request = {
    url :string,
    method: Method
}


function request(url:string, method: Method){

}

const options: Request = {
    url : 'hsahdlals',
    method:'post'
}


// 没有类型 Method 之前，会报错
// 因为 options 里面的 method 是string 类型， 可能是 ；'get' 也可能是 '123' 
// 但上面规定 是 'get' | 'post'
request(options.url, options.method )

// request(options.url, options.method as Method)





const options1 = {
    url : 'hsahdlals',
    method:'post'
} as const
//  as const   字面量 推导











export {

}