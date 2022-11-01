
interface Iswin {
    swim:() => void
}

interface Fly {
    fly : () => void
}


// 接口支持多继承
interface Iaction extends Iswin , Fly{

}

const action :Iaction = {
    swim(){

    },

    fly(){

    }
}







export {}