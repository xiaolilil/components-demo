

// 1. typeof 类型缩小
type IDType = number | string
function p(id: IDType){
    if(typeof id === 'string'){
        id.toUpperCase()
    }else{
        console.log('id',id) // number 类型
    }
}




// 2. 平等的类型缩小 (=== == !== != switch)
type Location = 'left' | 'right' | 'top' | 'bottom'
function aa(location:Location){
    console.log('location',location)
    if(location === 'left'){
        console.log('location',location)
    }

    switch (location) {
        case 'left':
            console.log('location',location) // left 类型
            break;
        case 'right':
            console.log('location',location) // right  类型
        break;
        default:
            break;
    }
}



// 3. instanceof
function bb(time:string | Date){
    if(time instanceof Date){
        console.log('time.toUTCString()',time.toUTCString())
    }else{
        console.log('time',time)  // string 类型
    }
    // console.log('bb.toLocalString()',bb.toLocalString())
}



class Student {
    study(){

    }
}

class Teacher {
    teaching(){

    }
}

function work(p:Teacher | Student){
    if(p instanceof Student){
        p.study()
    }else{
        p.teaching()
    }
}





// 4. in 
type Fish = {
    swim:() => void
}

type Dog = {
    run : () => void
}

function walk(animal: Fish | Dog){
    if('swim' in animal){
        animal.swim()  // Fish 类型
    }else{
        animal.run()
    }
}

const fish: Fish = {
    swim(){

    }
}
walk(fish)








export {

}