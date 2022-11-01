
type ThisType = {name:string}

function wating(this:ThisType, msg:string){
    console.log('this.name',this.name)
}

// this 是可以被推导出来的
const info = {
    name: 'why',
    wating: wating
}

info.wating('aaa')

wating.call({name:'hello'}, 'heihei')
wating.apply({name:'hello'}, ['哈哈啊'])




export {

}