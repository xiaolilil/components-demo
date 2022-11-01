
// 'hello' 也是可以作为类型的， 叫做字面量类型
const msg:'hello' = 'hello'



// 字面量类型 必须和值保持一致
const num :123 = 123


// 字面量类型的意义
// 就是必须结合 联合类型

type Align  = 'left' | 'right' | 'top'

let align: Align = 'right'

align = 'top'








export {

}