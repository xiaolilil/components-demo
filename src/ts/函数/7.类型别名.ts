

// type 用于定义类型别名
type Name = string | number | boolean


type Point = { 
    x: number
    y: number
    z?: number
}



function print(id: Name){
    console.log('id',id)
}

function printPoint(point: Point){

}
printPoint({x:10,y:30})



export {

}