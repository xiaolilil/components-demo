
// 打印一个点 
//   x   y   z  { x:  , y:  , z?:}  =>  对象类型

// z?:number   可选类型
function print(point: {x:number, y:number, z?:number}){
    console.log('point.x',point.x)
    console.log('point.x',point.y)
    console.log('point.z',point.z)  // undefined   没传显示 undefined
}

print({x:11,y:22})
print({x:11,y:22,z:20})





export {

}