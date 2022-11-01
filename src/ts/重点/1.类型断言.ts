
// <img id="img" >


// 类型“HTMLElement”上不存在属性“src”   范围太广
// const el = document.getElementById('img')



// 类型断言  as  
const el = document.getElementById('img') as HTMLImageElement

el.src = 'asd;asd'


class Person {

}

class Student extends Person {
    study(){

    }
}


function say(p:Person){
    (p as Student).study()
}

const stu = new Student();

say(stu)




// 3. 了解  as any / unknown
const msg = 'hello'
const num:number = (msg as any) as number
// const num:number = (msg as unknown) as number


export {

}