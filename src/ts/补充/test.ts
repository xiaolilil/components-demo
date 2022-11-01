import {add, add2} from './模块化'
import {time, price} from './format'
console.log('add',add(20,30))
console.log('add',add2(30,90))


console.log('time.format',time.format())
console.log('time.format',price.format())

document.querySelector('div')