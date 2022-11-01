

// type Local = 'lefy' | 'right'

enum Local {
    LEFT = 0, // 默认为 0 自动递增  后面 1 2 3 
    RIGHT,
    TOP,
    BOTTOM
}

enum Local2 {
    LEFT = 100, //  自动递增  后面 200 300 400
    RIGHT,
    TOP,
    BOTTOM
}

enum Local3 {
    LEFT = "LEFT", //  自动递增  后面 200 300 400
    RIGHT = "RIGHT",
    TOP = "TOP",
    BOTTOM = "BOTTOM"
}


let d:Local3 = Local3.RIGHT



function trun(local:Local){

}
trun(Local.LEFT)
trun(Local.RIGHT)


export {}