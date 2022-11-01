
interface Iswin {
    swim:() => void
}

interface Fly {
    fly : () => void
}



type test = number | string

type local = 'left' | 'right' | 'top'


// 另一种组件类型的方式  交叉类型

type Wtype = number  & string



type Mytype = Iswin | Fly
type Mytype2 = Iswin & Fly

const obj:Mytype = {
    swim(){

    }
}

const obj2 :Mytype2 = {
    swim(){

    },

    fly(){

    }
}



export {}