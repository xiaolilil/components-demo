export function getList(arr: any[], id: any) {
  const list: any[] = []

  arr.forEach((i: any) => {
    if (i.pid == id) {
      list.push(i)
      i.children = getList(arr, i.id)
    }
  })

  return list
}
