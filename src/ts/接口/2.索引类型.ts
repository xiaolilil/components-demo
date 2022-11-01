
// 通过 interface 来定义索引类型

interface IndexFront {
    [index:number]: string
}

const front : IndexFront = {
    0:'html',
    1:'css',
    2:'js',
    3:'vue',
    // 4:'ccc'  可以
    // "aaa":'111'   报错
}

const fronts = ['html', 'css', 'js', 'vue']



interface IHou {
    [name:string]: number
}

const hou:IHou = {
    'c':1972,
    'java':1995,
    'js':1996,
    'ts':2014,
    // 222:'asdsa'
}



export {}