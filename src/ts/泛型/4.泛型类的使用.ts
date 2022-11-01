

class Point<T>{
    x: T
    y:T

    constructor (x:T, y:T){
        this.x = x
        this.y = y
    }   
}

const p = new Point('11','22')
const p2 = new Point<string>('11','22')
const p3:Point<string> = new Point('11','22')


const names: stirng[] = ['aa','bb','cc'] 
const names2: Array<string> = ['aa','bb','cc'] 






export {}