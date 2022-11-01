// never  表示永远不会发送值的类型，
// 比如一个函数
// 如果一个函数中是一个死循环 或者 抛出一个异常，那么这个函数不会返回东西
// 那么写 void 类型 或者其他类型作为返回值的类型都不合适，
// 就可以使用 never 类型

function fo(): never {
  // 死循环
  while (true) {}

  // return
}

function fo1(): never {
  // 死循环
  throw new Error();

  // return
}

//-----------------------------

function msg(ingo: number | string) {
  switch (typeof ingo) {
    case "string":
        console.log('msg')
      break;
    case "string":
        console.log('msg')
      break;

    default:
        const check:never = ingo
      break;
  }
}

msg(123)
msg('2222')







export {};
